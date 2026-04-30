import React from "react";
import { ui } from "../lib/theme";
import { Link } from "react-router-dom";
import { Code, Server, Smartphone, Globe, ArrowRight, Layout } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Megsy AI - Voice Agent",
      desc: "نظام ذكاء اصطناعي صوتي يتحدث العربية بطلاقة، مصمم لخدمة العملاء في الشركات الكبرى. يعتمد على نماذج OpenAI Whisper و ElevenLabs.",
      tags: ["Python", "WebSocket", "React", "AI"],
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#"
    },
    {
      title: "Smart Vision Dashboard",
      desc: "لوحة تحكم ذكية تستخدم رؤية الحاسوب (Computer Vision) لتحليل حركة المرور وسلوك المشاة في المدن الذكية بشكل لحظي.",
      tags: ["TensorFlow", "FastAPI", "Next.js"],
      image: "https://images.pexels.com/photos/11035481/pexels-photo-11035481.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#"
    },
    {
      title: "GPT-Powered CMS",
      desc: "نظام إدارة محتوى يقوم بكتابة وتنسيق وجدولة المقالات تلقائياً بناءً على الكلمات المفتاحية الرائجة باستخدام GPT-4.",
      tags: ["Node.js", "GPT-4", "Tailwind"],
      image: "https://images.pexels.com/photos/1139457/pexels-photo-1139457.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className={ui.section}>
        <div className={ui.container}>
          <div className="max-w-3xl mb-20 text-center mx-auto">
            <h1 className={ui.h1 + " mb-8"}>مشاريع <br/><span className={ui.gradientText}>تم إنشاؤها بالذكاء</span></h1>
            <p className="text-xl text-gray-400">
              مزيج من الابتكار التقني والتصميم الفائق. كل مشروع هنا هو محاولة لدفع حدود الممكن باستخدام الأدوات الحديثة.
            </p>
          </div>

          <div className="grid gap-16">
            {projects.map((p, idx) => (
              <div key={idx} className={`${ui.card} grid md:grid-cols-2 gap-12 group overflow-hidden items-center`}>
                <div className={`overflow-hidden rounded-3xl ${idx % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                   <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
                <div className={idx % 2 === 0 ? "md:order-2" : "md:order-1"}>
                   <div className="flex gap-2 mb-6">
                      {p.tags.map(tag => <span key={tag} className={ui.badge}>{tag}</span>)}
                   </div>
                   <h2 className={ui.h2}>{p.title}</h2>
                   <p className="text-gray-400 text-lg leading-relaxed mb-8">{p.desc}</p>
                   <Link to={p.link} className={ui.btnGhost}>
                      عرض المشروع
                      <ArrowRight size={20} className="mr-2 rotate-180" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee (Static) */}
      <section className="py-20 border-y border-white/5 bg-zinc-950/30 overflow-hidden">
        <div className="flex gap-20 items-center justify-center grayscale opacity-30 animate-pulse">
            <div className="flex items-center gap-4 text-3xl font-bold"><Code size={32}/> REACT</div>
            <div className="flex items-center gap-4 text-3xl font-bold"><Server size={32}/> PYTORCH</div>
            <div className="flex items-center gap-4 text-3xl font-bold"><Globe size={32}/> FASTAPI</div>
            <div className="flex items-center gap-4 text-3xl font-bold"><Smartphone size={32}/> TAILWIND</div>
            <div className="flex items-center gap-4 text-3xl font-bold"><Layout size={32}/> SUPABASE</div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
