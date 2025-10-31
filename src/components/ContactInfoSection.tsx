import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { CustomButton } from "@/components/CustomButton";

const contactItems = [
  {
    title: "Email",
    value: "gustavomnzs1@gmail.com",
    href: "mailto:gustavomnzs1@gmail.com",
  },
  {
    title: "Phone",
    value: "(61) 99266-2886",
    href: "tel:+5561992662886",
  },
  {
    title: "Location",
    value: "Brasília - Brasil",
    href: "#",
  },
];

// Links sociais removidos para corresponder ao print

const ContactInfoSection = () => {
  return (
    <section id="contact" className="container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Coluna de Informações de Contato */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-primary">Entre em Contato</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">
            Vamos criar algo extraordinário juntos.
          </h3>

          <div className="space-y-6 pt-4">
            {contactItems.map((item, index) => (
              <div key={index}>
                <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                <a 
                  href={item.href} 
                  className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                  target={item.href.startsWith('http') || item.href.startsWith('mailto') || item.href.startsWith('tel') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>

          {/* Botão de Ação - Usando light-outline para branco com hover ciano */}
          <CustomButton variant="light-outline" size="lg" asChild className="mt-8">
            <a href={`mailto:${contactItems[0].value}`}>
              Falar com Gustavo
            </a>
          </CustomButton>
        </div>

        {/* Coluna de Ilustração (Placeholder) */}
        <div className="hidden md:flex justify-center items-center h-full min-h-[400px] bg-muted/50 rounded-xl p-8">
          <Mail className="h-24 w-24 text-primary/50" />
          <p className="absolute text-muted-foreground/50 mt-40">Ilustração de Contato</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;