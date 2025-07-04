
# **Project:** The Talent Foundation Website - Who We Serve Page Design 

**Goal:** Define the precise visual layout, styling, and interactions for the Who We Serve page, ensuring alignment with brand standards, strategic messaging (specialized focus, ICP understanding, expert solutions), and conversion goals for direct implementation.

**I. Global Styles & Principles (Reference Brand Guide V2.1)**

*   **Layout Framework:** 12-column grid, max content width ~1140px.
*   **Spacing:** Consistent 8px increments (`var(--space-xs)` to `var(--space-xxxl)`). Generous whitespace.
*   **Typography:**
    *   Font Family: **Inter** (from Google Fonts).
    *   Weights: Regular (400), Medium (500 - Links), SemiBold (600 - H3/Buttons/Emphasis), Bold (700 - H1/H2), Italic (400 Italic).
    *   Web Sizes: H1=48px, H2=36px, H3=24px, Body=16px, Large Body=18px, Small=14px.
    *   Line Height: 1.6 for Body Text.
    *   Alignment: **Left-align** default.
*   **Color Palette (From Brand Guide V2.1):** Use defined CSS variables (`--color-orange`, `--color-blue`, etc.).
*   **Buttons:** Defined styles for Primary (Orange Solid) & Secondary (Blue Outline/Text Link) including hover/focus states. Padding: 12px 24px. Radius: 4px. Text: Inter SemiBold 16px.
*   **Iconography:** **Line icons**, **2px stroke width**, Color: `#02a7e1` (Blue). Source: **[Specify ONE Library - e.g., Remix Icon / Feather Icons - Decision Required]**.
*   **Responsiveness:** Mobile-first construction.

**II. Section-by-Section UI/UX Implementation (Explicit Detail - V2 Revision with Enhancement)**

**(A. Hero Section)**

*   **Layout:** Full-width banner. Padding: `var(--space-xxl)` top/bottom (64px).
*   **Background:** High-quality abstract vector graphic (SVG) suggesting targeted expertise or navigating complex landscapes (e.g., focused light beam, map highlights). Use Brand Colors (esp. Blue accents on a subtle light base like `--color-bg-light` or `--color-blue-lightest`). Ensure high text contrast.
*   **Content:** Left-aligned within `div.container`.
    *   **H1 (Who We Serve: Focused...)**: Style: `font-size: var(--font-size-h1); font-weight: var(--font-weight-bold); color: var(--color-text-dark); line-height: var(--line-height-heading); margin-bottom: var(--space-sm); max-width: 800px;`.
    *   **Sub-headline (We partner exclusively...)**: Style: `font-size: var(--font-size-body-large); font-weight: var(--font-weight-regular); color: var(--color-text-dark); line-height: var(--line-height-body); margin-bottom: 0; max-width: 700px;`.
        *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'complex talent demands', 'tailored solutions where generic approaches fall short.' -->`

**(B. Our Focus ("The Strategic Advantage of Specialization") Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-subtle)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Centered within `div.container`. Text-align: center. Max-width: 800px.
    *   **H2 (The Strategic Advantage...)**: Style: `font-size: var(--font-size-h2); font-weight: var(--font-weight-bold); color: var(--color-text-dark); line-height: var(--line-height-heading); margin-bottom: var(--space-sm);`.
    *   **Text Paragraph (Standard talent acquisition...)**: Style: `font-size: var(--font-size-body); color: var(--color-text-dark); line-height: var(--line-height-body); margin-bottom: var(--space-sm);`.
    *   **Text Paragraph (Our deep focus...)**: Style: `font-size: var(--font-size-body); color: var(--color-text-dark); line-height: var(--line-height-body); margin-bottom: 0;`.
        *   `<!-- Emphasis Note: Apply Inter SemiBold 600, color #011627 to: 'unmatched pattern recognition', 'more relevant benchmarks', 'faster diagnostics', 'highly effective, tailored solutions', 'lower risk, faster and more predictable results', 'significantly higher ROI' -->`

**(C. Our Areas of Deep Expertise (ICP Summaries) Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-light)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Within `div.container`.
    *   **H2 (Our Areas of Deep Expertise...)**: Style per global spec. `text-align: center; margin-bottom: var(--space-xl);`.
    *   **ICP Grid Layout:** CSS Grid: `display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-lg);` (Desktop > 992px), `grid-template-columns: 1fr;` (Mobile < 768px).
    *   **ICP Block Structure (Each Item - Mandate Card Style with Visual):**
        *   **Container `div` Style:** `display: flex; flex-direction: column; background-color: var(--color-bg-light); padding: var(--space-lg); border: 1px solid var(--color-border-light); border-radius: var(--border-radius); box-shadow: var(--box-shadow-subtle); transition: transform var(--transition-default), box-shadow var(--transition-default);`.
        *   **Hover Style:** `:hover { transform: translateY(-4px); box-shadow: var(--box-shadow-hover); }`.
        *   **Visual Placeholder Wrapper `div` Style:** `width: 100%; height: 180px; /* Or aspect-ratio */ background-color: #eee; border: 1px dashed var(--color-border-light); display: flex; align-items: center; justify-content: center; color: #999; font-size: 12px; text-align: center; padding: 10px; border-radius: var(--border-radius); margin-bottom: var(--space-md);`. Text: "[Placeholder: Visual representing ICP outcome (e.g., Reduced TtF Graph)]".
        *   **Headline `h3` Style:** `font-size: var(--font-size-h3); font-weight: var(--font-weight-semibold); color: var(--color-text-dark); margin: 0 0 var(--space-sm) 0;`. (e.g., Solving Specialized Talent Velocity (ICP #1))
        *   **VoC Intro (`blockquote` or styled `p`):** Style using `blockquote`: `font-style: italic; font-size: var(--font-size-body); color: var(--color-text-medium); border-left: 3px solid var(--color-blue-lighter); padding-left: var(--space-sm); margin: 0 0 var(--space-sm) 0;`.
        *   **Description `p` Style:** `font-size: var(--font-size-body); color: var(--color-text-medium); line-height: var(--line-height-body); margin-bottom: var(--space-sm); flex-grow: 1; /* Pushes link down */`.
        *   **TF Value `p` Style:** `font-size: var(--font-size-body); color: var(--color-text-dark); line-height: var(--line-height-body); margin-bottom: var(--space-md);`. Lead with `<strong>Our Focused Value:</strong> `.
            *   `<!-- Emphasis Note: Apply Inter SemiBold 600, color #011627 to Pillar Names (Illuminate, Innovate, Elevate, Accelerate) mentioned here. -->`
        *   **Next Step Link Wrapper `div` Style:** `margin-top: auto; /* Pushes to bottom */ padding-top: var(--space-sm); border-top: 1px solid var(--color-border-light);`.
        *   **Next Step Link `a` Style:** Style as a text link with an arrow icon. `display: inline-flex; align-items: center; font-family: var(--font-family-base); font-size: var(--font-size-body); font-weight: var(--font-weight-medium); color: var(--color-blue); text-decoration: none; transition: color var(--transition-default);`. Icon: Arrow-right line icon, 16x16px, `margin-left: var(--space-xs);`. Use enhanced placeholder style (`.icon-placeholder-enhanced.inline-small`).
            *   **Hover/Focus Style:** `:hover, :focus { color: var(--color-orange); outline: none; }`.

**(D. Maximizing Value Through Partnership Section - Enhanced with Icons)**

*   **Layout:** Full-width. Background: `var(--color-bg-subtle)`. Padding: `var(--space-xxl)` top/bottom.
*   **Content:** Left-aligned within `div.container`. Max-width 800px.
    *   **H2 (Our Enablement Approach...)**: Style per global spec. Margin-bottom: `var(--space-sm)`.
    *   **Intro Text (Our collaborative...)**: Style: `font-size: var(--font-size-body); color: var(--color-text-dark); margin-bottom: var(--space-lg);`.
    *   **Factors List:** Standard `<ul>`. `list-style: none; padding-left: 0; margin-bottom: 0;`.
        *   **List Item `li` Style:** `display: flex; align-items: flex-start; margin-bottom: var(--space-md);` Body text style (`color: var(--color-text-medium);`).
        *   **Icon Wrapper `div` Style:** `flex-shrink: 0; margin-right: var(--space-sm); margin-top: 2px; /* Align icon slightly */`. Icon: 20x20px Blue (`#02a7e1`) line icon (Target/Mandate, Handshake/Commitment, Bulb/Data, Graph/Results). Use enhanced placeholder style (`.icon-placeholder-enhanced.small`).
        *   **Text Wrapper `div`:** Body text style (`color: var(--color-text-medium);`).
            *   `<!-- Emphasis Note: Apply Inter SemiBold 600, color #011627 to the start of each factor: 'A Clear Mandate...', 'Leadership Commitment...', 'Openness to Data-Driven...', 'A Focus on Long-Term...' -->`

**(E. Ensuring the Right Fit Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-light)`. Padding: `var(--space-xl)` top/bottom.
*   **Content:** Centered within `div.container`. Text-align: center. Max-width: 700px.
    *   **UI Style (Optional Simple Callout):** Consider a subtle container: `padding: var(--space-md); border: 1px solid var(--color-border-light); border-radius: var(--border-radius);`.
    *   **Heading (Optional H3 or just P):** Style: `font-size: 18px; font-weight: var(--font-weight-semibold); color: var(--color-text-dark); margin-bottom: var(--space-xs);`. Text: Ensuring the Right Fit.
    *   **Text `p` Style:** `font-size: var(--font-size-body); color: var(--color-text-medium); line-height: var(--line-height-body); margin: 0;`.
        *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'committed to transparency' -->`

**(F. Final CTA Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-dark)`. Padding: `var(--space-xxxl)` top/bottom. Centered content.
*   **Content:** Centered within `div.container`.
    *   **H2 (Ready to Tackle...)**: Style per global spec, Color: `var(--color-text-light)`. Margin-bottom: `var(--space-sm)`.
    *   **Reinforcing Statement (If your situation...)**: Style: `font-size: var(--font-size-body); color: var(--color-blue-lighter); line-height: var(--line-height-body); margin-bottom: var(--space-lg); max-width: 650px; margin-left: auto; margin-right: auto;`.
    *   **Primary CTA Button (Discuss Your Specific Challenge)**: `.btn .btn-primary` style. Margin-bottom: `var(--space-md)`.
    *   **Secondary CTA Links Wrapper `div` Style:** `display: flex; flex-wrap: wrap; justify-content: center; gap: var(--space-md);`.
    *   **Secondary Links `a` Style:** Styled text links. `font-family: var(--font-family-base); font-size: var(--font-size-body); font-weight: var(--font-weight-medium); color: var(--color-text-light); text-decoration: none; border-bottom: 1px solid var(--color-blue-lighter); padding-bottom: 2px; transition: color var(--transition-default), border-color var(--transition-default);`.
        *   **Hover/Focus Style:** `:hover, :focus { color: var(--color-orange); border-color: var(--color-orange); outline: none; }`.

**III. Assets Required**

*   **Hero Background Graphic:** SVG abstract vector (Specs: Brand Colors, targeted expertise/navigation focus).
*   **ICP Visual Placeholders:** **Define requirements for 7 distinct visuals** (graphs, diagrams, icons) representing outcomes for each ICP. **Crucially, these visuals must share a consistent theme/style** (e.g., all data visualization, all abstract metaphor) to ensure visual coherence in the grid.
*   **Icon Set:** Consistent Line Icons (Source: **[Specified Library - e.g., Remix Icon]**, Style: 2px stroke, Color: `#02a7e1`). Specific icons needed:
    *   Challenge Section: Bottleneck/Link-Broken, Waste/Money-Stack, Risk/Warning-Triangle.
    *   ICP Section: Arrow-right icon for links.
    *   **Partnership Section:** Target/Mandate, Handshake/Commitment, Bulb/Data, Graph/Results (or similar concepts).
*   **Font Files:** Ensure **Inter** font family (weights 400, 500, 600, 700, Italic) is loaded correctly.

**IV. Developer Implementation Notes**

*   Implement using semantic HTML5 (H1, H2, H3, p, blockquote, ul, li, a, button). Use CSS variables for Brand Guide V2.1 styles.
*   Ensure WCAG AA accessibility (contrast, focus states, semantic structure).
*   Implement lazy loading for images/graphics, especially the ICP visuals. Optimize all assets. Validate code. Test responsiveness thoroughly, especially the 2-column ICP grid.
*   Implement GA4 event tracking precisely for the Primary CTA button and **each specific 'Next Step' link** within the ICP blocks.
*   Prioritize Core Web Vitals.
*   Use `<strong>` or appropriate classes for **Inter SemiBold 600** emphasis as noted in comments, ensuring correct color (`#011627`).
*   **ICP Visual Consistency:** Developer should coordinate closely with design/content to ensure the 7 ICP visuals implemented adhere to a consistent visual theme/style as defined by the design team.

---

