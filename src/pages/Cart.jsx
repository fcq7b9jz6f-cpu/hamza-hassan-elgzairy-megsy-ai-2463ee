import { useCart } from "../lib/cart";
import { ui } from "../lib/theme";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, ArrowRight, Wallet, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Cart() {
  const { items, remove, update, total, clear } = useCart();
  const totalPrice = total();

  if (items.length === 0) {
    return (
      <div className="pt-40 pb-20 px-4 text-center">
        <div className="mx-auto w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">
          <ShoppingCart className="w-10 h-10 text-white/20" />
        </div>
        <h1 className="text-4xl font-black mb-4">سلتك <span className="text-fuchsia-500">فارغة</span> حالياً</h1>
        <p className="text-white/50 max-w-md mx-auto mb-10 text-lg">
          يبدو أنك لم تضف أي منتج لمستقبلك الرقمي بعد. ابدأ باستكشاف أدوات الذكاء الاصطناعي الآن!
        </p>
        <Link to="/store" className={ui.btnPrimary}>
          العودة للمتجر <ArrowLeft className="w-5 h-5 ml-2" />
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className={ui.container}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
            <ShoppingCart className="w-6 h-6" />
          </div>
          <h1 className="text-4xl font-black">سلة <span className={ui.gradientText}>المشتريات</span></h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div 
                layout 
                key={item.id} 
                className="group relative flex flex-col sm:flex-row items-center gap-6 p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                  <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                </div>
                
                <div className="flex-1 text-center sm:text-right">
                  <h3 className="text-xl font-bold mb-1 uppercase tracking-tight">{item.name}</h3>
                  <div className="text-sm text-white/40 mb-4">{item.category}</div>
                  
                  <div className="flex items-center justify-center sm:justify-start gap-4">
                    <div className="flex items-center justify-center gap-4 bg-black/40 rounded-full border border-white/10 p-1">
                      <button onClick={() => update(item.id, item.qty - 1)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition"><Minus className="w-4 h-4"/></button>
                      <span className="w-8 text-center font-bold">{item.qty}</span>
                      <button onClick={() => update(item.id, item.qty + 1)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition"><Plus className="w-4 h-4"/></button>
                    </div>
                    <button onClick={() => remove(item.id)} className="p-2 text-white/30 hover:text-red-500 transition">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="sm:text-left">
                  <div className="text-xs text-white/30 font-black uppercase tracking-widest mb-1">المجموع</div>
                  <div className="text-2xl font-black text-white">${(item.price * item.qty).toFixed(2)}</div>
                </div>
              </motion.div>
            ))}
            
            <button onClick={clear} className="text-sm font-bold text-white/30 hover:text-white transition flex items-center gap-2 mx-auto sm:mx-0">
              <Trash2 className="w-4 h-4" /> مسح السلة بالكامل
            </button>
          </div>

          <div className="space-y-6">
            <div className={`${ui.card} glass border-white/10 sticky top-32`}>
              <h3 className="text-2xl font-black mb-6 uppercase border-b border-white/5 pb-4">ملخص الطلب</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-white/60">
                  <span>المجموع الفرعي</span>
                  <span className="font-bold text-white">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>رسوم المعالجة</span>
                  <span className="font-bold text-white">$0.00</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between items-end">
                  <span className="text-lg font-bold">الإجمالي النهائي</span>
                  <span className="text-4xl font-black text-fuchsia-500 drop-shadow-[0_0_15px_rgba(217,70,239,0.3)]">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full py-5 rounded-2xl bg-white text-black font-black text-xl flex items-center justify-center gap-3 hover:bg-zinc-100 transition shadow-xl shadow-white/5 active:scale-95">
                  إتمام الدفع <ArrowLeft className="w-6 h-6" />
                </button>
                <div className="flex items-center justify-center gap-2 text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">
                  <ShieldCheck className="w-3 h-3" /> مشفر وآمن 100%
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-violet-500/5 border border-violet-500/10">
                  <Wallet className="w-5 h-5 text-violet-400" />
                  <div>
                    <div className="text-xs font-bold text-white">طريقة دفع ذكية</div>
                    <div className="text-[10px] text-white/50">تشفير Megsy للحماية</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}