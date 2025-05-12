
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, HardHat } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Produtos', href: '#products' },
    { name: 'Serviços', href: '#services' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Contato', href: '#contact' },
  ];

  const logoText = "SK Containers";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-boxed">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <HardHat className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
            <span className="text-2xl font-heading font-bold text-primary group-hover:text-secondary transition-colors">
              {logoText}
            </span>
          </a>

          <nav className="hidden lg:flex items-center space-x-element-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold text-foreground/80 hover:text-primary transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Button className="btn btn-primary text-sm" asChild>
              <a href="#contact">Cotação Rápida</a>
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary hover:text-secondary focus:outline-none p-2 rounded-md"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-primary absolute top-full left-0 right-0 pb-5 shadow-lg"
        >
          <div className="container-boxed py-element-sm">
            <nav className="flex flex-col space-y-element-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-semibold text-primary-foreground hover:text-secondary transition-colors py-2 text-center text-base uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="btn btn-primary w-full mt-element-sm text-base" asChild>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Cotação Rápida</a>
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
