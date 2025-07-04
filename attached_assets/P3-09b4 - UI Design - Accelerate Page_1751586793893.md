# **Project:** The Talent Foundation Website - Accelerate Service Page Design 

**Goal:** Define the precise visual layout, styling, and interactions for the Accelerate service page with maximum deterministic detail, ensuring consistency with benchmark pages and brand standards for direct implementation.

**I. Global Styles & Principles (Reference Brand Guide V2.1)**

*   **Layout Framework:** 12-column grid, max content width ~1140px.
*   **Spacing:** Consistent 8px increments (`var(--space-xs)` to `var(--space-xxxl)`). Generous whitespace.
*   **Typography:**
    *   Font Family: **Inter** (from Google Fonts).
    *   Weights: Regular (400), Medium (500), SemiBold (600), Bold (700), Italic (400 Italic).
    *   Web Sizes: H1=48px, H2=36px, H3=24px, Body=16px, Large Body=18px.
    *   Line Height: 1.6 for Body Text.
    *   Alignment: **Left-align** default.
*   **Color Palette (From Brand Guide V2.1):** Use defined CSS variables (`--color-orange`, `--color-blue`, etc.).
*   **Buttons:** Defined styles for Primary (Orange Solid) & Secondary (Blue Outline/Text Link) including hover/focus states. Padding: 12px 24px. Radius: 4px. Text: Inter SemiBold 16px.
*   **Iconography:** **Line icons**, **2px stroke width**, Color: `#02a7e1` (Blue). Source: **[Specify ONE Library - e.g., Remix Icon / Feather Icons - Decision Required]**.
*   **Responsiveness:** Mobile-first construction.

**II. Section-by-Section UI/UX Implementation (V3 - Explicit Detail)**

**(A. Hero Section)**

*   **Layout:** Full-width banner. Padding: `var(--space-xxl)` top/bottom (64px).
*   **Background:** Subtle abstract vector graphic (SVG). Use tints/shades derived from `#011627` and `#f5f7f8` suggesting precise, rapid movement. Ensure high text contrast.
*   **Content:** Left-aligned within `div.container`.
    *   **H1 (Accelerate: Secure High-Impact...)**: Style: `font-size: var(--font-size-h1); font-weight: var(--font-weight-bold); color: var(--color-text-dark); line-height: var(--line-height-heading); margin-bottom: var(--space-sm);`.
    *   **Sub-headline (Bridge critical talent...)**: Style: `font-size: var(--font-size-body-large); font-weight: var(--font-weight-regular); color: var(--color-text-dark); line-height: var(--line-height-body); margin-bottom: var(--space-lg); max-width: 650px;`.
        *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'strategic rigor—like executive search methodology—', 'speed, precision, and lasting impact' -->`
    *   **Primary CTA Button (Solve Your Critical...)**: Style: `.btn .btn-primary`.
    *   **Secondary CTA Button (Explore Our Full...)**: Style: `.btn .btn-secondary`. Apply `margin-top: var(--space-sm);`.

**(B. The Problem Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-subtle)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Vacancies Stalling Strategy?...)**: Style: `font-size: var(--font-size-h2); font-weight: var(--font-weight-bold); color: var(--color-text-dark); line-height: var(--line-height-heading); margin-bottom: var(--space-xl);`.
    *   **Pain Point Blocks Layout:** CSS Grid: `display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-lg);` (Desktop > 992px), `grid-template-columns: 1fr;` (Mobile < 768px).
    *   **Pain Point Block Structure (Each Item):**
        *   **Container `div` Style:** `display: flex; align-items: flex-start; background-color: var(--color-bg-light); padding: var(--space-md); border: 1px solid var(--color-border-light); border-radius: var(--border-radius); box-shadow: var(--box-shadow-subtle); transition: transform var(--transition-default), box-shadow var(--transition-default);`.
        *   **Hover Style:** `:hover { transform: translateY(-4px); box-shadow: var(--box-shadow-hover); }`.
        *   **Icon Wrapper `div` Style:** `flex-shrink: 0; margin-right: var(--space-sm); margin-top: 4px;`
            *   **Icon:** 32x32px Blue (`#02a7e1`) line icon (Risk/Clock, Agency X-mark, Team Strain/Bandwidth, Cost/Down-arrow).
        *   **Text Wrapper `div`:**
            *   **Lead-in `strong` Style:** `display: block; font-weight: var(--font-weight-semibold); color: var(--color-text-dark); font-size: 18px; margin-bottom: var(--space-xs);`. (e.g., **Project Risk:**)
            *   **Text `p` Style:** `font-size: var(--font-size-body); color: var(--color-text-medium); line-height: var(--line-height-body); margin: 0;`.
                *   `<!-- Emphasis Note: Apply Inter SemiBold 600, color #011627 to metric/risk placeholders: '[$X] Million strategic initiative', '[$Y] per week', 'your team\'s valuable time', 'technical or strategic bar', 'specialized expertise or bandwidth', 'significant financial and operational drag' -->`

**(C. Our Solution Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-light)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Accelerate: Flexible Expertise...)**: Style per global spec. Margin-bottom: `var(--space-lg)`.
    *   **Sub-heading (Flexible Delivery Models)**: H3 style. Margin-bottom: `var(--space-md)`.
    *   **Models Grid Layout:** CSS Grid: `display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-lg);` (Desktop > 992px), `grid-template-columns: 1fr;` (Mobile < 768px). Apply 2x2 visual if content allows cleanly.
    *   **Model Item Structure (Mandate Card Style):**
        *   **Container `div` Style:** `background-color: var(--color-bg-light); padding: var(--space-md); border: 1px solid var(--color-border-light); border-radius: var(--border-radius); box-shadow: var(--box-shadow-subtle); transition: transform var(--transition-default), box-shadow var(--transition-default);`.
        *   **Hover Style:** `:hover { transform: translateY(-4px); box-shadow: var(--box-shadow-hover); }`.
        *   **Icon Wrapper `div` Style:** `margin-bottom: var(--space-xs);`. Icon: 24x24px Blue line icon (Person+Gear, Checklist/Target, Magnifying Glass, Wrench/Puzzle).
        *   **Title `h4` Style:** `font-size: 20px; font-weight: var(--font-weight-semibold); color: var(--color-text-dark); margin: 0 0 var(--space-xs) 0;`.
        *   **Description `p` Style:** `font-size: var(--font-size-body); color: var(--color-text-medium); line-height: var(--line-height-body); margin: 0;`.
    *   **Sub-heading (Our Strategic Execution Rigor)**: H3 style. Margin-top: `var(--space-xl)`. Margin-bottom: `var(--space-sm)`.
    *   **Rigor Intro Text:** Body Text style (`color: var(--color-text-dark);`). Margin-bottom: `var(--space-sm)`.
        *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'We treat every critical hire with strategic importance.' -->`
    *   **Rigor List:** Standard ordered list (`<ol>`) with subtle left border: `border-left: 3px solid var(--color-blue-lighter); padding-left: var(--space-md); list-style: none;`.
        *   **List Item `li` Style:** `margin-bottom: var(--space-xs); position: relative; padding-left: 10px;`. `::before { content: '✓'; position: absolute; left: -15px; top: 2px; color: var(--color-blue); font-weight: bold; }`. Body Text style.
            *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'Illuminate', 'Elevate' -->`
    *   **Team Caliber Text:** Single paragraph, Body Text style. Margin-top: `var(--space-md)`.
        *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'experienced, specialized TF talent acquisition professionals' -->`

**(D. Strategic Insight Section)**

*   **Layout:** Full-width. Padding: `var(--space-xxl)` top/bottom.
*   **Container `div` Style (Style B):** `background-color: var(--color-bg-subtle); border: 1px solid var(--color-blue-lighter); padding: var(--space-lg); max-width: 800px; margin: 0 auto; text-align: center; border-radius: var(--border-radius);`.
*   **Content:** Centered text alignment.
    *   **H3 (The Paradox of Speed...)**: Style per Global spec, centered. Margin-bottom: `var(--space-sm)`.
    *   **Insight Text (*In high-stakes situations...*)**: Style: `font-style: italic; font-size: var(--font-size-body-large); color: var(--color-text-dark); line-height: 1.6; text-align: center;`.
        *   `<!-- Emphasis Note: Apply Inter SemiBold 600, non-italic to: 'True acceleration comes from applying strategic rigor concurrently with focused urgency.' -->`

**(E. Benefits Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-light)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Deliver Critical Talent Reliably...)**: Style per global spec. Margin-bottom: `var(--space-xl)`.
    *   **Benefits Layout:** CSS Grid: `display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-xl) var(--space-lg);` (Desktop > 992px), `grid-template-columns: 1fr;` (Mobile < 768px).
    *   **Benefit Item Structure:**
        *   **Icon Wrapper `div` Style:** `margin-bottom: var(--space-sm);`. Icon: 32x32px Blue line icon (Roadmap/Arrow, Shield/Growth, Person/Target, Graph/ROI). Use enhanced placeholder style.
        *   **Heading H3 Style:** `font-size: var(--font-size-h3); font-weight: var(--font-weight-semibold); color: var(--color-text-dark); margin-bottom: var(--space-xs);`.
        *   **Description `p`:** Body Text style.
            *   `<!-- Emphasis Note: Apply Inter SemiBold 600, color #011627 where specific BPs are mentioned e.g., '(BP3, BP1)' -->`

**(F. Differentiation Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-subtle)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Strategic Execution Partner...)**: Style per global spec. Margin-bottom: `var(--space-xl)`.
    *   **Differentiator List Style:** Ordered list (`<ol>`) with custom counter and styled pseudo-elements for numbers per Brand Guide V2.1.
        *   **List Item `li` Style:** `position: relative; padding-left: 56px; margin-bottom: var(--space-lg);`.
        *   **Number `li::before` Style:** Styled blue gradient circle with number.
    *   **List Item Content Structure:**
        *   **Title `strong` Style:** `font-weight: var(--font-weight-bold); font-size: 18px; display: block; margin-bottom: var(--space-xs); color: var(--color-text-dark);`.
        *   **Description `p`:** Body Text style.
            *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: ''Executive Search Rigor'', 'reduces your risk...', '(often by 30-50%...)', 'seasoned TA professionals', 'saving *your team\'s* valuable time', 'Illuminate', 'Elevate', 'unmatched precision', 'advanced TA technology', 'True Partnership...' -->`

**(G. How It Works Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-light)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Our Approach: Rapid Clarity...)**: Style per global spec. Margin-bottom: `var(--space-xl)`.
    *   **Process List Style:** Ordered list (`<ol>`) with custom counter and styled pseudo-elements for numbers per Brand Guide V2.1. Optional vertical line connector.
        *   **List Item `li` Style:** `position: relative; padding-left: 56px; margin-bottom: var(--space-lg);`.
        *   **Number `li::before` Style:** Styled blue circle with number.
    *   **List Item Content Structure:**
        *   **Title `strong` Style:** `font-weight: var(--font-weight-semibold); font-size: 18px; display: block; margin-bottom: var(--space-xs);`.
        *   **Description `p`:** Body Text style (`color: var(--color-text-medium);`).

**(H. Final CTA Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-dark)`. Padding: `var(--space-xxxl)` top/bottom. Centered content.
*   **Content:** Centered within `div.container`.
    *   **H2 (Solve Your Critical Hiring...)**: Style per global spec, Color: `var(--color-text-light)`. Margin-bottom: `var(--space-sm)`.
    *   **Reinforcing Statement (Ready to secure...)**: Style: `font-size: var(--font-size-body); color: var(--color-blue-lighter); line-height: var(--line-height-body); margin-bottom: var(--space-lg); max-width: 650px; margin-left: auto; margin-right: auto;`.
    *   **Primary CTA Button (Request Accelerate Consultation)**: `.btn .btn-primary` style.
    *   **Secondary CTA Links Wrapper `div` Style:** `margin-top: var(--space-md);`.
        *   **Links `a` Style:** Style as text links, Color: `var(--color-text-light)`, Font: Inter Medium 500, 16px. Margin: `0 var(--space-xs)`. Underline on hover. Display inline-block.

**III. Assets Required**

*   **Hero Background Graphic:** SVG abstract vector (Specs: Brand Colors, suggest precise, rapid movement).
*   **Icon Set:** Consistent Line Icons (Source: **[Specified Library - e.g., Remix Icon]**, Style: 2px stroke, Color: `#02a7e1`). Specific icons needed:
    *   Problem: Risk/Clock, Agency X-mark, Team Strain/Bandwidth, Cost/Down-arrow.
    *   Solution Models: Person+Gear, Checklist/Target, Magnifying Glass, Wrench/Puzzle.
    *   Benefits: Roadmap/Arrow, Shield/Growth, Person/Target, Graph/ROI.
*   **Font Files:** Ensure **Inter** font family (weights 400, 500, 600, 700, Italic) is loaded correctly.

**IV. Developer Implementation Notes**

*   Implement using semantic HTML5. Use CSS variables for Brand Guide V2.1 styles.
*   Ensure WCAG AA accessibility (contrast, focus states, semantic structure).
*   Implement lazy loading for images/graphics. Optimize assets. Validate code. Test responsiveness.
*   Implement GA4 event tracking precisely for Primary CTA button and secondary navigation links.
*   Prioritize Core Web Vitals.
*   **Emphasis Note:** Use `<strong>` or appropriate classes (`.font-semibold .text-dark`) for terms marked for **Inter SemiBold 600** emphasis.

---
