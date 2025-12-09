# AI Prompt Guide - FinanceApp Design System

Guia para IAs implementarem componentes seguindo o design system do FinanceApp.

---

## 🤖 Como usar este Design System

### 1. Antes de implementar qualquer componente:

```
1. Consulte `/design-system/tokens.json` para valores exatos de cores, espaçamentos, etc.
2. Revise `/design-system/implementation-guide.md` para padrões de componentes
3. Verifique `/design-system/component-patterns.md` para composições específicas
4. Use `/design-system/tailwind-reference.md` como referência rápida de classes
```

---

## 📝 Templates de Prompt para IA

### Template 1: Criar Novo Componente

```
Crie um componente [NOME] seguindo o FinanceApp Design System:

ESTRUTURA:
- [Descrever estrutura HTML/JSX]

ESTILO (usar Tailwind):
- Background: [cor do tokens.json]
- Border radius: [valor do tokens.json]
- Padding: [valor do tokens.json]
- Shadow: [valor do tokens.json]
- Cores específicas: [referência ao tokens.json]

INTERATIVIDADE:
- Hover: [descrever comportamento]
- Transição: [tipo e duração]

RESPONSIVIDADE:
- Mobile: [comportamento]
- Desktop: [comportamento]

ACESSIBILIDADE:
- ARIA labels onde necessário
- Focus states visíveis
- Contraste adequado

Referência: Consultar `/design-system/component-patterns.md` para padrões similares
```

**Exemplo prático:**

```
Crie um card de meta financeira seguindo o FinanceApp Design System:

ESTRUTURA:
- Container principal com título "Meta Mensal"
- Valor atual vs valor meta
- Barra de progresso
- Badge de status

ESTILO:
- Background: white (tokens.colors.neutral.white)
- Border radius: 2xl (tokens.borderRadius.2xl - 16px)
- Padding: 20px (tokens.spacing.5)
- Border top: 4px solid green-500 (tokens.colors.semantic.success.light)
- Shadow: sm com hover:md

INTERATIVIDADE:
- Hover: shadow-sm → shadow-md
- Transição: transition-shadow (300ms)

RESPONSIVIDADE:
- Mobile: Stack vertical, padding menor
- Desktop: Layout horizontal com ícone à esquerda

Referência: Similar ao StatCard em `/design-system/component-patterns.md`
```

---

### Template 2: Modificar Componente Existente

```
Modifique o componente [CAMINHO/ARQUIVO] seguindo estas diretrizes:

MUDANÇA SOLICITADA:
[Descrever o que deve mudar]

MANTER CONSISTÊNCIA COM:
- Paleta de cores: [referência ao tokens.json]
- Espaçamentos: [referência ao tokens.json]
- Border radius: [referência ao tokens.json]
- Padrões existentes: [referência ao implementation-guide.md]

VALIDAR:
- ✓ Não quebra responsividade
- ✓ Mantém acessibilidade
- ✓ Usa tokens definidos
- ✓ Transições suaves
```

---

### Template 3: Criar Feature Completa

```
Crie a feature [NOME] com múltiplos componentes seguindo o FinanceApp Design System:

COMPONENTES NECESSÁRIOS:
1. [Componente 1]
   - Estrutura: [descrever]
   - Padrão base: [referência ao component-patterns.md]

2. [Componente 2]
   - Estrutura: [descrever]
   - Padrão base: [referência ao component-patterns.md]

COMPOSIÇÃO:
- Layout: [grid/flex pattern]
- Espaçamento entre componentes: [tokens.spacing]

DESIGN TOKENS A USAR:
- Cores: [listar tokens específicos]
- Espaçamentos: [listar tokens específicos]
- Typography: [usar padrões do globals.css]

REFERÊNCIAS:
- Consultar `/design-system/tokens.json` para valores
- Seguir padrões em `/design-system/implementation-guide.md`
- Usar componentes similares em `/design-system/component-patterns.md`
```

---

## 🎯 Prompts Prontos para Casos Comuns

### 1. Criar Card de Estatística

```
Crie um card de estatística seguindo o padrão do FinanceApp:

USE:
- Background: bg-white
- Border radius: rounded-2xl (16px)
- Padding: p-5 (20px)
- Border top: border-t-4 border-[COLOR]-500
- Shadow: shadow-sm hover:shadow-md
- Transition: transition-shadow

ESTRUTURA:
1. Header: Título (text-sm text-slate-600) + Ícone (w-5 h-5)
2. Valor: text-3xl text-slate-900
3. Meta/Change: Componente PercentageChange

CORES DE BORDER POR TIPO:
- Income: border-purple-500
- Expense: border-red-500
- Goal: border-green-500
- Transaction: border-blue-500

Referência: StatCard em `/design-system/component-patterns.md`
```

---

### 2. Criar Lista de Transações

```
Crie uma lista de transações seguindo o padrão do FinanceApp:

CONTAINER:
- Background: bg-white
- Border radius: rounded-2xl
- Padding: p-6
- Shadow: shadow-sm

HEADER:
- Título: text-slate-900
- Botão "Ver todos": text-sm text-purple-600 hover:text-purple-700

ITEMS:
- Background: bg-white
- Border: border border-slate-200
- Hover: hover:border-slate-300
- Border radius: rounded-xl
- Padding: p-4
- Spacing: space-y-3

ITEM LAYOUT:
- Ícone: 40px circle, bg-slate-100
- Nome + categoria + data: flex-1
- Valor + badge: text-right

BADGES:
- Pago: bg-emerald-100 text-emerald-700
- Pendente: bg-orange-100 text-orange-700
- Atrasado: bg-red-100 text-red-700

Referência: TransactionItem em `/design-system/component-patterns.md`
```

---

### 3. Criar Modal/Dialog

```
Crie um modal seguindo o padrão do FinanceApp:

OVERLAY:
- Classes: fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50

MODAL:
- Background: bg-white
- Border radius: rounded-3xl (24px)
- Padding: p-8 (32px)
- Max width: max-w-md
- Shadow: shadow-xl

HEADER:
- Título: text-slate-900 (tamanho via h2 no globals.css)
- Botão fechar: text-slate-400 hover:text-slate-600
- Margin bottom: mb-6

CONTENT:
- Inputs: Usar padrão de `/design-system/component-patterns.md`
- Spacing: space-y-4

FOOTER:
- Layout: flex gap-3
- Botões full width: flex-1
- Cancelar: bg-slate-100 hover:bg-slate-200
- Confirmar: bg-purple-600 hover:bg-purple-700

Referência: Modal em `/design-system/component-patterns.md`
```

---

### 4. Criar Botão

```
Crie um botão seguindo o padrão do FinanceApp:

PRIMARY:
- Classes: bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors
- Com ícone: flex items-center gap-2

SECONDARY:
- Classes: bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg transition-colors

GHOST/ICON:
- Classes: w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors

GRADIENT (CTA):
- Classes: bg-gradient-to-br from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity

REGRAS:
- Border radius: rounded-lg (10px)
- Padding: py-2 px-4 (padrão)
- Ícones: w-4 h-4 ou w-5 h-5
- Sempre transition-colors ou transition-opacity

Referência: Seção Botões em `/design-system/implementation-guide.md`
```

---

### 5. Criar Input/Form Field

```
Crie um input seguindo o padrão do FinanceApp:

CONTAINER:
- Classes: space-y-2

LABEL:
- Classes: text-slate-700
- Texto automático via globals.css

INPUT:
- Classes: w-full px-4 py-3 bg-slate-100 rounded-xl border-2 border-transparent focus:border-purple-500 focus:outline-none transition-colors

SELECT:
- Mesmas classes do input

TEXTAREA:
- Mesmas classes + rows attribute

VALIDAÇÃO:
- Error: border-red-500, text-red-600 para mensagem
- Success: border-green-500, text-green-600 para mensagem

Referência: Seção Inputs em `/design-system/implementation-guide.md`
```

---

### 6. Criar Badge/Tag

```
Crie um badge seguindo o padrão do FinanceApp:

BASE:
- Classes: inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs

VARIANTES:
- Success: bg-emerald-100 text-emerald-700
- Warning: bg-orange-100 text-orange-700
- Danger: bg-red-100 text-red-700
- Info: bg-blue-100 text-blue-700
- Neutral: bg-slate-100 text-slate-700

COM ÍCONE:
- Ícone: w-3 h-3 (12px)
- Gap: gap-1 (4px)

EXEMPLOS:
- Pago: CheckCircle + "Pago" + emerald
- Pendente: Clock + "Pendente" + orange
- Atrasado: AlertCircle + "Atrasado" + red

Referência: Seção Badges em `/design-system/implementation-guide.md`
```

---

### 7. Criar Gráfico (Chart)

```
Crie um gráfico usando Recharts seguindo o padrão do FinanceApp:

CONTAINER (ChartCard):
- Background: bg-white
- Border radius: rounded-2xl
- Padding: p-6
- Shadow: shadow-sm

RESPONSIVE CONTAINER:
- Sempre usar: <ResponsiveContainer width="100%" height={300}>

CORES (usar tokens):
- Purple: #7c3aed (Transaction View, Primary)
- Green: #10b981 (Sales, Income)
- Orange: #f59e0b (Payment, Warnings)
- Blue: #3b82f6 (Info, Secondary)
- Red: #ef4444 (Expenses, Negative)

ESTILO:
- Grid: stroke="#e2e8f0" (slate-200)
- Axis: stroke="#64748b" (slate-500)
- Tooltip: backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px'
- Line stroke width: 2px
- Pie innerRadius: 60, outerRadius: 100

Referência: Seção Charts em `/design-system/implementation-guide.md`
```

---

## 🎨 Regras de Ouro

### ✅ SEMPRE:

1. **Consultar tokens.json** antes de hardcodar qualquer valor
2. **Usar cores da paleta** definida (purple, slate, green, orange, red, blue)
3. **Border radius consistente**: lg (10px), xl (12px), 2xl (16px), 3xl (24px)
4. **Espaçamento modular**: múltiplos de 4px (1, 2, 3, 4, 5, 6, 8)
5. **Transições suaves**: transition-colors, transition-shadow (300ms padrão)
6. **Responsividade**: mobile-first, breakpoint principal em md: (768px)
7. **Hover states**: sempre em elementos interativos
8. **Acessibilidade**: ARIA labels, contraste adequado, keyboard navigation

### ❌ NUNCA:

1. **Hardcodar cores** fora da paleta
2. **Usar font-size, font-weight, line-height classes** (exceto se solicitado)
3. **Esquecer estados hover/focus**
4. **Ignorar responsividade mobile**
5. **Usar border-radius inconsistentes**
6. **Criar variantes novas sem necessidade**
7. **Esquecer de adicionar transições**
8. **Usar classes deprecated ou não suportadas**

---

## 🔍 Checklist de Implementação

Ao implementar qualquer componente, verificar:

```
DESIGN TOKENS:
[ ] Cores vêm de tokens.json
[ ] Espaçamentos usam escala definida (4px base)
[ ] Border radius consistente
[ ] Shadows da paleta definida

TAILWIND:
[ ] Classes Tailwind válidas e suportadas
[ ] Não usa font-size/weight/line-height (exceto necessário)
[ ] Segue padrões de `/design-system/tailwind-reference.md`

INTERATIVIDADE:
[ ] Hover states implementados
[ ] Focus states visíveis
[ ] Transições suaves (300ms padrão)
[ ] Loading states onde aplicável

RESPONSIVIDADE:
[ ] Mobile-first approach
[ ] Breakpoint md: (768px) para sidebar
[ ] Grid responsivo (1 → 2 → 4 colunas)
[ ] Padding/spacing adaptativo

ACESSIBILIDADE:
[ ] ARIA labels em botões só com ícone
[ ] Contraste adequado (mínimo 4.5:1)
[ ] Keyboard navigation funcional
[ ] Semantic HTML (button, nav, main, etc.)

CÓDIGO:
[ ] TypeScript types definidos
[ ] Props interface clara
[ ] Componente reutilizável
[ ] Sem hardcoded values

DOCUMENTAÇÃO:
[ ] JSDoc comments se necessário
[ ] Props documentadas
[ ] Exemplos de uso claros
```

---

## 📚 Estrutura de Arquivos

Ao criar novos componentes:

```
/components/
  ComponentName.tsx        # Componentes de página/feature
  /ui/
    component-name.tsx     # Componentes de UI reutilizáveis
```

### Convenções:

- **PascalCase** para componentes: `StatCard.tsx`, `TransactionItem.tsx`
- **kebab-case** para UI components: `button.tsx`, `input.tsx`
- **Export named** para features: `export function Dashboard() {}`
- **Export default** apenas em `App.tsx`

---

## 🎯 Exemplos de Prompts Completos

### Exemplo 1: Feature Completa

```
Crie uma página de "Objetivos Financeiros" para o FinanceApp seguindo o design system:

COMPONENTES:

1. Header Section:
   - Título "Meus Objetivos" (h1 via globals.css)
   - Botão "Adicionar Objetivo" (primary button pattern)
   - Busca (SearchBar pattern)

2. Grid de Cards (Goals):
   - Grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4
   - Card: StatCard pattern com border-green-500
   - Conteúdo:
     * Nome do objetivo
     * Valor atual / Valor meta (formatCurrency)
     * ProgressBar component
     * Badge de status
     * Data target

3. Modal de Adicionar:
   - Modal pattern
   - Form com:
     * Input nome
     * Input valor meta
     * Input prazo
     * Select categoria
   - Botões: Cancelar + Criar

TOKENS A USAR:
- colors.brand.primary.600 (botões)
- colors.semantic.success.light (cards de objetivo)
- spacing.6 (section spacing)
- borderRadius.2xl (cards)
- borderRadius.3xl (modal)

REFERÊNCIAS:
- `/design-system/tokens.json` para valores
- `/design-system/component-patterns.md` para StatCard, Modal
- `/design-system/implementation-guide.md` para ProgressBar

RESPONSIVIDADE:
- Mobile: 1 coluna, bottom padding para nav
- Tablet: 2 colunas
- Desktop: 3 colunas

ESTADO VAZIO:
- EmptyState component com ícone Target
- Mensagem: "Nenhum objetivo cadastrado"
- CTA: "Criar Primeiro Objetivo"
```

---

### Exemplo 2: Componente Único

```
Crie um componente CategoryBadge para categorias de transações:

PROPS:
- category: string
- size?: 'sm' | 'md'

CATEGORIAS E CORES:
- Alimentação: orange-500 (🍔)
- Transporte: blue-500 (🚗)
- Saúde: red-500 (❤️)
- Lazer: purple-500 (🎮)
- Educação: green-500 (📚)
- Outros: slate-500 (📌)

ESTILO:
- Base: inline-flex items-center gap-2 rounded-full
- SM: px-2 py-0.5 text-xs
- MD: px-3 py-1 text-sm
- Background: {color}-100
- Text: {color}-700

EXEMPLO DE USO:
<CategoryBadge category="Alimentação" size="md" />
// Renderiza: 🍔 Alimentação (badge laranja)

TOKENS:
- borderRadius.full
- colors.semantic.* para cores
- typography.fontSize.xs/sm

REFERÊNCIA:
- Padrão Badge em `/design-system/implementation-guide.md`
- Cores em `/design-system/tokens.json`
```

---

## 💡 Dicas para IAs

### Ao receber uma solicitação:

1. **Identifique o tipo de componente**: É um card? botão? lista? modal?
2. **Encontre o padrão similar**: Procure em `/design-system/component-patterns.md`
3. **Extraia os tokens**: Consulte `/design-system/tokens.json` para valores exatos
4. **Aplique as classes Tailwind**: Use `/design-system/tailwind-reference.md`
5. **Valide contra o checklist**: Garanta que todos os itens estão cobertos

### Ao gerar código:

1. **Seja consistente**: Use os mesmos padrões em toda a codebase
2. **Seja semântico**: Use HTML semântico (button, nav, main, header)
3. **Seja acessível**: Adicione ARIA, contraste, keyboard support
4. **Seja responsivo**: Mobile-first, progressive enhancement
5. **Seja documentado**: Adicione comentários onde necessário

### Ao explicar implementação:

1. **Referencie os arquivos do design system**
2. **Cite os tokens específicos usados**
3. **Explique escolhas de design**
4. **Aponte onde o código pode ser reutilizado**

---

## 🚀 Quick Start para Nova IA

Se você é uma IA implementando código pela primeira vez neste projeto:

1. Leia `/design-system/tokens.json` - Valores fundamentais
2. Leia `/design-system/implementation-guide.md` - Padrões e exemplos
3. Leia `/design-system/component-patterns.md` - Componentes reutilizáveis
4. Use `/design-system/tailwind-reference.md` - Referência rápida
5. Use `/design-system/ai-prompt-guide.md` (este arquivo) - Templates

**Fluxo de trabalho:**
```
Recebe solicitação
    ↓
Identifica tipo de componente
    ↓
Consulta component-patterns.md
    ↓
Extrai tokens de tokens.json
    ↓
Aplica classes Tailwind (tailwind-reference.md)
    ↓
Valida checklist
    ↓
Gera código
```

---

Este guia garante que qualquer IA possa implementar componentes consistentes e de alta qualidade no FinanceApp. 🎨✨
