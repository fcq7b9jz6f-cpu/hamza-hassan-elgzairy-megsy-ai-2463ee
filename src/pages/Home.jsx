import { ui } from "../lib/theme";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Code, Rocket, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const stats = [
    { label: "مستخدم في Megsy AI", value: "+15K" },
    { label: "مشاريع AI مكتملة", value: "40+" },
    { label: "سنة خبرة تقنية", value: "5" },
    { label: "حلول تقنية مبتكرة", value: "100%" }
  ];

  const features = [
    {
      title: "هندسة الذكاء الاصطناعي",
      desc: "متخصص في بناء نماذج لغوية كبيرة (LLMs) قابلة للتوسع وتكاملها مع تطبيقات الويب الحقيقية.",
      icon: Brain,
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "تطوير Full-Stack",
      desc: "أبني واجهات أمامية سريعة البرق ونهايات خلفية متينة تدعم ملايين البيانات يومياً في Megsy AI.",
      icon: Code,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "قيادة الابتكار",
      desc: "أساهم في تشكيل مستقبل Megsy AI من خلال أبحاث متقدمة في معالجة اللغات الطبيعية.",
      icon: Rocket,
      color: "from-fuchsia-500 to-pink-600"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[150px] rounded-full" />
        </div>

        <div className={`${ui.container} relative z-10 grid lg:grid-cols-2 gap-12 items-center`}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-fuchsia-400" />
              <span className="text-sm font-bold text-white/80">AI Engineer @ Megsy AI</span>
            </div>
            
            <h1 className={ui.h1}>
              حمزة <br />
              <span className={ui.gradientText}>الجزايري</span>
            </h1>
            
            <p className={ui.p + " mb-10"}>
              مهندس ذكاء اصطناعي وشغوف ببناء تطبيقات المستقبل. أقوم بتحويل الأفكار المعقدة إلى منتجات رقمية ذكية تخدم آلاف المستخدمين حول العالم عبر منصة Megsy AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/store" className={ui.btnPrimary}>
                استكشف المتجر <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/projects" className={ui.btnGhost}>
                أعمالي التقنية
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-sm font-bold tracking-widest text-white/30 uppercase">Trusted by</span>
              <img src="https://megsyai.com/favicon.ico" alt="Megsy AI" className="h-8" />
              <span className="text-xl font-black text-white/40">MEGSY AI</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/19805885/pexels-photo-19805885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Hamza Hassan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-500 flex items-center justify-center">
                    <Star className="text-white fill-white w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-white italic">"نحن لا نتوقع المستقبل، نحن نبرمجه."</div>
                    <div className="text-sm text-white/50">حمزة الجزايري — 2024</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className={ui.container}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl sm:text-6xl font-black text-gradient mb-2">{s.value}</div>
                <div className="text-sm sm:text-base font-medium text-white/40 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Work Section */}
      <section className={ui.section}>
        <div className={ui.container}>
          <div className="text-center mb-20">
            <h2 className={ui.h2}>خبرات تضعك في <span className={ui.gradientText}>المقدمة</span></h2>
            <p className={ui.p + " mx-auto"}>
              أركز على تمكين الأفراد والشركات من استغلال القوة الكاملة للذكاء الاصطناعي لزيادة الإنتاجية والإبداع.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className={`${ui.card} group hover:border-violet-500/30 transition-all`}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-8 shadow-xl`}>
                  <f.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  {f.desc}
                </p>
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Megsy Section Integration */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className={ui.container}>
          <div className={`${ui.card} glass border-white/10 flex flex-col lg:flex-row items-center gap-12`}>
            <div className="flex-1 space-y-6">
              <img src="https://megsyai.com/favicon.ico" alt="" className="w-16 h-16 drop-shadow-glow" />
              <h2 className="text-4xl sm:text-5xl font-black">جزء من <span className="text-violet-400">Megsy AI</span></h2>
              <p className="text-white/70 text-lg">
                فخور بكوني المحرك التقني خلف العديد من الميزات التي تراها في Megsy. من أنظمة الدردشة المتقدمة إلى أدوات تحويل النص إلى صورة، نقوم ببناء نظام بيئي متكامل للذكاء الاصطناعي في الوطن العربي.
              </p>
              <ul className="space-y-4">
                {["تطوير نظام RAG المتقدم", "تحسين استجابة النماذج بـ 40%", "بناء لوحة تحكم المستخدمين الذكية"].map((li, k) => (
                  <li key={k} className="flex items-center gap-3 font-semibold text-white/90">
                    <div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_10px_#d946ef]" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.pexels.com/photos/18069697/pexels-photo-18069697.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                className="rounded-3xl shadow-2xl border border-white/5" 
                alt="AI work" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}