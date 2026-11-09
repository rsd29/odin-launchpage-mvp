import styles from "./page.module.css";
import { NotifyForm } from "./notify-form";
import Image from "next/image";

import { Countdown } from "./countdown";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.brand}>
          <Image src="/brand/odin-white.png" alt="Odin" fill sizes="(max-width: 431px) 38vw, (max-width: 600px) 164px, 192px" preload className={styles.brandArtwork} />
        </h1>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowRow}>
            <span>Rising From The Ashes.</span>
            <span>An Icon Reborn</span>
          </span>
        </p>
        <Countdown />
        <NotifyForm />
      </main>
      <footer className={styles.footer}>
        <span>&copy; 2026 ODIN</span>
        <div className={styles.socials} aria-label="Social channels">
          <span role="img" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></span>
          <span role="img" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 3h3c.3 2.6 1.8 4 4 4.2v3a9 9 0 0 1-4-1.2v7a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3Z"/></svg></span>
          <span role="img" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 22v-9h3l.5-3H14V7c0-1 .5-1.5 1.5-1.5H18V2.2c-1-.2-2-.2-3-.2-3 0-5 1.8-5 5v3H7v3h3v9Z"/></svg></span>
          <span role="img" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2c-.2-1-1-1.8-2-2C17.8 5 14 5 12 5s-5.8 0-7.6.2c-1 .2-1.8 1-2 2C2 8.6 2 10.5 2 12s0 3.4.4 4.8c.2 1 1 1.8 2 2C6.2 19 10 19 12 19s5.8 0 7.6-.2c1-.2 1.8-1 2-2 .4-1.4.4-3.3.4-4.8s0-3.4-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"/></svg></span>
          <span role="img" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM4 9h3v12H4V9Zm6 0h3v1.6c.8-1.2 1.9-1.9 3.5-1.9 3.1 0 4.5 1.9 4.5 5.3v7h-3v-6.5c0-2-.6-3-2.1-3-1.8 0-2.9 1.2-2.9 3.2V21h-3V9Z"/></svg></span>
        </div>
      </footer>
    </div>
  );
}
