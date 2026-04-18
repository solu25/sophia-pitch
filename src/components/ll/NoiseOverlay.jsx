const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

export default function NoiseOverlay({ light }) {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0, zIndex: 0,
      backgroundImage: NOISE_SVG,
      backgroundRepeat: 'repeat',
      backgroundSize: '200px 200px',
      opacity: light ? 0.25 : 0.35,
      mixBlendMode: light ? 'multiply' : 'soft-light',
      pointerEvents: 'none',
    }} />
  );
}
