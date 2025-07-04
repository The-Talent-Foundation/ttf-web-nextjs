
# **Project:** The Talent Foundation Website - Elevate Service Page Design 


**Goal:** Define the precise visual layout, styling, and interactions for the Elevate service page with maximum deterministic detail, ensuring alignment with brand standards, strategic messaging (AI enablement, capability building), and conversion goals for direct implementation.

**I. Global Styles & Principles (Reference Brand Guide V2.1)**

*   **Layout Framework:** 12-column grid, max content width ~1140px.
*   **Spacing:** Consistent 8px increments (`var(--space-xs)` to `var(--space-xxxl)`). Generous whitespace.
*   **Typography:**
    *   Font Family: **Inter** (from Google Fonts).
    *   Weights: Regular (400), Medium (500), SemiBold (600), Bold (700), Italic (400 Italic).
    *   Web Sizes: H1=48px, H2=36px, H3=24px, Body=16px, Large Body=18px, Small=14px.
    *   Line Height: 1.6 for Body Text.
    *   Alignment: **Left-align** default.
*   **Color Palette (From Brand Guide V2.1):** Use defined CSS variables (`--color-orange`, `--color-blue`, etc.).
*   **Buttons:** Defined styles for Primary (Orange Solid) & Secondary (Blue Outline/Text Link) including hover/focus states. Padding: 12px 24px. Radius: 4px. Text: Inter SemiBold 16px.
*   **Iconography:** **Line icons**, **2px stroke width**, Color: `#02a7e1` (Blue). Source: **[Specify ONE Library - e.g., Remix Icon / Feather Icons - Decision Required]**.
*   **Responsiveness:** Mobile-first construction.

**II. Section-by-Section UI/UX Implementation (V2 - Explicit Detail)**

**(A. Hero Section)**

*   **Layout:** Full-width banner. Padding: `var(--space-xxl)` top/bottom (64px). Apply subtle gradient background: `linear-gradient(to bottom, var(--color-blue-lightest), var(--color-bg-light));`. Add abstract graphic placeholder if desired (per Accelerate V3 spec).
*   **Content:** Left-aligned within `div.container`.
    *   **H1 (Elevate: Build Your AI-Powered...)**: Style per global spec. Margin-bottom: `var(--space-sm)`.
    *   **Sub-headline (Is your team truly...)**: Style: `font-size: var(--font-size-body-large); font-weight: var(--font-weight-regular); color: var(--color-text-dark); line-height: var(--line-height-body); margin-bottom: var(--space-xl); max-width: 600px;`.
        *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'advanced capabilities and strategic AI literacy needed to drive measurable results' -->`
    *   **Primary CTA Button (Build Your AI-Ready...)**: `.btn .btn-primary` style.
    *   **Secondary CTA Button (Explore Our Full...)**: `.btn .btn-secondary` style. Apply `margin-top: var(--space-sm);`.

**(B. The Problem Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-subtle)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Are Outdated Skills...)**: Style per global spec. Margin-bottom: `var(--space-xl)`.
    *   **Pain Point Blocks Layout:** CSS Grid: `display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-lg);` (Desktop > 992px), `grid-template-columns: 1fr;` (Mobile < 768px).
    *   **Pain Point Block Structure (Each Item):**
        *   **Container `div` Style:** `display: flex; align-items: flex-start; background-color: var(--color-bg-light); padding: var(--space-md); border: 1px solid var(--color-border-light); border-radius: var(--border-radius); box-shadow: var(--box-shadow-subtle); transition: transform var(--transition-default), box-shadow var(--transition-default);`.
        *   **Hover Style:** `:hover { transform: translateY(-4px); box-shadow: var(--box-shadow-hover); }`.
        *   **Icon Wrapper `div` Style:** `flex-shrink: 0; margin-right: var(--space-md); margin-top: 0;`. Icon: 32x32px Blue line icon (Liability/Shield-Broken, AI/Competitor, ROI/Waste, Quality/Cost). Use enhanced placeholder style (`.icon-placeholder-enhanced`).
        *   **Text Wrapper `div`:**
            *   **Lead-in `strong` Style:** `display: block; font-weight: var(--font-weight-semibold); color: var(--color-text-dark); font-size: 18px; margin-bottom: var(--space-xs);`. (e.g., **Strategic Liability:**)
            *   **Text `p` Style:** `font-size: var(--font-size-body); color: var(--color-text-medium); line-height: var(--line-height-body); margin: 0;`.
                *   `<!-- Emphasis Note: Apply Inter SemiBold 600, color #011627 to: 'strategic liability', 'significant', 'undermined by low adoption or ineffective use', '[X]% unnecessary cost' -->`

**(C. Our Solution Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-light)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Elevate: Bespoke Training...)**: Style per global spec. Margin-bottom: `var(--space-xs)`.
    *   **H3 (Powered by Expertise...)**: Style: `font-size: 20px; font-weight: var(--font-weight-medium); color: var(--color-text-medium); margin-bottom: var(--space-xl);`.
    *   **Unique Approach Section:**
        *   **Layout:** CSS Grid: `display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg);` (Desktop > 992px), `grid-template-columns: 1fr;` (Mobile < 768px).
        *   **Item Structure (Mandate Card Style):**
            *   **Container `div` Style:** `text-align: center; background-color: var(--color-bg-light); padding: var(--space-md); border: 1px solid var(--color-border-light); border-radius: var(--border-radius); box-shadow: var(--box-shadow-subtle); transition: transform var(--transition-default), box-shadow var(--transition-default);`.
            *   **Hover Style:** `:hover { transform: translateY(-4px); box-shadow: var(--box-shadow-hover); }`.
            *   **Icon Wrapper `div` Style:** `margin: 0 auto var(--space-sm) auto;`. Icon: 24x24px Blue line icon (AI/Brain, Target/Customize, Person/Expert, Tools/Hands-On, Checkmark/Science). Use enhanced placeholder style (`.icon-placeholder-enhanced.small`).
            *   **Title `strong` Style:** `font-weight: var(--font-weight-semibold); display: block; margin-bottom: var(--space-xs); font-size: 18px; color: var(--color-text-dark);`.
            *   **Description `p` Style:** `font-size: var(--font-size-small); color: var(--color-text-medium); margin: 0;`.
    *   **Capabilities Section:** Margin-top: `var(--space-xxl)`.
        *   **Sub-heading H3 Style:** Building Critical Next-Gen TA Capabilities. Margin-bottom: `var(--space-md)`.
        *   **Accordion Implementation:** Use `<details>`/`<summary>` structure.
            *   **`details` Style:** `border-bottom: 1px solid var(--color-border-light); margin-bottom: var(--space-xs);`. `:last-of-type { border-bottom: none; }`.
            *   **`summary` Style:** `padding: var(--space-sm) 0; font-size: 18px; font-weight: var(--font-weight-semibold); color: var(--color-text-dark); cursor: pointer; list-style: none; position: relative; padding-right: var(--space-lg); transition: color var(--transition-default);`. `::-webkit-details-marker { display: none; }`.
            *   **Accordion Icon `summary::after` Style:** `content: '+'; position: absolute; right: 0; top: 50%; transform: translateY(-50%) rotate(0deg); font-size: 24px; font-weight: 300; color: var(--color-blue); transition: transform var(--transition-default);`.
            *   **Open State `details[open] summary::after` Style:** `transform: translateY(-50%) rotate(45deg);`. `details[open] summary { color: var(--color-blue); }`.
            *   **Panel `.accordion-content` Style:** `padding: var(--space-xs) 0 var(--space-md) var(--space-lg);`.
            *   **Panel Text `p` Style:** Body text style.
            *   **Topics List `ul` Style:** `padding-left: var(--space-sm); margin-top: var(--space-xs); color: var(--color-text-medium); font-size: var(--font-size-small); list-style-type: disc;`. `li { margin-bottom: var(--space-xs); }`.

**(D. Key Benefits & Use Cases Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-light)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Achieve Measurable Performance...)**: Style per global spec. Margin-bottom: `var(--space-xl)`.
    *   **Benefits Layout:** CSS Grid: `display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-xl) var(--space-lg);` (Desktop > 992px), `grid-template-columns: 1fr;` (Mobile < 768px).
    *   **Benefit Item Structure:**
        *   **Icon Wrapper `div` Style:** `margin-bottom: var(--space-sm);`. Icon: 32x32px Blue line icon (Complexity/Target, Productivity/Graph, Quality/Medal, Sustainability/Future). Use enhanced placeholder style.
        *   **Heading H3 Style:** Margin-bottom: `var(--space-xs)`.
        *   **Description `p`:** Body Text style.
            *   `<!-- Emphasis Note: Apply Inter SemiBold 600, color #011627 to quantified outcomes: 'measurably reducing Time-to-Fill...', 'boost quality placements per recruiter...', 'higher first-year retention...', 'reduces long-term agency dependency', 'strategically leverage AI' -->`

**(E. Differentiation Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-subtle)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Why Elevate Builds Real...)**: Style per global spec. Margin-bottom: `var(--space-xl)`.
    *   **Differentiator List Style:** Ordered list (`<ol>`) with custom counter and styled pseudo-elements for numbers per Brand Guide V2.1 / Accelerate V3 Spec.
    *   **List Item `li` Style:** `position: relative; padding-left: 56px; margin-bottom: var(--space-lg);`.
    *   **Number `li::before` Style:** Styled blue gradient circle with number.
    *   **List Item Content Structure:**
        *   **Title `strong` Style:** `font-weight: var(--font-weight-bold); font-size: 18px; display: block; margin-bottom: var(--space-xs); color: var(--color-text-dark);`.
        *   **Description `p`:** Body Text style.
            *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to contrast points: 'applying advanced skills...', 'your actual business context', 'your specific challenges...', 'ensure skills stick', 'demonstrable, long-term performance improvement', 'Illuminate', 'Innovate' -->`

**(F. Meet the Expert / Program Details Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-light)`. Padding: `var(--space-xxl)` top/bottom. 2-column layout (Desktop > 992px), stacking on mobile. Grid gap: `var(--space-xl)`. Align items start.
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Meet Your Expert Trainer...)**: Style per global spec. Apply to wrapper div or place above grid: `grid-column: 1 / -1; margin-bottom: var(--space-xl);`.
    *   **Column 1 (Left - Adam's Bio):**
        *   **Image Placeholder:** Style: `div` with `width: 180px; height: 180px; border-radius: 50%; background-color: #ccc; display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-sm); color: #666; font-size: 12px; box-shadow: var(--box-shadow-subtle);` (Center align on mobile).
        *   **Name (H3 Style):** Adam Kovacs, Founder. Margin-bottom: `var(--space-xs)`.
        *   **Bio Bullets `ul` Style:** `list-style: disc; padding-left: var(--space-md); margin: 0;`. `li` style: `margin-bottom: var(--space-xs);`. Body text style.
            *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to numbers/key achievements: 'over 950 recruiters', 'Amazon/AWS', 'AWS Talent Intelligence function', 'international speaker' -->`
    *   **Column 2 (Right - Program Details):**
        *   **Heading (H3 Style):** Your Custom Elevate Program. Margin-bottom: `var(--space-sm)`.
        *   **Detail Points Grid:** Use CSS Grid: `display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-md);` (Desktop > 768px), `grid-template-columns: 1fr;` (Mobile < 768px).
        *   **Detail Point `p` Style:** Body text style. `margin: 0;`.

**(G. Final CTA Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-dark)`. Padding: `var(--space-xxxl)` top/bottom. Centered content.
*   **Content:** Centered within `div.container`.
    *   **H2 (Build Your AI-Ready...)**: Style per global spec, Color: `var(--color-text-light)`. Margin-bottom: `var(--space-sm)`.
    *   **Reinforcing Statement (Invest in the strategic...)**: Style: `font-size: var(--font-size-body); color: var(--color-blue-lighter); line-height: var(--line-height-body); margin-bottom: var(--space-lg); max-width: 600px; margin-left: auto; margin-right: auto;`.
    *   **Primary CTA Button (Request Your Capability...)**: `.btn .btn-primary` style.
    *   **Secondary CTA Links Wrapper `div` Style:** `margin-top: var(--space-md);`.
        *   **Links `a` Style:** Style as text links, Color: `var(--color-text-light)`, Font: Inter Medium 500, 16px. Margin: `0 var(--space-xs)`. Underline on hover. Display inline-block.

**III. Assets Required**

*   **Hero Background Graphic:** SVG abstract vector (Specs: Brand Colors, suggest learning/growth/AI).
*   **Icon Set:** Consistent Line Icons (Source: **[Specified Library - e.g., Remix Icon]**, Style: 2px stroke, Color: `#02a7e1`). Specific icons needed:
    *   Problem: Liability/Shield-Broken, AI/Competitor, ROI/Waste, Quality/Cost.
    *   Solution Approach: AI/Brain, Target/Customize, Person/Expert, Tools/Hands-On, Checkmark/Science.
    *   Benefits: Complexity/Target, Productivity/Graph, Quality/Medal, Sustainability/Future.
    *   Accordion: Expand/Collapse chevron icons (or use '+').
*   **Adam Kovacs Headshot:** Professional, high-resolution.
*   **Font Files:** Ensure **Inter** font family is loaded correctly.

**IV. Developer Implementation Notes**

*   Implement using semantic HTML5 (H1-H3, p, ul, ol, li, details, summary, button, a).
*   Use CSS variables for Brand Guide V2.1 styles.
*   Ensure WCAG AA accessibility (contrast, focus states, semantic structure, accordion keyboard navigation).
*   Implement lazy loading. Optimize assets. Validate code. Test responsiveness.
*   Implement GA4 event tracking for Primary CTA button, Download link, potentially accordion interactions.
*   Prioritize Core Web Vitals.
*   **Emphasis Note:** Use `<strong>` or appropriate classes (`.font-semibold .text-dark`) for terms marked for **Inter SemiBold 600** emphasis.

---

This V2 Elevate UI/UX specification provides the explicit, detailed instructions matching the standard set for the other pages, ensuring consistency and clarity for development.