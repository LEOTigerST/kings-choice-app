import React from 'react';
import { useTranslation } from 'react-i18next';

export const DesktopSettings: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <>

      <div className="max-w-6xl mx-auto p-12">
        <div className="mb-12">
          <h2 className="text-4xl font-headline font-black tracking-tight text-on-background mb-2">{t('settings.sys_config')}</h2>
          <p className="text-on-surface-variant font-body">{t('settings.manage_identity')}</p>
        </div>
        <div className="grid grid-cols-12 gap-8">
          {/*  Profile Section (Bento Main)  */}
          <div className="col-span-8 space-y-8">
            {/*  Identity Card  */}
            <div className="bg-surface-container-high rounded-xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl" data-icon="badge">badge</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-headline font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined" data-icon="person">person</span>
                  {t('settings.operative_id')}
                </h3>
                <div className="flex gap-10 items-start">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-primary shadow-[0_0_15px_rgba(143,245,255,0.2)]">
                      <img alt="Current Avatar" className="w-full h-full object-cover" data-alt="high contrast studio portrait of a young man with futuristic blue neon lighting and sharp shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZEf4AIyQLb68DEIF0s7HyxjdTpPTD9ZOwjmiWZX5O5wogUu__ZMcq4R_BIpfPrZMQK9m3KY03R3Bto6yyaS2EKbYC3zvBRQjUT5wWi8g-7WIZGgTSpOVOJnpK3ZL8HLOEWehYvyYMCqq_s7pDaj9QqOzj0kg4eFzhZNQqGtXpP81gzxIsTSzoYe0skCeWEyDcRfzaUHZG7l3HXIi_nVuU8ulrvo-CBPq16SGk_JOybXLhOQlkc6SjFO8x_xoUUKlbQdJWeGcRDMI" />
                    </div>
                    <button className="absolute -bottom-2 -right-2 bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-sm" data-icon="photo_camera">photo_camera</span>
                    </button>
                  </div>
                  <div className="flex-1 space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant">{t('settings.operative_nickname')}</label>
                      <div className="relative">
                        <input className="w-full bg-surface-container-lowest border-none rounded-md px-4 py-3 text-on-background focus:ring-1 focus:ring-primary font-headline tracking-wide" type="text" defaultValue="Xenon_Rider" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm" data-icon="edit">edit</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant">{t('settings.avatar_gallery')}</label>
                      <div className="flex gap-3">
                        <div className="w-12 h-12 rounded-lg bg-surface-container-highest border border-primary/40 p-1 cursor-pointer hover:border-primary transition-colors">
                          <img className="w-full h-full object-cover rounded" data-alt="cyberpunk character avatar in neon light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX2yyGhcBvPaSldz_Oq6-1hDZsAtn0b2wFkK7-TCyotTysZd64Dk8paEqhPelQO6j6NAEvBdyCAlOro05el3xj7NdCOT5I6UX8euMDP4hIDCqmmgL8euZsPP-z8NBdDsuC6cjiKlgDKum4nrbOaUnIFVYy3pHp6gU_PIjF493ZcWiFvv00kB2TC0R-MmoI4wCM1msXiSIdCB1p81y6Mx2A9ZaEVJaCvahbZPE-5rhZ59oP_eXg57JgIZA3xlQDEDiAz7rWvxJeisM" />
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-surface-container-highest border border-outline-variant/40 p-1 cursor-pointer hover:border-primary transition-colors">
                          <img className="w-full h-full object-cover rounded" data-alt="hacker profile picture with digital overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAphoJrFyiV1Yi9GKDR_9CVXdaKm77kX8xfhpNwwvvUOzpn5oWw2S3YSXAyBXDk8asF4Dt5R0XoSXZkFpDBLbIT5weQD7jcpjBq08R3PpWy_KvNhzLCyRveQ4AWsbHsq1qMNOGK3QLzjHJSUlAF7lej4O5hM3f21zTcbMHg4HWFcHUMfN0NwAllIbzg8h13ubPEPLmp8Eb2UxcAinIfP9E2GPUgroyPjR-6vGV9iz8tdjgYrQeyf72pmZQ558rd_w1lKr7xATIjHZQ" />
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-surface-container-highest border border-outline-variant/40 p-1 cursor-pointer hover:border-primary transition-colors">
                          <img className="w-full h-full object-cover rounded" data-alt="minimalist sci-fi silhouette avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLHC2bVzRH4ui9XWT7crzG2zI88IzDltD8kMbi6DIlJHVb8QDMVcd8FssBJqZY0zsTteylLTabM_NgePaxkFhU5cEx_BhKLdYOPpqBOqE7O7jwm2E5HuOG7JvSSKGrjIUS5jqQlvLF3AuV5VuHG31bEsZKwWuinogQr-lThyLdu8O57qtKJr03EV_3g3mTv2MgWAibjLAkq-G6aQg66C8KvaSb8kBSveRzsuEPuP4KTzh42rI37vke17TUc6PdysgmJBEdyFwjsgA" />
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-surface-container-highest border border-outline-variant/40 p-1 cursor-pointer hover:border-primary transition-colors">
                          <img className="w-full h-full object-cover rounded" data-alt="retro technology inspired profile icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsIjTMuhlAFcN9k_cal0pSy77rKBJzaY3f1kbCZr-7Uy6H8T7XO6PLJox9fOMWT9Ksk3SiJ9HUHMC1oP_MJ78T4P_O2NWMZ2HBJ_LRLwhB6gdjfuXN5VzEn3mncKx1HkA24kJl7BICbYeFAz0DB-SrlrAp_0Plt65fjhD9F4FqwarC32e6r45et2Kp7v4uvXLggiLA3smKJyF8fgX7NAGzci0l_mzt9E5Gkmg-n85RgoP7FUMyztILeL0KyLWPl1d9BlXzbuL3yrY" />
                        </div>
                        <button className="w-12 h-12 rounded-lg bg-surface-container-highest border border-dashed border-outline-variant flex items-center justify-center text-outline hover:text-primary transition-colors">
                          <span className="material-symbols-outlined" data-icon="add">add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  Stats Row  */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-surface-container-low p-6 rounded-xl border-l-2 border-primary-dim">
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-1">{t('settings.combat_hours')}</p>
                <p className="text-3xl font-headline font-black text-on-background">1,248<span className="text-sm font-light text-outline ml-1">h</span></p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border-l-2 border-tertiary">
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-1">{t('settings.win_ratio')}</p>
                <p className="text-3xl font-headline font-black text-on-background">64.2<span className="text-sm font-light text-outline ml-1">%</span></p>
              </div>
              <div className="bg-surface-container-low p-6 rounded-xl border-l-2 border-secondary">
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-1">{t('settings.elite_rank')}</p>
                <p className="text-3xl font-headline font-black text-on-background">{t('settings.diamond_iv')}</p>
              </div>
            </div>
            {/*  Placeholder Future Sections  */}
            <div className="grid grid-cols-2 gap-8">
              {/*  Security  */}
              <div className="bg-surface-container-high rounded-xl p-8 border border-outline-variant/10 group hover:border-primary/20 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-surface-container-highest p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined" data-icon="security">security</span>
                  </div>
                  <span className="px-2 py-1 rounded text-[10px] font-bold bg-surface-container-highest text-outline uppercase tracking-tighter">{t('settings.encrypted')}</span>
                </div>
                <h4 className="text-lg font-headline font-bold text-on-background mb-2">{t('settings.security_access')}</h4>
                <p className="text-sm text-on-surface-variant mb-6">{t('settings.update_creds')}</p>
                <button className="text-primary text-sm font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  {t('settings.config_access')} <span className="material-symbols-outlined text-xs" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
              {/*  Notifications  */}
              <div className="bg-surface-container-high rounded-xl p-8 border border-outline-variant/10 group hover:border-primary/20 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-surface-container-highest p-3 rounded-lg text-secondary">
                    <span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
                  </div>
                  <span className="px-2 py-1 rounded text-[10px] font-bold bg-surface-container-highest text-outline uppercase tracking-tighter">{t('common.active')}</span>
                </div>
                <h4 className="text-lg font-headline font-bold text-on-background mb-2">{t('settings.neural_alerts')}</h4>
                <p className="text-sm text-on-surface-variant mb-6">{t('settings.customize_pings')}</p>
                <button className="text-secondary text-sm font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  {t('settings.manage_pulse')} <span className="material-symbols-outlined text-xs" data-icon="arrow_forward">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          {/*  Sidebar Settings (Bento Side)  */}
          <div className="col-span-4 space-y-8">
            {/*  Language & Region  */}
            <div className="bg-surface-container-high rounded-xl p-8">
              <h3 className="text-sm font-headline font-bold text-on-background mb-6 flex items-center gap-2 uppercase tracking-widest">
                <span className="material-symbols-outlined text-primary text-base" data-icon="language">language</span>
                {t('settings.localization')}
              </h3>
              <div className="space-y-4">
                <div
                  onClick={() => i18n.changeLanguage(i18n.language.startsWith('en') ? 'zh' : 'en')}
                  className="p-4 bg-surface-container-highest rounded-lg border-l-2 border-primary cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-label text-on-surface-variant uppercase">{t('settings.interface_lang')}</span>
                    <span className="text-sm font-bold flex items-center gap-2">
                      {i18n.language.startsWith('en') ? 'English (US)' : '简体中文'}
                      <span className="material-symbols-outlined text-xs">sync_alt</span>
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-surface-container-low rounded-lg hover:bg-surface-container-highest transition-colors cursor-pointer group">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-label text-on-surface-variant uppercase">{t('settings.timezone')}</span>
                    <span className="text-sm group-hover:text-primary transition-colors">UTC+08:00</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  App Info / Status  */}
            <div className="bg-gradient-to-br from-surface-container-high to-surface-container-low rounded-xl p-8 border border-outline-variant/10">
              <h3 className="text-sm font-headline font-bold text-on-background mb-6 flex items-center gap-2 uppercase tracking-widest">
                <span className="material-symbols-outlined text-tertiary text-base" data-icon="info">info</span>
                {t('settings.environment')}
              </h3>
              <div className="space-y-4 text-xs font-label">
                <div className="flex justify-between py-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant">{t('common.version')}</span>
                  <span className="text-on-background font-mono">2.4.12-PROD</span>
                </div>
                <div className="flex justify-between py-2 border-b border-outline-variant/10">
                  <span className="text-on-surface-variant">{t('settings.server_path')}</span>
                  <span className="text-primary">Aetheris_Prime_West</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-on-surface-variant">{t('settings.last_login')}</span>
                  <span className="text-on-background">2024-05-20 14:02</span>
                </div>
              </div>
              <div className="mt-8">
                <button className="w-full py-3 bg-error/10 text-error border border-error/20 rounded-md font-bold text-xs hover:bg-error hover:text-on-error transition-all uppercase tracking-widest">
                  {t('settings.deactivate')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
