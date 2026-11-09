# Odin launch page

Next.js App Router project with TypeScript and responsive CSS modules, based on the supplied countdown screenshot.

## Development

Run `npm install`, then `npm run dev`. Open http://localhost:3000.

## Production

Run `npm run build`, then `npm start`.

## Vercel

Import `rsd29/odin-launchpage-mvp` into Vercel using the Next.js preset, repository root, default build command, and default output directory. No environment variables are required. Alternatively run `npx vercel` from an authenticated terminal. Deployment has not yet been performed.

## Design and behavior

- Live demo countdown starts at 27 days, 14 hours, 08 minutes, 32 seconds on every page load, ticks every second, accounts for background tab throttling, and stops at zero.
- Self-hosted Neue Montreal Medium for countdown numbers: 88px desktop, responsive on mobile, with -2% letter spacing. Self-hosted Manrope for body text, labels, inputs, and buttons.
- Original high-resolution white Odin logo in `public/brand/odin-white.png`, served with Next.js image optimization and its proportions preserved.
- Email input validates the address and plays a GSAP checkmark confirmation reading "You're included." in the button. This is a UI demo and does not collect or store emails; connect an email service before enabling real signup. Editing the email resets the button, and reduced-motion preferences disable animations.
- Social icons are presentation only until destination URLs are supplied.
- No live countdown date is configured.
