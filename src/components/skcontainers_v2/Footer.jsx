
import React from 'react';
import { HardHat, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green text-primary-foreground section-padding pb-element-md">
      <div className="container-boxed">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-section-sm mb-section-sm">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-element-sm group">
              <HardHat className="h-9 w-9 text-secondary group-hover:text-white transition-colors" />
              <span className="text-3xl font-heading font-bold text-white group-hover:text-secondary transition-colors">
                SK Containers
              </span>
            </a>
            <p className="text-sm text-primary-foreground/80">
              Sua parceira confiável em soluções de contêineres para todos os tipos de projetos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-element-sm uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Início</a></li>
              <li><a href="#products" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Produtos</a></li>
              <li><a href="#services" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Serviços</a></li>
              <li><a href="#gallery" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Galeria</a></li>
              <li><a href="#contact" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-element-sm uppercase tracking-wider">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">Rua Exemplo, 123, Bairro Industrial, Cidade - UF, 00000-000</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-secondary flex-shrink-0" />
                <a href="tel:+5511999998888" className="text-primary-foreground/80 hover:text-secondary transition-colors">(11) 99999-8888</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-secondary flex-shrink-0" />
                <a href="mailto:contato@skcontainers.com.br" className="text-primary-foreground/80 hover:text-secondary transition-colors">contato@skcontainers.com.br</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-element-sm uppercase tracking-wider">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook SK Containers" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram SK Containers" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn SK Containers" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/30 pt-element-md text-center">
          <p className="text-xs text-primary-foreground/70">
            &copy; {currentYear} SK Containers. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
