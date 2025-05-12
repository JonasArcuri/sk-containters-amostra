
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Edit3, DollarSign, ShieldCheck } from 'lucide-react';

const ServiceItem = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="text-center p-element-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: delay * 0.15 }}
    >
      <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-element-sm">
        {React.cloneElement(icon, { className: "h-8 w-8 text-primary" })}
      </div>
      <h3 className="text-xl font-bold text-brand-green mb-2">{title}</h3>
      <p className="text-foreground text-sm">{description}</p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <DollarSign />,
      title: 'Venda de Contêineres',
      description: 'Novos e usados, com a melhor qualidade e preço do mercado.',
    },
    {
      icon: <Truck />,
      title: 'Locação Flexível',
      description: 'Planos de aluguel adaptáveis para suas necessidades temporárias.',
    },
    {
      icon: <Edit3 />,
      title: 'Projetos Customizados',
      description: 'Modificamos contêineres para escritórios, lojas, casas e mais.',
    },
    {
      icon: <ShieldCheck />,
      title: 'Transporte e Logística',
      description: 'Entrega segura e eficiente em todo o território nacional.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-light-gray">
      <div className="container-boxed">
        <div className="text-center mb-section-sm md:mb-section-md">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green">Nossos Serviços</h2>
          <p className="text-muted-foreground mt-element-sm max-w-xl mx-auto">
            Soluções completas que vão além da simples venda ou locação de contêineres, garantindo sua satisfação total.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-element-sm md:gap-element-md">
          {services.map((service, index) => (
            <ServiceItem key={index} delay={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
