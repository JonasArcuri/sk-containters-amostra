
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      position: 'CEO, TechVentures',
      image: 'female-ceo',
      content: 'A parceria com a iHub foi fundamental para a transformação digital da nossa empresa. A equipe entendeu perfeitamente nossas necessidades e entregou uma solução que superou todas as expectativas.',
      stars: 5,
    },
    {
      name: 'Carlos Mendes',
      position: 'Diretor de Tecnologia, Inova Corp',
      image: 'male-tech-director',
      content: 'Trabalhamos com a iHub em diversos projetos e sempre ficamos impressionados com a qualidade e agilidade das entregas. São profissionais extremamente competentes e comprometidos.',
      stars: 5,
    },
    {
      name: 'Mariana Costa',
      position: 'Gerente de Marketing, GrowthBiz',
      image: 'female-marketing-manager',
      content: 'A plataforma desenvolvida pela iHub revolucionou nossa estratégia de marketing digital. Conseguimos aumentar nossas conversões em mais de 200% em apenas três meses.',
      stars: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça as experiências de quem já transformou seu negócio com as soluções da iHub.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg shadow-red-900/10 relative card-hover hover:shadow-red-700/20"
              variants={itemVariants}
            >
              <div className="absolute -top-5 right-8 bg-red-600 text-white p-2 rounded-lg">
                <div className="flex">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img  alt={`${testimonial.name} portrait`} className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1627161684850-52a7d958f8d7" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg font-medium text-gray-300 mb-4">
            Junte-se a mais de 50 empresas que já transformaram seus negócios com a iHub
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 opacity-70">
            <div className="h-12">
              <img  alt="Client logo 1" className="h-full grayscale hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1609299212167-0632515a1f4c" />
            </div>
            <div className="h-12">
              <img  alt="Client logo 2" className="h-full grayscale hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1662062656486-2bffb88aafa3" />
            </div>
            <div className="h-12">
              <img  alt="Client logo 3" className="h-full grayscale hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1642452222105-b2933e287da4" />
            </div>
            <div className="h-12">
              <img  alt="Client logo 4" className="h-full grayscale hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef" />
            </div>
            <div className="h-12">
              <img  alt="Client logo 5" className="h-full grayscale hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1685722624202-c84f60443677" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
