interface SpiderLilyProps {
  className?: string;
  color?: string;
}

export default function SpiderLilyIcon({ className = '', color = '#A37774' }: SpiderLilyProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Tallo central */}
        <path d="M 100 120 Q 98 160 100 200" opacity="0.6" />

        {/* Pétalos centrales ondulados */}
        <path d="M 100 120 Q 90 95 85 75 Q 82 60 70 55 Q 82 70 92 105 Z" fill={color} fillOpacity="0.08" />
        <path d="M 100 120 Q 110 95 115 75 Q 118 60 130 55 Q 118 70 108 105 Z" fill={color} fillOpacity="0.08" />
        <path d="M 100 120 Q 75 110 55 100 Q 40 92 30 75 Q 50 88 85 112 Z" fill={color} fillOpacity="0.08" />
        <path d="M 100 120 Q 125 110 145 100 Q 160 92 170 75 Q 150 88 115 112 Z" fill={color} fillOpacity="0.08" />
        <path d="M 100 120 Q 80 135 60 140 Q 40 142 25 130 Q 48 132 82 124 Z" fill={color} fillOpacity="0.08" />
        <path d="M 100 120 Q 120 135 140 140 Q 160 142 175 130 Q 152 132 118 124 Z" fill={color} fillOpacity="0.08" />

        {/* Estambres alargados y curvos hacia arriba */}
        <path d="M 100 115 Q 85 60 50 35 Q 35 25 20 28" />
        <circle cx="20" cy="28" r="1.8" fill={color} />

        <path d="M 100 115 Q 92 45 75 20 Q 65 8 50 12" />
        <circle cx="50" cy="12" r="1.8" fill={color} />

        <path d="M 100 115 Q 100 40 100 15 Q 100 5 92 2" />
        <circle cx="92" cy="2" r="1.8" fill={color} />

        <path d="M 100 115 Q 108 45 125 20 Q 135 8 150 12" />
        <circle cx="150" cy="12" r="1.8" fill={color} />

        <path d="M 100 115 Q 115 60 150 35 Q 165 25 180 28" />
        <circle cx="180" cy="28" r="1.8" fill={color} />

        <path d="M 100 115 Q 60 85 25 70 Q 10 65 5 75" />
        <circle cx="5" cy="75" r="1.8" fill={color} />

        <path d="M 100 115 Q 140 85 175 70 Q 190 65 195 75" />
        <circle cx="195" cy="75" r="1.8" fill={color} />
      </g>
    </svg>
  );
}