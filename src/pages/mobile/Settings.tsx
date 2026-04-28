import React from 'react';
import { useTranslation } from 'react-i18next';

export const MobileSettings: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <>

{/*  Page Title  */}
<div className="mb-8">
<h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface leading-tight">{t('nav.user_settings')}</h2>
</div>
{/*  Profile Section (Bento Style)  */}
<section className="space-y-4 mb-10">
<div className="bg-surface-container-high rounded-xl p-6 relative overflow-hidden group">
{/*  Decorative background glow  */}
<div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
<div className="flex flex-col items-center gap-6">
<div className="relative group cursor-pointer">
<div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_20px_rgba(143,245,255,0.3)]">
<img alt="Avatar" data-alt="cyberpunk profile picture of a digital character with vibrant neon lighting and high tech aesthetics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDSzctaj5C8UeFW-e-Xhm_dMFExhndS6ey9yML_u9Yk0-mFR0SPhpsLg47wSEMmAyriiPD6905qw4mvZaj1dTxD41dNWJdOXkONSx1Q8VfdW54agKnUQHdHZS_cjuMQhomeeNU7olgatZ_li0PPPd3WmkafH63nwV81z9AyCNCeTQWNQEdW4H2zs2d3AGadSc2z4Q19joenHpcf-y02GvPojOS6mkxKkPBQJnqvBiHxJgrxH_txdrTDOpmixcf93ZzQirEQYu9ADI"/>
</div>
<div className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-lg active:scale-95 transition-transform">
<span className="material-symbols-outlined text-sm">edit</span>
</div>
</div>
<div className="w-full space-y-2">
<label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">{t('settings.nickname')}</label>
<div className="relative">
<input className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-headline text-primary" type="text" defaultValue="Pilot_01"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline-variant text-lg">fingerprint</span>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-high rounded-xl p-4 flex flex-col justify-between aspect-square">
<span className="material-symbols-outlined text-tertiary text-3xl">workspace_premium</span>
<div>
<p className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">{t('common.rank')}</p>
<p className="font-headline text-xl font-bold text-tertiary">{t('status.zenith')}</p>
</div>
</div>
<div className="bg-surface-container-high rounded-xl p-4 flex flex-col justify-between aspect-square">
<span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
<div>
<p className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">{t('settings.status')}</p>
<p className="font-headline text-xl font-bold text-primary">Verified</p>
</div>
</div>
</div>
</section>
{/*  Additional Settings List  */}
<section className="space-y-6">
<h3 className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant/60 ml-1">{t('settings.sys_prefs')}</h3>
<div className="space-y-3">
{/*  Language Setting  */}
<button 
  onClick={() => i18n.changeLanguage(i18n.language.startsWith('en') ? 'zh' : 'en')}
  className="w-full flex items-center justify-between p-4 bg-surface-container-high/50 rounded-xl hover:bg-surface-container-high transition-colors group"
>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
<span className="material-symbols-outlined">language</span>
</div>
<div className="text-left">
<p className="font-body font-bold text-on-surface">{t('settings.interface_lang')}</p>
<p className="font-label text-xs text-on-surface-variant">{i18n.language.startsWith('en') ? 'English (US)' : '简体中文'}</p>
</div>
</div>
<span className="material-symbols-outlined text-outline-variant">sync_alt</span>
</button>
{/*  Security Setting  */}
<button className="w-full flex items-center justify-between p-4 bg-surface-container-high/50 rounded-xl hover:bg-surface-container-high transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
<span className="material-symbols-outlined">shield_person</span>
</div>
<div className="text-left">
<p className="font-body font-bold text-on-surface">{t('settings.security')}</p>
<p className="font-label text-xs text-on-surface-variant">2FA Enabled</p>
</div>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</button>
{/*  Notifications Setting  */}
<button className="w-full flex items-center justify-between p-4 bg-surface-container-high/50 rounded-xl hover:bg-surface-container-high transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications_active</span>
</div>
<div className="text-left">
<p className="font-body font-bold text-on-surface">{t('settings.notifications')}</p>
<p className="font-label text-xs text-on-surface-variant">{t('settings.push_only')}</p>
</div>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</button>
{/*  Privacy Setting  */}
<button className="w-full flex items-center justify-between p-4 bg-surface-container-high/50 rounded-xl hover:bg-surface-container-high transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
<span className="material-symbols-outlined">visibility_off</span>
</div>
<div className="text-left">
<p className="font-body font-bold text-on-surface">{t('settings.privacy')}</p>
<p className="font-label text-xs text-on-surface-variant">{t('settings.ghost_mode')}</p>
</div>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</button>
</div>
</section>
{/*  Logout Button  */}
<div className="mt-12 mb-8">
<button className="w-full py-4 rounded-xl border border-error/20 text-error font-headline font-bold tracking-widest uppercase hover:bg-error/5 active:scale-95 transition-all">
            {t('settings.terminate')}
        </button>
</div>

    </>
  );
};
