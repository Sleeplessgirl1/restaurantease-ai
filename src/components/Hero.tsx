import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant-ai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Restaurant with AI technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/90 via-tech-teal/80 to-primary/85"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-restaurant-orange/30 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-tech-teal/40 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Revoluciona tu
            <span className="block bg-gradient-to-r from-restaurant-orange to-yellow-400 bg-clip-text text-transparent">
              Restaurante con IA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Automatiza pedidos, optimiza inventarios y mejora la experiencia de tus clientes 
            con nuestra plataforma de inteligencia artificial diseñada específicamente para restaurantes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="hero" className="min-w-[200px]">
              Ver Paquetes
            </Button>
            <Button variant="outline" size="hero" className="min-w-[200px] bg-white/10 border-white/30 text-white hover:bg-white/20">
              Demo Gratuita
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-restaurant-orange mb-2">+500</div>
              <div className="text-white/80">Restaurantes Conectados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-restaurant-orange mb-2">85%</div>
              <div className="text-white/80">Reducción en Errores</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-restaurant-orange mb-2">24/7</div>
              <div className="text-white/80">Soporte Inteligente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;