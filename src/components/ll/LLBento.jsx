import { useRef, useState, useEffect } from 'react';

/**
 * LLBento — asymmetric 3-col bento grid section (How I Work)
 *
 * Expects company.howIWork = {
 *   heading: string,
 *   subheading: string,
 *   tiles: [
 *     { heading, body, image, alt },  // tile 1 — tall left col
 *     { heading, body, image, alt },  // tile 2 — wide top-right
 *     { heading, body, image, alt },  // tile 3 — mid bottom
 *     { image, alt },                 // tile 4 — image-only bottom-right
 *   ]
 * }
 */
export default function LLBento({ company }) {
  const bento = company.howIWork;
  const tiles = bento?.tiles || [];

  const headingRef = useRef(null);
  const tile1Ref = useRef(null);
  const tile2Ref = useRef(null);
  const tile3Ref = useRef(null);
  const tile4Ref = useRef(null);

  const [headingVisible, setHeadingVisible] = useState(false);
  const [tile1Visible, setTile1Visible] = useState(false);
  const [tile2Visible, setTile2Visible] = useState(false);
  const [tile3Visible, setTile3Visible] = useState(false);
  const [tile4Visible, setTile4Visible] = useState(false);

  useEffect(() => {
    const observers = [];

    const watch = (ref, setter) => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setter(true); obs.disconnect(); } },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    };

    watch(headingRef, setHeadingVisible);
    watch(tile1Ref, setTile1Visible);
    watch(tile2Ref, setTile2Visible);
    watch(tile3Ref, setTile3Visible);
    watch(tile4Ref, setTile4Visible);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  if (!bento) return null;

  const fade = (visible, delay = 0) => ({
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
  });

  const tileBase = {
    backgroundColor: 'var(--surface)',
    borderRadius: 'var(--radius)',
    border: '1px solid var(--border)',
    overflow: 'hidden',
  };

  return (
    <section style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-5xl mx-auto px-12 py-20">

        {/* Heading */}
        <div
          ref={headingRef}
          className="flex flex-col items-start gap-3 mb-12"
          style={fade(headingVisible)}
        >
          <span style={{
            color: 'var(--accent)',
            fontSize: 'var(--type-small)',
            fontFamily: 'var(--font-badge)',
            fontWeight: 'var(--weight-medium)',
            letterSpacing: 'var(--tracking-badge)',
            textTransform: 'uppercase',
          }}>
            How I work
          </span>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'var(--type-belief)',
            fontWeight: 'var(--weight-normal)',
            lineHeight: 'var(--leading-tight)',
            letterSpacing: 'var(--tracking-tight)',
            color: 'var(--text)',
            margin: 0,
            maxWidth: '560px',
          }}>
            {bento.heading}
          </h2>
          {bento.subheading && (
            <p style={{
              color: 'var(--muted)',
              fontSize: 'var(--type-body)',
              lineHeight: 'var(--leading-body)',
              maxWidth: '480px',
              margin: 0,
            }}>
              {bento.subheading}
            </p>
          )}
        </div>

        {/* Bento grid */}
        <div
          className="max-[767px]:grid-cols-1"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: '12px',
          }}
        >

          {/* Tile 1 — tall left col, spans 2 rows */}
          {tiles[0] && (
            <div
              ref={tile1Ref}
              style={{
                ...tileBase,
                ...fade(tile1Visible, 100),
                gridColumn: '1 / 2',
                gridRow: '1 / 3',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
              }}
            >
              {tiles[0].image && (
                <img
                  src={tiles[0].image}
                  alt={tiles[0].alt || ''}
                  loading="lazy"
                  className="w-full object-cover"
                  style={{ flex: 1, minHeight: '220px', maxHeight: '320px' }}
                />
              )}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'var(--type-subhead)',
                  fontWeight: 'var(--weight-normal)',
                  lineHeight: 'var(--leading-snug)',
                  letterSpacing: 'var(--tracking-snug)',
                  color: 'var(--text)',
                  margin: 0,
                }}>
                  {tiles[0].heading}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', margin: 0 }}>
                  {tiles[0].body}
                </p>
              </div>
            </div>
          )}

          {/* Tile 2 — wide, spans cols 2-3, row 1 */}
          {tiles[1] && (
            <div
              ref={tile2Ref}
              style={{
                ...tileBase,
                ...fade(tile2Visible, 200),
                gridColumn: '2 / 4',
                gridRow: '1 / 2',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '48px',
                padding: '32px',
              }}
            >
              {tiles[1].image && (
                <img
                  src={tiles[1].image}
                  alt={tiles[1].alt || ''}
                  loading="lazy"
                  className="object-cover rounded-lg"
                  style={{ width: '38%', maxWidth: '260px', height: '100%', maxHeight: '240px', flexShrink: 0 }}
                />
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'var(--type-subhead)',
                  fontWeight: 'var(--weight-normal)',
                  lineHeight: 'var(--leading-snug)',
                  letterSpacing: 'var(--tracking-snug)',
                  color: 'var(--text)',
                  margin: 0,
                }}>
                  {tiles[1].heading}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', margin: 0 }}>
                  {tiles[1].body}
                </p>
              </div>
            </div>
          )}

          {/* Tile 3 — col 2, row 2 */}
          {tiles[2] && (
            <div
              ref={tile3Ref}
              style={{
                ...tileBase,
                ...fade(tile3Visible, 300),
                gridColumn: '2 / 3',
                gridRow: '2 / 3',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '28px',
                gap: '24px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'var(--type-subhead)',
                  fontWeight: 'var(--weight-normal)',
                  lineHeight: 'var(--leading-snug)',
                  letterSpacing: 'var(--tracking-snug)',
                  color: 'var(--text)',
                  margin: 0,
                }}>
                  {tiles[2].heading}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', margin: 0 }}>
                  {tiles[2].body}
                </p>
              </div>
              {tiles[2].image && (
                <img
                  src={tiles[2].image}
                  alt={tiles[2].alt || ''}
                  loading="lazy"
                  className="w-full rounded-lg object-cover"
                  style={{ maxHeight: '160px' }}
                />
              )}
            </div>
          )}

          {/* Tile 4 — col 3, row 2 — image only */}
          {tiles[3] && (
            <img
              ref={tile4Ref}
              src={tiles[3].image}
              alt={tiles[3].alt || ''}
              loading="lazy"
              className="w-full h-full object-cover"
              style={{
                ...fade(tile4Visible, 400),
                gridColumn: '3 / 4',
                gridRow: '2 / 3',
                borderRadius: 'var(--radius)',
                minHeight: '200px',
                display: 'block',
              }}
            />
          )}

        </div>
      </div>
    </section>
  );
}
