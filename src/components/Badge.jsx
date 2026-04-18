/**
 * Badge — reusable label/tag component
 *
 * Props:
 *   children   — text content
 *   variant    — 'outline' | 'filled' | 'subtle' | 'solid'  (default: 'outline')
 *   size       — 'sm' | 'md' | 'lg'  (default: 'md')
 *   icon       — optional Font Awesome class string (e.g. 'fa-solid fa-circle')
 *   dot        — bool: show a small colored dot before text
 */
export default function Badge({ children, variant = 'outline', size = 'md', icon, dot }) {
  const sizes = {
    sm: { fontSize: 'var(--type-small)', padding: 'var(--space-6) var(--space-12)', gap: '5px', dotSize: '5px' },
    md: { fontSize: 'var(--type-small)', padding: 'var(--space-6) var(--space-12)', gap: 'var(--space-6)', dotSize: '6px' },
    lg: { fontSize: 'var(--type-lead)', padding: 'var(--space-6) var(--space-12)', gap: 'var(--space-12)', dotSize: '7px' },
  };

  const variants = {
    outline: {
      backgroundColor: 'transparent',
      border: '1px solid var(--border)',
      color: 'var(--text)',
    },
    filled: {
      backgroundColor: 'var(--surface)',
      border: '1px solid var(--border)',
      color: 'var(--text)',
      boxShadow: 'var(--shadow-glass)',
    },
    subtle: {
      backgroundColor: 'var(--accent-subtle)',
      border: 'none',
      color: 'var(--accent)',
    },
    solid: {
      backgroundColor: 'var(--accent)',
      border: 'none',
      color: 'var(--accent-fg)',
    },
    glass: {
      backgroundColor: 'var(--glass-bg)',
      border: '1px solid var(--glass-stroke)',
      color: 'var(--text)',
      boxShadow: 'var(--shadow-glass)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
    },
  };

  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.outline;

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      borderRadius: '24px',
      padding: s.padding,
      fontFamily: 'var(--font-badge)',
      fontSize: s.fontSize,
      fontWeight: size === 'lg' ? 'var(--weight-semibold)' : 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-badge)',
      textTransform: 'uppercase',
      lineHeight: 'var(--leading-h5)',
      whiteSpace: 'nowrap',
      ...v,
    }}>
      {dot && (
        <span style={{
          width: s.dotSize,
          height: s.dotSize,
          borderRadius: '50%',
          backgroundColor: 'currentColor',
          flexShrink: 0,
          opacity: 0.6,
        }} />
      )}
      {icon && (
        <i className={icon} style={{ fontSize: s.fontSize }} aria-hidden="true" />
      )}
      {children}
    </span>
  );
}
