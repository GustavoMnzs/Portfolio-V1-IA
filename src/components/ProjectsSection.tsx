import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link } from "lucide-react";
import { cn } from "@/lib/utils";
import { CustomButton } from "@/components/CustomButton";

const projects = [
  {
    title: "SeaStorm",
    description: "Website institucional moderno e responsivo para a SeaStorm, focado em design e performance.",
    tags: ["Next.js", "React", "Tailwind CSS", "Design"],
    link: "https://seastorm.com.br/",
    github: "#", // Placeholder, since GitHub link was not provided
  },
  {
    title: "Equilibrium Latam",
    description: "Plataforma corporativa com foco em experiência do usuário e conteúdo informativo para o mercado Latam.",
    tags: ["React", "TypeScript", "Performance", "UX/UI"],
    link: "https://equilibriumlatam.com/",
    github: "#",
  },
  {
    title: "Snowfox AI",
    description: "Landing page de alto impacto para um serviço de inteligência artificial, com foco em conversão.",
    tags: ["Vite", "React", "IA", "Animações"],
    link: "https://snowfox-ai.com/",
    github: "#",
  },
  {
    title: "Imagnis",
    description: "Site institucional elegante e minimalista, destacando serviços de consultoria e soluções digitais.",
    tags: ["HTML/CSS", "JavaScript", "Responsivo", "Branding"],
    link: "https://imagnis.com.br/",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="container py-16 md:py-24 bg-muted/30 rounded-xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Meus Projetos</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"> {/* Alterado para 4 colunas em telas grandes */}
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              {/* Botão Outline (GitHub) - Mantido para consistência, mas usando CustomButton para contraste */}
              <CustomButton variant="primary-outline" size="icon" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </CustomButton>
              {/* Botão Primário (Link) */}
              <CustomButton size="icon" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Link className="h-4 w-4" />
                </a>
              </CustomButton>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;