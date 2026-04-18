# Design System — Jenny Lu Pitch App

---

## Colors

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#F7F5F2` | Page background (warm off-white) |
| `--surface` | `#FFFFFF` | Elevated surfaces — testimonial cards |
| `--border` | `#E4DFD7` | Dividers, card borders, tag outlines |
| `--text` | `#1A1917` | Primary text — headings, body |
| `--muted` | `#8A8178` | Secondary text — roles, captions, labels |
| `--accent` | `#C44B2A` | Terracotta — numbers, labels, callouts, CTA |
| `--accent-fg` | `#FFFFFF` | Text on accent background (buttons) |
| `--accent-subtle` | `#F5EBE7` | Light accent tint — hover states |

### Color intent
- `--bg` and `--surface` create a subtle depth: warm page behind white cards
- `--border` is warm-toned (not cool gray) to match the off-white bg
- `--accent` is used sparingly: index numbers, SMALL CAPS labels, insight border, metrics, CTAs
- Never use `--accent` for large blocks of text

---

## Typography

### Families
| Token | Value | Usage |
|---|---|---|
| `--font-sans` | Inter, system-ui, sans-serif | All UI — headings, body, labels |
| `--font-serif` | Lora, Georgia, serif | Insight callout pull-quotes only |

### Scale
| Token | Value | Usage |
|---|---|---|
| `--type-label` | `11px` | SMALL CAPS section labels (PREPARED FOR, RELEVANT WORK) |
| `--type-sm` | `13px` | Secondary UI — nav links, captions, tag text |
| `--type-base` | `16px` | Body copy |
| `--type-lg` | `18px` | Large body — not currently in use, reserved |
| `--type-xl` | `clamp(20px, 2.4vw, 28px)` | Section subheads, company opening text |
| `--type-2xl` | `clamp(26px, 3.2vw, 38px)` | Case study titles |
| `--type-display` | `clamp(34px, 4.5vw, 56px)` | Hero / page title |

### Letter spacing
| Token | Value | Usage |
|---|---|---|
| `--tracking-label` | `0.12em` | SMALL CAPS labels |
| `--tracking-tight` | `-0.03em` | Display headlines |
| `--tracking-snug` | `-0.02em` | Section headings |
| `--tracking-normal` | `0` | Body copy |

### Line height
| Token | Value | Usage |
|---|---|---|
| `--leading-tight` | `1.1` | Display text |
| `--leading-snug` | `1.3` | Headings |
| `--leading-normal` | `1.6` | Body copy (default) |
| `--leading-loose` | `1.8` | Long-form story paragraphs |

### Type hierarchy in practice

```
PREPARED FOR RAKUTEN REWARDS · LEAD PRODUCT DESIGNER, GROWTH
↑ --type-label, --tracking-label, --accent, uppercase

Rakuten Rewards has paid out nearly $2 billion...
↑ --type-xl, --tracking-snug, --text (opening paragraph)

──────────────────────

01  GIANT EAGLE   [Consumer] [Loyalty]
↑ --type-sm, --accent (number), --muted (company), --border (tags)

myPerks Loyalty Redesign
↑ --type-2xl, fontWeight 800, --tracking-snug, --text

Lead UX Designer → UX Manager
↑ --type-sm, --muted

Redesigned a loyalty program so 4M customers could feel the value without doing math.
↑ clamp(18–22px), fontWeight 600, --tracking-snug, --text  (headline)

Giant Eagle's loyalty program was technically generous...
↑ --type-base, --leading-loose, --text (first paragraph)

The program wasn't failing because of bad rewards...
↑ --type-base, --leading-loose, --muted (subsequent paragraphs)

"Not a new program. A better argument for the one they already had."
↑ --font-serif, italic, clamp(17–21px), --text, borderLeft: 2px solid --accent  (insight)

384%             212%
Spend per member  Visit frequency
↑ clamp(18–24px), fontWeight 800, --accent (value)
↑ --type-sm, --muted (label)
```

---

## Component Patterns

### Section label
```
SMALL CAPS · 11px · letter-spacing 0.12em · --accent · uppercase
```

### Case study index
```
01, 02, 03 · 11px · fontWeight 700 · letter-spacing 0.1em · --accent
```

### Tag pill
```
border: 1px solid --border · color: #555 · 10px · padding: 2px 8px
```

### Insight callout
```
fontFamily: Lora, serif · italic · clamp(17–21px)
borderLeft: 2px solid --accent · paddingLeft: 20px
--text color · maxWidth: 560px
```

### Metric block
```
Grid with 1px --border gaps, --border background
value: clamp(18–24px), fontWeight 800, --accent
label: 11px, --muted
```

### CTA button (primary)
```
backgroundColor: --accent · color: --accent-fg · fontWeight 700 · 13px
padding: 12px 24px · letter-spacing 0.04em · no border-radius
```

### CTA button (ghost)
```
border: 1px solid --border · color: --muted · 13px
padding: 12px 24px · no border-radius
hover: borderColor → --muted, color → --text
```

---

## Spacing rhythm
- Section top/bottom padding: `py-24` (96px)
- Article gap between case studies: `paddingBottom: 72px`
- Content max-width: `max-w-5xl` (1024px) centered, `px-6`
- Body copy max-width: `680px`
- Insight / opening text max-width: `560–640px`
