import React from "react";
import { ui } from "../lib/theme";
import { User, Shield, Package, Settings, LogOut, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In real app: await window.supabase.auth.signOut()
    navigate("/auth");
  };

  return (
    <div className="pt-24 min-h-screen">
      <section className={ui.section}>
        <div className={ui.container}>
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar */}
            <aside className="w-full md:w-80 space-y-4">
              <div className={`${ui.card} text-center`}>
                <div className="w-24 h-24 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto border-4 border-black shadow-glow">
                  H
                </div>
                <h3 className="text-xl font-bold">زائر متألق</h3>
                <p className="text-gray-500 text-sm mb-6">عضو منذ 2024</p>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="font-bold">0</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest">طلبات</div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <div className="font-bold">0</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest">تحميلات</div>
                  </div>
                </div>
              </div>

              <nav className={`${ui.card} p-2`}>
                <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-violet-600/10 text-violet-400 font-bold transition-all">
                  <User size={20} /> الملف الشخصي
                </button>
                <button className="w-full flex items-center gap-3 p-4 rounded-2xl text-gray-400 hover:bg-white/5 transition-all">
                  <Package size={20} /> طلباتي الرقمية
                </button>
                <button className="w-full flex items-center gap-3 p-4 rounded-2xl text-gray-400 hover:bg-white/5 transition-all">
                  <Shield size={20} /> الأمان
                </button>
                <button className="w-full flex items-center gap-3 p-4 rounded-2xl text-gray-400 hover:bg-white/5 transition-all">
                  <Settings size={20} /> الإعدادات
                </button>
                <div className="h-px bg-white/10 my-2" />
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 p-4 rounded-2xl text-red-500 hover:bg-red-500/10 transition-all"
                >
                  <LogOut size={20} /> تسجيل الخروج
                </button>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 space-y-8">
               <div className={ui.card}>
                 <h2 className="text-2xl font-bold mb-8">تفاصيل الحساب</h2>
                 <div className="grid sm:grid-cols-2 gap-8">
                   <div className="space-y-4">
                      <label className="text-sm text-gray-500 block">الاسم بالكامل</label>
                      <input type="text" defaultValue="زائر متحمس" className={ui.input} />
                   </div>
                   <div className="space-y-4">
                      <label className="text-sm text-gray-500 block">البريد الإلكتروني</label>
                      <input type="email" defaultValue="visitor@example.com" className={ui.input} />
                   </div>
                 </div>
                 <button className={ui.btnPrimary + " mt-8"}>حفظ التعديلات</button>
               </div>

               <div className={ui.card}>
                 <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">المنتجات التي تمتلكها</h2>
                    <Link to="/store" className="text-violet-400 flex items-center gap-2 hover:underline">
                      زيارة المتجر <ExternalLink size={16} />
                    </Link>
                 </div>
                 
                 <div className="text-center py-20 bg-white/[0.01] rounded-2xl border border-dashed border-white/5">
                    <p className="text-gray-500 italic">لم تقم بشراء أي منتج رقمي بعد.</p>
                 </div>
               </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
