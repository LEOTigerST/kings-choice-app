import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CreateGameModal } from '../../components/modals/CreateGameModal';
import { JoinGameModal } from '../../components/modals/JoinGameModal';

export const MobileConsole: React.FC = () => {
  const { t } = useTranslation();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <>

{/*  Section: Games  */}
<section className="mb-12">
<div className="mb-6">
<h2 className="font-headline text-3xl font-bold uppercase tracking-tight">{t('console.games.title')}</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<button onClick={() => setIsJoinModalOpen(true)} className="group relative overflow-hidden bg-surface-container-high rounded-xl p-8 h-44 flex flex-col justify-end transition-all active:scale-95 border border-white/5 hover:border-secondary/30">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-8xl">login</span>
</div>
<div className="relative z-10 text-left">
<p className="font-headline text-2xl font-bold text-secondary group-hover:drop-shadow-[0_0_8px_rgba(214,116,255,0.6)] transition-all">{t('console.games.join')}</p>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
<button onClick={() => setIsCreateModalOpen(true)} className="group relative overflow-hidden bg-surface-container-high rounded-xl p-8 h-44 flex flex-col justify-end transition-all active:scale-95 border border-white/5 hover:border-primary/30">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-8xl">add_circle</span>
</div>
<div className="relative z-10 text-left">
<p className="font-headline text-2xl font-bold text-primary group-hover:drop-shadow-[0_0_8px_rgba(143,245,255,0.6)] transition-all">{t('console.games.create')}</p>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
</div>
</section>
{/*  Section: Points  */}
<section className="mb-12">
<div className="mb-6">
<h2 className="font-headline text-3xl font-bold uppercase tracking-tight">{t('console.points.title')}</h2>
</div>
<div className="bg-surface-container-low rounded-xl p-1 overflow-hidden border border-white/5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
{/*  Fate Points  */}
<div className="bg-surface-container-low p-8">
<div className="flex items-center justify-between mb-10">
<div>
<h3 className="font-headline text-sm uppercase tracking-widest text-on-surface-variant">{t('common.fate_points')}</h3>
</div>
<span className="text-4xl font-headline font-bold text-primary">1,200</span>
</div>
<div className="space-y-6">
{/*  Supreme King Pool  */}
<div className="bg-surface-container-high rounded-xl border-l-4 border-tertiary p-5 king-gold-glow">
<div className="flex justify-between items-center mb-4">
<span className="font-headline text-xs font-bold text-tertiary uppercase">{t('status.supreme_king')}</span>
<span className="font-headline font-bold text-xl text-tertiary">450</span>
</div>
<div className="space-y-3 pt-3 border-t border-white/5">
<div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-on-surface-variant">
<span>{t('prize.tickets_swapped')}</span>
<span className="text-on-surface font-bold">12</span>
</div>
<div className="flex gap-2">
<input className="flex-1 bg-surface-container-lowest border-none rounded-md px-3 py-2 text-xs font-headline text-on-surface focus:ring-1 focus:ring-tertiary/40 placeholder:text-outline-variant" placeholder={t('console.swap_amt')} type="number"/>
<button className="px-4 py-2 bg-tertiary text-on-tertiary font-bold text-[10px] uppercase tracking-widest rounded-md hover:opacity-90 active:scale-95 transition-all">{t('console.swap_btn')}</button>
</div>
</div>
</div>
{/*  Glorious King Pool  */}
<div className="bg-surface-container-high rounded-xl border-l-4 border-on-surface-variant p-5 king-silver-glow">
<div className="flex justify-between items-center mb-4">
<span className="font-headline text-xs font-bold text-on-surface-variant uppercase">{t('status.glorious_king')}</span>
<span className="font-headline font-bold text-xl text-on-surface">600</span>
</div>
<div className="space-y-3 pt-3 border-t border-white/5">
<div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-on-surface-variant">
<span>{t('prize.tickets_swapped')}</span>
<span className="text-on-surface font-bold">0</span>
</div>
<div className="flex gap-2">
<input className="flex-1 bg-surface-container-lowest border-none rounded-md px-3 py-2 text-xs font-headline text-on-surface focus:ring-1 focus:ring-outline/40 placeholder:text-outline-variant" placeholder={t('console.swap_amt')} type="number"/>
<button className="px-4 py-2 bg-on-surface-variant text-surface text-[10px] font-bold uppercase tracking-widest rounded-md hover:opacity-90 active:scale-95 transition-all">{t('console.swap_btn')}</button>
</div>
</div>
</div>
{/*  Zenith King Pool  */}
<div className="bg-surface-container-high rounded-xl border-l-4 border-error p-5 king-bronze-glow">
<div className="flex justify-between items-center mb-4">
<span className="font-headline text-xs font-bold text-error uppercase">{t('status.zenith_king')}</span>
<span className="font-headline font-bold text-xl text-error">150</span>
</div>
<div className="space-y-3 pt-3 border-t border-white/5">
<div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-on-surface-variant">
<span>{t('prize.tickets_swapped')}</span>
<span className="text-on-surface font-bold">5</span>
</div>
<div className="flex gap-2">
<input className="flex-1 bg-surface-container-lowest border-none rounded-md px-3 py-2 text-xs font-headline text-on-surface focus:ring-1 focus:ring-error/40 placeholder:text-outline-variant" placeholder={t('console.swap_amt')} type="number"/>
<button className="px-4 py-2 bg-error text-on-error font-bold text-[10px] uppercase tracking-widest rounded-md hover:opacity-90 active:scale-95 transition-all">{t('console.swap_btn')}</button>
</div>
</div>
</div>
</div>
</div>
{/*  Chosen Points  */}
<div className="bg-surface-container-low p-8 flex flex-col">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="font-headline text-sm uppercase tracking-widest text-on-surface-variant">{t('console.points.chosen')}</h3>
</div>
<span className="text-4xl font-headline font-bold text-secondary">8,450</span>
</div>
<div className="p-6 bg-surface-container-high rounded-xl border border-white/5 mb-8">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-widest text-on-surface-variant font-headline">{t('prize.luck_draw')}</span>
<span className="text-xl font-headline font-bold text-secondary">124</span>
</div>
<p className="text-[10px] text-on-surface-variant mt-2 italic">* Automatically tracked based on history</p>
</div>
<div className="mt-auto bg-surface-container-high rounded-xl p-8 relative overflow-hidden group border border-white/5">
<div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
<span className="material-symbols-outlined text-9xl">auto_awesome</span>
</div>
<p className="text-xs text-on-surface-variant mb-3 uppercase tracking-widest font-headline">{t('console.points.chosen_status')}</p>
<p className="font-body text-base leading-relaxed text-on-surface/80">
                            Your Chosen points reflect your contribution and standing in the digital ecosystem. Higher balances unlock exclusive store items and tier rewards.
                        </p>
</div>
</div>
</div>
</div>
</section>
{/*  Section: ATM  */}
<section className="mb-12">
<div className="mb-6">
<h2 className="font-headline text-3xl font-bold uppercase tracking-tight">{t('console.atm.title')}</h2>
</div>
<div className="bg-surface-container-high rounded-xl p-6 md:p-10 relative overflow-hidden shadow-2xl border border-white/5">
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex-1 w-full md:w-auto">
<div className="p-6 bg-surface-container-lowest rounded-xl border border-white/10 flex justify-between items-center">
<div>
<span className="text-xs uppercase tracking-widest text-on-surface-variant font-headline block mb-1">{t('console.current_points_pr')}</span>
<p className="text-3xl font-headline font-bold text-primary">0.00</p>
</div>
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">trending_up</span>
</div>
</div>
</div>
<div className="w-full md:w-72">
<button className="w-full py-5 bg-gradient-to-br from-[#8ff5ff] to-[#00eefc] text-[#003f43] font-headline font-bold uppercase tracking-widest rounded-md hover:shadow-[0_0_30px_rgba(143,245,255,0.4)] active:scale-95 transition-all">
                        {t('console.apply_pr_boost')}
                    </button>
</div>
</div>
</div>
</section>
{/*  Section: King Runestones  */}
<section className="mb-20">
<div className="mb-6">
<h2 className="font-headline text-3xl font-bold uppercase tracking-tight">{t('console.king_runestones')}</h2>
</div>
<div className="bg-surface-container-low rounded-xl overflow-hidden border border-white/5 p-4">
{/*  Balance Header  */}
<div className="p-10 bg-gradient-to-r from-surface-container-high to-surface-container-low border-b border-white/5 flex items-center justify-between">
<div>
<h3 className="font-headline text-xs uppercase tracking-widest text-on-surface-variant">{t('console.runestones')}</h3>
<p className="text-5xl font-headline font-bold mt-2 text-on-surface">24,190</p>
</div>
<div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_30px_rgba(143,245,255,0.1)]">
<span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>hexagon</span>
</div>
</div>
{/*  Transaction History  */}
<div className="p-4">
<div className="flex flex-col sm:flex-row gap-5 mb-8">
<div className="relative flex-1 group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-base pointer-events-none group-focus-within:text-primary-fixed transition-colors">calendar_today</span>
<input className="w-full bg-surface-container-lowest border-none rounded-md pl-12 pr-4 py-3 text-sm text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary/40 cursor-pointer appearance-none" placeholder={t('prize.filter_date')} type="date"/>
</div>
<div className="relative flex-1 group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-base pointer-events-none group-focus-within:text-primary-fixed transition-colors">filter_list</span>
<select className="w-full bg-surface-container-lowest border-none rounded-md pl-12 pr-10 py-3 text-sm text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary/40 appearance-none cursor-pointer">
<option disabled={true} defaultValue="selected" value="">{t('prize.search_name')}</option>
<option className="bg-surface-container-high" value="arena">Arena Reward</option>
<option className="bg-surface-container-high" value="daily">{t('prize.daily_login')}</option>
<option className="bg-surface-container-high" value="pr_boost">{t('console.pr_boost_app')}</option>
<option className="bg-surface-container-high" value="market">{t('store.market_trade')}</option>
<option className="bg-surface-container-high" value="quest">{t('prize.quest_success')}</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-base pointer-events-none">expand_more</span>
</div>
</div>
<div className="overflow-x-auto p-4">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/10">
<th className="py-4 px-1 font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold w-[75px]">{t('common.date')}</th>
<th className="py-4 px-1 font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold w-[45px]">{t('common.time')}</th>
<th className="py-4 px-1 font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold">{t('common.name')}</th>
<th className="py-4 px-1 font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold text-right w-[60px]">{t('common.amount')}</th>
<th className="py-4 px-1 font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold text-right w-[70px]">{t('common.balance')}</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 px-1 font-headline text-[11px] text-on-surface">2023.10.24</td>
<td className="py-4 px-1 font-headline text-[11px] text-on-surface-variant">14:22</td>
<td className="py-4 px-1 font-body text-[11px] text-on-surface truncate">Arena</td>
<td className="py-4 px-1 font-headline text-[11px] text-primary font-bold text-right">+450</td>
<td className="py-4 px-1 font-headline text-[11px] text-on-surface text-right font-medium">24,190</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 px-1 font-headline text-[11px] text-on-surface">2023.10.23</td>
<td className="py-4 px-1 font-headline text-[11px] text-on-surface-variant">09:15</td>
<td className="py-4 px-1 font-body text-[11px] text-on-surface truncate">Daily</td>
<td className="py-4 px-1 font-headline text-[11px] text-primary font-bold text-right">+100</td>
<td className="py-4 px-1 font-headline text-[11px] text-on-surface text-right font-medium">23,740</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 px-1 font-headline text-[11px] text-on-surface">2023.10.22</td>
<td className="py-4 px-1 font-headline text-[11px] text-on-surface-variant">21:40</td>
<td className="py-4 px-1 font-body text-[11px] text-on-surface truncate">{t('console.pr_boost')}</td>
<td className="py-4 px-1 font-headline text-[11px] text-error font-bold text-right">-1,200</td>
<td className="py-4 px-1 font-headline text-[11px] text-on-surface text-right font-medium">23,640</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 px-1 font-headline text-[11px] text-on-surface">2023.10.21</td>
<td className="py-4 px-1 font-headline text-[11px] text-on-surface-variant">18:05</td>
<td className="py-4 px-1 font-body text-[11px] text-on-surface truncate">Market</td>
<td className="py-4 px-1 font-headline text-[11px] text-primary font-bold text-right">+2,500</td>
<td className="py-4 px-1 font-headline text-[11px] text-on-surface text-right font-medium">24,840</td>
</tr>
<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 px-1 font-headline text-[11px] text-on-surface">2023.10.20</td>
<td className="py-4 px-1 font-headline text-[11px] text-on-surface-variant">11:32</td>
<td className="py-4 px-1 font-body text-[11px] text-on-surface truncate">Quest</td>
<td className="py-4 px-1 font-headline text-[11px] text-primary font-bold text-right">+750</td>
<td className="py-4 px-1 font-headline text-[11px] text-on-surface text-right font-medium">22,340</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
      <CreateGameModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} />
      <JoinGameModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </>
  );
};
