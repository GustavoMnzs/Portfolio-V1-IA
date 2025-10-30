import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Serviços", href: "#services" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center space-x-4", className)}>
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-medium transition-colors hover:text-primary"
          onClick={() => isMobile && setIsOpen(false)}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-lg font-bold text-primary">
            Portfólio
          </a>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && <NavLinks />}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        )}
      </div>

      {/* Mobile Menu Drawer */}
      {isMobile && isOpen && (
        <div className="absolute top-14 left-0 w-full border-b border-border/40 bg-background/95 backdrop-blur p-4 shadow-lg">
          <NavLinks className="flex-col space-x-0 space-y-4 items-start" />
        </div>
      )}
    </header>
  );
};

export default Navigation;