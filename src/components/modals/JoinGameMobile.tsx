import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  onClose: () => void;
}

export const JoinGameMobile: React.FC<Props> = ({ onClose }) => {
  const { t } = useTranslation();

  const [roomId, setRoomId] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'joining'>('idle');

  const handleJoin = () => {
    if (!roomId) return;
    setStatus('joining');
  };

  const handlePaste = async (setter: React.Dispatch<React.SetStateAction<string>>) => {
    try {
      const text = await navigator.clipboard.readText();
      setter(text);
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/80 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
      {/* Join Game Dialog */}
      <div className="relative z-10 w-full max-w-sm bg-[rgba(31,31,38,0.7)] backdrop-blur-md rounded-[2rem] border border-outline-variant/20 p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col gap-8">
        
        {/* Header */}
        <header className="text-center">
          <h1 className="font-headline text-2xl font-bold tracking-widest text-primary drop-shadow-[0_0_8px_rgba(143,245,255,0.4)]">
            {t('dialogs.join_game').toUpperCase()}
          </h1>
          <div className="h-0.5 w-12 bg-primary mx-auto mt-2 rounded-full opacity-50"></div>
        </header>

        {/* Form Section */}
        <div className="flex flex-col gap-6">
          {/* Room ID Field */}
          <div className="space-y-2">
            <label className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-1">
              {t('dialogs.room_id')}
            </label>
            <div className="relative group">
              <input 
                type="text"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                disabled={status === 'joining'}
                className="w-full h-14 bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 text-on-surface font-headline placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all" 
                placeholder={t('dialogs.enter_session_id')} 
              />
              <button 
                onClick={() => handlePaste(setRoomId)}
                disabled={status === 'joining'}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-on-surface-variant hover:text-primary transition-colors active:scale-90 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">content_paste</span>
              </button>
            </div>
          </div>

          {/* Room Password Field */}
          <div className="space-y-2">
            <label className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant ml-1">
              {t('dialogs.room_password')}
            </label>
            <div className="relative group">
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={status === 'joining'}
                className="w-full h-14 bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 text-on-surface font-headline placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all" 
                placeholder="••••••••" 
              />
              <button 
                onClick={() => handlePaste(setPassword)}
                disabled={status === 'joining'}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-on-surface-variant hover:text-primary transition-colors active:scale-90 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">content_paste</span>
              </button>
            </div>
          </div>
        </div>

        {/* Status Section (Shows while joining) */}
        {status === 'joining' && (
          <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/10 animate-in slide-in-from-bottom">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label text-[9px] font-bold text-primary/80 uppercase tracking-wider">{t('dialogs.joining_status')}</span>
              <span className="font-label text-[10px] text-on-surface-variant font-medium">1/3 PLAYERS READY</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative w-4 h-4">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
                <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
              </div>
              <span className="font-headline text-xs text-on-surface/90 tracking-wide uppercase italic overflow-hidden text-ellipsis whitespace-nowrap">
                {t('dialogs.establishing_connection')}
              </span>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-3">
          {status === 'idle' && (
            <button 
              onClick={handleJoin}
              disabled={!roomId}
              className={`w-full h-14 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold tracking-widest text-sm rounded-xl shadow-[0_0_20px_rgba(143,245,255,0.3)] transition-all flex items-center justify-center gap-2 ${!roomId ? 'opacity-50 cursor-not-allowed' : 'active:scale-[0.98]'}`}
            >
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>sports_esports</span>
              {t('dialogs.join_game').toUpperCase()}
            </button>
          )}
          
          <button 
            onClick={onClose}
            className="w-full h-12 text-on-surface-variant font-headline font-medium tracking-widest text-xs hover:text-on-surface transition-colors active:scale-95 flex items-center justify-center uppercase"
          >
            {t('dialogs.cancel')}
          </button>
        </div>
      </div>
      
      {/* Decorative Aesthetic Glows */}
      <div className="fixed top-1/4 -left-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full z-[-1] pointer-events-none"></div>
      <div className="fixed bottom-1/4 -right-20 w-64 h-64 bg-secondary-container/10 blur-[100px] rounded-full z-[-1] pointer-events-none"></div>
    </div>
  );
};
