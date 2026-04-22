import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-kazay-base/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-kazay-primary rounded-lg flex items-center justify-center transform rotate-12">
            <span className="text-kazay-base font-outfit font-black text-2xl -rotate-12">K</span>
          </div>
          <span className="text-2xl font-outfit font-black tracking-tighter uppercase italic">
            Kazay <span className="text-kazay-primary">Sports</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['Início', 'Clubes', 'Seleções', 'Promoções', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-bold uppercase tracking-widest hover:text-kazay-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <input 
              type="text" 
              placeholder="Buscar camisas..." 
              className="bg-white/5 border border-white/10 rounded-full py-2 px-6 pl-10 text-sm focus:outline-none focus:border-kazay-primary transition-all w-64"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          
          <button className="relative p-2 hover:bg-white/5 rounded-full transition-colors">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute top-0 right-0 bg-kazay-primary text-kazay-base text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          <button 
            className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-kazay-base border-b border-white/10 p-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4 text-center">
            {['Início', 'Clubes', 'Seleções', 'Promoções', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-bold uppercase tracking-widest hover:text-kazay-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
