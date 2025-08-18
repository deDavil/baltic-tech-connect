import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Map, Cog, Building2 } from "lucide-react";

const services = [
  {
    icon: Map,
    title: "System Mapping",
    description: "Comprehensive analysis and visualization of your existing technology infrastructure and business processes."
  },
  {
    icon: Search,
    title: "Solution Discovery",
    description: "Identification of optimal software and hardware solutions tailored to your specific government sector needs."
  },
  {
    icon: Cog,
    title: "Process Optimization",
    description: "Streamlining workflows and enhancing efficiency through strategic technology integration."
  },
  {
    icon: Building2,
    title: "Implementation Support",
    description: "End-to-end support for deploying and integrating solutions within government organizations."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized technology integration services designed for the public sector
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