import React from 'react';
import { useTranslation } from 'react-i18next';

export const DesktopStore: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>

      {/*  Hero Header  */}
      <header className="mb-12">
        <div className="flex flex-col gap-2">
          <span className="text-primary font-headline text-sm uppercase tracking-[0.3em]">{t('store.imperial_exchange')}</span>
          <h1 className="text-5xl font-black font-headline tracking-tighter text-on-background">{t('store.kinetic_store')}</h1>
        </div>
      </header>
      {/*  USD Purchases Section  */}
      <section className="mb-16">
        <div className="flex items-end justify-between mb-8 border-b border-outline-variant/10 pb-4">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-3xl">payments</span>
            <h3 className="text-2xl font-headline font-bold tracking-tight">{t('store.usd_purchases')}</h3>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-xs font-label rounded-full">{t('store.secure_checkout')}</span>
            <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-xs font-label rounded-full">{t('store.instant_delivery')}</span>
          </div>
        </div>
        {/*  Bento Grid of Product Cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/*  Product Card 1  */}
          <div className="group relative surface-container-high rounded-xl overflow-hidden hover:bg-surface-bright transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-transparent hover:border-primary/20">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Glowing blue energy crystals on a high-tech pedestal with neon particles and dark cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-wuk5HIEebj8WUqTogZ4N4VTuXXSPOWJiL8GYIBo6BfI_07pBAodJnlwcdaLTXiqmL5_DoCkI02BaGBPNloAAdx0g1RNbuFqHP9zIsLtpr54JmuWiySFOdU1OMjZQhseEtxRb7lrvMp6VXOeyGCl8Kzwn6ZAXGdkosm7I7El51_rG7vIVcoEItNfivpOjS-EUpQzrrKzqSamTlFE_QBBT7xMQDY9TjRsc1IQvgQYrHy9sFagygZznHlO5PGI2e0WIlQF691tv5EY" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-primary/20 backdrop-blur-md text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">{t('store.popular')}</span>
              </div>
            </div>
            <div className="p-6 relative -mt-12 bg-gradient-to-t from-surface-container-high via-surface-container-high to-transparent">
              <h4 className="text-xl font-headline font-bold mb-1 group-hover:text-primary transition-colors">{t('store.starter_core_pack')}</h4>
              <p className="text-on-surface-variant text-sm font-body mb-6 line-clamp-2">{t('store.starter_core_desc')}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-headline tracking-tighter">$19.99</span>
                <button className="bg-primary text-on-primary p-3 rounded-lg hover:bg-primary-fixed transition-colors flex items-center gap-2 group/btn">
                  <span className="material-symbols-outlined text-xl">shopping_cart</span>
                  <span className="text-sm font-bold font-headline hidden group-hover/btn:block">{t('store.buy_now')}</span>
                </button>
              </div>
            </div>
          </div>
          {/*  Product Card 2  */}
          <div className="group relative surface-container-high rounded-xl overflow-hidden hover:bg-surface-bright transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-transparent hover:border-primary/20">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Futuristic glowing purple armor components with intricate circuitry patterns and metallic surfaces" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWkJlw37-dKlVfPM1tQ1qzYxbX-udW7jce9IRW6ZF72PGzyMF86JMigwE4sX3QrhNKczhDpA89AY77xWCTVyawmODOo90HcInU1jwgvISNIDEeIHIp-EDYC5ktp6DLvH2Rg9ZJCKldAas2M1E_SxsS59VPWh3GgEHuAgmNhpwWdGD-5DkJ-fMujQjnWwzsMh_uXOMfuZzFnioB5W_Blp6hhzckeEPrQcQRSx60jTjznA826hJVwO-QtnlYIptnVGWep0cQBvVqxiQ" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent"></div>
            </div>
            <div className="p-6 relative -mt-12 bg-gradient-to-t from-surface-container-high via-surface-container-high to-transparent">
              <h4 className="text-xl font-headline font-bold mb-1 group-hover:text-primary transition-colors">{t('status.zenith_plate')}</h4>
              <p className="text-on-surface-variant text-sm font-body mb-6 line-clamp-2">{t('store.zenith_plate_desc')}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-headline tracking-tighter">$45.00</span>
                <button className="bg-primary text-on-primary p-3 rounded-lg hover:bg-primary-fixed transition-colors flex items-center gap-2 group/btn">
                  <span className="material-symbols-outlined text-xl">shopping_cart</span>
                  <span className="text-sm font-bold font-headline hidden group-hover/btn:block">{t('store.buy_now')}</span>
                </button>
              </div>
            </div>
          </div>
          {/*  Product Card 3  */}
          <div className="group relative surface-container-high rounded-xl overflow-hidden hover:bg-surface-bright transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-transparent hover:border-primary/20">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Abstract vibrant digital flow of data in teal and cyan representing high-speed network connection and energy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN9h3iDogqrWZyHNZgPgVU6jjnaEa9-0_WFBBfbL526_hSkVQT5eRQlsn5JqoYwYCeVu8ywpZ-i8gdPZ-RbRKZXk325n9EShMnXQGRTlOOZCj5qvfQUPafK-HN1miNq87PXUGdIpX6AJSDmTMkiKpiSY4auKCaa96aiaeXsRPBh0-KGKGh5GHmj4cW201_BBRCbxX32r_wkaJu1v-GKaSW03fOJaj0pq8tl5QgUtMn1clrQLe52Wwt7hl-diJHjsgwKwRlfmarIy4" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-tertiary/20 backdrop-blur-md text-tertiary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">{t('store.best_value')}</span>
              </div>
            </div>
            <div className="p-6 relative -mt-12 bg-gradient-to-t from-surface-container-high via-surface-container-high to-transparent">
              <h4 className="text-xl font-headline font-bold mb-1 group-hover:text-primary transition-colors">{t('store.neural_boost_30d')}</h4>
              <p className="text-on-surface-variant text-sm font-body mb-6 line-clamp-2">{t('store.neural_boost_desc')}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-headline tracking-tighter">$12.50</span>
                <button className="bg-primary text-on-primary p-3 rounded-lg hover:bg-primary-fixed transition-colors flex items-center gap-2 group/btn">
                  <span className="material-symbols-outlined text-xl">shopping_cart</span>
                  <span className="text-sm font-bold font-headline hidden group-hover/btn:block">{t('store.buy_now')}</span>
                </button>
              </div>
            </div>
          </div>
          {/*  Product Card 4  */}
          <div className="group relative surface-container-high rounded-xl overflow-hidden hover:bg-surface-bright transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-transparent hover:border-primary/20">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Highly detailed futuristic drone with glowing thrusters hovering in a dark laboratory setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEn-n3vES-eSEJ8031QvcShkenEPvGc-mjehDPWEqLsr3Ssgk7d1oZHdYTo0bBTxdEOspASXPuJn4WG560iSIOf5RcfFJj3KZejVLpxQh-p0QiCaB49J5RJPcZKuoPNdnUzSAdm2FJLZxjPCyMpD4k_mliXu6_9hwBVT5RliLcgLoEDhd0e07sDkjBn3VIYKwtXWm7_m4paOsomuAuw5dpTeUkb-zbIxm4Swe9l3UVRrDZqq4AncbwW-nuQbW66ovEZNCaUA2183s" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent"></div>
            </div>
            <div className="p-6 relative -mt-12 bg-gradient-to-t from-surface-container-high via-surface-container-high to-transparent">
              <h4 className="text-xl font-headline font-bold mb-1 group-hover:text-primary transition-colors">{t('store.aeon_sentry_bot')}</h4>
              <p className="text-on-surface-variant text-sm font-body mb-6 line-clamp-2">{t('store.aeon_sentry_desc')}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-headline tracking-tighter">$29.99</span>
                <button className="bg-primary text-on-primary p-3 rounded-lg hover:bg-primary-fixed transition-colors flex items-center gap-2 group/btn">
                  <span className="material-symbols-outlined text-xl">shopping_cart</span>
                  <span className="text-sm font-bold font-headline hidden group-hover/btn:block">{t('store.buy_now')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Cryptocurrency Section  */}
      <section>
        <div className="flex items-end justify-between mb-8 border-b border-outline-variant/10 pb-4">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-tertiary text-3xl">currency_bitcoin</span>
            <h3 className="text-2xl font-headline font-bold tracking-tight">{t('store.crypto_transfer')}</h3>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-xs font-label text-[#acaab1]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {t('store.network_active')}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/*  Transfer Instructions  */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass-card p-8 rounded-xl border border-outline-variant/10">
              <p className="text-on-surface-variant leading-relaxed font-body">
                {t('store.load_wallet')} <span className="text-primary font-bold">{t('common.fate_points')}</span> {t('store.at_current')}
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface">{t('store.no_fees')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface">{t('store.auto_verification')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span className="text-sm text-on-surface">{t('store.secure_cold')}</span>
                </li>
              </ul>
            </div>
          </div>
          {/*  Wallet Interaction  */}
          <div className="lg:col-span-2">
            <div className="surface-container-high p-8 rounded-xl relative overflow-hidden">
              {/*  Decorative background element  */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/*  QR Code Simulation  */}
                  <div className="w-48 h-48 bg-white p-2 rounded-xl shrink-0 group cursor-pointer relative">
                    <div className="w-full h-full bg-surface-container-lowest flex items-center justify-center relative overflow-hidden rounded-lg">
                      <div className="grid grid-cols-8 gap-1 opacity-80">
                        <div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div>
                        <div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div>
                        <div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div>
                        <div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div>
                        <div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div>
                        <div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div>
                        <div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-transparent"></div><div className="w-4 h-4 bg-white"></div><div className="w-4 h-4 bg-white"></div>
                      </div>
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/60 backdrop-blur-sm rounded-xl">
                      <span className="text-xs font-bold font-headline text-primary">{t('store.scan_qr')}</span>
                    </div>
                  </div>
                  {/*  Address Input and Actions  */}
                  <div className="flex-1 w-full space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant">{t('store.deposit_address_label')}</label>
                      <div className="flex flex-col md:flex-row gap-2">
                        <div className="flex-1 bg-surface-container-lowest px-4 py-4 rounded-lg font-mono text-primary text-sm break-all border border-outline-variant/20 flex items-center">
                          0x71C7656EC7ab88b098defB751B7401B5f6d8976F
                        </div>
                        <button className="bg-primary text-on-primary px-6 py-4 rounded-lg font-headline font-bold flex items-center justify-center gap-2 hover:bg-primary-fixed transition-all group active:scale-95">
                          <span className="material-symbols-outlined group-active:hidden">content_copy</span>
                          <span className="material-symbols-outlined hidden group-active:block animate-bounce">check</span>
                          <span className="group-active:hidden">{t('common.copy_address')}</span>
                          <span className="hidden group-active:block">{t('common.copied')}</span>
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-surface-container p-4 rounded-lg flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#627eea]/20 flex items-center justify-center">
                          <span className="material-symbols-outlined text-[#627eea]">stat_0</span>
                        </div>
                        <div>
                          <div className="text-[10px] text-on-surface-variant uppercase font-label">{t('store.usdt_rate')}</div>
                          <div className="text-sm font-headline font-bold">1 USDT = xxxx LUCA</div>
                        </div>
                      </div>
                      <div className="bg-surface-container p-4 rounded-lg flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#f7931a]/20 flex items-center justify-center">
                          <span className="material-symbols-outlined text-[#f7931a]">currency_bitcoin</span>
                        </div>
                        <div>
                          <div className="text-[10px] text-on-surface-variant uppercase font-label">{t('store.wbnb_rate')}</div>
                          <div className="text-sm font-headline font-bold">1 WBNB = xxxx LUCA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
