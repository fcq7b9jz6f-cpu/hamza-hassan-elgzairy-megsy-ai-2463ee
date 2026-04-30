import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { ui } from '../lib/theme';

const DigitalProductCard = ({ product }) => {
  // In a real app, you would use a global state (like Zustand/Redux) to handle adding to cart.
  const handleAddToCart = () => {
    console.log(`Added ${product.name_en} to cart.`);
    // useCartStore.getState().addItem(product);
  };

  return (
    <div className={`${ui.card} ${ui.cardHover} flex flex-col h-full`}>
      <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
        <img src={product.image_url} alt={product.name_en} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
          <p className="text-sm text-violet-400 font-medium mb-1">{product.category}</p>
          <h3 className="text-lg font-bold mb-2">{product.name_en}</h3>
          <p className="text-text-muted text-sm flex-grow mb-4">{product.description_en}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-2xl font-bold text-white">${product.price.toFixed(2)}</span>
        <button onClick={handleAddToCart} className={`${ui.btnGhost} !px-4 !py-2`}>
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default DigitalProductCard;