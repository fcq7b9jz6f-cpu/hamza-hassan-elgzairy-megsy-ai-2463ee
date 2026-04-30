import React from 'react';
import { ShoppingBag, ArrowLeft, Trash2, Plus, Minus, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../lib/cart';
import { ui } from '../lib/theme';

export default function Cart() {
  const { items, removeItem, updateQuantity, total } = useCart();
  const cartTotal = total();

  if (items.length === 0) {
    return (
      <div className={ui.section + " min-h-[70vh] flex flex-center flex-col items-center justify-center text-center pt-40"}>
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8">
          <ShoppingBag size={48} className="text-white/20" />
        </div>
        <h1 className="text-3xl font-bold mb-4">سلة المشتريات فارغة</h1>
        <p className="text-white/50 mb-10 max-w-sm">يبدو أنك لم تضف أي منتج رقمي إلى سلتك بعد. استكشف متجرنا الآن!</p>
        <Link to="/store" className={ui.btnPrimary}>
          الذهاب للمتجر
          <ArrowLeft size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className={ui.section + " pt-32"}>
      <div className={ui.container}>
        <h1 className={ui.h2 + " mb-12 text-center"}>
          سلة <span className={ui.gradientText}>المشتريات</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Items List */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {items.map((item) => (
              <div key={item.id} className={ui.card + " flex items-center gap-6 group"}>
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                  <div className="text-violet-400 font-bold mb-4">{item.price} ر.س</div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 border border-white/10">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 px-3 hover:bg-white/10 rounded-full transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 px-3 hover:bg-white/10 rounded-full transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => removeItem(item.id)}
                  className="p-3 text-white/30 hover:text-red-400 hover:bg-red-400/10 rounded-2xl transition-all"
                >
                  <Trash2 size={24} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary Card */}
          <div className="lg:col-span-1">
            <div className={ui.card + " sticky top-32"}>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <CreditCard className="text-violet-400" />
                ملخص الطلب
              </h3>
              
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between text-white/60">
                  <span>المجموع الفرعي</span>
                  <span>{cartTotal} ر.س</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>ضريبة القيمة المضافة</span>
                  <span>0 ر.س</span>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between text-2xl font-black">
                  <span>الإجمالي العام</span>
                  <span className={ui.gradientText}>{cartTotal} ر.س</span>
                </div>
              </div>

              <button className={ui.btnPrimary + " w-full py-4 text-xl justify-center"}>
                إتمام الدفع الآمن
              </button>
              
              <p className="text-center text-white/40 text-sm mt-6">
                بمجرد الدفع، ستصلك روابط تحميل المحتوى الرقمي فوراً على إيميلك المسجل.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
