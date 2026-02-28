import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    emoji: '📱',
    label: 'Recharge',
    sub: 'Mobile & DTH',
    gradient: 'linear-gradient(135deg, #1A56DB 0%, #003580 100%)',
    shadow: 'rgba(26,86,219,0.35)',
    href: '#',
  },
  {
    emoji: '💳',
    label: 'Pay Bill',
    sub: 'Postpaid & Landline',
    gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    shadow: 'rgba(5,150,105,0.35)',
    href: '#',
  },
  {
    emoji: '📶',
    label: 'Wi-Fi Plans',
    sub: 'Broadband & FTTH',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
    shadow: 'rgba(124,58,237,0.35)',
    href: '#',
  },
  {
    emoji: '🔌',
    label: 'New Connection',
    sub: 'SIM & Broadband',
    gradient: 'linear-gradient(135deg, #E8590A 0%, #C2410C 100%)',
    shadow: 'rgba(232,89,10,0.35)',
    href: '#',
  },
  {
    emoji: '📺',
    label: 'DTH',
    sub: 'Direct-to-Home TV',
    gradient: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
    shadow: 'rgba(220,38,38,0.35)',
    href: '#',
  },
  {
    emoji: '🏢',
    label: 'Business',
    sub: 'Enterprise Solutions',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)',
    shadow: 'rgba(15,23,42,0.35)',
    href: '#',
  },
  {
    emoji: '🗺️',
    label: 'Coverage Map',
    sub: 'Check network area',
    gradient: 'linear-gradient(135deg, #0891B2 0%, #0E7490 100%)',
    shadow: 'rgba(8,145,178,0.35)',
    href: '#',
  },
  {
    emoji: '🎧',
    label: 'Support',
    sub: '24×7 Help Center',
    gradient: 'linear-gradient(135deg, #6B7280 0%, #4B5563 100%)',
    shadow: 'rgba(107,114,128,0.35)',
    href: '#',
  },
];

function ServiceTile({ service }: { service: typeof services[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="flex flex-col items-center gap-3 p-6 rounded-[16px] bg-white w-full text-left transition-all duration-200"
      style={{
        boxShadow: hovered
          ? '0 16px 40px rgba(0,0,0,0.12)'
          : '0 2px 12px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        border: '1px solid rgba(0,0,0,0.04)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon circle — semi-skeuomorphic */}
      <div
        className="w-[72px] h-[72px] rounded-full flex items-center justify-center transition-all duration-200 relative"
        style={{
          background: service.gradient,
          boxShadow: hovered
            ? `0 8px 24px ${service.shadow}, inset 0 1px 0 rgba(255,255,255,0.2)`
            : `0 4px 12px ${service.shadow}, inset 0 1px 0 rgba(255,255,255,0.15)`,
          filter: hovered ? 'brightness(1.1)' : 'brightness(1)',
        }}
      >
        <span style={{ fontSize: '28px', lineHeight: 1 }}>{service.emoji}</span>
        {/* Inner highlight ring */}
        <div
          className="absolute inset-1 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.25) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Label */}
      <div className="text-center">
        <div
          className="text-sm font-semibold"
          style={{ fontFamily: "'DM Sans', sans-serif", color: '#1A1A2E' }}
        >
          {service.label}
        </div>
        <div
          className="text-xs mt-0.5"
          style={{ fontFamily: "'DM Sans', sans-serif", color: '#9CA3AF' }}
        >
          {service.sub}
        </div>
      </div>

      {/* Explore CTA — fades in on hover */}
      <div
        className="flex items-center gap-1 text-xs font-bold transition-all duration-150"
        style={{
          color: '#E8590A',
          fontFamily: "'DM Sans', sans-serif",
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(4px)',
        }}
      >
        Explore <ArrowRight className="w-3 h-3" />
      </div>
    </button>
  );
}

export function OurServices() {
  return (
    <section className="py-20" style={{ background: '#F3F4F6' }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-1 rounded-full" style={{ background: '#E8590A' }} />
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ color: '#E8590A', fontFamily: "'DM Sans', sans-serif" }}
            >
              All Services
            </span>
            <div className="w-8 h-1 rounded-full" style={{ background: '#E8590A' }} />
          </div>
          <h2
            className="text-[32px] font-bold mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}
          >
            Our Services
          </h2>
          <p
            className="text-base"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B7280' }}
          >
            Everything you need, in one place
          </p>
        </div>

        {/* 2 × 4 grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {services.map((svc) => (
            <ServiceTile key={svc.label} service={svc} />
          ))}
        </div>
      </div>
    </section>
  );
}
