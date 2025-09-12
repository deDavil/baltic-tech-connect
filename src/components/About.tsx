import { Card, CardContent } from "@/components/ui/card";
import { Users2, Award, Globe, Shield } from "lucide-react";

const stats = [
  {
    icon: Users2,
    value: "80+",
    label: "Gadi pieredzes kopā",
    description: "IT sistēmu arhitektūrā un integrācijā"
  },
  {
    icon: Globe,
    value: "3",
    label: "Baltijas valstis",
    description: "Igaunija, Latvija, Lietuva"
  },
  {
    icon: Award,
    value: "50+",
    label: "Pabeigti projekti",
    description: "Valdības sektora ekspertīze"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Drošības atbilstība",
    description: "Valdības līmeņa standarti"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Par Datu Servisi</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Mēs esam specializēts tehnoloģiju integrācijas uzņēmums, kas fokusējas uz B2G un B2B sektoriem visā Baltijas reģionā. Mūsu mazā ekspertu komanda saprot publiskā sektora tehnoloģiju transformācijas unikālos izaicinājumus.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Ar dziļu ekspertīzi sistēmu analīzē, procesu kartēšanā un risinājumu ieviešanā, mēs palīdzam organizācijām modernizēt savu tehnoloģiju infrastruktūru efektīvi un droši.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                B2G un B2B sektora specializācija
              </div>
              <div className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Baltijas tirgus ekspertīze
              </div>
              <div className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Ātra un fokusēta komandas pieeja
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-border text-center p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-2">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;