import { useState } from 'react';
import { CreditCard, Wifi, Smartphone, Tv, ArrowRight, CheckCircle } from 'lucide-react';

const quickActions = [
  {
    icon: <Smartphone className="w-6 h-6" style={{ color: '#E8590A' }} />,
    label: 'Mobile Recharge',
    desc: 'Prepaid top-up',
    bg: 'rgba(232,89,10,0.08)',
    color: '#E8590A',
  },
  {
    icon: <CreditCard className="w-6 h-6" style={{ color: '#003580' }} />,
    label: 'Pay Bill',
    desc: 'Postpaid & Landline',
    bg: 'rgba(0,53,128,0.08)',
    color: '#003580',
  },
  {
    icon: <Wifi className="w-6 h-6" style={{ color: '#059669' }} />,
    label: 'Broadband Bill',
    desc: 'Pay BSNL internet bill',
    bg: 'rgba(5,150,105,0.08)',
    color: '#059669',
  },
  {
    icon: <Tv className="w-6 h-6" style={{ color: '#7C3AED' }} />,
    label: 'DTH Recharge',
    desc: 'BSNL DTH plans',
    bg: 'rgba(124,58,237,0.08)',
    color: '#7C3AED',
  },
];

export function RechargePayBills() {
  const [serviceType, setServiceType] = useState('Mobile Recharge');
  const [number, setNumber] = useState('');
  const [amount, setAmount] = useState('');

  const quickAmounts = ['₹99', '₹199', '₹299', '₹349', '₹499', '₹699'];

  return (
    <section className="py-16" style={{ background: '#FAFAFA' }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-1 rounded-full" style={{ background: '#E8590A' }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#E8590A', fontFamily: "'DM Sans', sans-serif" }}>
              Quick Access
            </span>
          </div>
          <h2 className="text-3xl font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}>
            Recharge or Pay Bills
          </h2>
          <p className="mt-1.5 text-base" style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B7280' }}>
            Fast, secure, and instant — top up in under 30 seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Quick Action Tabs + Form */}
          <div className="bg-white rounded-3xl p-8" style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.06)' }}>
            {/* Service Type Selector */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  onClick={() => setServiceType(action.label)}
                  className="p-4 rounded-2xl flex items-center gap-3 transition-all duration-200 text-left border-2"
                  style={{
                    borderColor: serviceType === action.label ? action.color : 'transparent',
                    background: serviceType === action.label ? action.bg : '#F9FAFB',
                  }}
                  onMouseEnter={(e) => {
                    if (serviceType !== action.label) {
                      (e.currentTarget as HTMLButtonElement).style.background = action.bg;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (serviceType !== action.label) {
                      (e.currentTarget as HTMLButtonElement).style.background = '#F9FAFB';
                    }
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: action.bg }}>
                    {action.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: '#1A1A2E' }}>
                      {action.label}
                    </div>
                    <div className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif", color: '#9CA3AF' }}>
                      {action.desc}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2" style={{ fontFamily: "'DM Sans', sans-serif", color: '#374151' }}>
                Mobile / Account Number
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold" style={{ color: '#E8590A', fontFamily: "'DM Sans', sans-serif" }}>
                  +91
                </div>
                <input
                  type="tel"
                  value={number}
                  onChange={(e) => setNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="Enter 10-digit number"
                  className="w-full pl-14 pr-10 py-4 rounded-xl border-2 text-sm outline-none transition-all"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    borderColor: '#E5E7EB',
                    color: '#1A1A2E',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#E8590A'; e.target.style.boxShadow = '0 0 0 4px rgba(232,89,10,0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; }}
                />
                {number.length === 10 && (
                  <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#059669' }} />
                )}
              </div>
            </div>

            {/* Amount */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" style={{ fontFamily: "'DM Sans', sans-serif", color: '#374151' }}>
                Amount (or choose a plan)
              </label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="₹ Enter amount"
                className="w-full px-4 py-4 rounded-xl border-2 text-sm outline-none transition-all mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif", borderColor: '#E5E7EB', color: '#1A1A2E' }}
                onFocus={(e) => { e.target.style.borderColor = '#E8590A'; e.target.style.boxShadow = '0 0 0 4px rgba(232,89,10,0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; }}
              />
              <div className="flex flex-wrap gap-2">
                {quickAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setAmount(amt.slice(1))}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold border-2 transition-all duration-150"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      borderColor: amount === amt.slice(1) ? '#E8590A' : '#E5E7EB',
                      color: amount === amt.slice(1) ? '#E8590A' : '#6B7280',
                      background: amount === amt.slice(1) ? 'rgba(232,89,10,0.08)' : 'white',
                    }}
                  >
                    {amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              className="w-full py-4 rounded-xl text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: 'linear-gradient(135deg, #E8590A 0%, #003580 100%)',
                boxShadow: '0 6px 20px rgba(232,89,10,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 28px rgba(232,89,10,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(232,89,10,0.3)';
              }}
            >
              Proceed to Pay
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Recent Transactions + Trust */}
          <div className="space-y-4">
            {/* Recent recharges */}
            <div className="bg-white rounded-3xl p-6" style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.06)' }}>
              <h3 className="text-base font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}>
                Recent Recharges
              </h3>
              {[
                { number: '98XX XXXX 34', plan: '₹349 — 28 days', date: '12 Feb 2026', color: '#E8590A' },
                { number: '76XX XXXX 12', plan: '₹199 — 24 days', date: '28 Jan 2026', color: '#003580' },
                { number: '98XX XXXX 34', plan: '₹99 — 14 days', date: '14 Jan 2026', color: '#059669' },
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b last:border-0" style={{ borderColor: '#F3F4F6' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold" style={{ background: tx.color }}>
                      ₹
                    </div>
                    <div>
                      <div className="text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif", color: '#1A1A2E' }}>{tx.number}</div>
                      <div className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif", color: '#9CA3AF' }}>{tx.plan}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-right" style={{ fontFamily: "'DM Sans', sans-serif", color: '#9CA3AF' }}>{tx.date}</div>
                    <button className="text-xs font-semibold text-right" style={{ color: '#E8590A', fontFamily: "'DM Sans', sans-serif" }}>
                      Repeat
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '🔒', label: 'SSL Secured', sub: '256-bit encryption' },
                { icon: '⚡', label: 'Instant', sub: 'Credits in seconds' },
                { icon: '🏅', label: 'Govt Backed', sub: 'PSU of India' },
              ].map((trust) => (
                <div key={trust.label} className="bg-white rounded-2xl p-4 text-center" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                  <div className="text-2xl mb-1">{trust.icon}</div>
                  <div className="text-xs font-bold" style={{ fontFamily: "'DM Sans', sans-serif", color: '#1A1A2E' }}>{trust.label}</div>
                  <div className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif", color: '#9CA3AF' }}>{trust.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
