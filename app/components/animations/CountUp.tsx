"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type CountUpProps = {
  value: string;
  duration?: number;
  startDelay?: number;
};

export default function CountUp({ value, duration = 1.5, startDelay = 1000 }: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  const prefix = value.match(/^[^0-9]*/)?.[0] ?? "";
  const suffix = value.match(/[^0-9]*$/)?.[0] ?? "";
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));

  useEffect(() => {
    if (!isInView) return;
    if (isNaN(numeric)) {
      setDisplay(value);
      return;
    }

    const timeout = setTimeout(() => {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * numeric);
        setDisplay(`${prefix}${current}${suffix}`);
        if (progress < 1) requestAnimationFrame(step);
        else setDisplay(`${prefix}${numeric}${suffix}`);
      };
      requestAnimationFrame(step);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <span ref={ref} className="text-2xl text-vsc-teal font-mono">
      {display}
    </span>
  );
}