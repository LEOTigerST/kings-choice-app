import React from 'react';
import { useTranslation } from 'react-i18next';

export const DesktopConsole: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>

<div className="max-w-7xl mx-auto space-y-12">
{/*  Section 1: Games (Bento Style)  */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-8 h-80">
<div className="group relative overflow-hidden rounded-xl bg-surface-container-high hover:bg-surface-bright transition-all duration-500">
<img alt="Join Game Visual" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" data-alt="Dynamic high-energy esports arena with cinematic neon blue lighting and silhouettes of competitive gaming setups" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxHbS3lWdnCCKvPfvUfSxXX6C5sZ_ErfhxlC3Sp7Kuk4Y92e3KCWMAr21IzW3gNSwKa9S2MPwzkWdm3DGmFyMzWLscc7FB9NkM8r0BaNB4IFwJyAkLVclM-EYYMY1eu6SUPINQ6t4U_9ymHNLueqBDjIS9ANWeRjAym-l-CaiFvR4I4KobFCevDYib5UPGDlP-w86ewcYY48m9xECrcHQJ0QJeCp65Ehdna3wyNz7oo_t715F9gbuMnI5YWtLPM7KxrptSHlSRlh8"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-surface-container-high/40 to-transparent"></div>
<div className="relative h-full p-8 flex flex-col justify-end">
<h3 className="font-headline text-3xl font-bold text-white mb-2">{t('console.games.join')}</h3>
<p className="text-on-surface-variant text-sm mb-6 max-w-xs">{t('console.enter_active')}</p>
<button className="w-fit px-8 py-3 bg-primary text-on-primary font-bold rounded-md hover:shadow-[0_0_25px_rgba(143,245,255,0.4)] transition-all flex items-center gap-2">
                            {t('console.enter_lobby')} <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl bg-surface-container-high hover:bg-surface-bright transition-all duration-500">
<img alt="Create Game Visual" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" data-alt="Abstract digital grid with floating geometric shards and glowing cyan data streams representing a virtual construction environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEMnLi3F1PC3a23P2MboG4C8mLLk4-5XC793h7cb1dILfFrJcYC2GXM_OuxMtGtDXBYhBd4y5ofW7BrtpWRNiBkflpjVoNdca2hK3n8GW0aVjXtNKKGdWFKxTikGITXKWkB3hEQ7I_nEP0nfismsd8cKOGD3TuQGjd7R26Ov86cvqV6sQo2xNTmtTvWCi_UKwyrJ1tbdqOTV8t6RU4FCNWQvzm-_EQZqkcvwKFUC_K4HjNGnMPwApRLAC40KKuJpGsb7-e1rPWWd0"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-surface-container-high/40 to-transparent"></div>
<div className="relative h-full p-8 flex flex-col justify-end">
<h3 className="font-headline text-3xl font-bold text-white mb-2">{t('console.games.create')}</h3>
<p className="text-on-surface-variant text-sm mb-6 max-w-xs">{t('console.host_desc')}</p>
<button className="w-fit px-8 py-3 bg-transparent border border-primary text-primary font-bold rounded-md hover:bg-primary/10 transition-all flex items-center gap-2">
                            {t('console.host_arena')} <span className="material-symbols-outlined text-sm" data-icon="add">add</span>
</button>
</div>
</div>
</section>
{/*  Section 2: Reward Equilibrium (Updated)  */}
<section className="space-y-6">
<div className="flex items-center gap-3">
<span className="w-2 h-8 bg-primary rounded-full"></span>
<h2 className="font-headline text-2xl font-bold tracking-tight uppercase">{t('console.reward_eq')}</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
{/*  Supreme King Mode  */}
<div className="bg-surface-container-high rounded-xl p-6 glass-panel king-glow-gold relative border-t border-tertiary/20 flex flex-col">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-label text-tertiary bg-tertiary/10 px-2 py-1 rounded">{t('status.supreme_king')}</span>
<span className="material-symbols-outlined text-tertiary" data-icon="workspace_premium" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<p className="text-on-surface-variant text-[10px] font-label uppercase tracking-widest mb-1">{t('common.fate_points')}</p>
<h4 className="text-xl font-headline font-bold text-tertiary">12,450</h4>
</div>
<div>
<p className="text-on-surface-variant text-[10px] font-label uppercase tracking-widest mb-1">{t('prize.tickets_swapped')}</p>
<h4 className="text-xl font-headline font-bold text-tertiary/80">42</h4>
</div>
</div>
<div className="mt-auto pt-4 border-t border-outline-variant/10">
<p className="text-[10px] uppercase font-label tracking-widest text-on-surface-variant mb-2">{t('prize.ticket_swap')}</p>
<div className="flex gap-2">
<input className="w-full bg-surface-container-lowest border-0 rounded-md py-2 px-3 text-sm focus:ring-1 focus:ring-tertiary text-tertiary" placeholder="Qty" type="number"/>
<button className="px-4 py-2 bg-tertiary text-on-tertiary-fixed font-bold text-xs rounded hover:brightness-110 transition-all">{t('console.swap')}</button>
</div>
</div>
</div>
{/*  Glorious King Mode  */}
<div className="bg-surface-container-high rounded-xl p-6 glass-panel king-glow-silver relative border-t border-on-surface-variant/20 flex flex-col">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-label text-on-surface-variant bg-on-surface-variant/10 px-2 py-1 rounded">{t('status.glorious_king')}</span>
<span className="material-symbols-outlined text-on-surface-variant" data-icon="military_tech" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<p className="text-on-surface-variant text-[10px] font-label uppercase tracking-widest mb-1">{t('common.fate_points')}</p>
<h4 className="text-xl font-headline font-bold text-on-surface-variant">8,200</h4>
</div>
<div>
<p className="text-on-surface-variant text-[10px] font-label uppercase tracking-widest mb-1">{t('prize.tickets_swapped')}</p>
<h4 className="text-xl font-headline font-bold text-on-surface-variant/80">28</h4>
</div>
</div>
<div className="mt-auto pt-4 border-t border-outline-variant/10">
<p className="text-[10px] uppercase font-label tracking-widest text-on-surface-variant mb-2">{t('prize.ticket_swap')}</p>
<div className="flex gap-2">
<input className="w-full bg-surface-container-lowest border-0 rounded-md py-2 px-3 text-sm focus:ring-1 focus:ring-outline text-on-surface" placeholder="Qty" type="number"/>
<button className="px-4 py-2 bg-on-surface-variant/20 text-on-surface font-bold text-xs rounded hover:bg-on-surface-variant/30 transition-all">{t('console.swap')}</button>
</div>
</div>
</div>
{/*  Zenith King Mode  */}
<div className="bg-surface-container-high rounded-xl p-6 glass-panel king-glow-bronze relative border-t border-tertiary-dim/20 flex flex-col">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-label text-tertiary-dim bg-tertiary-dim/10 px-2 py-1 rounded">{t('status.zenith_king')}</span>
<span className="material-symbols-outlined text-tertiary-dim" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<p className="text-on-surface-variant text-[10px] font-label uppercase tracking-widest mb-1">{t('common.fate_points')}</p>
<h4 className="text-xl font-headline font-bold text-tertiary-dim">4,150</h4>
</div>
<div>
<p className="text-on-surface-variant text-[10px] font-label uppercase tracking-widest mb-1">{t('prize.tickets_swapped')}</p>
<h4 className="text-xl font-headline font-bold text-tertiary-dim/80">12</h4>
</div>
</div>
<div className="mt-auto pt-4 border-t border-outline-variant/10">
<p className="text-[10px] uppercase font-label tracking-widest text-on-surface-variant mb-2">{t('prize.ticket_swap')}</p>
<div className="flex gap-2">
<input className="w-full bg-surface-container-lowest border-0 rounded-md py-2 px-3 text-sm focus:ring-1 focus:ring-tertiary-dim text-tertiary-dim" placeholder="Qty" type="number"/>
<button className="px-4 py-2 bg-tertiary-dim text-on-tertiary-fixed-variant font-bold text-xs rounded hover:brightness-110 transition-all">{t('console.swap')}</button>
</div>
</div>
</div>
{/*  Chosen Points (Updated)  */}
<div className="bg-primary/5 rounded-xl p-6 border border-primary/20 relative group overflow-hidden flex flex-col">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-label text-primary bg-primary/10 px-2 py-1 rounded tracking-widest uppercase">{t('console.chosen_label')}</span>
<span className="material-symbols-outlined text-primary" data-icon="auto_awesome">auto_awesome</span>
</div>
<div className="space-y-4 mb-6">
<div>
<p className="text-on-surface-variant text-[10px] font-label uppercase tracking-widest mb-1">{t('console.points.chosen')}</p>
<h4 className="text-3xl font-headline font-bold text-primary">3,890</h4>
</div>
<div>
<p className="text-on-surface-variant text-[10px] font-label uppercase tracking-widest mb-1">{t('prize.luck_draw')}</p>
<div className="w-full bg-surface-container-lowest/50 border border-primary/10 rounded-md py-2 px-3 text-primary/80 font-headline font-bold">15</div>
</div>
</div>
<p className="text-[10px] text-primary/60 mt-auto uppercase font-label">{t('console.tier_multi')}</p>
</div>
</div>
</section>
{/*  Section 3: ATM & Runestones  */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Simplified ATM Section  */}
<div className="lg:col-span-1 bg-surface-container-low p-8 rounded-xl border-l-4 border-secondary flex flex-col">
<h3 className="font-headline text-2xl font-bold mb-2">{t('console.pr_boost_atm')}</h3>
<p className="text-on-surface-variant text-sm mb-12 leading-relaxed">{t('console.instantly_apply')}</p>
<div className="flex-1 flex flex-col justify-center">
<div className="p-8 rounded-xl border border-secondary/30 bg-secondary/5 mb-8 shadow-[0_0_30px_rgba(214,116,255,0.1)] text-center">
<label className="text-[10px] uppercase font-label tracking-[0.3em] text-on-surface-variant mb-4 block">{t('console.current_points_pr')}</label>
<div className="flex items-baseline justify-center gap-2">
<span className="text-5xl font-headline font-bold text-secondary">1,250.00</span>
<span className="text-sm text-secondary/60 font-label uppercase">CP</span>
</div>
</div>
<button className="w-full py-5 bg-gradient-to-r from-secondary to-secondary-container text-white font-bold rounded-md shadow-[0_8px_30px_rgba(153,0,207,0.4)] hover:brightness-110 active:scale-[0.98] transition-all font-headline tracking-widest text-lg">{t('console.apply_pr_boost')}</button>
</div>
</div>
{/*  Section 4: King Runestones (The Table)  */}
<div className="lg:col-span-2 bg-surface-container-high rounded-xl overflow-hidden flex flex-col">
<div className="p-8 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-highest/30">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="history_edu">history_edu</span>
<h3 className="font-headline text-xl font-bold uppercase tracking-tight">{t('console.king_runestones')}</h3>
</div>
<div className="flex gap-4">
<div className="relative group">
<input className="bg-surface-container-lowest border-0 rounded-md text-xs py-2 px-3 text-on-surface-variant focus:ring-1 focus:ring-primary appearance-none cursor-pointer" type="date"/>
</div>
<div className="relative group">
<select className="bg-surface-container-lowest border-0 rounded-md text-xs py-2 pl-3 pr-8 text-on-surface-variant focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
<option>{t('prize.filter_name')}</option>
<option>Eldritch Shift</option>
<option>Aether Merge</option>
<option>Neon Purge</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[16px] pointer-events-none" data-icon="keyboard_arrow_down">keyboard_arrow_down</span>
</div>
</div>
</div>
<div className="flex-1 overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-lowest/50 text-[10px] font-label text-on-surface-variant uppercase tracking-[0.2em]">
<th className="px-8 py-4 font-medium">{t('common.date')}</th>
<th className="px-8 py-4 font-medium">{t('common.time')}</th>
<th className="px-8 py-4 font-medium">{t('common.name')}</th>
<th className="px-8 py-4 font-medium text-right">{t('common.amount')}</th>
<th className="px-8 py-4 font-medium text-right">{t('common.balance')}</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/5">
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-8 py-5 text-sm font-label text-on-surface-variant group-hover:text-on-surface">2023-11-24</td>
<td className="px-8 py-5 text-sm font-label text-on-surface-variant group-hover:text-on-surface">14:22:05</td>
<td className="px-8 py-5 text-sm font-headline font-semibold text-white">Eldritch Void Surge</td>
<td className="px-8 py-5 text-sm font-headline font-bold text-right text-primary">+1,200</td>
<td className="px-8 py-5 text-sm font-headline text-right text-on-surface-variant">24,560</td>
</tr>
<tr className="bg-surface-container-low/30 hover:bg-primary/5 transition-colors group">
<td className="px-8 py-5 text-sm font-label text-on-surface-variant group-hover:text-on-surface">2023-11-24</td>
<td className="px-8 py-5 text-sm font-label text-on-surface-variant group-hover:text-on-surface">09:15:33</td>
<td className="px-8 py-5 text-sm font-headline font-semibold text-white">{t('console.lobby_ante')}</td>
<td className="px-8 py-5 text-sm font-headline font-bold text-right text-error-dim">-450</td>
<td className="px-8 py-5 text-sm font-headline text-right text-on-surface-variant">23,360</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-8 py-5 text-sm font-label text-on-surface-variant group-hover:text-on-surface">2023-11-23</td>
<td className="px-8 py-5 text-sm font-label text-on-surface-variant group-hover:text-on-surface">21:05:12</td>
<td className="px-8 py-5 text-sm font-headline font-semibold text-white">Aether Catalyst Sync</td>
<td className="px-8 py-5 text-sm font-headline font-bold text-right text-primary">+800</td>
<td className="px-8 py-5 text-sm font-headline text-right text-on-surface-variant">23,810</td>
</tr>
<tr className="bg-surface-container-low/30 hover:bg-primary/5 transition-colors group">
<td className="px-8 py-5 text-sm font-label text-on-surface-variant group-hover:text-on-surface">2023-11-23</td>
<td className="px-8 py-5 text-sm font-label text-on-surface-variant group-hover:text-on-surface">18:44:20</td>
<td className="px-8 py-5 text-sm font-headline font-semibold text-white">{t('console.pr_boost_applied')}</td>
<td className="px-8 py-5 text-sm font-headline font-bold text-right text-error-dim">-2,000</td>
<td className="px-8 py-5 text-sm font-headline text-right text-on-surface-variant">23,010</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-8 py-5 text-sm font-label text-on-surface-variant group-hover:text-on-surface">2023-11-22</td>
<td className="px-8 py-5 text-sm font-label text-on-surface-variant group-hover:text-on-surface">23:59:59</td>
<td className="px-8 py-5 text-sm font-headline font-semibold text-white">{t('prize.weekly_dividend')}</td>
<td className="px-8 py-5 text-sm font-headline font-bold text-right text-primary">+5,000</td>
<td className="px-8 py-5 text-sm font-headline text-right text-on-surface-variant">25,010</td>
</tr>
</tbody>
</table>
</div>
<div className="p-6 border-t border-outline-variant/5 bg-surface-container-lowest/20 flex justify-between items-center">
<span className="text-[10px] text-on-surface-variant font-label">{t('common.showing_transactions', { shown: 5, total: 128 })}</span>
<div className="flex gap-2">
<button className="p-2 hover:bg-surface-container-highest rounded transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
</button>
<button className="p-2 hover:bg-surface-container-highest rounded transition-colors text-primary font-bold">1</button>
<button className="p-2 hover:bg-surface-container-highest rounded transition-colors">2</button>
<button className="p-2 hover:bg-surface-container-highest rounded transition-colors">3</button>
<button className="p-2 hover:bg-surface-container-highest rounded transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
</div>

    </>
  );
};
