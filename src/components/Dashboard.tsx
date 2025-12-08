import { useState } from 'react';
import { TrendingUp, TrendingDown, Wallet, CreditCard, Plus, CheckCircle, Clock, AlertCircle, ArrowUpRight, MoreHorizontal } from 'lucide-react';
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { AddIncomeModal } from './AddIncomeModal';
import { AddExpenseModal } from './AddExpenseModal';

interface Expense {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
  paid: boolean;
  category: string;
  paymentMethod: string;
}

export function Dashboard() {
  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);

  // Mock data - seria substituído por dados reais do backend
  const monthlyIncome = 8500;
  const totalExpenses = 3500;
  const spendingGoal = 9254;
  const totalTransactions = 17000;
  const paidExpenses = 2100;
  const pendingExpenses = 1400;

  const expenses: Expense[] = [
    { id: '1', name: 'Supermercado Extra', amount: 156.22, dueDate: '2025-12-08', paid: true, category: 'Alimentação', paymentMethod: 'Visa' },
    { id: '2', name: 'Netflix Assinatura', amount: 55.90, dueDate: '2025-12-10', paid: true, category: 'Lazer', paymentMethod: 'Paypal' },
    { id: '3', name: 'Conta de Luz CEMIG', amount: 248.00, dueDate: '2025-12-12', paid: false, category: 'Utilidades', paymentMethod: 'Paycenter' },
    { id: '4', name: 'Farmácia Drogasil', amount: 89.50, dueDate: '2025-12-14', paid: true, category: 'Saúde', paymentMethod: 'Visa' },
    { id: '5', name: 'Uber Viagens', amount: 42.80, dueDate: '2025-12-15', paid: false, category: 'Transporte', paymentMethod: 'Paycenter' },
    { id: '6', name: 'iFood Pedidos', amount: 78.90, dueDate: '2025-12-16', paid: false, category: 'Alimentação', paymentMethod: 'Paypal' },
  ];

  const categoryData = [
    { name: 'Transaction View', value: 32, color: '#7c3aed' },
    { name: 'Sales', value: 28, color: '#10b981' },
    { name: 'Payment', value: 40, color: '#f59e0b' },
  ];

  const monthlyData = [
    { month: 'Jan', income: 540, expense: 380 },
    { month: 'Fev', income: 380, expense: 420 },
    { month: 'Mar', income: 420, expense: 380 },
    { month: 'Abr', income: 480, expense: 440 },
    { month: 'Mai', income: 540, expense: 500 },
    { month: 'Jun', income: 540, expense: 380 },
  ];

  const toggleExpensePaid = (id: string) => {
    console.log('Toggle expense:', id);
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Income - Purple */}
        <div className="bg-white rounded-2xl p-5 border-t-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="text-slate-600 text-sm">Total Income</div>
            <button className="text-slate-400 hover:text-slate-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="mb-2">
            <span className="text-3xl text-slate-900">R${monthlyIncome.toLocaleString('pt-BR')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-sm flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              36%
            </span>
            <span className="text-slate-500 text-sm">Increased from last month</span>
          </div>
        </div>

        {/* Total Spending - Orange */}
        <div className="bg-white rounded-2xl p-5 border-t-4 border-orange-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="text-slate-600 text-sm">Total Spending</div>
            <button className="text-slate-400 hover:text-slate-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="mb-2">
            <span className="text-3xl text-slate-900">R${totalExpenses.toLocaleString('pt-BR')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-sm flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              7%
            </span>
            <span className="text-slate-500 text-sm">Increased from last month</span>
          </div>
        </div>

        {/* Spending Goal - Cyan */}
        <div className="bg-white rounded-2xl p-5 border-t-4 border-cyan-400 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="text-slate-600 text-sm">Spending Goal</div>
            <button className="text-slate-400 hover:text-slate-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="mb-2">
            <span className="text-3xl text-slate-900">R${spendingGoal.toLocaleString('pt-BR')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-sm flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              18%
            </span>
            <span className="text-slate-500 text-sm">Increased from last month</span>
          </div>
        </div>

        {/* Total Transactions - Green */}
        <div className="bg-white rounded-2xl p-5 border-t-4 border-emerald-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="text-slate-600 text-sm">Total Transactions</div>
            <button className="text-slate-400 hover:text-slate-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="mb-2">
            <span className="text-3xl text-slate-900">R${totalTransactions.toLocaleString('pt-BR')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-sm flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              86%
            </span>
            <span className="text-slate-500 text-sm">Increased from last month</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Your Assets Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-slate-900">Your Assets</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-sm text-slate-600">Income</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-sm text-slate-600">Expense</span>
              </div>
              <select className="text-sm border border-slate-200 rounded-lg px-3 py-1.5">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 5 }} />
              <Line type="monotone" dataKey="expense" stroke="#f59e0b" strokeWidth={3} dot={{ fill: '#f59e0b', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* My Cards */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-slate-900 mb-4">My Cards</h3>
          
          {/* Card Visual */}
          <div className="relative h-48 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 rounded-2xl p-6 mb-4 text-white shadow-lg">
            <div className="flex justify-between items-start mb-8">
              <div className="text-sm opacity-90">DEBIT CARD</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20"></div>
                <div className="w-8 h-8 rounded-full bg-white/20 -ml-4"></div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="w-12 h-10 bg-amber-400 rounded-md mb-2"></div>
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <div className="text-xs opacity-75 mb-1">Ethan Cole</div>
                <div className="text-sm tracking-wider">•••• 9254</div>
              </div>
              <div className="text-2xl">
                <div className="w-8 h-8 rounded-full bg-slate-400/40"></div>
              </div>
            </div>
          </div>

          <button className="w-full border-2 border-dashed border-slate-200 rounded-xl py-4 text-slate-600 hover:border-purple-300 hover:text-purple-600 transition-colors flex items-center justify-center gap-2">
            <Plus className="w-5 h-5" />
            Add new card
          </button>
        </div>
      </div>

      {/* Latest Transactions & Transaction View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Latest Transactions */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-slate-900">Latest Transaction</h3>
            <button className="text-purple-600 hover:text-purple-700 text-sm">See All</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-6 py-3 text-slate-600 text-sm">Name</th>
                  <th className="text-left px-6 py-3 text-slate-600 text-sm">Date</th>
                  <th className="text-left px-6 py-3 text-slate-600 text-sm">Medium</th>
                  <th className="text-right px-6 py-3 text-slate-600 text-sm">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {expenses.map((expense) => (
                  <tr key={expense.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                          {expense.name.charAt(0)}
                        </div>
                        <div className="text-slate-900">{expense.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-sm">
                      {new Date(expense.dueDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })} - {' '}
                      {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${
                        expense.paymentMethod === 'Visa' ? 'bg-purple-100 text-purple-700' :
                        expense.paymentMethod === 'Paypal' ? 'bg-emerald-100 text-emerald-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {expense.paymentMethod}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-slate-900">
                      R$ {expense.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Transaction View Pie Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-slate-900">Transaction View</h3>
            <div className="text-2xl text-slate-900">R$55,501</div>
          </div>
          
          <div className="relative">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  startAngle={90}
                  endAngle={450}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl text-slate-900">R$55,501</div>
                <div className="text-emerald-500 text-sm flex items-center justify-center gap-1">
                  <ArrowUpRight className="w-4 h-4" />
                  20% Growth
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {categoryData.map((cat) => (
              <div key={cat.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                  <span className="text-sm text-slate-600">{cat.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-900">{cat.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="fixed bottom-24 md:bottom-8 right-8 flex flex-col gap-3">
        <button
          onClick={() => setShowIncomeModal(true)}
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          title="Adicionar Receita"
        >
          <Plus className="w-6 h-6" />
        </button>
        <button
          onClick={() => setShowExpenseModal(true)}
          className="w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          title="Adicionar Despesa"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {/* Modals */}
      {showIncomeModal && <AddIncomeModal onClose={() => setShowIncomeModal(false)} />}
      {showExpenseModal && <AddExpenseModal onClose={() => setShowExpenseModal(false)} />}
    </div>
  );
}