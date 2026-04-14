import React from 'react';
import { useTranslation } from 'react-i18next';

export const MobilePlay: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>

{/*  Hero Section  */}
<section className="mb-10">
<h2 className="text-4xl font-headline font-bold uppercase tracking-tight mb-2">{t('play.systems_active')}</h2>
<p className="text-on-surface-variant text-sm leading-relaxed max-w-sm">
                {t('play.systems_active_desc')}
            </p>
</section>
{/*  Section: Games (Vertical List Style)  */}
<section className="mb-12">
<div className="mb-6">
<h2 className="font-headline text-2xl font-bold uppercase tracking-tight">{t('play.active_simulations')}</h2>
</div>
<div className="flex flex-col gap-4">
{/*  Neon Overdrive Card  */}
<div className="group relative overflow-hidden bg-surface-container-high rounded-xl border border-white/5 h-48">
<img alt="Neon City" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR_AjnnFtGXpXV_lSMRE4NufdX0P3stVIfmdnHXSDP5cmOtumeu9W95X0ajtxzmKvfhQyD-o_6x7OilbOGtg_YlJn-54e2bF4idgDOM1VoV4LLqKalKYuxOjn_TCKfVwLfP1Qb_-Gcp1lORPjD0UljJfB1eH0ZoB9imCeRnkL5ELhq2EO24ieO_np8YWAbhKXQWzTQfegFFHLPtmrAF0QM8AH6Qo5NHUIyNnRmUCyHjNbBP-BHAsc4Z-7rZH49JEdvdGWJohqwaIw"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<div className="flex justify-between items-end">
<div>
<span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-1 block">{t('play.active_event')}</span>
<h3 className="text-2xl font-headline font-bold uppercase">{t('play.neon_overdrive')}</h3>
</div>
<button className="bg-primary text-on-primary w-32 h-10 rounded-md font-label font-bold text-xs flex items-center justify-center gap-2 hover:bg-primary-fixed transition-all active:scale-95">
<span className="material-symbols-outlined text-sm">bolt</span>
                                {t('common.quick_match')}
                            </button>
</div>
</div>
</div>
{/*  Void Strike Card  */}
<div className="group relative overflow-hidden bg-surface-container-high rounded-xl border border-white/5 h-48">
<img alt="Starship" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcJ9ftQiRYN9yOh74cnSeWFIbr5XF3u0GaM-so4KwelTPeRWVWQOS1TDSIdJ_bks5R-p8JxwNmlrx2WG7G2LmsYnl3lLDMixe-9eQbuRqd46__vvYr-FPWyOu7vMce7IXIM3lehfxDu291tKFYxjhLDB_RO8jkqzQ0CpYY01dW-sMLWdIBF61xaZnt7u2UEkG1uG80nnFGgAL0tIt9Zq0JuJP_oypM0ivoideURYCRMzRElXgJ25y4B05KtokQRmKoVhC-3dtvLEk"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<div className="flex justify-between items-end">
<div>
<span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-1 block">{t('play.sector')} 7</span>
<h3 className="text-2xl font-headline font-bold uppercase">{t('play.void_strike')}</h3>
</div>
<button className="bg-surface-variant/50 backdrop-blur-md text-primary border border-primary/20 w-32 h-10 rounded-md font-label font-bold text-xs flex items-center justify-center gap-2 hover:bg-primary/10 transition-all active:scale-95">
<span className="material-symbols-outlined text-sm">bolt</span>
                                {t('common.quick_match')}
                            </button>
</div>
</div>
</div>
{/*  Additional Game Cards  */}
{/*  Crystal Ops Card  */}
<div className="group relative overflow-hidden bg-surface-container-high rounded-xl border border-white/5 h-48">
<img alt="Crystal" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJcYkn-5RDDk-kxy4XpMd7LYwOOr3WmK95YUZNrCctfkqi9NeybJ4wnhW7rk_iN4sDsO3AXBYbHkh6X7VsUNyjqy38BWmJsxh9JsaUrLSzk47zu3TLbWWaLDQM10Nyp-kNuO9SkM_VJD3CYrJrD1447rMAe_nvBG1M-Kef7ojhXjLQHXr7t5EVTlegOlkyzogdzwkY0DObai6P52p-VV0Jzj6XldzhfQu9TRAcQR8KLNAjXaYVi00TES-YrCMkY8Lmhrz0DtR_Ly8"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<div className="flex justify-between items-end">
<div>
<span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-1 block">{t('play.sector')} 3</span>
<h3 className="text-2xl font-headline font-bold uppercase">{t('play.crystal_ops')}</h3>
</div>
<button className="bg-surface-variant/50 backdrop-blur-md text-primary border border-primary/20 w-32 h-10 rounded-md font-label font-bold text-xs flex items-center justify-center gap-2 hover:bg-primary/10 transition-all active:scale-95">
<span className="material-symbols-outlined text-sm">bolt</span>
                {t('common.quick_match')}
            </button>
</div>
</div>
</div>
{/*  Titan Core Card  */}
<div className="group relative overflow-hidden bg-surface-container-high rounded-xl border border-white/5 h-48">
<img alt="Titan" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB655a_IlT1Eiswjv3V3TQVCy2MU7oNHJbJDzgXF3IdL-UQ-wfNbTAVMKH95ExcrTleyi3Ygvo91HZFhPxxpxRk35OENd-Ehjr5jlxH08CzZhPYcq9xeumln0v_vwhSdPZt4cpk08gMoK6fg1mxkNos6BmC3f7QFP2VdXT3KMzz1GusXspa1mHarfimDIV2IJ8C2PYPe_PObI9Up2E-r_oo2Sa7RWCHh0bIjSYFy2i5PROIv6YkQjPVxtDT3dYXu4MtBuF3vCAWFY"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<div className="flex justify-between items-end">
<div>
<span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-1 block">{t('play.sector')} 4</span>
<h3 className="text-2xl font-headline font-bold uppercase">{t('play.titan_core')}</h3>
</div>
<button className="bg-surface-variant/50 backdrop-blur-md text-primary border border-primary/20 w-32 h-10 rounded-md font-label font-bold text-xs flex items-center justify-center gap-2 hover:bg-primary/10 transition-all active:scale-95">
<span className="material-symbols-outlined text-sm">bolt</span>
                {t('common.quick_match')}
            </button>
</div>
</div>
</div>
{/*  Extra games to demonstrate scrolling  */}
<div className="group relative overflow-hidden bg-surface-container-high rounded-xl border border-white/5 h-32 opacity-80">
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<h3 className="text-lg font-headline font-bold uppercase">{t('play.apex_protocol')}</h3>
<p className="text-[10px] text-on-surface-variant uppercase">{t('common.coming_soon')}</p>
</div>
</div>
</div>
</section>

{/* Fixed Dynasty Selection Bar (Above Bottom Nav) */}
<div className="fixed bottom-[88px] left-0 w-full z-40 bg-[#0e0e13]/90 backdrop-blur-xl border-t border-white/5 px-4 py-3">
<div className="max-w-7xl mx-auto">
<p className="text-[10px] font-headline font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2 px-1">{t('play.dynasty_alignment')}</p>
<div className="flex gap-2 w-full overflow-x-auto no-scrollbar">
{/* Supreme */}
<div className="flex-1 min-w-[110px]">
<input className="hidden king-radio" id="king-supreme" name="king-select" type="radio"/>
<label className="flex flex-col items-center justify-center p-2 rounded-lg border border-white/5 bg-surface-container transition-all cursor-pointer text-tertiary" htmlFor="king-supreme">
<span className="material-symbols-outlined text-xl mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
<span className="text-[10px] font-headline font-bold uppercase whitespace-nowrap">{t('status.supreme')}</span>
<span className="check-icon opacity-0 absolute top-1 right-1 material-symbols-outlined text-xs">check_circle</span>
</label>
</div>
{/* Glorious */}
<div className="flex-1 min-w-[110px]">
<input defaultChecked={true} className="hidden king-radio" id="king-glorious" name="king-select" type="radio"/>
<label className="flex flex-col items-center justify-center p-2 rounded-lg border border-white/5 bg-surface-container transition-all cursor-pointer text-on-surface" htmlFor="king-glorious">
<span className="material-symbols-outlined text-xl mb-1 text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
<span className="text-[10px] font-headline font-bold uppercase whitespace-nowrap">{t('status.glorious')}</span>
<span className="check-icon opacity-0 absolute top-1 right-1 material-symbols-outlined text-xs">check_circle</span>
</label>
</div>
{/* Zenith */}
<div className="flex-1 min-w-[110px]">
<input className="hidden king-radio" id="king-zenith" name="king-select" type="radio"/>
<label className="flex flex-col items-center justify-center p-2 rounded-lg border border-white/5 bg-surface-container transition-all cursor-pointer text-secondary" htmlFor="king-zenith">
<span className="material-symbols-outlined text-xl mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
<span className="text-[10px] font-headline font-bold uppercase whitespace-nowrap">{t('status.zenith')}</span>
<span className="check-icon opacity-0 absolute top-1 right-1 material-symbols-outlined text-xs">check_circle</span>
</label>
</div>
</div>
</div>
</div>

    </>
  );
};
