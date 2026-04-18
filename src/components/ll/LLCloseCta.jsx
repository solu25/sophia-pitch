import NoiseOverlay from './NoiseOverlay';
import CtaButton from './CtaButton';

export default function LLCloseCta({ closeText, from }) {
  return (
    <div style={{
      background: 'linear-gradient(0deg, rgba(139,120,255,0.35) 0%, rgba(139,120,255,0.18) 40%, rgba(139,120,255,0.06) 65%, var(--bg) 90%)',
      position: 'relative',
    }}>
      <NoiseOverlay light />
      <div className="section-pad" style={{
        maxWidth: '1000px', margin: '0 auto', padding: 'var(--space-96) var(--space-48)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-12)',
        position: 'relative', zIndex: 1,
      }}>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--type-h3)', fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-h2)', letterSpacing: 'var(--tracking-h3)',
          color: 'var(--text)', margin: 0, textAlign: 'center', maxWidth: '600px',
        }}>
          {closeText}
        </p>
        <div className="resume-cta-buttons" style={{ display: 'flex', gap: 'var(--space-18)', alignItems: 'center', marginTop: 'var(--space-24)' }}>
          <CtaButton />
          <CtaButton variant="outline" from={from} />
        </div>
      </div>
    </div>
  );
}
