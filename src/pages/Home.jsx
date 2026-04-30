import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Shield, Zap, Rocket, Star, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ui } from '../lib/theme';

const StatCard = ({ label, value, icon: Icon }) => (
  <div className={ui.card + " flex flex-col items-center text-center group"}>
    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon className="text-violet-400" size={24} />
    </div>
    <div className="text-3xl font-black text-white mb-1">{value}</div>
    <div className="text-white/50 text-sm font-medium uppercase tracking-wider">{label}</div>
  </div>
);

const Feature = ({ title, desc, icon: Icon }) => (
  <div className="flex gap-6 items-start">
    <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl flex-shrink-0 flex items-center justify-center border border-white/10">
      <Icon className="text-fuchsia-400" size={28} />
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/60 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-fuchsia-600/20 blur-[120px] rounded-full" />
        </div>

        <div className={ui.container + " relative z-10 px-4"}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-right"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-bold text-white/70 tracking-wide uppercase">AI Engineer @ Megsy AI</span>
              </div>
              <h1 className={ui.h1 + " mb-8"}>
                نصنع المستقبل <br /> 
                <span className={ui.gradientText}>بالذكاء الاصطناعي</span>
              </h1>
              <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-2xl">
                أنا حمزة الجزايري، مطور أنظمة ذكاء اصطناعي في منصة Megsy AI. أساعد الشركات والأفراد على تسخير قوة الـ Generative AI لتحقيق قفزات نوعية في الإنتاجية والابتكار.
              </p>
              <div className="flex flex-wrap gap-4 justify-end">
                <Link to="/store" className={ui.btnPrimary + " text-lg px-8 py-4"}>
                  استكشف المتجر الرقمي
                  <ArrowLeft size={20} />
                </Link>
                <Link to="/projects" className={ui.btnGhost + " text-lg px-8 py-4"}>
                  رؤية أعمالي
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Hamza Hassan"
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 mx-auto"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 z-20 hidden sm:block">
                <div className={ui.card + " flex items-center gap-4 bg-black/80 ring-1 ring-white/20"}>
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <Zap className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold">نشط الآن</div>
                    <div className="text-white/50 text-xs">يعمل على Megsy v2.0</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/5">
        <div className={ui.container + " px-4"}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard icon={Star} label="تقييم العملاء" value="+4.9" />
            <StatCard icon={Users} label="مستخدم نشط" value="+250K" />
            <StatCard icon={Briefcase} label="مشروع ناجح" value="+150" />
            <StatCard icon={Rocket} label="سنة خبرة" value="+5" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={ui.section}>
        <div className={ui.container}>
          <div className="text-center mb-20">
            <h2 className={ui.h2 + " mb-6"}>لماذا تختار <span className={ui.gradientText}>Megsy AI</span>؟</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              تكنولوجيا متطورة مصممة خصيصاً لتلبية احتياجات السوق العربي الرقمي، مع دقة متناهية في الفهم والتنفيذ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-right" dir="rtl">
            <Feature 
              icon={Cpu}
              title="محركات معالجة فائقة"
              desc="نستخدم أحدث بوارج الـ LLM مع تحسينات خاصة للغة العربية للهجاتها المختلفة لضمان أدق النتائج."
            />
            <Feature 
              icon={Shield}
              title="خصوصية وأمان تام"
              desc="بياناتك مشفرة بالكامل. نحن في Megsy نؤمن بأن الخصوصية هي حق أساسي وليست مجرد ميزة تقنية."
            />
            <Feature 
              icon={Zap}
              title="سرعة استجابة مذهلة"
              desc="أنظمتنا مصممة للعمل في الوقت الحقيقي (Real-time) لتوفر لك وقتك الثمين وتزيد من إنتاجيتك."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-4">
        <div className={ui.container + " relative overflow-hidden rounded-[40px] bg-gradient-to-br from-violet-600 to-fuchsia-700 p-12 lg:p-20 text-center"}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">هل أنت مستعد لبناء مشروعك القادم؟</h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed">
            انضم إلى آلاف المحترفين الذين يستخدمون أدواتنا ومنتجاتنا يومياً لتطوير أعمالهم بالذكاء الاصطناعي.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Link to="/auth" className="px-12 py-4 bg-white text-violet-600 font-bold rounded-full text-xl hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.4)] transition-all">
              سجل مجاناً
            </Link>
            <Link to="/support" className="px-12 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-full text-xl hover:bg-white/20 transition-all">
              تحدث مع المساعد الذكي
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
