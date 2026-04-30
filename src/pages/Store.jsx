import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Sparkles, Zap, BookOpen, Terminal } from 'lucide-react';
import { ui } from '../lib/theme';
import { useCart } from '../lib/cart';

const products = [
  {
    id: 'p1',
    name: 'حزمة إتقان Midjourney v6',
    desc: 'أكثر من 500 برومبت احترافي لتوليد صور واقعية وفنية مذهلة مع شرح التقنيات المتقدمة.',
    price: 99,
    category: 'Prompts',
    image: 'https://images.pexels.com/photos/17483874/pexels-photo-17483874.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Sparkles
  },
  {
    id: 'p2',
    name: 'كورس هندسة الأوامر (Prompt Engineering)',
    desc: 'انتقل من مبتدئ إلى محترف في مخاطبة نماذج الذكاء الاصطناعي GPT-4 و Claude 3.',
    price: 299,
    category: 'Courses',
    image: 'https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: BookOpen
  },
  {
    id: 'p3',
    name: 'قالب Megsy AI للشركات الناشئة',
    desc: 'قالب React + Tailwind جاهز للربط مع OpenAI API لبناء SaaS ذكاء اصطناعي في دقائق.',
    price: 450,
    category: 'Templates',
    image: 'https://images.pexels.com/photos/17483912/pexels-photo-17483912.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Terminal
  },
  {
    id: 'p4',
    name: 'دليل أتمتة الأعمال بـ Make & AI',
    desc: 'تعلم كيف تربط أدواتك اليومية بالذكاء الاصطناعي لتوفر 20 ساعة عمل أسبوعياً.',
    price: 150,
    category: 'E-Books',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Zap
  },
  {
    id: 'p5',
    name: 'مجموعة برومبتات كتابة المحتوى العربي',
    desc: 'توليد مقالات، سكربتات يوتيوب، وبوستات سوشيال ميديا بلهجة طبيعية وجذابة.',
    price: 75,
    category: 'Prompts',
    image: 'https://images.pexels.com/photos/7367/design-working-work-office.jpg?auto=compress&cs=tinysrgb&w=800',
    icon: Star
  },
  {
    id: 'p6',
    name: 'استشارة تقنية خاصة (1 ساعة)',
    desc: 'جلسة فيديو مباشرة مع حمزة الجزايري لمناقشة مشروعك أو تطوير مهاراتك في الـ AI.',
    price: 600,
    category: 'Consulting',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Users
  }
];

export default function Store() {
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = React.useState('All');
  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = activeTab === 'All' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className={ui.section + " pt-32"}>
      <div className={ui.container}>
        <div className="text-center mb-16">
          <h1 className={ui.h1 + " mb-6"}>
            المتجر <span className={ui.gradientText}>الرقمي</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed px-4">
            أدوات وبرامج تدريبية تم تصميمها بعناية لتمكينك من قيادة ثورة الذكاء الاصطناعي في مجالك. محتوى رقمي جاهز للتحميل المباشر.
          </p>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 overflow-x-auto px-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all border ${
                activeTab === cat 
                ? 'bg-violet-600 border-violet-500 text-white shadow-[0_10px_30px_-5px_rgba(124,58,237,0.5)]' 
                : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'
              }`}
            >
              {cat === 'All' ? 'الكل' : cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredProducts.map((product, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={product.id}
              className={ui.card + " flex flex-col group h-full"}
            >
              <div className="relative aspect-video rounded-2xl mb-6 overflow-hidden border border-white/10">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold text-fuchsia-400">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-violet-400 transition-colors">{product.name}</h3>
                  <div className="text-2xl font-black text-white">{product.price} <span className="text-sm text-white/40">ر.س</span></div>
                </div>
                <p className="text-white/50 leading-relaxed mb-8">{product.desc}</p>
              </div>

              <button
                onClick={() => {
                  addItem(product);
                  // Notification or feedback could go here
                }}
                className={ui.btnPrimary + " w-full justify-center group/btn"}
              >
                <span>إضافة للسلة</span>
                <ShoppingCart size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Users = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
