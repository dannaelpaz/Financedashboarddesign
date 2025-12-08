import { useState } from 'react';
import { Target, Save, Plus, Trash2, Calendar, DollarSign, TrendingUp, Bell, User, Palette } from 'lucide-react';

interface Goal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category: string;
}

export function Settings() {
  const [activeTab, setActiveTab] = useState<'goals' | 'profile' | 'notifications'>('goals');

  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      name: 'Fundo de Emergência',
      targetAmount: 15000,
      currentAmount: 8900,
      deadline: '2026-06-30',
      category: 'Segurança',
    },
    {
      id: '2',
      name: 'Viagem para Europa',
      targetAmount: 12000,
      currentAmount: 3200,
      deadline: '2026-12-31',
      category: 'Lazer',
    },
    {
      id: '3',
      name: 'Comprar Notebook',
      targetAmount: 5000,
      currentAmount: 2100,
      deadline: '2026-03-31',
      category: 'Tecnologia',
    },
  ]);

  const [monthlyBudget, setMonthlyBudget] = useState({
    moradia: 2000,
    alimentacao: 800,
    transporte: 400,
    lazer: 500,
    saude: 300,
    educacao: 200,
    outros: 500,
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-slate-900">Configurações</h2>
        <p className="text-slate-500 mt-1">Gerencie suas metas e preferências</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-white rounded-2xl p-1 shadow-sm w-fit">
        <button
          onClick={() => setActiveTab('goals')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all ${
            activeTab === 'goals'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Target className="w-5 h-5" />
          Metas Financeiras
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all ${
            activeTab === 'profile'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <DollarSign className="w-5 h-5" />
          Orçamento Mensal
        </button>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all ${
            activeTab === 'notifications'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Bell className="w-5 h-5" />
          Notificações
        </button>
      </div>

      {/* Goals Tab */}
      {activeTab === 'goals' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-slate-900">Suas Metas Financeiras</h3>
              <p className="text-slate-500 text-sm mt-1">Defina e acompanhe seus objetivos</p>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-sm">
              <Plus className="w-5 h-5" />
              Nova Meta
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {goals.map((goal) => {
              const progress = (goal.currentAmount / goal.targetAmount) * 100;
              const remaining = goal.targetAmount - goal.currentAmount;
              const daysRemaining = Math.ceil(
                (new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
              );

              return (
                <div key={goal.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-slate-900">{goal.name}</h4>
                        <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700">
                          {goal.category}
                        </span>
                      </div>
                      <div className="text-sm text-slate-500 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Prazo: {new Date(goal.deadline).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">Progresso</span>
                      <span className="text-purple-600">{progress.toFixed(1)}%</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-purple-50 rounded-xl p-3 border border-purple-100">
                      <div className="flex items-center gap-2 text-purple-600 text-sm mb-1">
                        <DollarSign className="w-4 h-4" />
                        Atual
                      </div>
                      <div className="text-slate-900">
                        R$ {goal.currentAmount.toLocaleString('pt-BR')}
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="flex items-center gap-2 text-slate-600 text-sm mb-1">
                        <Target className="w-4 h-4" />
                        Meta
                      </div>
                      <div className="text-slate-900">
                        R$ {goal.targetAmount.toLocaleString('pt-BR')}
                      </div>
                    </div>
                    <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                      <div className="flex items-center gap-2 text-red-600 text-sm mb-1">
                        <TrendingUp className="w-4 h-4" />
                        Falta
                      </div>
                      <div className="text-red-700">
                        R$ {remaining.toLocaleString('pt-BR')}
                      </div>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100">
                      <div className="flex items-center gap-2 text-emerald-600 text-sm mb-1">
                        <Calendar className="w-4 h-4" />
                        Prazo
                      </div>
                      <div className="text-emerald-700">
                        {daysRemaining} dias
                      </div>
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className="mt-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-3">
                    <div className="text-sm text-blue-900">
                      <strong>💡 Recomendação:</strong> Economize{' '}
                      <strong>R$ {Math.ceil(remaining / (daysRemaining / 30)).toLocaleString('pt-BR')}/mês</strong>{' '}
                      para atingir sua meta no prazo!
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Budget Tab */}
      {activeTab === 'profile' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-slate-900">Orçamento Mensal por Categoria</h3>
            <p className="text-slate-500 text-sm mt-1">
              Defina limites de gastos para cada categoria
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="divide-y divide-slate-100">
              {Object.entries(monthlyBudget).map(([category, amount]) => (
                <div key={category} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <div className="text-slate-900 capitalize mb-1">
                        {category === 'moradia' && '🏠 Moradia'}
                        {category === 'alimentacao' && '🍽️ Alimentação'}
                        {category === 'transporte' && '🚗 Transporte'}
                        {category === 'lazer' && '🎮 Lazer'}
                        {category === 'saude' && '⚕️ Saúde'}
                        {category === 'educacao' && '📚 Educação'}
                        {category === 'outros' && '📦 Outros'}
                      </div>
                      <div className="text-sm text-slate-500">
                        Orçamento: R$ {amount.toLocaleString('pt-BR')}
                      </div>
                    </div>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) =>
                        setMonthlyBudget({
                          ...monthlyBudget,
                          [category]: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-32 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                      style={{ width: '60%' }}
                    />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">60% utilizado este mês</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-sm">
              <Save className="w-5 h-5" />
              Salvar Alterações
            </button>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-slate-900">Preferências de Notificação</h3>
            <p className="text-slate-500 text-sm mt-1">
              Configure quando e como você quer ser notificado
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 divide-y divide-slate-100">
            {[
              {
                title: 'Contas a vencer',
                description: 'Receber lembretes 3 dias antes do vencimento',
                enabled: true,
              },
              {
                title: 'Limite de orçamento',
                description: 'Alertas quando atingir 80% do orçamento em uma categoria',
                enabled: true,
              },
              {
                title: 'Metas financeiras',
                description: 'Atualizações semanais sobre o progresso das suas metas',
                enabled: false,
              },
              {
                title: 'Recomendações do Coach IA',
                description: 'Insights e dicas personalizadas diariamente',
                enabled: true,
              },
              {
                title: 'Relatório mensal',
                description: 'Resumo completo das suas finanças no início de cada mês',
                enabled: true,
              },
            ].map((notification, index) => (
              <div key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-slate-900">{notification.title}</div>
                    <div className="text-sm text-slate-500 mt-1">{notification.description}</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={notification.enabled} className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}