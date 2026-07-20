/**
 * NorthForge Logo — Inline SVG
 * Uses currentColor — inherits from parent's color property.
 * Pass `className` for sizing / color overrides.
 */
export default function Logo({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NorthForge logo"
      role="img"
    >
      {/* ── Compass ring ── */}
      <circle
        cx="50" cy="26" r="21"
        stroke="currentColor" strokeWidth="1.4" fill="none"
        opacity="0.45"
      />

      {/* ── N compass arrow (north needle, dominant) ── */}
      <polygon
        points="50,3 46.5,14 50,11.5 53.5,14"
        fill="currentColor"
        opacity="0.92"
      />
      <line x1="50" y1="3" x2="50" y2="11" stroke="currentColor" strokeWidth="1.5" opacity="0.92"/>

      {/* ── Cardinal tick marks: S, E, W (subtle) ── */}
      <line x1="50" y1="42" x2="50" y2="47"   stroke="currentColor" strokeWidth="1.2" opacity="0.28"/>
      <line x1="29" y1="26" x2="34" y2="26"   stroke="currentColor" strokeWidth="1.2" opacity="0.28"/>
      <line x1="66" y1="26" x2="71" y2="26"   stroke="currentColor" strokeWidth="1.2" opacity="0.28"/>

      {/* Diagonal intercardinals (subtle cross-hairs) */}
      <line x1="36" y1="12" x2="38.5" y2="14.5" stroke="currentColor" strokeWidth="1" opacity="0.18"/>
      <line x1="64" y1="12" x2="61.5" y2="14.5" stroke="currentColor" strokeWidth="1" opacity="0.18"/>
      <line x1="36" y1="40" x2="38.5" y2="37.5" stroke="currentColor" strokeWidth="1" opacity="0.18"/>
      <line x1="64" y1="40" x2="61.5" y2="37.5" stroke="currentColor" strokeWidth="1" opacity="0.18"/>

      {/* ── Center pivot dot ── */}
      <circle cx="50" cy="26" r="2.2" fill="currentColor" opacity="0.38"/>

      {/* ── Mountains ──
          Render order: left + right (dim) behind center (bright)
      ── */}

      {/* Left peak */}
      <path
        d="M2 70 L22 32 L42 70 Z"
        fill="currentColor" opacity="0.38"
      />
      {/* Left peak — inner highlight ridge */}
      <path
        d="M22 32 L30 50 L22 70"
        stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.18"
      />

      {/* Right peak */}
      <path
        d="M58 70 L78 34 L98 70 Z"
        fill="currentColor" opacity="0.38"
      />
      {/* Right peak — inner highlight ridge */}
      <path
        d="M78 34 L70 52 L78 70"
        stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.18"
      />

      {/* Center peak — tallest, most prominent */}
      <path
        d="M16 70 L50 10 L84 70 Z"
        fill="currentColor" opacity="0.9"
      />
      {/* Center — left face shade */}
      <path
        d="M50 10 L32 55 L16 70 Z"
        fill="currentColor" opacity="0.12"
      />
      {/* Center — subtle inner ridge line */}
      <path
        d="M50 10 L62 48 L50 70"
        stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.15"
      />

      {/* ── Ship silhouette ── */}
      {/* Main hull — tapered boat shape */}
      <path
        d="M15 74 L17 70 L83 70 L85 74 Q50 82 15 74 Z"
        fill="currentColor" opacity="0.72"
      />
      {/* Superstructure deck */}
      <rect x="30" y="63" width="40" height="8" rx="1" fill="currentColor" opacity="0.62"/>
      {/* Bridge / wheelhouse */}
      <rect x="38" y="56" width="24" height="8" rx="1" fill="currentColor" opacity="0.52"/>
      {/* Upper cabin */}
      <rect x="44" y="50" width="12" height="7" rx="1" fill="currentColor" opacity="0.44"/>
      {/* Mast / funnel */}
      <rect x="48.5" y="44" width="3" height="7" fill="currentColor" opacity="0.38"/>
    </svg>
  )
}
