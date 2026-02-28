import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPct =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPct > 0.4);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div
      className="fixed bottom-8 right-8 z-50 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 300ms ease, transform 300ms ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Tooltip */}
      <div
        className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-white whitespace-nowrap transition-all duration-150"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: '#1A1A2E',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(4px)',
          pointerEvents: 'none',
        }}
      >
        Back to Top
        {/* Tooltip arrow */}
        <div
          className="absolute top-full right-4 w-0 h-0"
          style={{
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '5px solid #1A1A2E',
          }}
        />
      </div>

      {/* Button */}
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Back to top"
        className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-200"
        style={{
          background: 'linear-gradient(135deg, #E8590A 0%, #003580 100%)',
          boxShadow: hovered
            ? '0 12px 32px rgba(232,89,10,0.45)'
            : '0 6px 20px rgba(232,89,10,0.3)',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
