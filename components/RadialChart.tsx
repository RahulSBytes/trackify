import React from "react";

interface CircularGaugeProps {
  value?: number;
  total?: number;
  label?: string;
}

export default function CircularGauge({
  value = 20,
  total = 25,
  label = "Applications",
}: CircularGaugeProps) {

  const SIZE = 180; 
  const STROKE_WIDTH = 5;
  const COLOR_PRIMARY = "var(--color-primary)";
  const COLOR_TRACK = "var(--color-border)";
  const GAP_DEGREES = 8; 

  const radius = (SIZE - STROKE_WIDTH) / 2;
  const circumference = 2 * Math.PI * radius;

  
  const rotation = -90 + GAP_DEGREES / 2;
  const arcFraction = (100 - GAP_DEGREES / 3.6) / 100;
  const trackDasharray = `${circumference * arcFraction} ${circumference}`;

  const percentage = total > 0 ? Math.max(0, Math.min(100, (value / total) * 100)) : 0;
  const progressDasharray = `${circumference * arcFraction * (percentage / 100)} ${circumference}`;

  return (
    <div
      className="flex-center mt-2 px-6 md:px-6"
    >
      <div className="relative p-3 max-w-36 aspect-square">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="w-full h-full"
          style={{ transform: `rotate(${rotation}deg)` }}
        >

          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={radius}
            fill="none"
            stroke={COLOR_TRACK}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            strokeDasharray={trackDasharray}
          />
          
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={radius}
            fill="none"
            stroke={COLOR_PRIMARY}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            strokeDasharray={progressDasharray}
            className="transition-[stroke-dasharray] duration-700 ease-out"
          />
        </svg>

        <div className="absolute inset-0 flex-center flex-col">
          <span className="text-foreground font-extrabold tracking-tight text-lg leading-none">
            {value} <span className="text-sm text-foreground-muted">/{`${total}`}</span>
          </span>
          <span className="text-foreground-muted text-sm mt-2 ">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
