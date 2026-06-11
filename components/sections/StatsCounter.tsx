"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatsCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export default function StatsCounter({
  end,
  label,
  suffix = "",
  duration = 2.5,
}: StatsCounterProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
        {inView ? (
          <CountUp end={end} duration={duration} suffix={suffix} />
        ) : (
          "0"
        )}
      </div>
      <p className="text-gray-300 text-sm md:text-base">{label}</p>
    </div>
  );
}
