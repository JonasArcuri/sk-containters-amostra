
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Box, Package, Home, Wrench } from 'lucide-react';

const ProductCard = ({ icon, title, description, imageAlt, imageQuery }) => {
  return (
    <motion.div 
      className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col"
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)"}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-[3/2] w-full">
        <img  class="w-full h-full object-cover" alt={imageAlt} src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
      </div>
      <div className="p-element-md flex flex-col flex-grow">
        <div className="flex items-center mb-element-sm">
          <div className="p-2 bg-primary/10 rounded-md mr-3">{icon}</div>
          <h3 className="text-xl font-bold text-brand-green">{title}</h3>
        </div>
        <p className="text-foreground text-sm mb-element-md flex-grow">{description}</p>
        <Button className="btn btn-primary mt-auto w-full uppercase text-sm py-2.5" asChild>
          <a href="#contact">Ver Detalhes</a>
        </Button>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  const products = [
    {
      icon: <Box className="h-6 w-6 text-primary" />,
      title: 'Contêiner Dry',
      description: 'Versátil para cargas secas, armazenamento e transporte seguro.',
      imageAlt: 'Contêiner Dry azul em um pátio',
      imageQuery: 'Blue dry shipping container',
    },
    {
      icon: <Package className="h-6 w-6 text-primary" />,
      title: 'Contêiner Reefer',
      description: 'Ideal para cargas refrigeradas, mantendo a temperatura controlada.',
      imageAlt: 'Contêiner Reefer branco com unidade de refrigeração',
      imageQuery: 'White reefer shipping container',
    },
    {
      icon: <Home className="h-6 w-6 text-primary" />,
      title: 'Módulo Habitável',
      description: 'Soluções para escritórios, almoxarifados, sanitários e mais.',
      imageAlt: 'Módulo habitável customizado como escritório',
      imageQuery: 'Customized habitable container office',
    },
     {
      icon: <Wrench className="h-6 w-6 text-primary" />,
      title: 'Projetos Especiais',
      description: 'Transformamos suas ideias em realidade com contêineres customizados.',
      imageAlt: 'Contêiner customizado para evento',
      imageQuery: 'Custom container for event booth',
    },
  ];

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-boxed">
        <div className="text-center mb-section-sm md:mb-section-md">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green">Nossos Produtos</h2>
          <p className="text-muted-foreground mt-element-sm max-w-xl mx-auto">
            Oferecemos uma ampla variedade de contêineres para atender às suas necessidades específicas, com qualidade e durabilidade garantidas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-element-md">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
