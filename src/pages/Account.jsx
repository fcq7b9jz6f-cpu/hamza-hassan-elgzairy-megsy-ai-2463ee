import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ui } from "../lib/theme";
import { User, Package, Settings, LogOut, ShieldCheck, Mail, Calendar, Key, Check } from "lucide-react";
import { useCart } from "../lib/cart";

export default function Account() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
  const cartItems = useCart(s => s.items);

  useEffect(() => {
    window.supabase?.auth?.getUser?.().then(({ data }) => {
      if (!data?.user) {
        nav("/auth");
      } else {
        setUser(data.user);
      }
      setLoading(false);
    });
  }, [nav]);

  const handleLogout = async () => {
    await window.supabase.auth.signOut();
    nav("/auth");
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="pt-32 pb-20 px-4">
      <div className={ui.container}>
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-4">
             <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/10 text-center relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                <div className="w-24 h-24 rounded-full bg-violet-600 mx-auto mb-6 flex items-center justify-center text-4xl font-black shadow-2xl shadow-violet-500/20">
                  {user?.email?.charAt(0).toUpperCase()}
                </div>
                <h3 className="text-xl font-bold truncate mb-1">{user?.email?.split('@')[0]}</h3>
                <p className="text-xs text-white/30 truncate mb-8">{user?.email}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                  <ShieldCheck className="w-3 h-3" /> حساب مؤمن
                </div>
             </div>

             <nav className="space-y-2">
                {[
                  { icon: User, label: "الملف الشخصي", active: true },
                  { icon: Package, label: "طلباتي" },
                  { icon: Key, label: "تغيير المرور" },
                  { icon: Settings, label: "الإعدادات" }
                ].map((item, idx) => (
                  <button key={idx} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm ${item.active ? "bg-white text-black" : "text-white/50 hover:bg-white/5"}`}>
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm text-red-400 hover:bg-red-500/10 transition-all mt-8"
                >
                  <LogOut className="w-5 h-5" />
                  تسجيل خروج
                </button>
             </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
             <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "إجمالي المشتروات", value: "$0.00", icon: Package },
                  { label: "البريد الإلكتروني", value: "مؤكد بنجاح", icon: Mail },
                  { label: "تاريخ الانضمام", value: new Date(user?.created_at).toLocaleDateString(), icon: Calendar }
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 group hover:border-violet-500/20 transition-all">
                    <stat.icon className="w-6 h-6 text-violet-400 mb-4" />
                    <div className="text-xs font-black text-white/30 uppercase tracking-widest mb-1">{stat.label}</div>
                    <div className="text-xl font-bold">{stat.value}</div>
                  </div>
                ))}
             </div>

             <div className={`${ui.card} glass`}>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-black uppercase tracking-tight">آخر المشتريات الرقمية</h3>
                  <Link to="/store" className="text-sm font-black text-fuchsia-400 hover:underline">المتجر الرقمي ←</Link>
                </div>
                
                <div className="text-center py-20 px-8 border-2 border-dashed border-white/5 rounded-3xl">
                   <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                      <Package className="w-8 h-8 text-white/20" />
                   </div>
                   <h4 className="text-xl font-bold mb-2">لا توجد طلبات بعد</h4>
                   <p className="text-white/40 max-w-xs mx-auto text-sm mb-8">لم تقم بشراء أي منتجات رقمية حتى الآن. ابدأ رحلتك التكنولوجية اليوم.</p>
                   <Link to="/store" className={ui.btnPrimary + " px-10 py-3"}>استعرض المنتجات</Link>
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
                <div className={`${ui.card} glass border-white/10`}>
                   <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                      <ShieldCheck className="w-6 h-6 text-emerald-400" /> أمان الحساب
                   </h3>
                   <ul className="space-y-4">
                      <li className="flex items-center justify-between">
                         <span className="text-sm font-bold text-white/60">التوثيق الثنائي (2FA)</span>
                         <span className="text-[10px] font-black bg-red-500/10 text-red-500 px-2 py-1 rounded-md">مغلق</span>
                      </li>
                      <li className="flex items-center justify-between">
                         <span className="text-sm font-bold text-white/60">سجل الدخول</span>
                         <span className="text-[10px] font-black text-emerald-400">آخر 24 ساعة نشط</span>
                      </li>
                   </ul>
                </div>
                <div className={`${ui.card} bg-violet-600/10 border-violet-500/20`}>
                   <h3 className="text-xl font-black mb-4">هل تحتاج مساعدة؟</h3>
                   <p className="text-sm text-white/60 mb-8 font-medium">فريق الدعم الفني المعتمد على الذكاء الاصطناعي متاح لك دائماً لحل أي مشكلة تقنية.</p>
                   <Link to="/support" className="text-sm font-black text-violet-400 hover:text-white flex items-center justify-center gap-2 py-3 rounded-xl border border-violet-500/30 hover:bg-violet-500/10 transition-all">تحدث معنا الآن</Link>
                </div>
             </div>
          </main>

        </div>
      </div>
    </div>
  );
}