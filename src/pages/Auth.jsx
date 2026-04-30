import React, { useState } from "react";
import { ui } from "../lib/theme";
import { Mail, Lock, User, Github, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating Auth for this agent environment 
    // In real app: await window.supabase.auth.signInWithPassword/signUp
    setTimeout(() => {
      setLoading(false);
      navigate("/account");
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/10 blur-[100px] rounded-full" />
      </div>

      <div className={`${ui.card} w-full max-w-md relative z-10`}>
        <div className="text-center mb-10">
          <h2 className={ui.h3}>{isLogin ? "تسجيل الدخول" : "إنشاء حساب جديد"}</h2>
          <p className="text-gray-400 mt-2">انضم إلى مجتمع مهندسي الذكاء الاصطناعي</p>
        </div>

        <form onSubmit={handleAuth} className="space-y-6">
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 px-1">الاسم الكامل</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="text"
                  required
                  placeholder="محمد أحمد"
                  className={ui.input + " pl-12"}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 px-1">البريد الإلكتروني</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="email"
                required
                placeholder="name@example.com"
                className={ui.input + " pl-12"}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 px-1 flex justify-between">
              كلمة المرور
              {isLogin && <button type="button" className="text-violet-400 hover:underline text-xs">نسيت كلمة المرور؟</button>}
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="password"
                required
                placeholder="••••••••"
                className={ui.input + " pl-12"}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <button disabled={loading} className={ui.btnPrimary + " w-full mt-4 h-14"}>
            {loading ? <Loader2 className="animate-spin" /> : (isLogin ? "دخول" : "إنشاء حساب")}
          </button>
        </form>

        <div className="mt-8 relative">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-zinc-950 px-2 text-gray-500 font-medium">أو أكمل بواسطة</span></div>
        </div>

        <div className="mt-6 flex gap-4">
          <button className="flex-1 bg-white/[0.03] border border-white/10 p-3 rounded-2xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            <Github size={20} />
            Github
          </button>
          <button className="flex-1 bg-white/[0.03] border border-white/10 p-3 rounded-2xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 font-bold text-lg">
            G
          </button>
        </div>

        <p className="mt-10 text-center text-gray-400 text-sm">
          {isLogin ? "ليس لديك حساب؟" : "لديك حساب بالفعل؟"}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-violet-400 hover:underline font-bold mr-2"
          >
            {isLogin ? "سجل الآن" : "سجل دخولك"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
