import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactInfoSection from "@/components/ContactInfoSection";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen antialiased">
      {/* Navigation fixed with backdrop blur */}
      <Navigation />
      
      <main>
        {/* Hero Section with animations */}
        <HeroSection />
        
        {/* Services Grid with hover effects */}
        <ServicesSection />
        
        {/* Projects Showcase */}
        <ProjectsSection />
        
        {/* Contact Info */}
        <ContactInfoSection />
      </main>

      {/* Footer/MadeWithDyad */}
      <footer className="py-8 border-t border-border/50 mt-12">
        <div className="container text-center text-sm text-muted-foreground space-y-2">
          <p>
            &copy; {currentYear} Gustavo Menezes. Todos os direitos reservados.
          </p>
          <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
};

export default Index;