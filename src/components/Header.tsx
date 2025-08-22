import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
          <span className="text-xl font-bold text-foreground">Datu Servisi</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Pakalpojumi
          </a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
            Pieredze
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            Par mums
          </a>
          <Button variant="outline" size="sm">
            Sazināties
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;