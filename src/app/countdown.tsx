"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./page.module.css";

const initialSeconds = 27 * 86400 + 14 * 3600 + 8 * 60 + 32;

function AnimatedDigit({ digit }: { digit: string }) {
  const digitRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(digitRef.current,
        { yPercent: 80, opacity: 0, rotationX: -35 },
        { yPercent: 0, opacity: 1, rotationX: 0, duration: 0.5, ease: "power3.out", clearProps: "transform,opacity" },
      );
    });
    return () => media.revert();
  }, [digit]);

  return <span className={styles.digitWindow} aria-hidden="true"><span ref={digitRef} className={styles.digit}>{digit}</span></span>;
}

export function Countdown() {
  const [remaining, setRemaining] = useState(initialSeconds);

  useEffect(() => {
    // Use elapsed time so background tab throttling does not accumulate drift.
    const deadline = Date.now() + initialSeconds * 1000;
    const timer = window.setInterval(() => {
      const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setRemaining(seconds);
      if (seconds === 0) window.clearInterval(timer);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const units = [
    { value: Math.floor(remaining / 86400), label: "Days" },
    { value: Math.floor((remaining % 86400) / 3600), label: "Hours" },
    { value: Math.floor((remaining % 3600) / 60), label: "Minutes" },
    { value: remaining % 60, label: "Seconds" },
  ];

  return (
    <dl className={styles.countdown} aria-label="Time until launch" aria-live="off">
      {units.map(({ value, label }) => (
        <div className={styles.unit} key={label}>
          <dd aria-label={String(value).padStart(2, "0")}>
            {String(value).padStart(2, "0").split("").map((digit, index) => (
              <AnimatedDigit key={index} digit={digit} />
            ))}
          </dd><dt>{label}</dt>
        </div>
      ))}
    </dl>
  );
}
