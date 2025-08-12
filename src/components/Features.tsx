import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aiFeaturesBg from "@/assets/ai-features-bg.jpg";

const Features = () => {
  const features = [
    {
      category: "Automatización",
      title: "Procesamiento Inteligente de Pedidos",
      description: "La IA procesa pedidos por voz, texto o app, identifica preferencias y sugiere complementos automáticamente.",
      benefits: ["Reducción 90% errores", "Tiempo respuesta <30s", "Ventas +25%"],
    },
    {
      category: "Optimización",
      title: "Gestión Predictiva de Inventario",
      description: "Algoritmos predictivos analizan patrones de consumo y temporadas para optimizar compras y reducir desperdicios.",
      benefits: ["Desperdicio -40%", "Costos -30%", "Stock perfecto"],
    },
    {
      category: "Experiencia",
      title: "Personalización Avanzada",
      description: "Sistema de recomendaciones que aprende de cada cliente para ofrecer menús personalizados y promociones específicas.",
      benefits: ["Satisfacción +45%", "Fidelización +60%", "Ticket promedio +35%"],
    },
    {
      category: "Análisis",
      title: "Business Intelligence",
      description: "Dashboard con métricas en tiempo real, predicciones de demanda y análisis de rentabilidad por plato.",
      benefits: ["Decisiones data-driven", "ROI visible", "Crecimiento 40%"],
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={aiFeaturesBg} 
          alt="AI network background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
            Tecnología de Vanguardia
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Características que
            <span className="block bg-gradient-to-r from-tech-blue to-tech-teal bg-clip-text text-transparent">
              Impulsan Resultados
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada función está respaldada por machine learning avanzado y años de experiencia 
            en la industria restaurantera.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} variant="glass" className="p-8 group hover:shadow-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <Badge variant="secondary" className="w-fit mb-3">
                  {feature.category}
                </Badge>
                <CardTitle className="text-2xl mb-3 group-hover:text-tech-blue transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gradient-to-r from-success-green/10 to-tech-teal/10 rounded-lg p-3 text-center border border-success-green/20"
                    >
                      <div className="text-sm font-semibold text-success-green">
                        {benefit}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;