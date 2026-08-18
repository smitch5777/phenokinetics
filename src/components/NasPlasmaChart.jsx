import { useState } from 'react';

// Group summary statistics (mean +/- SEM) from the same biopsy-confirmed
// cohort reported in Farrera et al. (Drug Metab Dispos, 2026): plasma
// EZE-Gluc at the 60-minute post-dose sample, grouped by total NAS score.
// Fill is a single-hue sequential ramp (light -> dark as NAS score rises),
// drawn from the site's own brand-blue steps.
const GROUP_STATS = [
  { nas: 0, n: 12, mean: 36.4, sem: 6.3, fill: 'fill-brand-pale' },
  { nas: 1, n: 15, mean: 32.3, sem: 5.8, fill: 'fill-brand-light' },
  { nas: 2, n: 9, mean: 24.1, sem: 5.5, fill: 'fill-[oklch(0.65_0.095_261)]' },
  { nas: 3, n: 7, mean: 21.8, sem: 6.4, fill: 'fill-brand-blue' },
  { nas: 4, n: 3, mean: 20.7, sem: 1.9, fill: 'fill-primary' },
  { nas: 5, n: 7, mean: 154.7, sem: 25.1, fill: 'fill-brand-navy' },
];

const Y_MAX = 200;
const Y_TICKS = [0, 50, 100, 150, 200];

const LEFT = 54;
const RIGHT = 20;
const TOP = 70;
const BOTTOM = 62;
const WIDTH = 640;
const HEIGHT = 382;

const GROUP_BRACKETS = [
  { label: 'not-MASH', from: 0, to: 4 },
  { label: 'MASH', from: 5, to: 5 },
];
const BRACKET_PAD = 6;
const INNER_WIDTH = WIDTH - LEFT - RIGHT;
const INNER_HEIGHT = HEIGHT - TOP - BOTTOM;
const BAND_WIDTH = INNER_WIDTH / GROUP_STATS.length;
const BAR_WIDTH = 68;
const BAR_RADIUS = 4;
const CAP_WIDTH = 14;

const yFor = (value) => TOP + INNER_HEIGHT - (value / Y_MAX) * INNER_HEIGHT;
const bandCenterFor = (nas) => LEFT + BAND_WIDTH * (nas + 0.5);
const baselineY = TOP + INNER_HEIGHT;

const barPath = (centerX, meanY) => {
  const x = centerX - BAR_WIDTH / 2;
  const height = baselineY - meanY;
  const r = Math.min(BAR_RADIUS, height);
  return `M${x},${meanY + r} Q${x},${meanY} ${x + r},${meanY} L${x + BAR_WIDTH - r},${meanY} Q${x + BAR_WIDTH},${meanY} ${x + BAR_WIDTH},${meanY + r} L${x + BAR_WIDTH},${baselineY} L${x},${baselineY} Z`;
};

const bars = GROUP_STATS.map(({ nas, n, mean, sem, fill }) => {
  const centerX = bandCenterFor(nas);
  const meanY = yFor(mean);
  return {
    nas,
    n,
    mean,
    sem,
    fill,
    centerX,
    meanY,
    topY: yFor(mean + sem),
    bottomY: yFor(Math.max(mean - sem, 0)),
    path: barPath(centerX, meanY),
  };
});

const NasPlasmaChart = () => {
  const [hovered, setHovered] = useState(null);
  const hoveredBar = hovered !== null ? bars[hovered] : null;

  return (
    <figure>
      <div className="overflow-x-auto">
        <div className="relative mx-auto min-w-[600px] max-w-2xl">
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            className="h-auto w-full"
            aria-labelledby="nas-plasma-chart-title"
          >
            <title id="nas-plasma-chart-title">
              Bar chart of mean plasma EZE-Gluc concentration at 60 minutes by NAS score, with
              error bars showing standard error of the mean, across 53 biopsy-confirmed patients.
              NAS 0 through 4 are grouped as not-MASH; NAS 5 is grouped as MASH.
            </title>

            <text x={LEFT} y={18} className="fill-muted-foreground text-[11px] font-medium">
              Plasma EZE-Gluc, 60 min (ng/mL)
            </text>

            {Y_TICKS.map((tick) => (
              <g key={tick}>
                <line
                  x1={LEFT}
                  x2={LEFT + INNER_WIDTH}
                  y1={yFor(tick)}
                  y2={yFor(tick)}
                  className="stroke-border"
                  strokeWidth="1"
                />
                <text
                  x={LEFT - 8}
                  y={yFor(tick) + 4}
                  textAnchor="end"
                  className="fill-muted-foreground text-[11px] tabular-nums"
                >
                  {tick}
                </text>
              </g>
            ))}

            {bars.map((bar) => (
              <g key={bar.nas}>
                <path
                  d={bar.path}
                  className={`${bar.fill} transition-opacity`}
                  opacity={hovered === null || hovered === bar.nas ? 1 : 0.55}
                />

                <line
                  x1={bar.centerX}
                  x2={bar.centerX}
                  y1={bar.topY}
                  y2={bar.bottomY}
                  className="stroke-background"
                  strokeWidth="4"
                />
                <line
                  x1={bar.centerX}
                  x2={bar.centerX}
                  y1={bar.topY}
                  y2={bar.bottomY}
                  className="stroke-foreground"
                  strokeWidth="2"
                />
                <line
                  x1={bar.centerX - CAP_WIDTH / 2}
                  x2={bar.centerX + CAP_WIDTH / 2}
                  y1={bar.topY}
                  y2={bar.topY}
                  className="stroke-foreground"
                  strokeWidth="2"
                />
                <line
                  x1={bar.centerX - CAP_WIDTH / 2}
                  x2={bar.centerX + CAP_WIDTH / 2}
                  y1={bar.bottomY}
                  y2={bar.bottomY}
                  className="stroke-foreground"
                  strokeWidth="2"
                />

                <rect
                  x={bandCenterFor(bar.nas) - BAND_WIDTH / 2}
                  y={TOP}
                  width={BAND_WIDTH}
                  height={INNER_HEIGHT}
                  fill="transparent"
                  tabIndex={0}
                  role="img"
                  aria-label={`NAS score ${bar.nas}: mean ${bar.mean} ng per mL, standard error ${bar.sem}, n equals ${bar.n}`}
                  onMouseEnter={() => setHovered(bar.nas)}
                  onMouseLeave={() => setHovered((h) => (h === bar.nas ? null : h))}
                  onFocus={() => setHovered(bar.nas)}
                  onBlur={() => setHovered((h) => (h === bar.nas ? null : h))}
                  className="cursor-pointer outline-none"
                />
              </g>
            ))}

            {bars.map((bar) => (
              <text
                key={`axis-${bar.nas}`}
                x={bar.centerX}
                y={baselineY + 18}
                textAnchor="middle"
                className="fill-muted-foreground text-[11px] tabular-nums"
              >
                {bar.nas}
              </text>
            ))}

            {GROUP_BRACKETS.map(({ label, from, to }) => {
              const x1 = bandCenterFor(from) - BAND_WIDTH / 2 + BRACKET_PAD;
              const x2 = bandCenterFor(to) + BAND_WIDTH / 2 - BRACKET_PAD;
              const bracketY = baselineY + 32;
              return (
                <g key={label}>
                  <line
                    x1={x1}
                    x2={x2}
                    y1={bracketY}
                    y2={bracketY}
                    className="stroke-muted-foreground"
                    strokeWidth="1"
                  />
                  <line
                    x1={x1}
                    x2={x1}
                    y1={bracketY}
                    y2={bracketY - 5}
                    className="stroke-muted-foreground"
                    strokeWidth="1"
                  />
                  <line
                    x1={x2}
                    x2={x2}
                    y1={bracketY}
                    y2={bracketY - 5}
                    className="stroke-muted-foreground"
                    strokeWidth="1"
                  />
                  <text
                    x={(x1 + x2) / 2}
                    y={bracketY + 18}
                    textAnchor="middle"
                    className="fill-foreground text-[12px] font-semibold uppercase tracking-wide"
                  >
                    {label}
                  </text>
                </g>
              );
            })}
          </svg>

          {hoveredBar && (
            <div
              className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[130%] rounded-md border border-border bg-popover px-2.5 py-1.5 text-xs whitespace-nowrap shadow-md"
              style={{
                left: `${(hoveredBar.centerX / WIDTH) * 100}%`,
                top: `${((hoveredBar.topY - 20) / HEIGHT) * 100}%`,
              }}
            >
              <div className="font-semibold tabular-nums text-foreground">
                {hoveredBar.mean} ± {hoveredBar.sem} ng/mL
              </div>
              <div className="text-muted-foreground">
                NAS score {hoveredBar.nas} (n={hoveredBar.n})
              </div>
            </div>
          )}
        </div>
      </div>

      <figcaption className="mt-3 text-center text-sm text-muted-foreground">
        Bars show the group mean; error bars show ± SEM. Source:{' '}
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/42531743/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary hover:underline"
        >
          Farrera et al., Drug Metabolism and Disposition (2026)
        </a>
        .
      </figcaption>
    </figure>
  );
};

export default NasPlasmaChart;
