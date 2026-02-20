# Interview Prep

## Overview
An interview preparation app built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Tech Stack
- **Framework:** Next.js 16 with App Router and React Server Components
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **UI Components:** shadcn/ui (new-york style, Lucide icons, Radix UI primitives)
- **Linting:** ESLint with `eslint-config-next` (core-web-vitals + typescript)

## Project Structure
- `app/` — Next.js App Router pages and layouts
- `components/` — React components (shadcn/ui components live in `components/ui/`)
- `lib/` — Utility functions (e.g. `cn` helper in `lib/utils.ts`)
- `hooks/` — Custom React hooks
- `public/` — Static assets

## Path Aliases
- `@/*` maps to the project root (configured in `tsconfig.json`)

## Commands
- `npm run dev` — Start the dev server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Conventions
- Use the `@/` import alias for all project imports.
- Add shadcn/ui components via the CLI: `npx shadcn@latest add <component>`
- Use `cn()` from `@/lib/utils` to merge Tailwind classes.
- Prefer React Server Components by default; add `"use client"` only when client interactivity is needed.
