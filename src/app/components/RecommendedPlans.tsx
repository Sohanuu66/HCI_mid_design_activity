import { Star, TrendingUp, ChevronRight, Zap } from 'lucide-react';

const plans = [
  {
    id: 1,
    type: 'Prepaid',
    name: 'Smart Value',
    price: '₹199',
    validity: '24 days',
    data: '1.5 GB/day',
    calls: 'Unlimited',
    sms: '100/day',
    tag: 'Most Chosen',
    tagColor: '#E8590A',
    popular: false,
    accentColor: '#003580',
    savings: null,
  },
  {
    id: 2,
    type: 'Prepaid',
    name: 'Super Star',
    price: '₹349',
    validity: '28 days',
    data: '2 GB/day',
    calls: 'Unlimited',
    sms: '100/day',
    tag: '⭐ #1 Trending',
    tagColor: '#E8590A',
    popular: true,
    accentColor: '#E8590A',
    savings: 'Save ₹50 vs others',
  },
  {
    id: 3,
    type: 'Prepaid',
    name: 'Power Pack',
    price: '₹499',
    validity: '56 days',
    data: '3 GB/day',
    calls: 'Unlimited',
    sms: '100/day',
    tag: 'Best for Heavy Users',
    tagColor: '#7C3AED',
    popular: false,
    accentColor: '#7C3AED',
    savings: '2 months value',
  },
  {
    id: 4,
    type: 'Postpaid',
    name: 'Family Connect',
    price: '₹699',
    validity: 'Monthly',
    data: '150 GB shared',
    calls: 'Unlimited',
    sms: 'Unlimited',
    tag: 'Family Pick',
    tagColor: '#059669',
    popular: false,
    accentColor: '#059669',
    savings: '4 SIMs included',
  },
];

export function RecommendedPlans() {
  return (
    <section className="py-16" style={{ background: '#FAFAFA' }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-1 rounded-full" style={{ background: '#E8590A' }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#E8590A', fontFamily: "'DM Sans', sans-serif" }}>
              Recommended for You
            </span>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}>
                Most Popular Plans
              </h2>
              <p className="mt-1 text-base" style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B7280' }}>
                Chosen by millions of BSNL customers across India.
              </p>
            </div>
            <button
              className="text-sm font-semibold flex items-center gap-1"
              style={{ color: '#E8590A', fontFamily: "'DM Sans', sans-serif" }}
            >
              View all plans <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Trending indicator */}
        <div className="flex items-center gap-2 mb-6 px-4 py-3 rounded-2xl inline-flex" style={{ background: 'rgba(232,89,10,0.06)' }}>
          <TrendingUp className="w-4 h-4" style={{ color: '#E8590A' }} />
            <span className="text-sm font-medium" style={{ color: '#374151', fontFamily: "'DM Sans', sans-serif" }}>
              Based on <strong style={{ color: '#1A1A2E' }}>2.4 million+</strong> recharges this week
            </span>
        </div>

        {/* Plan Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative bg-white rounded-3xl p-6 transition-all duration-300 cursor-pointer border-2 flex flex-col"
              style={{
                borderColor: plan.popular ? plan.accentColor : '#F3F4F6',
                boxShadow: plan.popular
                  ? `0 16px 40px rgba(232,89,10,0.15)`
                  : '0 4px 16px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 24px 50px rgba(0,0,0,0.12)`;
                (e.currentTarget as HTMLDivElement).style.borderColor = plan.accentColor;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = plan.popular
                  ? `0 16px 40px rgba(232,89,10,0.15)`
                  : '0 4px 16px rgba(0,0,0,0.05)';
                (e.currentTarget as HTMLDivElement).style.borderColor = plan.popular ? plan.accentColor : '#F3F4F6';
              }}
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: plan.tagColor,
                    background: `${plan.tagColor}14`,
                  }}
                >
                  {plan.tag}
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#6B7280',
                    background: '#F3F4F6',
                  }}
                >
                  {plan.type}
                </span>
              </div>

              {/* Plan name */}
              <div className="text-sm font-semibold mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: '#9CA3AF' }}>
                {plan.name}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}>
                  {plan.price}
                </span>
                <span className="text-xs" style={{ color: '#9CA3AF', fontFamily: "'DM Sans', sans-serif" }}>
                  / {plan.validity}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4 flex-1">
                {[
                  { label: 'Data', value: plan.data, icon: <Zap className="w-3 h-3" /> },
                  { label: 'Calls', value: plan.calls, icon: '📞' },
                  { label: 'SMS', value: plan.sms, icon: '💬' },
                ].map((detail) => (
                  <div key={detail.label} className="flex items-center justify-between text-sm">
                    <span style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B7280' }}>{detail.label}</span>
                    <span className="font-semibold" style={{ fontFamily: "'DM Sans', sans-serif", color: '#1A1A2E' }}>{detail.value}</span>
                  </div>
                ))}
              </div>

              {/* Savings badge */}
              {plan.savings && (
                <div className="text-xs font-semibold py-1.5 px-3 rounded-xl text-center mb-4" style={{ background: '#F0FDF4', color: '#059669', fontFamily: "'DM Sans', sans-serif" }}>
                  🎉 {plan.savings}
                </div>
              )}

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3" fill={i < 4 ? plan.accentColor : 'none'} style={{ color: plan.accentColor }} />
                ))}
                <span className="text-xs ml-1" style={{ color: '#9CA3AF', fontFamily: "'DM Sans', sans-serif" }}>4.6</span>
              </div>

              {/* CTA */}
              <button
                className="w-full py-3 rounded-xl font-bold text-sm transition-all duration-150"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: plan.popular
                    ? `linear-gradient(135deg, ${plan.accentColor} 0%, #003580 100%)`
                    : `${plan.accentColor}12`,
                  color: plan.popular ? 'white' : plan.accentColor,
                  boxShadow: plan.popular ? `0 6px 16px ${plan.accentColor}40` : 'none',
                }}
              >
                Recharge Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
