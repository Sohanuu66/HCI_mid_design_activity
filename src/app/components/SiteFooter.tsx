import { useState } from 'react';
import { Linkedin, Twitter, Facebook, Youtube, ChevronDown } from 'lucide-react';

const footerColumns = [
  {
    title: 'Quick Actions',
    links: ['Recharge Now', 'Pay Bill', 'New Connection', 'Check Balance', 'Port to BSNL'],
  },
  {
    title: 'Support & Help',
    links: ['FAQs', 'Contact Us', 'Coverage Map', 'Store Locator', 'Service Status'],
  },
  {
    title: 'Business & Legal',
    links: ['Business Solutions', 'Enterprise Plans', 'Privacy Policy', 'Terms of Use', 'Grievance'],
  },
  {
    title: 'About BSNL',
    links: ['About Us', 'Investor Relations', 'Press & Media', 'Careers', 'Annual Report'],
  },
];

const socialIcons = [
  { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
  { icon: <Twitter className="w-4 h-4" />, label: 'X / Twitter' },
  { icon: <Facebook className="w-4 h-4" />, label: 'Facebook' },
  { icon: <Youtube className="w-4 h-4" />, label: 'YouTube' },
];

const languages = ['English', 'हिन्दी', 'தமிழ்', 'తెలుగు', 'বাংলা'];

export function SiteFooter() {
  const [lang, setLang] = useState('English');
  const [showLang, setShowLang] = useState(false);

  return (
    <footer style={{ background: '#0F172A' }}>
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top row: Logo + tagline */}
        <div className="flex flex-wrap items-start justify-between gap-8 mb-12">
          <div>
            <div
              className="text-2xl font-extrabold text-white mb-1"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              BSNL
            </div>
            <div
              className="text-sm italic mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#E8590A' }}
            >
              Connecting Bharat
            </div>
            <p
              className="text-xs max-w-xs"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748B', lineHeight: 1.7 }}
            >
              Securely · Affordably · Reliably<br />
              A Government of India Enterprise under<br />
              the Dept. of Telecommunications.
            </p>
          </div>

          {/* 4 nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1 min-w-0">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: '#60A5FA' }}
                >
                  {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <button
                        className="text-sm transition-colors text-left"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: '#94A3B8' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#E8590A'; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#94A3B8'; }}
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-10" style={{ borderBottom: '1px solid #1E293B' }}>
          <div className="flex items-center gap-3">
            <span className="text-xs" style={{ fontFamily: "'DM Sans', sans-serif", color: '#64748B' }}>
              Follow us:
            </span>
            {socialIcons.map((s) => (
              <button
                key={s.label}
                aria-label={s.label}
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-150"
                style={{ background: '#1E293B', color: '#64748B' }}
                onMouseEnter={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.color = '#60A5FA';
                  b.style.background = '#263347';
                  b.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.color = '#64748B';
                  b.style.background = '#1E293B';
                  b.style.transform = '';
                }}
              >
                {s.icon}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {['TRAI Compliant', 'ISO 9001:2015', 'SSL Secured'].map((badge) => (
              <span
                key={badge}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#64748B',
                  border: '1px solid #1E293B',
                  background: '#1E293B',
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ background: '#0A101E', borderTop: '1px solid #1E293B' }}>
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#475569' }}
          >
            © 2026 BSNL. A Government of India Enterprise. All rights reserved.
          </p>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLang(!showLang)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: '#94A3B8',
                background: '#1E293B',
                border: '1px solid #263347',
              }}
            >
              🌐 {lang}
              <ChevronDown
                className="w-3 h-3 transition-transform duration-150"
                style={{ transform: showLang ? 'rotate(180deg)' : '' }}
              />
            </button>
            {showLang && (
              <div
                className="absolute bottom-full right-0 mb-2 w-40 bg-[#1E293B] rounded-2xl py-2 z-50"
                style={{ boxShadow: '0 -16px 40px rgba(0,0,0,0.3)', border: '1px solid #263347' }}
              >
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setShowLang(false); }}
                    className="w-full px-4 py-2.5 text-left text-xs transition-colors"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: l === lang ? '#60A5FA' : '#94A3B8',
                      fontWeight: l === lang ? 700 : 400,
                      background: l === lang ? 'rgba(96,165,250,0.08)' : 'transparent',
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
