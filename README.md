# Any Tec 

A production-ready React marketing website for "Any Tec" IT Services.

## Tech Stack
- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Variables (Theme)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Router:** React Router DOM

## Prerequisites
- Node.js (v16+)
- npm or yarn

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 to view the site.

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Features
- **Theming:** Toggable Light/Dark mode with persistence in localStorage.
- **Animations:** Scroll-triggered reveals, rotating visual elements, and smooth interactions.
- **Components:** Modular structure (Buttons, Cards, Reveal wrappers).
- **Forms:** Client-side validation with success feedback toast.
- **Visuals:** Custom SVG/CSS-based "Pixel Mask" and "Circuit" effects (no external images required).

## Design Notes
- **Theme Config:** Colors are defined in `src/index.css` as CSS variables and mapped in `tailwind.config.js`.
- **Primary Color:** Mint Green (`#10b981`).
- **Typography:** Inter (via Google Fonts).
