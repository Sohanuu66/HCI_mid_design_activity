import { SegmentationTabs } from './components/SegmentationTabs';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { RechargePayBills } from './components/RechargePayBills';
import { WiFiPlans } from './components/WiFiPlans';

import { PopularPlans } from './components/PopularPlans';
import { OurServices } from './components/OurServices';
import { BusinessSection } from './components/BusinessSection';
import { ContactStrip } from './components/ContactStrip';
import { SiteFooter } from './components/SiteFooter';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#FAFAFA' }}>
      {/* ─── ABOVE THE FOLD ─── */}
      <Navigation />
      <SegmentationTabs />
      <Hero />

      {/* ─── BELOW THE FOLD  (Stage 1) ─── */}
      <RechargePayBills />
      <WiFiPlans />


      {/* ─── STAGE 2 SECTIONS ─── */}
      <PopularPlans />
      <OurServices />
      <BusinessSection />
      <ContactStrip />

      {/* ─── FOOTER ─── */}
      <SiteFooter />

      {/* ─── FLOATING ─── */}
      <BackToTop />
    </div>
  );
}