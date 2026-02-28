import { Building2, Globe, PhoneCall, Server, ChevronRight, ArrowUpRight } from 'lucide-react';

const solutions = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Enterprise Internet',
    desc: 'Dedicated leased lines with 99.9% SLA uptime. Suitable for large organizations with critical connectivity needs.',
    color: '#003580',
    bg: 'rgba(0,53,128,0.07)',
    features: ['1 Gbps+ speeds', 'Dedicated fiber', 'SLA guarantee'],
    cta: 'Request Quote',
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Data Center & Cloud',
    desc: "Co-location, managed hosting, and cloud solutions backed by BSNL's nationwide infrastructure.",
    color: '#E8590A',
    bg: 'rgba(232,89,10,0.07)',
    features: ['Tier III Data Centers', 'Private Cloud', 'DR Solutions'],
    cta: 'Explore Cloud',
  },
  {
    icon: <PhoneCall className="w-6 h-6" />,
    title: 'VoIP & Toll-Free',
    desc: 'Scalable voice communication solutions including SIP trunking, IVR systems, and 1800 toll-free numbers.',
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.07)',
    features: ['SIP Trunking', 'Toll-Free 1800', 'IVR Setup'],
    cta: 'Learn More',
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'MPLS Network',
    desc: 'Multi-site private network connectivity for seamless inter-branch communication across India.',
    color: '#059669',
    bg: 'rgba(5,150,105,0.07)',
    features: ['Pan-India coverage', 'QoS prioritization', 'Managed service'],
    cta: 'Get Started',
  },
];

const stats = [
  { value: '50,000+', label: 'Enterprise Clients' },
  { value: '99.9%', label: 'SLA Uptime' },
  { value: '24×7', label: 'Dedicated Support' },
  { value: '800+', label: 'Districts Served' },
];

export function BusinessSolutions() {
  return (
    <section className="py-16 bg-white" style={{ borderTop: '1px solid #F3F4F6' }}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-1 rounded-full" style={{ background: '#003580' }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#003580', fontFamily: "'DM Sans', sans-serif" }}>
              Enterprise Solutions
            </span>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}>
                Business Solutions
              </h2>
              <p className="mt-1 text-base" style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B7280' }}>
                Powering corporate India with government-backed reliability.
              </p>
            </div>
            <button
              className="text-sm font-semibold flex items-center gap-1"
              style={{ color: '#E8590A', fontFamily: "'DM Sans', sans-serif" }}
            >
              Explore all enterprise plans <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 p-6 rounded-3xl"
          style={{ background: 'linear-gradient(135deg, #003580 0%, #001f52 100%)' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-extrabold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif", color: 'rgba(255,255,255,0.6)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Solution Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="bg-white rounded-3xl p-6 border-2 transition-all duration-300 cursor-pointer flex flex-col"
              style={{ borderColor: '#F3F4F6', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 50px rgba(0,0,0,0.1)';
                (e.currentTarget as HTMLDivElement).style.borderColor = sol.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.05)';
                (e.currentTarget as HTMLDivElement).style.borderColor = '#F3F4F6';
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: sol.bg, color: sol.color }}
              >
                {sol.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}>
                {sol.title}
              </h3>

              {/* Description */}
              <p className="text-sm mb-4 flex-1" style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B7280', lineHeight: 1.6 }}>
                {sol.desc}
              </p>

              {/* Features */}
              <div className="space-y-1.5 mb-5">
                {sol.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: sol.color }} />
                    <span className="text-xs font-medium" style={{ fontFamily: "'DM Sans', sans-serif", color: '#374151' }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA link */}
              <button
                className="flex items-center gap-1 text-sm font-bold transition-all"
                style={{ color: sol.color, fontFamily: "'DM Sans', sans-serif" }}
              >
                {sol.cta}
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div
          className="rounded-3xl p-8 flex flex-wrap items-center justify-between gap-6"
          style={{ background: 'linear-gradient(135deg, rgba(232,89,10,0.06) 0%, rgba(0,53,128,0.06) 100%)', border: '1px solid rgba(0,53,128,0.1)' }}
        >
          <div>
            <h3 className="text-xl font-extrabold" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}>
              Need a custom enterprise plan?
            </h3>
            <p className="text-sm mt-1" style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B7280' }}>
              Talk to our B2B specialists. We will design a solution tailored to your business — at government rates.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button
              className="px-6 py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: 'linear-gradient(135deg, #E8590A 0%, #003580 100%)',
                boxShadow: '0 6px 20px rgba(232,89,10,0.3)',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
            >
              Talk to Sales
            </button>
            <button
              className="px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 border-2"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: '#003580',
                borderColor: '#003580',
                background: 'white',
              }}
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
