
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Users, TrendingUp, Shield, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-red-500" />,
      title: 'Alta Performance',
      description: 'Soluções otimizadas para máxima velocidade e eficiência, garantindo a melhor experiência para seus usuários.',
    },
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      title: 'Entregas Rápidas',
      description: 'Metodologias ágeis que permitem entregas contínuas e em prazos reduzidos, sem comprometer a qualidade.',
    },
    {
      icon: <Users className="h-6 w-6 text-red-500" />,
      title: 'Equipe Especializada',
      description: 'Profissionais altamente qualificados e com vasta experiência em diversas tecnologias e setores do mercado.',
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-red-500" />,
      title: 'Escalabilidade',
      description: 'Projetos desenvolvidos pensando no crescimento do seu negócio, permitindo expansão sem complicações.',
    },
    {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: 'Segurança Avançada',
      description: 'Implementação das melhores práticas de segurança para proteger seus dados e a privacidade dos seus usuários.',
    },
    {
      icon: <Headphones className="h-6 w-6 text-red-500" />,
      title: 'Suporte Contínuo',
      description: 'Acompanhamento e suporte técnico após a entrega do projeto, garantindo o funcionamento ideal da solução.',
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
    <section id="features" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="gradient-text">Diferenciais</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça os principais diferenciais que fazem da iHub a escolha ideal para impulsionar seu negócio através da tecnologia.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md shadow-red-900/10 border border-border hover:border-red-700/50 card-hover"
              variants={itemVariants}
            >
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-red-600/10 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-red-700 rounded-2xl overflow-hidden shadow-xl shadow-red-900/30"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pronto para transformar seu negócio?
              </h3>
              <p className="text-red-100 mb-6">
                Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a alcançar novos patamares através da tecnologia.
              </p>
              <div>
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-red-700 font-medium px-6 py-3 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Fale com um especialista
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img  alt="Digital transformation concept" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1600950722026-886f06209015" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
