import React, { useState, useEffect } from 'react';
import { ui } from '../lib/theme';
import DigitalProductCard from '../components/DigitalProductCard';
import {motion} from 'framer-motion';

const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you'd fetch from /api/data/products
    // For this static build, we'll fetch from the JSON file.
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`${ui.section} ${ui.container}`}>
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center max-w-3xl mx-auto">
                <h1 className={`${ui.h1} ${ui.gradientText} mb-4`}>Digital Store</h1>
                <p className="text-lg sm:text-xl text-text-muted">
                    Accelerate your AI journey with my collection of high-quality digital products. From comprehensive courses to production-ready templates, these resources are designed to save you time and provide immense value.
                </p>
            </div>
        </motion.div>

      <div className="mt-16 sm:mt-20">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`${ui.card} animate-pulse`}>
                <div className="bg-surface-2 h-48 w-full rounded-lg mb-4"></div>
                <div className="h-6 bg-surface-2 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-surface-2 rounded w-1/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
             initial="hidden"
             animate="visible"
             variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
                 <motion.div key={product.name_en} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                    <DigitalProductCard product={product} />
                 </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Store;