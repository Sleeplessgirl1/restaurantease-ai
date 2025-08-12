import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ShoppingCart, Users, BarChart3, Smartphone, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "IA para Pedidos",
      description: "Sistema inteligente que procesa pedidos automáticamente, reduce errores y optimiza tiempos de preparación.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Integrado",
      description: "Tienda online con Shopify integrada, pagos automáticos y gestión de inventario en tiempo real.",
    },
    {
      icon: Users,
      title: "Análisis de Clientes",
      description: "Comprende los patrones de consumo y preferencias de tus clientes para personalizar la experiencia.",
    },
    {
      icon: BarChart3,
      title: "Dashboard Inteligente",
      description: "Visualiza métricas clave, predicciones de demanda y optimización de recursos en una interfaz intuitiva.",
    },
    {
      icon: Smartphone,
      title: "App Móvil",
      description: "Aplicación nativa para iOS y Android con funciones de pedido, pago y seguimiento en tiempo real.",
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Protección de datos de clientes y transacciones con encriptación de nivel bancario.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Servicios que
            <span className="block bg-gradient-to-r from-tech-blue to-tech-teal bg-clip-text text-transparent">
              Transforman tu Negocio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra suite completa de herramientas de IA está diseñada para modernizar 
            cada aspecto de tu restaurante, desde la cocina hasta la experiencia del cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} variant="feature" className="group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:animate-glow">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;