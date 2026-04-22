import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Clubes Europeus',
    count: '150+ Itens',
    image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80&w=800',
    gridClass: 'md:col-span-2'
  },
  {
    id: 2,
    title: 'Clubes Brasileiros',
    count: '80+ Itens',
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=800',
    gridClass: 'md:col-span-1'
  },
  {
    id: 3,
    title: 'Seleções',
    count: '40+ Itens',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800',
    gridClass: 'md:col-span-1'
  },
  {
    id: 4,
    title: 'Promoções',
    count: 'Até 50% OFF',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a497c8?auto=format&fit=crop&q=80&w=800',
    gridClass: 'md:col-span-2'
  }
];

const Categories = () => {
  return (
    <section id="clubes" className="py-24 bg-kazay-base">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-kazay-primary font-bold uppercase tracking-widest text-sm">Coleções</span>
            <h2 className="section-title mb-0">Explore por Categoria</h2>
          </div>
          <p className="text-gray-400 max-w-sm">
            Encontre a armadura do seu time de coração entre as centenas de opções disponíveis em nosso catálogo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className={`group relative overflow-hidden rounded-3xl h-72 ${cat.gridClass} cursor-pointer transition-all duration-500`}
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kazay-base via-kazay-base/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="absolute bottom-8 left-8">
                <p className="text-kazay-primary font-bold text-sm mb-1">{cat.count}</p>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter group-hover:text-kazay-primary transition-colors">
                  {cat.title}
                </h3>
              </div>

              <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
