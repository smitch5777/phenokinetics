// Original schematic of the EZE-Gluc mechanism — not a reproduction of any
// published figure. Illustrates the same pathway described in the "How
// EZ-MASH Works" steps above it.
const MechanismDiagram = () => (
  <figure className="mt-16">
    <svg
      viewBox="0 0 820 300"
      role="img"
      aria-label="Diagram: a subtherapeutic ezetimibe dose passes through hepatic transporters altered in MASH. Biliary efflux of EZE-Gluc is reduced, so it is retained in the bloodstream instead, where a plasma sample can measure it."
      className="h-auto w-full"
    >
      <defs>
        <marker
          id="mech-arrow-muted"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 Z" className="fill-border" />
        </marker>
        <marker
          id="mech-arrow-accent"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 Z" className="fill-primary" />
        </marker>
      </defs>

      {/* Dose -> Liver */}
      <line
        x1="132"
        y1="150"
        x2="186"
        y2="150"
        className="stroke-border"
        strokeWidth="2"
        markerEnd="url(#mech-arrow-muted)"
      />

      {/* Liver -> Bile (reduced efflux) */}
      <line
        x1="350"
        y1="128"
        x2="426"
        y2="68"
        className="stroke-border"
        strokeWidth="2"
        strokeDasharray="5 5"
        markerEnd="url(#mech-arrow-muted)"
      />

      {/* Liver -> Blood (retained, the key path) */}
      <line
        x1="350"
        y1="178"
        x2="426"
        y2="232"
        className="stroke-primary"
        strokeWidth="3"
        markerEnd="url(#mech-arrow-accent)"
      />

      {/* Blood -> Test */}
      <line
        x1="580"
        y1="235"
        x2="646"
        y2="235"
        className="stroke-primary"
        strokeWidth="3"
        markerEnd="url(#mech-arrow-accent)"
      />

      {/* Dose */}
      <rect x="20" y="120" width="112" height="60" rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
      <text x="76" y="145" textAnchor="middle" className="fill-foreground text-[13px] font-medium">
        1 mg dose
      </text>
      <text x="76" y="162" textAnchor="middle" className="fill-muted-foreground text-[11px]">
        of ezetimibe
      </text>

      {/* Liver */}
      <rect x="188" y="90" width="162" height="120" rx="12" className="fill-secondary stroke-border" strokeWidth="1.5" />
      <text x="269" y="144" textAnchor="middle" className="fill-secondary-foreground text-[13px] font-medium">
        Hepatic
      </text>
      <text x="269" y="162" textAnchor="middle" className="fill-secondary-foreground text-[13px] font-medium">
        transporters
      </text>
      <text x="269" y="180" textAnchor="middle" className="fill-muted-foreground text-[11px]">
        altered in MASH
      </text>

      {/* Bile */}
      <rect x="428" y="30" width="152" height="70" rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
      <text x="504" y="60" textAnchor="middle" className="fill-foreground text-[13px] font-medium">
        Bile
      </text>
      <text x="504" y="78" textAnchor="middle" className="fill-muted-foreground text-[11px]">
        efflux reduced
      </text>

      {/* Blood */}
      <rect x="428" y="200" width="152" height="70" rx="10" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
      <text x="504" y="230" textAnchor="middle" className="fill-primary text-[13px] font-semibold">
        Bloodstream
      </text>
      <text x="504" y="248" textAnchor="middle" className="fill-primary text-[11px]">
        EZE-Gluc retained
      </text>

      {/* Test */}
      <rect x="648" y="200" width="152" height="70" rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
      <text x="724" y="230" textAnchor="middle" className="fill-foreground text-[13px] font-medium">
        Plasma sample
      </text>
      <text x="724" y="248" textAnchor="middle" className="fill-muted-foreground text-[11px]">
        EZ-MASH test
      </text>
    </svg>
    <figcaption className="mx-auto mt-5 max-w-2xl text-center text-sm text-muted-foreground">
      MASH alters three hepatic transporters, cutting biliary clearance of EZE-Gluc. Instead of
      clearing out through bile, it backs up into the bloodstream, where a routine plasma draw
      can measure it.
    </figcaption>
  </figure>
);

export default MechanismDiagram;
