export default function ProjectCard({ project }) {
  return (
    <article
      className="project-card"
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
        padding: '40px',
        transition: 'transform 0.15s ease, border-color 0.15s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = '#2a2a2a';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--border)';
      }}
    >
      {/* Company + tags row */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span style={{ color: 'var(--muted)', fontSize: 'var(--type-small)', fontFamily: 'var(--font-badge)', fontWeight: 'var(--weight-medium)', letterSpacing: 'var(--tracking-badge)', textTransform: 'uppercase' }}>
          {project.company}
        </span>
        <span style={{ color: 'var(--border)', fontSize: 'var(--type-caption)' }}>·</span>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              border: '1px solid var(--border)',
              color: 'var(--muted)',
              fontSize: 'var(--type-tag)',
              padding: '2px 8px',
              letterSpacing: 'var(--tracking-wide)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: 'var(--type-subhead)',
          fontWeight: 'var(--weight-bold)',
          color: 'var(--text)',
          lineHeight: 'var(--leading-snug)',
          letterSpacing: 'var(--tracking-snug)',
          marginBottom: '6px',
        }}
      >
        {project.title}
      </h3>

      {/* Role */}
      <p style={{ color: 'var(--muted)', fontSize: 'var(--type-small)', marginBottom: '16px' }}>
        {project.role}
      </p>

      {/* Headline */}
      <p style={{ color: 'var(--text)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', marginBottom: '8px' }}>
        {project.headline}
      </p>
      <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', marginBottom: '32px' }}>
        {project.outcome}
      </p>

      {/* Metrics */}
      <div className="flex flex-wrap gap-px"
        style={{ border: '1px solid var(--border)', backgroundColor: 'var(--border)' }}>
        {project.metrics.map((m, i) => (
          <div
            key={i}
            style={{
              backgroundColor: 'var(--bg)',
              padding: '16px 20px',
              flex: '1 1 auto',
              minWidth: '100px',
            }}
          >
            <div
              style={{
                color: 'var(--accent)',
                fontSize: 'var(--type-metric)',
                fontWeight: 'var(--weight-black)',
                letterSpacing: 'var(--tracking-snug)',
                lineHeight: 'var(--leading-tight)',
                marginBottom: '4px',
              }}
            >
              {m.value}
            </div>
            <div style={{ color: 'var(--muted)', fontSize: 'var(--type-label)' }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
