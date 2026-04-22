import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-kazay-base pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-kazay-primary rounded-lg flex items-center justify-center transform rotate-12">
                <span className="text-kazay-base font-outfit font-black text-2xl -rotate-12">K</span>
              </div>
              <span className="text-2xl font-outfit font-black tracking-tighter uppercase italic">
                Kazay <span className="text-kazay-primary">Sports</span>
              </span>
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed">
              A maior loja de camisas de futebol do Brasil. Qualidade premium, entrega rápida e o melhor preço do mercado.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-kazay-secondary flex items-center justify-center text-gray-400 hover:bg-kazay-primary hover:text-kazay-base transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-black uppercase italic tracking-widest mb-8">Loja</h4>
            <ul className="flex flex-col gap-4 text-gray-500 font-bold uppercase text-xs tracking-widest">
              <li><a href="#" className="hover:text-kazay-primary transition-colors">Clubes Europeus</a></li>
              <li><a href="#" className="hover:text-kazay-primary transition-colors">Clubes Brasileiros</a></li>
              <li><a href="#" className="hover:text-kazay-primary transition-colors">Seleções</a></li>
              <li><a href="#" className="hover:text-kazay-primary transition-colors">Lançamentos</a></li>
              <li><a href="#" className="hover:text-kazay-primary transition-colors">Promoções</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase italic tracking-widest mb-8">Ajuda</h4>
            <ul className="flex flex-col gap-4 text-gray-500 font-bold uppercase text-xs tracking-widest">
              <li><a href="#" className="hover:text-kazay-primary transition-colors">Rastrear Pedido</a></li>
              <li><a href="#" className="hover:text-kazay-primary transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-kazay-primary transition-colors">Prazos de Entrega</a></li>
              <li><a href="#" className="hover:text-kazay-primary transition-colors">Guia de Tamanhos</a></li>
              <li><a href="#" className="hover:text-kazay-primary transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-black uppercase italic tracking-widest mb-8">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6">Receba ofertas exclusivas e lançamentos direto no seu e-mail.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full bg-kazay-secondary border border-white/5 rounded-xl py-4 px-6 text-sm focus:outline-none focus:border-kazay-primary transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-kazay-primary text-kazay-base rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">
            © 2024 Kazay Sports. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://img.icons8.com/color/48/pix.png" alt="Pix" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
