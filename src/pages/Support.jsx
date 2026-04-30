import { useTheme } from "../lib/theme";
import AIChat from "../components/AIChat";
import { ui } from "../lib/theme";
import { MessageSquare, Zap, Globe, ShieldCheck, Mail, Twitter, Github, Linkedin, HelpCircle } from "lucide-react";

export default function Support() {
  const faqs = [
    {
      q: "كيف يمكنني الوصول لمنتجاتي بعد الشراء؟",
      a: "فور إتمام الدفع، ستتلقى رابطاً بريدياً للتحميل المباشر، كما ستكون كافة منتجاتك متاحة دائماً في صفحة 'حسابي'."
    },
    {
      q: "هل البرومبتس (Prompts) تعمل مع ChatGPT المجاني؟",
      a: "نعم، البرومبتس مصممة لتعمل مع كافة نماذج GPT، ولكنها تعطي نتائج استثنائية مع GPT-4 و Claude 3 Opus."
    },
    {
      q: "هل تقدم استشارات برمجية للذكاء الاصطناعي؟",
      a: "نعم، يمكنك حجز جلسة مباشرة معي عبر صفحة التواصل أو التحدث مع المساعد الذكي لمعرفة المزيد."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className={ui.container}>
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-sm font-black mb-6 uppercase tracking-widest">
            Support Center
          </div>
          <h1 className={ui.h1}>مركز <span className={ui.gradientText}>الدعم الذكي</span></h1>
          <p className={ui.p + " mx-auto"}>
            نحن هنا لضمان رحلتك في عالم الذكاء الاصطناعي بسلاسة. ابحث في الأسئلة الشائعة أو تحدث فوراً مع مساعدي الافتراضي المدعوم بـ Megsy AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* FAQ Area */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-violet-500" />
              <h2 className="text-3xl font-bold uppercase tracking-tight">الأسئلة الشائعة</h2>
            </div>
            
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-violet-500/20 transition-all">
                <h3 className="text-lg font-black mb-3 text-white italic">{faq.q}</h3>
                <p className="text-white/50 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}

            <div className="pt-12 border-t border-white/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">تواصل مباشر <div className="h-px flex-1 bg-white/5" /></h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Mail, label: "البريد", link: "mailto:hamza@megsyai.com" },
                  { icon: Twitter, label: "Twitter", link: "#" },
                  { icon: Linkedin, label: "LinkedIn", link: "#" },
                  { icon: Github, label: "GitHub", link: "#" }
                ].map((social, idx) => (
                  <a key={idx} href={social.link} className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-violet-500 hover:border-violet-500 transition-all font-bold">
                    <social.icon className="w-5 h-5" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* AI Helper Teaser */}
          <div className="relative">
            <div className="absolute inset-0 bg-violet-600/10 blur-[100px] rounded-full" />
            <div className={`${ui.card} relative z-10 glass border-white/10 p-10 text-center`}>
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-violet-500/40 relative">
                <MessageSquare className="w-10 h-10 text-white" />
                <div className="absolute -top-2 -right-2 bg-emerald-500 w-6 h-6 rounded-full border-4 border-black" />
              </div>
              
              <h3 className="text-3xl font-black mb-4 uppercase">المساعد الافتراضي</h3>
              <p className="text-white/60 mb-10 leading-relaxed">
                مساعد حمزة الذكي مبرمج للإجابة على جميع تساؤلاتك حول المنتجات، خبرات حمزة، وطريقة استخدام Megsy AI. متاح 24/7.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 text-sm font-bold text-white/50">
                  <Zap className="w-5 h-5 text-amber-500" /> ردود فورية في أقل من ثانية
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 text-sm font-bold text-white/50">
                  <Globe className="w-5 h-5 text-sky-500" /> متمكن بـ 15+ لغة منها العربية
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 text-sm font-bold text-white/50">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" /> بياناتك آمنة ومدروسة كلياً
                </div>
              </div>

              <div className="mt-12">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-white/20 mb-4 animate-pulse">Waiting for your message...</p>
                <div className="text-sm italic text-violet-400">انقر على أيقونة الدردشة في الركن السفلي الأيسر ↓</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AIChat 
        system={`أنت المساعد الذكي الرسمي لحمزة الجزايري (Hamza Hassan Elgzairy). 
حمزة هو مهندس ذكاء اصطناعي (AI Engineer) يعمل في Megsy AI.
هذا الموقع يبيع منتجات رقمية: 
1. برومبت مهندسين ($29)
2. كورس أساسيات ($49)
3. Megsy UI Kit ($79)
أنت تعرف كل شيء عن حمزة وشغفه بالـ Generative AI. 
ردودك احترافية، قصيرة، مشجعة، وبالعربية الفصحى أو العامية المصرية حسب السائل.`}
      />
    </div>
  );
}