Okay, I've incorporated **all** the recommended enhancements, both the significant ones (embedded scheduler, founder photo) and the marginal ones (icons for reassurance links, slightly further de-emphasized direct contact info).

Here is the final, complete UI Design specification (V3 - Enhanced) for the "Contact Us" page, incorporating all changes for maximum potential impact and refinement:

---

# **Project:** The Talent Foundation Website - Contact Us Page Design (**V3 - Enhanced**)

**Goal:** Define the precise visual layout, styling, and interactions for the Contact Us page, ensuring alignment with brand standards, strategic messaging (solution-oriented, frictionless contact), optimal conversion flow, and direct implementation readiness.

**I. Global Styles & Principles (Reference Brand Guide V2.1)**

*   **Layout Framework:** 12-column grid, max content width ~1140px.
*   **Spacing:** Consistent 8px increments (`var(--space-xs)` to `var(--space-xxxl)`). Generous whitespace.
*   **Typography:**
    *   Font Family: **Inter** (from Google Fonts).
    *   Weights: Regular (400), Medium (500 - Links), SemiBold (600 - H3/Buttons/Emphasis), Bold (700 - H1/H2).
    *   Web Sizes: H1=48px, H2=36px, H3=24px, Body=16px, Large Body=18px, Small=14px.
    *   Line Height: 1.6 for Body Text.
    *   Alignment: **Left-align** default.
*   **Color Palette (From Brand Guide V2.1):** Use defined CSS variables (`--color-orange`, `--color-blue`, etc.).
*   **Buttons:** Defined styles for Primary (Orange Solid) & Secondary (Blue Outline/Text Link) including hover/focus states. Padding: 12px 24px. Radius: 4px. Text: Inter SemiBold 16px.
*   **Iconography:** **Line icons**, **2px stroke width**, Color: `#02a7e1` (Blue). Source: **[Specify ONE Library - e.g., Remix Icon / Feather Icons - Decision Required]**.
*   **Responsiveness:** Mobile-first construction.
*   **Forms:** Input fields style: `padding: 10px 12px; border: 1px solid var(--color-border-light); border-radius: var(--border-radius); font-size: var(--font-size-body); color: var(--color-text-dark); background-color: var(--color-bg-light); width: 100%;`. `:focus` state: `outline: none; border-color: var(--color-blue); box-shadow: 0 0 0 2px rgba(2, 167, 225, 0.2);`. Labels above inputs, standard body text style. Required fields marked visually. Checkbox style standard, aligned with label.

**II. Section-by-Section UI/UX Implementation (Explicit Detail - V3 Enhanced)**

**(A. Header Section)**

*   **Layout:** Full-width. Background: `var(--color-bg-light)`. Padding: `var(--space-xxl)` top/bottom (64px).
*   **Content:** Left-aligned within `div.container`. Max-width: 800px.
    *   **H1 (Let's Solve Your...)**: Style: `font-size: var(--font-size-h1); font-weight: var(--font-weight-bold); color: var(--color-text-dark); line-height: var(--line-height-heading); margin-bottom: var(--space-sm);`.
    *   **Intro Text (Ready to transform...)**: Style: `font-size: var(--font-size-body-large); font-weight: var(--font-weight-regular); color: var(--color-text-dark); line-height: var(--line-height-body); margin-bottom: 0;`.
        *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'strategic advantage', 'high-stakes, complex talent challenges', 'typically respond within one business day.' -->`

**(B. Subtle Value Reinforcement & Reassurance Section - Enhanced with Icons)**

*   **Layout:** Full-width. Background: `var(--color-bg-subtle)`. Padding: `var(--space-lg)` top/bottom (32px).
*   **Content:** Centered within `div.container`. Text-align: center. Max-width: 700px.
    *   **Value Statement `p` Style:** `font-size: var(--font-size-body); color: var(--color-text-dark); margin-bottom: var(--space-sm);`.
        *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'sustainable internal capability', 'lasting, predictable results.' -->`
    *   **Reassurance Links Wrapper `div` Style:** `font-size: var(--font-size-body); display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: var(--space-sm) var(--space-lg); /* Row and column gap */`.
        *   **Intro Text Span:** "Unsure where to start? " (Standard body text style, include within wrapper or just before).
        *   **Link Structure (Repeat for each link):** `<a>` tag styled as text link.
            *   **`a` Style:** `display: inline-flex; align-items: center; gap: var(--space-xs); font-weight: var(--font-weight-medium); color: var(--color-blue); text-decoration: underline; text-underline-offset: 2px; transition: color var(--transition-default);`.
            *   **Hover/Focus Style:** `:hover, :focus { color: var(--color-orange); outline: none; }`.
            *   **Icon:** 16x16px Blue (`#02a7e1`) line icon. Use enhanced placeholder style (`.icon-placeholder-enhanced.inline-small`). Icons: Who We Serve (Group/People), Explore Services (Gear/Services).
            *   **Link Text:** "Review Who We Serve" / "Explore Our Services".

**(C. Primary Contact Method: Discovery Call Scheduler - Enhanced Layout & Embedded Tool)**

*   **Layout:** Full-width. Background: `var(--color-bg-light)`. Padding: `var(--space-xxl)` top/bottom. **Design Note:** Make this section visually primary and distinct.
*   **Content:** Within `div.container`. Use a 2-column layout (Desktop > 992px): Text/Photo left (approx 40%), Embedded Scheduler right (approx 60%). Stacking on mobile (Text/Photo above Scheduler). Grid gap: `var(--space-xl)`. Align items start.
    *   **Column 1 (Left - Text & Photo):**
        *   **H2 (Schedule Your Complimentary...)**: Style: `font-size: var(--font-size-h2); font-weight: var(--font-weight-bold); color: var(--color-text-dark); line-height: var(--line-height-heading); margin-bottom: var(--space-xs);`.
        *   **Intro Text (The most effective way...)**: Style: `font-size: var(--font-size-body); color: var(--color-text-dark); margin-bottom: var(--space-sm);`.
        *   **Adam Kovacs Photo:** Style: `img` or `div`. `width: 80px; height: 80px; border-radius: 50%; background-color: #ccc; float: left; /* Or use flexbox/grid */ margin-right: var(--space-sm); margin-bottom: var(--space-xs); box-shadow: var(--box-shadow-subtle); object-fit: cover;`. Placeholder text: "[Adam Kovacs Photo]".
        *   **Value Prop Text (This 30-minute call...)**: Style: `font-size: var(--font-size-body); color: var(--color-text-medium); line-height: var(--line-height-body); margin-bottom: var(--space-lg);`. (**Ensure text flows correctly around/below photo**).
            *   `<!-- Emphasis Note: Apply Inter SemiBold 600 to: 'no-obligation, collaborative discussion', 'your first step towards achieving predictable talent results.' -->`
    *   **Column 2 (Right - Embedded Scheduler):**
        *   **Placeholder:** Style: `div`. `width: 100%; min-height: 400px; /* Adjust based on scheduler tool */ background-color: #eee; border: 1px solid var(--color-border-light); border-radius: var(--border-radius); display: flex; align-items: center; justify-content: center; color: #999; font-size: 14px;`. Text: "[Placeholder: Embedded Scheduling Tool (e.g., Calendly/SavvyCal iframe). Ensure styling integrates seamlessly if possible.]"
        *   **Developer Note:** Implement embed code provided by the chosen scheduling tool. Prioritize tools that allow some styling customization to match the TF brand. If embedding fails technically or aesthetically, revert to the prominent Button/Link style from the previous spec version linking out to the tool.

**(D. Secondary Contact Method: Optimized Inquiry Form - V3 Radically Simplified)**

*   **Layout:** Full-width. Background: `var(--color-bg-subtle)`. Padding: `var(--space-xl)` top/bottom.
*   **Content:** Left-aligned within `div.container`. Max-width: 600px.
    *   **H3 (Prefer to send...)**: Style: `font-size: var(--font-size-h3); font-weight: var(--font-weight-semibold); color: var(--color-text-dark); margin-bottom: var(--space-xs);`.
    *   **Intro Text (Use the simple form...)**: Style: `font-size: var(--font-size-body); color: var(--color-text-medium); margin-bottom: var(--space-lg);`.
    *   **Form Structure (`<form>`):**
        *   **Layout:** Vertical stacking for labels and inputs. `margin-bottom: var(--space-md);` between field groups.
        *   **Label Style:** Standard body text (`16px`), `font-weight: var(--font-weight-medium); color: var(--color-text-dark); display: block; margin-bottom: var(--space-xs);`. Append ` (Required)` or ` (Optional)` text, `font-size: var(--font-size-small); color: var(--color-text-medium);`.
        *   **Input Fields:** Apply global form input styles. Includes `input[type="text"]`, `input[type="email"]`, `textarea`. `textarea` style: `min-height: 100px; resize: vertical;`.
            *   Fields: Full Name (Required), Company Email (Required), Company Name (Optional), Your Title (Optional), How can we help? (Optional - Text Area).
        *   **Privacy Checkbox:** Standard checkbox input. Label style: `font-size: var(--font-size-small); color: var(--color-text-medium);`. Link to Privacy Policy styled as a standard text link within the label. `display: flex; align-items: center; gap: var(--space-xs);`.
        *   **Submit Button:** Style: `.btn .btn-secondary` (Blue outline button). `margin-top: var(--space-sm);`. Text: "Send Inquiry".

**(E. Direct Contact Information Section - De-emphasized)**

*   **Layout:** Full-width. Background: `var(--color-bg-light)`. Padding: `var(--space-md)` top/bottom. (**Reduced padding**).
*   **Content:** Centered within `div.container`. Text-align: center.
    *   **Wrapper `div` Style:** `display: inline-block; text-align: left; border-top: 1px solid var(--color-border-light); padding-top: var(--space-md);`. (**Added border for separation**).
    *   **Company Name:** `p` tag, `font-weight: var(--font-weight-semibold); font-size: var(--font-size-small); margin-bottom: var(--space-xs);`. (**Smaller font**).
    *   **Email:** `p` tag, `font-size: var(--font-size-small);`. Link (`mailto:`): standard blue text link, orange on hover. `margin-bottom: var(--space-xs);`.
    *   **Location:** `p` tag, `font-size: var(--font-size-small); color: var(--color-text-medium); margin-bottom: 0;`.

**(F. Map/Location Visual Section (Optional))**

*   **Layout:** If included, place minimally, perhaps below Section E or integrated subtly. Ensure it doesn't compete with primary CTAs.
*   **Content:** Embed interactive map or use a static image.
*   **Style:** Simple container, `border-radius: var(--border-radius); overflow: hidden;`.

**III. Assets Required**

*   **Adam Kovacs Headshot:** Professional, high-resolution (small version for Section C).
*   **Icon Set:** Consistent Line Icons (Source: **[Specified Library - e.g., Remix Icon]**, Style: 2px stroke, Color: `#02a7e1`). Specific icons needed:
    *   Reassurance Links: Group/People, Gear/Services.
*   **Font Files:** Ensure **Inter** font family is loaded correctly.
*   **(Optional) Map Image:** If using a static map.

**IV. Developer Implementation Notes**

*   Implement using semantic HTML5. Use CSS variables for Brand Guide V2.1 styles.
*   Ensure WCAG AA accessibility.
*   **Scheduler Embed:** Prioritize embedding the scheduling tool directly in Section C. Test thoroughly for usability, responsiveness, and visual integration. If embed is problematic, revert to the prominent `.btn .btn-primary` linking to the tool.
*   Validate HTML, CSS, and form submission. Test responsiveness extensively, especially the 2-column scheduler layout.
*   Implement GA4 event tracking precisely for:
    *   `discovery_call_scheduler_interaction` (Event if scheduler is embedded, track successful booking).
    *   `discovery_call_schedule_click` (Event if using button/link fallback).
    *   `contact_form_submitted`
    *   `reassurance_link_click` (with params)
    *   `email_link_click`
*   Prioritize Core Web Vitals.
*   Use `<strong>` or classes for **Inter SemiBold 600** emphasis.
*   Form Handling: Ensure simplified form submits correctly, includes validation, and displays clear success/error messages.

---