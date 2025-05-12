
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/skcontainers_v2/Navbar';
import Hero from '@/components/skcontainers_v2/Hero';
import ProductsSection from '@/components/skcontainers_v2/ProductsSection';
import ServicesSection from '@/components/skcontainers_v2/ServicesSection';
import GallerySection from '@/components/skcontainers_v2/GallerySection';
import ContactFormSection from '@/components/skcontainers_v2/ContactFormSection';
import Footer from '@/components/skcontainers_v2/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <ProductsSection />
        <ServicesSection />
        <GallerySection />
        <ContactFormSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
