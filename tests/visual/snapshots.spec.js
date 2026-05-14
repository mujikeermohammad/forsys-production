import { test, expect } from '@playwright/test';
import { PAGES } from '../pages.js';

// ─── VISUAL SNAPSHOTS — FULL PAGE ─────────────────────────────────────────────
// Full-page screenshots — captures nav, hero, all sections, and footer.
// Stable: animations frozen, scrollbar hidden, JS timers cleared, page scrolled to
// bottom first (triggers IntersectionObserver scroll-fades), then back to top,
// slideshow reset to slide 0.
//
// Page list lives in tests/pages.js — edit there to add or remove pages.
// First run:  npx playwright test tests/visual --update-snapshots  (generates baselines)
// Subsequent: npx playwright test tests/visual                     (compares against baselines)
// After intentional redesign: re-run with --update-snapshots and commit the new PNGs.

async function prepPage(page) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
      ::-webkit-scrollbar { display: none !important; }
      html { scrollbar-width: none !important; scroll-behavior: auto !important; }
    `,
  });
  // Kill all JS timers so slideshows stop advancing
  await page.evaluate(() => {
    const high = setTimeout(() => {}, 0);
    for (let i = 0; i <= high; i++) clearTimeout(i);
    const highI = setInterval(() => {}, 99999);
    for (let i = 0; i <= highI; i++) clearInterval(i);
  });
  // Wait for browser to finish painting after timers are killed
  await page.waitForTimeout(300);
  // Scroll to bottom so IntersectionObserver fires on all scroll-fade elements,
  // then return to top so the full-page screenshot starts from the beginning
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(300);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(150);
  // Reset hero slideshow to slide 0 (after timers are dead so it cannot advance again)
  await page.evaluate(() => {
    const firstDot = document.querySelector('.slide-dot[data-idx="0"]');
    if (firstDot) firstDot.click();
  });
}

test.describe('Visual Snapshots', () => {
  for (const { name, url } of PAGES) {
    test(name, async ({ page }) => {
      await page.goto(url, { waitUntil: 'load' });
      await prepPage(page);
      await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true });
    });
  }
});
