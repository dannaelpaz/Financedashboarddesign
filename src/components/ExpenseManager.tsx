import { useState } from 'react';
import { CreditCard, Plus, Trash2, Calendar, DollarSign, MoreHorizontal } from 'lucide-react';

interface CreditCard {
  id: string;
  name: string;
  limit: number;
  used: number;
  dueDate: number;
  closingDate: number;
}

interface Loan {
  id: string;
  name: string;
  totalAmount: number;
  remainingAmount: number;
  monthlyPayment: number;
  interestRate: number;
  installments: number;
  paidInstallments: number;
}

export function ExpenseManager() {
  const [activeTab, setActiveTab] = useState<'cards' | 'loans'>('cards');

  const creditCards: CreditCard[] = [
    {
      id: '1',
      name: 'Nubank',
      limit: 5000,
      used: 1850,
      dueDate: 15,
      closingDate: 8,
    },
    {
      id: '2',
      name: 'Inter',
      limit: 3000,
      used: 750,
      dueDate: 10,
      closingDate: 3,
    },
    {
      id: '3',
      name: 'Itaú',
      limit: 8000,
      used: 2100,
      dueDate: 20,
      closingDate: 13,
    },
  ];

  const loans: Loan[] = [
    {
      id: '1',
      name: 'Empréstimo Pessoal Banco do Brasil',
      totalAmount: 15000,
      remainingAmount: 9000,
      monthlyPayment: 500,
      interestRate: 1.99,
      installments: 30,
      paidInstallments: 12,
    },
    {
      id: '2',
      name: 'Financiamento Veículo',
      totalAmount: 45000,
      remainingAmount: 28000,
      monthlyPayment: 1200,
      interestRate: 1.49,
      installments: 48,
      paidInstallments: 20,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900">Gerenciador de Despesas</h2>
          <p className="text-slate-500 mt-1">Gerencie seus cartões de crédito e empréstimos</p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-sm">
          <Plus className="w-5 h-5" />
          <span className="hidden sm:inline">Adicionar</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-white rounded-2xl p-1 shadow-sm w-fit">
        <button
          onClick={() => setActiveTab('cards')}
          className={`px-6 py-2.5 rounded-xl transition-all ${
            activeTab === 'cards'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Cartões de Crédito
        </button>
        <button
          onClick={() => setActiveTab('loans')}
          className={`px-6 py-2.5 rounded-xl transition-all ${
            activeTab === 'loans'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Empréstimos
        </button>
      </div>

      {/* Credit Cards */}
      {activeTab === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creditCards.map((card, index) => {
            const usagePercent = (card.used / card.limit) * 100;
            const available = card.limit - card.used;
            
            const gradients = [
              'from-purple-600 via-purple-500 to-purple-700',
              'from-emerald-600 via-emerald-500 to-emerald-700',
              'from-amber-600 via-amber-500 to-amber-700',
            ];

            return (
              <div key={card.id} className={`relative h-64 bg-gradient-to-br ${gradients[index % 3]} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-sm opacity-75">CREDIT CARD</div>
                    <div className="text-xl mt-1">{card.name}</div>
                  </div>
                  <button className="text-white/80 hover:text-white">
                    <MoreHorizontal className="w-6 h-6" />
                  </button>
                </div>

                <div className="mb-6">
                  <div className="w-12 h-10 bg-amber-400 rounded-md mb-2"></div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs opacity-75 mb-1">Disponível</div>
                    <div className="text-2xl">R$ {available.toLocaleString('pt-BR')}</div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="opacity-75">Usado</span>
                      <span>{usagePercent.toFixed(0)}%</span>
                    </div>
                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full"
                        style={{ width: `${usagePercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between pt-2 text-xs">
                    <div>
                      <div className="opacity-75">Fechamento</div>
                      <div>Dia {card.closingDate}</div>
                    </div>
                    <div className="text-right">
                      <div className="opacity-75">Vencimento</div>
                      <div>Dia {card.dueDate}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Add New Card */}
          <button className="h-64 border-2 border-dashed border-slate-300 rounded-2xl hover:border-purple-400 hover:bg-purple-50/50 transition-colors flex flex-col items-center justify-center gap-3 text-slate-400 hover:text-purple-600">
            <Plus className="w-12 h-12" />
            <span>Adicionar Cartão</span>
          </button>
        </div>
      )}

      {/* Loans */}
      {activeTab === 'loans' && (
        <div className="space-y-4">
          {loans.map((loan) => {
            const progressPercent = (loan.paidInstallments / loan.installments) * 100;
            const remainingInstallments = loan.installments - loan.paidInstallments;

            return (
              <div key={loan.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-slate-900 mb-2">{loan.name}</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500">Taxa de juros:</span>
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg">{loan.interestRate}% a.m.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500">Parcelas:</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg">
                          {loan.paidInstallments}/{loan.installments}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">Progresso do pagamento</span>
                    <span className="text-slate-900">{progressPercent.toFixed(1)}%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
                      <DollarSign className="w-4 h-4" />
                      <span>Valor Total</span>
                    </div>
                    <div className="text-slate-900">R$ {loan.totalAmount.toLocaleString('pt-BR')}</div>
                  </div>

                  <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                    <div className="flex items-center gap-2 text-red-600 text-sm mb-2">
                      <DollarSign className="w-4 h-4" />
                      <span>Saldo Devedor</span>
                    </div>
                    <div className="text-red-700">R$ {loan.remainingAmount.toLocaleString('pt-BR')}</div>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                    <div className="flex items-center gap-2 text-purple-600 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>Parcela Mensal</span>
                    </div>
                    <div className="text-purple-700">R$ {loan.monthlyPayment.toLocaleString('pt-BR')}</div>
                  </div>

                  <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                    <div className="flex items-center gap-2 text-emerald-600 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>Faltam</span>
                    </div>
                    <div className="text-emerald-700">{remainingInstallments} parcelas</div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Add New Loan */}
          <button className="w-full border-2 border-dashed border-slate-300 rounded-2xl py-8 hover:border-purple-400 hover:bg-purple-50/50 transition-colors flex items-center justify-center gap-3 text-slate-400 hover:text-purple-600">
            <Plus className="w-8 h-8" />
            <span>Adicionar Empréstimo</span>
          </button>
        </div>
      )}
    </div>
  );
}