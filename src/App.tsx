import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MobileLayout } from './layouts/MobileLayout';
import { DesktopLayout } from './layouts/DesktopLayout';
import { useMediaQuery } from './hooks/useMediaQuery';
import api from './api';

import { DesktopConsole } from './pages/desktop/Console';
import { DesktopStore } from './pages/desktop/Store';
import { DesktopPrizeInquiry } from './pages/desktop/PrizeInquiry';
import { DesktopSettings } from './pages/desktop/Settings';

import { MobileConsole } from './pages/mobile/Console';
import { MobileStore } from './pages/mobile/Store';
import { MobilePrizeInquiry } from './pages/mobile/PrizeInquiry';
import { MobileSettings } from './pages/mobile/Settings';

import { DesktopPlay } from './pages/desktop/Play';
import { MobilePlay } from './pages/mobile/Play';

function App() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const location = useLocation();

  useEffect(() => {
    // Process token on mount if provided in URL (trigger interceptor logic)
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
        localStorage.setItem('auth_token', token);
    }
  }, [location.search]);

  return (
    <Routes>
      <Route path="/" element={isDesktop ? <DesktopLayout /> : <MobileLayout />}>
        <Route index element={<Navigate to="/console" replace />} />
        <Route path="console" element={isDesktop ? <DesktopConsole /> : <MobileConsole />} />
        <Route path="store" element={isDesktop ? <DesktopStore /> : <MobileStore />} />
        <Route path="games" element={isDesktop ? <DesktopPlay /> : <MobilePlay />} />
        <Route path="prize-inquiry" element={isDesktop ? <DesktopPrizeInquiry /> : <MobilePrizeInquiry />} />
        <Route path="settings" element={isDesktop ? <DesktopSettings /> : <MobileSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
