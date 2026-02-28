import { useState } from 'react';
import { Wifi, Zap, Shield, ChevronRight } from 'lucide-react';

const wifiPlans = [
  {
    name: 'Starter',
    speed: '40 Mbps',
    price: '₹449',
    period: '/month',
    data: 'Unlimited Data',
    features: ['Free Installation', 'Wi-Fi Router Provided', '24x7 Support'],
    badge: null,
    accentColor: '#003580',
    badgeBg: null,
  },
  {
    name: 'Popular',
    speed: '100 Mbps',
    price: '₹699',
    period: '/month',
    data: 'Unlimited Data',
    features: ['Free Installation', 'Dual-Band Router', 'Priority Support', 'Static IP Option'],
    badge: 'BEST VALUE',
    accentColor: '#E8590A',
    badgeBg: '#E8590A',
  },
  {
    name: 'Giga',
    speed: '200 Mbps',
    price: '₹999',
    period: '/month',
    data: 'Unlimited Data',
    features: ['Free Installation', 'Tri-band Wi-Fi 6', 'Dedicated CRM', 'Static IP Included'],
    badge: 'BLAZING FAST',
    accentColor: '#7C3AED',
    badgeBg: '#7C3AED',
  },
];

const categories = ['Home Broadband', 'FTTH Fiber', 'Business Leased Line', 'Student Pack'];

export function WiFiPlans() {
  const [selectedCategory, setSelectedCategory] = useState('Home Broadband');

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-1 rounded-full" style={{ background: '#003580' }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#003580', fontFamily: "'DM Sans', sans-serif" }}>
              Broadband & FTTH
            </span>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}>
                Find the Best Wi-Fi Plan for You
              </h2>
              <p className="mt-1 text-base" style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B7280' }}>
                Lightning-fast fiber broadband delivered to your doorstep.
              </p>
            </div>
            <button
              className="text-sm font-semibold flex items-center gap-1 transition-all"
              style={{ color: '#E8590A', fontFamily: "'DM Sans', sans-serif" }}
            >
              View all plans <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border-2"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                borderColor: selectedCategory === cat ? '#003580' : '#E5E7EB',
                background: selectedCategory === cat ? '#003580' : 'transparent',
                color: selectedCategory === cat ? 'white' : '#6B7280',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {wifiPlans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-3xl p-7 transition-all duration-300 cursor-pointer border-2"
              style={{
                background: 'white',
                borderColor: plan.badge === 'BEST VALUE' ? plan.accentColor : '#F3F4F6',
                boxShadow: plan.badge === 'BEST VALUE'
                  ? `0 20px 60px rgba(232,89,10,0.12)`
                  : '0 4px 20px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 24px 60px rgba(0,0,0,0.12)`;
                (e.currentTarget as HTMLDivElement).style.borderColor = plan.accentColor;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = plan.badge === 'BEST VALUE'
                  ? `0 20px 60px rgba(232,89,10,0.12)`
                  : '0 4px 20px rgba(0,0,0,0.05)';
                (e.currentTarget as HTMLDivElement).style.borderColor = plan.badge === 'BEST VALUE' ? plan.accentColor : '#F3F4F6';
              }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3 left-6 px-4 py-1 rounded-full text-xs font-black text-white uppercase tracking-widest"
                  style={{ background: plan.badgeBg! }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Speed Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl" style={{ background: `${plan.accentColor}12` }}>
                  <Zap className="w-3.5 h-3.5" style={{ color: plan.accentColor }} />
                  <span className="text-xs font-bold" style={{ color: plan.accentColor, fontFamily: "'DM Sans', sans-serif" }}>
                    {plan.speed}
                  </span>
                </div>
                <Wifi className="w-5 h-5" style={{ color: plan.accentColor, opacity: 0.5 }} />
              </div>

              {/* Plan Name */}
              <div className="text-sm font-semibold mb-1" style={{ color: '#9CA3AF', fontFamily: "'DM Sans', sans-serif" }}>
                {plan.name} Plan
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}>
                  {plan.price}
                </span>
                <span className="text-sm" style={{ color: '#9CA3AF', fontFamily: "'DM Sans', sans-serif" }}>{plan.period}</span>
              </div>

              <div className="text-xs font-semibold mb-5 px-2 py-1 rounded-lg inline-block" style={{ background: '#F0FDF4', color: '#059669', fontFamily: "'DM Sans', sans-serif" }}>
                ∞ {plan.data}
              </div>

              {/* Features */}
              <div className="space-y-2.5 mb-6">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5">
                    <Shield className="w-3.5 h-3.5 flex-shrink-0" style={{ color: plan.accentColor }} />
                    <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: '#374151' }}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className="w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: plan.badge === 'BEST VALUE'
                    ? `linear-gradient(135deg, ${plan.accentColor} 0%, #003580 100%)`
                    : `${plan.accentColor}12`,
                  color: plan.badge === 'BEST VALUE' ? 'white' : plan.accentColor,
                  boxShadow: plan.badge === 'BEST VALUE' ? `0 6px 20px ${plan.accentColor}40` : 'none',
                }}
              >
                Get This Plan
              </button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm mt-8" style={{ fontFamily: "'DM Sans', sans-serif", color: '#9CA3AF' }}>
          All plans include free installation · No annual lock-in · Cancel anytime
        </p>
      </div>
    </section>
  );
}
