import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-kazay-secondary rounded-3xl overflow-hidden border border-white/5 transition-all duration-300 hover:border-kazay-primary/30 hover:translate-y-[-8px]">
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden bg-white/5">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.discount && (
            <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
              -{product.discount}% OFF
            </span>
          )}
          {product.new && (
            <span className="bg-kazay-primary text-kazay-base text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
              Novidade
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-kazay-primary hover:text-kazay-base transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute inset-x-4 bottom-4 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-full bg-kazay-primary text-kazay-base font-black py-3 rounded-xl flex items-center justify-center gap-2 shadow-xl">
            <ShoppingCart className="w-5 h-5" />
            ADICIONAR
          </button>
        </div>
      </div>

      {/* Info Container */}
      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < product.rating ? 'fill-kazay-primary text-kazay-primary' : 'text-gray-600'}`} />
          ))}
          <span className="text-[10px] text-gray-500 ml-1">({product.reviews})</span>
        </div>
        
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="text-lg font-outfit font-bold text-white mb-3 group-hover:text-kazay-primary transition-colors leading-tight">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black text-white">
            R$ {product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-gray-500 line-through text-sm">
              R$ {product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
