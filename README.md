# D1 Skincare — Webshop Homepage Challenge

A pixel-perfect, responsive implementation of a men's skincare e-commerce homepage.
Built with semantic HTML5, SCSS (modular architecture), Foundation 6, and Flickity.

---

## Live Preview

Open `index.html` directly in your browser — no server required.

---

## Prerequisites

Make sure you have the following installed:

| Tool | Version | Install |
|------|---------|---------|
| Node.js | v18+ | https://nodejs.org |
| npm | v9+ | Comes with Node.js |

Verify your versions:
```bash
node -v
npm -v
```

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/bonanax-sierra/webshop-homepage-challenge
cd webshop-homepage-challenge
```

### 2. Install dependencies
```bash
npm install
```

This installs:
- `sass` — SCSS compiler

### 3. Compile SCSS → CSS
```bash
npx sass scss/main.scss css/main.css --no-source-map
```

### 4. Open the site
Just open `index.html` in Chrome or Safari — no local server needed.

```bash
# macOS
open index.html

# Windows
start index.html
```

---

## Development Workflow

To auto-recompile SCSS on every save, run watch mode:

```bash
npx sass scss/main.scss css/main.css --no-source-map --watch
```

Leave this running in your terminal while you edit any `.scss` file.
Press `Ctrl+C` to stop.

---

## Project Structure

```
webshop-homepage-challenge/
│
├── index.html                  # Main HTML entry point
│
├── css/
│   └── main.css                # Compiled CSS output (do not edit directly)
│
├── scss/                       # SCSS source files (edit these)
│   ├── main.scss               # Entry point — imports all partials
│   ├── _variables.scss         # Colors, fonts, spacing, breakpoints
│   ├── _mixins.scss            # Reusable mixins and breakpoint helpers
│   ├── _base.scss              # Reset, base styles, overlay
│   ├── _header.scss            # Announcement bar + navbar
│   ├── _hero.scss              # Hero section
│   ├── _routine.scss           # Routine section + pill row
│   ├── _how-it-works.scss      # How it works steps
│   ├── _results.scss           # Results section
│   ├── _benefits.scss          # Daily benefits section
│   ├── _get-the-set.scss       # Bundle offer section
│   ├── _ingredients.scss       # Ingredients grid
│   ├── _products.scss          # Perfect formulas + testimonials
│   ├── _fans.scss              # Fans / featured products carousel
│   ├── _footer.scss            # Site footer
│   ├── _navigation.scss        # Off-canvas mobile nav
│   └── _responsive.scss        # All media queries (tablet, mobile, small)
│
├── js/
│   ├── main.js                 # Custom JavaScript (hamburger, interactions)
│   └── flickity-init.js        # Flickity carousel initialization
│
├── assets/
│   ├── images/                 # Product and lifestyle images
│   └── icon/                   # SVG icons (stars, clock, etc.)
│
└── README.md
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup |
| SCSS (modular) | Styling — variables, mixins, partials |
| Foundation 6 | Responsive grid, off-canvas menu |
| Flickity 2 | Product carousels |
| Google Fonts | Barlow Condensed + Inter |
| Vanilla JS | Hamburger menu, interactions |

---

## SCSS Architecture

The SCSS follows a **modular partial architecture**:

- `_variables.scss` — single source of truth for all design tokens (colors, fonts, spacing, breakpoints)
- `_mixins.scss` — reusable patterns: `container()`, `flex-center()`, `display-heading()`, `pill-btn()`, and breakpoint mixins `tablet()`, `mobile()`, `small-mobile()`
- Each section of the page has its own partial file
- All responsive media queries are consolidated in `_responsive.scss`
- `main.scss` is the entry point — it only contains `@use` statements, no raw CSS

---

## Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| Desktop | > 1024px |
| Tablet | ≤ 1024px |
| Mobile | ≤ 768px |
| Small Mobile | ≤ 480px |

---

## Browsers Tested

- Chrome (latest)
- Safari (latest)

---

## Notes for Reviewers

- The compiled `css/main.css` is included in the repo so the site works immediately without running any build step
- SCSS source files in `scss/` are the source of truth — `css/main.css` is build output only
- No backend, no environment variables, no `.env` file needed — this is a fully static site
- All images and assets are sourced from the provided Sketch mockup zip