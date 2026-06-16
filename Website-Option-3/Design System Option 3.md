# New-Karomi Dental Labs — Elite UI/UX Design System Option 3 (2025 Standard)

**Version:** 3.1.0 (Clinical Partnership Focus)
**Last Updated:** 2026-06-16
**Status:** Pitch / Concept
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

**New-Karomi** is the ultimate clinical partner for communicative, high-standard dentists. We prioritize seamless communication, mutual respect, and absolute reliability. We are an extension of the dentist's own clinic—a dependable bridge between the doctor's diagnosis and the patient's smile. Our focus is less on the traditional "artisan" angle and entirely on predictable excellence, transparency, and a friction-free partnership.

### Design Philosophy: "Clarity, Connection, and Clinical Trust"

The design system for Option 3 is anchored in calmness, reliability, and human connection. Sky Blue replaces warm artisan tones to evoke a medical, trustworthy, yet approachable environment. 

| Principle (English) | Principle (Native/Secondary) | Description | Application |
|---------------------|------------------------------|-------------|-------------|
| **Clinical Transparency** | Transparencia Clínica | Absolute clarity in process and communication. | Crisp, uncluttered interfaces. No dense text blocks. Focus on readable, step-by-step collaboration tools. |
| **The Seamless Extension** | La Extensión Perfecta | We operate as part of the doctor's team. | Imagery showing collaboration, shared screens, and doctor-technician dialogue. UI that feels like modern medical software. |
| **Predictable Excellence** | Excelencia Predecible | Consistent, zero-surprise outcomes. | Rigid 12-column grids, mathematical spacing, and predictable component behavior. |

### Core Design Goals

1. **Approachable Clinical Aesthetic**
   - Evoke trust through clean lines, ample whitespace, and a calming Sky Blue palette.
2. **Focus on Relationship**
   - Center photography and copy around human interaction, consultation, and case planning rather than just the physical crown.
3. **Friction-Free UX**
   - Highly intuitive navigation, clear calls-to-action focused on collaboration (e.g., "Consult on a Case").

---

## 2. Brand Identity

### Brand Positioning

- **What we are:** A highly communicative, deeply reliable extension of the dental practice. We prioritize case planning and open dialogue.
- **What we are NOT:** A secretive, isolated artisan workshop. We do not hide behind closed doors. We are transparent and accessible partners.
- **Motto:** "Your Clinical Partner. Predictable Results, Seamless Communication."

### Brand Personality

**Tone:** Clear, supportive, professional, and accessible.
**Voice:** We speak as peers and colleagues. We are proactive problem-solvers.
**Visual Style:** Bright, modern, and clinical without being sterile. Soft sky blues, deep navies for contrast, and pristine white space. Typography is highly legible and geometric.

---

## 3. Visual Design System

### 3-Tier Token Architecture
Strict native CSS variable scoping.
1. **Primitive Tokens:** Root values mapped to Sky Blue / Navy.
   - `--brand-900`: `oklch(0.25 0.04 250)` (Deep Navy)
   - `--brand-700`: `oklch(0.45 0.08 250)` (Slate Blue)
   - `--brand-500`: `oklch(0.75 0.12 240)` (Sky Blue)
   - `--brand-300`: `oklch(0.90 0.04 240)` (Soft Ice Blue)
   - `--brand-100`: `oklch(0.97 0.01 240)` (Clinical Tint)
   - `--brand-50`: `oklch(0.99 0.00 0)` (Pure White)
   - `--success`: `oklch(0.60 0.15 150)`
   - `--error`: `oklch(0.50 0.20 25)`
2. **Semantic Tokens:** Mapped to primitives.
   - `--surface-bg`: `var(--brand-50)`
   - `--surface-alt`: `var(--brand-100)`
   - `--text-primary`: `var(--brand-900)`
   - `--text-secondary`: `var(--brand-700)`
   - `--action-primary`: `var(--brand-500)`
   - `--border-subtle`: `var(--brand-300)`

### OKLCH Color & Attribute Dark Mode
| Semantic Token | OKLCH (Light) | OKLCH (Dark Mutation) | `on-[color]` Pair (A11y Strict) |
|----------------|---------------|-----------------------|---------------------------------|
| **primary** | `var(--brand-500)` | `var(--brand-500)` | `on-primary` (`var(--brand-900)`) |
| **surface** | `var(--brand-50)` | `var(--brand-900)` | `on-surface` (`var(--brand-900)` / `var(--brand-50)`) |
| **background** | `var(--brand-50)` | `var(--brand-900)` | `text-primary`, `text-secondary` |

*(Note: Sky Blue text on white fails WCAG AA. Action primary buttons will use Deep Navy text for contrast).*

### Fluid Typography
Static pixel breakpoints are banned. Use CSS `clamp()`.

| Type | Clamp Formula | Use Cases |
|------|---------------|-----------|
| **Hero** | `clamp(2.5rem, 5vw, 4rem)` | Clean hero headers |
| **H1** | `clamp(2rem, 4vw, 3rem)` | Page titles |
| **Body** | `clamp(1rem, 1.5vw, 1.125rem)`| Main text |

**Typographic Hierarchy:**
- **Primary Typeface:** Inter. Used for all headings and body copy to ensure a unified, modern, and clinical aesthetic.
- Avoid serifs. The brand is forward-looking and communicative, not rooted in old-world artisan tropes.

### Spacing & Breakpoints
Strict 8px baseline grid.
- `--space-sm`: `clamp(0.5rem, 1vw, 1rem)`
- `--space-md`: `clamp(1rem, 2vw, 1.5rem)`
- `--space-lg`: `clamp(1.5rem, 3vw, 3rem)`

### Hardware-Accelerated Motion
- Minimal, snappy animations. 
- Fast fades and crisp transitions. No slow, lingering "luxury" eases.
- `--ease-snappy: cubic-bezier(0.2, 0.8, 0.2, 1)`
- `--duration-base: 200ms`

---

## 4. Component Library

### 4.1. Buttons & CTAs
- **Primary Button:**
  - *Background:* `var(--action-primary)` (Sky Blue)
  - *Text:* `var(--brand-900)` (Deep Navy for contrast)
  - *Shape:* 6px rounded corners (approachable, friendly).
- **Secondary Button:**
  - *Border:* 2px solid `var(--brand-300)`
  - *Text:* `var(--brand-900)`

### 4.2. Cards & Containers
- **Information Card:**
  - *Background:* `var(--surface-bg)`
  - *Border:* 1px solid `var(--border-subtle)`
  - *Shadow:* Soft, diffuse shadow (e.g., `0 4px 12px rgba(0,0,0,0.05)`)

---

## 5. Content & Tone

1. **Doctor-Centric Focus:** Every headline should focus on the doctor's experience, communication, and patient outcomes.
2. **Clear Directives:** Use actionable language. "Schedule a Case Review" instead of "Submit Order".
3. **De-emphasize "Art":** Focus instead on "Precision", "Reliability", and "Partnership".

---

## 6. Accessibility (a11y) Invariants
- Contrast must be strictly monitored due to the light nature of Sky Blue. 
- `var(--brand-500)` (Sky Blue) against `var(--brand-50)` (White) fails contrast. Therefore, Sky Blue is used for backgrounds of large components or thick borders, while text and vital UI icons use Deep Navy.
