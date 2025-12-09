# Guia de Contribuição - FinanceApp Design System

Bem-vindo! Este guia ajuda você a contribuir de forma consistente com o design system.

---

## 📋 Índice

- [Como Contribuir](#como-contribuir)
- [Adicionando Novos Componentes](#adicionando-novos-componentes)
- [Modificando Componentes Existentes](#modificando-componentes-existentes)
- [Atualizando Design Tokens](#atualizando-design-tokens)
- [Escrevendo Documentação](#escrevendo-documentação)
- [Padrões de Código](#padrões-de-código)
- [Checklist de Contribuição](#checklist-de-contribuição)
- [Versionamento](#versionamento)

---

## 🤝 Como Contribuir

### Tipos de Contribuição

1. **Novos Componentes** - Adicionar componentes ao design system
2. **Melhorias** - Melhorar componentes existentes
3. **Correções** - Corrigir bugs ou inconsistências
4. **Documentação** - Melhorar ou adicionar documentação
5. **Tokens** - Adicionar ou modificar design tokens

---

## ➕ Adicionando Novos Componentes

### Processo

1. **Planeje o Componente**
   - Verifique se já não existe similar
   - Defina props e comportamento
   - Esboce visual (pode ser ASCII)

2. **Defina Design Tokens (se necessário)**
   
   Adicione em `tokens.json`:
   ```json
   {
     "components": {
       "newComponent": {
         "background": { "value": "{colors.neutral.white}", "type": "color" },
         "borderRadius": { "value": "{borderRadius.xl}", "type": "dimension" },
         "padding": { "value": "{spacing.4}", "type": "dimension" }
       }
     }
   }
   ```

3. **Implemente o Componente**
   
   Crie em `/components/` ou `/components/ui/`:
   ```tsx
   interface NewComponentProps {
     // Props definidas
   }

   export function NewComponent({ ...props }: NewComponentProps) {
     // Implementação usando tokens e classes Tailwind
     return (
       <div className="bg-white rounded-xl p-4">
         {/* Conteúdo */}
       </div>
     );
   }
   ```

4. **Documente em component-patterns.md**
   
   Adicione seção:
   ```markdown
   ### X. New Component

   **Especificações:**
   - Background: white
   - Border radius: xl (12px)
   - Padding: 16px

   **Estrutura:**
   (código aqui)
   ```

5. **Adicione Exemplo em examples.md (se relevante)**
   
   ```markdown
   ## Example X: New Component Use Case

   ### Visual Layout
   (ASCII diagram)

   ### Complete Code
   (código completo funcional)
   ```

6. **Atualize visual-reference.md**
   
   Adicione diagrama ASCII e código:
   ```markdown
   ### X. New Component
   (diagrama + código)
   ```

7. **Registre em CHANGELOG.md**
   
   ```markdown
   ## [Unreleased]

   ### Added
   - New Component para [propósito]
   ```

### Template de Componente

```tsx
import { ComponentIcon } from 'lucide-react';

/**
 * NewComponent - Breve descrição
 * 
 * @example
 * <NewComponent prop1="value" prop2={123} />
 */
interface NewComponentProps {
  /** Descrição da prop */
  prop1: string;
  /** Descrição da prop */
  prop2?: number;
  /** Classe CSS adicional */
  className?: string;
}

export function NewComponent({ 
  prop1, 
  prop2 = 0,
  className = ''
}: NewComponentProps) {
  return (
    <div className={`bg-white rounded-xl p-4 ${className}`}>
      <ComponentIcon className="w-5 h-5" />
      {/* Conteúdo */}
    </div>
  );
}
```

---

## 🔧 Modificando Componentes Existentes

### Processo

1. **Identifique o Componente**
   - Localize arquivo em `/components/`
   - Leia documentação em `component-patterns.md`

2. **Faça as Modificações**
   - Mantenha consistência com tokens
   - Não quebre API existente (a menos que seja breaking change)
   - Adicione novos tokens se necessário

3. **Atualize Documentação**
   - `component-patterns.md` - Atualize descrição
   - `implementation-guide.md` - Atualize se relevante
   - `examples.md` - Atualize exemplos
   - `visual-reference.md` - Atualize diagramas

4. **Teste**
   - Verifique responsividade
   - Teste acessibilidade
   - Valide em diferentes navegadores

5. **Registre Mudança**
   ```markdown
   ## [Unreleased]

   ### Changed
   - ComponentName agora suporta [nova funcionalidade]
   ```

### Exemplo de Modificação

**Antes:**
```tsx
<button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
  {label}
</button>
```

**Depois:**
```tsx
<button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
  {label}
</button>
```

**Documentação atualizada:**
```markdown
### Button Primary

- Added: Hover state (hover:bg-purple-700)
- Added: Smooth transition (transition-colors)
```

---

## 🎨 Atualizando Design Tokens

### Adicionando Novo Token

1. **Adicione em tokens.json**
   ```json
   {
     "colors": {
       "brand": {
         "accent": {
           "value": "#f59e0b",
           "type": "color",
           "description": "Cor de acento secundária"
         }
       }
     }
   }
   ```

2. **Documente Uso**
   
   Em `implementation-guide.md`:
   ```markdown
   ### Nova Cor de Acento
   - **Uso**: Elementos de destaque secundários
   - **Valor**: #f59e0b (orange-500)
   - **Exemplo**: Badges informativos
   ```

3. **Atualize Referências**
   - `tailwind-reference.md` - Adicione à lista de cores
   - `visual-reference.md` - Adicione à paleta visual

### Modificando Token Existente

⚠️ **CUIDADO**: Pode afetar múltiplos componentes!

1. **Avalie Impacto**
   - Busque uso do token no código
   - Verifique componentes afetados

2. **Teste Mudanças**
   - Verifique todos os componentes que usam o token
   - Valide visualmente

3. **Documente Breaking Change**
   ```markdown
   ## [2.0.0] - YYYY-MM-DD

   ### Changed - BREAKING
   - Token `spacing.4` mudou de 16px para 18px
   - **Impacto**: Todos os componentes com padding padrão
   - **Migração**: Revisar espaçamentos personalizados
   ```

---

## 📝 Escrevendo Documentação

### Princípios

1. **Seja Claro**: Use linguagem simples e direta
2. **Seja Completo**: Inclua todos os detalhes necessários
3. **Seja Consistente**: Siga formato dos arquivos existentes
4. **Seja Visual**: Use diagramas ASCII quando apropriado
5. **Seja Prático**: Inclua exemplos de código

### Estrutura de Seção de Componente

```markdown
### X. Component Name

**Especificações:**
- Background: [token value]
- Border radius: [token value]
- Padding: [token value]
- Shadow: [token value]

**Estrutura:**
```tsx
// Código TSX aqui
```

**Uso:**
```tsx
// Exemplo de uso
```

**Variantes:**
- Variante 1: descrição
- Variante 2: descrição
```

### Diagramas ASCII

Use ASCII art para visualização:

```
┌────────────────────────────────────┐
│ Header                        [X]  │
├────────────────────────────────────┤
│                                    │
│ Content area                       │
│                                    │
├────────────────────────────────────┤
│ Footer                             │
└────────────────────────────────────┘
```

Ferramentas úteis:
- https://asciiflow.com/
- https://textik.com/

---

## 💻 Padrões de Código

### TypeScript

```tsx
// ✅ Bom
interface ComponentProps {
  /** Descrição clara */
  title: string;
  /** Opcional com default */
  variant?: 'primary' | 'secondary';
}

export function Component({ title, variant = 'primary' }: ComponentProps) {
  // ...
}

// ❌ Ruim
function Component(props: any) {
  // ...
}
```

### Tailwind CSS

```tsx
// ✅ Bom - Usa tokens via classes
className="bg-white rounded-2xl p-5 border-t-4 border-purple-500"

// ❌ Ruim - Hardcoded values
className="bg-white" style={{ borderRadius: '16px', padding: '20px' }}

// ✅ Bom - Responsivo
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"

// ❌ Ruim - Não responsivo
className="grid grid-cols-4 gap-4"
```

### Naming Conventions

```tsx
// ✅ Bom
export function StatCard() { }        // PascalCase para componentes
const formatCurrency = () => { }     // camelCase para funções
const MAX_ITEMS = 10;                // UPPER_SNAKE_CASE para constantes

// ❌ Ruim
export function stat_card() { }
const FormatCurrency = () => { }
const maxItems = 10;
```

### Imports

```tsx
// ✅ Bom - Organizado
import { useState, useEffect } from 'react';
import { Plus, X, Edit } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

// ❌ Ruim - Desorganizado
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { X, Edit } from 'lucide-react';
```

---

## ✅ Checklist de Contribuição

### Para Novos Componentes

- [ ] Componente implementado em TypeScript
- [ ] Props interface definida com JSDoc
- [ ] Usa design tokens (não hardcoded values)
- [ ] Classes Tailwind consistentes com design system
- [ ] Responsivo (mobile-first)
- [ ] Acessível (ARIA, contraste, keyboard)
- [ ] Hover/focus states implementados
- [ ] Transições suaves
- [ ] Documentado em `component-patterns.md`
- [ ] Exemplo adicionado em `examples.md` (se relevante)
- [ ] Diagrama em `visual-reference.md`
- [ ] Registrado em `CHANGELOG.md`
- [ ] Tokens adicionados em `tokens.json` (se novos)

### Para Modificações

- [ ] Código atualizado
- [ ] Documentação atualizada em todos os arquivos relevantes
- [ ] Exemplos atualizados
- [ ] Breaking changes documentados
- [ ] Registrado em `CHANGELOG.md`
- [ ] Versionamento correto

### Para Documentação

- [ ] Linguagem clara e direta
- [ ] Exemplos de código completos
- [ ] Diagramas visuais (se aplicável)
- [ ] Links internos corretos
- [ ] Formato consistente
- [ ] Sem erros de ortografia

---

## 📊 Versionamento

### Semantic Versioning

Seguimos [SemVer](https://semver.org/):

```
MAJOR.MINOR.PATCH

1.0.0 → 1.0.1 (patch - bugfix)
1.0.1 → 1.1.0 (minor - new feature)
1.1.0 → 2.0.0 (major - breaking change)
```

### Quando Incrementar

**MAJOR (X.0.0)** - Breaking Changes
- Mudança em API de componente
- Remoção de tokens
- Mudança incompatível em valores de tokens
- Exemplo: Remover prop obrigatória

**MINOR (0.X.0)** - New Features
- Novo componente
- Nova variante de componente
- Novos tokens
- Nova funcionalidade compatível
- Exemplo: Adicionar nova prop opcional

**PATCH (0.0.X)** - Bug Fixes
- Correção de bug
- Correção de documentação
- Melhoria de performance
- Exemplo: Corrigir hover state

### Release Process

1. **Atualize CHANGELOG.md**
   ```markdown
   ## [1.1.0] - 2025-12-15

   ### Added
   - Novo componente X
   - Nova variante Y

   ### Fixed
   - Bug em componente Z
   ```

2. **Atualize version em arquivos**
   - README.md
   - tokens.json (meta.version)
   - Qualquer outro arquivo com versão

3. **Tag release**
   ```bash
   git tag -a v1.1.0 -m "Release v1.1.0"
   git push origin v1.1.0
   ```

---

## 🎯 Exemplos de Contribuições

### Exemplo 1: Adicionar Novo Badge Variant

**1. Adicione token (tokens.json):**
```json
{
  "components": {
    "badge": {
      "variants": {
        "premium": { "value": "{colors.brand.primary.600}", "type": "color" }
      }
    }
  }
}
```

**2. Implemente:**
```tsx
// No componente Badge
const variants = {
  // ... existing
  premium: 'bg-purple-100 text-purple-700'
};
```

**3. Documente (component-patterns.md):**
```markdown
### Badge Variants

**Premium:**
- Background: purple-100
- Text: purple-700
- Uso: Features premium

```tsx
<Badge variant="premium">Pro Feature</Badge>
```
```

**4. Registre (CHANGELOG.md):**
```markdown
### Added
- Badge variant "premium" para features premium
```

---

### Exemplo 2: Corrigir Bug em Componente

**1. Identifique o bug:**
```tsx
// ANTES - Bug: não funciona em mobile
<div className="flex gap-4">
  <button>Action 1</button>
  <button>Action 2</button>
</div>
```

**2. Corrija:**
```tsx
// DEPOIS - Corrigido: stack em mobile
<div className="flex flex-col sm:flex-row gap-4">
  <button>Action 1</button>
  <button>Action 2</button>
</div>
```

**3. Documente (CHANGELOG.md):**
```markdown
### Fixed
- ActionBar agora stack verticalmente em mobile
```

---

### Exemplo 3: Melhorar Documentação

**1. Identifique gap:**
- Falta exemplo de uso em modal

**2. Adicione exemplo (examples.md):**
```markdown
## Example X: Modal with Form Validation

(código completo com validação)
```

**3. Registre (CHANGELOG.md):**
```markdown
### Changed
- Adicionado exemplo de validação em Modal (examples.md)
```

---

## 🚫 O Que NÃO Fazer

### ❌ Não Faça

1. **Hardcode valores**
   ```tsx
   // ❌ Ruim
   style={{ color: '#9333ea', padding: '20px' }}
   
   // ✅ Bom
   className="text-purple-600 p-5"
   ```

2. **Ignore responsividade**
   ```tsx
   // ❌ Ruim
   className="grid grid-cols-4"
   
   // ✅ Bom
   className="grid grid-cols-1 lg:grid-cols-4"
   ```

3. **Crie padrões inconsistentes**
   ```tsx
   // ❌ Ruim - Border radius diferente
   className="rounded-lg" // 8px
   className="rounded-2xl" // 16px - inconsistente
   
   // ✅ Bom - Consistente
   className="rounded-2xl" // Sempre 16px para cards
   ```

4. **Esqueça acessibilidade**
   ```tsx
   // ❌ Ruim
   <button>
     <X className="w-5 h-5" />
   </button>
   
   // ✅ Bom
   <button aria-label="Close">
     <X className="w-5 h-5" />
   </button>
   ```

5. **Adicione dependências sem necessidade**
   ```tsx
   // ❌ Ruim - Nova biblioteca apenas para um componente
   import { FancyComponent } from 'huge-library';
   
   // ✅ Bom - Use o que já temos
   // Implemente com Tailwind + React
   ```

---

## 📚 Recursos Úteis

### Documentação
- [Design Tokens Format](https://design-tokens.github.io/community-group/format/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

### Ferramentas
- [ASCII Flow](https://asciiflow.com/) - Diagramas ASCII
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - Verificar contraste
- [Lucide Icons](https://lucide.dev/) - Biblioteca de ícones

### Templates
- Ver `component-patterns.md` para templates de componentes
- Ver `examples.md` para exemplos completos
- Ver `ai-prompt-guide.md` para templates de prompts

---

## 💬 Dúvidas?

Se tiver dúvidas:

1. Consulte [INDEX.md](./INDEX.md) para navegação
2. Leia [implementation-guide.md](./implementation-guide.md) para padrões
3. Veja [examples.md](./examples.md) para casos similares
4. Revise [CHANGELOG.md](./CHANGELOG.md) para histórico

---

**Obrigado por contribuir com o FinanceApp Design System!** 💜

Mantendo nosso design consistente, acessível e de alta qualidade.
