/* Cartoon SVG illustrations for each month – all viewBox="0 0 100 100" */

export function SvgMarch() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Soil */}
      <rect x="12" y="73" width="76" height="14" rx="5" fill="#795548"/>
      <rect x="12" y="73" width="76" height="5" rx="3" fill="#5D4037"/>
      {/* Stem */}
      <line x1="50" y1="73" x2="50" y2="35" stroke="#388E3C" strokeWidth="4" strokeLinecap="round"/>
      {/* Left leaf */}
      <ellipse cx="33" cy="55" rx="15" ry="9" fill="#66BB6A" transform="rotate(-40 33 55)"/>
      <line x1="33" y1="55" x2="48" y2="62" stroke="#388E3C" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Right leaf */}
      <ellipse cx="67" cy="50" rx="15" ry="9" fill="#81C784" transform="rotate(40 67 50)"/>
      <line x1="67" y1="50" x2="52" y2="58" stroke="#388E3C" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Bud tip */}
      <ellipse cx="50" cy="32" rx="7" ry="10" fill="#A5D6A7"/>
      <ellipse cx="50" cy="28" rx="5" ry="6" fill="#C8E6C9"/>
    </svg>
  )
}

export function SvgApril() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Butterfly wings - upper */}
      <ellipse cx="32" cy="38" rx="20" ry="14" fill="#F48FB1" opacity="0.9"/>
      <ellipse cx="68" cy="38" rx="20" ry="14" fill="#CE93D8" opacity="0.9"/>
      {/* Butterfly wings - lower */}
      <ellipse cx="34" cy="58" rx="14" ry="11" fill="#F06292" opacity="0.85"/>
      <ellipse cx="66" cy="58" rx="14" ry="11" fill="#BA68C8" opacity="0.85"/>
      {/* Wing pattern spots */}
      <circle cx="32" cy="36" r="5" fill="#FFFFFF" opacity="0.4"/>
      <circle cx="68" cy="36" r="5" fill="#FFFFFF" opacity="0.4"/>
      {/* Body */}
      <ellipse cx="50" cy="50" rx="4" ry="14" fill="#5D4037"/>
      <circle cx="50" cy="35" r="5" fill="#4E342E"/>
      {/* Antennae */}
      <line x1="47" y1="32" x2="38" y2="20" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="38" cy="19" r="2.5" fill="#FF8A65"/>
      <line x1="53" y1="32" x2="62" y2="20" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="62" cy="19" r="2.5" fill="#FF8A65"/>
    </svg>
  )
}

export function SvgMay() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Flower petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse
          key={i}
          cx={50 + 20 * Math.cos((angle * Math.PI) / 180)}
          cy={50 + 20 * Math.sin((angle * Math.PI) / 180)}
          rx="10" ry="7"
          fill={i % 2 === 0 ? '#FFB3C1' : '#FF8FAB'}
          transform={`rotate(${angle} ${50 + 20 * Math.cos((angle * Math.PI) / 180)} ${50 + 20 * Math.sin((angle * Math.PI) / 180)})`}
        />
      ))}
      {/* Flower center */}
      <circle cx="50" cy="50" r="13" fill="#FFD54F"/>
      <circle cx="50" cy="50" r="9" fill="#FFB300"/>
      {/* Center dots */}
      <circle cx="46" cy="47" r="1.5" fill="#E65100" opacity="0.6"/>
      <circle cx="54" cy="47" r="1.5" fill="#E65100" opacity="0.6"/>
      <circle cx="50" cy="53" r="1.5" fill="#E65100" opacity="0.6"/>
      {/* Stem */}
      <line x1="50" y1="73" x2="50" y2="85" stroke="#388E3C" strokeWidth="3.5" strokeLinecap="round"/>
      <ellipse cx="40" cy="80" rx="10" ry="6" fill="#66BB6A" transform="rotate(-20 40 80)"/>
    </svg>
  )
}

export function SvgJune() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Sun rays */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <line
          key={i}
          x1={50 + 26 * Math.cos((angle * Math.PI) / 180)}
          y1={50 + 26 * Math.sin((angle * Math.PI) / 180)}
          x2={50 + 38 * Math.cos((angle * Math.PI) / 180)}
          y2={50 + 38 * Math.sin((angle * Math.PI) / 180)}
          stroke="#FFA000"
          strokeWidth={i % 2 === 0 ? 3.5 : 2}
          strokeLinecap="round"
        />
      ))}
      {/* Sun body */}
      <circle cx="50" cy="50" r="24" fill="#FFD54F"/>
      <circle cx="50" cy="50" r="20" fill="#FFE082"/>
      {/* Face */}
      <circle cx="43" cy="46" r="3" fill="#E65100"/>
      <circle cx="57" cy="46" r="3" fill="#E65100"/>
      {/* Smile */}
      <path d="M 40 56 Q 50 65 60 56" stroke="#E65100" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Cheeks */}
      <ellipse cx="36" cy="54" rx="5" ry="3" fill="#FFAB40" opacity="0.5"/>
      <ellipse cx="64" cy="54" rx="5" ry="3" fill="#FFAB40" opacity="0.5"/>
    </svg>
  )
}

export function SvgJuly() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Cone */}
      <polygon points="50,85 27,50 73,50" fill="#8D6E63"/>
      <line x1="34" y1="65" x2="50" y2="85" stroke="#6D4C41" strokeWidth="1.5" opacity="0.5"/>
      <line x1="42" y1="55" x2="50" y2="85" stroke="#6D4C41" strokeWidth="1.5" opacity="0.5"/>
      <line x1="66" y1="65" x2="50" y2="85" stroke="#6D4C41" strokeWidth="1.5" opacity="0.5"/>
      {/* Ice cream ball 1 */}
      <circle cx="50" cy="43" r="18" fill="#F48FB1"/>
      <circle cx="50" cy="43" r="15" fill="#F8BBD9"/>
      {/* Ball 2 */}
      <circle cx="50" cy="26" r="14" fill="#FFCC80"/>
      <circle cx="50" cy="26" r="11" fill="#FFE0B2"/>
      {/* Sprinkles */}
      <rect x="42" y="19" width="6" height="2" rx="1" fill="#E53935" transform="rotate(-20 42 19)"/>
      <rect x="55" y="22" width="6" height="2" rx="1" fill="#1E88E5" transform="rotate(15 55 22)"/>
      <rect x="46" y="30" width="6" height="2" rx="1" fill="#43A047" transform="rotate(30 46 30)"/>
      {/* Cherry */}
      <circle cx="50" cy="13" r="5" fill="#E53935"/>
      <line x1="50" y1="13" x2="53" y2="8" stroke="#388E3C" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function SvgAugust() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Watermelon outer green rind */}
      <path d="M 15 60 A 35 35 0 0 1 85 60 Z" fill="#388E3C"/>
      {/* White rind */}
      <path d="M 20 60 A 30 30 0 0 1 80 60 Z" fill="#DCEDC8"/>
      {/* Red flesh */}
      <path d="M 25 60 A 25 25 0 0 1 75 60 Z" fill="#EF5350"/>
      <path d="M 28 60 A 22 22 0 0 1 72 60 Z" fill="#FF7043"/>
      {/* Seeds */}
      <ellipse cx="40" cy="54" rx="3" ry="4.5" fill="#212121" transform="rotate(-15 40 54)"/>
      <ellipse cx="50" cy="52" rx="3" ry="4.5" fill="#212121"/>
      <ellipse cx="60" cy="54" rx="3" ry="4.5" fill="#212121" transform="rotate(15 60 54)"/>
      <ellipse cx="35" cy="58" rx="2.5" ry="4" fill="#212121" transform="rotate(-5 35 58)"/>
      <ellipse cx="65" cy="58" rx="2.5" ry="4" fill="#212121" transform="rotate(5 65 58)"/>
      {/* Green stripes on rind */}
      <path d="M 15 60 Q 27 45 40 38" stroke="#2E7D32" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <path d="M 85 60 Q 73 45 60 38" stroke="#2E7D32" strokeWidth="1.5" fill="none" opacity="0.4"/>
      {/* Cut line */}
      <line x1="15" y1="60" x2="85" y2="60" stroke="#1B5E20" strokeWidth="1.5"/>
      {/* Smile highlight */}
      <path d="M 30 60 Q 50 68 70 60" stroke="#EF9A9A" strokeWidth="1.5" fill="none" opacity="0.5"/>
    </svg>
  )
}

export function SvgSeptember() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Apple body */}
      <path d="M 50 28 C 28 28 18 45 20 62 C 22 76 34 86 50 86 C 66 86 78 76 80 62 C 82 45 72 28 50 28 Z" fill="#E53935"/>
      <path d="M 50 28 C 33 28 22 45 24 62 C 26 76 37 84 50 84" fill="#EF9A9A" opacity="0.3"/>
      {/* Apple shine */}
      <ellipse cx="38" cy="42" rx="7" ry="10" fill="#FFFFFF" opacity="0.25" transform="rotate(-20 38 42)"/>
      {/* Stem */}
      <path d="M 50 28 Q 53 18 60 14" stroke="#5D4037" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Leaf */}
      <ellipse cx="63" cy="18" rx="11" ry="7" fill="#66BB6A" transform="rotate(-30 63 18)"/>
      <line x1="63" y1="18" x2="57" y2="24" stroke="#388E3C" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Apple divot */}
      <path d="M 43 28 Q 50 22 57 28" stroke="#C62828" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

export function SvgOctober() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Maple leaf - main body */}
      <path d="
        M 50 15
        L 43 28 L 30 22 L 36 35
        L 18 38 L 30 46
        L 22 62 L 38 56
        L 42 72 L 50 60
        L 58 72 L 62 56
        L 78 62 L 70 46
        L 82 38 L 64 35
        L 70 22 L 57 28 Z
      " fill="#FF6F00"/>
      {/* Leaf veins */}
      <line x1="50" y1="15" x2="50" y2="72" stroke="#E65100" strokeWidth="1.5" opacity="0.6"/>
      <line x1="50" y1="38" x2="30" y2="46" stroke="#E65100" strokeWidth="1.2" opacity="0.5"/>
      <line x1="50" y1="38" x2="70" y2="46" stroke="#E65100" strokeWidth="1.2" opacity="0.5"/>
      <line x1="50" y1="50" x2="38" y2="56" stroke="#E65100" strokeWidth="1.2" opacity="0.5"/>
      <line x1="50" y1="50" x2="62" y2="56" stroke="#E65100" strokeWidth="1.2" opacity="0.5"/>
      {/* Stem */}
      <line x1="50" y1="72" x2="50" y2="85" stroke="#5D4037" strokeWidth="3" strokeLinecap="round"/>
      {/* Highlight */}
      <path d="M 50 15 L 57 28 L 64 35 L 70 46 L 62 56" stroke="#FFB300" strokeWidth="1.5" fill="none" opacity="0.5"/>
    </svg>
  )
}

export function SvgNovember() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Acorn cap */}
      <path d="M 30 45 Q 50 30 70 45 L 65 55 Q 50 62 35 55 Z" fill="#6D4C41"/>
      {/* Cap texture lines */}
      <path d="M 35 42 Q 50 32 65 42" stroke="#4E342E" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <path d="M 33 48 Q 50 38 67 48" stroke="#4E342E" strokeWidth="1" fill="none" opacity="0.4"/>
      {/* Stem on cap */}
      <line x1="50" y1="32" x2="50" y2="22" stroke="#5D4037" strokeWidth="3" strokeLinecap="round"/>
      {/* Acorn body */}
      <ellipse cx="50" cy="68" rx="20" ry="16" fill="#8D6E63"/>
      <ellipse cx="50" cy="68" rx="16" ry="12" fill="#A1887F"/>
      {/* Body shine */}
      <ellipse cx="43" cy="62" rx="5" ry="7" fill="#FFFFFF" opacity="0.15" transform="rotate(-15 43 62)"/>
      {/* Bottom tip */}
      <ellipse cx="50" cy="82" rx="5" ry="3" fill="#6D4C41"/>
    </svg>
  )
}

export function SvgDecember() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Star 6-pointed */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <line
          key={i}
          x1="50" y1="50"
          x2={50 + 34 * Math.cos(((angle - 90) * Math.PI) / 180)}
          y2={50 + 34 * Math.sin(((angle - 90) * Math.PI) / 180)}
          stroke="#FFD54F"
          strokeWidth="6"
          strokeLinecap="round"
        />
      ))}
      {/* Cross lines */}
      {[30, 90, 150, 210, 270, 330].map((angle, i) => (
        <line
          key={i}
          x1={50 + 18 * Math.cos(((angle - 90) * Math.PI) / 180)}
          y1={50 + 18 * Math.sin(((angle - 90) * Math.PI) / 180)}
          x2={50 + 28 * Math.cos(((angle - 90) * Math.PI) / 180)}
          y2={50 + 28 * Math.sin(((angle - 90) * Math.PI) / 180)}
          stroke="#FFF176"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      {/* Center circle */}
      <circle cx="50" cy="50" r="10" fill="#FFD54F"/>
      <circle cx="50" cy="50" r="7" fill="#FFEE58"/>
      {/* Sparkle dots */}
      <circle cx="20" cy="20" r="3" fill="#FFD54F" opacity="0.7"/>
      <circle cx="80" cy="20" r="2.5" fill="#FFF176" opacity="0.7"/>
      <circle cx="15" cy="70" r="2" fill="#FFD54F" opacity="0.5"/>
      <circle cx="85" cy="75" r="3" fill="#FFF176" opacity="0.6"/>
    </svg>
  )
}

export function SvgJanuary() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Snowman body */}
      <circle cx="50" cy="72" r="22" fill="#E3F2FD"/>
      <circle cx="50" cy="72" r="18" fill="#F5F5F5"/>
      {/* Snowman head */}
      <circle cx="50" cy="40" r="16" fill="#E3F2FD"/>
      <circle cx="50" cy="40" r="13" fill="#F5F5F5"/>
      {/* Hat brim */}
      <rect x="30" y="26" width="40" height="4" rx="2" fill="#212121"/>
      {/* Hat top */}
      <rect x="35" y="10" width="30" height="18" rx="3" fill="#212121"/>
      {/* Hat band */}
      <rect x="35" y="23" width="30" height="4" fill="#E53935"/>
      {/* Eyes */}
      <circle cx="44" cy="37" r="2.5" fill="#212121"/>
      <circle cx="56" cy="37" r="2.5" fill="#212121"/>
      {/* Carrot nose */}
      <polygon points="50,42 58,44 50,46" fill="#FF6F00"/>
      {/* Smile (pebbles) */}
      {[-12, -6, 0, 6, 12].map((offset, i) => (
        <circle
          key={i}
          cx={50 + offset * 0.8}
          cy={47 + Math.abs(offset) * 0.3}
          r="1.5"
          fill="#212121"
        />
      ))}
      {/* Scarf */}
      <path d="M 34 52 Q 50 58 66 52" stroke="#E53935" strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Body buttons */}
      <circle cx="50" cy="64" r="2.5" fill="#90A4AE"/>
      <circle cx="50" cy="72" r="2.5" fill="#90A4AE"/>
      <circle cx="50" cy="80" r="2.5" fill="#90A4AE"/>
      {/* Stick arms */}
      <line x1="28" y1="57" x2="18" y2="45" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="18" y1="45" x2="12" y2="38" stroke="#5D4037" strokeWidth="2" strokeLinecap="round"/>
      <line x1="72" y1="57" x2="82" y2="45" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="82" y1="45" x2="88" y2="38" stroke="#5D4037" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function SvgFebruary() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Main heart */}
      <path d="
        M 50 78
        C 20 60 12 38 20 26
        C 25 18 35 14 42 18
        C 45 20 48 23 50 27
        C 52 23 55 20 58 18
        C 65 14 75 18 80 26
        C 88 38 80 60 50 78 Z
      " fill="#E53935"/>
      {/* Heart highlight */}
      <path d="
        M 50 78
        C 20 60 12 38 20 26
        C 25 18 35 14 42 18
        C 45 20 48 23 50 27
      " fill="#EF9A9A" opacity="0.4"/>
      {/* Shine */}
      <ellipse cx="36" cy="34" rx="8" ry="11" fill="#FFFFFF" opacity="0.2" transform="rotate(-20 36 34)"/>
      {/* Small hearts */}
      <path d="M 22 22 C 17 16 10 18 10 24 C 10 30 17 34 22 38 C 27 34 34 30 34 24 C 34 18 27 16 22 22 Z" fill="#FFCDD2" opacity="0.7"/>
      <path d="M 78 18 C 74 13 68 15 68 20 C 68 25 74 28 78 32 C 82 28 88 25 88 20 C 88 15 82 13 78 18 Z" fill="#FFCDD2" opacity="0.7"/>
      {/* Arrow */}
      <line x1="15" y1="55" x2="85" y2="45" stroke="#FFAB40" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 3" opacity="0.7"/>
      <polygon points="87,44 79,41 82,49" fill="#FFAB40" opacity="0.7"/>
    </svg>
  )
}
