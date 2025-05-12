
import React from 'react';
import { motion } from 'framer-motion';
import sk1 from '../../imgs/sk1.jpg';
import sk2 from '../../imgs/sk2.jpg';
import sk3 from '../../imgs/sk3.jpg';
import sk4 from '../../imgs/sk4.jpg';
import sk5 from '../../imgs/sk5.jpg';
import sk6 from '../../imgs/sk6.jpg';

const GalleryImage = ({ imageAlt, imageQuery, delay }) => {
  return (
    <motion.div 
      className="aspect-square bg-muted rounded-lg overflow-hidden shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <img  class="w-full h-full object-cover" alt={imageAlt} src= {imageQuery} />
    </motion.div>
  );
};

const GallerySection = () => {
  const images = [
    { imageAlt: 'Contêiner transformado em cafeteria moderna', imageQuery: sk1 },
    { imageAlt: 'Escritório de obras feito com contêiner', imageQuery: sk2 },
    { imageAlt: 'Contêineres coloridos empilhados artisticamente', imageQuery: sk3 },
    { imageAlt: 'Casa moderna feita de contêineres', imageQuery: sk4 },
    { imageAlt: 'Loja pop-up em um contêiner customizado', imageQuery: sk5 },
    { imageAlt: 'Contêiner servindo como estande em feira', imageQuery: sk6 },
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-boxed">
        <div className="text-center mb-section-sm md:mb-section-md">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green">Galeria de Projetos</h2>
          <p className="text-muted-foreground mt-element-sm max-w-xl mx-auto">
            Inspire-se com alguns dos nossos projetos e veja a versatilidade dos contêineres em diversas aplicações.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-element-md">
          {images.map((image, index) => (
            <GalleryImage key={index} delay={index} {...image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
