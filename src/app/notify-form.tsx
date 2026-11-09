"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { gsap } from "gsap";
import styles from "./page.module.css";

export function NotifyForm() {
  const [included, setIncluded] = useState(false);
  const confirmationRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!included) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const confirmation = confirmationRef.current;
      if (!confirmation) return;
      gsap.fromTo(confirmation,
        { opacity: 0, y: 8, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "back.out(1.5)", clearProps: "all" },
      );
      gsap.fromTo(confirmation.querySelector("path"),
        { strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 0.4, delay: 0.15, ease: "power2.out" },
      );
    });
    return () => media.revert();
  }, [included]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // UI prototype only; wire an email service before collecting real signups.
    setIncluded(true);
  }
  return (
    <section className={styles.signup} aria-label="Launch notifications">
      <form className={styles.form} onSubmit={submit}>
        <label className={styles.srOnly} htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" placeholder="Email Address" autoComplete="email" required maxLength={254} onChange={() => setIncluded(false)} />
        <button type="submit" disabled={included}>
          <span role="status" aria-live="polite">
            {included ? <span ref={confirmationRef} className={styles.confirmation}>
              <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true"><path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" /></svg>
              YOU&apos;RE INCLUDED.
            </span> : <span className={styles.ctaLabel}>Be First To Know<svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true"><path d="M3 10h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>}
          </span>
        </button>
      </form>
    </section>
  );
}
