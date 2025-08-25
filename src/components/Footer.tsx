import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-md">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold text-foreground">Datu Servisi</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Specializēta tehnoloģiju integrācija valsts pārvaldes organizācijām visā Baltijas reģionā.
          </p>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Datu Servisi. Visas tiesības aizsargātas.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privātuma politika</a>
            <a href="#" className="hover:text-foreground transition-colors">Pakalpojumu noteikumi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;