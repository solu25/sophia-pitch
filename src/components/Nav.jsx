import { useState, useEffect } from 'react';
import { jenny } from '../data/jenny';

export default function Nav({ from } = {}) {
  const homeHref = from ? `/${from}` : '/';
  const resumeHref = from ? `/resume?from=${from}` : '/resume';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(245, 244, 241, 0.7)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        padding: 'var(--space-12) var(--space-24)',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
      className="nav-bar fixed left-0 right-0 z-50 nav-position-top"
    >
      <div className="nav-container max-w-5xl mx-auto flex items-center justify-between">
        <a href={homeHref} className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', textDecoration: 'none' }}>
          <img
            src="/jenny-avatar.jpg"
            alt="Jenny Lu"
            style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--text)',
              fontSize: 'var(--type-body)',
              fontWeight: 'var(--weight-medium)',
            }}
          >
            Jenny Lu
          </span>
        </a>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-24)' }}>
          <a
            href={homeHref}
            style={{
              color: 'var(--text)',
              fontSize: 'var(--type-body)',
              fontWeight: 'var(--weight-medium)',
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
            }}
            className="hover:opacity-60 transition-opacity duration-150"
          >
            <svg className="nav-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
            Projects
          </a>
          <a
            href={resumeHref}
            style={{
              color: 'var(--text)',
              fontSize: 'var(--type-body)',
              fontWeight: 'var(--weight-medium)',
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
            }}
            className="hover:opacity-60 transition-opacity duration-150"
          >
            <svg className="nav-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
            Resume
          </a>
          <a
            href="https://cal.com/jennylu98/30"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--btn-primary-bg)',
              color: 'var(--btn-primary-fg)',
              fontSize: 'var(--type-body)',
              fontWeight: 'var(--weight-medium)',
              padding: '0 var(--space-18)',
              borderRadius: 'var(--btn-radius)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-6)',
              height: '32px',
            }}
            className="nav-cta btn-hover"
          >
            Schedule a call
          </a>
        </div>
      </div>
    </nav>
  );
}
