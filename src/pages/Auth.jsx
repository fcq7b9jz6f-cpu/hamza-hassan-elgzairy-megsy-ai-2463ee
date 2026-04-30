import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ui } from "../lib/theme";
import { User, LogIn, Mail, Lock, CheckCircle, ShieldAlert, ArrowRight, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Auth() {
  const nav = useNavigate();
  const [mode, setMode] = useState("signin"); // signin | signup | reset
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  useEffect(() => {
    window.supabase?.auth?.getSession?.().then(({ data: { session } }) => {
      if (session) nav("/account", { replace: true });
    });
  }, [nav]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg({ type: "", text: "" });

    try {
      if (mode === "signup") {
        const { error } = await window.supabase.auth.signUp({ 
          email, 
          password, 
          options: { emailRedirectTo: window.location.origin } 
        });
        if (error) throw error;
        setMsg({ type: "success", text: "تم! تحقق من بريدك لتفعيل الحساب." });
      } else if (mode === "signin") {
        const { error } = await window.supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        nav("/account");
      } else {
        const { error } = await window.supabase.auth.resetPasswordForEmail(email, { 
          redirectTo: window.location.origin + "/reset-password" 
        });
        if (error) throw error;
        setMsg({ type: "success", text: "أرسلنا رابط الاستعادة لبريدك." });
      }
    } catch (err) {
      setMsg({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Visual Side */}
      <div className="hidden lg:flex flex-col justify-center p-20 bg-gradient-to-br from-violet-950 to-black border-r border-white/5 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full" />
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
            <User className="w-8 h-8 text-violet-400" />
          </div>
          <h2 className="text-6xl font-black mb-6 uppercase leading-tight tracking-tighter">
            انضم إلى <br />
            <span className={ui.gradientText}>مجتمع الـ AI</span>
          </h2>
          <p className="text-xl text-white/50 leading-relaxed max-w-md">
            سجل دخولك الآن للوصول إلى منتجاتك الرقمية وحفظ تقدمك في دوراتنا التعليمية.
          </p>
          
          <div className="mt-20 space-y-6">
             <div className="flex items-center gap-4 text-white/40 font-bold uppercase tracking-widest text-xs">
                <div className="h-px w-10 bg-white/10" /> مميزات الحساب
             </div>
             {["وصول مدى الحياة للمنتجات", "تواصل مباشر مع حمزة", "تحديثات حصرية للأعضاء"].map((f, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-white/70">{f}</span>
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex flex-col justify-center items-center px-6 py-20 relative">
        <div className="w-full max-w-md">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
             <h1 className="text-4xl font-black mb-4 tracking-tight uppercase">
                {mode === "signin" ? "مرحباً بعودتك" : mode === "signup" ? "إنشاء حساب" : "استعادة الرقم"}
             </h1>
             <p className="text-white/40 font-bold">يرجى إدخال تفاصيل حسابك أدناه</p>
          </motion.div>

          {/* Mode Switcher */}
          <div className="flex gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/5 mb-8">
            {["signin", "signup"].map((m) => (
              <button 
                key={m} 
                onClick={() => setMode(m)}
                className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${mode === m ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white"}`}
              >
                {m === "signin" ? "تسجيل دخول" : "حساب جديد"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative group">
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-violet-500 transition-colors" />
              <input 
                type="email" 
                required 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="البريد الإلكتروني" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pr-12 pl-4 outline-none focus:border-violet-500 focus:bg-white/[0.08] transition-all font-bold text-sm"
              />
            </div>
            
            {mode !== "reset" && (
              <div className="relative group">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-fuchsia-500 transition-colors" />
                <input 
                  type="password" 
                  required 
                  minLength={6} 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  placeholder="كلمة المرور" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pr-12 pl-4 outline-none focus:border-fuchsia-500 focus:bg-white/[0.08] transition-all font-bold text-sm"
                />
              </div>
            )}

            {mode === "signin" && (
              <div className="text-left">
                <button type="button" onClick={() => setMode("reset")} className="text-xs font-bold text-violet-400 hover:text-white transition">نسيت كلمة المرور؟</button>
              </div>
            )}

            <button 
              disabled={loading} 
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 font-black text-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all disabled:opacity-50 active:scale-95 mt-4"
            >
              {loading ? "جاري المعالجة..." : mode === "signin" ? "دخول" : mode === "signup" ? "ابدأ الآن" : "إرسال رابط الاستعادة"}
            </button>
          </form>

          <AnimatePresence>
            {msg.text && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className={`mt-6 p-4 rounded-xl flex items-center gap-3 border ${msg.type === "success" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-red-500/10 border-red-500/20 text-red-400"}`}
              >
                {msg.type === "success" ? <CheckCircle className="w-5 h-5 shrink-0" /> : <ShieldAlert className="w-5 h-5 shrink-0" />}
                <span className="text-sm font-bold">{msg.text}</span>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="mt-12 pt-8 border-t border-white/5">
             <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">أو بواسطة</span>
                <div className="h-px flex-1 bg-white/10" />
             </div>
             <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 text-sm font-bold hover:bg-white hover:text-black transition-all">
                <Github className="w-5 h-5" /> متابعة بواسطة GitHub
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}