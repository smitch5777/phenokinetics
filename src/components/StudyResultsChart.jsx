// Original chart illustrating the study's headline finding — not a
// reproduction of any published figure. Values shown are the fold-change
// reported in Farrera et al. (Drug Metab Dispos, 2026), not raw study data.
const bars = [
  { key: 'non-mash', label: 'Non-MASH', value: 1, colorClass: 'fill-chart-3' },
  { key: 'mash', label: 'MASH', value: 4.5, colorClass: 'fill-chart-1' },
];

const CHART_TOP = 40;
const BASELINE_Y = 220;
const MAX_BAR_HEIGHT = BASELINE_Y - CHART_TOP;
const MAX_VALUE = 4.5;
const RADIUS = 6;

const barPath = (x, width, height) => {
  const y = BASELINE_Y - height;
  const r = Math.min(RADIUS, height);
  return `M${x},${y + r} Q${x},${y} ${x + r},${y} L${x + width - r},${y} Q${x + width},${y} ${x + width},${y + r} L${x + width},${BASELINE_Y} L${x},${BASELINE_Y} Z`;
};

const StudyResultsChart = () => (
  <figure>
    <svg
      viewBox="0 0 400 280"
      role="img"
      aria-label="Bar chart: plasma EZE-Gluc concentration is about 4.5 times higher in MASH patients than in non-MASH patients."
      className="mx-auto h-auto w-full max-w-sm"
    >
      <line x1="40" y1={BASELINE_Y} x2="360" y2={BASELINE_Y} className="stroke-border" strokeWidth="1" />

      {bars.map((bar, i) => {
        const width = 72;
        const x = i === 0 ? 90 : 238;
        const height = (bar.value / MAX_VALUE) * MAX_BAR_HEIGHT;
        const centerX = x + width / 2;
        return (
          <g key={bar.key}>
            <path d={barPath(x, width, height)} className={bar.colorClass} />
            <text
              x={centerX}
              y={BASELINE_Y - height - 12}
              textAnchor="middle"
              className="fill-foreground text-[15px] font-semibold"
            >
              {bar.value === 1 ? '1.0×' : `~${bar.value}×`}
            </text>
            <text x={centerX} y={BASELINE_Y + 24} textAnchor="middle" className="fill-muted-foreground text-[12px]">
              {bar.label}
            </text>
          </g>
        );
      })}
    </svg>
    <figcaption className="mt-2 text-center text-sm text-muted-foreground">
      Relative plasma EZE-Gluc concentration, MASH vs. non-MASH (biopsy-confirmed cohort).
    </figcaption>
  </figure>
);

export default StudyResultsChart;
