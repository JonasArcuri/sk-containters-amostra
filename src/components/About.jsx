
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '10+', label: 'Anos de experiência' },
    { value: '200+', label: 'Projetos entregues' },
    { value: '50+', label: 'Clientes satisfeitos' },
    { value: '25+', label: 'Especialistas' },
  ];

  const advantages = [
    'Equipe altamente qualificada e experiente',
    'Metodologias ágeis para entregas rápidas',
    'Foco em resultados mensuráveis',
    'Suporte técnico contínuo',
    'Soluções personalizadas para cada cliente',
    'Tecnologias de ponta e inovadoras',
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-25"></div>
              <div className="relative">
                <img  alt="iHub team working together" className="rounded-2xl shadow-lg w-full" src="https://images.unsplash.com/photo-1627599936744-51d288f89af4" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-md shadow-red-900/5 text-center">
                    <div className="text-3xl font-bold text-red-500 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a <span className="gradient-text">iHub</span>
            </h2>
            
            <p className="text-gray-400 mb-6">
              Fundada em 2013, a iHub nasceu com a missão de transformar o cenário tecnológico brasileiro, oferecendo soluções inovadoras e personalizadas para empresas de todos os portes.
            </p>
            
            <p className="text-gray-400 mb-8">
              Nossa equipe é formada por profissionais altamente qualificados e apaixonados por tecnologia, sempre em busca das melhores soluções para nossos clientes. Trabalhamos com metodologias ágeis para garantir entregas rápidas e eficientes, mantendo a qualidade e a inovação como pilares fundamentais.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Por que escolher a iHub?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-secondary rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Nossa Missão</h3>
              <p className="text-gray-300">
                Impulsionar a transformação digital das empresas através de soluções tecnológicas inovadoras, contribuindo para o crescimento sustentável dos nossos clientes e da sociedade.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
