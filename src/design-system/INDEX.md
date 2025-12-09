# FinanceApp Design System - Quick Index

Índice de navegação rápida para encontrar o que você precisa.

---

## 🎯 Começando

**Novo no projeto?** Comece aqui:
1. [README.md](./README.md) - Visão geral e quick start
2. [tokens.json](./tokens.json) - Valores de design fundamentais
3. [implementation-guide.md](./implementation-guide.md) - Guia completo

**IA implementando código?** Comece aqui:
1. [ai-prompt-guide.md](./ai-prompt-guide.md) - Templates e instruções para IA
2. [tokens.json](./tokens.json) - Valores exatos
3. [component-patterns.md](./component-patterns.md) - Padrões prontos

---

## 📚 Todos os Arquivos

### 1. README.md
**O que é:** Documentação principal do design system  
**Quando usar:** Primeira leitura, visão geral do sistema  
**Contém:**
- Visão geral da identidade visual
- Paleta de cores resumida
- Componentes principais
- Quick start examples
- Checklist de implementação

[→ Ler README.md](./README.md)

---

### 2. tokens.json
**O que é:** Design tokens em formato JSON (Design Tokens Format)  
**Quando usar:** Sempre que precisar de valores exatos  
**Contém:**
- Cores (brand, semantic, neutral, charts)
- Espaçamentos (spacing scale)
- Border radius
- Shadows
- Typography
- Component tokens
- Breakpoints
- Animation timings

**Estrutura:**
```json
{
  "colors": { ... },
  "spacing": { ... },
  "borderRadius": { ... },
  "shadows": { ... },
  "typography": { ... },
  "components": { ... },
  "breakpoints": { ... },
  "layout": { ... },
  "animation": { ... }
}
```

[→ Ver tokens.json](./tokens.json)

---

### 3. implementation-guide.md
**O que é:** Guia completo de implementação  
**Quando usar:** Implementar qualquer componente ou feature  
**Contém:**
- Princípios de design
- Paleta de cores detalhada
- Sistema de espaçamento
- Todos os componentes principais:
  - Sidebar
  - Bottom Navigation
  - Header
  - Cards
  - Buttons
  - Inputs
  - Modals
  - Badges
  - Charts
- Layouts e grids
- Responsividade (breakpoints, padrões)
- Acessibilidade (contraste, ARIA, keyboard)
- Exemplos de código completos

**Seções principais:**
1. Visão Geral
2. Princípios de Design
3. Tokens de Design
4. Componentes (com código)
5. Layout e Grid
6. Responsividade
7. Acessibilidade
8. Exemplos de Código

[→ Ler implementation-guide.md](./implementation-guide.md)

---

### 4. component-patterns.md
**O que é:** Padrões de componentes reutilizáveis  
**Quando usar:** Criar componentes específicos do app  
**Contém:**
- Financial Display Patterns
  - Currency formatting
  - Percentage changes
  - Date display
- Card Patterns
  - Stat Card
  - List Card
  - Chart Card
- List Item Patterns
  - Transaction Item
  - Debt Ranking Item
- Action Patterns
  - FAB (Floating Action Button)
  - Quick Actions Bar
- Filter & Search Patterns
- Empty States
- Loading States
- Special Components
  - Progress Bar
  - Avatar
  - Tooltip
- Mobile-Specific Patterns
- Complete Compositions

**Estrutura:**
```
1. Financial Display Patterns
2. Card Patterns
3. List Item Patterns
4. Action Patterns
5. Filter & Search Patterns
6. Empty States
7. Loading States
8. Special Components
9. Mobile-Specific Patterns
10. Composition Examples
```

[→ Ler component-patterns.md](./component-patterns.md)

---

### 5. tailwind-reference.md
**O que é:** Referência rápida de classes Tailwind CSS  
**Quando usar:** Consulta rápida de classes  
**Contém:**
- Colors (todas as cores com hex values)
- Spacing (padding, margin, gap)
- Typography (tamanhos, pesos, cores)
- Layout (display, flex, grid, width/height)
- Borders & Radius
- Effects (shadow, opacity, gradients)
- Transitions & Animations
- Responsive Design (breakpoints, padrões)
- Common Component Classes (copiar/colar)

**Organização:**
1. 🎨 Colors
2. 📏 Spacing
3. 🔤 Typography
4. 📐 Layout
5. 🎨 Borders & Radius
6. 🎭 Effects
7. 🎬 Transitions & Animations
8. 📱 Responsive Design
9. 🎯 Common Component Classes
10. ⚠️ Important Notes

[→ Ler tailwind-reference.md](./tailwind-reference.md)

---

### 6. visual-reference.md
**O que é:** Referência visual com diagramas ASCII  
**Quando usar:** Ver visualmente como componentes devem ficar  
**Contém:**
- Color palette visual
- Spacing scale visual
- Border radius visual
- Todos os componentes com:
  - Diagrama ASCII
  - Código completo
- Layout patterns
- Icon sizes
- State variations
- Gradient patterns
- Responsive breakpoints
- Shadow reference
- Copy-paste snippets

**Exemplo de conteúdo:**
```
┌────────────────────────────────────┐
│ ████ Top Border (4px colored)      │
├────────────────────────────────────┤
│ Total Income              [Icon]   │
│ R$ 8.500                           │
│ ↗ 36%  from last month            │
└────────────────────────────────────┘
```

[→ Ler visual-reference.md](./visual-reference.md)

---

### 7. ai-prompt-guide.md
**O que é:** Guia completo para IAs implementarem código  
**Quando usar:** IA vai implementar ou modificar código  
**Contém:**
- Como usar o design system
- Templates de prompt para IA
  - Criar novo componente
  - Modificar componente
  - Criar feature completa
- Prompts prontos para casos comuns:
  - Cards de estatística
  - Listas de transações
  - Modais
  - Botões
  - Inputs
  - Badges
  - Gráficos
- Regras de ouro (✅ SEMPRE, ❌ NUNCA)
- Checklist de implementação
- Exemplos de prompts completos
- Dicas para IAs
- Quick start para nova IA

**Seções principais:**
1. 🤖 Como usar este Design System
2. 📝 Templates de Prompt
3. 🎯 Prompts Prontos
4. 🎨 Regras de Ouro
5. 🔍 Checklist
6. 💡 Dicas para IAs
7. 🚀 Quick Start

[→ Ler ai-prompt-guide.md](./ai-prompt-guide.md)

---

### 8. examples.md
**O que é:** Exemplos práticos completos de implementação  
**Quando usar:** Ver exemplos funcionais de features completas  
**Contém:**
- Dashboard Stats Section (completo)
- Transaction List with Filters (completo)
- Add Transaction Modal (completo)
- Chart Card with Data (completo)
- Goal Progress Card (completo)
- Notification Toast (completo)
- Responsive Dashboard Page (completo)

**Cada exemplo inclui:**
- Visual layout (ASCII)
- Código completo funcional
- TypeScript types
- State management
- Event handlers
- Validação
- Formatação de dados
- Responsividade

[→ Ler examples.md](./examples.md)

---

## 🔍 Busca Rápida

### "Preciso de cores"
→ [tokens.json](./tokens.json) - Seção `colors`  
→ [tailwind-reference.md](./tailwind-reference.md) - Seção Colors  
→ [visual-reference.md](./visual-reference.md) - Color Palette

### "Como criar um card?"
→ [component-patterns.md](./component-patterns.md) - Card Patterns  
→ [implementation-guide.md](./implementation-guide.md) - Seção Cards  
→ [visual-reference.md](./visual-reference.md) - Card examples

### "Como criar um botão?"
→ [implementation-guide.md](./implementation-guide.md) - Seção Botões  
→ [visual-reference.md](./visual-reference.md) - Buttons  
→ [ai-prompt-guide.md](./ai-prompt-guide.md) - Criar Botão

### "Preciso de um exemplo completo"
→ [examples.md](./examples.md) - Todos os exemplos  
→ [component-patterns.md](./component-patterns.md) - Composition Examples

### "Classes Tailwind para..."
→ [tailwind-reference.md](./tailwind-reference.md) - Busque por categoria  
→ [visual-reference.md](./visual-reference.md) - Copy-paste snippets

### "Sou uma IA, como começar?"
→ [ai-prompt-guide.md](./ai-prompt-guide.md) - Quick Start para IA  
→ [tokens.json](./tokens.json) - Valores fundamentais  
→ [component-patterns.md](./component-patterns.md) - Padrões prontos

### "Valores de espaçamento"
→ [tokens.json](./tokens.json) - Seção `spacing`  
→ [tailwind-reference.md](./tailwind-reference.md) - Spacing  
→ [visual-reference.md](./visual-reference.md) - Spacing Scale

### "Border radius correto"
→ [tokens.json](./tokens.json) - Seção `borderRadius`  
→ [visual-reference.md](./visual-reference.md) - Border Radius

### "Como fazer responsivo?"
→ [implementation-guide.md](./implementation-guide.md) - Responsividade  
→ [tailwind-reference.md](./tailwind-reference.md) - Responsive Design

### "Acessibilidade"
→ [implementation-guide.md](./implementation-guide.md) - Acessibilidade  
→ [ai-prompt-guide.md](./ai-prompt-guide.md) - Checklist

---

## 📊 Fluxogramas de Uso

### Fluxo: Desenvolvedor Humano

```
Novo projeto/feature
        ↓
1. Ler README.md (visão geral)
        ↓
2. Consultar tokens.json (valores)
        ↓
3. Ler implementation-guide.md (padrões)
        ↓
4. Buscar em component-patterns.md (componente similar)
        ↓
5. Usar tailwind-reference.md (classes)
        ↓
6. Ver examples.md (exemplo completo)
        ↓
Implementar
        ↓
Validar com checklist
```

### Fluxo: IA Implementando Código

```
Recebe solicitação do usuário
        ↓
1. Ler ai-prompt-guide.md (como implementar)
        ↓
2. Identificar tipo de componente
        ↓
3. Buscar em component-patterns.md (padrão similar)
        ↓
4. Consultar tokens.json (valores exatos)
        ↓
5. Aplicar classes de tailwind-reference.md
        ↓
6. Validar contra checklist
        ↓
Gerar código
        ↓
Conferir com examples.md se necessário
```

---

## 🎯 Casos de Uso Comuns

### Caso 1: "Preciso criar uma nova página"
1. Ver [examples.md](./examples.md) - Responsive Dashboard Page
2. Seguir estrutura de layout em [implementation-guide.md](./implementation-guide.md)
3. Compor com componentes de [component-patterns.md](./component-patterns.md)

### Caso 2: "Preciso de um componente que não existe"
1. Procurar similar em [component-patterns.md](./component-patterns.md)
2. Seguir princípios de [implementation-guide.md](./implementation-guide.md)
3. Usar tokens de [tokens.json](./tokens.json)
4. Aplicar classes de [tailwind-reference.md](./tailwind-reference.md)

### Caso 3: "Preciso modificar um componente existente"
1. Identificar padrão em [component-patterns.md](./component-patterns.md)
2. Verificar tokens em [tokens.json](./tokens.json)
3. Manter consistência com [implementation-guide.md](./implementation-guide.md)

### Caso 4: "Não sei qual cor usar"
1. Ver paleta em [README.md](./README.md)
2. Consultar valores exatos em [tokens.json](./tokens.json)
3. Ver uso em [visual-reference.md](./visual-reference.md)

### Caso 5: "Como fazer responsivo?"
1. Ler seção Responsividade em [implementation-guide.md](./implementation-guide.md)
2. Ver breakpoints em [tokens.json](./tokens.json)
3. Aplicar padrões de [tailwind-reference.md](./tailwind-reference.md)

---

## 📖 Ordem de Leitura Recomendada

### Para Desenvolvedores (primeira vez):
1. README.md (10 min)
2. implementation-guide.md (30 min)
3. component-patterns.md (20 min)
4. tailwind-reference.md (consulta)
5. examples.md (consulta)

### Para Desenvolvedores (consulta rápida):
1. tailwind-reference.md
2. visual-reference.md
3. component-patterns.md

### Para IAs:
1. ai-prompt-guide.md (leitura completa)
2. tokens.json (valores fundamentais)
3. component-patterns.md (padrões)
4. tailwind-reference.md (referência)

---

## 🔗 Links Externos

- **Design Tokens Format**: https://design-tokens.github.io/community-group/format/
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev/
- **Recharts Docs**: https://recharts.org/

---

## 📝 Notas Importantes

### ⚠️ Antes de implementar qualquer código:

1. ✅ Consulte [tokens.json](./tokens.json) para valores
2. ✅ Verifique padrão similar em [component-patterns.md](./component-patterns.md)
3. ✅ Siga guidelines de [implementation-guide.md](./implementation-guide.md)
4. ✅ Use classes de [tailwind-reference.md](./tailwind-reference.md)
5. ✅ Valide contra checklist

### ❌ Evite:

1. ❌ Hardcodar cores não definidas
2. ❌ Usar font-size/weight classes sem necessidade
3. ❌ Criar padrões novos desnecessários
4. ❌ Ignorar responsividade
5. ❌ Esquecer acessibilidade

---

## 📞 Precisa de Ajuda?

**Não encontrou o que procura?**

1. Use Ctrl+F (Cmd+F) para buscar em cada arquivo
2. Consulte o [README.md](./README.md) para visão geral
3. Veja [examples.md](./examples.md) para casos de uso completos
4. Revise [ai-prompt-guide.md](./ai-prompt-guide.md) para orientações

**Encontrou inconsistência ou erro?**
- Documente em CHANGELOG.md
- Atualize arquivos relevantes

---

**FinanceApp Design System**  
*Sistema completo de design para finanças pessoais* 💜

Versão: 1.0.0 | Atualizado: 08/12/2025
