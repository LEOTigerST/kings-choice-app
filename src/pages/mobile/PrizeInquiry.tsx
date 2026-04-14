import React from 'react';
import { useTranslation } from 'react-i18next';

export const MobilePrizeInquiry: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>

{/*  Hero Section / Title  */}
<section className="mb-10">
<div className="flex flex-col gap-1">
<h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">{t('nav.prize_inquiry')}</h2>
</div>
<div className="mt-8 glass-card rounded-xl p-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-end">
<div>
<p className="text-on-surface-variant font-label text-[10px] uppercase tracking-widest mb-1">{t('store.current_balance')}</p>
<p className="text-3xl font-headline font-extrabold text-primary">1,200 <span className="text-sm font-normal">FATE</span></p>
</div>
<div className="bg-surface-container-highest p-3 rounded-lg border border-outline-variant/20 shadow-[0_0_15px_rgba(143,245,255,0.1)]">
<span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
</div>
</div>
</div>
</section>
{/*  Session List  */}
<section className="space-y-4">
<div className="flex justify-between items-center px-2 mb-2">
<h3 className="font-headline text-lg font-semibold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">history</span>
                    {t('console.recent_sessions')}
                </h3>
<span className="text-on-surface-variant text-[10px] font-label tracking-widest uppercase">Sort: Latest</span>
</div>
{/*  List Item 1 (Expanded)  */}
<div className="glass-card rounded-xl overflow-hidden transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
<div className="p-5 flex justify-between items-center cursor-pointer">
<div className="flex flex-col">
<span className="text-primary font-headline font-bold text-lg tracking-tight">CYBER-GENESIS #082</span>
<div className="flex gap-4 mt-1">
<span className="text-on-surface-variant text-[10px] font-label font-medium">2024-05-24</span>
<span className="text-on-surface-variant text-[10px] font-label font-medium">22:00 UTC</span>
</div>
</div>
<span className="material-symbols-outlined text-primary">expand_less</span>
</div>
{/*  Expanded Content  */}
<div className="px-5 pb-6 border-t border-outline-variant/10 bg-surface-container/30">
<div className="grid grid-cols-2 gap-4 mt-6">
<div className="bg-surface-container-highest/50 border border-outline-variant/10 p-4 rounded-lg">
<p className="text-[10px] text-on-surface-variant uppercase tracking-tighter mb-1">{t('prize.prize_tier')}</p>
<p className="text-tertiary font-headline font-bold text-lg italic tracking-wide">{t('prize.grand_prize')}</p>
</div>
<div className="bg-surface-container-highest/50 border border-outline-variant/10 p-4 rounded-lg">
<p className="text-[10px] text-on-surface-variant uppercase tracking-tighter mb-1">{t('console.runestones')}</p>
<p className="text-primary font-headline font-bold text-lg">5,000 <span className="text-xs font-normal">RS</span></p>
</div>
</div>
<div className="mt-6">
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-3 flex items-center gap-2">
                            {t('prize.list_winners')}
                            <span className="h-px flex-1 bg-outline-variant/20"></span>
</p>
<div className="max-h-48 overflow-y-auto pr-2 hide-scrollbar space-y-2">
<div className="flex justify-between items-center py-2.5 px-3 bg-primary/5 border border-primary/10 rounded-md">
<span className="font-label text-sm font-semibold text-primary">PILOT_9921 (YOU)</span>
<span className="text-primary text-[10px] font-headline font-bold tracking-widest bg-primary/10 px-2 py-0.5 rounded">WINNER</span>
</div>
<div className="flex justify-between items-center py-2.5 px-3 bg-surface/40 border border-outline-variant/5 rounded-md">
<span className="font-label text-sm text-on-surface-variant">XENON_CORE</span>
<span className="text-on-surface-variant text-[10px] font-headline font-bold tracking-widest">WINNER</span>
</div>
<div className="flex justify-between items-center py-2.5 px-3 bg-surface/40 border border-outline-variant/5 rounded-md">
<span className="font-label text-sm text-on-surface-variant">DRIFT_KING</span>
<span className="text-on-surface-variant text-[10px] font-headline font-bold tracking-widest">WINNER</span>
</div>
<div className="flex justify-between items-center py-2.5 px-3 bg-surface/40 border border-outline-variant/5 rounded-md">
<span className="font-label text-sm text-on-surface-variant">NEON_PUNK</span>
<span className="text-on-surface-variant text-[10px] font-headline font-bold tracking-widest">WINNER</span>
</div>
</div>
</div>
</div>
</div>
{/*  List Item 2 (Collapsed)  */}
<div className="glass-card rounded-xl overflow-hidden hover:bg-surface-container-high transition-colors group">
<div className="p-5 flex justify-between items-center cursor-pointer">
<div className="flex flex-col">
<span className="text-on-surface group-hover:text-primary transition-colors font-headline font-bold text-lg tracking-tight">NEON-OVERDRIVE #081</span>
<div className="flex gap-4 mt-1">
<span className="text-on-surface-variant text-[10px] font-label">2024-05-23</span>
<span className="text-on-surface-variant text-[10px] font-label">21:00 UTC</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">expand_more</span>
</div>
</div>
{/*  List Item 3 (Collapsed)  */}
<div className="glass-card rounded-xl overflow-hidden hover:bg-surface-container-high transition-colors group">
<div className="p-5 flex justify-between items-center cursor-pointer">
<div className="flex flex-col">
<span className="text-on-surface group-hover:text-primary transition-colors font-headline font-bold text-lg tracking-tight">VOID-PULSE #080</span>
<div className="flex gap-4 mt-1">
<span className="text-on-surface-variant text-[10px] font-label">2024-05-22</span>
<span className="text-on-surface-variant text-[10px] font-label">21:30 UTC</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">expand_more</span>
</div>
</div>
{/*  List Item 4 (Collapsed)  */}
<div className="glass-card rounded-xl overflow-hidden hover:bg-surface-container-high transition-colors group">
<div className="p-5 flex justify-between items-center cursor-pointer">
<div className="flex flex-col">
<span className="text-on-surface group-hover:text-primary transition-colors font-headline font-bold text-lg tracking-tight">ZENITH-DRAKE #079</span>
<div className="flex gap-4 mt-1">
<span className="text-on-surface-variant text-[10px] font-label">2024-05-21</span>
<span className="text-on-surface-variant text-[10px] font-label">20:00 UTC</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">expand_more</span>
</div>
</div>
</section>
{/*  Pagination/Load More  */}
<div className="mt-8 flex justify-center">
<button className="bg-surface-container-highest text-primary font-label text-[10px] font-bold uppercase tracking-widest px-8 py-3 rounded-md border border-primary/20 hover:bg-primary/10 hover:border-primary/40 active:scale-95 transition-all flex items-center gap-2">
                {t('prize.load_more')}
                <span className="material-symbols-outlined text-sm">keyboard_double_arrow_down</span>
</button>
</div>

    </>
  );
};
