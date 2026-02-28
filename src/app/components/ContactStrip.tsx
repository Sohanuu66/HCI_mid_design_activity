export function ContactStrip() {
  return (
    <section className="py-12" style={{ background: '#EFF6FF', borderTop: '1px solid #DBEAFE', borderBottom: '1px solid #DBEAFE' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Left */}
          <div>
            <h3
              className="text-[20px] font-bold mb-1"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1A1A2E' }}
            >
              Can't find what you're looking for?
            </h3>
            <p
              className="text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#6B7280' }}
            >
              Our support team is available 24×7 — we're always here to help.
            </p>
          </div>

          {/* Right — Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Call button */}
            <a
              href="tel:18001801503"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: '#003580',
                border: '2px solid #003580',
                background: 'white',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = '#003580';
                el.style.color = 'white';
                el.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = 'white';
                el.style.color = '#003580';
                el.style.transform = '';
              }}
            >
              📞 Call 1800-180-1503
            </a>

            {/* Live Chat */}
            <button
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: 'linear-gradient(135deg, #E8590A 0%, #003580 100%)',
                boxShadow: '0 4px 16px rgba(232,89,10,0.25)',
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
              💬 Live Chat
            </button>

            {/* Email link */}
            <a
              href="mailto:support@bsnl.co.in"
              className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-150"
              style={{ fontFamily: "'DM Sans', sans-serif", color: '#E8590A', textDecoration: 'none' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.75'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
            >
              📧 Email Support →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
