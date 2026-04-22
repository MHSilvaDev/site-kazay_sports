import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Camisa Real Madrid Home 24/25',
    category: 'Clubes Europeus',
    price: 349.90,
    rating: 5,
    reviews: 128,
    new: true,
    image: 'https://images.unsplash.com/photo-1644342566144-a90196230f29?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: 'Camisa Brasil Home Copa 2022',
    category: 'Seleções',
    price: 199.90,
    oldPrice: 299.90,
    discount: 33,
    rating: 4,
    reviews: 85,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    name: 'Camisa Manchester City Away 24/25',
    category: 'Clubes Europeus',
    price: 329.90,
    rating: 5,
    reviews: 42,
    new: true,
    image: 'https://images.unsplash.com/photo-1628155239482-71046422204c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    name: 'Camisa Flamengo Home 2024',
    category: 'Clubes Brasileiros',
    price: 349.90,
    rating: 5,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1628155239482-71046422204c?auto=format&fit=crop&q=80&w=600'
  }
];

const ProductsGrid = ({ title, subtitle }) => {
  return (
    <section id="promoções" className="py-24 bg-kazay-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-kazay-primary font-bold uppercase tracking-widest text-sm">{subtitle}</span>
          <h2 className="section-title mt-2">{title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-secondary">
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
