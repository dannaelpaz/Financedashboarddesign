import { useState } from 'react';
import { X, DollarSign, Calendar, Tag, CreditCard } from 'lucide-react';

interface AddExpenseModalProps {
  onClose: () => void;
}

export function AddExpenseModal({ onClose }: AddExpenseModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    dueDate: new Date().toISOString().split('T')[0],
    category: 'outros',
    paymentMethod: 'dinheiro',
    paid: false,
    recurring: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de salvamento
    console.log('Nova despesa:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-slate-200 sticky top-0 bg-white">
          <h3 className="text-slate-900">Adicionar Despesa</h3>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-slate-700 mb-2">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Nome da Despesa
              </div>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Conta de luz, Supermercado..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-slate-700 mb-2">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Valor
              </div>
            </label>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              placeholder="0,00"
              step="0.01"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-slate-700 mb-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Data de Vencimento
              </div>
            </label>
            <input
              type="date"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-slate-700 mb-2">Categoria</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="moradia">🏠 Moradia</option>
              <option value="alimentacao">🍽️ Alimentação</option>
              <option value="transporte">🚗 Transporte</option>
              <option value="utilidades">💡 Utilidades (água, luz, internet)</option>
              <option value="saude">⚕️ Saúde</option>
              <option value="educacao">📚 Educação</option>
              <option value="lazer">🎮 Lazer</option>
              <option value="cartao">💳 Cartão de Crédito</option>
              <option value="emprestimo">🏦 Empréstimo</option>
              <option value="outros">📦 Outros</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-700 mb-2">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Forma de Pagamento
              </div>
            </label>
            <select
              value={formData.paymentMethod}
              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="dinheiro">💵 Dinheiro</option>
              <option value="debito">💳 Cartão de Débito</option>
              <option value="credito">💳 Cartão de Crédito</option>
              <option value="pix">📱 PIX</option>
              <option value="transferencia">🏦 Transferência</option>
            </select>
          </div>

          <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
            <input
              type="checkbox"
              id="paid"
              checked={formData.paid}
              onChange={(e) => setFormData({ ...formData, paid: e.target.checked })}
              className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500 cursor-pointer"
            />
            <label htmlFor="paid" className="text-slate-700 cursor-pointer flex-1">
              ✅ Já foi pago
            </label>
          </div>

          <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl border border-purple-200">
            <input
              type="checkbox"
              id="recurring-expense"
              checked={formData.recurring}
              onChange={(e) => setFormData({ ...formData, recurring: e.target.checked })}
              className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500 cursor-pointer"
            />
            <label htmlFor="recurring-expense" className="text-slate-700 cursor-pointer flex-1">
              🔄 Despesa recorrente (todo mês)
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border-2 border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors shadow-sm"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}