import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
          <span className="text-xl font-bold text-foreground">Datu Servisi</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Pakalpojumi
          </Link>
          <Link to="/#experience" className="text-muted-foreground hover:text-foreground transition-colors">
            Pieredze
          </Link>
          <Link to="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
            Par mums
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;