# Forsys Test Audit

Audit all test coverage for the Forsys production site and report what is missing. Offer to add missing items automatically.

---

## What this skill does

Scans the repo and compares it against all three test files to find gaps. Reports in plain language what is covered, what is missing, and what was intentionally excluded. Then asks whether to add the missing items.

---

## Step 1 — Read the current test files

Read these three files to understand what is currently under test:

- `tests/pages.js` — the canonical list of pages covered by snapshot and link tests
- `tests/functional/forms.spec.js` — the `HS_FORM_PAGES` array (lines 107–122) lists HubSpot form pages under test
- `tests/functional/interactions.spec.js` — lists all interactive component tests (video players, carousels, modals, filters)

---

## Step 2 — Scan the repo for HTML files

Use the Glob tool to find all `.html` files in the repo, then exclude the following folders — they are never tested:

| Folder | Reason excluded |
|---|---|
| `embed/` | Auto-scanned separately in forms.spec.js |
| `forsys-website-new-main/` | Old archive, not live |
| `node_modules/` | Dependencies |
| `playwright-report/` | Generated output |
| `test-results/` | Generated output |
| `assets/` | Not pages |
| `tests/` | Not pages |
| `lead-gen/emailers/` | Email templates, not web pages |

---

## Step 3 — Check 1: Page coverage (tests/pages.js)

Compare every HTML file found in Step 2 against the URLs in `tests/pages.js`.

**Pages intentionally excluded** — do NOT flag these as missing:
- `lead-gen/apprise-us-rsvp.html`
- `lead-gen/awt-lead-gen-callout-form.html`
- `lead-gen/conga-lead-gen-callout-form.html`
- `lead-gen/oracle-lead-gen-callout-form.html`

These are campaign/event pages that change frequently and are intentionally kept out of snapshot tests.

Report:
- Pages in the repo but NOT in `tests/pages.js` (missing from snapshot + link tests)
- Pages in `tests/pages.js` that do NOT exist on disk (stale — file was deleted or renamed)

---

## Step 4 — Check 2: HubSpot form coverage (tests/functional/forms.spec.js)

Use the Grep tool to search all HTML files (from Step 2) for the string `hsforms.net`. This identifies pages that embed a HubSpot form.

Compare the list of HubSpot pages found against the `HS_FORM_PAGES` array in `forms.spec.js`.

**Pages intentionally excluded from HS_FORM_PAGES** — do NOT flag these:
- `lead-gen/apprise-us-rsvp.html` — event RSVP, temporary
- `lead-gen/awt-lead-gen-callout-form.html` — event lead gen, temporary
- `lead-gen/conga-lead-gen-callout-form.html` — campaign form, temporary
- `lead-gen/oracle-lead-gen-callout-form.html` — campaign form, temporary
- `lead-gen/forsys-propel26.html` — custom form, already tested separately with inline validation tests
- `past-webinars/womens-day-2022.html` — no HubSpot form on this page

Report:
- HubSpot form pages found on disk but NOT in `HS_FORM_PAGES` (missing from form tests)
- URLs in `HS_FORM_PAGES` that do NOT exist on disk (stale)

---

## Step 5 — Check 3: Interactive video coverage (tests/functional/interactions.spec.js)

Use the Grep tool to search all HTML files for these patterns that indicate an interactive video player (thumbnail that reveals an inline player on click):
- `fs-vimeo-inline`
- `ls-vimeo-inline`
- Any similar pattern: `id` containing `vimeo-inline`

Read `tests/functional/interactions.spec.js` and check which pages already have a video interaction test.

Currently tested:
- `resources/events.html` — video modal (open/close)
- `forsys-solutions/revramp.html` — inline Vimeo player
- `forsys-solutions/lexishift.html` — inline Vimeo player

Report any page with an interactive video pattern that does NOT have a corresponding test in `interactions.spec.js`.

---

## Step 6 — Report findings

Present results in this format:

```
FORSYS TEST AUDIT
─────────────────

SNAPSHOT + LINK TESTS (tests/pages.js)
  ✓ X pages covered
  ✗ Missing: [list each missing page URL]
  ✗ Stale:   [list each URL in pages.js with no file on disk]

HUBSPOT FORM TESTS (forms.spec.js → HS_FORM_PAGES)
  ✓ X pages covered
  ✗ Missing: [list each missing page URL]
  ✗ Stale:   [list each stale URL]

VIDEO INTERACTION TESTS (interactions.spec.js)
  ✓ X videos covered
  ✗ Missing: [list each page with untested interactive video]

INTENTIONALLY EXCLUDED (no action needed)
  [list campaign/excluded pages]
```

If everything is covered, say so clearly:
```
All tests are up to date. Nothing missing.
```

---

## Step 7 — Offer to fix

After the report, ask:

> "Would you like me to add the missing items to the test files?"

If yes:

- **Missing pages** → add entries to `tests/pages.js` using the format:
  ```js
  { name: 'folder--filename', url: '/folder/filename.html' },
  ```
  Group them under the correct section comment. Then tell the user:
  > "Run `npx playwright test tests/visual --update-snapshots` to generate baseline screenshots for the new pages, then commit the PNG files."

- **Missing HubSpot form pages** → add the URL to the `HS_FORM_PAGES` array in `tests/functional/forms.spec.js`. Then tell the user:
  > "Run `npx playwright test tests/functional/forms.spec.js` to verify the new form tests pass."

- **Missing video interactions** → read the HTML file to find the correct element IDs (trigger button ID, inline container ID, iframe ID), then write a new `test()` block in `tests/functional/interactions.spec.js` following this pattern:
  ```js
  test('[page] video thumbnail click reveals inline Vimeo player', async ({ page }) => {
    await page.goto('/path/to/page.html');
    await page.locator('#trigger-button-id').click();
    await expect(page.locator('#inline-container-id')).toBeVisible();
    await expect(page.locator('#iframe-id')).toHaveAttribute('src', /vimeo/);
  });
  ```
  Then tell the user:
  > "Run `npx playwright test tests/functional/interactions.spec.js` to verify the new video tests pass."

---

## Important rules

- Never auto-discover pages or add auto-scanning to test files — all test coverage is deliberate and manual
- Never add campaign/event pages (RSVPs, short-lived lead-gen forms) to `tests/pages.js`
- The single source of truth for page coverage is `tests/pages.js` — both snapshot tests and link tests use this file
- When in doubt about whether a new page is a campaign page or a permanent page, ask the user before adding it
