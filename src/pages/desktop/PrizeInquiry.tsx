import React from 'react';
import { useTranslation } from 'react-i18next';

export const DesktopPrizeInquiry: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>

{/*  Top Bar  */}
<header className="fixed top-0 left-64 right-0 z-50 bg-[#0e0e13]/70 backdrop-blur-xl flex justify-between items-center px-8 py-4 shadow-[0_4px_30px_rgba(143,245,255,0.08)] font-['Space_Grotesk'] tracking-tight text-sm uppercase">
<div className="flex items-center gap-8">
<span className="text-[#8ff5ff] font-bold border-b-2 border-[#8ff5ff] pb-1">{t('common.fate_points')}: 2,500</span>
<span className="text-[#acaab1] hover:text-[#8ff5ff] transition-colors cursor-pointer">{t('common.vip_level')}: 4</span>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-[#25252c] transition-colors">
<span className="material-symbols-outlined text-[#acaab1]" data-icon="notifications">notifications</span>
</button>
<button className="p-2 rounded-full hover:bg-[#25252c] transition-colors">
<span className="material-symbols-outlined text-[#acaab1]" data-icon="account_balance_wallet">account_balance_wallet</span>
</button>
</div>
<div className="h-8 w-px bg-outline-variant/20 mx-2"></div>
<div className="flex items-center gap-3 group cursor-pointer">
<div className="text-right">
<p className="text-xs font-bold text-on-surface leading-none">AETHER_PILOT</p>
<p className="text-[10px] text-primary leading-none mt-1">{t('console.pro_rank')}</p>
</div>
<img alt="User Profile Avatar" className="w-10 h-10 rounded-full border border-primary/30 object-cover" data-alt="Futuristic portrait of a young woman with neon facial markings and cybernetic visor in soft purple lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9XtS7ikavEPlHMDmr701Fh-WuwTYalE_wf_VNN58GHmzry3kbPgUGL4wrztm-c8haoKwS5m34Rsp0gqcAUGyGNM1Jw5pc0fNs6VTeKHQJ7-o0p1W61BjoI2d7litg_-3uZRHNUhNHipauSIUR5gsifbRuy7MMMjTIA7Zqvk5Jv0FGuUvZQ2itk2tN6Xz_d19s4FQRwYhm5J6UcvYAaow4wBNtQt12fdfaOFzt0T2_YerhUmaWF7X1y3GGOywJUhmrFuXsJDK6Iuc"/>
</div>
</div>
</header>
{/*  Content Canvas  */}
<div className="mt-20 p-8 flex-1 grid grid-cols-12 gap-8 overflow-hidden">
{/*  Left Column: Chronological Draw Sessions  */}
<div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col gap-6 overflow-hidden">
<div className="flex items-end justify-between">
<h2 className="font-headline text-3xl font-bold tracking-tighter text-on-background">{t('prize.draw_history')}</h2>
<p className="font-label text-xs text-on-surface-variant uppercase tracking-[0.2em] mb-1">{t('prize.session_protocol')} X-09</p>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar pr-4 space-y-4 pb-12">
{/*  Draw Card 1 (Active/Selected)  */}
<div className="group relative surface-container-highest p-5 rounded-xl border-l-4 border-primary transition-all duration-300 cursor-pointer bg-surface-container-highest hover:bg-surface-bright shadow-[0_0_20px_rgba(143,245,255,0.05)]">
<div className="flex justify-between items-start mb-3">
<span className="font-headline text-lg font-bold text-primary italic">ALPHA_VOID_881</span>
<span className="font-label text-[10px] bg-primary/10 text-primary px-2 py-1 rounded">{t('prize.live_now')}</span>
</div>
<div className="flex gap-6 font-label text-xs text-on-surface-variant">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm" data-icon="calendar_today">calendar_today</span>
<span>24 OCT 2024</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm" data-icon="schedule">schedule</span>
<span>22:00 UTC</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-[10px] text-outline tracking-widest uppercase">Verification: K-82910</span>
<span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</div>
</div>
{/*  Draw Card 2  */}
<div className="group relative p-5 rounded-xl transition-all duration-300 cursor-pointer bg-surface-container-high hover:bg-surface-container-highest">
<div className="flex justify-between items-start mb-3">
<span className="font-headline text-lg font-bold text-on-surface italic">NEBULA_GATE_880</span>
<span className="font-label text-[10px] bg-white/5 text-on-surface-variant px-2 py-1 rounded">{t('store.settled')}</span>
</div>
<div className="flex gap-6 font-label text-xs text-on-surface-variant">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm" data-icon="calendar_today">calendar_today</span>
<span>23 OCT 2024</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm" data-icon="schedule">schedule</span>
<span>18:30 UTC</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-[10px] text-outline tracking-widest uppercase">Verification: K-82909</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</div>
</div>
{/*  Draw Card 3  */}
<div className="group relative p-5 rounded-xl transition-all duration-300 cursor-pointer bg-surface-container-high hover:bg-surface-container-highest">
<div className="flex justify-between items-start mb-3">
<span className="font-headline text-lg font-bold text-on-surface italic">PULSE_RAY_879</span>
<span className="font-label text-[10px] bg-white/5 text-on-surface-variant px-2 py-1 rounded">{t('store.settled')}</span>
</div>
<div className="flex gap-6 font-label text-xs text-on-surface-variant">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm" data-icon="calendar_today">calendar_today</span>
<span>22 OCT 2024</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm" data-icon="schedule">schedule</span>
<span>12:00 UTC</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-[10px] text-outline tracking-widest uppercase">Verification: K-82908</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</div>
</div>
{/*  Draw Card 4  */}
<div className="group relative p-5 rounded-xl transition-all duration-300 cursor-pointer bg-surface-container-high hover:bg-surface-container-highest">
<div className="flex justify-between items-start mb-3">
<span className="font-headline text-lg font-bold text-on-surface italic">CORE_SYNC_878</span>
<span className="font-label text-[10px] bg-white/5 text-on-surface-variant px-2 py-1 rounded">{t('store.settled')}</span>
</div>
<div className="flex gap-6 font-label text-xs text-on-surface-variant">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm" data-icon="calendar_today">calendar_today</span>
<span>21 OCT 2024</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm" data-icon="schedule">schedule</span>
<span>04:15 UTC</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-[10px] text-outline tracking-widest uppercase">Verification: K-82907</span>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</div>
</div>
{/*  Right Column: Detail View (Bento Grid)  */}
<div className="col-span-12 lg:col-span-7 xl:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-6 gap-6 overflow-hidden">
{/*  Main Header Card  */}
<div className="md:col-span-2 lg:col-span-3 row-span-1 bg-surface-container-high rounded-xl p-8 flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-full opacity-10">
<img alt="Background Pattern" className="object-cover w-full h-full" data-alt="abstract cosmic digital data visualization with flowing lines and glowing circuit patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe43v1bEGWZa-El_OEsYr1E0enR0zp_dTLld9t0haFJUKwN1s_Kcvsh8QK9UqBxThVeg0i8Z2HuHkQZoQsoD-Ni8rhH8A1I3koI88BpkI8XDL-ylodr-E1brj0VCKcvn5Znz3WmdAxBqexNEdat5XJmX_cNwtUZHBDjD0BJ84SX4-LSSszYJvkmndgm2huSQaHSdMgbpdKhb1roHGFT3_PLeZKGo66TPnTPgBy3jm7IHDlhZAjboxSurfL1gi_0GEogNoKj0whLr4"/>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-primary" data-icon="verified" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
<h3 className="font-headline text-sm tracking-[0.3em] text-primary">SESSION DETAILS: ALPHA_VOID_881</h3>
</div>
<div className="flex items-baseline gap-4">
<h1 className="text-4xl font-black text-on-background tracking-tight italic">TOTAL POT: 1,250,000</h1>
<span className="text-primary font-headline text-lg tracking-widest">{t('console.runestones_header')}</span>
</div>
</div>
</div>
{/*  Prize Tiers Bento Section  */}
<div className="md:col-span-2 lg:col-span-2 row-span-3 bg-surface-container-high rounded-xl p-6 flex flex-col gap-6">
<div className="flex items-center justify-between">
<h4 className="font-headline text-lg font-bold">{t('prize.prize_hierarchy')}</h4>
<span className="material-symbols-outlined text-on-surface-variant" data-icon="info">info</span>
</div>
<div className="grid grid-cols-1 gap-4">
{/*  Zenith Tier  */}
<div className="p-4 bg-surface-container-highest rounded-lg flex items-center justify-between group hover:shadow-[0_0_15px_rgba(255,231,146,0.15)] transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-tertiary/20 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary text-3xl" data-icon="workspace_premium" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
</div>
<div>
<p className="text-[10px] text-tertiary uppercase tracking-widest font-bold">{t('status.zenith_tier')}</p>
<p className="font-headline text-xl text-on-surface">500,000 RS</p>
</div>
</div>
<div className="text-right">
<p className="text-[10px] text-outline uppercase">{t('prize.winners')}</p>
<p className="font-headline text-xl text-on-surface">01</p>
</div>
</div>
{/*  Glorious Tier  */}
<div className="p-4 bg-surface-container-highest rounded-lg flex items-center justify-between group hover:shadow-[0_0_15px_rgba(172,170,177,0.15)] transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-on-surface-variant/20 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant text-3xl" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<div>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">{t('status.glorious_tier')}</p>
<p className="font-headline text-xl text-on-surface">150,000 RS</p>
</div>
</div>
<div className="text-right">
<p className="text-[10px] text-outline uppercase">{t('prize.winners')}</p>
<p className="font-headline text-xl text-on-surface">05</p>
</div>
</div>
{/*  Supreme Tier  */}
<div className="p-4 bg-surface-container-highest rounded-lg flex items-center justify-between group hover:shadow-[0_0_15px_rgba(143,245,255,0.15)] transition-all">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="diamond" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
</div>
<div>
<p className="text-[10px] text-primary uppercase tracking-widest font-bold">{t('status.supreme_tier')}</p>
<p className="font-headline text-xl text-on-surface">10,000 RS</p>
</div>
</div>
<div className="text-right">
<p className="text-[10px] text-outline uppercase">{t('prize.winners')}</p>
<p className="font-headline text-xl text-on-surface">50</p>
</div>
</div>
</div>
</div>
{/*  Runestone Reward Stats  */}
<div className="md:col-span-1 lg:col-span-1 row-span-3 bg-gradient-to-br from-primary/10 to-transparent border border-primary/10 rounded-xl p-6 flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined text-5xl text-primary mb-4" data-icon="token" style={{ fontVariationSettings: "'FILL' 1" }}>token</span>
<h5 className="text-[10px] tracking-[0.3em] text-on-surface-variant uppercase mb-2">{t('prize.my_estimated')}</h5>
<div className="font-headline text-4xl font-black text-on-background mb-1">42,500</div>
<div className="text-primary font-headline text-sm tracking-widest mb-6">{t('prize.rs_rewards')}</div>
<button className="w-full bg-surface-bright border border-primary/20 hover:border-primary/50 text-on-surface text-xs font-bold py-3 rounded-md transition-all">
                        {t('console.claim_assets')}
                    </button>
</div>
{/*  Winners List Area  */}
<div className="md:col-span-2 lg:col-span-3 row-span-2 bg-surface-container-high rounded-xl p-6 flex flex-col overflow-hidden">
<div className="flex items-center justify-between mb-4">
<h4 className="font-headline text-lg font-bold">{t('prize.winner_registry')}</h4>
<div className="flex items-center gap-2">
<span className="text-[10px] text-on-surface-variant uppercase tracking-widest">{t('common.sort_magnitude')}</span>
<span className="material-symbols-outlined text-sm text-on-surface-variant" data-icon="swap_vert">swap_vert</span>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
<table className="w-full text-left font-label">
<thead>
<tr className="text-[10px] text-on-surface-variant uppercase tracking-wider">
<th className="pb-3 font-medium">{t('common.rank')}</th>
<th className="pb-3 font-medium">{t('settings.pilot_identity')}</th>
<th className="pb-3 font-medium">{t('prize.tier')}</th>
<th className="pb-3 font-medium text-right">{t('common.yield')}</th>
</tr>
</thead>
<tbody className="text-xs">
<tr className="border-b border-outline-variant/10 group hover:bg-white/5 transition-colors">
<td className="py-3 text-tertiary font-bold">01</td>
<td className="py-3 text-on-surface">NEO_WRAITH_X</td>
<td className="py-3"><span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary text-[9px] font-bold uppercase">Zenith</span></td>
<td className="py-3 text-right font-headline font-bold text-on-background">500,000 RS</td>
</tr>
<tr className="border-b border-outline-variant/10 group hover:bg-white/5 transition-colors">
<td className="py-3 text-on-surface-variant font-bold">02</td>
<td className="py-3 text-on-surface">CYBER_PUNK_77</td>
<td className="py-3"><span className="px-2 py-0.5 rounded-full bg-on-surface-variant/10 text-on-surface-variant text-[9px] font-bold uppercase">Glorious</span></td>
<td className="py-3 text-right font-headline font-bold text-on-background">150,000 RS</td>
</tr>
<tr className="border-b border-outline-variant/10 group hover:bg-white/5 transition-colors">
<td className="py-3 text-on-surface-variant font-bold">03</td>
<td className="py-3 text-on-surface">VOID_WALKER_42</td>
<td className="py-3"><span className="px-2 py-0.5 rounded-full bg-on-surface-variant/10 text-on-surface-variant text-[9px] font-bold uppercase">Glorious</span></td>
<td className="py-3 text-right font-headline font-bold text-on-background">150,000 RS</td>
</tr>
<tr className="border-b border-outline-variant/10 group hover:bg-white/5 transition-colors">
<td className="py-3 text-on-surface-variant font-bold">04</td>
<td className="py-3 text-on-surface">LUMINA_BLADE</td>
<td className="py-3"><span className="px-2 py-0.5 rounded-full bg-on-surface-variant/10 text-on-surface-variant text-[9px] font-bold uppercase">Glorious</span></td>
<td className="py-3 text-right font-headline font-bold text-on-background">150,000 RS</td>
</tr>
<tr className="border-b border-outline-variant/10 group hover:bg-white/5 transition-colors">
<td className="py-3 text-primary font-bold">ME</td>
<td className="py-3 text-on-surface">AETHER_PILOT</td>
<td className="py-3"><span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[9px] font-bold uppercase">Supreme</span></td>
<td className="py-3 text-right font-headline font-bold text-on-background">10,000 RS</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
{/*  Floating Decor/HUD element  */}
<div className="fixed bottom-8 right-8 flex flex-col items-end gap-2 pointer-events-none">
<div className="bg-primary/20 px-3 py-1 rounded-sm border-r-2 border-primary">
<p className="text-[8px] font-headline text-primary tracking-widest uppercase">System Latency: 12ms</p>
</div>
<div className="bg-surface-container-high/80 px-3 py-1 rounded-sm">
<p className="text-[8px] font-headline text-on-surface-variant tracking-widest uppercase">Encryption Key: ACTIVE</p>
</div>
</div>

    </>
  );
};
