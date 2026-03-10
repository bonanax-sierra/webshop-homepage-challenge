## D1 Skincare Web Shop Homepage

Pixel‑perfect, responsive front‑end implementation of the D1 Skincare web shop homepage based on the provided Sketch design.

### Tech Stack

- **HTML5** with semantic structure
- **SCSS** (modular partials compiled into `css/main.css`)
- **Foundation 6** (grid + top bar navigation, via CDN)
- **Flickity** (product carousel, via CDN)
- **Vanilla JavaScript** (`main.js`, `flickity-init.js`)

---

### Project Structure

- **`index.html`** – Main page markup (announcement bar, header/top bar, hero, products carousel, footer).
- **`assets/`**
  - `images/` – Example product and hero images referenced from the Sketch:
    - `cleanser.png`
    - `mositurizer.png`
    - `stick.png`
    - `product1.jpg` … `product5.jpg` (example featured products)
- **`scss/`**
  - `_variables.scss` – Design tokens (colors, typography, spacing, breakpoints, z‑index).
  - `_mixins.scss` – Layout utilities (`flex-center`, `flex-between`, `container`, `respond-to` media mixin).
  - `_base.scss` – Global resets, typography, base elements, announcement bar, overlay.
  - `_header.scss` – Sticky header, logo, actions, mobile off‑canvas menu.
  - `_navigation.scss` – Foundation top bar/menu tweaks.
  - `_hero.scss` – Hero section, testimonial, product image cluster.
  - `_products.scss` – Featured products carousel + hover states.
  - `_footer.scss` – Multi‑column footer layout & styles.
  - `_responsive.scss` – Extra breakpoint‑specific layout tweaks.
  - `main.scss` – Root SCSS file that imports all partials.
- **`css/`**
  - `main.css` – Compiled CSS from `scss/main.scss`.
  - `main.css.map` – Source map (optional for debugging).
- **`js/`**
  - `main.js` – UI behaviors: sticky header shadow, mobile off‑canvas menu, Foundation init.
  - `flickity-init.js` – Flickity product carousel initialization (autoplay + dots).

---

### Installation & Running Locally

1. **Clone or copy the project** into a local folder.
2. Ensure the directory structure above is preserved (especially `scss/`, `css/`, `js/`, and `assets/images/`).
3. Open `index.html` directly in a browser, or serve via a simple static server (recommended to avoid CORS quirks).

Example using **Node** (optional):

```bash
npm install -g serve
serve .
```

Then open the URL that `serve` prints (usually `http://localhost:3000`).

---

### Compiling SCSS

`index.html` expects a compiled stylesheet at `css/main.css`.

Using the official Sass CLI:

```bash
npm install -g sass
sass scss/main.scss css/main.css --watch
```

This watches the SCSS directory and recompiles on change.

---

### Breakpoints & Responsiveness

Custom SCSS breakpoints (aligned with the brief):

- **Mobile:** `0 – 640px`  → `$bp-small`
- **Tablet:** `641 – 1024px` → `$bp-medium`
- **Desktop:** `1025px+` → values above `$bp-medium`

Usage is encapsulated in the `respond-to` mixin:

```scss
@include respond-to('small')  { /* mobile styles */ }
@include respond-to('medium') { /* tablet styles */ }
@include respond-to('large')  { /* desktop styles */ }
```

Foundation’s own grid classes (via CDN) are used mainly for the top bar nav semantics, while layout inside sections uses SCSS mixins (`container`, flex utilities) tuned to the Sketch layout.

---

### Grid & Layout Conventions

- Content width is constrained by `$max-width` (see `_variables.scss`) and the `container` mixin.
- The header uses **Foundation Top Bar** styles via the `top-bar`, `top-bar-title`, `top-bar-right`, and `menu dropdown` classes, with additional custom styling in `_header.scss` and `_navigation.scss`.
- The hero and products sections are built with flexbox and Flickity’s layout, optimized to match the Sketch composition.

---

### Accessibility & UX Enhancements

- **Sticky header** with subtle shadow on scroll for orientation.
- **Accessible focus states** for links and inputs using `:focus-visible`.
- **Smooth hover transitions** on buttons, product cards, and footer links.
- **Mobile navigation** via an off‑canvas menu and dimmed overlay; closable via ESC key or overlay tap.
- **Flickity carousel**:
  - Autoplay enabled (`autoPlay: 4000`, `wrapAround: true`).
  - Dot navigation and arrow controls.
  - `imagesLoaded` enabled for smoother layout behavior.

