/**
 * Bespoke line-art illustrations for the home-page capability bento.
 *
 * Monochrome stroke work drawn from the design tokens (--border, --muted-
 * foreground) with a single electric-blue --spark accent each — the
 * Vercel/Laravel signature. Pure SVG, no interactivity, so they render fine
 * passed from a Server Component into the client BentoCard. Sizing/position is
 * controlled by the caller via className; each shares a thin, round stroke.
 */

const baseProps = {
  fill: 'none',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

/* Custom Web Applications — a fanned row of browser/app windows, the centre
   one prominent with code lines, spread wide to fill the bento's upper band. */
export function WebAppIllustration({ className }) {
  return (
    <svg viewBox='0 0 380 210' className={className} {...baseProps}>
      {/* flanking windows, fanned left and right */}
      <rect
        x='24'
        y='52'
        width='150'
        height='120'
        rx='12'
        stroke='hsl(var(--border))'
      />
      <rect
        x='206'
        y='52'
        width='150'
        height='120'
        rx='12'
        stroke='hsl(var(--border))'
      />
      {/* prominent centre window */}
      <rect
        x='104'
        y='32'
        width='172'
        height='140'
        rx='14'
        fill='hsl(var(--card))'
        stroke='hsl(var(--muted-foreground))'
      />
      {/* title bar */}
      <line x1='104' y1='58' x2='276' y2='58' stroke='hsl(var(--border))' />
      <circle cx='120' cy='45' r='2.5' fill='hsl(var(--border))' />
      <circle cx='131' cy='45' r='2.5' fill='hsl(var(--border))' />
      <circle cx='142' cy='45' r='2.5' fill='hsl(var(--spark))' />
      {/* code lines */}
      <line
        x1='120'
        y1='80'
        x2='188'
        y2='80'
        stroke='hsl(var(--spark))'
        strokeWidth='2.5'
      />
      <line x1='120' y1='95' x2='250' y2='95' stroke='hsl(var(--border))' />
      <line x1='134' y1='110' x2='228' y2='110' stroke='hsl(var(--border))' />
      <line x1='134' y1='125' x2='200' y2='125' stroke='hsl(var(--border))' />
      <line x1='120' y1='140' x2='240' y2='140' stroke='hsl(var(--border))' />
    </svg>
  );
}

/* Platforms & Infrastructure — vertical server racks wired to a node. */
export function InfraIllustration({ className }) {
  return (
    <svg viewBox='0 0 170 230' className={className} {...baseProps}>
      {[28, 78, 128].map((y, i) => (
        <g key={y}>
          <rect
            x='30'
            y={y}
            width='110'
            height='36'
            rx='7'
            fill='hsl(var(--card))'
            stroke={
              i === 1 ? 'hsl(var(--muted-foreground))' : 'hsl(var(--border))'
            }
          />
          <circle
            cx='44'
            cy={y + 18}
            r='3'
            fill={i === 0 ? 'hsl(var(--spark))' : 'hsl(var(--border))'}
          />
          <line
            x1='58'
            y1={y + 18}
            x2={i === 1 ? 112 : 96}
            y2={y + 18}
            stroke='hsl(var(--border))'
          />
        </g>
      ))}
      {/* wire down to a connected node */}
      <path d='M85 164 V196' stroke='hsl(var(--spark))' />
      <circle
        cx='85'
        cy='206'
        r='8'
        fill='hsl(var(--card))'
        stroke='hsl(var(--spark))'
      />
    </svg>
  );
}

/* Product & Web Design — artboard with a bézier curve, handles, anchors. */
export function DesignIllustration({ className }) {
  return (
    <svg viewBox='0 0 190 170' className={className} {...baseProps}>
      <rect
        x='22'
        y='22'
        width='146'
        height='120'
        rx='10'
        stroke='hsl(var(--border))'
      />
      <line x1='22' y1='44' x2='168' y2='44' stroke='hsl(var(--border))' />
      {/* curve + control handles */}
      <path
        d='M44 120 C 78 50, 118 132, 150 62'
        stroke='hsl(var(--muted-foreground))'
      />
      <line
        x1='44'
        y1='120'
        x2='78'
        y2='66'
        stroke='hsl(var(--border))'
        strokeDasharray='3 4'
      />
      <line
        x1='150'
        y1='62'
        x2='118'
        y2='100'
        stroke='hsl(var(--border))'
        strokeDasharray='3 4'
      />
      {/* control points */}
      <circle cx='78' cy='66' r='3' fill='hsl(var(--spark))' />
      <circle cx='118' cy='100' r='3' fill='hsl(var(--border))' />
      {/* anchors */}
      <circle
        cx='44'
        cy='120'
        r='4.5'
        fill='hsl(var(--card))'
        stroke='hsl(var(--spark))'
      />
      <circle
        cx='150'
        cy='62'
        r='4.5'
        fill='hsl(var(--card))'
        stroke='hsl(var(--muted-foreground))'
      />
    </svg>
  );
}

/* Support & Partnership — concentric orbits with connected nodes. */
export function SupportIllustration({ className }) {
  return (
    <svg viewBox='0 0 250 170' className={className} {...baseProps}>
      <circle cx='125' cy='85' r='22' stroke='hsl(var(--muted-foreground))' />
      <circle cx='125' cy='85' r='46' stroke='hsl(var(--border))' />
      <circle cx='125' cy='85' r='70' stroke='hsl(var(--border))' />
      {/* connecting wires */}
      <path d='M125 85 L171 85' stroke='hsl(var(--spark))' />
      <path d='M125 85 L93 47' stroke='hsl(var(--border))' />
      <path d='M125 85 L83 123' stroke='hsl(var(--border))' />
      {/* core */}
      <circle cx='125' cy='85' r='5.5' fill='hsl(var(--spark))' />
      {/* orbiting nodes */}
      <circle
        cx='171'
        cy='85'
        r='5'
        fill='hsl(var(--card))'
        stroke='hsl(var(--spark))'
      />
      <circle
        cx='93'
        cy='47'
        r='4'
        fill='hsl(var(--card))'
        stroke='hsl(var(--border))'
      />
      <circle
        cx='83'
        cy='123'
        r='4'
        fill='hsl(var(--card))'
        stroke='hsl(var(--border))'
      />
    </svg>
  );
}
