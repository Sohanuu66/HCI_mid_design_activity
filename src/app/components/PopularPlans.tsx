import { useState } from 'react';
import { ChevronDown, Zap, Phone, Tv, Wifi, Star } from 'lucide-react';

const plans = [
  {
    id: 'popular',
    badge: 'Most Popular',
    badgeColor: '#E8590A',
    price: '₹349',
    period: '/month',
    headline: 'Super Star',
    hero: true,
    borderColor: '#E8590A',
    glowColor: 'rgba(232,89,10,0.15)',
    ctaStyle: 'filled' as const,
    benefits: [
      { icon: <Zap className="w-4 h-4" />, text: '2 GB/day 5G Data', color: '#7C3AED', bg: 'rgba(124,58,237,0.1)' },
      { icon: <Phone className="w-4 h-4" />, text: 'Unlimited Calls', color: '#003580', bg: 'rgba(0,53,128,0.1)' },
      { icon: <Tv className="w-4 h-4" />, text: 'OTT Subscriptions', color: '#059669', bg: 'rgba(5,150,105,0.1)' },
    ],
    details: [
      { label: 'Validity', value: '28 days' },
      { label: 'SMS', value: '100/day' },
      { label: 'Hotspot', value: 'Yes, included' },
      { label: 'Roaming', value: 'Pan-India' },
      { label: 'Data after limit', value: '64 Kbps' },
    ],
    rating: 4.8,
    reviews: '1.2M reviews',
  },
  {
    id: 'value',
    badge: 'Best Value',
    badgeColor: '#059669',
    price: '₹599',
    period: '/month',
    headline: 'Power Pack',
    hero: false,
    borderColor: '#E5E7EB',
    glowColor: 'transparent',
    ctaStyle: 'outlined' as const,
    benefits: [
      { icon: <Zap className="w-4 h-4" />, text: '3 GB/day 5G Data', color: '#7C3AED', bg: 'rgba(124,58,237,0.1)' },
      { icon: <Phone className="w-4 h-4" />, text: 'Unlimited Calls', color: '#003580', bg: 'rgba(0,53,128,0.1)' },
      { icon: <Wifi className="w-4 h-4" />, text: 'Free Wi-Fi Calling', color: '#E8590A', bg: 'rgba(232,89,10,0.1)' },
    ],
    details: [
      { label: 'Validity', value: '56 days' },
      { label: 'SMS', value: '100/day' },
      { label: 'Hotspot', value: 'Yes, 10 GB' },
      { label: 'Roaming', value: 'Pan-India' },
      { label: 'Data after limit', value: '64 Kbps' },
    ],
    rating: 4.6,
    reviews: '840K reviews',
  },
  {
    id: 'new',
    badge: 'New',
    badgeColor: '#D97706',
    price: '₹199',
    period: '/month',
    headline: 'Starter Plus',
    hero: false,
    borderColor: '#E5E7EB',
    glowColor: 'transparent',
    ctaStyle: 'outlined' as const,
    benefits: [
      { icon: <Zap className="w-4 h-4" />, text: '1 GB/day 4G Data', color: '#7C3AED', bg: 'rgba(124,58,237,0.1)' },
      { icon: <Phone className="w-4 h-4" />, text: 'Unlimited Calls', color: '#003580', bg: 'rgba(0,53,128,0.1)' },
    ],
    details: [
      { label: 'Validity', value: '24 days' },
      { label: 'SMS', value: '100/day' },
      { label: 'Hotspot', value: 'No' },
      { label: 'Roaming', value: 'Pan-India' },
      { label: 'Data after limit', value: '64 Kbps' },
    ],
    rating: 4.3,
    reviews: '310K reviews',
  },
];

function PlanCard({ plan }: { plan: typeof plans[0] }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-[20px] bg-white flex flex-col transition-all duration-200"
      style={{
        border: `2px solid ${hovered || plan.hero ? plan.borderColor : '#F0F0F0'}`,
        boxShadow: plan.hero
          ? `0 20px 60px ${plan.glowColor}, 0 4px 20px rgba(0,0,0,0.08)`
          : hovered
          ? '0 16px 40px rgba(0,0,0,0.1)'
          : '0 4px 16px rgba(0,0,0,0.06)',
        transform: plan.hero ? 'scale(1.04)' : hovered ? 'translateY(-4px)' : 'translateY(0)',
        zIndex: plan.hero ? 2 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient top bar for hero */}
      {plan.hero && (
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-[18px]"
          style={{ background: 'linear-gradient(90deg, #E8590A 0%, #003580 100%)' }}
        />
      )}

      <div className="p-7 flex flex-col flex-1">
        {/* Badge + Rating Row */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="px-3 py-1 rounded-full text-xs font-black text-white uppercase tracking-wider"
            style={{
              background: plan.badgeColor,
              animation: plan.hero ? 'bsnl-pulse 2s ease-in-out infinite' : 'none',
            }}
          >
            {plan.badge}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold" style={{ color: '#1A1A2E', fontFamily: "'DM Sans', sans-serif" }}>
              {plan.rating}
            </span>
            <span className="text-xs" style={{ color: '#9CA3AF', fontFamily: "'DM Sans', sans-serif" }}>
              ({plan.reviews})
            </span>
          </div>
        </div>

        {/* Plan name */}
        <div className="text-sm font-semibold mb-1" style={{ color: '#9CA3AF', fontFamily: "'DM Sans', sans-serif" }}>
          {plan.headline}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-6">
          <span
            className="font-extrabold"
            style={{ fontSize: '36px', lineHeight: 1, color: '#1A1A2E', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {plan.price}
          </span>
          <span className="text-sm" style={{ color: '#9CA3AF', fontFamily: "'DM Sans', sans-serif" }}>
            {plan.period}
          </span>
        </div>

        {/* Benefits */}
        <div className="space-y-3 mb-6 flex-1">
          {plan.benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: b.bg, color: b.color }}
              >
                {b.icon}
              </div>
              <span className="text-sm font-medium" style={{ color: '#1A1A2E', fontFamily: "'DM Sans', sans-serif" }}>
                {b.text}
              </span>
            </div>
          ))}
        </div>

        {/* View Details Accordion Trigger */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-semibold mb-4 transition-colors"
          style={{ color: '#E8590A', fontFamily: "'DM Sans', sans-serif" }}
        >
          <ChevronDown
            className="w-4 h-4 transition-transform duration-200"
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
          {expanded ? 'Hide Details' : 'View Details'}
        </button>

        {/* Accordion Content */}
        <div
          className="overflow-hidden transition-all duration-200"
          style={{
            maxHeight: expanded ? '300px' : '0',
            opacity: expanded ? 1 : 0,
          }}
        >
          <div
            className="rounded-xl p-4 mb-4 space-y-2"
            style={{ background: '#F9FAFB', border: '1px solid #F0F0F0' }}
          >
            {plan.details.map((d) => (
              <div key={d.label} className="flex justify-between text-sm">
                <span style={{ color: '#6B7280', fontFamily: "'DM Sans', sans-serif" }}>{d.label}</span>
                <span className="font-semibold" style={{ color: '#1A1A2E', fontFamily: "'DM Sans', sans-serif" }}>
                  {d.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            background:
              plan.ctaStyle === 'filled'
                ? 'linear-gradient(135deg, #E8590A 0%, #003580 100%)'
                : 'transparent',
            color: plan.ctaStyle === 'filled' ? 'white' : '#003580',
            border: plan.ctaStyle === 'outlined' ? '2px solid #003580' : 'none',
            boxShadow:
              plan.ctaStyle === 'filled' ? '0 6px 20px rgba(232,89,10,0.3)' : 'none',
          }}
          onMouseEnter={(e) => {
            const btn = e.currentTarget as HTMLButtonElement;
            btn.style.filter = 'brightness(1.1)';
            btn.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            const btn = e.currentTarget as HTMLButtonElement;
            btn.style.filter = '';
            btn.style.transform = '';
          }}
        >
          Get This Plan
        </button>
      </div>
    </div>
  );
}

export function PopularPlans() {
  const [sortBy, setSortBy] = useState('Relevance');
  const [showSort, setShowSort] = useState(false);

  return (
    <section className="py-20 bg-white">
      <style>{`
        @keyframes bsnl-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-1 rounded-full" style={{ background: '#E8590A' }} />
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#E8590A', fontFamily: "'DM Sans', sans-serif" }}>
                Prepaid & Postpaid
              </span>
            </div>
            <h2
              className="text-[32px] font-bold"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}
            >
              Popular Plans
            </h2>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: '#F3F4F6',
                color: showSort ? '#E8590A' : '#374151',
                border: `1px solid ${showSort ? '#E8590A' : 'transparent'}`,
              }}
            >
              Sort by: <span style={{ color: '#003580' }}>{sortBy}</span>
              <ChevronDown className="w-4 h-4" style={{ transform: showSort ? 'rotate(180deg)' : '', transition: 'transform 200ms' }} />
            </button>
            {showSort && (
              <div
                className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl py-2 z-30"
                style={{ boxShadow: '0 16px 40px rgba(0,0,0,0.12)', border: '1px solid #F0F0F0' }}
              >
                {['Relevance', 'Price: Low to High', 'Price: High to Low', 'Validity', 'Data'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => { setSortBy(opt); setShowSort(false); }}
                    className="w-full px-5 py-2.5 text-left text-sm transition-colors"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: sortBy === opt ? '#E8590A' : '#374151',
                      fontWeight: sortBy === opt ? 700 : 400,
                      background: sortBy === opt ? 'rgba(232,89,10,0.05)' : 'transparent',
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Plan Cards — hero card is center/elevated */}
        <div className="grid md:grid-cols-3 gap-8 items-center pb-4">
          {/* Non-hero cards get slightly less vertical padding */}
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm mt-10" style={{ fontFamily: "'DM Sans', sans-serif", color: '#9CA3AF' }}>
          All plans include pan-India roaming · GST extra · Subject to fair usage policy ·{' '}
          <button className="underline" style={{ color: '#E8590A' }}>View all plans →</button>
        </p>
      </div>
    </section>
  );
}
