# Project Context

## Author

- Name: Jeong Ayoung
- Career: Joined Sparrow in 2022, responsible for web frontend development and design system construction

## About This Portfolio

A portfolio site that visually showcases monorepo migration, refactoring, and full-cycle project development experiences.
Built with Next.js + Tailwind + Pretendard font. Deployed on Vercel.

## Portfolio Pages

1. `/` — Landing page
2. `/monorepo` — Monorepo migration portfolio
3. `/integrated` — Integrated Management System portfolio (to be added)

## Refactoring Portfolio Summary

- Refactored a task detail screen in an internal service at a security company
- Key tasks:
  1. Separated UI logic and responsibilities in TabController (decoupled business logic ↔ UI logic)
  2. Centralized socket.io real-time communication logic into the parent component (TaskDetailSlideOut)
  3. Introduced useEffectEvent to eliminate unnecessary socket reconnections
  4. Minimized rendering load via useRef + debounce data batching
  5. Removed unnecessary API calls using useQuery's enabled option
- Results: Socket reconnections reduced from n → 1, unnecessary API calls on tab switching eliminated

## Integrated Management System Portfolio Summary

- Period: 2025.05 ~ 2025.11
- Team: 3 frontend developers, 1 backend developer, 1 planner/designer (internal TF)
- Role: Participated in planning, wireframing, and full development
- Page route: `/integrated`
- Core features: Checker / Rule Pack / Reference CRUD, AI tag extraction, multi-tag matching algorithm, automated security reference coverage rate calculation
- AI: On-premise Llama (Ollama), JSON Mode, matching threshold of 3~6 tags
- Tech stack: React, Next.js, shadcn/ui, Tailwind, Storybook, Sentry
- Page structure: Hero → Overview → Background → Process → AI → Result → TechStack

## Design Guidelines

- Follow the same CSS structure, design tokens, and component styles as the monorepo portfolio
- Before/After code comparisons should be visually clear and easy to read
- All new pages must match the existing visual style and spacing system
