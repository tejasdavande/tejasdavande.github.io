# Portfolio update log

Running record of what content is on the site, when it changed, and what was left out on purpose.
Before the next update, read the latest entry and the "Not on the site yet" list first.

Source of truth for content: my private experience report (kept locally, not committed).

---

## 2026-10-05 (second update)

- Replaced `assets/Tejas_Davande_Resume.pdf` with the current 1-page resume: generic project names, job-search email, 30K+ users, promotion and team lead, plus LinkedIn / GitHub / portfolio links. Same filename, so the download buttons didn't need changes.
- Added **RabbitMQ** back to Skills → Queues & Async so the site matches the resume.

## 2026-10-05

### Changed

| Area | Before | After |
|---|---|---|
| Project names | Internal client codenames in three project titles | Generic names: "Social Media & Content Creator Platform — Core Backend", "AssetOptimiser — Media Processing Microservice", "File Upload Service" |
| Contact email (hero, about, contact) | personal address | `tejasdavande369@gmail.com` (job-search address) |
| Meta / OG / Twitter description | Node.js · NestJS · AWS | adds TypeScript and AI analysis backends |
| Hero tagline | payment, media and real-time pipelines | payments, media pipelines and AI analysis backends |
| Stats | 3+ yrs · 85% · 5K+ files/day · 18K+ users | 3+ yrs · 85% faster APIs · 300+ REST endpoints · 30K+ registered users |
| About | SDE-II only | promotion (SDE I → SDE II, Aug 2025), leads 3 backend engineers, 300+ endpoints / 4 microservices / 30K+ users / 99.9% uptime, AI backends |
| Quick facts | — | added "Leading 3 backend engineers" |
| Experience — Ink In Caps | 6 bullets, no promotion | promotion line + 11 bullets (endpoints/uptime, latency, geo search + 7–8% uplift, auth 50+ rules, media offload, Stripe for Hungama + Centrobill/Skrill, email 90% cut, 150+ migrations, AI backends, team leadership, NestJS migration) |
| Contact lead | backend and full-stack opportunities | backend engineering opportunities (Node.js / NestJS) |
| Hero role rotator (`Js/main.js`) | — | added "AI-powered backends" |
| README | old live URL, old LinkedIn URL, personal email | `https://tejasdavande.github.io/`, `/in/tejasdavande`, job-search email |

### Skills

- Added: Webhooks, Elasticsearch, ALB, Route 53, PM2, Event-Driven, Background Jobs, HMAC
- New cards: **AI & LLM** (OpenAI API, LangChain, Deepgram, ONNX Runtime), **Payments & Integrations** (Stripe, Centrobill, Skrill, SendGrid, Hive Moderation), **Architecture** (Microservices, Modular Monolith, CQRS, API Gateway, Caching)
- Removed: **RabbitMQ** — no production use yet. Re-add once `stripe-commerce-engine` (uses RabbitMQ) is on GitHub.
- Kept: **PostgreSQL** — now backed by the public `auth-gateway-service` repo.

### Projects

- Updated: Core Backend (30K+ users, 300+ endpoints, 99.9% uptime), Hefty Verse (client Hungama, 800+ DAU, 4,000+ coupons/month)
- Added (Production): Email Notification Tier Service
- Added (Enterprise badge): Sales Intelligence & AI Analysis Backend, Retail AI Analytics & Retargeting, Media Processing Worker Service
- Added (GitHub links): auth-gateway-service, async-media-pipeline (marked in progress)

---

## Not on the site yet

| Item | Why not / when |
|---|---|
| `og-image.png` | Reviewed 2026-10-05: accurate (Backend Developer · SDE-II, Node.js/NestJS/TypeScript/AWS/MongoDB/Redis). Tagline doesn't mention AI work yet — optional refresh. |
| Data Ingestion API Gateway (enterprise project) | Left out to keep the projects grid focused; add if a security/API-gateway angle is wanted. |
| Import Service, Queue Monitoring Dashboard | Internal tooling, low signal for recruiters. |
| Scale details: 800–1,000 concurrent users, ~40K API calls per peak cycle | Concurrent users is in Experience; the API-call figure is resume-only. |
| Cost savings, DB size, test coverage, deploy frequency | Not measured yet — don't add estimates. |
| Showcase repos 3–7 (stripe-commerce-engine, realtime-chat-gateway, geo-matchmaking-api, rag-search-service, nest-microservices-starter) | Add a project card each once the repo has real code on GitHub. |
| SEO / Vercel prep (separate pages, sitemap, robots.txt, schema.org) | Planned separately. |

## Rules for future updates

- Never use internal client codenames anywhere on the site, in the README, or in file names.
- Use 30K+ for platform users. Don't also quote 18K+.
- Keep the site's skills and numbers in sync with the downloadable resume. When one changes, update the other.
- Only list skills that can be defended in an interview. No Kubernetes, Kafka, GraphQL, Go, Java, etc.
- Don't add numbers that weren't measured.
- Add a new dated entry here for every content change.
