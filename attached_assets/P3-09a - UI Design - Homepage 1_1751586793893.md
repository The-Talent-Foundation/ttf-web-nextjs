# The Talent Foundation – Homepage UI/UX Design Specification

**Version:** v5 (final, build‑ready)  
**Date:** 2025‑05‑02

---

## 0. Purpose & Scope

A self‑contained blueprint that allows a front‑end developer to implement the homepage **without referencing external docs**. Includes visual hierarchy, motion, colors, spacing tokens, asset list, generation prompts, and accessibility criteria.

---

## 1. Global Foundations

|Token|Value|Notes|
|---|---|---|
|**Grid**|12‑column, max content‑width 1140 px|`@media (min‑width:1280px)` sticks content to 1140 px.|
|**Spacing Scale**|8 px step (`--space‑xs:4px` … `--space‑xxxl:64px`)|Use Tailwind `space‑y` utilities where possible.|
|**Font**|Inter variable|Load via `next/font`.|
|**Base Colors**|TF Orange `#e84e36`, TF Blue `#02a7e1`, Dark `#011627`, Light `#fffffc`, Gray `#f5f7f8`, Text `#1a1d21`|All other colors derived via 20 % tint/shade.|
|**Icon Set**|Remix Icon, 2 px stroke|Imported sprite trimmed to used icons.|
|**Accessibility**|WCAG 2.1 AA (focus states, contrast, keyboard nav)|Must pass Axe with **0 critical** issues.|
|**Performance**|LCP < 2.5 s, CLS < 0.1, FID < 100 ms|Inline critical CSS; hero SVG deferred.|

---

## 2. Hero (Above‑the‑Fold)

### 2.1 Visual Order (mobile → desktop)

1. **H1**
    
2. **Cost Line (Sub‑hero)**
    
3. **CTA Cluster**
    
4. **CTA Micro‑copy**
    
5. **Client Logo Strip**
    

> **Rationale:** CTA must stay adjacent to pain statement; logos reinforce credibility without displacing action.

### 2.2 Detailed Spec

|Element|CSS / Tailwind|Copy / Content|
|---|---|---|
|**Section Wrapper**|`.hero bg-[url('hero-bg.svg')] bg-no-repeat bg-cover py-xxl grid grid-cols-12 gap-lg`|Background SVG **hero-bg.svg** (see Asset #1).|
|**H1**|`col-span-7 text-4xl md:text-5xl font-bold leading-tight text-text`|_Is Your Talent Strategy Fueling Growth—or Slowing It Down?_|
|**Cost Line**|`col-span-7 mt-sm text-lg text-text/80`|_Miss one Staff Engineer and your release can slip six weeks, burning $180 k in payroll overrun._|
|**CTA Cluster**|`flex gap-sm mt-md`|Primary + Secondary buttons (styles Section 2.3).|
|**CTA Micro‑copy**|`text-xs text-text/60 mt-xs`|_15‑minute call—no pitch if we’re not the right fit._|
|**Logo Strip**|`flex gap-md mt-lg overflow-auto snap-x`|Six grayscale logos; hover: `opacity:1` → `0.6`.|

### 2.3 Button Styles

|Variant|Tailwind|Hover / Focus|
|---|---|---|
|**Primary**|`.btn bg-orange text-light px-lg py-sm rounded-md shadow-sm transition-transform hover:scale-[1.03] focus:outline-blue`|Scale 1.03 + lighter shade (`bg-[#f16250]`).|
|**Secondary**|`.btn border border-blue text-blue px-lg py-sm rounded-md hover:bg-blue/10 focus:outline-blue`|Background blue 10 % + arrow‑right icon.|

### 2.4 Motion

_Fade‑in & slide‑up_ on H1, Cost Line, CTA Cluster; stagger 40 ms; duration 300 ms; `@media (prefers-reduced-motion)` disables transform.

---

## 3. Problem / Pain Section

- Background `gray-50` (`#f5f7f8`)
    
- Grid 2×2 (`md:grid-cols-2`), `gap-lg`
    
- Each item: Remix icon 24 px (blue) + `h3` (~18 px) + body copy.
    
- Scroll‑reveal identical to Hero but offset 20 px.
    

---

## 4. Talent Enablement Ecosystem (IIEA Pillars)

### 4.1 Pillar Card Design

|Pillar|Accent BG|Accent Icon Color|Example Icon|
|---|---|---|---|
|**Illuminate**|`#FFF7F5`|`#e84e36`|`ri-search-line`|
|**Innovate**|`#F5FAFF`|`#02a7e1`|`ri-code-line`|
|**Elevate**|`#F6FFF5`|`#5abf41`|`ri-bar-chart-line`|
|**Accelerate**|`#FFFDF5`|`#d0a308`|`ri-rocket-line`|

> Use these accent BGs to create subtle differentiation while staying brand‑safe. Each BG is a 95 % tint of brand or neutral.

### 4.2 Layout

- Responsive grid `md:grid-cols-2` `gap-lg`.
    
- Card: border `1px #e4e7ea` radius `12px` padding `space-lg` shadow sm.
    
- Card hover: translateY‑2 px + shadow‑md (desk only).
    
- **Elevate metric line:** _…cuts sourcing time per role by **35 %**._ (bold percentage).
    

---

## 5. Social Proof Section

### Placement Update

Placed **after Ecosystem** to keep hero CTAs unmoved.

- Heading `h3` center, max‑width 600 px
    
- Logo row reused; at this point enlarge logos to 140 px width.
    

---

## 6. Enablement Justification (Numbered List)

Numbered list with custom CSS counters; counter circle uses TF Blue fill, white text. Each list item: title `<strong>` + body paragraph.

---

## 7. Who We Serve (Teaser)

- Blue check‑icon list (`ri-check-line`) with `text-blue` icon stroke.
    

---

## 8. Credibility & Trust

- Card BG white, shadow‑md, radius 12 px padding space-lg.
    
- Headshot left: 72 × 72 px, circular; copy right.
    
- Principles list uses `ri-shield-line` icons.
    

---

## 9. Final CTA Banner

|Attribute|Value|
|---|---|
|Background|`#011627`|
|Heading|`text-3xl font-bold text-light` center|
|Body|`text-light/80 mt-sm` center max‑width 600 px|
|Primary Button|Same style as hero but inverse colors (`bg-orange` on dark bg retains).|
|Secondary Links|Inline list `text-blue-light hover:text-orange`|

---

## 10. Progressive Disclosure (Mobile Accordions)

Use _shadcn/ui_ `Accordion`. Default open first item; `md:` breakpoint shows all open. Animate with `max-height` CSS driven by component.

---

## 11. Analytics Hooks

```html
<button class="btn-primary" data-gtm="cta_primary">…</button>
<script>
  document.querySelectorAll('[data-gtm]').forEach(btn=>
    btn.addEventListener('click', e=>gtag('event', e.target.dataset.gtm)));
</script>
```

---

## 12. Asset Checklist

|#|Asset|File|Spec|Generation Prompt|
|---|---|---|---|---|
|1|Hero Background SVG|`hero-bg.svg`|1920 × 1080, < 60 kB|_“Minimal abstract mesh evoking clarity emerging from complexity, muted warm gray lines on off‑white, no text.”_|
|2|Client Logos (6)|`logo‑*.svg` + PNG fallback|300 × auto, grayscale|Source from clients; convert to single‑color gray.|
|3|Adam Headshot|`adam-kovacs.webp`|72 × 72 px WebP|—|
|4|Dark‑mode CSS|`theme-dark.css`|custom properties|—|
|5|Pillar Icons|Remix sprite|Only: search, code, bar‑chart, rocket|—|
|6|Open‑Graph Image (optional)|`og-home.jpg`|1200 × 630, < 200 kB|_“TF homepage hero set inside laptop mockup on dark background, brand colors.”_|

---

## 13. Developer Acceptance Checklist

1. **Visual hierarchy** matches Figma mock.
    
2. Axe scan: zero critical issues.
    
3. Lighthouse Mobile: Perf ≥ 90, Acc ≥ 90.
    
4. Hero CTA is visible above fold on 1280× screens.
    
5. Color tokens & accent B... } ] }