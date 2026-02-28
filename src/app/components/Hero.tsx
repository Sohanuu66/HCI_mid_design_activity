import { useState } from 'react';
import { Wifi, Phone, Tv, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export function Hero() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Warm orange-tinted radial gradient on left */}
        <div
          className="absolute top-0 left-0 w-[700px] h-[700px]"
          style={{
            background: 'radial-gradient(circle at 15% 40%, rgba(232,89,10,0.06) 0%, rgba(255,140,66,0.04) 35%, transparent 70%)',
          }}
        />
        {/* Blue radial gradient subtle */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle at 80% 80%, rgba(0,53,128,0.05) 0%, transparent 60%)',
          }}
        />

        {/* Abstract Network SVG */}
        <svg className="absolute top-10 left-0 w-[480px] h-[480px] opacity-[0.05]" viewBox="0 0 400 400">
          <g stroke="#E8590A" strokeWidth="1.5" fill="none">
            <circle cx="100" cy="80" r="35" />
            <circle cx="280" cy="100" r="28" />
            <circle cx="190" cy="230" r="32" />
            <circle cx="330" cy="280" r="22" />
            <circle cx="70" cy="300" r="26" />
            <circle cx="220" cy="340" r="18" />
            <line x1="100" y1="80" x2="280" y2="100" strokeDasharray="4,6" />
            <line x1="280" y1="100" x2="190" y2="230" strokeDasharray="4,6" />
            <line x1="190" y1="230" x2="330" y2="280" strokeDasharray="4,6" />
            <line x1="100" y1="80" x2="190" y2="230" strokeDasharray="4,6" />
            <line x1="70" y1="300" x2="190" y2="230" strokeDasharray="4,6" />
            <line x1="220" y1="340" x2="330" y2="280" strokeDasharray="4,6" />
            <line x1="70" y1="300" x2="220" y2="340" strokeDasharray="4,6" />
          </g>
          <g fill="#003580" opacity="0.4">
            <circle cx="100" cy="80" r="4" />
            <circle cx="280" cy="100" r="4" />
            <circle cx="190" cy="230" r="4" />
            <circle cx="330" cy="280" r="4" />
            <circle cx="70" cy="300" r="4" />
            <circle cx="220" cy="340" r="4" />
          </g>
        </svg>

        {/* Decorative circles */}
        <div
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-5"
          style={{ background: '#E8590A' }}
        />
        <div
          className="absolute top-40 -right-10 w-32 h-32 rounded-full opacity-5"
          style={{ background: '#003580' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Section */}
          <div className="space-y-7 relative z-10">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(232,89,10,0.08)', color: '#E8590A', fontFamily: "'DM Sans', sans-serif" }}>
              <CheckCircle className="w-3.5 h-3.5" />
              India's #1 Government Telecom Provider
            </div>

            <h1
              className="leading-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: '48px',
                lineHeight: 1.15,
                color: '#1A1A2E',
              }}
            >
              Manage Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #E8590A 0%, #FF8C42 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Telecom Services
              </span>{' '}
              Easily
            </h1>

            <p
              className="leading-relaxed max-w-lg"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '16px',
                color: '#6B7280',
                lineHeight: 1.7,
              }}
            >
              Recharge, pay bills, upgrade plans, and manage Wi-Fi in seconds.
              Trusted by millions of Indians, built for every corner of Bharat.
            </p>

            {/* Phone Number Input */}
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#374151' }}
              >
                Enter Mobile Number to Recharge
              </label>
              <div className="flex gap-3 flex-wrap sm:flex-nowrap">
                <div className="relative flex-1">
                  <div
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold"
                    style={{ color: '#E8590A', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    +91
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="98XXXXXXXX"
                    className="w-full pl-14 pr-4 py-4 rounded-xl border-2 text-base transition-all duration-200 outline-none"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      borderColor: phoneNumber.length === 10 ? '#2D8A3E' : '#E5E7EB',
                      color: '#1A1A2E',
                      background: 'white',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#E8590A';
                      e.target.style.boxShadow = '0 0 0 4px rgba(232,89,10,0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = phoneNumber.length === 10 ? '#2D8A3E' : '#E5E7EB';
                      e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                    }}
                  />
                  {phoneNumber.length === 10 && (
                    <CheckCircle
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: '#2D8A3E' }}
                    />
                  )}
                </div>
                <button
                  className="px-6 py-4 rounded-xl text-white font-bold text-sm flex items-center gap-2 flex-shrink-0 transition-all duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: 'linear-gradient(135deg, #E8590A 0%, #FF8C42 100%)',
                    boxShadow: '0 6px 20px rgba(232,89,10,0.35)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 28px rgba(232,89,10,0.45)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(232,89,10,0.35)';
                  }}
                >
                  Proceed
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 text-white rounded-xl font-bold transition-all duration-200 text-sm"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: '#003580',
                  boxShadow: '0 8px 24px rgba(0,53,128,0.25)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px) scale(1.02)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 14px 32px rgba(0,53,128,0.35)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0) scale(1)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(0,53,128,0.25)';
                }}
              >
                Recharge / Pay Bill
              </button>

              <button
                className="px-8 py-4 rounded-xl font-bold transition-all duration-200 text-sm"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#003580',
                  border: '2px solid #003580',
                  background: 'white',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,53,128,0.05)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(0,53,128,0.12)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'white';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                }}
              >
                View Plans
              </button>
            </div>

            {/* Stats Row */}
            <div className="flex gap-8 pt-2">
              {[
                { value: '500M+', label: 'Subscribers' },
                { value: '99.9%', label: 'Network Uptime' },
                { value: '800+', label: 'Districts Covered' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-xl font-extrabold"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: '#9CA3AF' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Pricing Card */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="w-full max-w-sm bg-white rounded-[24px] p-8 transition-all duration-300 cursor-default"
              style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 32px 80px rgba(0,0,0,0.15)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Decorative top gradient bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-[24px]"
                style={{ background: 'linear-gradient(90deg, #E8590A 0%, #003580 100%)' }}
              />

              {/* Most Popular Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full mb-5"
                style={{ background: 'rgba(232,89,10,0.08)' }}>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: '#E8590A' }}
                >
                  ⭐ MOST POPULAR
                </span>
              </div>

              {/* Plan Name */}
              <div
                className="text-sm font-semibold mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B7280' }}
              >
                Prepaid Plan
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="font-extrabold"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '48px',
                    color: '#1A1A2E',
                    lineHeight: 1,
                  }}
                >
                  ₹349
                </span>
                <span
                  className="text-base"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B7280' }}
                >
                  / month
                </span>
              </div>

              {/* Divider */}
              <div className="h-px mb-6" style={{ background: '#F3F4F6' }} />

              {/* Benefits */}
              <div className="space-y-4 mb-6">
                {[
                  { icon: <Phone className="w-5 h-5" style={{ color: '#003580' }} />, label: 'Unlimited Calls', bg: 'rgba(0,53,128,0.08)', sub: 'All networks, ISD included' },
                  { icon: <Zap className="w-5 h-5" style={{ color: '#7C3AED' }} />, label: '5G / 4G Data', bg: 'rgba(124,58,237,0.08)', sub: '2GB/day high-speed data' },
                  { icon: <Tv className="w-5 h-5" style={{ color: '#059669' }} />, label: 'OTT Subscriptions', bg: 'rgba(5,150,105,0.08)', sub: 'Disney+, SonyLIV & more' },
                  { icon: <Wifi className="w-5 h-5" style={{ color: '#E8590A' }} />, label: 'Free Wi-Fi Access', bg: 'rgba(232,89,10,0.08)', sub: 'BSNL hotspot across India' },
                ].map((benefit) => (
                  <div key={benefit.label} className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: benefit.bg }}
                    >
                      {benefit.icon}
                    </div>
                    <div>
                      <div
                        className="text-sm font-semibold"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: '#1A1A2E' }}
                      >
                        {benefit.label}
                      </div>
                      <div
                        className="text-xs"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: '#9CA3AF' }}
                      >
                        {benefit.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Validity */}
              <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-xl" style={{ background: '#F9FAFB' }}>
                <span className="text-sm" style={{ color: '#6B7280', fontFamily: "'DM Sans', sans-serif" }}>
                  ⏱ Valid for <strong style={{ color: '#1A1A2E' }}>28 days</strong> from recharge date
                </span>
              </div>

              {/* CTA Button */}
              <button
                className="w-full py-4 text-white font-bold rounded-xl transition-all duration-200 text-sm flex items-center justify-center gap-2"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: 'linear-gradient(135deg, #E8590A 0%, #003580 100%)',
                  boxShadow: '0 8px 24px rgba(232,89,10,0.3)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.02)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 14px 32px rgba(232,89,10,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(232,89,10,0.3)';
                }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Microcopy */}
              <p
                className="text-center text-xs mt-3"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#9CA3AF' }}
              >
                No hidden charges · Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
