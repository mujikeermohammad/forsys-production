# Forsys Website Redesign — CLAUDE.md

## Project Overview

Redesigning the Forsys company static website (pure HTML/CSS/JS). All new pages are created inside `forsys-website-new/`. The existing site files in the root (index.html, hitech.html, salesforce.html, etc.) and `assets-new/` are **reference only** — do not modify them.

## Style Guide

The canonical design system is in [CONCEPT-MASTER.md](CONCEPT-MASTER.md). It is also registered as the `forsys-new-2-styleguide` skill in [.claude/skills/forsys-new-2-styleguide/SKILL.md](.claude/skills/forsys-new-2-styleguide/SKILL.md). Always invoke the `forsys-new-2-styleguide` skill (or read CONCEPT-MASTER.md) before creating or modifying any HTML/CSS.

## Test Coverage Audit

For any question about whether tests are up to date — such as "are my tests complete?", "did I miss anything in testing?", "check if all tests are included", or any similar request — use the `forsys-test-audit` skill at [.claude/skills/forsys-test-audit/SKILL.md](.claude/skills/forsys-test-audit/SKILL.md). This skill scans the repo, compares against all test files, and reports exactly what is covered and what is missing.

Key design tokens at a glance:
- **Colors:** Primary `#6B48FF` (purple), Teal `#00B4D8`, Dark `#0D0D2B`, Surface `#F5F6FF`, Text `#0D0D2B`
- **Fonts:** Space Grotesk (display/headlines), Inter (body/UI/labels) — no serif font
- **Radii:** Symmetric only — pill `100px` for buttons/tags, `16px` cards, `24px` CTA inner card. No asymmetric corners.
- **Nav:** Fixed 68px, always frosted-glass (`rgba(236,238,255,0.92)` + `backdrop-filter: blur(20px)`), no logo swap, no dark state
- **Breakpoints:** ≥1025px desktop, ≤1024px tablet, ≤768px mobile

## Actual Folder Structure

```
forsys-website-new/
├── CLAUDE.md
├── CONCEPT-MASTER.md
├── forsys-website-content.md
├── website3.0.xlsx
│
├── assets/
│   ├── css/
│   │   ├── base.css              ← shared tokens, resets, nav, footer, shared components
│   │   ├── home.css              ← homepage-specific sections
│   │   ├── services.css          ← all services pages
│   │   ├── solutions.css         ← all solutions pages (salesforce/conga-pros/oracle)
│   │   ├── forsys-solutions.css  ← all forsys-solutions pages
│   │   ├── industries.css        ← all industries pages
│   │   ├── partnerships.css      ← all partnerships pages
│   │   ├── resources.css         ← all resources pages
│   │   └── company.css           ← all company pages
│   ├── js/
│   │   └── script.js             ← single unified script with page-guarded IIFEs
│   └── images/
│       ├── Agentforce_logo.svg
│       ├── Amazon_Web_Services_Logo.svg
│       ├── Conga_logo.svg
│       ├── Mulesoft.svg
│       ├── Oracle_logo.svg
│       ├── PROS_logo.svg
│       ├── Salesforce.com_logo.svg
│       ├── Tableau_logo.svg
│       └── forsys-logo-white.png
│
├── index.html
│
├── services/                     ← 10 pages
│   ├── revenue-lifecycle-strategy.html
│   ├── ai-enabled-managed-services.html
│   ├── ai-agents-development.html
│   ├── ai-application-development.html
│   ├── autonomous-commerce.html
│   ├── build-or-buy-strategy.html
│   ├── data-migration.html
│   ├── devops.html
│   ├── enterprise-ai-strategy.html
│   └── integrations.html
│
├── solutions/
│   ├── salesforce/               ← 5 pages
│   │   ├── agentforce-crm.html
│   │   ├── agentforce-revenue-management.html
│   │   ├── agentforce-commerce.html
│   │   ├── agentforce-platform.html
│   │   └── manufacturing-cloud.html
│   ├── conga-pros/               ← 4 pages
│   │   ├── revenue-and-commerce.html
│   │   ├── contract-lifecycle-management.html
│   │   ├── pros-b2b.html
│   │   └── pros-smart-pricing.html
│   └── oracle/                   ← 4 pages
│       ├── fusion-supply-chain.html
│       ├── fusion-finance-accounting.html
│       ├── oic-paas.html
│       └── bpa-aistudio.html
│
├── forsys-solutions/             ← 6 pages
│   ├── revramp.html
│   ├── lexishift.html
│   ├── revmove.html
│   ├── mna-for-salesforce.html
│   ├── aitest.html
│   └── ai-agents.html
│
├── industries/                   ← 5 pages
│   ├── hi-tech.html
│   ├── financial-services.html
│   ├── healthcare-life-sciences.html
│   ├── manufacturing.html
│   └── saas-subscription.html
│
├── partnerships/                 ← 8 pages
│   ├── salesforce.html
│   ├── conga.html
│   ├── oracle.html
│   ├── rocketlane.html
│   ├── provus.html
│   ├── m3ter.html
│   ├── servicenow.html
│   └── flosum.html
│
├── resources/                    ← 5 pages
│   ├── customer-stories.html
│   ├── thought-leadership.html
│   ├── webinars-media.html
│   ├── blogs.html
│   └── events.html
│
└── company/                      ← 5 pages
    ├── about.html
    ├── leadership.html
    ├── culture.html
    ├── careers.html
    └── news-press.html
```

**Total: 53 pages + homepage = 54 HTML files**

## Navigation — All Pages

### What We Do > Services (10 pages)
| Page title | File |
|---|---|
| Revenue Lifecycle Strategy | `services/revenue-lifecycle-strategy.html` |
| AI-Enabled Managed Services | `services/ai-enabled-managed-services.html` |
| AI Agents Development | `services/ai-agents-development.html` |
| AI Application Development | `services/ai-application-development.html` |
| Autonomous Commerce | `services/autonomous-commerce.html` |
| Build or Buy Strategy | `services/build-or-buy-strategy.html` |
| Data Migration | `services/data-migration.html` |
| DevOps | `services/devops.html` |
| Enterprise AI Strategy | `services/enterprise-ai-strategy.html` |
| Integrations | `services/integrations.html` |

### What We Do > Solutions — Salesforce (5 pages)
| Page title | File |
|---|---|
| Agentforce CRM | `solutions/salesforce/agentforce-crm.html` |
| Agentforce Revenue Management | `solutions/salesforce/agentforce-revenue-management.html` |
| Agentforce Commerce | `solutions/salesforce/agentforce-commerce.html` |
| Agentforce Platform | `solutions/salesforce/agentforce-platform.html` |
| Manufacturing Cloud | `solutions/salesforce/manufacturing-cloud.html` |

### What We Do > Solutions — Conga + PROS (4 pages)
| Page title | File |
|---|---|
| Revenue & Commerce | `solutions/conga-pros/revenue-and-commerce.html` |
| Contract Lifecycle Management | `solutions/conga-pros/contract-lifecycle-management.html` |
| PROS B2B | `solutions/conga-pros/pros-b2b.html` |
| PROS Smart Pricing | `solutions/conga-pros/pros-smart-pricing.html` |

### What We Do > Solutions — Oracle (4 pages)
| Page title | File |
|---|---|
| Fusion Supply Chain & Manufacturing | `solutions/oracle/fusion-supply-chain.html` |
| Fusion Finance & Accounting | `solutions/oracle/fusion-finance-accounting.html` |
| OIC / PaaS | `solutions/oracle/oic-paas.html` |
| BPA / AI Studio | `solutions/oracle/bpa-aistudio.html` |

### What We Do > AI-Powered Forsys Solutions (6 pages)
| Page title | File |
|---|---|
| RevRamp | `forsys-solutions/revramp.html` |
| LexiShift | `forsys-solutions/lexishift.html` |
| RevMove | `forsys-solutions/revmove.html` |
| MnA for Salesforce | `forsys-solutions/mna-for-salesforce.html` |
| AITest | `forsys-solutions/aitest.html` |
| AI Agents | `forsys-solutions/ai-agents.html` |

### Industries (5 pages)
| Page title | File |
|---|---|
| Hi-Tech | `industries/hi-tech.html` |
| Financial Services | `industries/financial-services.html` |
| Healthcare & Life Sciences | `industries/healthcare-life-sciences.html` |
| Manufacturing | `industries/manufacturing.html` |
| SaaS & Subscription Businesses | `industries/saas-subscription.html` |

### Partnerships (8 pages)
| Page title | File |
|---|---|
| Salesforce | `partnerships/salesforce.html` |
| Conga | `partnerships/conga.html` |
| Oracle | `partnerships/oracle.html` |
| RocketLane | `partnerships/rocketlane.html` |
| Provus | `partnerships/provus.html` |
| M3ter | `partnerships/m3ter.html` |
| ServiceNow | `partnerships/servicenow.html` |
| Flosum | `partnerships/flosum.html` |

### Resources (5 pages)
| Page title | File |
|---|---|
| Customer Stories | `resources/customer-stories.html` |
| Thought Leadership | `resources/thought-leadership.html` |
| Webinars & Media | `resources/webinars-media.html` |
| Blogs | `resources/blogs.html` |
| Events | `resources/events.html` |

### Company (5 pages)
| Page title | File |
|---|---|
| About Forsys | `company/about.html` |
| Leadership | `company/leadership.html` |
| Culture | `company/culture.html` |
| Careers | `company/careers.html` |
| News & Press | `company/news-press.html` |

## Page Structure by Category

Each category has a fixed section structure. All pages share the global nav and footer from `base.css`. Content sections must use design-system tokens only — no ad-hoc hex colors, raw font stacks, or non-system radii.

### Services pages
1. **Hero** — Full-viewport, `var(--gradient-hero)` lavender background, headline (Space Grotesk 800) with AI gradient word, subhead, primary CTA button
2. **Overview / What it is** — `var(--bg)` surface section, 2-col split layout (copy + stat panel), section-label + section-title + section-sub header pattern
3. **Key Capabilities** — `.wwd-card` / `.split-card` grid (3–4 cards), purple icon badges, scroll-fade entrance
4. **Platform Tabs + Accordion** — Platform tab buttons (`.ptab`) filtering content; accordion (`.accord-list`) showing detail per tab (per CONCEPT-MASTER.md §8.6)
5. **Business Outcomes** — `.stats-bar` stat strip or outcome cards with gradient-clipped numbers
6. **Industry Fit** — Which industries this service applies to (`.tag` pill chips linking to industry pages)
7. **Case Study Teaser** — `.split-card` or partner-card referencing client logos
8. **CTA Section** — `cta-section` / `cta-inner` dark-gradient card pattern (per CONCEPT-MASTER.md §8.12)

### Solutions pages (Salesforce / Conga-PROS / Oracle)
1. **Hero** — Partner-branded hero (partner logo + Forsys logo mark), `var(--gradient-hero)` background, CTA
2. **Partnership Overview** — Brief intro, logos, partner tier badge (`.sol-badge`)
3. **Solution Scope** — `.wwd-card` grid showing what Forsys delivers on this platform
4. **Key Features** — `.split-card` list with 44×44 icon containers, stroke SVG icons
5. **Integration & Tech** — Platform visual panel (`.platform-visual`) or architecture description section
6. **Customer Results** — `.stats-bar` stat strip or `.split-card` story teaser
7. **CTA Section** — `cta-section` / `cta-inner` canonical pattern

### Forsys Solutions pages (RevRamp, LexiShift, etc.)
1. **Hero** — Product wordmark/icon, tagline, `var(--gradient-hero)` background, CTA
2. **Problem Statement** — Short `.section-header` copy block explaining the pain point
3. **How It Works** — Platform tabs + accordion or 3-step `.split-card` visual
4. **Features & Differentiators** — `.wwd-card` or `.split-card` icon cards
5. **Use Cases** — `.ind-card` / `.sol-card` industry-tagged scenario cards with `.sol-badge`
6. **ROI / Outcomes** — `.stats-bar` stat highlights with gradient-clipped numbers
7. **CTA Section** — `cta-section` / `cta-inner` canonical pattern

### Industries pages
1. **Hero** — `var(--gradient-hero)` background, industry-specific headline, CTA
2. **Industry Snapshot** — Key challenges in 2-col split layout with `.stats-bar` accent
3. **Our Approach** — `.wwd-card` / `.sol-card` grid linking to relevant services and solutions
4. **Client Logos** — Trusted strip (`.trusted-strip`) or ticker (`.ticker-section`) with logos
5. **Case Study / Story Card** — `.split-card` or partner-card teaser
6. **CTA Section** — `cta-section` / `cta-inner` with industry name gradient-wrapped in `<span>`

### Partnerships pages (Strategic: Salesforce, Conga, Oracle)
1. **Hero** — Co-branded, `var(--gradient-hero)` background, partner color `.sol-badge`
2. **Why This Partnership** — Value proposition, certifications in `.split-card` grid
3. **Solutions We Deliver** — `.sol-card` grid with `.sol-badge` + `.sol-arrow` linking to solution sub-pages
4. **Joint Offerings** — Highlighted joint go-to-market in `.wwd-card` or accordion
5. **CTA Section** — `cta-section` / `cta-inner` canonical pattern

### Partnerships pages (Other: RocketLane, Provus, M3ter, ServiceNow, Flosum)
1. **Hero** — Partner logo + Forsys logo mark, `var(--gradient-hero)` background, short headline
2. **Partner Overview** — What this partner does and why Forsys chose them (`.split-card` or 2-col)
3. **Integration Value** — How this tool fits the Forsys RevOps stack (`.wwd-card` or accordion)
4. **CTA Section** — `cta-section` / `cta-inner` canonical pattern

### Resources pages
- **Customer Stories:** filterable `.sol-card` grid, `.sol-badge` category tags, scroll-fade entrance
- **Thought Leadership / Blogs:** article `.split-card` grid, `.tag` category filter pills
- **Webinars & Media:** video thumbnail card grid + upcoming event callout section
- **Events:** calendar-style upcoming events list + past events archive
- All use `var(--white)` or `var(--bg)` background, consistent card pattern from design system

### Company pages
- **About Forsys:** `var(--gradient-hero)` mission/vision hero, company timeline, values grid, `.stats-bar` strip
- **Leadership:** Bio `.partner-card` grid (photo + name + title), department filter `.ptab` tabs
- **Culture:** Photo-forward layout, values in `.split-card`, DEI section, employee quotes as `.test-quote`
- **Careers:** Open roles list (filterable by department/location via `.ptab`), culture snippet, CTA section
- **News & Press:** Press release list, media kit download, logo assets

## Shared Components (base.css)

Every page must include:
- **Nav:** Fixed 68px (`--nav-h`), always frosted-glass — `rgba(236,238,255,0.92)` + `backdrop-filter: blur(20px)`, single logo mark (gradient "F" square + wordmark), no dark/light swap, mega-menus with all dropdown links wired to new pages, mobile hamburger
- **Footer:** Dark gradient bg (`var(--gradient-dark)`), 5-col grid (brand col + 4 link cols), gradient-clipped tagline in bottom bar, social icons
- **Focus rings:** `2px solid var(--purple)` offset-2 on all interactive elements
- **Skip-nav link:** `<a class="skip-link" href="#main">Skip to main content</a>`

## Asset References

**Local (`assets/images/`)** — partner/vendor SVG logos already in the repo:
- `Salesforce.com_logo.svg`, `Agentforce_logo.svg`, `Conga_logo.svg`, `Oracle_logo.svg`
- `PROS_logo.svg`, `Mulesoft.svg`, `Tableau_logo.svg`, `Amazon_Web_Services_Logo.svg`
- `forsys-logo-white.png`

**External (`../assets-new/images/`)** — client logos and hero images (relative to sub-folder pages; use `../../assets-new/images/` from nested folders):
- Client logos: `john-deere.png`, `nasdaq.png`, `robinhood.png`, `seagate.png`, `zuora.png`, `reliant.png`, `coursera.png`
- Product icons: `revramp-icon.png`, `lexishift-icon.png`, `mna-icon.png`
- Hero images: `sf-hero.jpg`, `sf-hero-right.png`, `revenue-cloud.jpeg`

## CSS Structure

One stylesheet per page category (not per page), all loaded alongside `base.css`:

| Stylesheet | Covers |
|---|---|
| `assets/css/base.css` | Tokens, resets, nav, footer, shared components |
| `assets/css/home.css` | Homepage (`index.html`) |
| `assets/css/services.css` | All 10 service pages |
| `assets/css/solutions.css` | All 13 solutions pages (salesforce/conga-pros/oracle) |
| `assets/css/forsys-solutions.css` | All 6 forsys-solutions pages |
| `assets/css/industries.css` | All 5 industry pages |
| `assets/css/partnerships.css` | All 8 partnership pages |
| `assets/css/resources.css` | All 5 resources pages |
| `assets/css/company.css` | All 5 company pages |

## Code Conventions (from CONCEPT-MASTER.md §11)

**Class prefixes:**

| Prefix | Used for |
|---|---|
| `hero-`, `slide-` | Hero section and slideshow elements |
| `wwd-` | "What We Do" / service capability cards |
| `sol-` | Solution cards (with `.sol-badge`, `.sol-arrow`) |
| `split-` | 2-col split section and cards |
| `ind-` | Industries section and cards |
| `partner-` | Partnership section and cards |
| `stat-` | Stats bar items |
| `ptab` | Platform tab buttons |
| `accord-` | Accordion list/item/header/body |
| `pv-` | Platform visual panel |
| `ticker-` | Ticker/logo strip |
| `test-` | Testimonial section |
| `cta-` | CTA section (always `cta-section` + `cta-inner`) |
| `footer-` | Footer grid and elements |
| `nav-`, `mega-`, `dropdown` | Navigation |
| `btn-` | All button variants |
| `tag`, `tag-purple/green/blue` | Status chip badges |
| `section-label`, `section-title`, `section-sub`, `section-header` | Shared section heading pattern |
| `gradient-text` | AI gradient-clipped text span |
| `badge-dot` | Hero badge blinking dot |

**Other conventions:**
- State classes: `.active` (open accordion, active slide dot, active platform tab), `.is-active` (stage nodes)
- Single `script.js` with per-page IIFEs guarded by `if (document.querySelector('.page-[name]'))`
- Body tag carries the page class: `<body class="page-home">`, `<body class="page-services">`, etc.
- No emoji icons — SVG stroke icons only (`viewBox 0 0 24 24`, `stroke-width: 1.5`, `currentColor`, `fill: none`)
- HTML entities (`→`, `↗`, `·`) for decorative characters — never emoji
- Touch targets: ≥44×44px minimum on all interactive elements

## Pre-delivery Checklist

Before marking any page complete, verify all points from CONCEPT-MASTER.md §12:
1. All CSS custom properties match token values in CONCEPT-MASTER.md §1 — no ad-hoc hex codes
2. Only Space Grotesk (display) and Inter (body/UI) used — no other fonts
3. All radii are symmetric — pill (`100px`) or `16–24px` card radii. No asymmetric corners
4. Hover state provides visible cue: color + border → `--purple` + `translateY(-3px)` + shadow
5. Focus-visible ring renders: `2px solid var(--purple)` offset 2px on every interactive element
6. Color contrast ≥ 4.5:1 for body copy — never use `--text-muted` alone for body text
7. Decorative SVGs have `aria-hidden="true"`; all meaningful images have descriptive `alt`
8. Semantic HTML: `<button>` for actions, `<a>` for navigation, `<main>`, `<section>`, `<nav>`, headings in order
9. ARIA roles on nav (`role="menubar/menu/menuitem"`, `aria-haspopup`, `aria-expanded`), tabs (`role="tablist/tab/tabpanel"`, `aria-selected`), live regions on hero slideshow
10. Skip link present and functional
11. `prefers-reduced-motion` honored — global rule in `base.css` disables all animations > 150ms
12. Responsive tested at 1280px, 1024px, 768px, 375px widths
13. No console errors in browser dev tools
14. No emoji in rendered UI — SVG stroke icons and HTML entities only
15. Touch targets ≥ 44×44px on all interactive elements
