# rr-go — Claude Configuration

**Project:** RedefiningRetirement.io (start subdomain)
**URL:** `start.redefiningretirement.io`
**Deploy:** Commit + push → Vercel auto-deploys
**Layout:** `src/layouts/Layout.astro` (GTM-KCV3GWZ, Inter font)
**Global CSS:** `src/styles/global.css`

---

## Typography & Spacing — Use These Every Time

Every page must match these conventions. Read an existing reference page before building a new one.

### Reference pages (read before building)
- Guide/article: `src/pages/guides/move-your-audience-to-a-newsletter/index.astro`
- Compare/table: `src/pages/compare/beehiiv-vs-substack/index.astro`
- Tool/calculator: `src/pages/tools/whats-your-audience-worth/index.astro`

### Page shell
```html
<article class="section">
  <div class="container narrow">
    <!-- page content -->
  </div>
</article>
```
- `.section` → `padding: 4rem 0` (from global CSS — do not override)
- `.container` → `max-width: 1000px; padding: 0 1.5rem`
- `.narrow` → `max-width: 720px` (add this class for article/tool pages)

### Hero / article header
```html
<header class="article-header">
  <span class="tag">Category Label</span>
  <h1 class="article-title">Page Title Here</h1>
  <p class="article-deck">One or two sentence summary of what this is.</p>
</header>
```
- `.article-header` → `margin-bottom: 2.5rem`
- `.article-title` → `font-size: clamp(1.8rem, 4vw, 2.8rem); margin-bottom: 1rem; line-height: 1.1`
- `.article-deck` → `font-size: 1.1rem; max-width: 640px; line-height: 1.65; color: var(--text-muted)`
- `.tag` → color: `var(--blue)`, small uppercase label above the H1

### Body text — always use `.prose`
```html
<div class="prose">
  <p>Paragraph text here.</p>
  <h2>Section Heading</h2>
  <p>More text.</p>
</div>
```
From global CSS:
- `p` → `font-size: 1rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 1.1rem`
- `h2` → `font-size: 1.4rem; margin: 2.5rem 0 0.75rem; color: var(--text)`
- `h3` → `font-size: 1.1rem; margin: 1.75rem 0 0.5rem`
- Never nest `.prose` inside itself

### Section labels (uppercase callout above a block)
```html
<p class="result-section-label">Section name</p>
```
Style: `font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-light); margin-bottom: 1rem`

### Cards / boxed content
```html
<div class="cta-block">...</div>
```
- `.cta-block` → `padding: 2.5rem 2rem; border-radius: var(--radius)`
- Content cards: `padding: 2rem` minimum — never less than `1.75rem`
- Don't use `padding: 1rem` on anything a user reads

### Buttons
- `.btn` → `height: 48px; padding: 0 1.5rem` (from global)
- Primary CTA buttons: `height: 52px; font-size: 1.05rem; padding: 0 2rem`

### CSS variables (from global.css — never hardcode these values)
| Variable | Value |
|---|---|
| `--blue` | `#09A1E7` |
| `--text` | `#111827` |
| `--text-muted` | `#6B7280` |
| `--text-light` | `#9CA3AF` |
| `--border` | `#E5E7EB` |
| `--bg-subtle` | `#F9FAFB` |
| `--radius` | `8px` |
| `--font` | Inter |

---

## Deploy

```bash
cd C:/Users/ckoeh/Projects/rr-go
git add -A && git commit -m "Add [description]" && git push
```
Vercel auto-deploys on push — no manual deploy step needed.

**Never push without Corey's approval.** Committing locally is fine; pushing goes live immediately.

---

## Page Locations

| Type | Folder | URL pattern |
|---|---|---|
| Tools / calculators | `src/pages/tools/[name]/index.astro` | `/tools/[name]/` |
| Guides / articles | `src/pages/guides/[name]/index.astro` | `/guides/[name]/` |
| Compare pages | `src/pages/compare/[name]/index.astro` | `/compare/[name]/` |
| Resources | `src/pages/resources/[name]/index.astro` | `/resources/[name]/` |

---

## Images

- Public assets: `public/` (served from site root)
- Tool images: `public/tools/[filename]`
- All hero images: `filter: grayscale(100%)` — this is the brand aesthetic for RR
- Always include `onerror="this.parentElement.style.display='none'"` on hero `<img>` tags so missing images fail silently

---

## Brand / Voice Notes

- Full brand and voice docs: `C:/Users/ckoeh/Projects/brain/context/redefining-retirement/`
- Voice register: "fellow traveler figuring it out" — never guru/expert framing
- Never use "AI-powered" in external copy
- Do not cross-reference CKM (Corey Koehler Media) content here — completely separate business
