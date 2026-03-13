interface LogoIconProps {
  size?: number;
  className?: string;
}

export function TomTechaLogoIcon({ size = 36, className = "" }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Dark green rounded square background */}
      <rect width="36" height="36" rx="9" fill="#15803d" />

      {/* Leaf silhouette — slightly transparent brighter green */}
      <path
        d="M18 4 Q26 7 29 14 Q32 22 27 28 Q23 33 18 33 Q13 33 9 28 Q4 22 7 14 Q10 7 18 4Z"
        fill="#4ade80"
        opacity="0.45"
      />

      {/* Leaf midrib — subtle line from tip to base */}
      <line
        x1="18"
        y1="5"
        x2="18"
        y2="32"
        stroke="#bbf7d0"
        strokeWidth="1"
        opacity="0.35"
      />

      {/* Lightning bolt — white, centred inside the leaf */}
      <path
        d="M21 7 L13 20 H18.5 L15.5 30 L23 17 H17.5 L21 7Z"
        fill="white"
      />
    </svg>
  );
}
