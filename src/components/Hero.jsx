
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
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
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="hero-gradient absolute inset-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 lg:pr-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              variants={itemVariants}
            >
              Transformando ideias em <span className="gradient-text">soluções digitais</span> inovadoras
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-400 mb-8 max-w-xl"
              variants={itemVariants}
            >
              A iHub é uma empresa de tecnologia focada em desenvolver soluções personalizadas que impulsionam o crescimento do seu negócio.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-10"
              variants={itemVariants}
            >
              <Button className="bg-red-600 hover:bg-red-700 text-primary-foreground px-8 py-6 h-auto text-base">
                Conheça nossos serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-red-600 text-red-500 hover:bg-red-600/10 hover:text-red-400 px-8 py-6 h-auto text-base">
                Fale com um especialista
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-sm font-medium text-gray-300">Soluções personalizadas</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-sm font-medium text-gray-300">Suporte 24/7</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-sm font-medium text-gray-300">Tecnologia de ponta</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur opacity-40"></div>
              <div className="relative bg-card rounded-2xl shadow-xl overflow-hidden">
                <img  alt="iHub workspace with modern technology" className="w-full h-auto rounded-t-2xl" src="https://images.unsplash.com/photo-1544006658-5ed4d689eb5e" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-6">
                  <p className="text-white font-medium">Impulsionando a transformação digital</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
