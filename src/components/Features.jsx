import React from 'react';
import { Truck, ShieldCheck, Award, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: <Truck className="w-10 h-10 text-kazay-primary" />,
    title: 'Frete Grátis',
    desc: 'Para todo o Brasil em compras acima de R$ 300'
  },
  {
    icon: <Award className="w-10 h-10 text-kazay-primary" />,
    title: 'Qualidade Premium',
    desc: 'Camisas oficiais com tecnologia de tecido avançada'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-kazay-primary" />,
    title: 'Compra Segura',
    desc: 'Seus dados protegidos com criptografia de ponta'
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-kazay-primary" />,
    title: 'Troca Fácil',
    desc: 'Até 30 dias para trocar sua camisa sem custo'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-kazay-base border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-6 bg-kazay-secondary rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-kazay-primary/10">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tighter italic">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
