import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-6 bg-gradient-subtle">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm mb-6">
            <MapPin className="w-4 h-4" />
            Serving the Baltics
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Technology Integration
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Simplified</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We map, analyze, and optimize your systems and processes. Finding the right software and hardware solutions for government organizations across the Baltic region.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;