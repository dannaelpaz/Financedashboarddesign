# FinanceApp Design System

Sistema de design completo para o aplicativo de finanças pessoais com visual moderno, sidebar escura e paleta roxa.

---

## 📚 Documentação

### 🎯 Para Desenvolvedores Humanos

1. **[tokens.json](./tokens.json)** - Design tokens no formato DTF (Design Tokens Format)
   - Cores, espaçamentos, tipografia, bordas, sombras
   - Tokens semânticos para componentes
   - Valores em formato consumível por código

2. **[implementation-guide.md](./implementation-guide.md)** - Guia completo de implementação
   - Princípios de design
   - Paleta de cores detalhada
   - Componentes com exemplos de código
   - Layouts e grids
   - Responsividade e acessibilidade
   - **→ LEIA ESTE PRIMEIRO**

3. **[component-patterns.md](./component-patterns.md)** - Padrões de componentes reutilizáveis
   - Componentes financeiros específicos
   - Padrões de lista e cards
   - Estados vazios e loading
   - Composições completas
   - **→ USE COMO REFERÊNCIA AO CRIAR COMPONENTES**

4. **[tailwind-reference.md](./tailwind-reference.md)** - Referência rápida Tailwind CSS
   - Classes mais usadas organizadas por categoria
   - Padrões de classes para componentes comuns
   - Guia de cores e espaçamentos
   - **→ CONSULTA RÁPIDA**

### 🤖 Para IAs

5. **[ai-prompt-guide.md](./ai-prompt-guide.md)** - Guia para implementação por IA
   - Templates de prompts
   - Exemplos práticos
   - Regras e checklist
   - Quick start para novas IAs
   - **→ ESSENCIAL PARA IAs IMPLEMENTANDO CÓDIGO**

---

## 🎨 Visão Geral do Design

### Identidade Visual

- **Cor Primária**: Roxo (#9333ea, #7c3aed) - Confiança e inovação
- **Sidebar**: Fundo escuro (slate-900) com itens roxos quando ativos
- **Cards**: Background branco com borda superior colorida de 4px
- **Tipografia**: Sans-serif system fonts, font-weight 500 para headings
- **Espaçamento**: Sistema modular baseado em 4px
- **Border Radius**: Generoso (10-24px) para visual moderno

### Paleta de Cores

```
PRIMÁRIA (Purple):
#9333ea - Botões, navegação ativa
#7c3aed - Charts, acentos

NEUTRA (Slate):
#0f172a - Sidebar, elementos escuros
#f8fafc - Background da página
#ffffff - Cards

SEMÂNTICA:
#10b981 - Success (verde)
#f59e0b - Warning (laranja)
#ef4444 - Danger (vermelho)
#3b82f6 - Info (azul)
```

### Componentes Principais

1. **Sidebar** (Desktop)
   - 256px largura
   - Background slate-900
   - Navegação com estados hover/active

2. **Bottom Navigation** (Mobile)
   - Fixed bottom
   - 5 itens em grid
   - Background slate-900

3. **Cards**
   - Border radius 16px
   - Padding 20px
   - Border top 4px (colorido)
   - Shadow sm → md no hover

4. **Buttons**
   - Primary: purple-600
   - Border radius 10px
   - Transições suaves

5. **Inputs**
   - Background slate-100
   - Border radius 12px
   - Focus: border purple-500

---

## 🚀 Como Usar

### Para Desenvolvedores

1. **Consulte tokens.json** para valores de design (cores, espaçamentos, etc.)
2. **Siga implementation-guide.md** para padrões de implementação
3. **Use component-patterns.md** para componentes pré-definidos
4. **Referência rápida** em tailwind-reference.md

### Para IAs

1. **Leia ai-prompt-guide.md** para entender como implementar
2. **Use templates de prompt** para requisições consistentes
3. **Valide contra checklist** antes de gerar código
4. **Consulte tokens.json** para valores exatos

---

## 📁 Estrutura de Arquivos

```
/design-system/
├── README.md                    # Este arquivo
├── tokens.json                  # Design tokens (valores fundamentais)
├── implementation-guide.md      # Guia completo de implementação
├── component-patterns.md        # Padrões de componentes reutilizáveis
├── tailwind-reference.md        # Referência rápida Tailwind
└── ai-prompt-guide.md          # Guia para IAs implementarem código
```

---

## 🎯 Quick Start

### Cenário 1: Criar um novo card de estatística

```tsx
// 1. Consulte: component-patterns.md → StatCard
// 2. Tokens: colors.brand.primary.500, borderRadius.2xl, spacing.5
// 3. Implemente:

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

### Cenário 2: Criar um botão primary

```tsx
// 1. Consulte: implementation-guide.md → Botões
// 2. Tokens: colors.brand.primary.600, borderRadius.lg
// 3. Implemente:

<button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
  <Plus className="w-4 h-4" />
  Add Transaction
</button>
```

### Cenário 3: Criar um modal

```tsx
// 1. Consulte: component-patterns.md → Modal
// 2. Tokens: borderRadius.3xl, spacing.8, shadows.xl
// 3. Implemente:

<div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
  <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-slate-900">Add Transaction</h2>
      <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
        <X className="w-5 h-5" />
      </button>
    </div>
    {/* Content */}
  </div>
</div>
```

---

## ✅ Checklist de Implementação

Ao criar qualquer componente:

- [ ] Usa cores de `tokens.json`
- [ ] Espaçamento modular (4px base)
- [ ] Border radius consistente
- [ ] Hover states implementados
- [ ] Transições suaves (300ms)
- [ ] Responsivo (mobile-first)
- [ ] Acessível (ARIA, contraste)
- [ ] Semantic HTML

---

## 🎨 Princípios de Design

### 1. Consistência
Todos os componentes seguem os mesmos padrões visuais e de código.

### 2. Hierarquia Visual
Informações importantes (valores, saldos) sempre em destaque.

### 3. Feedback Claro
Hover, focus, loading states sempre visíveis.

### 4. Responsividade
Mobile-first, progressive enhancement.

### 5. Acessibilidade
Contraste adequado, keyboard navigation, ARIA labels.

---

## 📊 Tokens em Destaque

### Cores Principais
```json
"colors.brand.primary.600": "#9333ea"
"colors.neutral.dark.900": "#0f172a"
"colors.neutral.white": "#ffffff"
"colors.semantic.success.light": "#10b981"
```

### Espaçamentos
```json
"spacing.4": "1rem"      // 16px - Padrão
"spacing.5": "1.25rem"   // 20px - Card padding
"spacing.6": "1.5rem"    // 24px - Section spacing
```

### Border Radius
```json
"borderRadius.lg": "0.625rem"   // 10px - Buttons
"borderRadius.xl": "0.75rem"    // 12px - Navigation
"borderRadius.2xl": "1rem"      // 16px - Cards
"borderRadius.3xl": "1.5rem"    // 24px - Modals
```

---

## 🔗 Links Úteis

- **Design Tokens Format**: https://design-tokens.github.io/community-group/format/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev/
- **Recharts**: https://recharts.org/

---

## 📝 Versionamento

**Versão Atual**: 1.0.0  
**Data de Criação**: Dezembro 2024  
**Última Atualização**: 08/12/2025

### Changelog

#### v1.0.0 (08/12/2025)
- ✨ Sistema de design completo criado
- 📚 Documentação em 5 arquivos principais
- 🎨 Design tokens em JSON (DTF format)
- 🤖 Guia específico para implementação por IA
- ✅ Padrões de componentes documentados

---

## 🤝 Contribuindo

Ao adicionar novos componentes ou padrões:

1. **Registre no tokens.json** se criar novos valores
2. **Documente em component-patterns.md** se criar padrão reutilizável
3. **Atualize implementation-guide.md** se mudar guidelines
4. **Mantenha consistência** com padrões existentes

---

## 📞 Suporte

Para dúvidas sobre o design system:

1. **Consulte tokens.json** para valores
2. **Veja examples em component-patterns.md**
3. **Leia princípios em implementation-guide.md**
4. **Use templates em ai-prompt-guide.md** (para IAs)

---

## 🎯 Objetivos do Design System

✅ Garantir consistência visual em todo o app  
✅ Facilitar implementação de novos componentes  
✅ Permitir que IAs implementem código de qualidade  
✅ Documentar padrões e decisões de design  
✅ Acelerar desenvolvimento mantendo qualidade  
✅ Garantir acessibilidade e responsividade  

---

**FinanceApp Design System v1.0.0**  
*Design moderno e consistente para finanças pessoais* 💜
