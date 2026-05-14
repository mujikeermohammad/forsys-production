import { test, expect } from '@playwright/test';
import { PAGES } from '../pages.js';

// ─── ALL TESTED PAGES — INTERNAL LINKS RESOLVE ───────────────────────────────
// Visits every page in the PAGES list, collects all internal <a href> links,
// deduplicates, and verifies each unique URL returns HTTP 200.
// Catches broken CTAs, card links, and navigation links across the whole site.
// Runs Desktop only — link hrefs are viewport-independent.

test.describe('All Tested Pages — Internal Links Resolve', () => {
  test('all internal links on tested pages return HTTP 200', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'Desktop', 'Desktop-only — link hrefs are viewport-independent');

    const uniqueLinks = new Set();

    for (const { url } of PAGES) {
      await page.goto(url, { waitUntil: 'domcontentloaded' });
      // Use a.href (fully resolved by the browser) so relative links like "about.html"
      // on /company/about.html correctly resolve to /company/about.html, not /about.html
      const pathnames = await page.evaluate(() =>
        [...document.querySelectorAll('a[href]')]
          .map(a => {
            const attr = a.getAttribute('href');
            if (!attr || attr.startsWith('#') || attr.startsWith('mailto:') ||
                attr.startsWith('tel:') || attr.startsWith('javascript:')) return null;
            try {
              const resolved = new URL(a.href);
              if (resolved.origin !== window.location.origin) return null;
              return resolved.pathname;
            } catch {
              return null;
            }
          })
          .filter(Boolean)
      );
      pathnames.forEach(p => uniqueLinks.add(p));
    }

    for (const url of [...uniqueLinks].sort()) {
      const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
      expect(response.status(), `${url} returned ${response.status()}`).toBe(200);
    }
  });
});

// ─── HOMEPAGE NAV LINKS — ALL RESOLVE ────────────────────────────────────────
// Visits the homepage, collects every internal <a href> in the nav, and checks
// each one returns HTTP 200. Catches nav links pointing to missing pages.

test.describe('Homepage Nav Links — All Resolve', () => {
  test('all nav links return HTTP 200', async ({ page }) => {
    test.skip(page.context().browser().browserType().name() !== 'chromium');
    await page.goto('/index.html', { waitUntil: 'domcontentloaded' });

    const hrefs = await page.evaluate(() =>
      [...document.querySelectorAll('#main-nav a[href]')]
        .map(a => a.getAttribute('href'))
        .filter(h => h && !h.startsWith('http') && !h.startsWith('mailto') && !h.startsWith('#') && h.endsWith('.html'))
    );

    const unique = [...new Set(hrefs)];
    expect(unique.length, 'No nav links found').toBeGreaterThan(0);

    for (const href of unique) {
      const url = href.startsWith('/') ? href : `/${href}`;
      const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
      expect(response.status(), `Nav link ${href} returned ${response.status()}`).toBe(200);
    }
  });
});

// ─── HOMEPAGE FOOTER LINKS — ALL RESOLVE ─────────────────────────────────────
// Visits the homepage, collects every internal <a href> in the footer, and
// checks each one returns HTTP 200. Catches footer links pointing to renamed
// or deleted pages.

test.describe('Homepage Footer Links — All Resolve', () => {
  test('all footer links return HTTP 200', async ({ page }) => {
    test.skip(page.context().browser().browserType().name() !== 'chromium');
    await page.goto('/index.html', { waitUntil: 'domcontentloaded' });

    const hrefs = await page.evaluate(() =>
      [...document.querySelectorAll('footer a[href]')]
        .map(a => a.getAttribute('href'))
        .filter(h => h && !h.startsWith('http') && !h.startsWith('mailto') && !h.startsWith('#') && h.endsWith('.html'))
    );

    const unique = [...new Set(hrefs)];
    expect(unique.length, 'No footer links found').toBeGreaterThan(0);

    for (const href of unique) {
      const url = href.startsWith('/') ? href : `/${href}`;
      const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
      expect(response.status(), `Footer link ${href} returned ${response.status()}`).toBe(200);
    }
  });
});
