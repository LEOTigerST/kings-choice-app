import React from 'react';
import { useTranslation } from 'react-i18next';

export const DesktopPlay: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>

{/*  Scrollable Game Section  */}
<section className="flex-1 p-12 overflow-y-auto pb-48">
<header className="mb-12">
<h2 className="text-5xl font-black font-headline tracking-tighter text-on-surface mb-2">{t('play.simulation_entries')}</h2>
<p className="text-on-surface-variant font-medium max-w-xl">{t('play.simulation_desc')}</p>
</header>
<div className="flex overflow-x-auto gap-8 pb-12 hide-scrollbar snap-x snap-mandatory">
{/*  Game Card 1  */}
<div className="flex-shrink-0 w-[420px] snap-start">
<div className="tonal-card rounded-xl overflow-hidden group border border-white/5">
<div className="relative h-[580px]">
<img alt="Neon Overdrive Game Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="futuristic cyberpunk city at night with neon lights, high speed light trails, and sleek hovercars, cinematic composition" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcgPAJydTH51FPR4I8vLLsoPpgUZV64bYMhPZ3m9c6pbY4X5c9jn6GBVWVTjGKAXZvbrsrMZv4OjxSEd2i-EJLZGyZW3Qs3Guo1o9et9lbJe0dyIbcna9GDW6K8euWYHcFm3KaDgXnPRLkj5APQceonNdyEqdXuRvhZ5V1Av9RJz5tUQk0WUxxC0o_Gp2LAVjYOJPJ87B0whWaUngEvS3hqVmf7_cq-Bo9oNcZwtbykWpNkoUvwgtnQWAtecsQT6OEQ0X-3xjiVug"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded-sm border border-primary/30 uppercase tracking-widest mb-4 inline-block">{t('common.high_intensity')}</span>
<h3 className="text-3xl font-black font-headline text-white mb-2">{t('play.neon_overdrive')}</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">{t('play.neon_overdrive_desc')}</p>
<button className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all">
<span className="material-symbols-outlined">bolt</span>
                                {t('common.quick_match')}
                            </button>
</div>
</div>
</div>
</div>
{/*  Game Card 2  */}
<div className="flex-shrink-0 w-[420px] snap-start">
<div className="tonal-card rounded-xl overflow-hidden group border border-white/5">
<div className="relative h-[580px]">
<img alt="Tactical Zero Game Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="advanced tactical combat specialist in high-tech exoskeleton standing in a rain-slicked industrial hangar, blue ambient glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-dzC3g_xPt5OiSs2P0yV8v0Eu6RFH93aGe5dItVdLBJaCUoM8fMp7XY8Q7BxcXPzDSbiq_ma5M1mpwBwNx91mx2_LaTiEfKri4cYGyUbbvTZu4ZUS3WXwA8-B-tzTfjSWnHP-XKZykPF5ilobyV4olA-aMF7R3jP3FUF68kAXewJoxB9jnokZl-xhsstlmaONFT--tfrwHDv-n-vn4mfSfRRvioJp2vEWFxT5aGoHH8xVhwANwFEjkPqGSk93-creYzZ-VEhRmv8"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="bg-secondary/20 text-secondary text-[10px] font-bold px-2 py-1 rounded-sm border border-secondary/30 uppercase tracking-widest mb-4 inline-block">{t('common.strategy')}</span>
<h3 className="text-3xl font-black font-headline text-white mb-2">{t('play.tactical_zero')}</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">{t('play.tactical_zero_desc')}</p>
<button className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all">
<span className="material-symbols-outlined">bolt</span>
                                {t('common.quick_match')}
                            </button>
</div>
</div>
</div>
</div>
{/*  Game Card 3  */}
<div className="flex-shrink-0 w-[420px] snap-start">
<div className="tonal-card rounded-xl overflow-hidden group border border-white/5">
<div className="relative h-[580px]">
<img alt="Void Runner Game Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="vast abstract cosmic void with floating crystalline structures and fractal energy patterns, purple and cyan color scheme" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnjQK4j5RzUQdtT2tG0BdzRLM-nvhAeICWSyhPL1ZdQRkRL9dGrMGxFMKWgM87mHgQA8phNO2CFA-X-d_nubT3MesCDeqx7VxWmxoQjDrVqK88phaiqtfCUBms4ndqmpRKzNotAW5pHI5Au8-QaH0DnTpNSODDZJbx0m5O0gsgVlY8gm3cX1rC1XHPbnjIn7QQM3e7M13JOF8AePczVl2PdTWcOMLPlX7gCVAoK20_AMt-rWX3e4dbOXNz2baDvmN9wEMgJiq-5oo"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0e] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="bg-tertiary/20 text-tertiary text-[10px] font-bold px-2 py-1 rounded-sm border border-tertiary/30 uppercase tracking-widest mb-4 inline-block">{t('common.exploration')}</span>
<h3 className="text-3xl font-black font-headline text-white mb-2">{t('play.void_runner')}</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">{t('play.void_runner_desc')}</p>
<button className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all">
<span className="material-symbols-outlined">bolt</span>
                                {t('common.quick_match')}
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Fixed Model Selection Bar at the bottom  */}
<footer className="fixed bottom-0 left-[240px] right-0 bg-[#0e0e13]/95 backdrop-blur-xl border-t border-white/[0.05] p-6 z-40">
<div className="max-w-7xl mx-auto flex items-center justify-center gap-12">
<div className="flex items-center gap-3 shrink-0">
<span className="material-symbols-outlined text-primary text-xl">settings_input_component</span>
<h3 className="text-sm font-bold font-headline tracking-widest uppercase">{t('common.match_setup')}</h3>
</div>
<div className="h-8 w-px bg-white/10 hidden md:block"></div>
<div className="flex gap-4 items-center">
{/*  Supreme King Option  */}
<label className="w-[220px] relative block cursor-pointer group">
<input defaultChecked={true} className="peer sr-only" name="king-model" type="radio"/>
<div className="p-3 px-5 rounded-xl bg-surface-container-highest border-2 border-transparent peer-checked:border-tertiary transition-all hover:bg-surface-bright flex items-center gap-4">
<span className="material-symbols-outlined text-tertiary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
<div className="flex flex-col overflow-hidden">
<span className="text-tertiary font-headline font-bold text-sm tracking-tight whitespace-nowrap">{t('status.supreme_king')}</span>
<p className="text-[10px] text-on-surface-variant leading-none mt-1 whitespace-nowrap">{t('play.max_reward')}</p>
</div>
</div>
</label>
{/*  Glorious King Option  */}
<label className="w-[220px] relative block cursor-pointer group">
<input className="peer sr-only" name="king-model" type="radio"/>
<div className="p-3 px-5 rounded-xl bg-surface-container-highest border-2 border-transparent peer-checked:border-secondary transition-all hover:bg-surface-bright flex items-center gap-4">
<span className="material-symbols-outlined text-secondary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
<div className="flex flex-col overflow-hidden">
<span className="text-on-surface font-headline font-bold text-sm tracking-tight whitespace-nowrap">{t('status.glorious_king')}</span>
<p className="text-[10px] text-on-surface-variant leading-none mt-1 whitespace-nowrap">{t('play.balanced_efficiency')}</p>
</div>
</div>
</label>
{/*  Zenith King Option  */}
<label className="w-[220px] relative block cursor-pointer group">
<input className="peer sr-only" name="king-model" type="radio"/>
<div className="p-3 px-5 rounded-xl bg-surface-container-highest border-2 border-transparent peer-checked:border-primary transition-all hover:bg-surface-bright flex items-center gap-4">
<span className="material-symbols-outlined text-primary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
<div className="flex flex-col overflow-hidden">
<span className="text-on-surface font-headline font-bold text-sm tracking-tight whitespace-nowrap">{t('status.zenith_king')}</span>
<p className="text-[10px] text-on-surface-variant leading-none mt-1 whitespace-nowrap">{t('play.ultra_stability')}</p>
</div>
</div>
</label>
</div>
</div>
</footer>

    </>
  );
};
