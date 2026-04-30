import React from 'react';
import { ui } from '../lib/theme';
import { ShoppingBasket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className={`${ui.section} ${ui.container}`}>
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex p-6 bg-white/5 rounded-full mb-6">
          <ShoppingBasket size={48} className="text-violet-400" />
        </div>
        <h1 className={ui.h2}>Your Cart is Empty</h1>
        <p className="text-text-muted mt-4 mb-8">Explore our store to find high-quality AI assets and courses.</p>
        <Link to="/store" className={ui.btnPrimary}>
          Browse Store <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Cart;
