import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  onClose: () => void;
}

export const CreateGameMobile: React.FC<Props> = ({ onClose }) => {
  const { t } = useTranslation();
  
  const [roomName, setRoomName] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [autoLaunch, setAutoLaunch] = useState(false);
  const [password, setPassword] = useState('');
  
  type Status = 'idle' | 'creating' | 'waiting';
  const [status, setStatus] = useState<Status>('idle');
  const [roomId, setRoomId] = useState<string | null>(null);
  const [playersJoined, setPlayersJoined] = useState(1);
  
  const handleCreate = () => {
    if (!roomName) return;
    setStatus('creating');
    setTimeout(() => {
      setRoomId('#KINETIC-' + Math.floor(1000 + Math.random() * 9000));
      setStatus('waiting');
    }, 1500);
  };
  
  const handleCopy = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
      {/* Dialog Container */}
      <div className="w-full max-w-md bg-[rgba(31,31,38,0.9)] backdrop-blur-md rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-outline-variant/20">
        
        {/* Header Section */}
        <div className="px-6 pt-8 pb-4">
          <div className="flex justify-between items-start mb-2">
            <h1 className="font-headline text-3xl font-bold tracking-tight text-primary drop-shadow-[0_0_10px_rgba(143,245,255,0.3)]">
              {t('dialogs.create_game')}
            </h1>
          </div>
          <p className="font-label text-xs text-on-surface-variant uppercase tracking-[0.2em] opacity-60">
            Session Configuration Alpha
          </p>
        </div>

        {/* Form Content */}
        <div className="px-6 space-y-6 pb-8">
          {/* Room Name Field */}
          <div className="space-y-2">
            <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest ml-1">
              {t('dialogs.room_name')}
            </label>
            <div className="relative group">
              <input 
                type="text" 
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                disabled={status !== 'idle'}
                className="w-full bg-surface-container-lowest border-0 rounded-xl px-4 py-4 text-on-surface font-headline focus:ring-1 focus:ring-primary transition-all shadow-[inset_0_0_0_1px_rgba(143,245,255,0.1)]" 
                placeholder={t('dialogs.room_name_placeholder')} 
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-40 group-focus-within:text-primary group-focus-within:opacity-100 transition-all">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>sports_esports</span>
              </div>
            </div>
          </div>

          {/* Toggles Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Public/Private */}
            <div className="bg-surface-container-low p-4 rounded-xl space-y-3">
              <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
                {t('dialogs.visibility')}
              </span>
              <div className="flex items-center justify-between">
                <span className={`font-headline text-sm uppercase ${isPublic ? 'text-primary' : 'text-secondary'}`}>
                  {isPublic ? t('dialogs.public') : t('dialogs.private')}
                </span>
                <button 
                  onClick={() => status === 'idle' && setIsPublic(!isPublic)}
                  disabled={status !== 'idle'}
                  className={`w-10 h-5 rounded-full relative flex items-center px-1 transition-colors ${isPublic ? 'bg-primary/20' : 'bg-secondary/20'}`}
                >
                  <div className={`w-3.5 h-3.5 rounded-full transition-transform duration-300 ${isPublic ? 'bg-primary shadow-[0_0_8px_rgba(143,245,255,0.8)] translate-x-0' : 'bg-secondary shadow-[0_0_8px_rgba(214,116,255,0.8)] translate-x-4'}`}></div>
                </button>
              </div>
            </div>

            {/* Auto-Launch */}
            <div className="bg-surface-container-low p-4 rounded-xl space-y-3">
              <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
                {t('dialogs.auto_launch')}
              </span>
              <div className="flex items-center justify-between">
                <span className={`font-headline text-sm uppercase ${autoLaunch ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {autoLaunch ? t('dialogs.on') : t('dialogs.off')}
                </span>
                <button 
                  onClick={() => status === 'idle' && setAutoLaunch(!autoLaunch)}
                  disabled={status !== 'idle'}
                  className={`w-10 h-5 rounded-full relative flex items-center px-1 transition-colors ${autoLaunch ? 'bg-primary/20' : 'bg-surface-container-highest'}`}
                >
                  <div className={`w-3.5 h-3.5 rounded-full transition-transform duration-300 ${autoLaunch ? 'bg-primary translate-x-4 shadow-[0_0_8px_rgba(143,245,255,0.8)]' : 'bg-on-surface-variant translate-x-0'}`}></div>
                </button>
              </div>
            </div>
          </div>

          {/* Room Password */}
          <div className={`space-y-2 transition-opacity ${isPublic ? 'opacity-40' : 'opacity-100'}`}>
            <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest ml-1">
              {t('dialogs.room_password')}
            </label>
            <div className="relative group">
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isPublic || status !== 'idle'}
                className={`w-full bg-surface-container-lowest border-0 rounded-xl px-4 py-4 text-on-surface font-headline shadow-[inset_0_0_0_1px_rgba(143,245,255,0.1)] focus:ring-1 focus:ring-primary ${isPublic ? 'cursor-not-allowed' : ''}`}
                placeholder={isPublic ? t('dialogs.password_not_required') : "••••••••"} 
              />
              <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${isPublic ? 'text-on-surface-variant' : 'text-outline-variant group-focus-within:text-primary'}`}>
                <span className="material-symbols-outlined">{isPublic ? 'lock' : 'lock_open'}</span>
              </div>
              {!isPublic && password && status === 'waiting' && (
                 <button 
                   onClick={() => handleCopy(password)}
                   className="absolute right-12 top-1/2 -translate-y-1/2 p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                 >
                   <span className="material-symbols-outlined text-[16px]">content_copy</span>
                 </button>
              )}
            </div>
          </div>

          {/* Action Buttons Stack */}
          <div className="space-y-3 pt-4">
            {status === 'idle' && (
              <button 
                onClick={handleCreate}
                disabled={!roomName}
                className={`w-full bg-primary text-on-primary font-headline font-bold py-5 rounded-xl uppercase tracking-widest transition-all shadow-[0_10px_20px_rgba(143,245,255,0.15)] flex items-center justify-center gap-3 ${!roomName ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-110 active:scale-[0.98]'}`}
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
                {t('dialogs.create_room')}
              </button>
            )}

            {status === 'creating' && (
              <button disabled className="w-full bg-primary/20 text-primary font-headline font-bold py-5 rounded-xl uppercase tracking-widest flex items-center justify-center gap-3">
                 <div className="w-4 h-4 rounded-full border-2 border-primary/30 border-t-primary animate-spin"></div>
                 {t('dialogs.establishing_session')}
              </button>
            )}

            {status === 'waiting' && roomId && (
              <>
                {/* Room ID */}
                <div className="flex items-center justify-center gap-2 px-3 py-3 bg-surface-container-highest/40 rounded-xl border border-outline-variant/10">
                  <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">
                    {t('dialogs.session_id')}
                  </span>
                  <span className="font-headline text-sm font-medium text-primary tracking-wider">{roomId}</span>
                  <button 
                    onClick={() => handleCopy(roomId)}
                    className="text-on-surface-variant hover:text-primary transition-colors flex items-center ml-1"
                  >
                    <span className="material-symbols-outlined text-[16px]">content_copy</span>
                  </button>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center justify-between px-5 py-4 bg-surface-container-low/50 rounded-xl border border-outline-variant/10 mb-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">
                      {t('dialogs.creation_status')}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-headline text-sm font-bold text-on-surface tracking-widest">
                        {t('dialogs.players_joined', { joined: playersJoined, total: 3 })}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(143,245,255,1)]"></div>
                    <span className="font-label text-[10px] text-primary font-bold uppercase tracking-widest">{t('common.active')}</span>
                  </div>
                </div>

                <button 
                  disabled={playersJoined < 3}
                  className={`w-full font-headline font-bold py-5 rounded-xl uppercase tracking-widest border transition-all ${
                    playersJoined === 3 
                    ? 'bg-primary text-on-primary border-primary hover:brightness-110 shadow-[0_10px_20px_rgba(143,245,255,0.15)] cursor-pointer' 
                    : 'bg-surface-container-highest/50 text-on-surface-variant/30 border-outline-variant/10 cursor-not-allowed'
                  }`}
                >
                  {t('dialogs.start_game')}
                </button>
              </>
            )}

            {/* Cancel Secondary */}
            <button 
              onClick={onClose}
              className="w-full py-4 text-on-surface-variant hover:text-white font-label text-xs uppercase tracking-[0.3em] transition-colors active:scale-95"
            >
              {status === 'waiting' ? t('dialogs.cancel_initiation') : t('dialogs.cancel')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
