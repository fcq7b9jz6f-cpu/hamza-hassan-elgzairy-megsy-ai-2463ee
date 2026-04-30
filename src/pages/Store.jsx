import { useState, useEffect } from "react";
import { ui } from "../lib/theme";
import { useCart } from "../lib/cart";
import { ShoppingBag, ChevronRight, Zap, Trophy, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
  {
    id: "prompt-pack-v1",
    name: "مجموعة Prompt المهندسين العباقرة",
    desc: "أكثر من 500 برومبت مختبر لـ GPT-4 و Midjourney لرفع إنتاجيتك بنسبة 300%.",
    price: 29,
    image: "https://images.pexels.com/photos/17485744/pexels-photo-17485744.png?auto=compress&cs=tinysrgb&w=800",
    badge: "الأكثر مبيعاً",
    category: "Prompts"
  },
  {
    id: "ai-course-mini",
    name: "كورس أساسيات هندسة الأوامر",
    desc: "دليل شامل للمبتدئين لتعلم كيفية التحدث مع الآلة واستخراج أفضل النتائج منها.",
    price: 49,
    image: "https://images.pexels.com/photos/18069696/pexels-photo-18069696.png?auto=compress&cs=tinysrgb&w=800",
    badge: "مستوى متوسط",
    category: "Courses"
  },
  {
    id: "megsy-ui-kit",
    name: "مجموعة واجهات Megsy UI للـ AI",
    desc: "مجموعة من مكونات React المصممة خصيصاً لتطبيقات الذكاء الاصطناعي (Chat UI, Bot widgets).",
    price: 79,
    image: "https://images.pexels.com/photos/18069695/pexels-photo-18069695.png?auto=compress&cs=tinysrgb&w=800",
    badge: "Developer Tool",
    category: "Templates"
  },
  {
    id: "automation-flow-pack",
    name: "حزمة أتمتة العمل للشركات",
    desc: "سيناريوهات Make.com و Zapier جاهزة لأتمتة خدمة العملاء وصناعة المحتوى بالـ AI.",
    price: 99,
    image: "https://images.pexels.com/photos/28767589/pexels-photo-28767589.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "بريميوم",
    category: "Automation"
  },
  {
    id: "seo-ai-mastery",
    name: "دليل SEO بالذكاء الاصطناعي",
    desc: "كيف تستخدم AI لكتابة مقالات تتصدر محركات البحث في ثوانٍ معدودة.",
    price: 19,
    image: "https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "كتاب إلكتروني",
    category: "Guides"
  },
  {
    id: "python-ai-scripts",
    name: "مكتبة سكربتات AI بايثون",
    desc: "سكربتات جاهزة لمعالجة الصور، استخراج النصوص، وتدريب نماذج مصغرة محلياً.",
    price: 55,
    image: "https://images.pexels.com/photos/18069697/pexels-photo-18069697.png?auto=compress&cs=tinysrgb&w=800",
    badge: "للمبرمجين",
    category: "Code"
  }
];

export default function Store() {
  const add = useCart(s => s.add);
  const [addedId, setAddedId] = useState(null);
  const [filter, setFilter] = useState("الكل");

  const categories = ["الكل", "Prompts", "Courses", "Templates", "Automation", "Guides", "Code"];
  const filtered = filter === "الكل" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  const handleAdd = (p) => {
    add(p);
    setAddedId(p.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <div className="pt-32 pb-20">
      <div className={ui.container}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-bold mb-4">
              <ShoppingBag className="w-4 h-4" />
              المتجر الرقمي
            </div>
            <h1 className={ui.h2}>أدوات <span className={ui.gradientText}>المستقبل</span> بين يديك</h1>
            <p className={ui.p}>
              حزم حصرية، دورات تدريبية، وأدوات تطوير صممتها بنفسي لمساعدتك على التفوق في عصر الذكاء الاصطناعي.
            </p>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
            {categories.map(c => (
              <button 
                key={c} 
                onClick={() => setFilter(c)}
                className={`whitespace-nowrap px-6 py-2 rounded-full border transition-all font-bold text-sm ${filter === c ? "bg-white text-black border-white shadow-lg" : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={p.id} 
              className={`${ui.card} ${ui.cardHover} group flex flex-col`}
            >
              <div className="relative aspect-[4/3] -mx-8 -mt-8 mb-6 overflow-hidden">
                <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.name} />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-black uppercase text-fuchsia-400 tracking-widest">
                  {p.badge}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold leading-tight group-hover:text-violet-400 transition-colors uppercase tracking-tight">{p.name}</h3>
                </div>
                <p className="text-sm text-white/50 mb-6 line-clamp-2">{p.desc}</p>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-1.5 text-xs text-white/40">
                    <Zap className="w-3.5 h-3.5 text-amber-400" /> الوصول فوري
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/40">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> فحص أمني
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-white/30 font-bold uppercase tracking-widest">السعر</span>
                  <span className="text-2xl font-black text-white">${p.price}</span>
                </div>
                <button 
                  onClick={() => handleAdd(p)}
                  className={`relative overflow-hidden px-6 py-3 rounded-2xl font-black text-sm transition-all active:scale-90 flex items-center gap-2 ${addedId === p.id ? "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]" : "bg-white text-black hover:bg-zinc-200"}`}
                >
                  <AnimatePresence mode="wait">
                    {addedId === p.id ? (
                      <motion.span initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }} key="added" className="flex items-center gap-2">
                        <Trophy className="w-4 h-4" /> تم الإضافة
                      </motion.span>
                    ) : (
                      <motion.span initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }} key="add" className="flex items-center gap-2">
                        شراء الآن <Sparkles className="w-4 h-4" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-32 p-12 rounded-[2.5rem] bg-gradient-to-br from-violet-900/60 to-fuchsia-900/40 border border-white/10 relative overflow-hidden text-center md:text-right">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-black mb-4 uppercase">تحتاج لاقتراح مخصص؟</h2>
              <p className="text-lg text-white/70 italic">
                لست متأكداً أي أداة تناسب احتياجك؟ تحدث مع مساعد حمزة الذكي ليقترح عليك الأنسب فوراً وبشكل مجاني.
              </p>
            </div>
            <button className="px-10 py-5 rounded-full bg-white text-black font-black text-xl hover:bg-zinc-100 shadow-2xl transition-all">
              تكلم مع الـ AI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}