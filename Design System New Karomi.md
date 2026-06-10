# New-Karomi Dental Labs — Elite UI/UX Design System (2025 Standard)

**Version:** 3.1.0 (B2B Research Integrated)
**Last Updated:** 2026-06-09
**Status:** Production Ready
**Owner:** New-Karomi Design Team

---

## 📋 Table of Contents

1. [Overview & Philosophy](#overview--philosophy)
2. [Brand Identity](#brand-identity)
3. [Visual Design System](#visual-design-system)
   - [3-Tier Token Architecture](#3-tier-token-architecture)
   - [OKLCH Color & Attribute Dark Mode](#oklch-color--attribute-dark-mode)
   - [Fluid Typography](#fluid-typography)
   - [Spacing & Breakpoints](#spacing--breakpoints)
   - [Hardware-Accelerated Motion](#hardware-accelerated-motion)
4. [Component Library](#component-library)
5. [Content & Tone](#content--tone)
6. [Accessibility (a11y) Invariants](#accessibility-a11y-invariants)

---

## 1. Overview & Philosophy

### Mission Statement

**New-Karomi** is a premium boutique dental laboratory specializing in top-tier restorative dentistry. It serves communicative, good-natured dentists by providing restorations that perfectly balance 46 years of generational craftsmanship with state-of-the-art digital precision. The core essence of the brand is the harmony of uncompromising artistry, absolute accuracy, and genuine personal connection—translating legacy into measurable ROI for the dentist.

### Design Philosophy: "Where Heritage Craft Meets Digital Precision"

The design system is heavily anchored in the brand's core values: Legacy, Digitality, and Personal Connection. It must feel premium, exact, and warmly inviting, while maintaining strict accessibility and functional standards.

| Principle (English) | Principle (Native/Secondary) | Description | Application |
|---------------------|------------------------------|-------------|-------------|
| **Art, Precision & ROI** | Arte, Precisión y Retorno | Aesthetic mastery meets micrometer accuracy. | Clean layouts paired with high-quality imagery. Legacy framed as risk management: zero errors, saved chair time, protected reputation. |
| **Legacy & Future** | Legado y Futuro | 3rd generation experience meets advanced digital tech. | Classic typography paired with modern UI. **Dual UI Strategy**: Asymmetric/editorial for Marketing, high-density 12-column grid for Client Portal. |
| **Personal Connection & Boundaries** | Conexión Personal y Límites | Partner exclusively with kind, communicative dentists. | Warm messaging with "positive friction." Use commitment-driven CTAs like "Apply for Partnership" to filter out misaligned clients. |

### Core Design Goals

1. **Premium Boutique Aesthetic**
   - Evoke high-end, bespoke service through high-contrast minimalism.
   - Enforce WCAG AA accessibility strictly. Use semantic color pairing and avoid washed out neutral texts.

2. **Clarity of Capability & ROI**
   - Place human expertise and technological capability side-by-side.
   - Constantly connect 46 years of heritage to the doctor's bottom line (efficiency, zero remakes).

3. **Context-Aware UX**
   - **Marketing:** Unhurried, generous whitespace, editorial asymmetry, heavy brand color utilization.
   - **Portal/Clinical:** Practical, high-density data views, standard 12-column grids for predictable, layout-shift-free data viewing.

---

## 2. Brand Identity

### Brand Positioning

- **What we are:** A premium boutique lab where 3rd-generation heritage meets cutting-edge digital dentistry, delivering zero-error restorations that save chair time.
- **What we are NOT:** A mass-production factory, a cold tech facility, or a vendor taking any order. We set boundaries and reject rush jobs that compromise quality.
- **Motto:** "Artistry in our heritage. Precision in our technology. Profitability in your practice."

### Brand Personality

**Tone:** Confident, warm, highly professional, and boundary-setting.
**Voice:** Expert partners to our dentists. We use positive friction to protect our standards. We say "Apply for Partnership" rather than "Contact Us."
**Visual Style:** High-end boutique minimalism. Striking photography highlighting both artistry and sleek machinery. Accessible high-contrast palettes, ensuring beauty never compromises usability. The typography avoids "AI defaults" like repeating gradient text or oversized eyebrows.

---

## 3. Visual Design System

### 3-Tier Token Architecture
Strict native CSS variable scoping. No external token managers required.
1. **Primitive Tokens:** Root values mapped to brand hue (H: 60).
   - `--brand-900`: `oklch(0.24 0.02 60)` (Deep Espresso)
   - `--brand-700`: `oklch(0.42 0.02 60)` (Charcoal Muted)
   - `--brand-500`: `oklch(0.59 0.08 60)` (Warm Bronze)
   - `--brand-300`: `oklch(0.84 0.015 60)` (Taupe Grey)
   - `--brand-100`: `oklch(0.95 0.01 60)` (Parchment)
   - `--brand-50`: `oklch(0.98 0.005 60)` (Artisan Cream)
   - `--success`: `oklch(0.44 0.08 150)`
   - `--warning`: `oklch(0.61 0.15 60)`
   - `--error`: `oklch(0.38 0.15 25)`
   - `--info`: `oklch(0.31 0.08 260)`
2. **Semantic Tokens:** Mapped to primitives.
   - `--surface-bg`: `var(--brand-50)`
   - `--surface-alt`: `var(--brand-100)`
   - `--text-primary`: `var(--brand-900)`
   - `--text-secondary`: `var(--brand-700)`
   - `--action-primary`: `var(--brand-500)`
   - `--border-subtle`: `var(--brand-300)`
3. **Component Tokens:** Mapped to semantics locally.
   - `.btn { --btn-bg: var(--action-primary); --btn-text: var(--surface-bg); }`
   - `.card { --card-bg: var(--surface-bg); --card-border: var(--border-subtle); }`

### OKLCH Color & Attribute Dark Mode
Hex codes are banned. Use OKLCH for perceptually uniform contrast and native alpha.
**Dark Mode Mutation:** Triggered via `[data-theme="dark"]` on `<body>`. Never redefine primitives. Redefine semantic tokens. We avoid "matte black" defaults, maintaining the warm undertones.

| Semantic Token | OKLCH (Light) | OKLCH (Dark Mutation) | `on-[color]` Pair (A11y Strict) |
|----------------|---------------|-----------------------|---------------------------------|
| **primary** | `var(--brand-500)` | `var(--brand-500)` | `on-primary` (Must pass WCAG AA, use `var(--brand-50)`) |
| **surface** | `var(--brand-50)` | `var(--brand-900)` | `on-surface` (`var(--brand-900)` / `var(--brand-50)`) |
| **background** | `var(--brand-50)` | `var(--brand-900)` | `text-primary`, `text-secondary` |

### Fluid Typography
Static pixel breakpoints are banned. Use CSS `clamp()` for liquid, layout-shift-free scaling.

| Type | Clamp Formula | Use Cases |
|------|---------------|-----------|
| **Hero** | `clamp(2.5rem, 5vw, 4rem)` | Cinematic headers (max 6rem) |
| **H1** | `clamp(2rem, 4vw, 3rem)` | Page titles |
| **H2** | `clamp(1.5rem, 3vw, 2.5rem)` | Section headers |
| **H3** | `clamp(1.25rem, 2vw, 1.75rem)` | Card titles |
| **Body** | `clamp(1rem, 1.5vw, 1.125rem)`| Readable blocks, main inputs |
| **Small** | `clamp(0.875rem, 1vw + 0.5rem, 1rem)` | Secondary UI, Portal data grids |
| **Micro** | `clamp(0.75rem, 0.75vw + 0.5rem, 0.875rem)` | Tags, metadata |

**Typographic Hierarchy:**
- **Hero:** Playfair Display, serif. Dominant, classic, communicates legacy. `text-wrap: balance`. Letter-spacing >= -0.04em.
- **Subtitles:** Inter, sans-serif. Calm, precise, avoids uppercase styling unless acronym.
- **Body:** Inter, sans-serif. Minimal, highly readable, max line-length 65-75ch, `text-wrap: pretty`. No all-caps body copy.

### Spacing & Breakpoints
Strict 8px baseline grid. Flexbox for 1D layout, Grid for 2D.
**Breakpoints:**
- **sm (Mobile):** 640px
- **md (Tablet):** 768px
- **lg (Desktop):** 1024px
- **xl (Large Desktop):** 1280px

**Spacing Scale:**
- `--space-xs`: `clamp(0.25rem, 0.5vw, 0.5rem)`
- `--space-sm`: `clamp(0.5rem, 1vw, 1rem)`
- `--space-md`: `clamp(1rem, 2vw, 1.5rem)` (Max for clinical portal)
- `--space-lg`: `clamp(1.5rem, 3vw, 3rem)`
- `--space-xl`: `clamp(3rem, 5vw, 5rem)`
- `--space-2xl`: `clamp(5rem, 8vw, 8rem)` (Marketing only)

### Hardware-Accelerated Motion
Generic `ease` is banned. Use mass/spring physics. Animate **only** `transform` and `opacity` to prevent GPU jank.
- **Physics Tokens:** `--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275)`, `--ease-premium-in-out: cubic-bezier(0.4, 0, 0.2, 1)`
- **Durations:** `--duration-fast: 150ms`, `--duration-base: 300ms`, `--duration-slow: 600ms`
- **Tactile Depth:** No image hover animations. Use `backdrop-filter: blur()` and semantic z-index scale.

---

## 4. Component Library

The UI components must feel premium and exact. They are designed on an 8px grid.

### 4.1. Buttons & CTAs

Buttons are the primary conversion points and must draw the eye while remaining elegant.

-   **Primary Button:**
    -   *Background:* `var(--action-primary)`
    -   *Text:* `var(--surface-bg)` (Guaranteed Contrast)
    -   *Shape:* Sharp corners or minimal 2px radius to reflect precision.
    -   *Motion:* `transform: translateY(-2px)` on hover via `--ease-premium-in-out`.
-   **Secondary Button (Outlined):**
    -   *Border:* 1px solid `var(--text-primary)`
    -   *Background:* Transparent
    -   *Text:* `var(--text-primary)`
    -   *Hover:* Background shifts to `var(--surface-alt)`.

### 4.2. Cards & Containers

Cards are used to display data and media. Nested cards are strictly prohibited.

-   **Standard Card:**
    -   *Background:* `var(--surface-bg)`
    -   *Border / Shadow:* 1px solid `var(--border-subtle)`. No glassmorphism.
    -   *Padding:* `var(--space-md)`
    -   *Typography:* H3 title with `--text-secondary` metadata.
-   **Highlight/Elevated Card:**
    -   *Background:* `var(--brand-900)`
    -   *Text:* `var(--brand-50)`.
    -   *Shadows:* Use semantic elevation, no deep drop-shadows on flat designs.

### 4.3. Inputs & Forms 

Forms must reflect an expert guided conversation, not bureaucratic data entry.

-   **Input Fields:**
    -   *Background:* `var(--surface-alt)`
    -   *Border:* 1px solid `var(--border-subtle)`
    -   *Focus State:* `outline: 2px solid var(--action-primary); outline-offset: 2px;`
-   **Labels:**
    -   *Typography:* `var(--text-primary)`, Body size, Bold.
-   **Error State:** Must bind `aria-invalid="true"`. Do not rely solely on red borders, pair with `--error` icons/text.

---

## 5. Content & Tone

### Copywriting Laws

1. **Humble Excellence:** We are unequivocally the best at what we do, but we never brag. True mastery speaks for itself. Our tone must be profoundly humble, quietly confident, and entirely focused on the doctor's success rather than our ego.
2. **Warm Precision:** Blend premium clinical accuracy with genuine family warmth. Use sophisticated, high-end language. Avoid buzzwords like "supercharge" or "next-generation".
3. **Legacy & Certifications as ROI (Risk Insurance):** Frame our 46-year history and in-house manufacturing as the ultimate "Risk Insurance" for the dentist's practice. It protects against gray-market materials, remakes, and litigation.
4. **Intentional Friction & Exclusion:** Actively filter out transactional, toxic, or rush-focused clients. Replace generic CTAs with commitment actions (e.g., "Apply for Partnership").
5. **Frictionless Onboarding (The Starter Kit):** Offer a physical "Starter Kit" to lower initial barriers and translate digital intent into clinical action. No "Click here" links.

---

## 6. Accessibility (a11y) Invariants

Mandatory standards enforced across all code.

### Contrast Pairing System
Developers must use predefined `on-[color]` pairs (e.g., placing `var(--brand-50)` text inside a `var(--brand-500)` container). This mathematically guarantees WCAG AA/AAA compliance without manual checking.

### Universal Focus Rings
Every interactive element requires a distinct `:focus-visible` state.
- **Rule:** `outline: 2px solid var(--action-primary); outline-offset: 2px;`
- Offset prevents focus blending into similar background colors.

### Semantic Forcing & Motion Collapse
- **Reduced Motion:** Global override required:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * { --duration-fast: 0ms !important; --duration-base: 0ms !important; --duration-slow: 0ms !important; }
  }
  ```
- **Semantic HTML:** Buttons must be `<button>`, inputs must use `<label>` or `aria-label`.

---
*End of Document*
