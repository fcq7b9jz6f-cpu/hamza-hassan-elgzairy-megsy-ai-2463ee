import { ui } from "../lib/theme";
import { Code, ExternalLink, Github, Cpu, Layout, Globe, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Megsy AI Platform",
    role: "AI Core Engineer",
    desc: "المسؤول عن بناء البنية التحتية لمعالجة اللغات الطبيعية وتطوير نظام الدردشة الموحد الذي يخدم آلاف المستخدمين يومياً.",
    tags: ["Next.js", "Python", "GPT-4", "Redis"],
    stats: { stars: "2.4k", users: "15k+" },
    image: "https://images.pexels.com/photos/18069697/pexels-photo-18069697.png?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Arabic Gen-AI Engine",
    role: "Lead Developer",
    desc: "محرك توليد نصوص متخصص في اللهجات العربية واللغة الفصحى، تم تدريبه على بيانات ضخمة لضمان الدقة اللغوية.",
    tags: ["PyTorch", "HuggingFace", "FastAPI"],
    stats: { stars: "850", users: "2k+" },
    image: "https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Vision Assist Dashboard",
    role: "Full-Stack Dev",
    desc: "لوحة تحكم ذكية تستخدم رؤية الحاسوب (Computer Vision) لتحليل بيانات الصور واستخراج المعلومات التجارية الهامة.",
    tags: ["React", "TensorFlow", "Supabase"],
    stats: { stars: "1.2k", users: "500+" },
    image: "https://images.pexels.com/photos/18069695/pexels-photo-18069695.png?auto=compress&cs=tinysrgb&w=800"
  }
];

export default function Projects() {
  return (
    <div className="pt-32 pb-20">
      <div className={ui.container}>
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-bold mb-4">
            <Code className="w-4 h-4" /> معرض الأعمال
          </div>
          <h1 className={ui.h1}>مشاريع <span className={ui.gradientText}>الواقع الذكي</span></h1>
          <p className={ui.p}>لمحة عن التحديات التقنية التي قمت بحلها والأدوات التي قمت ببنائها لتغيير طريقة تفاعلنا مع الآلة.</p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {PROJECTS.map((p, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="group relative flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-violet-500/20 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-150 transition-transform duration-1000">
                 {i % 2 === 0 ? <Cpu className="w-40 h-40" /> : <Layout className="w-40 h-40" />}
              </div>

              <div className="w-full lg:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl relative">
                 <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-6 left-6 flex gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold">
                       <Star className="w-3 h-3 text-amber-400" /> {p.stats.stars}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold">
                       <Users className="w-3 h-3 text-sky-400" /> {p.stats.users}
                    </div>
                 </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                 <div className="inline-block px-4 py-1.5 rounded-full bg-violet-500/20 text-violet-400 text-xs font-black uppercase tracking-widest border border-violet-500/30">
                    {p.role}
                 </div>
                 <h2 className="text-4xl font-black uppercase italic tracking-tighter">{p.title}</h2>
                 <p className="text-white/60 text-lg leading-relaxed font-medium">
                   {p.desc}
                 </p>
                 
                 <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white/50">{t}</span>
                    ))}
                 </div>

                 <div className="pt-8 flex gap-4">
                    <button className="flex-1 py-4 rounded-2xl bg-white text-black font-black text-sm flex items-center justify-center gap-2 hover:bg-zinc-200 transition active:scale-95 shadow-xl shadow-white/5">
                       مشاهدة المشروع <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition active:scale-95">
                       <Github className="w-5 h-5" />
                    </button>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Contribution Mockup */}
        <div className="mt-32 p-12 rounded-[3.5rem] bg-zinc-950 border border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent" />
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div>
                 <h2 className="text-3xl font-black mb-4 flex items-center gap-3 italic uppercase">
                    <Github className="w-8 h-8" /> نشاط الكود اليومي
                 </h2>
                 <p className="text-white/40 font-bold">أكثر من 2,500 مساهمة (Contributions) في العام الأخير عبر مشاريع مفتوحة المصدر.</p>
              </div>
              <div className="hidden md:flex gap-1.5">
                 {[...Array(20)].map((_, i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                       {[...Array(7)].map((_, j) => (
                          <div key={j} className={`w-3 h-3 rounded-sm ${Math.random() > 0.5 ? 'bg-violet-600' : 'bg-zinc-900'}`} />
                       ))}
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}