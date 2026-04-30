import React, { useState, useEffect } from "react";
import { ui } from "../lib/theme";
import { ShoppingCart, Plus, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/data/products");
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        console.error("Failed to fetch products", e);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated"));
    
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  if (loading) return <div className="min-h-screen pt-40 text-center">جاري تحميل المنتجات...</div>;

  return (
    <div className="pt-24 min-h-screen">
      <section className={ui.section}>
        <div className={ui.container}>
          <div className="max-w-3xl mb-16">
            <h1 className={ui.h2}>متجر <span className={ui.gradientText}>الأدوات الرقمية</span></h1>
            <p className="text-xl text-gray-400">
              مجموعتي المختارة من الموارد المتقدمة لمطوري ومصممي الذكاء الاصطناعي. برومبتس جاهزة، شفرات مصدرية، ودورات مكثفة.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <motion.div 
                layout
                key={p.id} 
                className={`${ui.card} flex flex-col group`}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                   <img 
                    src={p.image_url} 
                    alt={p.name_ar} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                   <div className="absolute top-4 right-4">
                        <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/10 uppercase tracking-widest">
                            {p.category}
                        </span>
                   </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{p.name_ar}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{p.description_ar}</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <span className="text-3xl font-black text-white">${p.price}</span>
                  <button 
                    onClick={() => addToCart(p)}
                    className={`p-4 rounded-2xl transition-all ${addedId === p.id ? "bg-emerald-500 text-white" : "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/20"}`}
                  >
                    {addedId === p.id ? <Check size={24} /> : <ShoppingCart size={24} />}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
