# New-Karomi Dental Labs — Elite UI/UX Design System (2025 Standard)

**Version:** 3.1.0
**Last Updated:** 2026-06-09
**Status:** Production Ready
**Owner:** UI/UX Architecture Team

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

**New-Karomi** is a market-leading dental laboratory specializing in advanced digital restorative dentistry. It serves forward-thinking dental practices by providing precision-engineered restorations driven by data, robotics, and sterile efficiency. The core essence of the brand is absolute accuracy, uncompromising technological dominance, and clinical predictability.

### Design Philosophy: "Where Clinical Precision Meets Technological Dominance"

The design system is heavily anchored in the brand's core values: Precision, Innovation, and Efficiency. It must feel high-tech, clinical, and uncompromisingly sterile.

| Principle (English) | Principle (Native/Secondary) | Description | Application |
|---------------------|------------------------------|-------------|-------------|
| **Data, Precision & ROI** | Datos, Precisión y Retorno | Algorithmic perfection meets micrometer accuracy. | Clean, structured layouts paired with high-tech imagery. Technology framed as risk management: zero errors, algorithmic consistency, saved chair time. |
| **Innovation & Dominance** | Innovación y Dominio | Market-leading robotics meets advanced digital workflows. | High-tech typography paired with ultra-modern UI. Sleek, clinical, high-density interfaces optimized for performance. |
| **Clinical Efficiency & Boundaries** | Eficiencia Clínica y Límites | Partner exclusively with practices valuing systematic workflows. | Authoritative messaging with strict protocols. Use commitment-driven CTAs like "Initialize Partnership", filtering out low-tech, misaligned clients. |

### Core Design Goals

1. **High-Tech Clinical Aesthetic**
   - Evoke cutting-edge, sterile efficiency through ultra-high-contrast minimalism and technical UI patterns.
   - Enforce WCAG AA accessibility strictly.

2. **Clarity of Capability & ROI**
   - Place robotic precision and algorithmic capability at the forefront.
   - Connect advanced technology to the doctor's bottom line (maximum efficiency, absolute predictability, zero remakes).

3. **Context-Aware UX**
   - Use precise grids and data-viz elements for marketing.
   - Employ ultra-high-density data views for portal/clinical contexts, resembling advanced medical software.

---

## 2. Brand Identity

### Brand Positioning

- **What we are:** Market-leading, high-tech laboratory where advanced robotics meets clinical precision. We deliver zero-error, data-driven restorations maximizing chair time efficiency.
- **What we are NOT:** Legacy craft shop, warm family business, or a vendor taking unstructured analog orders.
- **Motto:** "Driven by data. Executed by robotics. Profitable for your practice."

### Brand Personality

**Tone:** Authoritative, clinical, highly professional, boundary-setting.
**Voice:** Market leaders, technological experts. Use precise protocols protecting standards. Frame technology as guaranteed predictability and clinical perfection.
**Visual Style:** High-tech clinical minimalism. Striking photography highlighting robotics and data visualization. Accessible high-contrast palettes (stark whites, clinical blues, deep blacks). Precision never compromises usability. Warm tones are strictly excluded.

---

## 3. Visual Design System

### 3-Tier Token Architecture
Strict native CSS variable scoping. No external token managers required.
1. **Primitive Tokens:** Root values (`--color-matte-black: oklch(0.18 0 0)`). Never used in components.
2. **Semantic Tokens:** Mapped to primitives (`--surface-bg: var(--color-matte-black)`). Used globally.
3. **Component Tokens:** Mapped to semantics locally (`.btn { --btn-bg: var(--semantic-primary); }`).

### OKLCH Color & Attribute Dark Mode
Hex codes are banned. Use OKLCH for perceptually uniform contrast and native alpha.
**Dark Mode Mutation:** Triggered via `[data-theme="dark"]` on `<body>`. Never redefine primitives. Redefine semantic tokens (e.g., `--surface-bg` shifts to a lighter shade for elevation). Zero reliance on shadows in dark mode.

| Semantic Token | OKLCH (Light) | OKLCH (Dark Mutation) | `on-[color]` Pair (A11y Strict) |
|----------------|---------------|-----------------------|---------------------------------|
| **primary** | `oklch(0.18 0 0)` | `oklch(0.85 0.01 250)` | `on-primary` (Must pass WCAG AA) |
| **surface** | `oklch(0.96 0.005 250)` | `oklch(0.25 0.01 250)` | `on-surface` |
| **background** | `oklch(1 0 0)` | `oklch(0.15 0 0)` | `text-primary`, `text-secondary` |

### Fluid Typography
Static pixel breakpoints are banned. Use CSS `clamp()` for liquid, layout-shift-free scaling.

| Type | Clamp Formula | Use Cases |
|------|---------------|-----------|
| **Hero** | `clamp(2.5rem, 5vw, 4rem)` | Cinematic headers |
| **H1** | `clamp(2rem, 4vw, 3rem)` | Page titles |
| **Body** | `clamp(1rem, 1.5vw, 1.125rem)`| Readable blocks |

**Typographic Hierarchy:**
- **Hero:** Dominant, sharp, high-contrast, strictly left-aligned or centered. Cap max at 6rem. Use `text-wrap: balance`.
- **Subtitles:** Measured, clinical, letter-spacing >= -0.04em, high legibility. Use `text-wrap: balance`.
- **Body:** Minimal, highly readable, strictly utilizing `text-wrap: pretty` to reduce orphans, limited to 65-75ch line lengths. No all-caps body copy. Max 3 font families.

### Spacing & Breakpoints
Strict 8px baseline grid. Vary spacing for rhythm.
**Breakpoints:**
- **sm (Mobile):** 640px
- **md (Tablet):** 768px
- **lg (Desktop):** 1024px

### Hardware-Accelerated Motion
Generic `ease` is banned. Use mass/spring physics. Animate **only** `transform` and `opacity` to prevent GPU jank. Ease out with exponential curves. Never animate `<img>` elements on hover.
- **Physics Tokens:** `--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275)`
- **Durations:** `--duration-fast: 150ms`, `--duration-base: 300ms`
- **Tactile Depth:** Use `backdrop-filter: blur()` and SVG noise grain overlays for physical texture.

---

## 4. Component Library

The UI components must feel sterile and authoritative. They are designed on an 8px grid.

### 4.1. Buttons & CTAs

Buttons are the primary conversion points and must draw the eye while remaining elegant. Use verb + object labels (e.g., "Initialize Partnership").

-   **Primary Button:**
    -   *Background:* `var(--primary)`
    -   *Text:* `var(--on-primary)` (Guaranteed Contrast)
    -   *Shape:* 2px border-radius for sharp, precise edges.
    -   *Motion:* `transform: translateY(-2px)` on hover via `--ease-spring`. Animate background, border, or shadow, never a child image.
-   **Secondary Button (Outlined):**
    -   *Border:* 1px solid `var(--text-primary)`
    -   *Background:* Transparent
    -   *Text:* `var(--text-primary)`
    -   *Hover:* Background shifts to `var(--surface)`.

### 4.2. Cards & Containers

Cards are used to display technical specifications and clinical data. Avoid nested cards completely.

-   **Standard Card:**
    -   *Background:* `var(--surface)`
    -   *Border / Shadow:* Hairline 1px solid `var(--text-secondary)` border. No decorative glassmorphism.
    -   *Padding:* `clamp(1.5rem, 3vw, 2.5rem)`
    -   *Typography:* Structured, data-first hierarchy without repetitive eyebrows.
-   **Highlight/Elevated Card:**
    -   *Background:* `var(--primary)`
    -   *Text:* `var(--on-primary)`.
    -   *Shadows:* Avoid shadows; rely on stark contrast and border differences.

### 4.3. Inputs & Forms 

Forms must reflect uncompromising clinical precision and data validation.

-   **Input Fields:**
    -   *Background:* `var(--surface)`
    -   *Border:* 1px solid `var(--text-secondary)`
    -   *Focus State:* `outline: 2px solid var(--primary); outline-offset: 2px;`
-   **Labels:**
    -   *Typography:* Medium weight, `var(--text-sm)`, `var(--text-secondary)`.
-   **Error State:** Must bind `aria-invalid="true"`. Do not rely solely on red borders; include semantic error text.

---

## 5. Content & Tone

### Copywriting Laws

1. **Market Leader Dominance:** We dictate market standards. We quantify superiority rather than apologizing. Tone is aggressive, authoritative, focused on absolute technological supremacy. Avoid marketing buzzwords.
2. **Cold Clinical Perfection:** Replace emotion with hard data, processing speed, and algorithmic accuracy. Specific, not aphoristic cadence. Use exact punctuation.
3. **Technological Supremacy as Aggressive ROI:** Frame cutting-edge robotics and digital workflows as the ultimate profit multiplier. Guarantee maximum chairside speed and zero defects.

---

## 6. Accessibility (a11y) Invariants

Mandatory standards enforced across all code.

### Contrast Pairing System
Developers must use predefined `on-[color]` pairs (e.g., placing `var(--on-primary)` text inside a `var(--primary)` container). This mathematically guarantees WCAG AA/AAA compliance without manual checking.

### Universal Focus Rings
Every interactive element requires a distinct `:focus-visible` state.
- **Rule:** `outline: 2px solid var(--focus-ring); outline-offset: 2px;`
- Offset prevents focus blending into similar background colors.

### Semantic Forcing & Motion Collapse
- **Reduced Motion:** Global override required:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * { --duration-fast: 0ms !important; --duration-base: 0ms !important; }
  }
  ```
- **Semantic HTML:** Buttons must be `<button>`, inputs must use `<label>` or `aria-label`.

---
*End of Document*
