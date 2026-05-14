// ─── CANONICAL PAGE LIST ──────────────────────────────────────────────────────
// Single source of truth for all pages under test.
// Imported by snapshots.spec.js (visual regression) and all-links.spec.js (link checking).
//
// To add a page: add an entry here, then run the update-snapshots workflow to generate its baseline PNG.
// Campaign / event-specific pages (RSVPs, short-lived lead-gen forms) are intentionally excluded —
// they change too frequently and would produce constant snapshot noise.

export const PAGES = [
  // ── Main ──────────────────────────────────────────────────────────────────
  { name: 'homepage',                                    url: '/index.html' },
  { name: 'contact',                                     url: '/contact.html' },
  { name: 'privacy',                                     url: '/privacy.html' },

  // ── Services ──────────────────────────────────────────────────────────────
  { name: 'services-revenue-lifecycle-strategy',         url: '/services/revenue-lifecycle-strategy.html' },
  { name: 'services-ai-agents-development',              url: '/services/ai-agents-development.html' },
  { name: 'services-ai-application-development',        url: '/services/ai-application-development.html' },
  { name: 'services-ai-enabled-managed-services',       url: '/services/ai-enabled-managed-services.html' },
  { name: 'services-autonomous-commerce',               url: '/services/autonomous-commerce.html' },
  { name: 'services-build-or-buy-strategy',             url: '/services/build-or-buy-strategy.html' },
  { name: 'services-data-migration',                    url: '/services/data-migration.html' },
  { name: 'services-devops',                            url: '/services/devops.html' },
  { name: 'services-enterprise-ai-strategy',            url: '/services/enterprise-ai-strategy.html' },
  { name: 'services-integrations',                      url: '/services/integrations.html' },

  // ── Solutions — Salesforce ─────────────────────────────────────────────────
  { name: 'sol-sf-agentforce-crm',                      url: '/solutions/salesforce/agentforce-crm.html' },
  { name: 'sol-sf-agentforce-commerce',                 url: '/solutions/salesforce/agentforce-commerce.html' },
  { name: 'sol-sf-agentforce-platform',                 url: '/solutions/salesforce/agentforce-platform.html' },
  { name: 'sol-sf-agentforce-revenue-management',       url: '/solutions/salesforce/agentforce-revenue-management.html' },
  { name: 'sol-sf-manufacturing-cloud',                 url: '/solutions/salesforce/manufacturing-cloud.html' },

  // ── Solutions — Conga ─────────────────────────────────────────────────────
  { name: 'sol-conga-contract-lifecycle-management',    url: '/solutions/conga/contract-lifecycle-management.html' },
  { name: 'sol-conga-revenue-and-commerce',             url: '/solutions/conga/revenue-and-commerce.html' },
  { name: 'sol-conga-smart-cpq',                        url: '/solutions/conga/smart-cpq.html' },
  { name: 'sol-conga-smart-pricing-optimisation',       url: '/solutions/conga/smart-pricing-optimisation.html' },

  // ── Solutions — Oracle ────────────────────────────────────────────────────
  { name: 'sol-oracle-bpa-aistudio',                    url: '/solutions/oracle/bpa-aistudio.html' },
  { name: 'sol-oracle-fusion-finance-accounting',       url: '/solutions/oracle/fusion-finance-accounting.html' },
  { name: 'sol-oracle-fusion-supply-chain',             url: '/solutions/oracle/fusion-supply-chain.html' },
  { name: 'sol-oracle-oic-paas',                        url: '/solutions/oracle/oic-paas.html' },

  // ── Forsys Solutions ──────────────────────────────────────────────────────
  { name: 'fs-revramp',                                 url: '/forsys-solutions/revramp.html' },
  { name: 'fs-lexishift',                               url: '/forsys-solutions/lexishift.html' },
  { name: 'fs-revmove',                                 url: '/forsys-solutions/revmove.html' },
  { name: 'fs-mna-for-salesforce',                      url: '/forsys-solutions/mna-for-salesforce.html' },
  { name: 'fs-aitest',                                  url: '/forsys-solutions/aitest.html' },
  { name: 'fs-ai-agents',                               url: '/forsys-solutions/ai-agents.html' },

  // ── Industries ────────────────────────────────────────────────────────────
  { name: 'ind-hi-tech',                                url: '/industries/hi-tech.html' },
  { name: 'ind-financial-services',                     url: '/industries/financial-services.html' },
  { name: 'ind-healthcare-life-sciences',               url: '/industries/healthcare-life-sciences.html' },
  { name: 'ind-manufacturing',                          url: '/industries/manufacturing.html' },
  { name: 'ind-saas-subscription',                      url: '/industries/saas-subscription.html' },

  // ── Partnerships ──────────────────────────────────────────────────────────
  { name: 'partner-salesforce',                         url: '/partnerships/salesforce.html' },
  { name: 'partner-conga',                              url: '/partnerships/conga.html' },
  { name: 'partner-oracle',                             url: '/partnerships/oracle.html' },
  { name: 'partner-rocketlane',                         url: '/partnerships/rocketlane.html' },
  { name: 'partner-provus',                             url: '/partnerships/provus.html' },
  { name: 'partner-m3ter',                              url: '/partnerships/m3ter.html' },
  { name: 'partner-servicenow',                         url: '/partnerships/servicenow.html' },
  { name: 'partner-flosum',                             url: '/partnerships/flosum.html' },
  { name: 'partner-anthropic',                          url: '/partnerships/anthropic.html' },

  // ── Resources ─────────────────────────────────────────────────────────────
  { name: 'res-customer-stories',                       url: '/resources/customer-stories.html' },
  { name: 'res-blogs',                                  url: '/resources/blogs.html' },
  { name: 'res-events',                                 url: '/resources/events.html' },
  { name: 'res-thought-leadership',                     url: '/resources/thought-leadership.html' },
  { name: 'res-webinars-events',                        url: '/resources/webinars-events.html' },
  { name: 'res-rev30-webinar',                          url: '/resources/rev30-webinar-ondemand.html' },

  // ── Company ───────────────────────────────────────────────────────────────
  { name: 'co-about',                                   url: '/company/about.html' },
  { name: 'co-careers',                                 url: '/company/careers.html' },
  { name: 'co-code-of-conduct',                         url: '/company/code-of-conduct.html' },
  { name: 'co-contact',                                 url: '/company/contact.html' },
  { name: 'co-culture',                                 url: '/company/culture.html' },
  { name: 'co-leadership',                              url: '/company/leadership.html' },
  { name: 'co-news-press',                              url: '/company/news-press.html' },
  { name: 'co-privacy-policy',                          url: '/company/privacy-policy.html' },
  { name: 'co-sustainability-policy',                   url: '/company/sustainability-policy.html' },

  // ── Past Webinars ─────────────────────────────────────────────────────────
  { name: 'webinar-agentforce',                         url: '/past-webinars/agentforce-webinar-ondemand.html' },
  { name: 'webinar-apprise-healthcare',                 url: '/past-webinars/apprise-healthcare-ondemand.html' },
  { name: 'webinar-apprise-pricing',                    url: '/past-webinars/apprise-pricing-ondemand.html' },
  { name: 'webinar-clm',                                url: '/past-webinars/clm-webinar-ondemand.html' },
  { name: 'webinar-integrations',                       url: '/past-webinars/integrations-webinar-ondemand.html' },
  { name: 'webinar-manufacturing',                      url: '/past-webinars/manufacturing-webinar-ondemand.html' },
  { name: 'webinar-pharma',                             url: '/past-webinars/pharma-webinar-ondemand.html' },
  { name: 'webinar-rev30',                              url: '/past-webinars/rev30-webinar-ondemand.html' },
  { name: 'webinar-revramp-salesforce',                 url: '/past-webinars/revramp-salesforce-webinar-ondemand.html' },
  { name: 'webinar-spiff',                              url: '/past-webinars/spiff-webinar-ondemand.html' },
  { name: 'webinar-womens-day-2022',                    url: '/past-webinars/womens-day-2022.html' },

  // ── Lead Gen (permanent only — campaign/event pages excluded) ─────────────
  { name: 'lead-gen-propel26',                          url: '/lead-gen/forsys-propel26.html' },
  { name: 'lead-gen-salesforce',                        url: '/lead-gen/salesforce-lead-gen-callout-form.html' },
  { name: 'lead-gen-awt-singapore',                     url: '/lead-gen/awt-singapore-lead-gen-callout-form.html' },

  // ── Other ─────────────────────────────────────────────────────────────────
  { name: 'case-studies',                               url: '/case-studies/cs.html' },
  { name: 'forsys-solutions-index',                     url: '/forsys-solutions/index.html' },
];
