export default function MetricCard({ metric, dark }) {
  return (
    <div style={{
      backgroundColor: dark ? 'rgba(255,255,255,0.08)' : 'var(--glass-bg)',
      border: `1px solid ${dark ? 'var(--dark-border)' : 'var(--glass-stroke)'}`,
      borderRadius: 'var(--radius-card)',
      boxShadow: dark ? 'none' : 'var(--shadow-glass)',
      backdropFilter: dark ? 'none' : 'blur(var(--glass-blur))',
      padding: 'var(--space-24)',
      display: 'flex', flexDirection: 'column', gap: 'var(--space-6)',
    }}>
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-h2)',
        fontWeight: 'var(--weight-medium)',
        lineHeight: 'var(--leading-h2)',
        letterSpacing: 'var(--tracking-h2)',
        color: dark ? 'var(--dark-text)' : 'var(--text)',
      }}>
        {metric.value}
      </div>
      <div style={{
        fontSize: 'var(--type-body)',
        color: dark ? 'var(--dark-text-muted)' : 'var(--muted)',
        lineHeight: 'var(--leading-body)',
      }}>
        {metric.label}
      </div>
    </div>
  );
}
