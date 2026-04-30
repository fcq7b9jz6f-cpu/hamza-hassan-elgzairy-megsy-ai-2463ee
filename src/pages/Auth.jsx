import React from 'react';
import { Mail, Lock, Sparkles, ArrowLeft, Github, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ui } from '../lib/theme';

export default function Auth() {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative flex items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-violet-600/10 via-transparent to-transparent"></div>
      
      <div className={ui.card + " max-w-lg w-full p-8 md:p-12 relative overflow-hidden"}>
        <div className="absolute top-0 right-0 p-8 opacity-5">
            <Lock size={150} />
        </div>
        
        <div className="text-center mb-10 relative">
          <div className="inline-flex w-16 h-16 bg-violet-600/20 rounded-2xl items-center justify-center text-violet-400 mb-6">
            <Sparkles size={32} />
          </div>
          <h2 className="text-3xl font-black mb-3">{isLogin ? 'مرحباً بعودتك' : 'انضم لعالم Megsy'}</h2>
          <p className="text-white/40">{isLogin ? 'أكمل رحلتك في تعلم الذكاء الاصطناعي اليوم' : 'أنشئ حساباً مجانياً وابدأ استثمارك في المستقبل'}</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="space-y-2">
                <label className="text-sm font-bold text-white/70 block px-1">الاسم الكامل</label>
                <div className="relative">
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-violet-500/50 transition-all" placeholder="حمزة الجزايري" />
                </div>
            </div>
          )}
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-white/70 block px-1">البريد الإلكتروني</label>
            <div className="relative">
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-violet-500/50 transition-all" placeholder="name@email.com" />
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between px-1">
                <label className="text-sm font-bold text-white/70 block">كلمة المرور</label>
                {isLogin && <button className="text-xs text-violet-400 hover:underline">نسيت كلمة المرور؟</button>}
            </div>
            <div className="relative">
              <input type="password" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-violet-500/50 transition-all" placeholder="••••••••" />
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={18} />
            </div>
          </div>

          <button className={ui.btnPrimary + " w-full py-4 text-lg mt-4 shadow-violet-500/40"}>
            {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
          </button>

          <div className="relative flex items-center justify-center py-4">
             <div className="absolute w-full h-[1px] bg-white/10"></div>
             <span className="bg-zinc-950 px-4 text-xs text-white/30 uppercase tracking-widest relative">أو عبر</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <button className={ui.btnGhost + " py-3 px-4 border-white/5"}>
                <Chrome size={18} />
                Google
             </button>
             <button className={ui.btnGhost + " py-3 px-4 border-white/5"}>
                <Github size={18} />
                GitHub
             </button>
          </div>
        </form>

        <p className="text-center mt-10 text-white/40">
          {isLogin ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-violet-400 font-bold mr-2 hover:underline"
          >
            {isLogin ? 'سجل الآن' : 'ادخل لحسابك'}
          </button>
        </p>
      </div>
    </div>
  );
}