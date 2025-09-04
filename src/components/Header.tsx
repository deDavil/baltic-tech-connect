import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import LogoProcessor from "./LogoProcessor";

const Header = () => {
  const location = useLocation();
  const { processedLogo } = LogoProcessor();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === '/') {
      // If already on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button 
          onClick={handleLogoClick}
          className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
        >
          <img src={processedLogo} alt="Datu Servisi logo" className="w-8 h-8" />
        </button>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleNavClick('services')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pakalpojumi
          </button>
          <button 
            onClick={() => handleNavClick('experience')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Pieredze
          </button>
          <button 
            onClick={() => handleNavClick('about')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Par mums
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;