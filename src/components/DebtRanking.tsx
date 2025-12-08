import { TrendingUp, TrendingDown, DollarSign, Percent, Calendar, Award, Sparkles } from 'lucide-react';

interface Debt {
  id: string;
  name: string;
  type: 'loan' | 'card';
  balance: number;
  monthlyPayment: number;
  interestRate: number;
  impactScore: number;
  monthsToPayOff: number;
  totalInterest: number;
  budgetImpact: number;
}

export function DebtRanking() {
  // Mock data com análise de priorização
  const debts: Debt[] = [
    {
      id: '1',
      name: 'Cartão Nubank',
      type: 'card',
      balance: 1850,
      monthlyPayment: 185,
      interestRate: 13.99,
      impactScore: 95,
      monthsToPayOff: 10,
      totalInterest: 259,
      budgetImpact: 185,
    },
    {
      id: '2',
      name: 'Empréstimo Pessoal',
      type: 'loan',
      balance: 9000,
      monthlyPayment: 500,
      interestRate: 1.99,
      impactScore: 88,
      monthsToPayOff: 18,
      totalInterest: 450,
      budgetImpact: 500,
    },
    {
      id: '3',
      name: 'Financiamento Veículo',
      type: 'loan',
      balance: 28000,
      monthlyPayment: 1200,
      interestRate: 1.49,
      impactScore: 75,
      monthsToPayOff: 28,
      totalInterest: 2800,
      budgetImpact: 1200,
    },
    {
      id: '4',
      name: 'Cartão Itaú',
      type: 'card',
      balance: 2100,
      monthlyPayment: 210,
      interestRate: 12.50,
      impactScore: 70,
      monthsToPayOff: 10,
      totalInterest: 312,
      budgetImpact: 210,
    },
    {
      id: '5',
      name: 'Cartão Inter',
      type: 'card',
      balance: 750,
      monthlyPayment: 75,
      interestRate: 11.99,
      impactScore: 60,
      monthsToPayOff: 10,
      totalInterest: 90,
      budgetImpact: 75,
    },
  ];

  const sortedDebts = [...debts].sort((a, b) => b.impactScore - a.impactScore);
  const totalDebt = debts.reduce((sum, debt) => sum + debt.balance, 0);
  const totalMonthlyPayment = debts.reduce((sum, debt) => sum + debt.monthlyPayment, 0);
  const totalInterest = debts.reduce((sum, debt) => sum + debt.totalInterest, 0);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-red-100 text-red-700';
    if (score >= 75) return 'bg-orange-100 text-orange-700';
    if (score >= 60) return 'bg-amber-100 text-amber-700';
    return 'bg-emerald-100 text-emerald-700';
  };

  const getScoreBadge = (score: number) => {
    if (score >= 90) return { text: 'Alta', icon: '🔴' };
    if (score >= 75) return { text: 'Média-Alta', icon: '🟠' };
    if (score >= 60) return { text: 'Média', icon: '🟡' };
    return { text: 'Baixa', icon: '🟢' };
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-slate-900">Ranking de Dívidas</h2>
        <p className="text-slate-500 mt-1">
          Análise inteligente para otimizar a quitação das suas dívidas
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-6 border-t-4 border-red-500 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-600 text-sm">Dívida Total</span>
            <TrendingDown className="w-5 h-5 text-red-500" />
          </div>
          <div className="text-3xl text-slate-900 mb-2">R$ {totalDebt.toLocaleString('pt-BR')}</div>
          <div className="text-sm text-slate-500">{debts.length} dívidas ativas</div>
        </div>

        <div className="bg-white rounded-2xl p-6 border-t-4 border-purple-500 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-600 text-sm">Pagamento Mensal</span>
            <Calendar className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-3xl text-slate-900 mb-2">R$ {totalMonthlyPayment.toLocaleString('pt-BR')}</div>
          <div className="text-sm text-slate-500">Comprometido mensalmente</div>
        </div>

        <div className="bg-white rounded-2xl p-6 border-t-4 border-amber-500 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-600 text-sm">Juros Projetados</span>
            <Percent className="w-5 h-5 text-amber-500" />
          </div>
          <div className="text-3xl text-slate-900 mb-2">R$ {totalInterest.toLocaleString('pt-BR')}</div>
          <div className="text-sm text-slate-500">Se mantiver pagamento mínimo</div>
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="bg-purple-600 text-white rounded-2xl p-3 flex-shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-slate-900 mb-2 flex items-center gap-2">
              Recomendação do Coach IA
              <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">Smart</span>
            </h3>
            <p className="text-slate-700 mb-4">
              Priorize o <strong className="text-purple-700">Cartão Nubank</strong> para amortização! Com a maior taxa de juros (13.99% a.m.),
              quitar esta dívida primeiro liberará <strong className="text-purple-700">R$ 185/mês</strong> no seu orçamento e economizará{' '}
              <strong className="text-purple-700">R$ 259</strong> em juros.
            </p>
            <div className="bg-white rounded-xl p-4 border border-purple-200">
              <div className="text-sm text-purple-600 mb-2">💡 Estratégia Bola de Neve</div>
              <div className="text-slate-700">
                Ao quitar o Cartão Nubank, você poderá aumentar o pagamento do Empréstimo Pessoal de R$ 500 para{' '}
                <strong className="text-emerald-600">R$ 685/mês</strong>, reduzindo o prazo em{' '}
                <strong className="text-emerald-600">6 meses</strong>!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Debt Ranking Cards */}
      <div className="space-y-4">
        <h3 className="text-slate-900">Ranking por Prioridade de Amortização</h3>
        
        {sortedDebts.map((debt, index) => {
          const badge = getScoreBadge(debt.impactScore);
          return (
            <div key={debt.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                {/* Ranking Badge */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                  index === 0 ? 'bg-gradient-to-br from-amber-400 to-amber-500' : 'bg-slate-100'
                } text-white`}>
                  {index === 0 ? (
                    <Award className="w-6 h-6" />
                  ) : (
                    <span className="text-slate-600">{index + 1}º</span>
                  )}
                </div>

                {/* Debt Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-slate-900 mb-1">{debt.name}</h4>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg capitalize">
                          {debt.type === 'card' ? 'Cartão' : 'Empréstimo'}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs ${getScoreColor(debt.impactScore)}`}>
                          {badge.icon} Prioridade {badge.text}
                        </span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl text-slate-900">R$ {debt.balance.toLocaleString('pt-BR')}</div>
                      <div className="text-sm text-slate-500">Saldo devedor</div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="text-xs text-slate-500 mb-1">Parcela Mensal</div>
                      <div className="text-slate-900">R$ {debt.monthlyPayment.toLocaleString('pt-BR')}</div>
                    </div>
                    <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                      <div className="text-xs text-red-600 mb-1">Taxa de Juros</div>
                      <div className="text-red-700">{debt.interestRate}% a.m.</div>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
                      <div className="text-xs text-amber-600 mb-1">Juros Total</div>
                      <div className="text-amber-700">R$ {debt.totalInterest.toLocaleString('pt-BR')}</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-3 border border-purple-100">
                      <div className="text-xs text-purple-600 mb-1">Prazo</div>
                      <div className="text-purple-700">{debt.monthsToPayOff} meses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Methodology */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6">
        <h4 className="text-slate-900 mb-3 flex items-center gap-2">
          <span className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm">i</span>
          Como funciona o ranking?
        </h4>
        <div className="space-y-2 text-sm text-slate-700">
          <p>
            <strong>Impacto Score:</strong> Calculado com base em múltiplos fatores:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Taxa de juros (maior peso - economizar dinheiro com juros)</li>
            <li>Tempo para quitação (menor prazo = maior prioridade)</li>
            <li>Impacto no orçamento mensal (quanto será liberado após quitar)</li>
            <li>Tipo de dívida (cartões de crédito tendem a ter maior prioridade)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}