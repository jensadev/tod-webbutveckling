## Plan: Rebuild as Nuxt 3 + Nuxt Content (Vue-first, retrieval-practice LMS)

Full rebuild from 11ty+custom-DOM to Nuxt 3 + Nuxt Content + static generation.
Pedagogy model: retrieval practice (active recall, spaced repetition framing, question-first flow).
Progress: localStorage primary, optional GitHub Gist sync via one Netlify OAuth serverless function, JSON export always available. No mandatory database.

---

## Phase 1 — Foundation (new repo, parallel tracks)

1. Scaffold new Nuxt 3 project:
   - nuxt-content v3 (markdown parsing, query API, typed frontmatter)
   - @nuxtjs/color-mode, pinia, vueuse
   - nuxt generate for fully static output
   - Netlify adapter / netlify.toml

2. Port content model (parallel with 1):
   - Copy src/content/** into new repo as-is (markdown stays canonical)
   - Define typed frontmatter schema (zod or nuxt-content parseContent) for theme/area/part
   - Replace shortcode blocks ({% questions %}, {% base %}, {% advanced %}) with MDC components (::questions, ::base, ::advanced)
   - Output: typed content contract available at build time and query time

3. CI schema validation:
   - Build-step script queries all content, validates required frontmatter fields and question block shape, fails loudly on violation

---

## Phase 2 — Routing and Layout

4. Route structure:
   - /[theme]/                    theme summary page
   - /[theme]/[area]/             area summary page
   - /[theme]/[area]/[part]/      part learning page
   - nuxt-content queryCollection() drives all nav data; no manual collections config

5. Shared components:
   - AppNav, Breadcrumb, PrevNext, Footer as Vue SFCs
   - ContentPart renderer for MDC blocks
   - No manual DOM queries anywhere

---

## Part file MDC structure (canonical design)

Each part markdown has these top-level MDC blocks (in order):
- ::intro — one short paragraph + "Tänk på" bullets. Fits one screen.
- ::instructions — short prose, code blocks, images, tables, nested ::try callouts. Content discipline: max ~one screen.
- ::questions — contains one or more :::question{id level} blocks with #question, #hint, #answer named slots.
- ::extra — optional supplemental content/links.

:::question named slots:
- #question — always visible
- #hint — revealed on first user click ("Visa ledtråd")

Question identity policy:
- Question progress is keyed by a stable source id stored in the markdown itself, not by path, title, or array index.
- Each :::question block gets an `id` attribute persisted in source, e.g. `:::question{id="q_01HZX3..." level="base"}`.
- ID format: ULID or UUIDv7 preferred over ad-hoc random strings because they are compact, sortable, and collision-safe.
- Missing ids are created once by an authoring tool/script and written back into the markdown file; ids are never regenerated during normal builds.
- Build/CI validation fails on missing ids, duplicate ids, or malformed ids.
- File/path/title changes do not affect progress because the stored progress key is the persisted question id.
- Copying a question requires generating a new id; editing question text keeps the same id.

Authoring workflow for stable question ids:
- Add an npm command such as `npm run content:ids` that scans all part markdown files for `:::question` blocks missing `id` and inserts a new ULID into the source.
- Add `npm run content:validate` that checks for missing ids, duplicate ids, malformed ids, and invalid question slot structure.
- Wire build to run validation always, and optionally run id generation before validation in local development/CI preview.
- Recommended script chain:
  - `content:ids` -> mutate source only when ids are missing
  - `content:validate` -> fail on schema/id issues
  - `build` -> assumes source is already normalized or runs `content:ids && content:validate` first
- Teacher experience: they write markdown, save, and the repo tooling fills ids automatically during local dev or via a pre-commit/pre-build hook.
- Safer CI policy: production CI should fail on missing ids instead of silently mutating committed content, to avoid surprise diffs.
- Recommended local workflow: `dev` runs `content:ids` before starting Nuxt; `build` runs `content:validate`; optional Husky/lint-staged can run `content:ids` on staged markdown files.

- Optional metadata for migration/debugging: store `sourcePath` and `legacyHash` in generated JSON, but never use them as primary identity.

- #answer — revealed on second click ("Visa svar"), then student self-marks ✓/✗

QuestionCard state machine: idle → hint_shown → answer_shown → marked(correct|incorrect)

No free-text input. Retrieval practice works on the attempt-before-reveal principle; typing is not required.

::try nested inside ::instructions — visually distinct "Prova!" callout for small hands-on tasks (open browser, inspect devtools, etc). No in-page editor.

16/9 screen design principle: each block component is styled to fill roughly one landscape viewport. Instructions overflow = signal to shorten content, not a hard cap.

---

## Phase 3 — Retrieval Practice UX

6. Question engine:
   - Questions authored in MDC :::question{id level} with #question, #hint, #answer slots — no HTML scraping
   - Question id: deterministic from theme+area+part+q-index (stable even if title text changes)
   - QuestionCard component: idle → hint_shown → answer_shown → marked state machine
   - Progress model: {completed, correct, attempts, lastSeen, hintsUsed} per question id
   - Question-before-content mode optional per part (frontmatter flag: questionsFirst: true)
   - Review route /review: surfaces due questions with SM2-style lightweight interval (~50 lines, no library)

7. Progress store (Pinia):
   - Replaces Storage.js entirely
   - vueuse/useLocalStorage for auto-persistence
   - Schema versioned: {version, subject, progress: {[questionId]: {completed, correct, attempts, lastSeen}}}
   - JSON export: one button writes downloadable .json
   - JSON import: file picker restores progress

---

## Phase 4 — GitHub Gist Sync (optional, additive)

8. Netlify serverless function /api/github/auth:
   - Handles OAuth code -> token exchange only (keeps client_secret off client)
   - Stateless, no DB

9. GistSync composable:
   - After auth, reads/writes a Gist named tod-[subject]-progress.json in user's own GitHub account
   - Merge: local wins on conflict (last-write-wins by timestamp)
   - Always opt-in; user can disconnect any time
   - Login badge shows GitHub avatar when connected

---

## Phase 5 — Remaining Features (all parallel)

10. Search: nuxt-content built-in fuzzy search (replaces elasticlunr + static index; indexes body + questions)
11. Notes: NotesPad Vue component per part, Pinia + vueuse, debounced auto-save
12. Continue + offline: ContinueBanner from Pinia last-visited; @vite-pwa/nuxt for service worker
13. giscus: @giscus/vue per part layout for page discussion only; no role in progress tracking

---

## Phase 6 — Launch

14. Content parity: script compares question counts per module between old tod.json and new content contract
15. URL compatibility: same slug structure (theme/area/part) preserves links and SEO
16. Acceptance checklist:
    - All modules render, questions are interactive, progress persists across hard reload
    - Gist sync works end-to-end in Netlify preview
    - Review mode surfaces due questions after completing a part

---

## Files to retire

- src/transforms/parse-transform.js — replaced by nuxt-content MDC parsing
- src/js/Storage.js — replaced by Pinia + vueuse
- src/js/dom.js — replaced by Vue reactivity
- config/shortcodes/tod.js — semantics ported to MDC component names
- src/search-index.json.njk — retired; nuxt-content handles search
- netlify.toml — keep structure, update build command

## Content to preserve verbatim

- src/content/** (markdown files move as-is)
- src/assets/, src/fonts/

---

## Decisions confirmed

- Stack: Nuxt 3 + Nuxt Content v3, Pinia, vueuse, nuxt generate -> Netlify static
- Svelte: excluded
- Progress: localStorage primary + GitHub Gist optional + JSON export/import
- giscus: page discussion/comments only
- Pedagogy: retrieval practice (question-before-content option, SM2-style /review route)
- No mandatory database
