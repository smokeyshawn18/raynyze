const ScoreCircle = ({ score = 75 }: { score: number }) => {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const progress = score / 100;
  const strokeDashoffset = circumference * (1 - progress);

  // Score-based gradient colors
  const getGradientColors = (score: number) => {
    if (score >= 80) {
      return { start: "#10b981", end: "#059669" }; // Green (keeping green for excellent)
    }
    if (score >= 60) {
      return { start: "#06b6d4", end: "#0891b2" }; // Cyan (matching new theme)
    }
    if (score >= 40) {
      return { start: "#8b5cf6", end: "#7c3aed" }; // Purple (matching new theme)
    }
    return { start: "#ef4444", end: "#dc2626" }; // Red (keeping red for poor)
  };

  const gradientColors = getGradientColors(score);

  return (
    <div className="relative w-[100px] h-[100px]">
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          stroke="var(--border-color)"
          strokeWidth={stroke}
          fill="transparent"
        />
        {/* Partial circle with gradient */}
        <defs>
          <linearGradient id={`grad-${score}`} x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={gradientColors.start} />
            <stop offset="100%" stopColor={gradientColors.end} />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r={normalizedRadius}
          stroke={`url(#grad-${score})`}
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Score and issues */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-semibold text-sm">{`${score}/100`}</span>
      </div>
    </div>
  );
};

export default ScoreCircle;
