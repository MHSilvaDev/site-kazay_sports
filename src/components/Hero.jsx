import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000" 
          alt="Football Field" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-kazay-base via-kazay-base/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-kazay-base via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-kazay-primary/10 border border-kazay-primary/20 rounded-full px-4 py-1 mb-6 animate-bounce">
            <span className="w-2 h-2 bg-kazay-primary rounded-full animate-pulse"></span>
            <span className="text-kazay-primary text-xs font-bold uppercase tracking-wider">Nova Coleção 2024/25 disponível</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.9] tracking-tighter mb-6">
            As melhores <br /> 
            <span className="text-kazay-primary">camisas</span> <br /> 
            do futebol
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl">
            Sinta a emoção do manto sagrado. Qualidade premium, tecidos tecnológicos e o design oficial dos maiores clubes e seleções do mundo.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary flex items-center gap-2">
              Comprar Agora
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary">
              Ver Coleções
            </button>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-kazay-base"
                />
              ))}
            </div>
            <div>
              <p className="text-white font-bold">+10k Clientes Satisfeitos</p>
              <p className="text-gray-400 text-sm">Junte-se à elite do futebol</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 right-10 hidden xl:block animate-pulse">
        <div className="w-64 h-64 border-[40px] border-kazay-primary/5 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
