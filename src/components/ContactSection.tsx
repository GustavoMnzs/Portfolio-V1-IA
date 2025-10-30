import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="container py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Entre em Contato</CardTitle>
            <CardDescription>
              Tem um projeto em mente? Me envie uma mensagem e vamos conversar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Seu Nome" type="text" required />
              <Input placeholder="Seu Email" type="email" required />
              <Textarea placeholder="Sua Mensagem" rows={5} required />
              <Button type="submit" className="w-full">
                Enviar Mensagem <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;