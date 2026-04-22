import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Oliveira',
    role: 'Colecionador de Camisas',
    text: 'A qualidade das camisas é impressionante. Já comprei em vários sites, mas a Kazay Sports superou todas as expectativas em termos de tecido e acabamento.',
    avatar: 'https://i.pravatar.cc/150?u=carlos'
  },
  {
    name: 'Mariana Souza',
    role: 'Torcedora Fanática',
    text: 'O atendimento foi excelente e a entrega foi super rápida. A camisa do meu time chegou impecável. Com certeza comprarei mais vezes!',
    avatar: 'https://i.pravatar.cc/150?u=mariana'
  },
  {
    name: 'Ricardo Santos',
    role: 'Amante de Futebol',
    text: 'Site muito fácil de navegar e o processo de compra é muito seguro. As promoções são reais e valem muito a pena. Recomendo a todos!',
    avatar: 'https://i.pravatar.cc/150?u=ricardo'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-kazay-base relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-kazay-primary rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-kazay-primary font-bold uppercase tracking-widest text-sm">Depoimentos</span>
          <h2 className="section-title mt-2">O que nossos clientes dizem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass p-10 rounded-[40px] relative transition-transform duration-300 hover:scale-[1.02]">
              <Quote className="absolute top-8 right-10 w-12 h-12 text-kazay-primary/20" />
              
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full border-2 border-kazay-primary p-1"
                />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-tighter">{t.name}</h4>
                  <p className="text-kazay-primary text-xs font-bold uppercase">{t.role}</p>
                </div>
              </div>
              
              <p className="text-gray-400 italic leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
