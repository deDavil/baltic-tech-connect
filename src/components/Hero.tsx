import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-6 bg-gradient-subtle">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm mb-6">
            <MapPin className="w-4 h-4" />
            Kalpojam Baltijas valstīs
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Tehnoloģiju integrācija
            <span className="bg-gradient-primary bg-clip-text text-transparent"> vienkāršota</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Mēs kartējam, analizējam un optimizējam jūsu sistēmas un procesus. Atrodam piemērotas programmatūras un aparatūras risinājumus valsts pārvaldes organizācijām visā Baltijas reģionā.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;