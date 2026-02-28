import { useState } from 'react';
import { ChevronDown, Search, User } from 'lucide-react';

const navItems = [
  {
    label: 'Wi-Fi',
    items: ['Broadband Plans', 'FTTH Connection', 'Wi-Fi Calling', 'Speed Test', 'New Connection'],
  },
  {
    label: 'Postpaid',
    items: ['View Plans', 'Pay Bill', 'New Connection', 'International Roaming', 'Switch Plans'],
  },
  {
    label: 'Prepaid',
    items: ['Recharge', 'View Plans', 'New Connection', 'International Roaming', 'Switch Plans'],
  },
  {
    label: 'DTH',
    items: ['Recharge', 'View Plans', 'New Connection'],
  },
  {
    label: 'Help',
    items: ['Contact Us', 'FAQs', 'Store Locator', 'Track Order'],
  },
];

const accountItems = ['Login', 'My Bills', 'My Plans', 'Raise Complaint'];

const languages = ['English', 'हिन्दी', 'தமிழ்', 'తెలుగు', 'বাংলা'];

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showLang, setShowLang] = useState(false);
  const [lang, setLang] = useState('EN');

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50" style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-18" style={{ height: '70px' }}>
          {/* BSNL Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              {/* BSNL Logo SVG - Orange globe with India map */}
              <div className="relative w-12 h-12 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Orange circle background */}
                  <circle cx="50" cy="50" r="48" fill="#E8590A" />
                  {/* White ring / orbit ellipse */}
                  <ellipse cx="50" cy="50" rx="48" ry="20" fill="none" stroke="white" strokeWidth="4" transform="rotate(-30 50 50)" />
                  {/* India map shape (simplified) */}
                  <path d="M42 25 C38 28 34 32 33 38 C32 44 35 48 37 52 C39 56 38 62 42 67 C46 72 50 74 54 72 C58 70 60 65 62 60 C64 55 65 50 63 45 C61 40 58 36 55 32 C52 28 46 22 42 25Z" fill="white" opacity="0.9" />
                  {/* Green arrow upward */}
                  <path d="M44 55 L46 35 L50 40 L54 35 L56 55 L50 50Z" fill="#2D8A3E" />
                  {/* White arrow downward-right */}
                  <path d="M38 42 L60 58 L55 60 L62 65 L68 45 L63 48Z" fill="white" />
                </svg>
              </div>
              <div>
                <div
                  className="text-2xl font-extrabold leading-none"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: '#003580',
                    letterSpacing: '-0.5px'
                  }}
                >
                  BSNL
                </div>
                <div
                  className="text-[10px] leading-tight"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: '#E8590A',
                    fontStyle: 'italic',
                    fontWeight: 600
                  }}
                >
                  Connecting Bharat
                </div>
              </div>
            </div>

            {/* Main Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    setActiveDropdown(item.label);
                    setHoveredItem(item.label);
                  }}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setHoveredItem(null);
                  }}
                >
                  <button
                    className="px-4 py-2 text-[#1A1A2E] hover:text-[#E8590A] transition-all flex items-center gap-1 rounded-lg relative group text-sm font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.label}
                    <ChevronDown
                      className="w-3.5 h-3.5 transition-transform duration-200"
                      style={{ transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                    {/* Animated underline */}
                    <span
                      className="absolute bottom-0 left-2 right-2 h-0.5 transition-all duration-200 origin-left"
                      style={{
                        background: '#E8590A',
                        transform: hoveredItem === item.label ? 'scaleX(1)' : 'scaleX(0)',
                      }}
                    />
                  </button>

                  {/* Dropdown */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-150"
                      style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)', border: '1px solid rgba(0,0,0,0.06)' }}
                    >
                      {item.items.map((subItem) => (
                        <button
                          key={subItem}
                          className="w-full px-5 py-2.5 text-left text-sm text-[#1A1A2E] hover:text-[#E8590A] transition-colors flex items-center gap-2 group"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E8590A] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          {subItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search services..."
                className="w-64 px-5 py-2.5 pl-11 bg-[#F5F5F5] border border-transparent rounded-full text-sm focus:outline-none focus:ring-2 transition-all"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: '#1A1A2E',
                  // @ts-ignore
                  '--tw-ring-color': '#E8590A44'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#E8590A44';
                  e.target.style.boxShadow = '0 0 0 3px rgba(232,89,10,0.12)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'transparent';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#9CA3AF' }} />
            </div>

            {/* Language Selector */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setShowLang(true)}
              onMouseLeave={() => setShowLang(false)}
            >
              <button
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: showLang ? '#E8590A' : '#6B7280',
                  background: showLang ? 'rgba(232,89,10,0.06)' : '#F5F5F5',
                }}
              >
                🌐 <span>{lang}</span>
                <ChevronDown
                  className="w-3 h-3 transition-transform duration-150"
                  style={{ transform: showLang ? 'rotate(180deg)' : '' }}
                />
              </button>
              {showLang && (
                <div
                  className="absolute top-full right-0 mt-2 w-36 bg-white rounded-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  style={{ boxShadow: '0 16px 40px rgba(0,0,0,0.12)', border: '1px solid rgba(0,0,0,0.06)' }}
                >
                  {languages.map((l) => {
                    const code = l === 'English' ? 'EN' : l.slice(0, 2);
                    return (
                      <button
                        key={l}
                        onClick={() => { setLang(code); }}
                        className="w-full px-4 py-2.5 text-left text-sm transition-colors"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: lang === code ? '#E8590A' : '#374151',
                          fontWeight: lang === code ? 700 : 400,
                          background: lang === code ? 'rgba(232,89,10,0.05)' : 'transparent',
                        }}
                      >
                        {l}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Account Menu */}
            <div
              className="relative"
              onMouseEnter={() => setShowAccountMenu(true)}
              onMouseLeave={() => setShowAccountMenu(false)}
            >
              <button
                className="flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-200 text-sm font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #E8590A 0%, #FF8C42 100%)',
                  color: 'white',
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: '0 4px 15px rgba(232,89,10,0.3)'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(232,89,10,0.4)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 15px rgba(232,89,10,0.3)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                }}
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Login</span>
              </button>

              {showAccountMenu && (
                <div
                  className="absolute top-full right-0 mt-2 w-52 bg-white rounded-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-150"
                  style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)', border: '1px solid rgba(0,0,0,0.06)' }}
                >
                  {accountItems.map((item) => (
                    <button
                      key={item}
                      className="w-full px-5 py-2.5 text-left text-sm text-[#1A1A2E] hover:text-[#E8590A] transition-colors flex items-center gap-2 group"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8590A] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
