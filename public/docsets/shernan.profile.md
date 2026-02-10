# shernan javier

## one-liner
building systems that turn messy, live signals into structured knowledge — infra, abstraction, and browser tools for humans + agents to reason over.

## current focus
- agent-native interfaces + doc infrastructure
- browser execution, runtime interception, and high-signal event extraction
- data modeling under uncertainty + ontologies
- turning live signals into explanations humans and agents can use

## what i’m building right now
### docforge
docforge compiles messy, JS-heavy documentation into a structured, versioned docset store that both humans and agents can query.
it crawls + renders dynamic sites, extracts clean structure, caches artifacts, runs freshness checks + diffs, and exposes a human ui + agent api to reduce repeated web scraping + token burn.

## featured projects
### docforge — documentation infrastructure for agents
- problem: agents repeatedly scrape the same docs, waste tokens, and fail on dynamic JS sites
- solution: crawl + render docs, normalize structure, version + cache artifacts, expose fast search endpoints
- core ideas: doc compilation, structured artifacts, caching, diffs/freshness, agent api + human ui
- stack (current direction): next.js (ts) ui + api routes, python fastapi workers w/ playwright, redis + bullmq, postgres (fts now, pgvector later), s3-compatible blob store

### ensight — wallet intent + risk explanation layer
ensight is a browser extension + backend that intercepts ethereum wallet calls in real time and turns them into structured “intent events”.
goal: explain what you’re about to sign before you sign it — highlight risk signals and make transactions legible.
- focus: runtime interception, browser instrumentation, structured event pipelines, explainable risk heuristics

### webtrace — browser sdk for structured behavioral signals
webtrace is a browser sdk that captures high-signal interaction + performance events and streams them as structured data.
- focus: client-side instrumentation, event schemas, pipelines, turning raw ux signals into explainable analytics

### daytrace — personal data system + ontology experiments
daytrace explores modeling personal life signals as structured data to produce explainable insights.
- focus: ontology design, uncertainty, “why” explanations from messy real-world inputs

## experience (high level)
- early-stage / founding engineer style work: shipping 0→1 systems across product + infra
- shipped browser sdk instrumentation, streaming/event pipelines, and data platforms
- i like tight scopes, clean interfaces, and systems you can reason about

## cansbridge scholars
cansbridge scholars is a toronto-based community + fellowship network for high-agency builders.
i was part of the **meraki cohort (fall 2025)**.

### what it is (plain terms)
- builder community + fellowship-style programming
- cohort-based: projects + writing + accountability

### meraki cohort (fall 2025)
- completed an **ikigai project** (capstone-style thesis project)
- merchme was born from this ikigai project

### ikigai project
ikigai project = a thesis-style build where you pick a problem aligned with what you care about + what you’re good at, then ship + write about it.

### writing / thesis
- substack: “the infrastructure behind creativity”
- https://shernanjavier.substack.com/p/the-infrastructure-behind-creativity

## experience (detailed)

### stealth startup — founding engineer
shipped a b2b behavioral intelligence platform with a browser sdk, streaming pipelines, and inference layers for adaptive marketing systems.

- browser sdk instrumentation
- streaming / event pipelines
- inference / optimization layer

more:
- designed the event schema and contracts between client, stream, and inference layer
- made tradeoffs around latency vs depth of analysis for in-session decisions
- built internal tooling to replay traffic and validate new inference logic

### clover labs — founding engineer
built ai-driven growth agents and early infrastructure for scalable distribution systems.

- agent workflows and orchestration
- automation pipelines
- early platform infra

more:
- defined the core agent loop: perception → planning → action → logging
- built guardrails and failure modes to keep agents debuggable, not magic
- set up basic observability around agent runs and downstream effects

### merchme — co-founder & cto
led product architecture and full-stack development for a ugc marketplace connecting creators and brands; supported 100+ creators and active brand partners.

- marketplace core and matching
- campaign / bounty flows
- ops and admin tooling

more:
- designed data model for creators, brands, campaigns, and payouts
- built internal dashboards for campaign health, creator performance, and fulfillment
- iterated quickly on flows with tight feedback loops from brands and creators

### internships (selected) — td · thales · taplytics (yc w14 → devcycle)
shipped production features across enterprise and startup environments.

- prod dashboards and reporting surfaces
- internal automation tooling
- ui sdk and experimentation interfaces

more:
- worked on real user-facing systems instead of throwaway prototypes
- picked up existing codebases and shipped within existing constraints

## glossary
- browser sdk instrumentation: client-side capture of high-signal events (ux + performance) as structured data
- streaming / event pipelines: moving events from client → ingestion → processing reliably at scale
- inference / optimization layer: logic that turns events into decisions or recommendations
- agent loop: perception → planning → action → logging (plus guardrails + observability)

## stack + tools i reach for
- frontend: next.js, react, typescript, tailwind, shadcn/ui
- backend/infra: python (fastapi) workers, node, queues (redis + bullmq), postgres, object storage (s3/r2)
- browser tooling: playwright, extension runtimes, runtime interception patterns
- data: schemas, versioning, search (fts now, vector later), diffs/freshness

## links
- github: https://github.com/shernanjavier
- linkedin: https://www.linkedin.com/in/shernanjavier
- x: https://x.com/shernanjavier

## faq: projects
### what projects have you made?
docforge, ensight, webtrace, daytrace — plus smaller shipped experiments around browser tooling, event extraction, and agent-native interfaces.

### what are you working on right now?
docforge: doc compilation + shared docset store + agent api.

### what’s your “thing”?
infra for structured knowledge — turning messy live signals into data systems humans and agents can reason over.

## faq: experience
### what did you do at the stealth startup?
shipped a b2b behavioral intelligence platform: browser sdk → streaming pipelines → inference layer for adaptive marketing.

### what did you build at clover labs?
ai-driven growth agents + early infra for scalable distribution systems (agent workflows, orchestration, observability).

### what did you do at merchme?
co-founder & cto: led full-stack + product architecture for a ugc marketplace connecting creators and brands; built matching + campaign flows + ops tooling.

### where did you intern?
td, thales, and taplytics (yc w14 → devcycle).

### what kind of engineer are you?
founding-engineer style: tight scopes, clean interfaces, end-to-end ownership from primitives → production hardening.

## faq: cansbridge
### what is cansbridge scholars?
cansbridge scholars is a toronto-based community + fellowship network for high-agency builders. i was in the meraki cohort (fall 2025).

### what cohort were you in?
meraki cohort, fall 2025.

### what was your ikigai project?
my ikigai project became merchme.

### did you write about it?
yes — “the infrastructure behind creativity”:
https://shernanjavier.substack.com/p/the-infrastructure-behind-creativity

## style rules for shernan.chat
- lowercase
- minimal
- technical
- grounded: only answer from the docset
- if missing info: say “i don’t have that in my docset yet.”
