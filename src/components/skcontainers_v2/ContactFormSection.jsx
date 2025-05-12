
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Send, Loader2 } from 'lucide-react';

const ContactFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    toast({
      title: "Mensagem Enviada!",
      description: "Agradecemos seu contato. Retornaremos em breve.",
      className: "bg-primary text-primary-foreground border-primary/50",
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-light-gray">
      <div className="container-boxed">
        <div className="text-center mb-section-sm md:mb-section-md">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green">Entre em Contato</h2>
          <p className="text-muted-foreground mt-element-sm max-w-xl mx-auto">
            Tem alguma dúvida ou precisa de uma cotação? Preencha o formulário abaixo e nossa equipe responderá o mais rápido possível.
          </p>
        </div>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-xl mx-auto bg-white p-element-md md:p-section-sm rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-element-md">
            <div>
              <label htmlFor="name" className="form-label">Nome Completo</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="Seu nome" />
            </div>
            <div>
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="seu.email@example.com" />
            </div>
            <div>
              <label htmlFor="phone" className="form-label">Telefone (Opcional)</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="(XX) XXXXX-XXXX" />
            </div>
            <div>
              <label htmlFor="message" className="form-label">Sua Mensagem</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="form-input" placeholder="Descreva sua necessidade ou dúvida..."></textarea>
            </div>
          </div>
          <Button type="submit" className="btn btn-primary w-full mt-section-sm py-3 text-base" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enviando...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Enviar Mensagem <Send className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactFormSection;
