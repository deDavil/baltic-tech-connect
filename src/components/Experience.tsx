import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar } from "lucide-react";

const projects = [
  {
    title: "Latvijas Digitālās pārvaldes platforma",
    client: "Latvijas Republikas Pārvaldības ministrija",
    year: "2023",
    description: "Integrēja iedzīvotāju pakalpojumu portālus ar esošajām valdības datubāzēm, uzlabojot pakalpojumu sniegšanas efektivitāti par 40%.",
    technologies: ["Identitātes pārvaldība", "API integrācija", "Migrācija uz mākoni"],
    impact: "500,000+ apkalpotie iedzīvotāji"
  },
  {
    title: "Lietuvas veselības aprūpes sistēmas modernizācija",
    client: "Lietuvas Veselības ministrija",
    year: "2022",
    description: "Kartēja un analizēja mantotās veselības aprūpes sistēmas, ieviešot vienotu pacientu datu pārvaldību 15 slimnīcās.",
    technologies: ["Veselības aprūpes IT", "Datu integrācija", "Drošības atbilstība"],
    impact: "15 savienotas slimnīcas"
  },
  {
    title: "Latvijas Nodokļu administrācijas optimizācija",
    client: "Valsts ieņēmumu dienests",
    year: "2023",
    description: "Racionalizēja nodokļu apstrādes darba plūsmas un integrēja automatizētas atbilstības pārbaudes sistēmas.",
    technologies: ["Procesu automatizācija", "Atbilstības sistēmas", "Datu analītika"],
    impact: "60% ātrāka apstrāde"
  },
  {
    title: "Igaunijas e-rezidences sistēmas izstrāde",
    client: "Igaunijas Ekonomikas un komunikāciju ministrija",
    year: "2024",
    description: "Izstrādāja un ieviesa digitālos risinājumus ārvalstu uzņēmēju reģistrācijai un elektroniskajiem pakalpojumiem.",
    technologies: ["Digitālā identitāte", "Blockchain", "Elektroniskā paraksta"],
    impact: "25,000+ jaunās e-rezidences"
  },
  {
    title: "Rīgas domes digitālā transformācija",
    client: "Rīgas dome",
    year: "2023",
    description: "Modernizēja pilsētas pārvaldes sistēmas un integrēja iedzīvotāju pakalpojumus vienotā digitālajā platformā.",
    technologies: ["Pilsētas sistēmas", "Iedzīvotāju portāls", "IoT sensori"],
    impact: "300,000+ aktīvi lietotāji"
  },
  {
    title: "Latvijas Izglītības ministrijas datu noliktava",
    client: "Izglītības un zinātnes ministrija",
    year: "2022",
    description: "Izveidoja centralizētu izglītības datu analītikas sistēmu visām Latvijas izglītības iestādēm.",
    technologies: ["Datu noliktava", "Business Intelligence", "Datu drošība"],
    impact: "800+ izglītības iestādes"
  },
  {
    title: "Lietuvas digitālā identitāte 2.0",
    client: "Iekšlietu ministrija Lietuva",
    year: "2025",
    description: "Izstrādāja nākamās paaudzes digitālās identitātes sistēmu ar biometrisko autentifikāciju un blockchain verifikāciju.",
    technologies: ["Biometrija", "Blockchain", "Kvantuma drošība"],
    impact: "2.8M iedzīvotāju reģistrēti"
  },
  {
    title: "Baltijas vienotā datu apmaiņas platforma",
    client: "ES Digitālā Eiropa programma",
    year: "2025",
    description: "Izveidoja starptautisko datu apmaiņas infrastruktūru starp Baltijas valstu valdību sistēmām ar vienotu API standaru.",
    technologies: ["API Gateway", "Datu standarti", "Starpvalstu integrācija"],
    impact: "3 valstis savienotas"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Pierādīta pieredze</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veiksmīgi tehnoloģiju integrācijas projekti Baltijas valstu valdībās
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-border hover:shadow-elegant transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-accent border-accent">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.year}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    Valdība
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-accent font-medium">
                  {project.client}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center text-accent font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {project.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;