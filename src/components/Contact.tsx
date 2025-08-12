import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para
            <span className="block bg-gradient-to-r from-tech-blue to-tech-teal bg-clip-text text-transparent">
              Transformar tu Restaurante?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contáctanos hoy para una consulta gratuita y descubre cómo la IA 
            puede revolucionar tu negocio gastronómico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card variant="glass" className="p-8">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
              <CardDescription>
                Cuéntanos sobre tu restaurante y cómo podemos ayudarte
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nombre</label>
                  <Input placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Teléfono</label>
                  <Input placeholder="Tu teléfono" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="tu@email.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Nombre del Restaurante</label>
                <Input placeholder="Nombre de tu restaurante" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Mensaje</label>
                <Textarea 
                  placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                  rows={4}
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Enviar Mensaje
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card variant="feature" className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">info@restaurantia.com</p>
                </div>
              </div>
            </Card>

            <Card variant="feature" className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Teléfono</h3>
                  <p className="text-muted-foreground">+52 55 1234 5678</p>
                </div>
              </div>
            </Card>

            <Card variant="feature" className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Oficina</h3>
                  <p className="text-muted-foreground">Ciudad de México, CDMX</p>
                </div>
              </div>
            </Card>

            <Card variant="feature" className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Horario</h3>
                  <p className="text-muted-foreground">Lun - Vie: 9:00 - 18:00</p>
                </div>
              </div>
            </Card>

            <div className="bg-gradient-primary rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">Consulta Gratuita</h3>
              <p className="mb-4 text-white/90">
                Agenda una llamada de 30 minutos para evaluar tu restaurante 
                y recibir recomendaciones personalizadas.
              </p>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Agendar Llamada
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;