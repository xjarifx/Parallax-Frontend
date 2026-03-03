## Parallax Firewatch Landing Page

A React + TypeScript recreation of the Firewatch-style promotional landing page with layered parallax motion, cinematic entrance animations, and responsive content sections.

## Demo Highlights

- 7 layered parallax scene images with depth-based movement.
- Smooth mouse-tracking effect powered by a custom React hook.
- Entrance animations for logo, scene layers, and content cover.
- Reusable stylized CTA button component for platform and resource links.
- Embedded trailer and responsive media grid.
- Tailwind CSS v4 theme tokens for project color system.

## Tech Stack

- React 19
- TypeScript 5
- Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- ESLint 9 + TypeScript ESLint
- Prettier + `prettier-plugin-tailwindcss`

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm 10+ (or compatible)

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Then open the local URL shown in your terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` — start Vite dev server.
- `npm run build` — run TypeScript project build and generate production bundle.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint across the project.

## Project Structure

```text
src/
	App.tsx                     # Root composition (parallax scene + cover content)
	index.css                   # Tailwind import, theme tokens, keyframe animations
	hooks/
		useParallaxMouse.ts       # Mouse tracking + smoothing for --mouse-x CSS variable
	components/
		ParallaxScene.tsx         # Layer stack and logo depth composition
		CoverContent.tsx          # Main page content, trailer, text blocks, CTAs, gallery
		SiteButton.tsx            # Reusable clipped button with optional icon
		styles.ts                 # Shared style constants for layer images
	assets/
		brand_logo/
		game_preview/
		layers/
		platform_icons/
```

## How Parallax Works

`useParallaxMouse` listens to `mousemove`, converts pointer position to a normalized horizontal offset, and updates the CSS variable `--mouse-x` using `requestAnimationFrame` interpolation.

Layer and logo transforms consume `--mouse-x` with per-layer multipliers to create depth.

## Accessibility Notes

- Decorative images are marked with `alt=""` and `aria-hidden="true"`.
- Motion-reduction utility classes are included for key animated elements.
- Content sections include semantic labels for assistive technologies.

## Reference

The `referance/` directory contains source inspiration assets and static files used during recreation.

## License

This project is currently unlicensed for public redistribution. Add a license file if you plan to share or open-source it.
