import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/CustomButton";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="container py-20 md:py-32 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-primary">
          Desenvolvimento Web Moderno e Eficaz
        </h1>
        <p className="text-xl text-foreground mb-10 max-w-2xl mx-auto">
          Transformo ideias complexas em soluções digitais elegantes e de alto desempenho, focadas na experiência do usuário.
        </p>
        <div className="flex justify-center space-x-4">
          <CustomButton size="lg" className="shadow-lg">
            Ver Projetos
          </CustomButton>
          <CustomButton variant="primary-outline" size="lg">
            Entrar em Contato <ArrowRight className="ml-2 h-4 w-4" />
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;