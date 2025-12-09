# Visual Reference - FinanceApp Design System

Referência visual rápida com exemplos de código para copiar e colar.

---

## 🎨 Color Palette

### Purple (Primary)

```css
/* Lightest to Darkest */
#faf5ff  purple-50   ░░░░░
#f3e8ff  purple-100  ░░░░░
#e9d5ff  purple-200  ▒▒▒▒▒
#d8b4fe  purple-300  ▒▒▒▒▒
#c084fc  purple-400  ▓▓▓▓▓
#a855f7  purple-500  ▓▓▓▓▓  ← Primary
#9333ea  purple-600  █████  ← Buttons, Active
#7c3aed  purple-700  █████  ← Charts, Hover
#6b21a8  purple-800  █████
#581c87  purple-900  █████
```

**Uso:**
- `purple-500`: Ícones, badges, acentos
- `purple-600`: Botões primary, navegação ativa
- `purple-700`: Hover states, gráficos

---

### Slate (Neutral)

```css
/* Light to Dark */
#f8fafc  slate-50   ░░░░░  ← Page background
#f1f5f9  slate-100  ░░░░░  ← Inputs, secondary cards
#e2e8f0  slate-200  ▒▒▒▒▒  ← Borders
#cbd5e1  slate-300  ▒▒▒▒▒
#94a3b8  slate-400  ▓▓▓▓▓  ← Inactive text
#64748b  slate-500  ▓▓▓▓▓  ← Muted text
#475569  slate-600  ▓▓▓▓▓  ← Secondary text
#334155  slate-700  █████
#1e293b  slate-800  █████  ← Sidebar hover
#0f172a  slate-900  █████  ← Sidebar background
```

---

### Semantic Colors

```css
/* Success / Income */
#10b981  green-500  ████  ← Income, positive
#d1fae5  emerald-100 ░░░  ← Badge background
#047857  emerald-700 ███  ← Badge text

/* Warning / Pending */
#f59e0b  orange-500 ████  ← Warning
#fed7aa  orange-100 ░░░  ← Badge background
#c2410c  orange-700 ███  ← Badge text

/* Danger / Expense */
#ef4444  red-500    ████  ← Expense, negative
#fee2e2  red-100    ░░░  ← Badge background
#b91c1c  red-700    ███  ← Badge text

/* Info */
#3b82f6  blue-500   ████  ← Info
#dbeafe  blue-100   ░░░  ← Badge background
#1d4ed8  blue-700   ███  ← Badge text
```

---

## 📏 Spacing Scale

```
px   rem    Class    Visual
4    0.25   p-1      ▪
8    0.5    p-2      ▪▪
12   0.75   p-3      ▪▪▪
16   1      p-4      ▪▪▪▪        ← Standard
20   1.25   p-5      ▪▪▪▪▪       ← Card padding
24   1.5    p-6      ▪▪▪▪▪▪      ← Section spacing
32   2      p-8      ▪▪▪▪▪▪▪▪    ← Modal padding
40   2.5    p-10     ▪▪▪▪▪▪▪▪▪▪
```

---

## 🔘 Border Radius

```
Value    Class        Use Case           Visual
6px      rounded-sm   Small elements     ╭──╮
8px      rounded-md   Buttons (rare)     ╭───╮
10px     rounded-lg   Buttons            ╭────╮     ← Standard button
12px     rounded-xl   Navigation, Input  ╭─────╮    ← Standard input
16px     rounded-2xl  Cards              ╭──────╮   ← Standard card
24px     rounded-3xl  Modals             ╭────────╮ ← Modals
9999px   rounded-full Badges, Pills      (──────)
```

---

## 🎴 Component Quick Reference

### 1. Stat Card

```
┌────────────────────────────────────┐
│ ████ Top Border (4px colored)      │
├────────────────────────────────────┤
│ Total Income              [Icon]   │
│                                    │
│ R$ 8.500                           │
│                                    │
│ ↗ 36%  from last month            │
└────────────────────────────────────┘

Colors: white bg, purple/green/red/orange border
Radius: 2xl (16px)
Padding: p-5 (20px)
Shadow: sm → md on hover
```

**Code:**
```tsx
<div className="bg-white rounded-2xl p-5 border-t-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow">
  <div className="flex items-start justify-between mb-4">
    <div className="text-sm text-slate-600">Total Income</div>
    <TrendingUp className="w-5 h-5 text-purple-500" />
  </div>
  <div className="mb-2">
    <span className="text-3xl text-slate-900">R$ 8.500</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-sm text-green-600 flex items-center gap-1">
      <ArrowUpRight className="w-4 h-4" />
      36%
    </span>
    <span className="text-sm text-slate-500">from last month</span>
  </div>
</div>
```

---

### 2. Transaction Item

```
┌──────────────────────────────────────────────┐
│  ┌────┐  Supermercado Extra      R$ 156,22  │
│  │ 🏪 │  Alimentação • 08/12      ✓ Pago    │
│  └────┘                                      │
└──────────────────────────────────────────────┘

Background: white
Border: 1px slate-200 → slate-300 on hover
Radius: xl (12px)
Padding: p-4 (16px)
```

**Code:**
```tsx
<div className="bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-colors">
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
      <ShoppingBag className="w-5 h-5 text-slate-600" />
    </div>
    <div className="flex-1">
      <div className="text-slate-900">Supermercado Extra</div>
      <div className="text-sm text-slate-500">Alimentação • 08/12</div>
    </div>
    <div className="text-right">
      <div className="text-slate-900 mb-1">R$ 156,22</div>
      <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
        <CheckCircle className="w-3 h-3" />
        Pago
      </span>
    </div>
  </div>
</div>
```

---

### 3. Buttons

#### Primary Button
```
┌─────────────────┐
│ [+] Add Income  │  ← Purple bg, white text
└─────────────────┘
```
```tsx
<button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
  <Plus className="w-4 h-4" />
  Add Income
</button>
```

#### Secondary Button
```
┌─────────────────┐
│   Cancel        │  ← Light gray bg, dark text
└─────────────────┘
```
```tsx
<button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg transition-colors">
  Cancel
</button>
```

#### Icon Button
```
┌────┐
│ 🔔 │  ← Square, light gray bg
└────┘
```
```tsx
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors">
  <Bell className="w-5 h-5 text-slate-600" />
</button>
```

#### Gradient CTA
```
┌─────────────────┐
│ Upgrade Now     │  ← Purple gradient
└─────────────────┘
```
```tsx
<button className="bg-gradient-to-br from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
  Upgrade Now
</button>
```

---

### 4. Badges

```
┌────────────┐  ┌──────────────┐  ┌────────────┐
│ ✓ Pago     │  │ ⏰ Pendente   │  │ ⚠ Atrasado │
└────────────┘  └──────────────┘  └────────────┘
  Green           Orange            Red
```

**Code:**
```tsx
{/* Success */}
<span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
  <CheckCircle className="w-3 h-3" />
  Pago
</span>

{/* Warning */}
<span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
  <Clock className="w-3 h-3" />
  Pendente
</span>

{/* Danger */}
<span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
  <AlertCircle className="w-3 h-3" />
  Atrasado
</span>
```

---

### 5. Input Fields

```
┌──────────────────────────────────┐
│  Amount                          │  ← Label
│ ┌──────────────────────────────┐│
│ │ R$ 1.234,56                  ││  ← Input
│ └──────────────────────────────┘│
└──────────────────────────────────┘

Background: slate-100
Focus: purple-500 border
Radius: xl (12px)
```

**Code:**
```tsx
<div className="space-y-2">
  <label className="text-slate-700">Amount</label>
  <input
    type="text"
    className="w-full px-4 py-3 bg-slate-100 rounded-xl border-2 border-transparent focus:border-purple-500 focus:outline-none transition-colors"
    placeholder="R$ 0,00"
  />
</div>
```

---

### 6. Modal

```
┌──────────────────────────────────────────────┐
│                                              │
│  Add Transaction                      [X]    │
│                                              │
│  ┌────────────────────────────────────────┐ │
│  │ Name                                   │ │
│  │ ┌────────────────────────────────────┐ │ │
│  │ │                                    │ │ │
│  │ └────────────────────────────────────┘ │ │
│  └────────────────────────────────────────┘ │
│                                              │
│  ┌────────────┐  ┌─────────────────────┐   │
│  │  Cancel    │  │  Confirm            │   │
│  └────────────┘  └─────────────────────┘   │
└──────────────────────────────────────────────┘

Background: white
Radius: 3xl (24px)
Padding: p-8 (32px)
Shadow: xl
Overlay: black 50% opacity
```

**Code:**
```tsx
<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
  <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl">
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-slate-900">Add Transaction</h2>
      <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
        <X className="w-5 h-5" />
      </button>
    </div>
    
    {/* Content */}
    <div className="space-y-4">
      {/* Inputs */}
    </div>
    
    {/* Footer */}
    <div className="flex gap-3 mt-6">
      <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 rounded-xl transition-colors">
        Cancel
      </button>
      <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition-colors">
        Confirm
      </button>
    </div>
  </div>
</div>
```

---

### 7. Sidebar (Desktop)

```
┌────────────────┐
│ [💜] Finance   │  ← Logo
├────────────────┤
│ MENU           │  ← Section label
│                │
│ 📊 Dashboard   │  ← Active (purple bg)
│ 🧾 Despesas    │  ← Inactive (gray text)
│ 📉 Dívidas     │
│ 🤖 Coach IA    │
│ ⚙️ Config      │
│                │
│ ┌────────────┐ │
│ │ Switch to  │ │  ← CTA gradient card
│ │ Pro        │ │
│ │ [Button]   │ │
│ └────────────┘ │
└────────────────┘

Width: 256px (16rem)
Background: slate-900
Active: purple-600
Inactive: slate-400
```

**Code:**
```tsx
<aside className="hidden md:flex md:flex-col w-64 bg-slate-900 text-white fixed h-screen">
  {/* Logo */}
  <div className="p-6 border-b border-slate-800">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
        <DollarSign className="w-6 h-6" />
      </div>
      <span className="text-xl">FinanceApp</span>
    </div>
  </div>

  {/* Menu */}
  <nav className="flex-1 px-4 py-6">
    <div className="text-slate-500 text-xs uppercase tracking-wider mb-4 px-3">Menu</div>
    <div className="space-y-1">
      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-600 text-white transition-all">
        <LayoutDashboard className="w-5 h-5" />
        <span>Dashboard</span>
      </button>
      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
        <Receipt className="w-5 h-5" />
        <span>Despesas</span>
      </button>
    </div>
  </nav>

  {/* Pro Card */}
  <div className="p-4 m-4 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl">
    <div className="mb-3">Switch to Pro</div>
    <button className="w-full bg-white text-purple-600 py-2 rounded-lg">
      Upgrade Now
    </button>
  </div>
</aside>
```

---

### 8. Bottom Navigation (Mobile)

```
┌──────────────────────────────────────────────┐
│ [📊]  [🧾]  [📉]  [🤖]  [⚙️]               │
│ Dash  Desp  Dívi  Coach Config              │
└──────────────────────────────────────────────┘

Position: Fixed bottom
Background: slate-900
Grid: 5 columns
Active: purple-600 bg
```

**Code:**
```tsx
<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 z-50">
  <div className="grid grid-cols-5 gap-1 px-2 py-2">
    <button className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-purple-600 text-white transition-all">
      <LayoutDashboard className="w-5 h-5 mb-1" />
      <span className="text-xs">Dashboard</span>
    </button>
    <button className="flex flex-col items-center justify-center py-2 px-1 rounded-xl text-slate-400 transition-all">
      <Receipt className="w-5 h-5 mb-1" />
      <span className="text-xs">Despesas</span>
    </button>
  </div>
</nav>
```

---

### 9. Search Bar

```
┌─────────────────────────────────────────┐
│ 🔍  Pesquisar...               ⌘ K     │
└─────────────────────────────────────────┘

Background: slate-100
Radius: xl (12px)
```

**Code:**
```tsx
<div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl">
  <Search className="w-4 h-4 text-slate-400" />
  <input
    type="text"
    placeholder="Pesquisar..."
    className="bg-transparent border-none outline-none text-sm flex-1"
  />
  <kbd className="px-2 py-0.5 text-xs bg-white rounded border border-slate-300">
    ⌘ K
  </kbd>
</div>
```

---

### 10. Progress Bar

```
Goal Progress: 70%
████████████████▒▒▒▒▒▒

Background: slate-200
Fill: purple-600
Height: 8px (h-2)
Radius: full
```

**Code:**
```tsx
<div>
  <div className="flex items-center justify-between mb-2">
    <span className="text-sm text-slate-700">Goal Progress</span>
    <span className="text-sm text-slate-500">70%</span>
  </div>
  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
    <div
      className="h-full bg-purple-600 transition-all duration-500 rounded-full"
      style={{ width: '70%' }}
    />
  </div>
</div>
```

---

## 📐 Layout Patterns

### Page Layout

```
┌────────┬────────────────────────────────────┐
│        │ Header (sticky)                    │
│ Sidebar├────────────────────────────────────┤
│ (fixed)│                                    │
│        │                                    │
│        │  Main Content Area                 │
│        │  (p-6, pb-24 on mobile)            │
│        │                                    │
│        │                                    │
└────────┴────────────────────────────────────┘
         Mobile Bottom Nav (md:hidden)
```

**Code:**
```tsx
<div className="flex min-h-screen bg-slate-50">
  <aside className="hidden md:flex w-64 bg-slate-900 fixed h-screen">
    {/* Sidebar */}
  </aside>
  
  <div className="flex-1 md:ml-64">
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      {/* Header */}
    </header>
    
    <main className="p-6 pb-24 md:pb-6">
      {/* Content */}
    </main>
  </div>
  
  <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 z-50">
    {/* Bottom Nav */}
  </nav>
</div>
```

---

### Stats Grid (Responsive)

```
Mobile (1 col):        Tablet (2 cols):       Desktop (4 cols):
┌────────────┐         ┌──────┬──────┐        ┌───┬───┬───┬───┐
│   Card 1   │         │ C1   │ C2   │        │C1 │C2 │C3 │C4 │
├────────────┤         ├──────┼──────┤        └───┴───┴───┴───┘
│   Card 2   │         │ C3   │ C4   │
├────────────┤         └──────┴──────┘
│   Card 3   │
├────────────┤
│   Card 4   │
└────────────┘
```

**Code:**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Cards */}
</div>
```

---

## 🎯 Icon Sizes

```
Size    Class      Pixels  Use Case
────────────────────────────────────────
xs      w-3 h-3    12px    Badge icons
sm      w-4 h-4    16px    Button icons, small UI
md      w-5 h-5    20px    Navigation icons, card icons
lg      w-6 h-6    24px    Logo, large buttons
xl      w-8 h-8    32px    Empty states
```

---

## 💡 State Variations

### Hover States
```tsx
hover:bg-purple-700      // Button hover
hover:shadow-md          // Card hover
hover:border-slate-300   // Input hover
hover:text-white         // Text color change
hover:scale-105          // Subtle scale
hover:opacity-90         // Opacity change
```

### Focus States
```tsx
focus:outline-none
focus:ring-2
focus:ring-purple-500
focus:ring-offset-2
focus:border-purple-500
```

### Disabled States
```tsx
disabled:opacity-50
disabled:cursor-not-allowed
disabled:bg-slate-100
```

---

## 🎨 Gradient Patterns

### Purple Gradient (CTA)
```tsx
className="bg-gradient-to-br from-purple-600 to-purple-700"
```

### Logo Icon Gradient
```tsx
className="bg-gradient-to-br from-purple-500 to-purple-600"
```

---

## 📱 Responsive Breakpoints

```
Breakpoint   Width    Usage
────────────────────────────────────
sm:          ≥640px   Mobile landscape, 2 columns
md:          ≥768px   Tablet, show sidebar
lg:          ≥1024px  Desktop, 4 columns
xl:          ≥1280px  Large desktop
2xl:         ≥1536px  Extra large

Example:
hidden md:flex              // Hide on mobile, show on tablet+
grid-cols-1 lg:grid-cols-4  // 1 col mobile, 4 cols desktop
p-4 md:p-6 lg:p-8          // Progressive padding
```

---

## 🎭 Shadow Reference

```
Class      Use Case              Visual
───────────────────────────────────────────
shadow-sm  Default cards         ░
shadow     Medium elevation      ▒
shadow-md  Hover state           ▒▒
shadow-lg  Elevated cards        ▓▓
shadow-xl  Modals, dropdowns     ▓▓▓
```

---

## ✅ Copy-Paste Snippets

### Financial Value Display
```tsx
<span className="text-3xl text-slate-900">
  {new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(8500)}
</span>
```

### Date Display
```tsx
<span className="text-sm text-slate-500">
  {new Date('2025-12-08').toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit'
  })}
</span>
```

### Percentage Change
```tsx
<span className="text-sm text-green-600 flex items-center gap-1">
  <ArrowUpRight className="w-4 h-4" />
  36%
</span>
```

### Empty State
```tsx
<div className="text-center py-12">
  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <FileQuestion className="w-8 h-8 text-slate-400" />
  </div>
  <h3 className="text-slate-900 mb-2">No transactions yet</h3>
  <p className="text-slate-500 mb-6">Add your first transaction to get started</p>
  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl">
    Add Transaction
  </button>
</div>
```

### Loading Spinner
```tsx
<div className="w-8 h-8 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
```

---

Este guia visual serve como referência rápida para implementação de componentes. Para detalhes completos, consulte `implementation-guide.md` e `component-patterns.md`.
