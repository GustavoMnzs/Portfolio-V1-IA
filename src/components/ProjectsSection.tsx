import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Link } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "E-commerce Moderno",
    description: "Plataforma de vendas online construída com React e Node.js, focada em escalabilidade e UX.",
    tags: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "Sistema de Gerenciamento",
    description: "Dashboard administrativo para monitoramento de dados em tempo real e gestão de usuários.",
    tags: ["Next.js", "PostgreSQL", "shadcn/ui"],
    link: "#",
    github: "#",
  },
  {
    title: "Landing Page de SaaS",
    description: "Página de alto impacto com foco em conversão, utilizando animações e design minimalista.",
    tags: ["Vite", "React", "Framer Motion"],
    link: "#",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="container py-16 md:py-24 bg-muted/30 rounded-xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meus Projetos</h2>
      <div className="grid gap-8 md:grid-cols-3">
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
              <Button variant="outline" size="icon" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Link className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;