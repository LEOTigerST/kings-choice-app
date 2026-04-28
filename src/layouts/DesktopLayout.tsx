import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const DesktopLayout: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();

    const getNavClass = (path: string) => {
        return location.pathname === path
            ? 'bg-gradient-to-r from-[#8ff5ff]/10 to-transparent text-[#8ff5ff] border-l-4 border-[#8ff5ff] px-6 py-4 flex items-center gap-4 transition-all duration-300'
            : 'text-[#acaab1] px-6 py-4 hover:translate-x-1 transition-transform flex items-center gap-4 hover:bg-[#1f1f26] hover:text-[#8ff5ff]';
    };

    return (
        <div className="flex bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">
            {/* TopNavBar Shell */}
            <header className="fixed top-0 w-full z-50 bg-[#0e0e13]/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(143,245,255,0.08)] flex justify-between items-center px-8 py-4">
                <div className="flex items-center gap-8">
                    <span className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#8ff5ff] to-[#00eefc] font-headline">{t('header.kinetic')}</span>
                    <nav className="hidden md:flex gap-6 font-headline tracking-tight text-sm uppercase">
                        <span className="text-[#8ff5ff] font-bold border-b-2 border-[#8ff5ff] pb-1">{t('common.fate_points')}: 2,500</span>
                        <span className="text-[#acaab1] hover:text-[#8ff5ff] transition-colors">{t('common.vip_level')}: 4</span>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-[#acaab1] hover:bg-[#25252c] hover:shadow-[0_0_15px_rgba(143,245,255,0.2)] p-2 rounded-lg transition-all active:scale-95">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button className="text-[#acaab1] hover:bg-[#25252c] hover:shadow-[0_0_15px_rgba(143,245,255,0.2)] p-2 rounded-lg transition-all active:scale-95">
                        <span className="material-symbols-outlined">account_balance_wallet</span>
                    </button>
                    <div className="w-10 h-10 rounded-full border border-primary/20 overflow-hidden">
                        <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVPb-lCvuRQagWIoVVlUP0DbhR8f8AcJB0sRCbNaWMf7dXgTz24rMXb7cfYj7K_4mZGF6_6bc8qJlgP4Gc27acbBtMAQERj-4rD4Oajh328Hn62iF2WGzLWnFzCA9t_QltmCZF4gOBXe_Xd9hn5bWW1daO1WU44VJvrfhvKN0v2vQP3fKf4oa79ue1OsiLl1Uj6TVSWAtmaVjgmGYKE0uZztCuTHjF1MASW_VDb8Y57x_yJlc0WPsO6LUPzu66C9IMPWo-cnEHGR4" />
                    </div>
                </div>
            </header>

            {/* SideNavBar Shell */}
            <aside className="h-screen w-64 fixed left-0 top-0 z-40 bg-[#131318] border-r border-[#48474d]/20 shadow-2xl flex flex-col pt-24 pb-8">
                <div className="px-6 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary">bolt</span>
                        </div>
                        <div>
                            <h2 className="text-xl font-black text-[#8ff5ff] italic font-headline leading-none">{t('header.kinetic')}</h2>
                            <p className="text-[10px] text-on-surface-variant tracking-[0.2em] font-label">AETHERIS PRIME</p>
                        </div>
                    </div>
                </div>
                <nav className="flex-1 flex flex-col font-headline text-base tracking-wide">
                    <Link to="/console" className={getNavClass('/console')}>
                        <span className="material-symbols-outlined">dashboard</span>
                        {t('nav.console', 'Console')}
                    </Link>
                    <Link to="/store" className={getNavClass('/store')}>
                        <span className="material-symbols-outlined">shopping_bag</span>
                        {t('nav.store', 'Store')}
                    </Link>
                    <Link to="/games" className={getNavClass('/games')}>
                        <span className="material-symbols-outlined">sports_esports</span>
                        {t('nav.play', 'Game Entry')}
                    </Link>
                    <Link to="/prize-inquiry" className={getNavClass('/prize-inquiry')}>
                        <span className="material-symbols-outlined">military_tech</span>
                        {t('nav.prizes', 'Prize Inquiry')}
                    </Link>
                    <Link to="/settings" className={getNavClass('/settings')}>
                        <span className="material-symbols-outlined">settings</span>
                        {t('nav.settings', 'User Settings')}
                    </Link>
                </nav>
                <div className="px-6 mt-auto">
                    <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-4 rounded-md shadow-[0_0_20px_rgba(143,245,255,0.3)] hover:brightness-110 active:scale-95 transition-all font-headline">
                        {t('nav.launch_game', 'LAUNCH GAME')}
                    </button>
                </div>
            </aside>

            {/* Main Content Canvas */}
            <main className="ml-64 pt-24 p-8 min-h-screen w-full">
                <div className="max-w-7xl mx-auto space-y-12">
                    <Outlet />
                </div>
            </main>

            {/* Decorative background elements */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] pointer-events-none -z-10"></div>
            <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[150px] pointer-events-none -z-10"></div>
        </div>
    );
};
