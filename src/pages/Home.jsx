import React from "react";
import { ui } from "../lib/theme";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Cpu, Rocket, Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className={ui.section}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className={ui.container}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-violet-400 text-sm mb-6">
                <Sparkles size={16} />
                <span>مستقبل الذكاء الاصطناعي يبدأ هنا</span>
              </div>
              <h1 className={ui.h1}>
                حمزة <br />
                <span className={ui.gradientText}>الجزايري</span>
              </h1>
              <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-xl">
                مهندس ذكاء اصطناعي ومطور واجهات في <Link to="https://megsyai.com" className="text-white hover:underline">Megsy AI</Link>. 
                أبني تجارب رقمية ذكية تدمج بين الابتكار والجمال البصري. متخصص في بناء تطبيقات الـ Generative AI وأنظمة التعلم العميق.
              </p>
              <div className="mt-12 flex flex-wrap gap-6">
                <Link to="/store" className={ui.btnPrimary}>
                  تصفح المنتجات الرقمية
                </Link>
                <Link to="/projects" className={ui.btnGhost}>
                  شاهد أعمالي
                  <ArrowLeft size={20} className="mr-2 rotate-180" />
                </Link>
              </div>
              
              <div className="mt-16 flex items-center gap-8 text-gray-500">
                  <span className="text-sm font-medium uppercase tracking-widest px-4 border-l border-white/10">Follow Me</span>
                  <div className="flex gap-4">
                      <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
                      <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                      <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                  </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/5474034/pexels-photo-5474034.jpeg?auto=compress&cs=tinysrgb&h=800" 
                  alt="Hamza Elgzairy" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Floating Cards */}
              <div className="absolute -bottom-10 -right-10 glass p-6 rounded-3xl z-20 hidden md:block animate-bounce shadow-glow">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
                        <Cpu size={24} />
                    </div>
                    <div>
                        <div className="font-bold">AI Engineer</div>
                        <div className="text-xs text-gray-400">@ Megsy AI Platform</div>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services/Experties */}
      <section className={`${ui.section} bg-zinc-950/50`}>
        <div className={ui.container}>
            <div className="text-center mb-20">
                <h2 className={ui.h2}>خبرات مدفوعة <span className={ui.gradientText}>بالذكاء الاصطناعي</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto">نحول الأفكار المعقدة إلى أدوات ذكية سهلة الاستخدام، مع التركيز على الكفاءة والابتكار المستمر.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: "تطوير وكلاء الذكاء الاصطناعي",
                        desc: "بناء وكلاء ذكاء اصطناعي (AI Agents) قادرين على أداء المهام المعقدة، التخطيط، والتفاعل مع المستخدمين بشكل طبيعي وسلس عبر أدوات مثل LangChain و AutoGPT.",
                        icon: <Rocket className="text-violet-400" />
                    },
                    {
                        title: "واجهات المستخدم الذكية",
                        desc: "تصميم وتطوير واجهات React عصرية تستفيد من قدرات AI لتقديم تجربة مخصصة لكل مستخدم، مع التركيز على السرعة والتصميم البصري الفائق.",
                        icon: <Sparkles className="text-fuchsia-400" />
                    },
                    {
                        title: "استشارات الـ Generative AI",
                        desc: "مساعدة الشركات والمبدعين في دمج نماذج اللغة الكبيرة (LLMs) وصناعة الصور في سير عملهم اليومي لزيادة الإنتاجية بنسبة تصل إلى 300%.",
                        icon: <Cpu className="text-sky-400" />
                    }
                ].map((s, idx) => (
                    <div key={idx} className={`${ui.card} ${ui.cardHover}`}>
                        <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                            {s.icon}
                        </div>
                        <h3 className={ui.h3}>{s.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
