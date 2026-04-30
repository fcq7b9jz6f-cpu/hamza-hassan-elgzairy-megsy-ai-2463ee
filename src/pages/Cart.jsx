import React, { useState, useEffect } from "react";
import { ui } from "../lib/theme";
import { Trash2, Plus, Minus, CreditCard, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCart = () => {
      const saved = JSON.parse(localStorage.getItem("cart") || "[]");
      setItems(saved);
      setIsLoading(false);
    };
    loadCart();
  }, []);

  const saveCart = (newItems) => {
    setItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
    window.dispatchEvent(new Event("cart-updated"));
  };

  const updateQuantity = (id, delta) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    saveCart(newItems);
  };

  const removeItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    saveCart(newItems);
  };

  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  if (isLoading) return <div className="pt-40 text-center">جاري التحميل...</div>;

  return (
    <div className="pt-24 min-h-screen">
      <section className={ui.section}>
        <div className={ui.container}>
          <h1 className={ui.h2 + " mb-12 text-center"}>سلة <span className={ui.gradientText}>المشتريات</span></h1>

          {items.length === 0 ? (
            <div className="text-center py-20 bg-white/[0.02] rounded-[3rem] border border-dashed border-white/10">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag size={40} className="text-gray-500" />
              </div>
              <p className="text-2xl text-gray-400 mb-8">سلة التسوق فارغة حالياً</p>
              <Link to="/store" className={ui.btnPrimary}>ابدأ التسوق الآن</Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Items List */}
              <div className="lg:col-span-2 space-y-6">
                {items.map((item) => (
                  <div key={item.id} className={`${ui.card} flex flex-col sm:flex-row items-center gap-6 group`}>
                    <img src={item.image_url} alt={item.name_ar} className="w-32 h-32 rounded-2xl object-cover" />
                    <div className="flex-1 text-center sm:text-right">
                      <h3 className="text-xl font-bold mb-1">{item.name_ar}</h3>
                      <p className="text-gray-400 text-sm mb-4">{item.category}</p>
                      <div className="flex items-center justify-center sm:justify-start gap-4">
                         <div className="flex items-center bg-white/5 rounded-xl border border-white/10 p-1">
                            <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:text-violet-400"><Minus size={16}/></button>
                            <span className="w-10 text-center font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:text-violet-400"><Plus size={16}/></button>
                         </div>
                         <button onClick={() => removeItem(item.id)} className="text-red-500/50 hover:text-red-500 p-2 transition-colors">
                            <Trash2 size={20} />
                         </button>
                      </div>
                    </div>
                    <div className="text-2xl font-black text-white">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className={`${ui.card} sticky top-28 bg-violet-600/5 border-violet-500/20`}>
                  <h3 className="text-2xl font-bold mb-8">ملخص الطلب</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-gray-400">
                      <span>الإجمالي الفرعي</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>الضريبة (0%)</span>
                      <span>$0.00</span>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-between text-2xl font-black text-white">
                      <span>الإجمالي</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <button className={`${ui.btnPrimary} w-full`}>
                    إتمام الشراء
                    <CreditCard size={20} className="mr-2" />
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-6">
                    الدفع آمن ومحمي بأعلى معايير التشفير (SSL)
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
