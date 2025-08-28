import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Map, Cog, Building2 } from "lucide-react";

const services = [
  {
    icon: Map,
    title: "Sistēmu kartēšana",
    description: "Detalizēta jūsu esošās tehnoloģiju infrastruktūras un biznesa procesu analīze un vizualizācija."
  },
  {
    icon: Search,
    title: "Risinājumu izpēte",
    description: "Optimālu programmatūras un aparatūras risinājumu identificēšana, kas pielāgota jūsu specifiskajām vajadzībām."
  },
  {
    icon: Cog,
    title: "Procesu optimizācija",
    description: "Darba plūsmu optimizēšana un efektivitātes uzlabošana ar stratēģisku tehnoloģiju integrāciju."
  },
  {
    icon: Building2,
    title: "Ieviešanas atbalsts",
    description: "Pilna cikla atbalsts risinājumu izvietošanai un integrācijai organizācijas infrastruktūrā."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Mūsu pakalpojumi</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specializēti tehnoloģiju integrācijas pakalpojumi, kas paredzēti publiskajam sektoram
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-elegant transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;