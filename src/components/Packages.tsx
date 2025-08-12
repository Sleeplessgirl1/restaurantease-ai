import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Starter IA",
      price: "$199",
      period: "/mes",
      description: "Perfecto para pequeños restaurantes que quieren comenzar con IA",
      features: [
        "Sistema de pedidos con IA básica",
        "Página web responsive",
        "Análisis básico de ventas",
        "Soporte por email",
        "Hasta 100 pedidos/mes",
        "Integración con POS existente"
      ],
      icon: Zap,
      badge: null,
      buttonVariant: "gradient" as const,
    },
    {
      name: "Professional IA",
      price: "$499",
      period: "/mes",
      description: "Solución completa para restaurantes en crecimiento",
      features: [
        "IA avanzada con aprendizaje automático",
        "E-commerce con Shopify integrado",
        "App móvil personalizada",
        "Dashboard de analytics avanzado",
        "Gestión de inventario inteligente",
        "Soporte prioritario 24/7",
        "Hasta 1000 pedidos/mes",
        "Sistema de recomendaciones",
        "Integración con delivery apps"
      ],
      icon: Star,
      badge: "Más Popular",
      buttonVariant: "hero" as const,
    },
    {
      name: "Enterprise IA",
      price: "$1,299",
      period: "/mes",
      description: "Solución enterprise para cadenas y franquicias",
      features: [
        "IA personalizada y entrenamiento dedicado",
        "Multi-ubicación y gestión centralizada",
        "API personalizada y webhooks",
        "Business Intelligence avanzado",
        "Automatización completa de procesos",
        "Gerente de cuenta dedicado",
        "Pedidos ilimitados",
        "Predicciones de demanda",
        "Integración ERP/CRM",
        "White-label disponible"
      ],
      icon: Crown,
      badge: "Enterprise",
      buttonVariant: "gradient" as const,
    },
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Paquetes Diseñados
            <span className="block bg-gradient-to-r from-tech-blue to-tech-teal bg-clip-text text-transparent">
              Para tu Crecimiento
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde pequeños establecimientos hasta grandes cadenas, tenemos la solución 
            perfecta para llevar tu restaurante al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              variant="feature" 
              className={`relative ${index === 1 ? 'scale-105 border-primary/50 shadow-glow' : ''}`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-restaurant-orange text-white px-4 py-1">
                    {pkg.badge}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-tech-blue">{pkg.price}</span>
                  <span className="text-muted-foreground ml-1">{pkg.period}</span>
                </div>
                <CardDescription className="text-base">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={pkg.buttonVariant} 
                  size="lg" 
                  className="w-full"
                >
                  Comenzar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Necesitas algo personalizado? Hablemos sobre tu proyecto específico.
          </p>
          <Button variant="outline" size="lg">
            Consulta Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;