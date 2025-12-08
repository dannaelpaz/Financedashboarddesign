import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { ExpenseManager } from './components/ExpenseManager';
import { DebtRanking } from './components/DebtRanking';
import { AICoach } from './components/AICoach';
import { Settings } from './components/Settings';
import { LayoutDashboard, Receipt, TrendingDown, Bot, Settings as SettingsIcon, PieChart, DollarSign, Search, Bell, User } from 'lucide-react';

type Tab = 'dashboard' | 'expenses' | 'debts' | 'coach' | 'settings';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  const tabs = [
    { id: 'dashboard' as Tab, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'expenses' as Tab, label: 'Despesas', icon: Receipt },
    { id: 'debts' as Tab, label: 'Dívidas', icon: TrendingDown },
    { id: 'coach' as Tab, label: 'Coach IA', icon: Bot },
    { id: 'settings' as Tab, label: 'Configurações', icon: SettingsIcon },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex md:flex-col w-64 bg-slate-900 text-white fixed h-screen">
        {/* Logo */}
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <span className="text-xl">FinanceApp</span>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6">
          <div className="text-slate-500 text-xs uppercase tracking-wider mb-4 px-3">Menu</div>
          <div className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Pro Card */}
        <div className="p-4 m-4 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl">
          <div className="mb-3">Switch to Pro</div>
          <p className="text-sm text-purple-200 mb-4">
            Desbloqueie análises avançadas e relatórios ilimitados
          </p>
          <button className="w-full bg-white text-purple-600 py-2 rounded-lg text-sm hover:bg-purple-50 transition-colors">
            Upgrade Now
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-slate-900 flex items-center gap-2">
                  Bem-vindo, Usuário 👋
                </h1>
              </div>
              
              {/* Search and Icons */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl">
                  <Search className="w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="bg-transparent border-none outline-none text-sm w-48"
                  />
                  <kbd className="hidden lg:inline-block px-2 py-0.5 text-xs bg-white rounded border border-slate-300">⌘ K</kbd>
                </div>
                
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors">
                  <Bell className="w-5 h-5 text-slate-600" />
                </button>
                
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 pb-24 md:pb-6">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'expenses' && <ExpenseManager />}
          {activeTab === 'debts' && <DebtRanking />}
          {activeTab === 'coach' && <AICoach />}
          {activeTab === 'settings' && <Settings />}
        </main>
      </div>

      {/* Bottom Navigation - Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 z-50">
        <div className="grid grid-cols-5 gap-1 px-2 py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-400'
                }`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-xs">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}