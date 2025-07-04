# **Project:** The Talent Foundation Website - Illuminate Service Page Design

**Goal:** Define the precise visual layout, styling, and interactions for the Illuminate service page with maximum deterministic detail, ensuring consistency with benchmark pages and brand standards for direct implementation.

**I. Global Styles & Principles (Reference Brand Guide)**

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
*   **Iconography:** **Line icons**, **2px stroke width**, Color: `#02a7e1` (Blue). Source: **[Specify ONE Library - e.g., Remix Icon]**.
*   **Responsiveness:** Mobile-first construction.

**II. Section-by-Section UI/UX Implementation (Explicit Detail)**

**(A. Hero Section)**

*   **Layout:** Full-width banner. Padding: 64px top/bottom (`var(--space-xxl)`).
*   **Background:** High-quality abstract vector graphic (SVG). Use Brand Colors (esp. Blue `#02a7e1`, subtle greys/whites) suggesting clarity from data, foresight. High text contrast required.
*   **Content:** Left-aligned within `div.container`.
    *   **H1 (Illuminate: Actionable...)**: Style: `font-size: var(--font-size-h1); font-weight: var(--font-weight-bold); color: var(--color-text-dark); line-height: var(--line-height-heading); margin-bottom: var(--space-sm);`.
    *   **Sub-headline (Stop guessing...)**: Style: `font-size: var(--font-size-body-large); font-weight: var(--font-weight-regular); color: var(--color-text-dark); line-height: var(--line-height-body); margin-bottom: var(--space-lg); max-width: 650px;`.
        *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'expert analysis and synthesis' -->`
    *   **Primary CTA Button (Discuss Your...)**: Style: `.btn .btn-primary`.
    *   **Secondary CTA Button (Explore Our Full...)**: Style: `.btn .btn-secondary`. Apply `margin-top: var(--space-sm);`.

**(B. The Problem Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-subtle)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Operating Blind?...)**: Style: `font-size: var(--font-size-h2); font-weight: var(--font-weight-bold); color: var(--color-text-dark); line-height: var(--line-height-heading); margin-bottom: var(--space-xl);`.
    *   **Pain Point Blocks Layout:** CSS Grid: `display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-lg);` (Desktop > 992px), `grid-template-columns: 1fr;` (Mobile < 768px).
    *   **Pain Point Block Structure (Each Item):**
        *   **Container `div` Style:** `display: flex; align-items: flex-start; background-color: var(--color-bg-light); padding: var(--space-md); border: 1px solid var(--color-border-light); border-radius: var(--border-radius); box-shadow: var(--box-shadow-subtle); transition: transform var(--transition-default), box-shadow var(--transition-default);`.
        *   **Hover Style:** `:hover { transform: translateY(-4px); box-shadow: var(--box-shadow-hover); }`.
        *   **Icon Wrapper `div` Style:** `flex-shrink: 0; margin-right: var(--space-sm); margin-top: 4px;`
            *   **Icon:** 32x32px Blue (`#02a7e1`) line icon (Map/Fog, Attrition/Door, Competitor/Binoculars, Misfit/Puzzle).
        *   **Text Wrapper `div`:**
            *   **Lead-in `strong` Style:** `display: block; font-weight: var(--font-weight-semibold); color: var(--color-text-dark); font-size: 18px; margin-bottom: var(--space-xs);`. (e.g., **Expansion Risk:**)
            *   **Text `p` Style:** `font-size: var(--font-size-body); color: var(--color-text-medium); line-height: var(--line-height-body); margin: 0;`.
                *   `<!-- Emphasis Note: Apply Inter SemiBold 600, color #011627 to: '[$X Million]', '[Y%] turnover', 'hard data' -->`

**(C. Our Solution Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-light)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Illuminate: Actionable...)**: Style per global spec. Margin-bottom: `var(--space-sm)`.
    *   **Intro Text (We deliver targeted...)**: Style: `font-size: var(--font-size-body); color: var(--color-text-dark); margin-bottom: var(--space-lg);`.
    *   **Deliverables Section:** Use H3 + Italic + Description blocks.
        *   **H3 (Talent Market Mapping etc.)**: Style: `font-size: var(--font-size-h3); font-weight: var(--font-weight-semibold); color: var(--color-text-dark); line-height: var(--line-height-heading); margin-bottom: var(--space-xs);`.
        *   **Italic Question (_Find answers to..._)**: Style: `font-style: italic; font-size: var(--font-size-body); color: var(--color-text-medium); margin-bottom: var(--space-xs); display: block;`.
        *   **Description `p`**: Style: `font-size: var(--font-size-body); color: var(--color-text-medium); line-height: var(--line-height-body); margin-bottom: var(--space-md);`.
    *   **Methodology Clarity Section:** Margin-top: `var(--space-xl)`.
        *   **Container `div` Style (Style C):** `background-color: var(--color-bg-subtle); border: none; padding: var(--space-md); border-radius: var(--border-radius);`.
        *   **Heading (H3 Style):** Our Rigorous Methodology. Margin-bottom: `var(--space-sm)`.
        *   **Text `p`:** Body Text style.
            *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'multi-source data aggregation', 'advanced analytical techniques', 'AI-augmented analysis', 'synthesis and strategic interpretation by seasoned TA experts' -->`

**(D. Key Benefits & Use Cases Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-light)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Drive Strategy & Mitigate...)**: Style per global spec. Margin-bottom: `var(--space-xl)`.
    *   **Benefits Layout:** CSS Grid: `display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-xl) var(--space-lg);` (Desktop > 992px), `grid-template-columns: 1fr;` (Mobile < 768px).
    *   **Benefit Item Structure:**
        *   **Icon Wrapper `div` Style:** `margin-bottom: var(--space-sm);`
            *   **Icon:** 32x32px Blue line icon (Risk/Shield, Advantage/Trophy, Cost/Optimize, Future/Binoculars).
        *   **Heading H3 Style:** `font-size: var(--font-size-h3); font-weight: var(--font-weight-semibold); color: var(--color-text-dark); margin-bottom: var(--space-xs);`.
        *   **Description `p`:** Body Text style.
            *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'Avoid costly strategic mistakes...', 'credible, actionable market data' -->`

**(E. Differentiation Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-subtle)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Why Illuminate Delivers...)**: Style per global spec. Margin-bottom: `var(--space-xl)`.
    *   **Differentiator List Style:** Ordered list (`<ol>`) with custom counter and styled pseudo-elements for numbers.
        *   **List `ol` Style:** `list-style: none; padding: 0; counter-reset: diff-counter;`.
        *   **List Item `li` Style:** `position: relative; padding-left: 56px; margin-bottom: var(--space-lg);`.
        *   **Number `li::before` Style:** `content: counter(diff-counter); counter-increment: diff-counter; position: absolute; left: 0; top: -4px; font-size: 20px; font-weight: var(--font-weight-bold); color: var(--color-text-light); background: linear-gradient(135deg, var(--color-blue-lighter), var(--color-blue)); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; line-height: 1; box-shadow: 0 2px 4px rgba(2, 167, 225, 0.3);`.
    *   **List Item Content Structure:**
        *   **Title `strong` Style:** `font-weight: var(--font-weight-bold); font-size: 18px; display: block; margin-bottom: var(--space-xs); color: var(--color-text-dark);`. (e.g., **Synthesis, Not Just Data:**)
        *   **Description `p`:** Body Text style.
            *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'expertly synthesized intelligence', 'grounded in operational reality', 'Innovate', 'Elevate', 'Accelerate', 'anticipatory insights' -->`

**(F. The Deliverable Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-light)`. Padding: `var(--space-xxl)` top/bottom. Consider 2-col layout: Text left, Visual right (stack on mobile).
*   **Content:** Left-aligned within `div.container`.
    *   **H2 (Your Strategic Intelligence Compass)**: Style per global spec. Margin-bottom: `var(--space-sm)`.
    *   **Deliverable Description Block:**
        *   **Container `div` Style (Style B):** `background-color: var(--color-bg-subtle); border: 1px solid var(--color-blue-lighter); padding: var(--space-md); border-radius: var(--border-radius);`.
        *   **Heading (H3 or Strong inside P):** "**Strategic Intelligence Compass**" Style: `font-weight: var(--font-weight-bold); font-size: 18px; display: block; margin-bottom: var(--space-xs); color: var(--color-text-dark);`.
        *   **Text `p`:** Body Text style.
            *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'comprehensive, confidential', 'clear, actionable recommendations', 'powerful decision-support tool', 'crucial foundation for effective action', 'Innovate', 'Elevate', 'Accelerate' -->`
    *   **(Visual Placeholder):** Position adjacent/below description box. Style: `img` or `div` with appropriate dimensions and placeholder style (e.g., border, background indicating image area).

**(G. Final CTA Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-dark)`. Padding: `var(--space-xxxl)` top/bottom. Centered content.
*   **Content:** Centered within `div.container`.
    *   **H2 (Make Your Next...)**: Style per global spec, Color: `var(--color-text-light)`. Margin-bottom: `var(--space-sm)`.
    *   **Reinforcing Statement (Stop operating...)**: Style: `font-size: var(--font-size-body); color: var(--color-blue-lighter); line-height: var(--line-height-body); margin-bottom: var(--space-lg); max-width: 600px; margin-left: auto; margin-right: auto;`.
    *   **Primary CTA Button (Request an Illuminate...)**: `.btn .btn-primary` style.
    *   **Secondary CTA Links Wrapper `div` Style:** `margin-top: var(--space-md);`.
        *   **Links `a` Style:** Style as text links, Color: `var(--color-text-light)`, Font: Inter Medium 500, 16px. Margin: `0 var(--space-xs)`. Underline on hover.

**III. Assets Required**

*   **Hero Background Graphic:** SVG abstract vector (Specs: Brand Colors, suggest clarity from data, foresight).
*   **Icon Set:** Consistent Line Icons (Source: **[Specified Library - e.g., Remix Icon]**, Style: 2px stroke, Color: `#02a7e1`). Specific icons needed:
    *   Problem: Map/Fog, Attrition/Door, Competitor/Binoculars, Misfit/Puzzle.
    *   Benefits: Risk/Shield, Advantage/Trophy, Cost/Optimize, Future/Binoculars.
    *   (Optional) Methodology: Small icons for DT/FP if used.
*   **Deliverable Visual:** Professional graphic representing the "Strategic Intelligence Compass".
*   **Font Files:** Ensure **Inter** font family (weights 400, 500, 600, 700, Italic) is loaded correctly.

**IV. Developer Implementation Notes**

*   Implement using semantic HTML5. Use CSS variables for Brand Guide styles.
*   Ensure WCAG AA accessibility (contrast, focus states, semantic structure). Check contrast ratios, especially for medium text (`#4a5568`).
*   Implement lazy loading for images/graphics. Optimize assets. Validate code. Test responsiveness.
*   Implement GA4 event tracking precisely for Primary CTA button and Download link.
*   Prioritize Core Web Vitals.
*   Use `<strong>` or appropriate classes for **Inter SemiBold 600** emphasis as noted in comments.

---

