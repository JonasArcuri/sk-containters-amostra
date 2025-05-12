
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, MessageSquare, TrendingUp, Users, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="h-10 w-10 text-red-500" />,
      title: 'Consultoria Estratégica',
      description: 'Analisamos seu negócio e mercado para oferecer insights e estratégias tecnológicas que impulsionam resultados.',
    },
    {
      icon: <Code className="h-10 w-10 text-red-500" />,
      title: 'Desenvolvimento de Sites',
      description: 'Criamos sites responsivos, otimizados para SEO e focados na experiência do usuário para fortalecer sua presença online.',
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-red-500" />,
      title: 'Desenvolvimento de Chatbots',
      description: 'Implementamos chatbots inteligentes para automatizar o atendimento, melhorar o engajamento e otimizar processos.',
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-red-500" />,
      title: 'Marketing Digital',
      description: 'Estratégias de marketing digital personalizadas para aumentar sua visibilidade, atrair leads e converter clientes.',
    },
    {
      icon: <Users className="h-10 w-10 text-red-500" />,
      title: 'Equipes Dedicadas',
      description: 'Alocamos equipes de especialistas para trabalhar em seus projetos, garantindo agilidade e expertise.',
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-red-500" />,
      title: 'Soluções Inovadoras',
      description: 'Desenvolvemos soluções tecnológicas sob medida, utilizando as últimas tendências para resolver seus desafios.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para transformar suas ideias em realidade e impulsionar o crescimento do seu negócio.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg shadow-red-900/10 hover:shadow-red-700/20 card-hover"
              variants={itemVariants}
            >
              <div className="mb-5 inline-block p-3 bg-red-600/10 rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
