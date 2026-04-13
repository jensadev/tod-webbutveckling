## Plan: Rebuild as Nuxt 3 + Nuxt Content (Vue-first, retrieval-practice LMS)

Full rebuild from 11ty+custom-DOM to Nuxt 3 + Nuxt Content + static generation.
Pedagogy model: retrieval practice (active recall, spaced repetition, question-first flow).
Progress: localStorage primary, optional GitHub Gist sync via one Netlify OAuth function, JSON export always available. No mandatory database. No backwards compatibility.

---

## Phase 1 — Foundation

0. Create new repository (separate from tod-webbutveckling):
   - New repo name: tod (or tod-v2); no history carried over
   - Deploy preview from new repo; old repo stays live until launch

1. Scaffold new Nuxt 3 project in the new repo:
   - @nuxt/content v3
   - @nuxt/image
   - @nuxtjs/color-mode
   - pinia + @vueuse/core
   - @vite-pwa/nuxt
   - nuxt generate → Netlify static

2. Content conversion (not verbatim — requires rewriting):
   - All part markdown files must be converted from 11ty shortcode syntax to MDC block syntax
   - Shortcode-to-MDC conversion script handles the mechanical transformation:
     - {% instructions %}...{% endinstructions %} → ::instructions\n...\n::
     - {% questions %}...{% endquestions %} → ::questions\n...\n::
     - {% base %}...{% endbase %} → (question blocks inside ::questions)
     - {% advanced %}...{% endadvanced %} → (question blocks with level="advanced")
     - {% extra %}...{% endextra %} → ::extra\n...\n::
     - {% hint %}...{% endhint %} → ::hint\n...\n::
   - After mechanical conversion, each part file must be reviewed and tidied manually
   - content:ids script assigns ULIDs to all :::question blocks after conversion
   - src/assets/, src/fonts/ → copy verbatim

3. CI: content:validate script — fails on missing/duplicate question ids, bad frontmatter, broken MDC slots

---

## Phase 2 — CSS and Theme System (no Sass, no framework)

- Plain CSS custom properties only, no preprocessor
- Author picks one primary hue in nuxt.config or site config
- Small build-time token generator derives full palette:
  - 5-step lightness scale (bg, surface, border, text, accent)
  - Semantic aliases: --color-bg, --color-surface, --color-text, --color-accent, --color-accent-subtle
  - Dark mode: @media (prefers-color-scheme: dark) + @nuxtjs/color-mode class toggle
- Tokens in assets/tokens.css, imported globally

CSS layers:
- Utilities: .flow (lobotomized owl), .region, .prose, .stack, .cluster, .visually-hidden
- Components: scoped styles inside Vue SFCs
- Block overrides: per-page via CSS cascade layers

Images: @nuxt/image — responsive srcset, lazy loading, static optimisation out of the box

---

## Phase 3 — Part File MDC Structure

Each part file in order:

::intro          — one paragraph + "Tänk på" bullets, one screen
::instructions   — short prose, code, images, tables, nested ::try callouts, one screen max
::questions      — one or more :::question{id="ULID" level="base|advanced"} blocks
::extra          — optional supplemental links (omit if unused)

:::question named slots:
  #question   — always visible
  #hint       — revealed on first click ("Visa ledtråd")
  #answer     — revealed on second click ("Visa svar") → student self-marks ✓/✗

QuestionCard state machine: idle → hint_shown → answer_shown → marked(correct|incorrect)
No free-text input. Attempt-before-reveal is the pedagogical mechanism.

::try (nested inside ::instructions) — "Prova!" callout for small hands-on tasks

16/9 design principle: each block fills ~one landscape viewport. Overflow = content is too long.

---

## Phase 4 — Question Identity and Authoring Workflow

Each :::question carries a stable ULID in source:
  :::question{id="01HZX3KQY7M8V2N4A6B9C1D2E3" level="base"}

Rules:
- Generated once by tooling, never regenerated at build
- Survives renames, rewrites, moves, reordering
- Copy of a question block must get a new id
- Edit of question text keeps the same id
- Duplicated ids are a hard build failure

npm commands:
- content:ids     — finds :::question blocks missing id, inserts ULID, writes back to markdown
- content:validate — fails on missing ids, duplicate ids, broken slot structure
- dev             — runs content:ids then starts Nuxt (invisible to teachers)
- build           — runs content:validate (fails loudly, no silent mutation in CI)
- Optional: Husky pre-commit runs content:ids on staged .md files

---

## Phase 5 — Retrieval Practice UX

Question engine:
- MDC parses questions at build time into typed {id, level, question, hint, answer}
- QuestionCard SFC: idle → hint_shown → answer_shown → marked state machine

Progress store (Pinia + vueuse/useLocalStorage):
- Schema versioned: {version, subject, progress: {[questionId]: {correct, attempts, lastSeen, hintsUsed}}}
- JSON export: one-click download
- JSON import: file picker, restores on any device

Review mode:
- /review route — surfaces due questions via lightweight SM2 interval (~50 lines, no library)

Optional per-part flag in frontmatter:
- questionsFirst: true — shows questions before instructions (test-then-learn)

---

## Phase 6 — GitHub Gist Sync (optional, additive)

Netlify function /api/github/auth:
- OAuth code → token exchange only; client_secret never leaves server
- Stateless, no database

GistSync composable:
- Reads/writes Gist named tod-[subject]-progress.json in student's own GitHub account
- Merge: local timestamp wins
- Always opt-in; GitHub avatar shown in nav when connected

---

## Phase 7 — Remaining Features (parallel)

- Search: @nuxt/content built-in full-text, indexes body + question text
- Notes: NotesPad SFC per part, Pinia + vueuse, 500ms debounced auto-save
- Continue banner: last-visited part from Pinia, no DOM parsing
- Offline/PWA: @vite-pwa/nuxt
- giscus: @giscus/vue per part for discussion only, no role in progress
- Consent banner (GDPR):
  - Required because localStorage is used for progress/notes (ePrivacy + GDPR)
  - Simple banner on first visit: accept/decline
  - Accept: enables localStorage writes; sets a consent flag in sessionStorage so the banner does not re-appear mid-session
  - Decline: site is still fully usable but no progress is persisted
  - No analytics (removed); consent banner exists solely for localStorage compliance
  - Consent can be revoked from a settings/footer link at any time

---

## Phase 8 — Launch

- Content parity: question and part count check vs old tod.json
- URL compat: same slug structure preserves links and SEO
- Acceptance checklist:
  - All parts render; questions are interactive; progress survives hard reload
  - Review mode surfaces due questions after completing a part
  - Gist sync works in Netlify preview
  - Images: srcset + lazy loading confirmed in production build
  - Light/dark token generation works correctly

---

## Routes

/                         home
/[theme]/                 theme summary
/[theme]/[area]/          area summary
/[theme]/[area]/[part]/   part learning page
/review                   spaced repetition review
/search                   full-text search

All driven by queryCollection() — no manual nav config.

---

## Key Dependencies

@nuxt/content v3, @nuxt/image, @nuxtjs/color-mode, pinia, @vueuse/core,
@vite-pwa/nuxt, @giscus/vue, ulid (authoring script only, zero runtime)

---

## Decisions confirmed

- Stack: Nuxt 3, Nuxt Content v3, Pinia, vueuse, nuxt generate → Netlify
- New separate repository; old repo stays live until launch
- No Sass: plain CSS custom properties + utility classes + scoped SFC styles
- Theme: single hue config → full palette via CSS custom properties
- Images: @nuxt/image
- No backwards compatibility, no migration shim
- Content: must be converted from 11ty shortcodes to MDC; conversion script + manual review per file
- Progress: localStorage + optional GitHub Gist + JSON export/import
- Consent banner: required for GDPR/ePrivacy (localStorage); no analytics
- giscus: discussion only
- Pedagogy: retrieval practice, optional questionsFirst mode, SM2 /review route
- No mandatory database
