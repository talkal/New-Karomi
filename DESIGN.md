# Design

## Theme

**Strategy:** Committed — warm espresso/bronze/cream palette carries 40–60% of marketing surfaces. Dark mode available via `[data-theme="dark"]` using the same warm undertones (no matte black defaults).

**Scene:** A senior dentist opens the site on a 27-inch monitor in a well-lit practice office between patients. The interface should feel like walking into a premium atelier — warm light, precise craftsmanship, confidence without arrogance.

**Light mode is primary.** The cream-and-espresso palette communicates the boutique aesthetic. Dark mode is a warm inversion, not a clinical reversal.

## Color

All values in OKLCH. Hex is banned. Pure `#000` / `#fff` are banned — every neutral is tinted toward hue 60 (amber/warm gold).

### Primitive tokens

| Name | OKLCH | Label |
|------|-------|-------|
| `--brand-900` | `oklch(0.24 0.02 60)` | Deep Espresso |
| `--brand-700` | `oklch(0.42 0.02 60)` | Charcoal Muted |
| `--brand-500` | `oklch(0.59 0.08 60)` | Warm Bronze |
| `--brand-300` | `oklch(0.84 0.015 60)` | Taupe Grey |
| `--brand-100` | `oklch(0.95 0.01 60)` | Parchment |
| `--brand-50` | `oklch(0.98 0.005 60)` | Artisan Cream |
| `--success` | `oklch(0.44 0.08 150)` | |
| `--warning` | `oklch(0.61 0.15 60)` | |
| `--error` | `oklch(0.38 0.15 25)` | |
| `--info` | `oklch(0.31 0.08 260)` | |

### Semantic tokens

| Token | Light | Dark |
|-------|-------|------|
| `--surface-bg` | `var(--brand-50)` | `var(--brand-900)` |
| `--surface-alt` | `var(--brand-100)` | `color-mix(in oklch, var(--brand-900), var(--brand-50) 10%)` |
| `--text-primary` | `var(--brand-900)` | `var(--brand-50)` |
| `--text-secondary` | `var(--brand-700)` | `var(--brand-300)` |
| `--action-primary` | `var(--brand-500)` | `var(--brand-500)` |
| `--action-on-primary` | `var(--brand-50)` | `var(--brand-50)` |
| `--border-subtle` | `var(--brand-300)` | `var(--brand-700)` |

### Color strategy

**Marketing (brand register):** Committed. Espresso (`--brand-900`) and Artisan Cream (`--brand-50`) as dominant surface pair. Bronze (`--brand-500`) as the single accent — buttons, highlights, active states. Max 3–4 color roles on any screen.

**Portal (product register, future):** Restrained. Tinted neutrals + bronze accent ≤10%.

## Typography

**Heading font:** Playfair Display, serif — communicates legacy, craftsmanship, and premium positioning. Used for Hero, H1, H2. Letter-spacing ≤ −0.04em. `text-wrap: balance`.

**UI font:** Inter, sans-serif — calm, precise, highly readable. Used for H3, body, labels, UI copy. Never uppercase for body copy. Avoid uppercase except for acronyms (CDL, DAMAS, RTL).

### Type scale (fluid, CSS `clamp()`)

| Role | Formula | Use |
|------|---------|-----|
| Hero | `clamp(2.5rem, 5vw, 4rem)` | Cinematic headers |
| H1 | `clamp(2rem, 4vw, 3rem)` | Page titles |
| H2 | `clamp(1.5rem, 3vw, 2.5rem)` | Section headers |
| H3 | `clamp(1.25rem, 2vw, 1.75rem)` | Card titles |
| Body | `clamp(1rem, 1.5vw, 1.125rem)` | Readable blocks |
| Small | `clamp(0.875rem, 1vw + 0.5rem, 1rem)` | Secondary UI |
| Micro | `clamp(0.75rem, 0.75vw + 0.5rem, 0.875rem)` | Tags, metadata |

Line length cap: 65–75ch for body text. Hierarchy via scale + weight contrast (≥1.25 ratio between steps).

## Spacing

8px baseline grid. `clamp()`-based fluid spacing.

| Token | Value | Notes |
|-------|-------|-------|
| `--space-xs` | `clamp(0.25rem, 0.5vw, 0.5rem)` | |
| `--space-sm` | `clamp(0.5rem, 1vw, 1rem)` | |
| `--space-md` | `clamp(1rem, 2vw, 1.5rem)` | Max for portal |
| `--space-lg` | `clamp(1.5rem, 3vw, 3rem)` | |
| `--space-xl` | `clamp(3rem, 5vw, 5rem)` | |
| `--space-2xl` | `clamp(5rem, 8vw, 8rem)` | Marketing only |

**Breakpoints:** sm 640px / md 768px / lg 1024px / xl 1280px

**Layout:** Flexbox for 1D, Grid for 2D. Marketing: editorial asymmetric layouts, generous whitespace. Portal: strict 12-column grid, predictable data layout.

## Motion

Animate `transform` and `opacity` only — no layout properties. Reduce to 0ms when `prefers-reduced-motion` is active.

| Token | Value |
|-------|-------|
| `--ease-premium-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--ease-spring` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` |
| `--duration-fast` | `150ms` |
| `--duration-base` | `300ms` |
| `--duration-slow` | `600ms` |

No bounce, no elastic easing. No `--ease-spring` on entrance animations — use `--ease-premium-in-out` for UI. Reserve spring for deliberate tactile moments only.

## Components

### Buttons

- **Primary:** Background `var(--action-primary)`, text `var(--action-on-primary)`. Sharp corners or 2px radius max. `transform: translateY(-2px)` on hover via `--ease-premium-in-out`.
- **Secondary:** 1px border `var(--text-primary)`, transparent bg, text `var(--text-primary)`. Hover: bg shifts to `var(--surface-alt)`.
- **CTA copy:** "Apply for Partnership", "Send a Digital Case", "Request a Starter Kit" — commitment-driven language over generic "Contact Us".

### Cards

- Background `var(--surface-bg)`, border 1px `var(--border-subtle)`. No glassmorphism. No nested cards.
- Elevated/hero card: bg `var(--brand-900)`, text `var(--brand-50)`.
- Padding: `var(--space-md)`. No deep drop-shadows on flat designs.

### Forms

- Inputs: bg `var(--surface-alt)`, border 1px `var(--border-subtle)`. Focus: `outline: 2px solid var(--action-primary); outline-offset: 2px`.
- Labels: `var(--text-primary)`, Body size, Bold.
- Error: bind `aria-invalid="true"`, pair `--error` color with icon/text — never rely on color alone.

### Images

- Hero: macro photography of restorations and 5-axis milling machine — no stock hands, no generic clinical imagery.
- No image hover animations. Use `backdrop-filter: blur()` for depth where needed.

## Internationalization

Hebrew (RTL) is a required language variant. All layouts must support `dir="rtl"` without breaking. Logical CSS properties preferred (`margin-inline-start` over `margin-left`).
