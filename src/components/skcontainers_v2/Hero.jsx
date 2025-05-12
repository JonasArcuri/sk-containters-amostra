
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-100" style={{ height: '600px' }}>
      <div className="absolute inset-0">
        <img  class="w-full h-full object-cover" alt="Containers empilhados em um porto ensolarado" src="https://images.unsplash.com/photo-1675297327297-3a88f1e599dd" />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container-boxed relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-element-md">
            SK CONTAINERS
          </h1>
          <p className="text-xl md:text-2xl text-white mb-element-md max-w-2xl">
            Soluções Inteligentes em Contêineres para Venda, Locação e Projetos Personalizados.
          </p>
          <Button className="btn btn-primary text-lg py-3.5 px-10" asChild>
            <a href="#products">
              Nossos Produtos <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
