# Project Context
Tod-webbutveckling is an 11ty-based course site for frontend web development in Swedish upper secondary education.
The learning content is organized as themes, topics, and parts, with exercises, questions, and projects.
This repository is one subject-specific instance of the broader TOD template approach.
Core stack: Eleventy (11ty), Sass, Rollup, markdown-it, and Eleventy plugins for navigation and syntax highlighting.
Primary workflows: `npm start` for local development/watch and `npm run build` for production builds.
Key source areas: `src/content/` for course material, `src/_includes/` for layouts/components, and `config/` for Eleventy setup.
Output and deployment are optimized for static hosting, with Netlify configuration included in the repo.
When changing code, keep updates aligned with the existing workflow and conventions documented in `.claude/claude.md`.
