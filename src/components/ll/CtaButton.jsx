export default function CtaButton({ href, variant = 'primary', children, from }) {
  // Schedule-a-call CTA removed — primary variant no longer renders.
  if (variant === 'primary') {
    return null;
  }

  return (
    <a
      className="btn-hover"
      href={from ? `/resume?from=${from}` : '/resume'}
      style={{
        color: 'var(--text)',
        fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
        textDecoration: 'none',
        border: '1px solid var(--border)',
        padding: '0 var(--btn-x-padding)', height: 'var(--btn-height)',
        borderRadius: 'var(--btn-radius)',
        display: 'inline-flex', alignItems: 'center', gap: '8px',
      }}
    >
      {children || 'View resume'}
    </a>
  );
}
