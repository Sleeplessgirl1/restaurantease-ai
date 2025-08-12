import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">U</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-tech-blue to-tech-teal bg-clip-text text-transparent">
            Restaurant IA
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Servicios
          </a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Características
          </a>
          <a href="#packages" className="text-muted-foreground hover:text-foreground transition-colors">
            Paquetes
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </a>
        </div>
        
        <Button variant="gradient" size="default">
          Consulta Gratis
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;