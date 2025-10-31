import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { CustomButton } from "@/components/CustomButton"; // Importando CustomButton

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "seu.email@exemplo.com",
    href: "mailto:seu.email@exemplo.com",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "+55 (XX) XXXX-XXXX",
    href: "tel:+55xxxxxxxxxxx",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "Sua Cidade, Seu Estado",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/seuusuario",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/seuusuario",
    label: "LinkedIn",
  },
];

const ContactInfoSection = () => {
  return (
    <section id="contact" className="container py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Informações de Contato</h2>
      
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
        {contactItems.map((item, index) => (
          <Card key={index} className="text-center p-6 transition-all hover:shadow-primary/50 hover:shadow-lg">
            <CardHeader className="p-0 mb-4">
              <item.icon className="h-10 w-10 text-primary mx-auto" />
            </CardHeader>
            <CardContent className="p-0">
              <CardTitle className="text-xl mb-1">{item.title}</CardTitle>
              <a 
                href={item.href} 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
                target={item.href.startsWith('http') || item.href.startsWith('mailto') || item.href.startsWith('tel') ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                {item.value}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center space-x-4 mt-12">
        {socialLinks.map((social) => (
          <CustomButton key={social.label} variant="primary-outline" size="icon" asChild>
            <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
              <social.icon className="h-5 w-5" />
            </a>
          </CustomButton>
        ))}
      </div>
    </section>
  );
};

export default ContactInfoSection;