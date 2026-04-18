export default function CtaButton({ href, variant = 'primary', children, from }) {
  if (variant === 'primary') {
    return (
      <a
        className="btn-hover"
        href={href || 'https://cal.com/jennylu98/30'}
        target={href ? undefined : '_blank'}
        rel={href ? undefined : 'noopener noreferrer'}
        style={{
          backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-fg)',
          fontSize: 'var(--type-body)', fontWeight: 'var(--weight-medium)',
          padding: '0 var(--btn-x-padding)', height: 'var(--btn-height)',
          borderRadius: 'var(--btn-radius)',
          textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px',
        }}
      >
        <img src="/jenny-avatar.jpg" alt="" style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} />
        {children || 'Schedule a call'}
      </a>
    );
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
