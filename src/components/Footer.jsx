import { ui } from "../lib/theme";
import { Link } from "react-router-dom";
import { Terminal, Github, Twitter, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      
      <div className={ui.container}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 px-4">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                <Terminal className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight leading-none uppercase">HAMZA</span>
                <span className="text-[10px] text-fuchsia-400 font-bold tracking-widest uppercase">AI ENGINEER</span>
              </div>
            </Link>
            <p className="text-white/40 font-medium leading-relaxed max-w-xs">
              نبني جسوراً من الأكواد والذكاء الاصطناعي لنصل بمشاريعكم إلى آفاق غير مسبوقة. انطلق معنا في رحلة الابتكار.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <Link key={i} to="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-white">الملاحة</h4>
            <ul className="space-y-4">
              {["الرئيسية", "المتجر الرقمي", "المشاريع", "دعم العملاء"].map((link, idx) => (
                <li key={idx}>
                  <Link to="#" className="text-white/40 hover:text-violet-400 transition font-bold">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-white">الأدوات</h4>
            <ul className="space-y-4">
              {["Megsy AI", "Prompt Engineering", "Custom LLMs", "Automation"].map((tool, idx) => (
                <li key={idx}>
                  <Link to="#" className="text-white/40 hover:text-fuchsia-400 transition font-bold">{tool}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-700">
               <Terminal className="w-20 h-20" />
            </div>
            <h4 className="text-lg font-black mb-4">اشترك في النشرة</h4>
            <p className="text-xs text-white/40 mb-6 font-bold leading-relaxed">احصل على آخر التحديثات في عالم الذكاء الاصطناعي أسبوعياً.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="بريدك.." className="flex-1 bg-black border border-white/10 rounded-xl px-4 text-xs outline-none focus:border-violet-500" />
              <button className="px-4 py-3 rounded-xl bg-white text-black text-xs font-black">انضم</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          <div className="text-[10px] sm:text-xs font-black text-white/30 uppercase tracking-[0.3em]">
            © {currentYear} HAMZA HASSAN ELGZAIRY — ALL RIGHTS RESERVED
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-white/40">
            صنع بـ <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> في <span className="text-white">MEGSY AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}