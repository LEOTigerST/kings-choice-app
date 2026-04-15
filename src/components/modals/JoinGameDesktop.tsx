import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  onClose: () => void;
}

export const JoinGameDesktop: React.FC<Props> = ({ onClose }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
      <div className="w-full max-w-4xl bg-surface-container-high rounded-xl overflow-hidden shadow-2xl border border-primary/20 flex flex-col md:flex-row">
        
        {/* Left Side: Form */}
        <div className="flex-1 p-10 relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-headline font-bold text-white tracking-widest uppercase flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full inline-block"></span>
                {t('dialogs.join_game')}
              </h2>
              <p className="text-xs text-primary font-label tracking-[0.2em] mt-2 uppercase">
                {t('dialogs.join_private_session')}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant tracking-widest uppercase ml-1 block">
                {t('dialogs.session_id')}
              </label>
              <div className="relative group">
                <input 
                  type="text"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  disabled={status === 'joining'}
                  className="w-full bg-surface-container-lowest border-none rounded-lg p-5 text-white font-headline text-lg tracking-widest focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant/30" 
                  placeholder={t('dialogs.enter_session_id')} 
                />
                <button 
                  onClick={() => handlePaste(setRoomId)}
                  disabled={status === 'joining'}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined">content_paste</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant tracking-widest uppercase ml-1 block">
                {t('dialogs.room_password')}
              </label>
              <div className="relative flex items-center bg-surface-container-lowest rounded-lg border-none focus-within:ring-1 focus-within:ring-primary overflow-hidden">
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={status === 'joining'}
                  className="w-full bg-transparent border-none p-5 text-white font-headline text-lg tracking-widest focus:outline-none focus:ring-0 placeholder:text-on-surface-variant/30" 
                  placeholder="********" 
                />
                <button 
                  onClick={() => handlePaste(setPassword)}
                  disabled={status === 'joining'}
                  className="absolute right-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined">content_paste</span>
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-12 flex items-center gap-6">
            {status === 'idle' && (
              <button 
                onClick={handleJoin}
                disabled={!roomId}
                className={`py-4 px-12 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-extrabold uppercase tracking-widest rounded-xl transition-all flex items-center gap-3 ${!roomId ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_25px_rgba(0,238,252,0.3)] active:scale-[0.98]'}`}
              >
                <span>{t('dialogs.join_game')}</span>
                <span className="material-symbols-outlined text-sm">login</span>
              </button>
            )}

            {status === 'joining' && (
              <button disabled className="py-4 px-12 bg-primary/20 text-primary border border-primary/20 font-headline font-bold rounded-xl flex items-center gap-3">
                <span className="material-symbols-outlined animate-spin text-sm">sync</span>
                {t('dialogs.establishing_connection')}
              </button>
            )}

            <button 
              onClick={onClose}
              className="py-4 px-8 text-on-surface-variant hover:text-error transition-colors font-headline font-bold text-sm uppercase tracking-wider"
            >
              {t('dialogs.cancel')}
            </button>
          </div>
        </div>

        {/* Right Side: Network Stream / Queue Meta */}
        <div className="w-full md:w-80 bg-surface-container-low border-l border-outline-variant/10 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-[10px] font-bold text-on-surface-variant tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">monitor_heart</span>
              {t('dialogs.network_stream')}
            </h3>

            <div className="space-y-6">
              {status === 'joining' ? (
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                  <p className="text-xs font-headline font-bold text-primary tracking-widest">
                    {t('dialogs.syncing_with_server')}
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-3 opacity-50">
                  <div className="w-2 h-2 bg-on-surface-variant rounded-full"></div>
                  <p className="text-xs font-headline text-on-surface-variant tracking-widest">
                    AWAITING INPUT...
                  </p>
                </div>
              )}

              <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/5">
                <p className="text-[9px] text-on-surface-variant tracking-widest uppercase mb-2">System Config</p>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[10px] text-on-surface-variant">Protocol</span>
                    <span className="text-[10px] text-primary font-bold">KNT-V2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] text-on-surface-variant">Latency</span>
                    <span className="text-[10px] text-secondary font-bold">12ms</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-[10px] text-on-surface-variant">Region</span>
                     <span className="text-[10px] text-on-surface">US-EAST-1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-outline-variant/10">
            <h3 className="text-[10px] font-bold text-on-surface-variant tracking-[0.2em] uppercase mb-4">
              {t('dialogs.queue_meta')}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-xs text-on-surface-variant uppercase">{t('dialogs.waiting_for_host')}</span>
              <span className="material-symbols-outlined text-on-surface-variant opacity-50">hourglass_empty</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
