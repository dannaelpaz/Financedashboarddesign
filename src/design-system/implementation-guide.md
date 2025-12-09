# FinanceApp - Guia de Implementação do Design System

## 📋 Índice
- [Visão Geral](#visão-geral)
- [Princípios de Design](#princípios-de-design)
- [Tokens de Design](#tokens-de-design)
- [Componentes](#componentes)
- [Layout e Grid](#layout-e-grid)
- [Responsividade](#responsividade)
- [Acessibilidade](#acessibilidade)
- [Exemplos de Código](#exemplos-de-código)

---

## 🎨 Visão Geral

O FinanceApp é um aplicativo de finanças pessoais com design moderno, clean e elegante. A identidade visual se baseia em:

- **Cor Primária**: Roxo (#9333ea, #7c3aed) - Transmite confiança e inovação
- **Sidebar Escura**: Fundo slate-900 (#0f172a) para contraste e foco
- **Cards com Bordas Coloridas**: Borda superior de 4px para categorização visual
- **Gradientes Sutis**: Usados em CTAs e elementos de destaque
- **Espaçamento Generoso**: Layout respirável e confortável

---

## 🎯 Princípios de Design

### 1. **Hierarquia Visual Clara**
- Informações mais importantes em destaque (valores financeiros, saldos)
- Uso estratégico de tamanhos de fonte e pesos
- Cores semânticas para indicar status (verde = positivo, vermelho = negativo)

### 2. **Consistência**
- Border radius padronizado: xl (12px) para navegação, 2xl (16px) para cards
- Espaçamento modular usando múltiplos de 4px
- Paleta de cores limitada e bem definida

### 3. **Feedback Visual**
- Hover states em todos os elementos interativos
- Transições suaves (300ms padrão)
- Estados de loading e empty states informativos

### 4. **Mobile First**
- Layout responsivo com breakpoints definidos
- Bottom navigation no mobile
- Sidebar collapse em tablets/mobile

---

## 🎨 Tokens de Design

Os tokens estão definidos em `/design-system/tokens.json` seguindo o padrão Design Tokens Format (DTF).

### Paleta de Cores

#### Cores Primárias (Roxo)
```css
--purple-50: #faf5ff
--purple-500: #a855f7  /* Primary */
--purple-600: #9333ea  /* Primary Dark - Botões, sidebar ativa */
--purple-700: #7c3aed  /* Charts, acentos */
```

#### Cores Neutras
```css
--slate-50: #f8fafc   /* Background da página */
--slate-100: #f1f5f9  /* Inputs, cards secundários */
--slate-200: #e2e8f0  /* Borders */
--slate-400: #94a3b8  /* Texto inativo na sidebar */
--slate-500: #64748b  /* Texto muted */
--slate-600: #475569  /* Texto secundário */
--slate-800: #1e293b  /* Sidebar hover/borders */
--slate-900: #0f172a  /* Sidebar background */
--white: #ffffff      /* Cards principais */
```

#### Cores Semânticas
```css
--success: #10b981   /* Verde - Receitas, valores positivos */
--warning: #f59e0b   /* Laranja - Alertas, pendências */
--danger: #ef4444    /* Vermelho - Despesas, valores negativos */
--info: #3b82f6      /* Azul - Informações neutras */
```

#### Cores de Charts
```css
--chart-purple: #7c3aed  /* Transaction View */
--chart-green: #10b981   /* Sales/Income */
--chart-orange: #f59e0b  /* Payment */
--chart-blue: #3b82f6    /* Extra categories */
--chart-red: #ef4444     /* Expenses */
```

### Espaçamento

Baseado em escala de 4px:
```
4px (0.25rem)  - Espaçamento micro
8px (0.5rem)   - Gap entre ícone e texto
12px (0.75rem) - Padding interno de botões
16px (1rem)    - Espaçamento padrão entre elementos
24px (1.5rem)  - Espaçamento entre seções
32px (2rem)    - Espaçamento maior entre grupos
48px (3rem)    - Espaçamento entre módulos
```

### Border Radius

```
6px (0.375rem)  - sm: Small elements
8px (0.5rem)    - md: Buttons (não usado no projeto)
10px (0.625rem) - lg: Buttons padrão
12px (0.75rem)  - xl: Navigation items, inputs
16px (1rem)     - 2xl: Cards principais
24px (1.5rem)   - 3xl: Modals, cards especiais
9999px          - full: Badges, pills
```

### Sombras

```css
/* Elevação sutil - Cards padrão */
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)

/* Elevação média - Card hover */
shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)

/* Elevação alta - Modals */
shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
```

### Tipografia

#### Família de Fontes
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 
             'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

#### Tamanhos
```
12px (0.75rem)  - xs: Labels pequenos, badges
14px (0.875rem) - sm: Texto secundário
16px (1rem)     - base: Texto corpo
18px (1.125rem) - lg: h3
20px (1.25rem)  - xl: h2
24px (1.5rem)   - 2xl: h1
30px (1.875rem) - 3xl: Valores financeiros grandes
36px (2.25rem)  - 4xl: Hero numbers
```

#### Pesos
```
400 - normal: Texto corpo, inputs
500 - medium: Headings, buttons, labels (padrão para elementos importantes)
600 - semibold: Ênfase extra
700 - bold: Títulos principais (usar com moderação)
```

#### Line Height
```
1.0 - none: Não usado
1.25 - tight: Títulos compactos
1.5 - normal: Padrão (usado em todo o app)
1.75 - relaxed: Parágrafos longos
```

---

## 🧩 Componentes

### Sidebar (Desktop)

**Especificações:**
- Largura: 256px (16rem)
- Background: slate-900 (#0f172a)
- Posição: Fixed left
- Height: 100vh

**Estrutura:**
```tsx
<aside className="hidden md:flex md:flex-col w-64 bg-slate-900 text-white fixed h-screen">
  {/* Logo Section */}
  <div className="p-6 border-b border-slate-800">
    {/* Logo com gradiente roxo */}
  </div>

  {/* Navigation */}
  <nav className="flex-1 px-4 py-6">
    {/* Menu items */}
  </nav>

  {/* Pro Card (CTA) */}
  <div className="p-4 m-4 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl">
    {/* Upgrade prompt */}
  </div>
</aside>
```

**Item de Navegação:**
```tsx
<button className={`
  w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
  ${isActive 
    ? 'bg-purple-600 text-white' 
    : 'text-slate-400 hover:text-white hover:bg-slate-800'
  }
`}>
  <Icon className="w-5 h-5" />
  <span>{label}</span>
</button>
```

**Cores Específicas:**
- Texto inativo: slate-400
- Texto hover: white
- Background hover: slate-800
- Background ativo: purple-600
- Border: slate-800

---

### Bottom Navigation (Mobile)

**Especificações:**
- Posição: Fixed bottom
- Background: slate-900
- Border top: slate-800
- Grid: 5 colunas iguais
- Padding: 8px

```tsx
<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 z-50">
  <div className="grid grid-cols-5 gap-1 px-2 py-2">
    {/* Items centralizados verticalmente */}
  </div>
</nav>
```

**Item Mobile:**
```tsx
<button className={`
  flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all
  ${isActive ? 'bg-purple-600 text-white' : 'text-slate-400'}
`}>
  <Icon className="w-5 h-5 mb-1" />
  <span className="text-xs">{label}</span>
</button>
```

---

### Header

**Especificações:**
- Background: white
- Border bottom: slate-200
- Sticky top: 0
- Padding: 24px horizontal, 16px vertical

```tsx
<header className="bg-white border-b border-slate-200 sticky top-0 z-40">
  <div className="px-6 py-4">
    <div className="flex items-center justify-between gap-4">
      {/* Title */}
      <h1 className="text-slate-900">
        Bem-vindo, Usuário 👋
      </h1>
      
      {/* Actions: Search, Notifications, Avatar */}
    </div>
  </div>
</header>
```

**Search Input:**
```tsx
<div className="hidden sm:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl">
  <Search className="w-4 h-4 text-slate-400" />
  <input 
    type="text"
    placeholder="Pesquisar..."
    className="bg-transparent border-none outline-none text-sm w-48"
  />
  <kbd className="hidden lg:inline-block px-2 py-0.5 text-xs bg-white rounded border border-slate-300">
    ⌘ K
  </kbd>
</div>
```

---

### Cards Estatísticos

**Especificações:**
- Background: white
- Border radius: 2xl (16px)
- Padding: 20px (1.25rem)
- Border top: 4px sólido (cor por categoria)
- Shadow: sm (padrão), md (hover)
- Transição: shadow 300ms

**Estrutura:**
```tsx
<div className="bg-white rounded-2xl p-5 border-t-4 border-{color} shadow-sm hover:shadow-md transition-shadow">
  {/* Header com título e ação */}
  <div className="flex items-start justify-between mb-4">
    <div className="text-slate-600 text-sm">{title}</div>
    <button className="text-slate-400 hover:text-slate-600">
      <MoreHorizontal className="w-5 h-5" />
    </button>
  </div>
  
  {/* Valor principal */}
  <div className="mb-2">
    <span className="text-3xl text-slate-900">{value}</span>
  </div>
  
  {/* Meta/indicador */}
  <div className="flex items-center gap-2">
    <span className="text-{color} text-sm flex items-center gap-1">
      <Icon className="w-4 h-4" />
      {percentage}
    </span>
    <span className="text-slate-500 text-sm">{description}</span>
  </div>
</div>
```

**Cores de Border Top por Categoria:**
- Income/Receita: `border-purple-500`
- Expenses/Despesas: `border-red-500` ou `border-orange-500`
- Goals/Metas: `border-green-500`
- Cards/Transações: `border-blue-500` ou `border-purple-500`

---

### Cards de Lista (Despesas/Transações)

**Especificações:**
- Background: white
- Border radius: xl (12px)
- Padding: 16px
- Border: 1px slate-200
- Hover: border-slate-300

```tsx
<div className="bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-colors">
  <div className="flex items-center justify-between">
    {/* Ícone e Info */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-slate-600" />
      </div>
      <div>
        <div className="text-slate-900">{name}</div>
        <div className="text-sm text-slate-500">{category} • {date}</div>
      </div>
    </div>
    
    {/* Valor e Badge */}
    <div className="text-right">
      <div className="text-slate-900">R$ {amount}</div>
      <Badge variant={status} />
    </div>
  </div>
</div>
```

---

### Badges/Tags

**Especificações:**
- Border radius: full (pill)
- Padding: 4px 12px (0.25rem 0.75rem)
- Font size: xs (12px)
- Font weight: medium

```tsx
{/* Badge Pago - Success */}
<span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
  <CheckCircle className="w-3 h-3" />
  Pago
</span>

{/* Badge Pendente - Warning */}
<span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
  <Clock className="w-3 h-3" />
  Pendente
</span>

{/* Badge Atrasado - Danger */}
<span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">
  <AlertCircle className="w-3 h-3" />
  Atrasado
</span>
```

**Variantes de Cor:**
```
Success: bg-emerald-100 text-emerald-700
Warning: bg-orange-100 text-orange-700
Danger: bg-red-100 text-red-700
Info: bg-blue-100 text-blue-700
Neutral: bg-slate-100 text-slate-700
```

---

### Botões

#### Botão Primary (Principal)
```tsx
<button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
  <Icon className="w-4 h-4" />
  {label}
</button>
```

#### Botão Secondary (Secundário)
```tsx
<button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg transition-colors">
  {label}
</button>
```

#### Botão Ghost (Ícone)
```tsx
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors">
  <Icon className="w-5 h-5 text-slate-600" />
</button>
```

#### Botão com Gradiente (CTA)
```tsx
<button className="bg-gradient-to-br from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
  {label}
</button>
```

**Especificações:**
- Border radius: lg (10px) ou xl (12px)
- Padding: py-2 px-4 (padrão)
- Font weight: medium
- Transição: colors ou opacity 300ms
- Ícones: 16px (w-4 h-4) ou 20px (w-5 h-5)

---

### Inputs

**Especificações:**
- Background: slate-100
- Border radius: xl (12px)
- Padding: 12px 16px
- Border: transparent (padrão), purple-500 (focus)

```tsx
<div className="space-y-2">
  <label className="text-slate-700">
    {label}
  </label>
  <input
    type="text"
    className="w-full px-4 py-3 bg-slate-100 rounded-xl border-2 border-transparent focus:border-purple-500 focus:outline-none transition-colors"
    placeholder={placeholder}
  />
</div>
```

**Select:**
```tsx
<select className="w-full px-4 py-3 bg-slate-100 rounded-xl border-2 border-transparent focus:border-purple-500 focus:outline-none transition-colors">
  <option>{option}</option>
</select>
```

---

### Modais

**Especificações:**
- Background: white
- Border radius: 3xl (24px)
- Padding: 32px (2rem)
- Shadow: xl
- Max width: 500px
- Overlay: rgba(0,0,0,0.5)

```tsx
{/* Overlay */}
<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
  {/* Modal */}
  <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl">
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-slate-900">{title}</h2>
      <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
        <X className="w-5 h-5" />
      </button>
    </div>
    
    {/* Content */}
    <div className="space-y-4">
      {/* Inputs, forms, etc */}
    </div>
    
    {/* Footer */}
    <div className="flex gap-3 mt-6">
      <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 rounded-xl transition-colors">
        Cancelar
      </button>
      <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition-colors">
        Confirmar
      </button>
    </div>
  </div>
</div>
```

---

### Charts (Gráficos)

**Cores Padrão:**
```tsx
const CHART_COLORS = {
  purple: '#7c3aed',  // Transaction View, Primary
  green: '#10b981',   // Sales, Income
  orange: '#f59e0b',  // Payment, Warnings
  blue: '#3b82f6',    // Info, Secondary
  red: '#ef4444'      // Expenses, Negative
};
```

**Configuração Recharts:**
```tsx
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

// Line Chart Example
<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
    <XAxis dataKey="month" stroke="#64748b" />
    <YAxis stroke="#64748b" />
    <Tooltip 
      contentStyle={{ 
        backgroundColor: '#fff', 
        border: '1px solid #e2e8f0',
        borderRadius: '12px'
      }}
    />
    <Legend />
    <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} />
    <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2} />
  </LineChart>
</ResponsiveContainer>

// Pie Chart Example
<ResponsiveContainer width="100%" height={300}>
  <PieChart>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      innerRadius={60}
      outerRadius={100}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
</ResponsiveContainer>
```

---

## 📐 Layout e Grid

### Estrutura Principal

```tsx
<div className="flex min-h-screen bg-slate-50">
  {/* Sidebar - Desktop only */}
  <aside className="hidden md:flex md:flex-col w-64 bg-slate-900 fixed h-screen">
    {/* Sidebar content */}
  </aside>

  {/* Main Content */}
  <div className="flex-1 md:ml-64">
    {/* Header */}
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      {/* Header content */}
    </header>

    {/* Page Content */}
    <main className="p-6 pb-24 md:pb-6">
      {/* Content here */}
    </main>
  </div>

  {/* Bottom Nav - Mobile only */}
  <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 z-50">
    {/* Mobile navigation */}
  </nav>
</div>
```

### Grid de Cards

```tsx
{/* Responsive Grid - Stats Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Cards aqui */}
</div>

{/* Grid 2 Colunas */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* Cards maiores */}
</div>

{/* Grid 3 Colunas */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Cards médios */}
</div>
```

### Espaçamento de Seções

```tsx
<div className="space-y-6">
  {/* Seção 1 */}
  <section>...</section>
  
  {/* Seção 2 */}
  <section>...</section>
  
  {/* Seção 3 */}
  <section>...</section>
</div>
```

---

## 📱 Responsividade

### Breakpoints

```
Mobile: < 640px (sm)
Tablet: 640px - 1023px (sm, md)
Desktop: ≥ 1024px (lg, xl, 2xl)
```

### Padrões Responsivos

#### Sidebar
```tsx
{/* Hidden on mobile, visible on md+ */}
className="hidden md:flex w-64"
```

#### Bottom Navigation
```tsx
{/* Visible on mobile only */}
className="md:hidden fixed bottom-0"
```

#### Grid Responsivo
```tsx
{/* 1 coluna mobile, 2 tablet, 4 desktop */}
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
```

#### Padding Responsivo
```tsx
{/* Mais padding em telas grandes */}
className="p-4 md:p-6 lg:p-8"
```

#### Text Responsivo
```tsx
{/* Esconder texto em mobile */}
<span className="hidden sm:inline">Texto completo</span>
<span className="sm:hidden">Curto</span>
```

### Mobile-Specific Considerations

1. **Bottom Padding**: Adicionar `pb-24` no mobile para não sobrepor bottom nav
2. **Touch Targets**: Mínimo 44px x 44px para botões em mobile
3. **Font Sizes**: Não usar tamanhos menores que 14px em mobile
4. **Spacing**: Reduzir gaps em mobile (gap-4 → gap-3)

---

## ♿ Acessibilidade

### Contrast Ratios

Todos os pares de cores devem ter contraste mínimo:
- Texto normal: 4.5:1
- Texto grande (18px+): 3:1
- UI Components: 3:1

### Exemplos Conformes

```
✅ text-slate-900 on bg-white (16.1:1)
✅ text-slate-600 on bg-white (7.5:1)
✅ text-white on bg-purple-600 (8.2:1)
✅ text-white on bg-slate-900 (16.1:1)
❌ text-slate-400 on bg-white (2.5:1) - Usar apenas para disabled
```

### ARIA Labels

```tsx
{/* Buttons com apenas ícone */}
<button aria-label="Fechar modal">
  <X className="w-5 h-5" />
</button>

{/* Navigation */}
<nav aria-label="Menu principal">
  {/* Items */}
</nav>

{/* Inputs */}
<label htmlFor="amount">Valor</label>
<input id="amount" type="number" />
```

### Focus States

```tsx
{/* Visible focus ring */}
className="focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
```

### Keyboard Navigation

- Todos os botões e links devem ser focáveis
- Modais devem ter trap focus
- Usar semantic HTML (`<button>`, `<nav>`, `<main>`)

---

## 💻 Exemplos de Código

### Dashboard Completo

```tsx
import { TrendingUp, TrendingDown, Wallet, Plus } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Income Card */}
        <div className="bg-white rounded-2xl p-5 border-t-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="text-slate-600 text-sm">Total Income</div>
            <TrendingUp className="w-5 h-5 text-purple-500" />
          </div>
          <div className="mb-2">
            <span className="text-3xl text-slate-900">R$ 8.500</span>
          </div>
          <div className="text-sm text-slate-500">
            +12% from last month
          </div>
        </div>

        {/* Expense Card */}
        <div className="bg-white rounded-2xl p-5 border-t-4 border-red-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="text-slate-600 text-sm">Total Expenses</div>
            <TrendingDown className="w-5 h-5 text-red-500" />
          </div>
          <div className="mb-2">
            <span className="text-3xl text-slate-900">R$ 3.500</span>
          </div>
          <div className="text-sm text-slate-500">
            -8% from last month
          </div>
        </div>

        {/* Wallet Card */}
        <div className="bg-white rounded-2xl p-5 border-t-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="text-slate-600 text-sm">Available Balance</div>
            <Wallet className="w-5 h-5 text-green-500" />
          </div>
          <div className="mb-2">
            <span className="text-3xl text-slate-900">R$ 5.000</span>
          </div>
          <div className="text-sm text-slate-500">
            Ready to spend
          </div>
        </div>

        {/* Action Card */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-white mb-4">
            <div className="text-sm mb-2">Quick Action</div>
            <div className="text-xl">Add Transaction</div>
          </div>
          <button className="w-full bg-white text-purple-600 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-50 transition-colors">
            <Plus className="w-4 h-4" />
            New Entry
          </button>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-slate-900 mb-4">Income vs Expenses</h3>
          {/* Chart component here */}
        </div>

        {/* Chart Card 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-slate-900 mb-4">Category Breakdown</h3>
          {/* Chart component here */}
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-slate-900">Recent Transactions</h3>
          <button className="text-purple-600 text-sm hover:text-purple-700">
            View All
          </button>
        </div>
        
        <div className="space-y-3">
          {/* Transaction items */}
        </div>
      </div>
    </div>
  );
}
```

### Transaction Item Component

```tsx
import { CheckCircle, Clock } from 'lucide-react';

interface TransactionItemProps {
  name: string;
  amount: number;
  date: string;
  category: string;
  paid: boolean;
}

export function TransactionItem({ name, amount, date, category, paid }: TransactionItemProps) {
  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
            <Wallet className="w-5 h-5 text-slate-600" />
          </div>
          <div>
            <div className="text-slate-900">{name}</div>
            <div className="text-sm text-slate-500">{category} • {date}</div>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-slate-900 mb-1">R$ {amount.toFixed(2)}</div>
          {paid ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
              <CheckCircle className="w-3 h-3" />
              Pago
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
              <Clock className="w-3 h-3" />
              Pendente
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
```

### Modal Example

```tsx
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-slate-900">{title}</h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {children}
      </div>
    </div>
  );
}
```

---

## 🎨 Variações de Tema

### Dark Mode (Futuro)

Para implementar dark mode no futuro, os tokens já suportam:

```tsx
// Toggle theme
const [theme, setTheme] = useState<'light' | 'dark'>('light');

// Aplicar classe na root
<div className={theme}>
  {/* App */}
</div>
```

As cores no `/styles/globals.css` já têm variante `.dark`.

---

## 📚 Recursos Adicionais

### Ícones
- **Biblioteca**: `lucide-react`
- **Tamanhos comuns**: 16px (w-4 h-4), 20px (w-5 h-5), 24px (w-6 h-6)
- **Cores**: Inherit from parent text color

### Animações
- **Transições**: `transition-colors`, `transition-shadow`, `transition-all`
- **Duração**: 300ms (padrão), 150ms (fast), 500ms (slow)
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)`

### Charts
- **Biblioteca**: `recharts`
- **Responsividade**: Sempre usar `ResponsiveContainer`
- **Cores**: Usar paleta definida em tokens

---

## ✅ Checklist de Implementação

Ao implementar um novo componente, verificar:

- [ ] Usa tokens de cor definidos (não hardcoded)
- [ ] Border radius consistente (xl, 2xl, 3xl)
- [ ] Espaçamento modular (múltiplos de 4px)
- [ ] Hover states implementados
- [ ] Transições suaves (300ms)
- [ ] Responsivo (mobile-first)
- [ ] Acessível (ARIA, contraste, keyboard)
- [ ] Ícones do lucide-react
- [ ] Font weights corretos (medium para headings/buttons)
- [ ] Semantic HTML

---

## 🔄 Versionamento

**Versão**: 1.0.0  
**Data**: Dezembro 2024  
**Última atualização**: 08/12/2025

---

## 📞 Suporte

Para dúvidas sobre implementação:
1. Consultar tokens.json para valores exatos
2. Verificar componentes existentes em `/components/`
3. Revisar `/styles/globals.css` para CSS custom properties

---

## 🎯 Exemplos de Uso para IA

### Prompt Example 1: Criar novo card de estatística

```
Crie um card de estatística seguindo o design system:
- Background: white
- Border radius: 2xl
- Padding: 20px
- Border top: 4px purple-500
- Shadow: sm com hover:shadow-md
- Título em text-sm text-slate-600
- Valor em text-3xl text-slate-900
- Indicador com ícone e porcentagem
```

### Prompt Example 2: Criar lista de itens

```
Crie uma lista de transações seguindo o design system:
- Container: bg-white rounded-2xl p-6 shadow-sm
- Items: rounded-xl p-4 border border-slate-200
- Layout: flex com ícone (slate-100 bg), texto, valor
- Badges: rounded-full com cores semânticas (emerald, orange, red)
- Gap entre items: space-y-3
```

### Prompt Example 3: Criar botão de ação

```
Crie um botão primary seguindo o design system:
- Background: purple-600 com hover:purple-700
- Text: white
- Padding: py-2 px-4
- Border radius: lg
- Transition: colors
- Ícone: 16px com gap-2
- Font weight: medium
```
