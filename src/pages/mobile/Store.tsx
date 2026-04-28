import React from 'react';
import { useTranslation } from 'react-i18next';

export const MobileStore: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>

{/*  Hero / Title Section  */}
<section className="mb-10">
<div className="flex flex-col gap-1">
<h1 className="font-headline text-4xl font-extrabold tracking-tighter text-on-surface">{t('nav.store')}</h1>
<p className="text-on-surface-variant font-label text-sm uppercase tracking-[0.2em]">{t('store.acquire_assets')}</p>
</div>
</section>
{/*  Section 1: USD Purchases  */}
<section className="mb-12">
<div className="flex items-center justify-between mb-6">
<h2 className="font-headline text-xl font-bold flex items-center gap-2">
          {t('store.fiat_purchases')}
</h2>
<div className="h-[1px] flex-grow ml-6 bg-gradient-to-r from-outline-variant/30 to-transparent"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Card 1  */}
<div className="bg-surface-container-high rounded-xl overflow-hidden group hover:bg-surface-bright transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(143,245,255,0.05)] border border-outline-variant/10">
<div className="relative h-48 w-full overflow-hidden">
<img alt="Starter Pack" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Futuristic glowing energy canister with blue lightning effects and high-tech mechanical housing on a dark textured background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfW0UuXRaKSsz5SF_SkdoErQyAS3eok2Gf0Ly-2k6XYcZwOy0GXVF28hEefkF778DCIxTAf1dWPojfH21cvt0D8ectLJYXAZ-JAfehzT_DloKwlzNbh4LvK7ao1E-foMvdDr6_etGjgLkADuKcS-4NHKsHfNXx7Ot5lpuOaxqN8opBydWPQcnQxk_geICkh0x418e7oiC1l0hqN53zfKhq0ZRYdjRUoVjLyHSJVIhcYBRvkAJwOPcFJghq-_uZp1D5Z41M5M4AhZw"/>
<div className="absolute top-3 right-3 bg-primary text-on-primary text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest shadow-lg">{t('store.best_value')}</div>
</div>
<div className="p-6">
<div className="flex flex-col mb-6">
<h3 className="font-headline text-xl font-bold leading-tight mb-1">{t('store.starter_core_pack')}</h3>
<p className="text-on-surface-variant text-xs">{t('store.starter_core_desc')}</p>
</div>
<div className="flex items-center justify-between">
<span className="font-headline text-2xl font-black text-primary">$19.99</span>
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-md font-bold text-sm active:scale-95 transition-transform hover:brightness-110">{t('store.purchase')}</button>
</div>
</div>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-high rounded-xl overflow-hidden group hover:bg-surface-bright transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-outline-variant/10">
<div className="relative h-48 w-full overflow-hidden">
<img alt="Booster Bundle" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A collection of holographic tech chips and neon-lit data modules floating in a pressurized dark space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSUZq9eb-1LlAgnljnvilRyYxQl0jB3vyt4r5xpDMCajWbyEQvlPRFW2P5pdnVHtCCEzAYwRGi0eBWRNpWAOn2hrliKgkbjAFg_3240fwX9v8zjmrOvTGc62JLazwENs3J6uBCI2LOZR9vPXdmowDAae-0L1HQnYYtyjZ3rVNkJFnaIDvS-G3DLn5RwmbKOHZ8WNW00fW0cyPlDxyX_T2F5vMfFZriqzb9wo3l-zO9tvTLcAF-ERZzOexprrWyvIKOkHGpMw5cPsE"/>
</div>
<div className="p-6">
<div className="flex flex-col mb-6">
<h3 className="font-headline text-xl font-bold leading-tight mb-1">{t('status.zenith_plate')}</h3>
<p className="text-on-surface-variant text-xs">{t('store.zenith_plate_desc')}</p>
</div>
<div className="flex items-center justify-between">
<span className="font-headline text-2xl font-black text-primary">$45.00</span>
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-md font-bold text-sm active:scale-95 transition-transform hover:brightness-110">{t('store.purchase')}</button>
</div>
</div>
</div>
{/*  Card 3  */}
<div className="bg-surface-container-high rounded-xl overflow-hidden group hover:bg-surface-bright transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-outline-variant/10">
<div className="relative h-48 w-full overflow-hidden">
<img alt="Zenith Core" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A massive golden glowing core pulsing with celestial energy, surrounded by rotating metallic rings and digital particles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqoF0Fa8TSjmnxyfFgQgWagWkJwgXTngiPwY876Ij_ewt-rD5K-kiMpsMswuHthxMqc3dKdDAl9suyh4MlrmAqhn99AXQuSAbvlDOodcaxXazWFRDKWazxB_pvN2dt6W5H7UfMLUAMMVkOSm2OwqGWex6cfHMgAVWgvnfgvfdOWSNBd8DsXOTLBu2Oc1UZLi00LJ5FdV_SlJITLNGSBKKUKuvDG8sbf0gFsWbBVNZXbRRJrHaPgE4IcjodcXEy9goEj7xhS53K6rY"/>
<div className="absolute top-3 right-3 bg-tertiary text-on-tertiary text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest shadow-lg">{t('status.zenith_grade')}</div>
</div>
<div className="p-6">
<div className="flex flex-col mb-6">
<h3 className="font-headline text-xl font-bold leading-tight mb-1">{t('store.neural_boost_30d')}</h3>
<p className="text-on-surface-variant text-xs">{t('store.neural_boost_desc')}</p>
</div>
<div className="flex items-center justify-between">
<span className="font-headline text-2xl font-black text-tertiary">$12.50</span>
<button className="bg-tertiary text-on-tertiary px-6 py-2.5 rounded-md font-bold text-sm active:scale-95 transition-transform shadow-[0_0_20px_rgba(255,231,146,0.3)] hover:brightness-110">{t('store.purchase')}</button>
</div>
</div>
</div>
</div>
</section>
{/*  Section 2: Cryptocurrency Purchases  */}
<section>
<div className="flex items-center justify-between mb-6">
<h2 className="font-headline text-xl font-bold flex items-center gap-2">
          {t('store.crypto_payments')}
</h2>
<div className="h-[1px] flex-grow ml-6 bg-gradient-to-r from-outline-variant/30 to-transparent"></div>
</div>
<div className="bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden">
<div className="flex flex-col md:flex-row items-stretch">
{/*  Left Info Side  */}
<div className="flex-1 p-8 md:p-10 border-b md:border-b-0 md:border-r border-outline-variant/10">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
<span className="material-symbols-outlined text-primary text-2xl">account_balance_wallet</span>
</div>
<div>
<h3 className="font-headline text-2xl font-bold">{t('store.web3_bonus')}</h3>
<p className="text-primary text-xs font-bold uppercase tracking-widest mt-1">{t('store.limited_time')}</p>
</div>
</div>
<p className="text-on-surface-variant leading-relaxed text-sm mb-8">
  {t('store.load_wallet')} <span className="text-primary font-bold">{t('common.fate_points')}</span> {t('store.at_current')}
  <span className="block mt-4 p-4 rounded-lg bg-surface-container-highest/50 border border-primary/10 text-on-surface">
    <strong className="text-primary">{t('store.no_fees')}</strong> {t('store.auto_verification')}
  </span>
</p>
<div className="space-y-4">
<label className="font-label text-xs text-on-surface-variant uppercase tracking-widest block font-semibold">{t('store.destination_wallet')}</label>
<div className="flex items-center gap-2">
<div className="flex-grow bg-black/40 border border-outline-variant/30 rounded-lg p-3 font-mono text-sm text-primary-dim/90 overflow-x-auto no-scrollbar whitespace-nowrap">
                  0x71C7656EC7ab88b098defB751B7401B5f6d8976F
                </div>
<button className="bg-surface-container-highest p-3 rounded-lg hover:text-primary hover:border-primary/40 border border-transparent transition-all active:scale-90 duration-200">
<span className="material-symbols-outlined text-xl">content_copy</span>
</button>
</div>
<div className="flex items-center gap-2 text-xs text-on-surface-variant/70">
<span className="material-symbols-outlined text-sm">info</span>
                {t('store.no_fees')}
              </div>
</div>
</div>
{/*  Right QR Side  */}
<div className="w-full md:w-80 bg-surface-container-low p-8 flex flex-col items-center justify-center">
<div className="relative group">
<div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-all duration-500"></div>
<div className="relative bg-white p-3 rounded-xl shadow-2xl">
<img alt="Deposit QR Code" className="w-40 h-40" data-alt="A minimalist QR code centered on a clean white background with subtle digital artifacts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDbXUzlXqcQmNJQkDW582JSyFlxNEUp2abE2kFFF06q9U5La45TA5Mp-kSt0DDQD4zWbkXAUZVsI9zb8cc_tkt5ARDDwWqrcvgpnkqoYTqfUBPkxUFtxew4ZUQhd7iDFFQO-LofLZxwRtrTNo8T3d1pQVwMhJSZkloNlxQPkTnQ_3I3hSAUGZXC9Vn1Sn5gKxsx0gmT_RGyqFJ8VyLt_zES3v6_DNHjD6Anv4nZOLzoHtqLnzc3nZ5y-qJQCe9L32hPg_rFKWcZCA"/>
</div>
</div>
<div className="mt-8 text-center">
<span className="text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant block mb-1">{t('store.scan_deposit')}</span>
<p className="text-[10px] text-on-surface-variant/50 max-w-[160px]">{t('store.secure_cold')}</p>
</div>
</div>
</div>
</div>
</section>

    </>
  );
};
