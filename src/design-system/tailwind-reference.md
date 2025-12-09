# Tailwind CSS Reference - FinanceApp

Guia rápido das classes Tailwind mais usadas no projeto, organizadas por categoria.

---

## 🎨 Colors

### Purple (Primary Brand)
```css
bg-purple-50      /* #faf5ff - Lightest backgrounds */
bg-purple-100     /* #f3e8ff */
bg-purple-500     /* #a855f7 - Brand color */
bg-purple-600     /* #9333ea - Primary buttons, active states */
bg-purple-700     /* #7c3aed - Hover states, charts */

text-purple-500   /* Icons, accents */
text-purple-600   /* Links, CTAs */
text-purple-700   /* Dark text on light bg */

border-purple-500 /* Card top borders */
border-purple-600 /* Focus states */
```

### Slate (Neutrals)
```css
/* Backgrounds */
bg-slate-50       /* #f8fafc - Page background */
bg-slate-100      /* #f1f5f9 - Input backgrounds, secondary cards */
bg-slate-200      /* #e2e8f0 - Borders, dividers */
bg-slate-800      /* #1e293b - Sidebar hover */
bg-slate-900      /* #0f172a - Sidebar, dark sections */

/* Text */
text-slate-400    /* #94a3b8 - Inactive sidebar text, placeholders */
text-slate-500    /* #64748b - Muted text, secondary info */
text-slate-600    /* #475569 - Secondary text */
text-slate-700    /* #334155 - Body text alternative */
text-slate-900    /* #0f172a - Primary headings, values */

/* Borders */
border-slate-200  /* #e2e8f0 - Default borders */
border-slate-300  /* #cbd5e1 - Hover borders */
border-slate-800  /* #1e293b - Dark borders */
```

### Semantic Colors
```css
/* Success / Income */
bg-green-50       /* Light backgrounds */
bg-green-100      /* Badge backgrounds */
bg-green-500      /* #10b981 */
bg-green-600      /* #059669 */
text-green-600    /* Positive values */
text-green-700    /* Badge text */
border-green-500  /* Card accents */

/* Warning / Pending */
bg-orange-50
bg-orange-100     /* Badge backgrounds */
bg-orange-500     /* #f59e0b */
bg-orange-600     /* #d97706 */
text-orange-600   /* Warning values */
text-orange-700   /* Badge text */
border-orange-500 /* Card accents */

/* Danger / Expenses */
bg-red-50
bg-red-100        /* Badge backgrounds */
bg-red-500        /* #ef4444 */
bg-red-600        /* #dc2626 */
text-red-600      /* Negative values */
text-red-700      /* Badge text */
border-red-500    /* Card accents */

/* Info */
bg-blue-50
bg-blue-100
bg-blue-500       /* #3b82f6 */
bg-blue-600       /* #2563eb */
text-blue-600
border-blue-500

/* Emerald (Alternative Success) */
bg-emerald-100    /* #d1fae5 - Badge background */
text-emerald-700  /* #047857 - Badge text */
```

---

## 📏 Spacing

### Padding
```css
p-1    /* 4px */
p-2    /* 8px */
p-3    /* 12px */
p-4    /* 16px */
p-5    /* 20px - Card padding */
p-6    /* 24px - Section padding */
p-8    /* 32px - Modal padding */

px-3   /* Horizontal 12px */
px-4   /* Horizontal 16px - Button padding */
py-2   /* Vertical 8px - Button padding */
py-3   /* Vertical 12px - Input padding */
```

### Margin
```css
m-4    /* 16px */
mb-1   /* Bottom 4px */
mb-2   /* Bottom 8px */
mb-4   /* Bottom 16px */
mb-6   /* Bottom 24px - Section spacing */

ml-64  /* Left 256px - Main content offset (sidebar width) */
```

### Gap
```css
gap-1   /* 4px */
gap-2   /* 8px - Icon + text */
gap-3   /* 12px - List items */
gap-4   /* 16px - Grid cards */
gap-6   /* 24px - Large sections */

space-y-1  /* Vertical spacing between children 4px */
space-y-3  /* 12px - List items */
space-y-4  /* 16px */
space-y-6  /* 24px - Sections */
```

---

## 🔤 Typography

### Font Size
```css
/* NÃO usar essas classes a menos que especificamente solicitado */
/* Typography é controlado pelo globals.css */

/* Apenas para referência: */
text-xs    /* 12px - Small labels, badges */
text-sm    /* 14px - Secondary text, descriptions */
text-base  /* 16px - Body text (padrão) */
text-lg    /* 18px - h3 */
text-xl    /* 20px - h2 */
text-2xl   /* 24px - h1 */
text-3xl   /* 30px - Large values */
```

### Font Weight
```css
/* Também controlado pelo globals.css, usar apenas quando necessário */
font-normal    /* 400 - Body text */
font-medium    /* 500 - Headings, buttons, labels (padrão) */
font-semibold  /* 600 */
font-bold      /* 700 - Usar com moderação */
```

### Text Color
```css
/* Veja seção Colors acima */
text-white
text-slate-400  /* Muted/disabled */
text-slate-500  /* Secondary */
text-slate-600  /* Body alternative */
text-slate-900  /* Primary */
```

### Text Alignment
```css
text-left
text-center
text-right
```

### Text Decoration
```css
truncate         /* Ellipsis overflow */
line-through     /* Strikethrough */
uppercase        /* UPPERCASE */
capitalize       /* Capitalize First Letter */
```

---

## 📐 Layout

### Display
```css
hidden           /* display: none */
block
inline-block
flex
inline-flex
grid
```

### Flexbox
```css
/* Container */
flex
flex-col         /* Vertical */
flex-row         /* Horizontal (padrão) */
flex-wrap        /* Allow wrapping */

/* Alignment */
items-start      /* Align items top */
items-center     /* Align items middle */
items-end        /* Align items bottom */
justify-start    /* Justify start */
justify-center   /* Justify center */
justify-between  /* Space between */
justify-end      /* Justify end */

/* Sizing */
flex-1           /* Grow to fill space */
flex-shrink-0    /* Don't shrink */
```

### Grid
```css
grid
grid-cols-1           /* 1 column */
grid-cols-2           /* 2 columns */
grid-cols-3           /* 3 columns */
grid-cols-4           /* 4 columns */
grid-cols-5           /* 5 columns */

/* Responsive */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
```

### Width & Height
```css
w-4     /* 16px */
w-5     /* 20px */
w-8     /* 32px */
w-10    /* 40px */
w-12    /* 48px */
w-16    /* 64px */
w-64    /* 256px - Sidebar width */

w-full  /* 100% */
w-1/2   /* 50% */
w-1/3   /* 33.333% */

min-w-0 /* Allow shrinking below content */
max-w-md   /* 448px */
max-w-sm   /* 384px */

h-4     /* 16px */
h-5     /* 20px */
h-8     /* 32px */
h-10    /* 40px */
h-screen /* 100vh */
min-h-screen /* min-height: 100vh */
```

### Position
```css
static
relative
absolute
fixed
sticky

top-0
bottom-0
left-0
right-0
inset-0  /* all sides 0 */

z-10
z-40
z-50     /* Modals, overlays */
```

---

## 🎨 Borders & Radius

### Border Width
```css
border          /* 1px all sides */
border-t        /* Top only */
border-b        /* Bottom only */
border-l        /* Left only */
border-r        /* Right only */

border-2        /* 2px */
border-4        /* 4px - Card top accent */

border-t-4      /* Top 4px */
border-l-4      /* Left 4px */
```

### Border Radius
```css
rounded         /* 4px */
rounded-sm      /* 2px */
rounded-md      /* 6px */
rounded-lg      /* 8px - Buttons */
rounded-xl      /* 12px - Navigation items, inputs */
rounded-2xl     /* 16px - Cards */
rounded-3xl     /* 24px - Modals */
rounded-full    /* 9999px - Badges, circles */
```

### Border Color
```css
/* Veja seção Colors */
border-transparent
border-slate-200    /* Default */
border-slate-300    /* Hover */
border-slate-800    /* Dark */
border-purple-500   /* Focus */
```

---

## 🎭 Effects

### Shadow
```css
shadow-none
shadow-sm       /* Subtle - Default cards */
shadow          /* Medium */
shadow-md       /* Hover state */
shadow-lg       /* Elevated */
shadow-xl       /* Modals */
```

### Opacity
```css
opacity-0       /* Hidden */
opacity-50      /* Semi-transparent */
opacity-100     /* Fully visible */

bg-black/50     /* Black with 50% opacity */
bg-white/80     /* White with 80% opacity */
```

### Gradient
```css
/* Background Gradients */
bg-gradient-to-r    /* Left to right */
bg-gradient-to-br   /* Top-left to bottom-right */
bg-gradient-to-b    /* Top to bottom */

from-purple-600     /* Start color */
to-purple-700       /* End color */
via-purple-650      /* Middle color */

/* Example: CTA Button */
bg-gradient-to-br from-purple-600 to-purple-700
```

---

## 🎬 Transitions & Animations

### Transition
```css
transition-none
transition-all       /* All properties */
transition-colors    /* Colors only (mais performático) */
transition-opacity   /* Opacity only */
transition-shadow    /* Shadow only */
transition-transform /* Transform only */

duration-150    /* 150ms - Fast */
duration-300    /* 300ms - Default */
duration-500    /* 500ms - Slow */

ease-linear
ease-in
ease-out
ease-in-out     /* Default */
```

### Animation
```css
animate-spin       /* Rotating - Loading spinners */
animate-pulse      /* Pulsing - Skeletons */
animate-bounce
```

### Transform
```css
scale-105          /* 1.05x - Hover scale */
-translate-x-1/2   /* Center horizontal */
-translate-y-1/2   /* Center vertical */
rotate-45
```

### Hover States
```css
/* Examples */
hover:bg-purple-700
hover:text-white
hover:border-slate-300
hover:shadow-md
hover:scale-105
hover:opacity-90

/* Group Hover */
group
group-hover:opacity-100
```

### Focus States
```css
focus:outline-none
focus:ring-2
focus:ring-purple-500
focus:ring-offset-2
focus:border-purple-500
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First */
sm:  /* ≥640px - Mobile landscape/tablet */
md:  /* ≥768px - Tablet */
lg:  /* ≥1024px - Desktop */
xl:  /* ≥1280px - Large desktop */
2xl: /* ≥1536px - Extra large */

/* Examples */
hidden md:flex              /* Hidden on mobile, visible on tablet+ */
grid-cols-1 lg:grid-cols-4  /* 1 col mobile, 4 cols desktop */
p-4 md:p-6 lg:p-8          /* Progressive padding */
```

### Common Patterns
```css
/* Sidebar - Desktop only */
hidden md:flex md:flex-col

/* Bottom Nav - Mobile only */
md:hidden

/* Responsive Grid */
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4

/* Responsive Text */
text-base md:text-lg lg:text-xl

/* Responsive Spacing */
p-4 md:p-6
pb-24 md:pb-6  /* Extra bottom padding on mobile for nav */
```

---

## 🎯 Common Component Classes

### Card
```css
bg-white rounded-2xl p-5 border-t-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow
```

### Button Primary
```css
bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2
```

### Button Secondary
```css
bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg transition-colors
```

### Button Ghost/Icon
```css
w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors
```

### Input
```css
w-full px-4 py-3 bg-slate-100 rounded-xl border-2 border-transparent focus:border-purple-500 focus:outline-none transition-colors
```

### Badge Success
```css
inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs
```

### Badge Warning
```css
inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs
```

### Badge Danger
```css
inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs
```

### Modal Overlay
```css
fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50
```

### Modal Content
```css
bg-white rounded-3xl p-8 max-w-md w-full shadow-xl
```

### Sidebar (Desktop)
```css
hidden md:flex md:flex-col w-64 bg-slate-900 text-white fixed h-screen
```

### Sidebar Menu Item Active
```css
w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-600 text-white transition-all
```

### Sidebar Menu Item Inactive
```css
w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all
```

### Bottom Nav (Mobile)
```css
md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 z-50
```

### Header
```css
bg-white border-b border-slate-200 sticky top-0 z-40
```

### Search Bar
```css
flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl
```

### Page Container
```css
flex min-h-screen bg-slate-50
```

### Main Content
```css
flex-1 md:ml-64
```

### Content Area
```css
p-6 pb-24 md:pb-6
```

### Section Spacing
```css
space-y-6
```

### Grid Stats Cards
```css
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
```

### List Items Container
```css
space-y-3
```

### Transaction Item
```css
bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-colors
```

---

## 🎨 Utility Patterns

### Centering
```css
/* Flex */
flex items-center justify-center

/* Absolute */
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2

/* Grid */
grid place-items-center
```

### Truncate Text
```css
truncate           /* Single line */
line-clamp-2       /* 2 lines (needs plugin) */
```

### Aspect Ratio
```css
aspect-square      /* 1:1 */
aspect-video       /* 16:9 */
```

### Overflow
```css
overflow-hidden
overflow-auto
overflow-scroll
overflow-x-auto    /* Horizontal scroll */
overflow-y-auto    /* Vertical scroll */
```

### Screen Reader Only
```css
sr-only
```

### Pointer Events
```css
pointer-events-none
pointer-events-auto
```

### Select
```css
select-none        /* Prevent text selection */
select-text        /* Allow text selection */
```

---

## ⚠️ Important Notes

### ❌ NÃO usar classes de tipografia
A menos que especificamente solicitado, **NÃO** use:
- `text-xs`, `text-sm`, `text-base`, etc. (font-size)
- `font-normal`, `font-medium`, `font-bold` (font-weight)
- `leading-*` (line-height)

A tipografia é controlada pelo `/styles/globals.css` para consistência.

### ✅ Usar apenas quando necessário
- Classes de cor de texto: `text-purple-600`, `text-slate-900`
- Classes de cor de background: `bg-white`, `bg-purple-600`
- Classes estruturais: `flex`, `grid`, `p-4`, etc.

---

## 📚 Quick Reference Cheatsheet

```css
/* COLORS */
Purple: 500, 600, 700
Slate: 50, 100, 200, 400, 500, 600, 800, 900
Green: 100, 600, 700
Orange: 100, 600, 700
Red: 100, 600, 700

/* SPACING */
Padding: p-4, p-5, p-6, p-8
Gap: gap-2, gap-3, gap-4, gap-6
Space: space-y-3, space-y-6

/* RADIUS */
lg: 10px - Buttons
xl: 12px - Navigation, inputs
2xl: 16px - Cards
3xl: 24px - Modals
full: Pills

/* SHADOWS */
sm: Default cards
md: Hover
xl: Modals

/* TRANSITIONS */
transition-colors
transition-shadow
transition-all
duration-300

/* RESPONSIVE */
sm: ≥640px
md: ≥768px (sidebar breakpoint)
lg: ≥1024px
```

---

Esta é a referência completa de Tailwind CSS para o FinanceApp. Use como guia rápido ao implementar novos componentes.
