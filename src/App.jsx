import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductsGrid from './components/ProductsGrid';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-kazay-base selection:bg-kazay-primary selection:text-kazay-base">
      <Header />
      <main>
        <Hero />
        <Features />
        <Categories />
        <ProductsGrid title="Mais Vendidos" subtitle="Destaques da Semana" />
        <ProductsGrid title="Ofertas Especiais" subtitle="Preços Imbatíveis" />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
