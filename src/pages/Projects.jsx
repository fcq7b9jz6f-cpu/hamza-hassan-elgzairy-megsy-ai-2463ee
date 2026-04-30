import React from 'react';
import { ExternalLink, Github, Code, Sparkles, ArrowUpRight } from 'lucide-react';
import { ui } from '../lib/theme';

const works = [
  {
    title: 'Megsy AI Engine',
    desc: 'المحرك الأساسي لبناء الوكلاء الأذكياء الذي يدير حالياً أكثر من 50,000 محادثة يومياً بدقة محتوى فائقة.',
    tags: ['Next.js', 'PostgreSQL', 'OpenAI'],
    image: 'https://images.pexels.com/photos/17483874/pexels-photo-17483874.png'
  },
  {
    title: 'Prompt-Pro Architecture',
    desc: 'نظام هيكلي لترجمة متطلبات العميل المعقدة إلى أوامر LLMs متقدمة مع نظام اختبار تلقائي.',
    tags: ['Python', 'LangChain', 'RAG'],
    image: 'https://images.pexels.com/photos/17483873/pexels-photo-17483873.png'
  },
  {
    title: 'Visual AI Designer',
    desc: 'أداة تعتمد على Stable Diffusion لتصميم واجهات المواقع بمجرد كتابة وصف بسيط للفكرة.',
    tags: ['React', 'Diffusers', 'FastAPI'],
    image: 'https://images.pexels.com/photos/17483868/pexels-photo-17483868.png'
  }
];

export default function Projects() {
  return (
    <div className={ui.section + " min-h-screen pt-32"}>
      <div className={ui.container + " px-4"}>
        <div className="max-w-3xl mb-24">
            <h1 className={ui.h1 + " mb-8"}>أعمالي في <br /> <span className={ui.gradientText}>عالم الـ AI</span></h1>
            <p className="text-white/50 text-xl leading-relaxed">
                هنا استعرض بعض المشاريع التي أعمل عليها في Megsy AI بشكل خاص، وتجاربي المستمرة في هندسة اللغة وبناء الأنظمة المستقلة.
            </p>
        </div>

        <div className="space-y-32 mb-20">
          {works.map((item, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
              <div className="flex-1 w-full group">
                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-video">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                     <button className={ui.btnPrimary}>
                        شغال الآن
                        <ExternalLink size={18} />
                     </button>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-2xl bg-violet-600/20 flex items-center justify-center text-violet-400">
                        <Code size={24} />
                    </span>
                    <h3 className="text-4xl font-black uppercase tracking-tighter">{item.title}</h3>
                </div>
                
                <p className="text-white/50 text-xl leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/70">
                        {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-8">
                    <button className="flex items-center gap-2 text-white font-bold group">
                        استكشاف تفاصيل المشروع
                        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}