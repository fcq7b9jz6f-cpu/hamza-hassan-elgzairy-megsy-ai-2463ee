import React from 'react';
import { User, Settings, Package, CreditCard, LogOut, ChevronRight, Bell, Shield } from 'lucide-react';
import { ui } from '../lib/theme';

export default function Account() {
  return (
    <div className={ui.section + " min-h-screen pt-32"}>
      <div className={ui.container + " px-4"}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-4">
            <div className={ui.card + " p-8 text-center"}>
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 mx-auto mb-6 flex items-center justify-center text-3xl font-black border-4 border-white/5 shadow-2xl">
                H
              </div>
              <h3 className="text-xl font-bold mb-1">حمزة الجزايري</h3>
              <p className="text-white/40 text-sm mb-6">عضو بريميوم في Megsy AI</p>
              <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-red-400 hover:bg-red-500/10 transition-all font-bold flex items-center justify-center gap-2">
                <LogOut size={18} />
                تسجيل الخروج
              </button>
            </div>

            <nav className={ui.card + " p-4 space-y-2"}>
              {[
                { icon: User, label: 'الملف الشخصي', active: true },
                { icon: Package, label: 'مشترياتي', active: false },
                { icon: Bell, label: 'الإشعارات', active: false },
                { icon: Shield, label: 'الأمان', active: false },
                { icon: CreditCard, label: 'طرق الدفع', active: false },
              ].map((item, i) => (
                <button 
                    key={i} 
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                        item.active ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20' : 'text-white/50 hover:bg-white/5'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} />
                    <span className="font-bold">{item.label}</span>
                  </div>
                  <ChevronRight size={16} />
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            <div className={ui.card}>
              <h3 className="text-2xl font-bold mb-8">معلومات الحساب</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-white/30 uppercase tracking-widest px-1">الاسم الأول</label>
                    <input type="text" defaultValue="حمزة" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-violet-500/50" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-white/30 uppercase tracking-widest px-1">اسم العائلة</label>
                    <input type="text" defaultValue="الجزايري" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-violet-500/50" />
                </div>
                <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-white/30 uppercase tracking-widest px-1">البريد الإلكتروني</label>
                    <input type="email" defaultValue="hamza@megsy.ai" className="w-full bg-white/10 border border-white/10 rounded-2xl py-4 px-6 opacity-60 cursor-not-allowed" disabled />
                    <p className="text-[10px] text-white/20 mt-2 px-1">* لا يمكن تغيير البريد الإلكتروني الأساسي حالياً</p>
                </div>
                <div className="md:col-span-2 pt-6">
                    <button className={ui.btnPrimary + " px-12"}>حفظ التغييرات</button>
                </div>
              </form>
            </div>

            <div className={ui.card}>
              <h3 className="text-2xl font-bold mb-8">المشتريات الأخيرة</h3>
              <div className="space-y-4">
                {[
                    { name: 'Prompt Engineering Masterclass', date: '12 تشرين، 2023', price: 99 },
                    { name: 'SaaS AI Builder Templates', date: '05 تشرين، 2023', price: 149 }
                ].map((order, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm mb-1">{order.name}</h4>
                            <p className="text-white/30 text-xs">تاريخ الشراء: {order.date}</p>
                        </div>
                        <div className="text-right">
                            <span className="block text-violet-400 font-black text-xl">${order.price}</span>
                            <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">مكتمل</span>
                        </div>
                    </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}