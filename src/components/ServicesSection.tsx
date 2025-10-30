import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, LayoutGrid, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Code,
    title: "Desenvolvimento Full-Stack",
    description: "Construção de aplicações robustas do frontend ao backend, utilizando as melhores tecnologias do mercado.",
  },
  {
    icon: LayoutGrid,
    title: "Design Responsivo",
    description: "Garantia de que sua aplicação funcione perfeitamente em qualquer dispositivo, de desktops a smartphones.",
  },
  {
    icon: Zap,
    title: "Otimização de Performance",
    description: "Foco em velocidade e eficiência para proporcionar uma experiência de usuário superior e tempos de carregamento rápidos.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="container py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meus Serviços</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className={cn(
              "transition-all duration-300 hover:shadow-xl hover:border-primary/50",
              "bg-card/80 backdrop-blur-sm"
            )}
          >
            <CardHeader>
              <service.icon className="h-8 w-8 text-primary mb-4" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;