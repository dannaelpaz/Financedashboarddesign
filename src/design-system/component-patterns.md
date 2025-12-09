# Component Patterns - FinanceApp

Padrões reutilizáveis e composições específicas do aplicativo de finanças.

---

## 📊 Financial Display Patterns

### 1. Currency Display

**Padrão de formatação monetária:**

```tsx
// Função utilitária
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

// Uso em componente
<span className="text-3xl text-slate-900">
  {formatCurrency(8500)}
</span>
// Output: R$ 8.500,00
```

**Variações de tamanho:**
```tsx
{/* Large - Dashboard stats */}
<span className="text-3xl text-slate-900">{formatCurrency(value)}</span>

{/* Medium - List items */}
<span className="text-xl text-slate-900">{formatCurrency(value)}</span>

{/* Small - Subtotals */}
<span className="text-base text-slate-600">{formatCurrency(value)}</span>
```

**Com cor semântica:**
```tsx
{/* Positive (Income) */}
<span className="text-2xl text-green-600">
  +{formatCurrency(value)}
</span>

{/* Negative (Expense) */}
<span className="text-2xl text-red-600">
  -{formatCurrency(value)}
</span>

{/* Neutral */}
<span className="text-2xl text-slate-900">
  {formatCurrency(value)}
</span>
```

---

### 2. Percentage Change Indicator

**Componente reutilizável:**

```tsx
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface PercentageChangeProps {
  value: number;
  label?: string;
}

export function PercentageChange({ value, label }: PercentageChangeProps) {
  const isPositive = value >= 0;
  const Icon = isPositive ? ArrowUpRight : ArrowDownRight;
  
  return (
    <div className="flex items-center gap-2">
      <span className={`text-sm flex items-center gap-1 ${
        isPositive ? 'text-green-600' : 'text-red-600'
      }`}>
        <Icon className="w-4 h-4" />
        {Math.abs(value)}%
      </span>
      {label && (
        <span className="text-sm text-slate-500">{label}</span>
      )}
    </div>
  );
}

// Uso
<PercentageChange value={36} label="from last month" />
<PercentageChange value={-12} label="vs previous period" />
```

---

### 3. Date Display

**Formatação de datas:**

```tsx
const formatDate = (date: string | Date, format: 'short' | 'long' = 'short'): string => {
  const d = new Date(date);
  
  if (format === 'short') {
    return d.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: '2-digit' 
    });
    // Output: 08/12
  }
  
  return d.toLocaleDateString('pt-BR', { 
    day: '2-digit', 
    month: 'short',
    year: 'numeric'
  });
  // Output: 08 dez 2024
};

// Uso
<span className="text-sm text-slate-500">
  Vencimento: {formatDate('2025-12-08')}
</span>
```

**Com status relativo (vencimento):**

```tsx
interface DueDateProps {
  date: string;
  paid: boolean;
}

export function DueDate({ date, paid }: DueDateProps) {
  const dueDate = new Date(date);
  const today = new Date();
  const isOverdue = !paid && dueDate < today;
  const isDueSoon = !paid && dueDate <= new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000);
  
  return (
    <span className={`text-sm ${
      paid ? 'text-slate-500' :
      isOverdue ? 'text-red-600' :
      isDueSoon ? 'text-orange-600' :
      'text-slate-500'
    }`}>
      {formatDate(date)}
    </span>
  );
}
```

---

## 🎴 Card Patterns

### 1. Stat Card (Dashboard)

**Template completo:**

```tsx
interface StatCardProps {
  title: string;
  value: number;
  change?: number;
  changeLabel?: string;
  icon: React.ComponentType<{ className?: string }>;
  borderColor: 'purple' | 'green' | 'orange' | 'red' | 'blue';
  variant?: 'default' | 'gradient';
}

export function StatCard({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  borderColor,
  variant = 'default'
}: StatCardProps) {
  const borderColors = {
    purple: 'border-purple-500',
    green: 'border-green-500',
    orange: 'border-orange-500',
    red: 'border-red-500',
    blue: 'border-blue-500'
  };

  const iconColors = {
    purple: 'text-purple-500',
    green: 'text-green-500',
    orange: 'text-orange-500',
    red: 'text-red-500',
    blue: 'text-blue-500'
  };

  if (variant === 'gradient') {
    return (
      <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
        <div className="text-white mb-4">
          <div className="text-sm mb-2">{title}</div>
          <div className="text-3xl">{formatCurrency(value)}</div>
        </div>
        {/* CTA or additional content */}
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl p-5 border-t-4 ${borderColors[borderColor]} shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between mb-4">
        <div className="text-sm text-slate-600">{title}</div>
        <Icon className={`w-5 h-5 ${iconColors[borderColor]}`} />
      </div>
      
      <div className="mb-2">
        <span className="text-3xl text-slate-900">
          {formatCurrency(value)}
        </span>
      </div>
      
      {change !== undefined && (
        <PercentageChange value={change} label={changeLabel} />
      )}
    </div>
  );
}

// Uso
<StatCard
  title="Total Income"
  value={8500}
  change={36}
  changeLabel="from last month"
  icon={TrendingUp}
  borderColor="purple"
/>
```

---

### 2. List Card (Transactions, Expenses)

**Template:**

```tsx
interface ListCardProps {
  title: string;
  items: Array<any>;
  renderItem: (item: any) => React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function ListCard({ title, items, renderItem, action }: ListCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-slate-900">{title}</h3>
        {action && (
          <button 
            onClick={action.onClick}
            className="text-sm text-purple-600 hover:text-purple-700 transition-colors"
          >
            {action.label}
          </button>
        )}
      </div>
      
      <div className="space-y-3">
        {items.length > 0 ? (
          items.map(renderItem)
        ) : (
          <div className="text-center py-8 text-slate-500">
            Nenhum item encontrado
          </div>
        )}
      </div>
    </div>
  );
}
```

---

### 3. Chart Card

**Template:**

```tsx
interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode; // Chart component
  action?: React.ReactNode;
}

export function ChartCard({ title, subtitle, children, action }: ChartCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-slate-900 mb-1">{title}</h3>
          {subtitle && (
            <p className="text-sm text-slate-500">{subtitle}</p>
          )}
        </div>
        {action}
      </div>
      
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}

// Uso
<ChartCard 
  title="Income vs Expenses"
  subtitle="Last 6 months"
  action={
    <select className="text-sm border border-slate-200 rounded-lg px-3 py-1.5">
      <option>6 months</option>
      <option>1 year</option>
    </select>
  }
>
  <ResponsiveContainer width="100%" height={300}>
    {/* Chart component */}
  </ResponsiveContainer>
</ChartCard>
```

---

## 📋 List Item Patterns

### 1. Transaction Item

**Componente completo:**

```tsx
import { CheckCircle, Clock, AlertCircle, MoreVertical } from 'lucide-react';

interface TransactionItemProps {
  id: string;
  name: string;
  amount: number;
  date: string;
  category: string;
  paymentMethod?: string;
  status: 'paid' | 'pending' | 'overdue';
  onToggle?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function TransactionItem({
  id,
  name,
  amount,
  date,
  category,
  paymentMethod,
  status,
  onToggle,
  onEdit,
  onDelete
}: TransactionItemProps) {
  const statusConfig = {
    paid: {
      icon: CheckCircle,
      label: 'Pago',
      colors: 'bg-emerald-100 text-emerald-700'
    },
    pending: {
      icon: Clock,
      label: 'Pendente',
      colors: 'bg-orange-100 text-orange-700'
    },
    overdue: {
      icon: AlertCircle,
      label: 'Atrasado',
      colors: 'bg-red-100 text-red-700'
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-colors group">
      <div className="flex items-center gap-4">
        {/* Checkbox (optional) */}
        {onToggle && (
          <input
            type="checkbox"
            checked={status === 'paid'}
            onChange={() => onToggle(id)}
            className="w-5 h-5 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
          />
        )}

        {/* Icon */}
        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-slate-600" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="text-slate-900 truncate">{name}</div>
          <div className="text-sm text-slate-500">
            {category}
            {paymentMethod && ` • ${paymentMethod}`}
            {' • '}{formatDate(date)}
          </div>
        </div>

        {/* Amount & Status */}
        <div className="text-right flex-shrink-0">
          <div className="text-slate-900 mb-1">
            {formatCurrency(amount)}
          </div>
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs ${config.colors}`}>
            <Icon className="w-3 h-3" />
            {config.label}
          </span>
        </div>

        {/* Actions Menu (optional) */}
        {(onEdit || onDelete) && (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors">
              <MoreVertical className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

---

### 2. Debt Ranking Item

**Template específico para ranking de dívidas:**

```tsx
import { TrendingDown, AlertTriangle } from 'lucide-react';

interface DebtItemProps {
  rank: number;
  name: string;
  totalDebt: number;
  monthlyPayment: number;
  interestRate: number;
  priority: 'high' | 'medium' | 'low';
  recommendedAction: string;
}

export function DebtRankingItem({
  rank,
  name,
  totalDebt,
  monthlyPayment,
  interestRate,
  priority,
  recommendedAction
}: DebtItemProps) {
  const priorityConfig = {
    high: {
      color: 'border-red-500 bg-red-50',
      badge: 'bg-red-100 text-red-700',
      label: 'Alta Prioridade'
    },
    medium: {
      color: 'border-orange-500 bg-orange-50',
      badge: 'bg-orange-100 text-orange-700',
      label: 'Média Prioridade'
    },
    low: {
      color: 'border-green-500 bg-green-50',
      badge: 'bg-green-100 text-green-700',
      label: 'Baixa Prioridade'
    }
  };

  const config = priorityConfig[priority];

  return (
    <div className={`bg-white rounded-xl p-5 border-l-4 ${config.color} shadow-sm`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Rank Badge */}
          <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="font-medium">#{rank}</span>
          </div>
          
          {/* Debt Info */}
          <div>
            <h4 className="text-slate-900">{name}</h4>
            <div className="text-sm text-slate-500">
              Taxa: {interestRate}% • Parcela: {formatCurrency(monthlyPayment)}
            </div>
          </div>
        </div>

        {/* Priority Badge */}
        <span className={`px-3 py-1 rounded-full text-xs ${config.badge}`}>
          {config.label}
        </span>
      </div>

      {/* Total Debt */}
      <div className="mb-3">
        <div className="text-sm text-slate-600 mb-1">Saldo Devedor</div>
        <div className="text-2xl text-slate-900">{formatCurrency(totalDebt)}</div>
      </div>

      {/* Recommendation */}
      <div className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg">
        <AlertTriangle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700">{recommendedAction}</div>
      </div>
    </div>
  );
}
```

---

## 🎯 Action Patterns

### 1. Floating Action Button (FAB)

```tsx
import { Plus } from 'lucide-react';

export function FloatingActionButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 md:bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center z-40"
      aria-label="Add transaction"
    >
      <Plus className="w-6 h-6" />
    </button>
  );
}
```

---

### 2. Quick Actions Bar

```tsx
import { Plus, Download, Filter } from 'lucide-react';

interface QuickAction {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

interface QuickActionsBarProps {
  actions: QuickAction[];
}

export function QuickActionsBar({ actions }: QuickActionsBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {actions.map((action, index) => {
        const Icon = action.icon;
        const isPrimary = action.variant === 'primary';
        
        return (
          <button
            key={index}
            onClick={action.onClick}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
              ${isPrimary
                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }
            `}
          >
            <Icon className="w-4 h-4" />
            <span className="hidden sm:inline">{action.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// Uso
<QuickActionsBar
  actions={[
    {
      label: 'Add Transaction',
      icon: Plus,
      onClick: () => setShowModal(true),
      variant: 'primary'
    },
    {
      label: 'Export',
      icon: Download,
      onClick: handleExport
    },
    {
      label: 'Filter',
      icon: Filter,
      onClick: () => setShowFilters(true)
    }
  ]}
/>
```

---

## 🔍 Filter & Search Patterns

### 1. Search Bar

```tsx
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Pesquisar...' }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="flex items-center gap-2 bg-slate-100 px-4 py-3 rounded-xl">
        <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="bg-transparent border-none outline-none flex-1 text-slate-900 placeholder:text-slate-400"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
```

---

### 2. Filter Chips

```tsx
interface FilterChip {
  id: string;
  label: string;
}

interface FilterChipsProps {
  filters: FilterChip[];
  activeFilters: string[];
  onChange: (filters: string[]) => void;
}

export function FilterChips({ filters, activeFilters, onChange }: FilterChipsProps) {
  const toggleFilter = (id: string) => {
    if (activeFilters.includes(id)) {
      onChange(activeFilters.filter(f => f !== id));
    } else {
      onChange([...activeFilters, id]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = activeFilters.includes(filter.id);
        
        return (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter.id)}
            className={`
              px-4 py-2 rounded-full text-sm transition-colors
              ${isActive
                ? 'bg-purple-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }
            `}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

// Uso
<FilterChips
  filters={[
    { id: 'paid', label: 'Pago' },
    { id: 'pending', label: 'Pendente' },
    { id: 'overdue', label: 'Atrasado' }
  ]}
  activeFilters={selectedFilters}
  onChange={setSelectedFilters}
/>
```

---

## 📊 Empty States

### 1. Empty State Component

```tsx
import { FileQuestion } from 'lucide-react';

interface EmptyStateProps {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ 
  icon: Icon = FileQuestion, 
  title, 
  description, 
  action 
}: EmptyStateProps) {
  return (
    <div className="text-center py-12 px-4">
      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-slate-400" />
      </div>
      
      <h3 className="text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 mb-6 max-w-sm mx-auto">
        {description}
      </p>
      
      {action && (
        <button
          onClick={action.onClick}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}

// Uso
<EmptyState
  icon={Receipt}
  title="Nenhuma despesa cadastrada"
  description="Comece adicionando sua primeira despesa para começar a rastrear seus gastos."
  action={{
    label: 'Adicionar Despesa',
    onClick: () => setShowModal(true)
  }}
/>
```

---

## ⚡ Loading States

### 1. Skeleton Loader

```tsx
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-5 border-t-4 border-slate-200 shadow-sm animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="h-4 w-24 bg-slate-200 rounded"></div>
        <div className="h-5 w-5 bg-slate-200 rounded"></div>
      </div>
      <div className="h-8 w-32 bg-slate-200 rounded mb-2"></div>
      <div className="h-4 w-40 bg-slate-200 rounded"></div>
    </div>
  );
}

export function ListItemSkeleton() {
  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-slate-200 rounded-lg flex-shrink-0"></div>
        <div className="flex-1">
          <div className="h-4 w-32 bg-slate-200 rounded mb-2"></div>
          <div className="h-3 w-48 bg-slate-200 rounded"></div>
        </div>
        <div className="text-right">
          <div className="h-4 w-24 bg-slate-200 rounded mb-2"></div>
          <div className="h-6 w-16 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

// Uso
{isLoading ? (
  <div className="space-y-3">
    <ListItemSkeleton />
    <ListItemSkeleton />
    <ListItemSkeleton />
  </div>
) : (
  <div className="space-y-3">
    {items.map(item => <TransactionItem key={item.id} {...item} />)}
  </div>
)}
```

---

### 2. Loading Spinner

```tsx
export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-3'
  };

  return (
    <div className={`${sizeClasses[size]} border-purple-200 border-t-purple-600 rounded-full animate-spin`}></div>
  );
}

// Uso em botão
<button 
  disabled={isLoading}
  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
>
  {isLoading ? (
    <>
      <LoadingSpinner size="sm" />
      <span>Salvando...</span>
    </>
  ) : (
    <>
      <Plus className="w-4 h-4" />
      <span>Adicionar</span>
    </>
  )}
</button>
```

---

## 🎨 Special Components

### 1. Progress Bar

```tsx
interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  label?: string;
  color?: 'purple' | 'green' | 'orange' | 'red';
  showPercentage?: boolean;
}

export function ProgressBar({ 
  value, 
  max = 100, 
  label, 
  color = 'purple',
  showPercentage = true 
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);
  
  const colorClasses = {
    purple: 'bg-purple-600',
    green: 'bg-green-600',
    orange: 'bg-orange-600',
    red: 'bg-red-600'
  };

  return (
    <div>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm text-slate-700">{label}</span>}
          {showPercentage && (
            <span className="text-sm text-slate-500">{percentage.toFixed(0)}%</span>
          )}
        </div>
      )}
      
      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} transition-all duration-500 rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

// Uso
<ProgressBar
  value={3500}
  max={5000}
  label="Meta mensal"
  color="purple"
/>
```

---

### 2. Avatar with Status

```tsx
import { User } from 'lucide-react';

interface AvatarProps {
  src?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline';
}

export function Avatar({ src, name, size = 'md', status }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const initials = name
    ?.split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="relative inline-block">
      <div className={`${sizeClasses[size]} rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white overflow-hidden`}>
        {src ? (
          <img src={src} alt={name} className="w-full h-full object-cover" />
        ) : initials ? (
          <span className="text-sm font-medium">{initials}</span>
        ) : (
          <User className={iconSizes[size]} />
        )}
      </div>
      
      {status && (
        <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
          status === 'online' ? 'bg-green-500' : 'bg-slate-400'
        }`} />
      )}
    </div>
  );
}
```

---

### 3. Tooltip

```tsx
import { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function Tooltip({ content, children, position = 'top' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      
      {isVisible && (
        <div className={`absolute ${positionClasses[position]} z-50 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg whitespace-nowrap`}>
          {content}
        </div>
      )}
    </div>
  );
}

// Uso
<Tooltip content="Adicionar nova receita">
  <button className="w-10 h-10 bg-purple-600 text-white rounded-lg">
    <Plus className="w-5 h-5" />
  </button>
</Tooltip>
```

---

## 📱 Mobile-Specific Patterns

### 1. Pull to Refresh (Concept)

```tsx
import { RefreshCw } from 'lucide-react';

export function PullToRefresh({ onRefresh }: { onRefresh: () => Promise<void> }) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await onRefresh();
    setIsRefreshing(false);
  };

  return (
    <div className="flex justify-center py-4">
      <button
        onClick={handleRefresh}
        disabled={isRefreshing}
        className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
      >
        <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
        {isRefreshing ? 'Atualizando...' : 'Puxe para atualizar'}
      </button>
    </div>
  );
}
```

---

### 2. Swipeable Action (Concept)

```tsx
// Usar react-swipeable ou implementação custom
// Exemplo visual do resultado esperado:

<div className="relative overflow-hidden">
  {/* Main content */}
  <div className="bg-white p-4 rounded-xl">
    <TransactionItem {...item} />
  </div>
  
  {/* Swipe actions (revelados ao deslizar) */}
  <div className="absolute right-0 top-0 h-full flex">
    <button className="w-20 bg-green-600 text-white flex items-center justify-center">
      <CheckCircle className="w-5 h-5" />
    </button>
    <button className="w-20 bg-red-600 text-white flex items-center justify-center">
      <Trash2 className="w-5 h-5" />
    </button>
  </div>
</div>
```

---

## 🎯 Composition Examples

### Complete Dashboard Section

```tsx
export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Income"
          value={8500}
          change={36}
          changeLabel="from last month"
          icon={TrendingUp}
          borderColor="purple"
        />
        <StatCard
          title="Total Expenses"
          value={3500}
          change={-12}
          changeLabel="from last month"
          icon={TrendingDown}
          borderColor="red"
        />
        <StatCard
          title="Available Balance"
          value={5000}
          icon={Wallet}
          borderColor="green"
        />
        <StatCard
          title="Quick Action"
          value={0}
          icon={Plus}
          borderColor="purple"
          variant="gradient"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Income vs Expenses">
          {/* Line chart */}
        </ChartCard>
        <ChartCard title="Category Breakdown">
          {/* Pie chart */}
        </ChartCard>
      </div>

      {/* Transactions List */}
      <ListCard
        title="Recent Transactions"
        items={transactions}
        renderItem={(tx) => <TransactionItem key={tx.id} {...tx} />}
        action={{
          label: 'View All',
          onClick: () => navigate('/transactions')
        }}
      />
    </div>
  );
}
```

---

Esta documentação cobre os padrões mais comuns do FinanceApp. Use como referência para criar novos componentes mantendo consistência visual e de código.
