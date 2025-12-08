import { useState } from 'react';
import { Bot, Send, TrendingUp, AlertTriangle, CheckCircle, Sparkles, MessageSquare, Zap } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface Insight {
  id: string;
  type: 'success' | 'warning' | 'info';
  title: string;
  description: string;
  action?: string;
}

export function AICoach() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Olá! Sou seu Coach Financeiro IA. Estou aqui para ajudá-lo a alcançar suas metas financeiras. Como posso ajudar hoje?',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const insights: Insight[] = [
    {
      id: '1',
      type: 'success',
      title: 'Meta de Dezembro no Caminho Certo!',
      description: 'Você está 15% abaixo do orçamento planejado para este mês. Continue assim e você economizará R$ 450 extras!',
    },
    {
      id: '2',
      type: 'warning',
      title: 'Gastos com Alimentação Acima da Média',
      description: 'Seus gastos com alimentação este mês (R$ 890) estão 23% acima da média dos últimos 3 meses (R$ 720).',
      action: 'Ver detalhes',
    },
    {
      id: '3',
      type: 'info',
      title: 'Oportunidade de Investimento',
      description: 'Com base no seu saldo disponível, você pode começar a investir R$ 300/mês e ter R$ 18.500 em 5 anos (considerando 8% a.a.).',
      action: 'Simular',
    },
  ];

  const quickQuestions = [
    'Como posso economizar mais este mês?',
    'Qual dívida devo pagar primeiro?',
    'Como está meu progresso das metas?',
    'Dicas para reduzir gastos',
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    // Simular resposta da IA
    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      type: 'ai',
      content: getAIResponse(inputMessage),
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInputMessage('');
  };

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('economizar') || lowerQuestion.includes('poupar')) {
      return 'Analisando seus gastos, identifiquei 3 oportunidades de economia:\n\n1. **Assinaturas não utilizadas**: R$ 89/mês em streaming que você usa menos de 2h por semana\n2. **Refeições fora**: Reduzindo de 12 para 8 vezes/mês = economia de R$ 160\n3. **Energia elétrica**: Seus gastos subiram 18% - revisar uso de ar-condicionado pode economizar R$ 45/mês\n\nTotal de economia potencial: **R$ 294/mês**';
    }
    
    if (lowerQuestion.includes('dívida') || lowerQuestion.includes('pagar')) {
      return 'Com base na análise das suas dívidas, recomendo priorizar o **Cartão Nubank**:\n\n✅ **Por quê?**\n- Maior taxa de juros: 13.99% a.m.\n- Menor saldo: R$ 1.850 (mais rápido de quitar)\n- Liberará R$ 185/mês no orçamento\n\n📊 **Estratégia recomendada:**\nAumente o pagamento para R$ 370/mês (dobro do mínimo). Você quitará em 5 meses e economizará R$ 129 em juros!';
    }
    
    if (lowerQuestion.includes('meta') || lowerQuestion.includes('progresso')) {
      return 'Seu progresso está excelente! 🎉\n\n**Meta: Economizar R$ 1.500 até Fevereiro**\n- Progresso: R$ 890 (59%)\n- Faltam: R$ 610\n- Status: Acima do esperado (+12%)\n\n**Meta: Reduzir gastos em 15%**\n- Dezembro: -18% ✅\n- Média 3 meses: -14%\n- Quase lá!\n\nContinue assim e você atingirá todas as metas antes do prazo!';
    }
    
    return 'Entendi sua pergunta! Com base nos seus dados financeiros, posso fornecer análises personalizadas sobre:\n\n• Estratégias de economia\n• Priorização de dívidas\n• Acompanhamento de metas\n• Insights sobre padrões de gastos\n• Sugestões de investimento\n\nPoderia ser mais específico sobre o que você gostaria de saber?';
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900">Coach Financeiro IA</h2>
          <p className="text-slate-500 mt-1">Análises inteligentes e recomendações personalizadas</p>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-sm">Online</span>
        </div>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className={`rounded-2xl p-5 border-2 shadow-sm hover:shadow-md transition-shadow ${
              insight.type === 'success'
                ? 'bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200'
                : insight.type === 'warning'
                ? 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200'
                : 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200'
            }`}
          >
            <div className="flex items-start gap-3">
              {insight.type === 'success' && (
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              )}
              {insight.type === 'warning' && (
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
              )}
              {insight.type === 'info' && (
                <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h4 className="text-slate-900 text-sm mb-2">{insight.title}</h4>
                <p className="text-slate-700 text-sm leading-relaxed">{insight.description}</p>
                {insight.action && (
                  <button className="mt-3 text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1">
                    {insight.action} →
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Interface */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-5 text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div>Assistente IA</div>
              <div className="text-sm text-purple-100">Sempre disponível para ajudar</div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[400px] overflow-y-auto p-6 space-y-4 bg-slate-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-5 py-3 shadow-sm ${
                  message.type === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-slate-900 border border-slate-200'
                }`}
              >
                {message.type === 'ai' && (
                  <div className="flex items-center gap-2 mb-2 text-purple-600">
                    <Bot className="w-4 h-4" />
                    <span className="text-xs">Coach IA</span>
                  </div>
                )}
                <div className="whitespace-pre-line text-sm leading-relaxed">{message.content}</div>
                <div
                  className={`text-xs mt-2 ${
                    message.type === 'user' ? 'text-purple-200' : 'text-slate-400'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Questions */}
        <div className="border-t border-slate-200 p-5 bg-white">
          <div className="flex items-center gap-2 mb-3 text-slate-600 text-sm">
            <MessageSquare className="w-4 h-4" />
            <span>Perguntas rápidas:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="bg-slate-50 border border-slate-200 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600 text-slate-700 px-4 py-2 rounded-xl text-sm transition-all"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-slate-200 p-5 bg-white">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Digite sua pergunta..."
              className="flex-1 px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl transition-all shadow-sm hover:shadow flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span className="hidden sm:inline">Enviar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}