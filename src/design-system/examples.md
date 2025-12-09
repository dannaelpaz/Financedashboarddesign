# Examples - FinanceApp Design System

Exemplos práticos completos de implementação de features e componentes.

---

## 📊 Example 1: Dashboard Stats Section

### Visual Layout
```
┌─────────┬─────────┬─────────┬─────────┐
│ Income  │ Expense │ Balance │  Add    │
│ R$8.5K  │ R$3.5K  │ R$5.0K  │ Action  │
│ +36% ↗  │ -12% ↘  │ Ready   │ [+]     │
└─────────┴─────────┴─────────┴─────────┘
```

### Complete Code

```tsx
import { TrendingUp, TrendingDown, Wallet, Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function DashboardStats() {
  const stats = [
    {
      title: 'Total Income',
      value: 8500,
      change: 36,
      changeLabel: 'from last month',
      icon: TrendingUp,
      borderColor: 'border-purple-500',
      iconColor: 'text-purple-500',
      changeColor: 'text-green-600'
    },
    {
      title: 'Total Expenses',
      value: 3500,
      change: -12,
      changeLabel: 'from last month',
      icon: TrendingDown,
      borderColor: 'border-red-500',
      iconColor: 'text-red-500',
      changeColor: 'text-red-600'
    },
    {
      title: 'Available Balance',
      value: 5000,
      change: null,
      changeLabel: 'Ready to spend',
      icon: Wallet,
      borderColor: 'border-green-500',
      iconColor: 'text-green-500',
      changeColor: 'text-slate-500'
    }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Regular Stats Cards */}
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const ChangeIcon = stat.change && stat.change > 0 ? ArrowUpRight : ArrowDownRight;
        
        return (
          <div
            key={index}
            className={`bg-white rounded-2xl p-5 border-t-4 ${stat.borderColor} shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-sm text-slate-600">{stat.title}</div>
              <Icon className={`w-5 h-5 ${stat.iconColor}`} />
            </div>
            
            <div className="mb-2">
              <span className="text-3xl text-slate-900">
                {formatCurrency(stat.value)}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              {stat.change !== null && (
                <span className={`text-sm flex items-center gap-1 ${stat.changeColor}`}>
                  <ChangeIcon className="w-4 h-4" />
                  {Math.abs(stat.change)}%
                </span>
              )}
              <span className="text-sm text-slate-500">{stat.changeLabel}</span>
            </div>
          </div>
        );
      })}

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
  );
}
```

---

## 📋 Example 2: Transaction List with Filters

### Visual Layout
```
Recent Transactions              View All →

[All] [Paid] [Pending] [Overdue]  🔍 Search

┌──────────────────────────────────────┐
│ 🏪 Supermercado    R$ 156.22  ✓ Pago │
│    Alimentação • 08/12               │
├──────────────────────────────────────┤
│ 📺 Netflix         R$ 55.90   ✓ Pago │
│    Lazer • 10/12                     │
├──────────────────────────────────────┤
│ ⚡ Conta de Luz    R$ 248.00  ⏰ Pend │
│    Utilidades • 12/12                │
└──────────────────────────────────────┘
```

### Complete Code

```tsx
import { useState } from 'react';
import { ShoppingBag, Tv, Zap, CheckCircle, Clock, AlertCircle, Search } from 'lucide-react';

interface Transaction {
  id: string;
  name: string;
  amount: number;
  date: string;
  category: string;
  status: 'paid' | 'pending' | 'overdue';
  icon: any;
}

export function TransactionList() {
  const [filter, setFilter] = useState<'all' | 'paid' | 'pending' | 'overdue'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const transactions: Transaction[] = [
    {
      id: '1',
      name: 'Supermercado Extra',
      amount: 156.22,
      date: '2025-12-08',
      category: 'Alimentação',
      status: 'paid',
      icon: ShoppingBag
    },
    {
      id: '2',
      name: 'Netflix Assinatura',
      amount: 55.90,
      date: '2025-12-10',
      category: 'Lazer',
      status: 'paid',
      icon: Tv
    },
    {
      id: '3',
      name: 'Conta de Luz CEMIG',
      amount: 248.00,
      date: '2025-12-12',
      category: 'Utilidades',
      status: 'pending',
      icon: Zap
    }
  ];

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

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit'
    });
  };

  const filteredTransactions = transactions.filter(tx => {
    const matchesFilter = filter === 'all' || tx.status === filter;
    const matchesSearch = tx.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tx.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-slate-900">Recent Transactions</h3>
        <button className="text-sm text-purple-600 hover:text-purple-700 transition-colors">
          View All →
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {(['all', 'paid', 'pending', 'overdue'] as const).map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === filterOption
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {filterOption === 'all' ? 'All' : filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex-1 flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search transactions..."
            className="bg-transparent border-none outline-none flex-1 text-sm"
          />
        </div>
      </div>

      {/* Transaction List */}
      <div className="space-y-3">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction) => {
            const Icon = transaction.icon;
            const StatusIcon = statusConfig[transaction.status].icon;

            return (
              <div
                key={transaction.id}
                className="bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-slate-600" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-slate-900 truncate">{transaction.name}</div>
                    <div className="text-sm text-slate-500">
                      {transaction.category} • {formatDate(transaction.date)}
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <div className="text-slate-900 mb-1">
                      {formatCurrency(transaction.amount)}
                    </div>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs ${statusConfig[transaction.status].colors}`}>
                      <StatusIcon className="w-3 h-3" />
                      {statusConfig[transaction.status].label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 text-slate-500">
            No transactions found
          </div>
        )}
      </div>
    </div>
  );
}
```

---

## ➕ Example 3: Add Transaction Modal

### Visual Layout
```
┌────────────────────────────────────┐
│ Add Transaction                [X] │
│                                    │
│ Name                               │
│ ┌────────────────────────────────┐│
│ │ Supermercado                   ││
│ └────────────────────────────────┘│
│                                    │
│ Amount                             │
│ ┌────────────────────────────────┐│
│ │ R$ 156,22                      ││
│ └────────────────────────────────┘│
│                                    │
│ Category                           │
│ ┌────────────────────────────────┐│
│ │ Alimentação ▼                  ││
│ └────────────────────────────────┘│
│                                    │
│ ┌──────────┐  ┌─────────────────┐│
│ │ Cancel   │  │ Add Transaction ││
│ └──────────┘  └─────────────────┘│
└────────────────────────────────────┘
```

### Complete Code

```tsx
import { useState } from 'react';
import { X, Plus } from 'lucide-react';

interface AddTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (transaction: any) => void;
}

export function AddTransactionModal({ isOpen, onClose, onAdd }: AddTransactionModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0]
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const categories = [
    'Alimentação',
    'Transporte',
    'Saúde',
    'Lazer',
    'Educação',
    'Moradia',
    'Utilidades',
    'Outros'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    onAdd({
      id: Date.now().toString(),
      name: formData.name,
      amount: parseFloat(formData.amount),
      category: formData.category,
      date: formData.date,
      status: 'pending'
    });

    // Reset form
    setFormData({
      name: '',
      amount: '',
      category: '',
      date: new Date().toISOString().split('T')[0]
    });
    
    onClose();
  };

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
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-slate-900">Add Transaction</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-slate-700">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-3 bg-slate-100 rounded-xl border-2 transition-colors ${
                errors.name
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-transparent focus:border-purple-500'
              } focus:outline-none`}
              placeholder="e.g., Supermercado"
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <label className="text-slate-700">Amount</label>
            <input
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className={`w-full px-4 py-3 bg-slate-100 rounded-xl border-2 transition-colors ${
                errors.amount
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-transparent focus:border-purple-500'
              } focus:outline-none`}
              placeholder="0,00"
            />
            {errors.amount && (
              <p className="text-sm text-red-600">{errors.amount}</p>
            )}
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-slate-700">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className={`w-full px-4 py-3 bg-slate-100 rounded-xl border-2 transition-colors ${
                errors.category
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-transparent focus:border-purple-500'
              } focus:outline-none`}
            >
              <option value="">Select category...</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-sm text-red-600">{errors.category}</p>
            )}
          </div>

          {/* Date */}
          <div className="space-y-2">
            <label className="text-slate-700">Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-3 bg-slate-100 rounded-xl border-2 border-transparent focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Footer */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
```

---

## 📊 Example 4: Chart Card with Data

### Complete Code

```tsx
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { TrendingUp } from 'lucide-react';

export function IncomeExpenseChart() {
  const data = [
    { month: 'Jan', income: 5400, expense: 3800 },
    { month: 'Fev', income: 3800, expense: 4200 },
    { month: 'Mar', income: 4200, expense: 3800 },
    { month: 'Abr', income: 4800, expense: 4400 },
    { month: 'Mai', income: 5400, expense: 5000 },
    { month: 'Jun', income: 5400, expense: 3800 }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-lg">
          <p className="text-sm text-slate-600 mb-2">{payload[0].payload.month}</p>
          {payload.map((item: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-4">
              <span className="text-sm" style={{ color: item.color }}>
                {item.name}:
              </span>
              <span className="text-sm font-medium text-slate-900">
                R$ {item.value.toLocaleString('pt-BR')}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-slate-900 mb-1">Income vs Expenses</h3>
          <p className="text-sm text-slate-500">Last 6 months</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-lg">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm">+24%</span>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="month"
            stroke="#64748b"
            style={{ fontSize: '12px' }}
          />
          <YAxis
            stroke="#64748b"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `R$${(value / 1000).toFixed(1)}K`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: '14px' }}
            iconType="circle"
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#10b981"
            strokeWidth={2}
            name="Income"
            dot={{ fill: '#10b981', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            strokeWidth={2}
            name="Expense"
            dot={{ fill: '#ef4444', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
```

---

## 🎯 Example 5: Goal Progress Card

### Visual Layout
```
┌────────────────────────────────────┐
│ Save for Vacation            [Edit]│
│                                    │
│ R$ 3.500 / R$ 5.000                │
│                                    │
│ ████████████████▒▒▒▒▒▒  70%       │
│                                    │
│ 📅 Target: Dez 2025                │
│ 💰 R$ 1.500 restantes              │
└────────────────────────────────────┘
```

### Complete Code

```tsx
import { Calendar, DollarSign, Edit } from 'lucide-react';

interface GoalCardProps {
  goal: {
    id: string;
    name: string;
    current: number;
    target: number;
    deadline: string;
  };
  onEdit?: (id: string) => void;
}

export function GoalCard({ goal, onEdit }: GoalCardProps) {
  const percentage = Math.min((goal.current / goal.target) * 100, 100);
  const remaining = goal.target - goal.current;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR', {
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-2xl p-5 border-t-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-slate-900">{goal.name}</h4>
        {onEdit && (
          <button
            onClick={() => onEdit(goal.id)}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <Edit className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Amount */}
      <div className="mb-4">
        <div className="text-2xl text-slate-900 mb-1">
          {formatCurrency(goal.current)} / {formatCurrency(goal.target)}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-700">Progress</span>
          <span className="text-sm text-slate-500">{percentage.toFixed(0)}%</span>
        </div>
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-600 transition-all duration-500 rounded-full"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Calendar className="w-4 h-4" />
          <span>Target: {formatDate(goal.deadline)}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <DollarSign className="w-4 h-4" />
          <span>{formatCurrency(remaining)} remaining</span>
        </div>
      </div>
    </div>
  );
}
```

---

## 🔔 Example 6: Notification Toast

### Complete Code

```tsx
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { useEffect, useState } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  type: ToastType;
  message: string;
  onClose: () => void;
  duration?: number;
}

export function Toast({ type, message, onClose, duration = 3000 }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const config = {
    success: {
      icon: CheckCircle,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      iconColor: 'text-green-600',
      textColor: 'text-green-900'
    },
    error: {
      icon: AlertCircle,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-500',
      iconColor: 'text-red-600',
      textColor: 'text-red-900'
    },
    info: {
      icon: Info,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      iconColor: 'text-blue-600',
      textColor: 'text-blue-900'
    }
  };

  const { icon: Icon, bgColor, borderColor, iconColor, textColor } = config[type];

  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      }`}
    >
      <div className={`${bgColor} ${textColor} border-l-4 ${borderColor} rounded-lg p-4 shadow-lg flex items-start gap-3 min-w-[300px] max-w-md`}>
        <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
        <p className="flex-1">{message}</p>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// Usage Example
export function ToastExample() {
  const [toasts, setToasts] = useState<Array<{ id: number; type: ToastType; message: string }>>([]);

  const showToast = (type: ToastType, message: string) => {
    const id = Date.now();
    setToasts([...toasts, { id, type, message }]);
  };

  return (
    <div>
      <div className="flex gap-3">
        <button
          onClick={() => showToast('success', 'Transaction added successfully!')}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Show Success
        </button>
        <button
          onClick={() => showToast('error', 'Failed to save transaction')}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
        >
          Show Error
        </button>
      </div>

      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={() => setToasts(toasts.filter(t => t.id !== toast.id))}
        />
      ))}
    </div>
  );
}
```

---

## 📱 Example 7: Responsive Dashboard Page

### Complete Code

```tsx
import { useState } from 'react';
import { DashboardStats } from './DashboardStats';
import { TransactionList } from './TransactionList';
import { IncomeExpenseChart } from './IncomeExpenseChart';
import { AddTransactionModal } from './AddTransactionModal';
import { Plus } from 'lucide-react';

export function DashboardPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [transactions, setTransactions] = useState<any[]>([]);

  const handleAddTransaction = (transaction: any) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <DashboardStats />

      {/* Charts Section - Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <IncomeExpenseChart />
        
        {/* Placeholder for another chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-slate-900 mb-4">Category Breakdown</h3>
          <div className="h-[300px] flex items-center justify-center text-slate-400">
            Pie chart here
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <TransactionList />

      {/* Floating Action Button */}
      <button
        onClick={() => setShowAddModal(true)}
        className="fixed bottom-24 md:bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center z-40"
        aria-label="Add transaction"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Modal */}
      <AddTransactionModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddTransaction}
      />
    </div>
  );
}
```

---

Estes exemplos cobrem os casos de uso mais comuns no FinanceApp. Use-os como base para criar novas features mantendo consistência com o design system. 🎨✨
