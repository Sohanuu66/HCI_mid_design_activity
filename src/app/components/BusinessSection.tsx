import { Lock, Radio, Cloud, ArrowRight, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <Lock className="w-5 h-5" />,
    title: 'Enterprise Connectivity',
    desc: 'Dedicated leased lines & VPN with guaranteed SLA uptime.',
    color: '#003580',
    bg: 'rgba(0,53,128,0.08)',
  },
  {
    icon: <Radio className="w-5 h-5" />,
    title: 'IoT & M2M Solutions',
    desc: 'Smart infrastructure connectivity for Industry 4.0.',
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: 'Cloud & Hosting',
    desc: 'BSNL-managed cloud with Tier III data center backbone.',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
  },
];

const highlights = [
  '50,000+ enterprise clients nationwide',
  'Dedicated 24×7 B2B support desk',
  'Government-backed pan-India coverage',
  'Custom SLAs from 1 Mbps to 10 Gbps',
];

export function BusinessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-1 rounded-full" style={{ background: '#E8590A' }} />
              <span
                className="text-xs font-bold uppercase tracking-[3px]"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#E8590A' }}
              >
                Business Solutions
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-[40px] font-bold leading-tight mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E', lineHeight: 1.2 }}
            >
              Powering India's<br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #E8590A 0%, #003580 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Enterprises
              </span>
            </h2>

            {/* Body */}
            <p
              className="text-base mb-8 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B7280', lineHeight: 1.7 }}
            >
              From dedicated leased lines to enterprise mobility — BSNL's
              business suite scales with you. Trusted by governments, banks,
              hospitals, and corporates across the nation.
            </p>

            {/* Highlight list */}
            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#059669' }} />
                  <span
                    className="text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: '#374151' }}
                  >
                    {h}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: 'linear-gradient(135deg, #E8590A 0%, #003580 100%)',
                  boxShadow: '0 6px 20px rgba(232,89,10,0.3)',
                }}
                onMouseEnter={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.filter = 'brightness(1.1)';
                  b.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.filter = '';
                  b.style.transform = '';
                }}
              >
                Explore Business Plans
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#003580',
                  border: '2px solid #003580',
                  background: 'transparent',
                }}
                onMouseEnter={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.background = 'rgba(0,53,128,0.06)';
                  b.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.background = 'transparent';
                  b.style.transform = '';
                }}
              >
                Talk to Sales
              </button>
            </div>
          </div>

          {/* Right — Feature Cards */}
          <div className="space-y-4">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="flex items-start gap-5 p-6 rounded-[16px] transition-all duration-200 cursor-default group border"
                style={{ background: '#FAFAFA', borderColor: '#F0F0F0', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = 'white';
                  el.style.borderColor = feat.color + '44';
                  el.style.boxShadow = `0 8px 28px rgba(0,0,0,0.08)`;
                  el.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = '#FAFAFA';
                  el.style.borderColor = '#F0F0F0';
                  el.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)';
                  el.style.transform = 'translateX(0)';
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: feat.bg, color: feat.color }}
                >
                  {feat.icon}
                </div>
                {/* Text */}
                <div className="flex-1">
                  <div
                    className="text-base font-bold mb-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}
                  >
                    {feat.title}
                  </div>
                  <div
                    className="text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B7280', lineHeight: 1.6 }}
                  >
                    {feat.desc}
                  </div>
                </div>
                {/* Arrow hint */}
                <ArrowRight
                  className="w-4 h-4 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: feat.color }}
                />
              </div>
            ))}

            {/* Stat strip — now light */}
            <div
              className="grid grid-cols-3 gap-4 mt-2 p-5 rounded-[16px]"
              style={{ background: '#F3F4F6', border: '1px solid #E5E7EB' }}
            >
              {[
                { value: '99.9%', label: 'SLA Uptime' },
                { value: '24×7', label: 'B2B Support' },
                { value: '800+', label: 'Districts' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-xl font-extrabold"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: '#9CA3AF' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
