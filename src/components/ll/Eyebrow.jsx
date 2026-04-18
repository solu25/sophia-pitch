export default function Eyebrow({ children }) {
  return (
    <span style={{
      fontSize: 'var(--type-small)',
      fontFamily: 'var(--font-badge)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-badge)',
      textTransform: 'uppercase',
      lineHeight: 'var(--leading-h5)',
      display: 'block',
      marginBottom: 'var(--space-24)',
    }}>
      {children}
    </span>
  );
}
