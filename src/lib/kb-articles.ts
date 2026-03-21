/**
 * Knowledge Base articles extracted from ace-capabilities-v2.md
 * These serve as the content source until MDX compilation is set up.
 */

export interface KBArticle {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
}

export const KB_CATEGORIES = [
  { name: "Getting Started", slug: "getting-started", color: "var(--capacity)", count: 5 },
  { name: "The Triad", slug: "the-triad", color: "var(--authority)", count: 3 },
  { name: "Commands & Skills", slug: "commands", color: "var(--expansion)", count: 6 },
  { name: "Integrations", slug: "integrations", color: "var(--authority)", count: 4 },
  { name: "Capabilities", slug: "capabilities", color: "var(--capacity)", count: 5 },
  { name: "FAQ", slug: "faq", color: "var(--expansion)", count: 4 },
];

export const KB_ARTICLES: KBArticle[] = [
  // ── Getting Started ──
  {
    slug: "what-is-ace",
    title: "What Is ACE?",
    category: "Getting Started",
    excerpt: "ACE is not a platform. It's a personal AI operating system that runs on your machine.",
    content: `ACE is not a platform. It's not a SaaS product you subscribe to and evaluate against competitors. It's a personal AI operating system that runs directly on your machine, connected to your files and, increasingly, to your external tools through APIs.

The difference matters. A platform is a building you move into. The rooms are fixed. You learn where things are and work within the layout someone else designed. ACE is closer to a brain you train. It starts with your files, your brands, your context. Every session adds to what it knows. The system doesn't reset between conversations. It compounds.

This means ACE doesn't compete with Notion, or Asana, or any SaaS tool. It sits in a different category. Those are tools with interfaces. ACE is intelligence with access to your tools.

Five things follow from that distinction:

1. **ACE has a dedicated desktop interface — and you can also talk to it in plain English.** The ACE Desktop app gives you a visual command center with real-time system signals, velocity charts, pipeline tracking, and one-click access to commands.

2. **There's no login for your team.** ACE is built around you as a single user. It generates everything your team needs — handoff documents, task specs, outreach scripts, briefings — and you share those through your normal channels.

3. **The system evolves.** Nikhil maintains a core ACE repository and pushes specific upgrades, refined skills, and tested pipelines to each member's system through GitHub.

4. **Your data lives on your machine.** Not on someone else's server. Your vault is a folder on your computer, backed by a private Git repository.

5. **It gets better the more you use it.** Not because of software updates, but because ACE accumulates your context.`,
  },
  {
    slug: "your-first-start",
    title: "Your First /start",
    category: "Getting Started",
    excerpt: "The /start command grounds all three Triad legs before you enter execution.",
    content: `/start is the morning day-start protocol. It grounds all three Coherence Triad legs — Authority, Capacity, Expansion — before you enter execution mode.

When you run /start, the system:

1. **Reads your current state** — mode, energy, open failures, handoff from last session
2. **Checks your calendar** — what's actually scheduled today
3. **Surfaces active outcomes** — your top priorities from active.md
4. **Runs a Triad check** — is each leg grounded? If not, it addresses the gap before pushing you into work
5. **Recommends your first block** — based on energy, priorities, and calendar

This isn't a task list. It's an orientation. The system ensures you start from coherence, not from the inbox.

If your Capacity leg is flagged (e.g., poor sleep, high stress), /start won't push you into deep work. It'll suggest regulation first. That's the difference between a productivity system and a coherence engine.`,
  },
  {
    slug: "vault-architecture",
    title: "Understanding Your Vault",
    category: "Getting Started",
    excerpt: "Your vault is an Obsidian folder with a specific architecture built around the Triad.",
    content: `Your ACE vault is an Obsidian folder with a specific architecture. Everything is plain-text markdown, version-controlled with Git, and organized around the Coherence Triad.

**Core directories:**
- \`00-System/\` — State engine, permissions, schemas, core identity files
- \`01-Journal/\` — Daily notes, patterns, session logs
- \`02-Rituals/\` — Tracking for recurring practices
- \`04-Network/\` — People, relationships, follow-ups
- \`05-Research/\` — Topics, competitive intelligence, learning
- \`Domains/\` — Your projects, ventures, clients

**Key files:**
- \`state.md\` — Your current operating mode, energy, outcomes
- \`active.md\` — Your top 3 priorities (max 3, enforced)
- \`user.md\` — Your name, email, timezone
- \`core/voice-profile.md\` — How ACE writes in your voice
- \`core/coach-constitution.md\` — How ACE coaches you

The vault is yours forever. Even if ACE disappeared tomorrow, your vault keeps working as an Obsidian vault. That's sovereignty.`,
  },
  {
    slug: "data-sovereignty",
    title: "Data Sovereignty",
    category: "Getting Started",
    excerpt: "Everything lives locally. Not in someone else's cloud. Not feeding someone else's model.",
    content: `Everything lives locally. Not on someone else's server. Your vault is a folder on your computer, backed by a private Git repository. During sessions, conversation content passes through Anthropic's API. Anthropic's API terms state that API inputs and outputs are not used for model training. Your business data stays in your vault.

What this means:
- Your identity files, patterns, decisions — all local
- Git history gives you full version control
- You can move your vault to any machine
- No vendor lock-in — it's plain text markdown
- No one else can access your intelligence

In a world where your attention and information are the product being harvested — owning your own intelligence infrastructure is not a technical detail. It's a political one.`,
  },
  {
    slug: "build-session",
    title: "What Happens in a Build Session",
    category: "Getting Started",
    excerpt: "A 2-hour 1:1 where your vault comes alive — integrations, identity core, first /start.",
    content: `The build session is a 2-hour 1:1 with Nikhil where your ACE vault comes alive. By the time you leave, you have a working operating system.

**Pre-session (already done):**
- Blueprint submitted and reviewed
- Supporting files read from your Drive folder
- Custom skills built for your workflow
- Vault scaffolded with your identity core

**During the session (2 hours):**
1. Git setup + vault verification (~15 min)
2. Identity core walkthrough — review DCA, values, edges (~20 min)
3. Domain configuration — set up your projects and ventures (~20 min)
4. Integration setup — Gmail, Calendar, any other tools (~25 min)
5. Skills demo — run /start, /pulse, /coach live (~20 min)
6. Your first real /start (~10 min)
7. Q&A and troubleshooting (~10 min)

**After the session:**
- Your vault is fully operational
- Weekly skill updates start flowing via /sync-core
- Group calls begin
- Full member access unlocked on the website`,
  },

  // ── The Triad ──
  {
    slug: "triad-overview",
    title: "The Coherence Triad",
    category: "The Triad",
    excerpt: "Authority, Capacity, Expansion — the three legs that organize everything in ACE.",
    content: `ACE is built on a framework called the Coherence Triad: Authority, Capacity, and Expansion.

- **Authority** is about truth, choice, and expression. Knowing what's real for you and acting from that.
- **Capacity** is about regulation, depth, and resilience. Having the internal resources to sustain what you're building.
- **Expansion** is about rhythm, containers, and realization. The structures that turn intention into reality.

When all three are aligned, you get coherence — not productivity, not optimization, but the experience of your life and work moving in the same direction.

This isn't a productivity system with a spiritual label. The Triad is the organizing principle. Every command, every review cycle, every prompt is mapped to one of these three legs. /start grounds all three before you begin your day. /pulse checks whether any leg is weakening. /coach works the edges where growth is happening.

Most AI tools optimize for output. ACE optimizes for coherence. That's the difference.`,
  },
  {
    slug: "nine-signals",
    title: "The Nine Signals",
    category: "The Triad",
    excerpt: "Each Triad leg has 3 signals. When all 9 are green, that's coherence.",
    content: `Each leg of the Triad has three signals that ACE tracks:

**Authority (Truth → Choice → Expression)**
- Truth: Are you living from what's actually real for you?
- Choice: Are you deciding from center, not from obligation or anxiety?
- Expression: Is your inner world visible? Are you creating from identity, not approval?

**Capacity (Regulation → Depth → Resilience)**
- Regulation: Can you return to center when activated?
- Depth: What's the quality of your presence?
- Resilience: How quickly do you recover?

**Expansion (Rhythm → Containers → Realization)**
- Rhythm: Are you maintaining sustainable pace?
- Containers: Do you have structures that hold your energy?
- Realization: Are your outputs reflecting who you actually are?

The /pulse command derives these 9 signals from your actual system state — not self-reported feelings. It reads your execution log, calendar, follow-ups, inbox, and patterns to determine what's GREEN, YELLOW, or RED.

When signals drop, ACE doesn't push harder. It identifies which Triad leg is weakening and suggests the appropriate response.`,
  },
  {
    slug: "coherence-vs-productivity",
    title: "Coherence vs Productivity",
    category: "The Triad",
    excerpt: "Productivity optimizes output. Coherence aligns identity, capacity, and structure.",
    content: `Every productivity system asks: "How do I get more done?" ACE asks: "Am I operating as one integrated person?"

The difference shows up in practice:

**A productivity system** might notice you missed a deadline and suggest better time management. **ACE** might notice you missed a deadline because your Capacity leg is red — you've been running hot for 10 days with no regulation — and suggests rest before pushing harder.

**A productivity system** organizes your tasks by priority and deadline. **ACE** organizes your work by whether it aligns with your identity, whether you have the capacity to hold it, and whether the structures exist to contain it.

**A productivity system** treats you as a function that converts inputs to outputs. **ACE** treats you as a whole person whose output quality depends on internal coherence.

When confidence + consistency + congruence align = coherence. If a component doesn't strengthen at least one Triad leg, it doesn't belong in the system.`,
  },

  // ── Commands & Skills ──
  {
    slug: "daily-rhythm",
    title: "Daily Commands: /start, /close, /eod",
    category: "Commands & Skills",
    excerpt: "The three commands that give your day a coherent arc.",
    content: `/start, /close, and /eod give your day a coherent arc without micromanagement.

**/start** — Morning orientation. Grounds all three Triad legs, checks calendar, surfaces priorities, recommends your first block. Takes 2-3 minutes. This is how you enter the day from coherence, not from the inbox.

**/close** — Session bookmark. When you finish a work session, /close logs what shipped, updates state, and captures the handoff for your next session. Quick — no ceremony.

**/eod** — End-of-day closure. Full ceremony: reviews what moved, captures patterns, logs decisions, surfaces unfinished items, seeds tomorrow. This is where the system learns from your day.

The key insight: /start reads what /eod and /close wrote. The system maintains continuity across sessions. You never start from zero.`,
  },
  {
    slug: "pulse-command",
    title: "/pulse — System Health Check",
    category: "Commands & Skills",
    excerpt: "Derives 9 signals from actual system state. GREEN/YELLOW/RED per signal.",
    content: `/pulse is the ACE Triad health diagnostic. It derives 9 signals (3 per Triad leg) from your actual system state — not self-reported feelings.

**What it reads:**
- Last /eod run (system discipline)
- Inbox count (capture hygiene)
- Overdue follow-ups (commitment integrity)
- Open failure age (unresolved issues)
- Body/movement gaps (regulation)
- Energy trend (capacity trajectory)
- Floating actions (structure leaks)
- Outcome deadlines (expansion pressure)
- Weekly target freshness (rhythm)

**What it produces:**
- GREEN / YELLOW / RED per signal
- Anti-state detection: DISCONNECTED (Authority), DYSREGULATED (Capacity), DISORGANIZED (Expansion)
- Specific recommendations based on what's actually off

Run /pulse anytime, or when something feels off. The system will tell you which Triad leg needs attention before you try to push through.`,
  },
  {
    slug: "coaching-commands",
    title: "Coaching: /coach, /edge, /regulate",
    category: "Commands & Skills",
    excerpt: "Reflective dialogue, growth edge work, and nervous system regulation.",
    content: `ACE includes a coaching layer built for reflective work, not productivity hacking.

**/coach** — Open-ended coaching conversation. Reflective dialogue, potent questions, and pattern observations. Use when feeling stuck or unclear. The system reads your identity core, patterns, and current state to coach from context, not generic advice.

**/edge** — Work through a specific growth edge. Guided inquiry, somatic prompts, and experiment suggestions. Use when facing a pattern you want to shift. The system knows your edges from your identity files.

**/regulate** — Nervous system check-in and grounding. Provides specific regulation strategies from your own toolkit (captured in nervous-system.md). Use when activated, anxious, or scattered.

**/audit-energy** — Boundary and energy review. Surfaces overcommitment, suggests what to decline, and recommends recovery.

**/blind-spots** — Surface what you might be missing. Questions you should be asking, patterns you might be avoiding, gaps between stated and actual.

All coaching commands read your coach-constitution.md — a file that defines how ACE coaches YOU specifically, based on your edges, preferences, and what works for your psychology.`,
  },
  {
    slug: "triage-capture",
    title: "/capture and /triage — Inbox Flow",
    category: "Commands & Skills",
    excerpt: "Capture anything instantly. Triage routes it to the right place.",
    content: `**/capture** — Zero-friction inbox capture. Drops a timestamped entry into your inbox with no processing or routing. Use anytime you need to quickly capture a thought or task. No formatting required — just say it.

**/triage** — Routes inbox items to their canonical destinations using the context router. When your inbox has 3+ items, /triage reads each one, determines where it belongs (a domain, a follow-up, a pattern note, a decision), and routes it there.

The flow:
1. Throughout the day, /capture everything that comes up
2. When you have a batch (or during /eod), run /triage
3. Items get routed to their canonical homes — no orphaned notes

If /triage can't determine where something belongs, it stays in the inbox with a routing note. The system never guesses.`,
  },
  {
    slug: "weekly-review",
    title: "/weekly-review — System Calibration",
    category: "Commands & Skills",
    excerpt: "Weekly reflection that reviews wins, misses, and commitment violations.",
    content: `/weekly-review is the weekly reflection and system calibration ritual. It reviews the full week and adjusts the system to protect coherence.

**What it covers:**
1. What shipped this week (wins)
2. What didn't move (misses and blockers)
3. Commitment violations (said yes but didn't follow through)
4. Pattern observations (recurring themes across the week)
5. Triad check (which leg needs attention next week)
6. Weekly target setting for next week
7. Memory validation (checks if stored memories are still accurate)

The review writes the upcoming week's targets to active.md and generates a review document saved to your journal.

This is where the system self-corrects. Without weekly review, drift accumulates silently. With it, you catch misalignment while it's still small.`,
  },
  {
    slug: "skill-ecosystem",
    title: "The Skill Ecosystem",
    category: "Commands & Skills",
    excerpt: "21+ built-in skills, with new ones pushed via /sync-core.",
    content: `ACE ships with 21+ skills — specialized capabilities that handle specific workflows. Skills are defined in .claude/skills/ and executed as slash commands.

**Categories:**
- **Daily rhythm:** /start, /close, /eod, /state
- **Health:** /pulse, /regulate, /audit-energy
- **Coaching:** /coach, /edge, /blind-spots
- **Workflow:** /capture, /triage, /followup, /decide
- **Review:** /weekly-review, /monthly-reflection
- **Content:** /content, /signal, /list-email
- **System:** /sync-core, /commit, /release

**How skills evolve:**
Nikhil maintains the core ACE repository. When a skill is proven, it gets pushed to all member systems via /sync-core. Your system receives the update, and you can choose to integrate it.

**Custom skills:**
During your build session, skills are tailored to your specific workflow. You can also build your own skills — they're just markdown files with a specific format.`,
  },

  // ── Integrations ──
  {
    slug: "how-integrations-work",
    title: "How Integrations Work",
    category: "Integrations",
    excerpt: "ACE connects to external services through MCP — a standardized protocol for AI tools.",
    content: `ACE connects to external services through MCP (Model Context Protocol). MCP is a standardized protocol that wraps APIs into a format AI tools understand natively. Think of it as a standardized plug.

When an MCP integration exists for a tool, connecting it to ACE is straightforward. When one doesn't exist, ACE can often connect directly through the platform's API.

**Currently supported:**
- Google Workspace (Gmail, Calendar, Drive, Docs)
- Airtable
- Fathom (call transcripts)
- Telegram
- ThriveCart
- Stripe
- Cal.com
- Reddit
- FluentCRM

**How to add new integrations:**
Every integration is customized based on your tool stack. Initial connections are set up during the build session. Future integrations can be added by you (with training) or by Nikhil.

The integration ecosystem is growing. New connections appear over time. As integration pipelines are tested for specific use cases, that work is shared with all ACE members.`,
  },
  {
    slug: "gmail-calendar",
    title: "Gmail & Calendar Integration",
    category: "Integrations",
    excerpt: "Read emails, draft replies, check calendar — all from within ACE.",
    content: `The Google Workspace integration connects ACE to Gmail, Google Calendar, and Google Drive.

**Gmail capabilities:**
- Search and read emails
- Draft replies in your voice
- Process unread emails in batches (/emails command)
- Label management and filtering
- Attachment handling

**Calendar capabilities:**
- Read events across all calendars
- Check availability and free/busy
- Events mapped to Triad categories (AUTH/CAPACITY/EXPAND)
- Time-aware suggestions in /start and /brief

**How it's used in practice:**
- /start checks your calendar before recommending your first block
- /brief surfaces today's schedule alongside priorities
- /emails processes unread mail and recommends actions
- /prep pulls meeting context before important calls
- /audit-energy reads your calendar density to flag overcommitment

All actions require your explicit approval. ACE never sends an email without you reviewing it first.`,
  },
  {
    slug: "data-pipelines",
    title: "Data Pipelines & Analytics",
    category: "Integrations",
    excerpt: "Pull data from multiple APIs into a local database, sync on schedule, surface trends.",
    content: `ACE can pull data from multiple APIs into a local database, sync it on a schedule, and analyze that data over time.

**How it works:**
1. Connect data sources via MCP or API (Stripe, email platforms, analytics)
2. Set up sync schedules (daily, weekly, on-demand)
3. Data flows into a local SQLite database
4. ACE queries the database to surface trends and insights

**Current data sources:**
- FluentCRM: subscriber counts, campaign performance
- ThriveCart/Stripe: revenue, transactions
- Calendar: time allocation patterns
- Gmail: email volume, response patterns

**What you get:**
- Revenue dashboards and growth reports
- Campaign performance tracking
- Time allocation analysis
- Trend detection over weeks and months

The /analytics and /revenue commands query this database directly. The /daily-dashboard generates a visual report combining all sources.

All data stays local. No third-party analytics platform needed.`,
  },
  {
    slug: "agent-sdk",
    title: "Parallel Agents (Agent SDK)",
    category: "Integrations",
    excerpt: "Dispatch specialist agents that work in parallel — research, analysis, content, all at once.",
    content: `The Agent SDK enables ACE to dispatch specialist agents that work in parallel. Instead of one AI handling tasks sequentially, ACE can send out a team: one scanning for market signals, one pulling email highlights, one checking the calendar — all at once, results synthesized into one briefing.

**Currently live:**
- /culturescan: 13 parallel agents scanning 7 subreddits and 6 search queries simultaneously
- /build-vault: Multiple agents compile identity files, domain structures, and integration configs in parallel

**How it works:**
Each agent gets a specific task, works independently, and returns its results. The orchestrator synthesizes everything into a coherent output. This means tasks that would take 30 minutes sequentially complete in 5 minutes.

**Coming next:**
- /intel: Parallel newsletter intelligence extraction
- /outreach: Parallel prospect research and draft generation
- /signal: Parallel content generation across platforms`,
  },

  // ── Capabilities ──
  {
    slug: "brand-intelligence",
    title: "Brand Intelligence",
    category: "Capabilities",
    excerpt: "Maintain multiple brand identities with separate voice, messaging, and strategy.",
    content: `Brand intelligence is one of ACE's genuine strengths. Maintaining multiple brand identities with separate voice, messaging, and strategy — all organized and queryable.

**What ACE does:**
- Synthesize what makes a brand distinct
- Articulate positioning and differentiation
- Draft messaging across every format (social, email, web, press)
- Maintain brand voice consistency across all outputs
- Identify differentiation gaps
- Generate full brand architecture documents

**How it works:**
Each brand lives in its own domain folder within your vault. Brand guidelines, voice profiles, messaging pillars, and content history accumulate over time. When you ask ACE to write for a specific brand, it reads that brand's full context.

The more you use it, the more precise it gets. Six months of brand work doesn't just mean six months of output — it means six months of brand calibration.`,
  },
  {
    slug: "content-generation",
    title: "Content Generation",
    category: "Capabilities",
    excerpt: "Long-form articles, newsletters, social posts — written in your voice, not AI slop.",
    content: `ACE generates content in your voice — not generic AI output. The difference is your voice profile.

**What your voice profile captures:**
- Your natural cadence and sentence structure
- Words and phrases you actually use
- Tone across different contexts (coaching vs teaching vs casual)
- What you'd never say

**Content types:**
- Long-form articles and blog posts
- Email newsletters and sequences
- Social media posts (Threads, LinkedIn, Instagram)
- Press materials and PR copy
- Client-facing documents and proposals

**The /content command** tracks your content lifecycle: what's in draft, what's scheduled, what's published. The /signal command generates platform-specific content from your weekly activity.

The key: ACE doesn't generate content from a prompt. It generates content from your accumulated context — your patterns, your decisions, your brand intelligence, your voice. That's why it sounds like you.`,
  },
  {
    slug: "financial-modeling",
    title: "Strategic Synthesis & Financial Modeling",
    category: "Capabilities",
    excerpt: "Viability modeling, scenario analysis, positioning work — from your actual data.",
    content: `Give ACE a proposed business structure, revenue assumptions, and cost inputs — it builds out Year 1/2/3 scenarios, sensitivity analysis, risk identification, and implementation sequencing.

**Capabilities:**
- Revenue projections and financial modeling
- Scenario analysis (best/base/worst case)
- Unit economics and pricing strategy
- Competitive positioning analysis
- Market sizing and opportunity mapping
- Implementation sequencing and milestone planning

**Output formats:**
- Plain language strategic documents
- Structured tables and spreadsheets
- Formatted PDF reports
- Presentation-ready slides

The strength is synthesis: ACE reads your actual business context (from your vault), combines it with research, and produces analysis that's calibrated to your specific situation — not generic templates.`,
  },
  {
    slug: "coding-apps",
    title: "Coding & App Development",
    category: "Capabilities",
    excerpt: "ACE writes code, builds applications, creates tools, and automates workflows.",
    content: `ACE writes code, builds applications, creates tools, and automates workflows. If you need a custom calculator, a lead scoring tool, or an internal app — ACE builds it.

**What ACE builds:**
- Full websites (HTML, CSS, JavaScript, React, Next.js)
- Desktop applications (Electron)
- CLI tools and automation scripts
- Data pipelines and API integrations
- Custom MCP servers for new tool connections
- PDFs, spreadsheets, presentations

**Real examples from the ACE ecosystem:**
- ACE Desktop app itself (Electron + Node.js)
- ace-analytics MCP server (Python)
- Threads CLI tool
- Telegram bot
- Revenue dashboards
- Client session synthesis PDFs

You maintain creative control and can iterate in real time. No developers needed for most builds.`,
  },
  {
    slug: "communication",
    title: "Communication Management",
    category: "Capabilities",
    excerpt: "Pull emails, messages, and threads into a centralized view. Draft replies. Batch process.",
    content: `ACE pulls emails, messages, and threads from connected channels into a centralized view. Draft replies, track conversations, batch process communications.

**Email processing (/emails):**
- Summarizes unread emails
- Categorizes by urgency and type
- Recommends actions (reply, defer, archive)
- Drafts replies in your voice for review

**Follow-up tracking (/followup):**
- Tracks commitments you've made to people
- Surfaces due and overdue follow-ups
- Integrated into /start and /brief daily briefings

**Handoff generation:**
- Briefings for team members
- Task specifications from your context
- Outreach scripts and sequences
- Meeting prep documents

All communication goes through you. ACE drafts, you review and send. Nothing goes out without your explicit approval.`,
  },

  // ── FAQ ──
  {
    slug: "how-evolves",
    title: "How Does ACE Evolve?",
    category: "FAQ",
    excerpt: "Core updates via GitHub. You choose which upgrades to integrate.",
    content: `ACE is not static. Nikhil maintains the core ACE system and continuously develops new capabilities.

**How updates work:**
1. New skills and improvements are developed and tested in the core repository
2. When proven, updates are pushed to the core repo on GitHub
3. You run /sync-core in your vault to pull updates
4. Clean updates auto-apply; conflicts get AI-assisted merge
5. Your personal files (identity, domains, journal) are never touched

**What gets updated:**
- Skills (new commands, improved existing ones)
- System architecture (routing, schemas, state engine)
- Integration pipelines
- Documentation

**What's never touched:**
- Your identity core (user.md, voice-profile.md, values, edges)
- Your domains and projects
- Your journal and patterns
- Your custom skills

Think of your ACE as a satellite connected to the source. You receive improvements as they're proven, while keeping full control of your own system.`,
  },
  {
    slug: "what-if-cancel",
    title: "What If I Cancel?",
    category: "FAQ",
    excerpt: "Your vault is yours forever. Plain text. Git-backed. No lock-in.",
    content: `Your vault is yours forever. Even if you cancel your ACE membership:

- Your vault keeps working as an Obsidian vault
- All your files remain — identity, domains, journal, everything
- Git history is preserved
- Skills continue to function with Claude
- No data is deleted or locked

What you lose access to:
- Future skill updates via /sync-core
- Video library and knowledge base on the website
- Community discussions and events
- 1:1 coaching calls
- Group sessions

The sovereign base — your vault, your identity, your patterns — belongs to you. That's not a marketing claim. It's the architecture.`,
  },
  {
    slug: "team-access",
    title: "Can My Team Use ACE?",
    category: "FAQ",
    excerpt: "ACE is single-user. It generates team outputs, but only you operate the system.",
    content: `ACE is built around you as a single user. Your team members can't log in to your system.

What ACE does instead:
- Generates handoff documents, task specs, and briefings for your team
- Drafts outreach scripts and email sequences
- Creates client-facing proposals and deliverables
- Produces meeting notes and action items

You operate the system. Your team receives the outputs through your normal channels (email, Slack, shared docs).

**For practitioners:** The Practitioner tier includes tools for deploying ACE to your own clients. Each client gets their own system — connected to the core for updates, but fully independent.`,
  },
  {
    slug: "ai-not-replacement",
    title: "Is ACE Replacing Me?",
    category: "FAQ",
    excerpt: "ACE is a coaching and intelligence layer. It supports your judgment, never overrides it.",
    content: `ACE is designed around a core principle: sovereignty preserved. The system supports and coaches; it never overrides human judgment.

**What ACE does:**
- Surfaces information you might miss
- Asks questions that sharpen your thinking
- Drafts outputs for your review
- Tracks patterns you might not see
- Coaches through blocks and edges

**What ACE doesn't do:**
- Make decisions for you
- Send messages without your approval
- Override your stated values or priorities
- Push you when you need rest
- Pretend to be you

The coaching layer (/coach, /edge, /regulate) is reflective, not directive. It asks potent questions. It doesn't give answers.

When ACE detects you're dysregulated, it shifts to regulation before pushing insight. When your identity files say one thing and your actions say another, it surfaces the gap — it doesn't resolve it for you.

ACE is intelligence infrastructure. You're the operator.`,
  },
];

export function getArticlesByCategory(category: string): KBArticle[] {
  return KB_ARTICLES.filter((a) => a.category === category);
}

export function getArticleBySlug(slug: string): KBArticle | undefined {
  return KB_ARTICLES.find((a) => a.slug === slug);
}

export function searchArticles(query: string): KBArticle[] {
  const q = query.toLowerCase();
  return KB_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q)
  );
}
