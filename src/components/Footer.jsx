import { jenny } from '../data/jenny';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, rgba(139,120,255,0.13) 0%, rgba(139,120,255,0.04) 45%, var(--bg) 75%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Noise overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        opacity: 0.28,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
      }} />

      <div
        className="w-full max-w-5xl mx-auto px-12"
        style={{ paddingTop: '80px', paddingBottom: '24px', position: 'relative', zIndex: 1 }}
      >

        {/* Wordmark */}
        <div style={{ paddingTop: '40px' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(72px, 12vw, 140px)',
            fontWeight: 'var(--weight-black)',
            lineHeight: 'var(--leading-h1)',
            letterSpacing: 'var(--tracking-tight)',
            color: 'var(--border)',
            margin: 0,
          }}>
            Jenny Lu
          </p>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-wrap items-center gap-3"
          style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}
        >
          <p style={{ color: 'var(--muted)', fontSize: 'var(--type-caption)', margin: 0 }}>
            © {new Date().getFullYear()} Jenny Lu · Pittsburgh, PA
          </p>

          <div style={{
            width: '3px', height: '3px', borderRadius: '50%',
            backgroundColor: 'var(--border)', flexShrink: 0,
          }} />

          <a
            href={`mailto:${jenny.contact.email}`}
            style={{ color: 'var(--muted)', fontSize: 'var(--type-caption)', textDecoration: 'underline' }}
          >
            {jenny.contact.email}
          </a>

          <div style={{
            width: '3px', height: '3px', borderRadius: '50%',
            backgroundColor: 'var(--border)', flexShrink: 0,
          }} />

          <span style={{ color: 'var(--muted)', fontSize: 'var(--type-caption)' }}>
            Available for new opportunities.
          </span>
        </div>

      </div>
    </footer>
  );
}
