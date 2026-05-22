import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const sectionInner = {
  maxWidth: '1000px', margin: '0 auto', padding: '0 48px',
};

function ImageBlock({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <figure style={{ margin: 0 }}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`Zoom into image: ${alt}`}
          style={{
            display: 'block', width: '100%',
            padding: 0, border: 'none', background: 'none',
            cursor: 'zoom-in',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
          }}
        >
          <div style={{
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            border: '1px solid var(--border)',
          }}>
            <img
              src={src}
              alt={alt}
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </button>
      </figure>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            backgroundColor: 'rgba(0,0,0,0.94)',
            overflowY: 'auto',
            cursor: 'zoom-out',
            padding: '32px 0',
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              display: 'block', margin: '0 auto',
              width: 'min(96vw, 1800px)',
              height: 'auto',
              boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
              borderRadius: 'var(--radius)',
              cursor: 'zoom-out',
            }}
          />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            aria-label="Close zoomed image"
            style={{
              position: 'fixed', top: 24, right: 24,
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(255,255,255,0.14)',
              border: '1px solid rgba(255,255,255,0.22)',
              color: '#fff', fontSize: 20,
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

export default function ScoutPage() {
  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Nav />
      <main>

        {/* Top back link */}
        <section style={{ padding: 'calc(56px + 48px) 0 32px' }}>
          <div style={sectionInner}>
            <Link
              to="/"
              style={{
                fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)',
                fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)',
                textTransform: 'uppercase', color: 'var(--muted)',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                gap: '6px',
              }}
            >
              <i className="fa-light fa-arrow-left" /> Back to portfolio
            </Link>
          </div>
        </section>

        {/* The case study image */}
        <section style={{ padding: '0 0 64px' }}>
          <div style={sectionInner}>
            <ImageBlock
              src="/scout-case-study.png"
              alt="Scout AI — full case study"
            />
          </div>
        </section>

        {/* Bottom back link */}
        <section style={{ padding: '48px 0 80px', borderTop: '1px solid var(--border)' }}>
          <div style={{ ...sectionInner, display: 'flex', justifyContent: 'center' }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: 'var(--accent)',
                color: 'var(--accent-fg)',
                fontSize: 'var(--type-body)',
                fontWeight: 'var(--weight-medium)',
                padding: '12px 22px',
                borderRadius: 'var(--radius-btn)',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <i className="fa-light fa-arrow-left" />
              Back to portfolio
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
