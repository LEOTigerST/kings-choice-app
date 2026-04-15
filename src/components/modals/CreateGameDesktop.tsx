import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  onClose: () => void;
}

export const CreateGameDesktop: React.FC<Props> = ({ onClose }) => {
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
      setRoomId('KNT-' + Math.floor(100 + Math.random() * 900) + '-' + Math.floor(100 + Math.random() * 900) + '-PX');
      setStatus('waiting');
    }, 1500);
  };

  const handleCopy = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
      {/* Main Modal Content */}
      <div className="relative w-full max-w-xl bg-surface-container-high rounded-xl overflow-hidden shadow-2xl border border-primary/20">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-headline font-bold text-white tracking-tight uppercase">
                {t('dialogs.create_new_room')}
              </h2>
              <p className="text-xs text-on-surface-variant font-label tracking-widest mt-1">
                ESTABLISHING ENCRYPTED SESSION...
              </p>
            </div>
            <button onClick={onClose} className="text-on-surface-variant hover:text-white transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Form Content */}
          <div className="space-y-6">
            {/* Room Name */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant tracking-widest uppercase ml-1">
                {t('dialogs.room_name')}
              </label>
              <div className="relative">
                <input 
                  type="text"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  disabled={status !== 'idle'}
                  className="w-full bg-surface-container-lowest border-none rounded-lg p-4 text-white font-headline tracking-wider focus:ring-1 focus:ring-primary placeholder:text-outline/50" 
                  placeholder="ENTER_SESSION_ID" 
                />
              </div>
            </div>

            {/* Public vs Private */}
            <div className="grid grid-cols-2 gap-4">
              <label className="relative cursor-pointer group">
                <input 
                  type="radio" 
                  name="privacy" 
                  className="peer sr-only" 
                  checked={isPublic} 
                  onChange={() => status === 'idle' && setIsPublic(true)}
                  disabled={status !== 'idle'}
                />
                <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/20 peer-checked:bg-primary/5 peer-checked:border-primary transition-all text-center">
                  <span className="material-symbols-outlined block text-on-surface-variant peer-checked:text-primary mb-1 text-center w-full">public</span>
                  <span className="text-sm font-headline font-bold text-on-surface-variant peer-checked:text-primary tracking-widest uppercase">
                    {t('dialogs.public')}
                  </span>
                </div>
              </label>
              <label className="relative cursor-pointer group">
                <input 
                  type="radio" 
                  name="privacy" 
                  className="peer sr-only" 
                  checked={!isPublic} 
                  onChange={() => status === 'idle' && setIsPublic(false)}
                  disabled={status !== 'idle'}
                />
                <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/20 peer-checked:bg-secondary/5 peer-checked:border-secondary transition-all text-center">
                  <span className="material-symbols-outlined block text-on-surface-variant peer-checked:text-secondary mb-1 text-center w-full">lock</span>
                  <span className="text-sm font-headline font-bold text-on-surface-variant peer-checked:text-secondary tracking-widest uppercase">
                    {t('dialogs.private')}
                  </span>
                </div>
              </label>
            </div>

            {/* Room Password */}
            <div className={`space-y-2 ${isPublic ? 'opacity-50 pointer-events-none' : ''}`}>
              <label className="text-xs font-bold text-on-surface-variant tracking-widest uppercase ml-1">
                {t('dialogs.room_password')}
              </label>
              <div className="relative flex items-center bg-surface-container-lowest rounded-lg border border-transparent focus-within:ring-1 focus-within:ring-primary overflow-hidden">
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isPublic || status !== 'idle'}
                  className="w-full bg-transparent border-none p-4 text-white font-headline tracking-widest focus:outline-none focus:ring-0" 
                  placeholder={isPublic ? "********" : "Enter Password"} 
                />
                {!isPublic && password && status === 'waiting' && (
                  <button 
                    onClick={() => handleCopy(password)}
                    className="absolute right-4 text-on-surface-variant hover:text-white transition-colors"
                  >
                    <span className="material-symbols-outlined">content_copy</span>
                  </button>
                )}
              </div>
            </div>

            {/* Auto Launch Toggle */}
            <label className="flex items-center justify-between p-4 rounded-xl bg-surface-container-lowest cursor-pointer group select-none">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-dim">bolt</span>
                <div>
                  <p className="text-sm font-headline font-bold text-white tracking-wide">
                    {t('dialogs.auto_launch').toUpperCase()} SESSION
                  </p>
                  <p className="text-[10px] text-on-surface-variant tracking-tight">STAGING READY WHEN FULL</p>
                </div>
              </div>
              <div className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={autoLaunch} 
                  onChange={() => status === 'idle' && setAutoLaunch(!autoLaunch)}
                  disabled={status !== 'idle'}
                />
                <div className="w-11 h-6 bg-outline-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </div>
            </label>
          </div>

          {/* Footer Actions */}
          <div className="mt-10 flex items-center gap-6">
            {status === 'idle' && (
              <button 
                onClick={handleCreate}
                disabled={!roomName}
                className={`flex-1 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-extrabold uppercase tracking-widest rounded-xl transition-all ${!roomName ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_25px_rgba(0,238,252,0.3)] active:scale-[0.98]'}`}
              >
                {t('dialogs.create_room')}
              </button>
            )}
            
            {status === 'creating' && (
               <button disabled className="flex-1 py-4 bg-primary/20 text-primary border border-primary/20 font-headline font-bold rounded-xl flex items-center justify-center gap-3">
                 <span className="material-symbols-outlined animate-spin text-sm">sync</span>
                 {t('dialogs.establishing_session')}
               </button>
            )}

            {status === 'waiting' && roomId && (
               <button 
                 onClick={onClose}
                 className="flex-1 py-4 bg-surface-container-highest border border-outline-variant/30 text-white font-headline font-bold rounded-xl hover:bg-white/5 flex items-center justify-center gap-3 transition-colors active:scale-95 uppercase tracking-widest"
               >
                 {t('dialogs.cancel_initiation')}
               </button>
            )}

            {status === 'idle' && (
              <button onClick={onClose} className="px-6 text-on-surface-variant hover:text-error transition-colors font-headline font-bold text-sm uppercase tracking-wider">
                {t('dialogs.cancel')}
              </button>
            )}
          </div>

          {/* Status Region (Shown only when creating/waiting) */}
          {(status === 'creating' || status === 'waiting') && (
            <div className="mt-8 p-4 rounded-xl bg-surface-container-lowest border border-primary/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <span className="material-symbols-outlined text-primary text-sm animate-pulse">sync_saved_locally</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant tracking-[0.2em] uppercase">Status</p>
                  <p className="text-xs font-headline font-bold text-primary tracking-wider">
                    {status === 'creating' ? t('dialogs.establishing_session') : t('dialogs.waiting_for_players')}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-on-surface-variant tracking-[0.2em] uppercase mb-1">{t('dialogs.waiting_for_players')}</p>
                <div className="flex items-center justify-end gap-2">
                  <div className="flex gap-1">
                    {[1, 2, 3].map((_, idx) => (
                      <span key={idx} className={`w-1.5 h-1.5 rounded-full ${idx < playersJoined ? 'bg-primary shadow-[0_0_8px_rgba(143,245,255,0.8)]' : 'bg-surface-variant'}`}></span>
                    ))}
                  </div>
                  <span className="text-sm font-headline font-black text-white tracking-tighter">{playersJoined} / 3</span>
                </div>
              </div>
            </div>
          )}

          {/* Success Area (Room ID and Start Game when waiting) */}
          {status === 'waiting' && roomId && (
            <div className="mt-8 pt-8 border-t border-outline-variant/10 animate-in slide-in-from-bottom flex flex-col gap-4">
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-primary/20 flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-on-surface-variant font-bold tracking-widest uppercase mb-1">
                    {t('dialogs.session_id_assigned')}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-headline font-black text-primary tracking-tighter">{roomId}</span>
                    <button 
                      onClick={() => handleCopy(roomId)}
                      className="text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">content_copy</span>
                    </button>
                  </div>
                </div>
                <button 
                  disabled={playersJoined < 3}
                  className={`px-6 py-3 font-headline font-black uppercase tracking-tighter rounded-lg transition-transform ${
                    playersJoined === 3 
                    ? 'bg-tertiary text-on-tertiary shadow-[0_0_15px_rgba(255,231,146,0.3)] hover:scale-105 active:scale-95 cursor-pointer' 
                    : 'bg-surface-container-high text-on-surface-variant cursor-not-allowed opacity-50'
                  }`}
                >
                  {t('dialogs.start_game')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
