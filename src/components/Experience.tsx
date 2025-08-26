import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar } from "lucide-react";

const projects = [
  {
    title: "Latvijas Digitālās pārvaldes platforma",
    client: "Latvijas Republikas Pārvaldības ministrija",
    year: "2023",
    description: "Veicināja iedzīvotāju pakalpojumu portālu integrāciju ar esošajām valdības datubāzēm, uzlabojot pakalpojumu pieejamību.",
    technologies: ["Identitātes pārvaldība", "API integrācija", "Migrācija uz mākoni"],
    impact: "15,000+ lietotāji mēnesī"
  },
  {
    title: "Lietuvas veselības aprūpes sistēmas modernizācija",
    client: "Lietuvas Veselības ministrija",
    year: "2022",
    description: "Kartēja un analizēja mantotās veselības aprūpes sistēmas, ieviešot vienotu pacientu datu pārvaldību 3 slimnīcās.",
    technologies: ["Veselības aprūpes IT", "Datu integrācija", "Drošības atbilstība"],
    impact: "3 savienotas slimnīcas"
  },
  {
    title: "Latvijas Nodokļu administrācijas optimizācija",
    client: "Valsts ieņēmumu dienests",
    year: "2023",
    description: "Uzlaboja nodokļu apstrādes darba plūsmas un ieviesa automatizētas atbilstības pārbaudes sistēmas konkrētās jomās.",
    technologies: ["Procesu automatizācija", "Atbilstības sistēmas", "Datu analītika"],
    impact: "25% ātrāka apstrāde"
  },
  {
    title: "Igaunijas e-rezidences sistēmas atbalsts",
    client: "Igaunijas Ekonomikas un komunikāciju ministrija",
    year: "2024",
    description: "Atbalstīja digitālo risinājumu ieviešanu ārvalstu uzņēmēju reģistrācijai un elektroniskajiem pakalpojumiem.",
    technologies: ["Digitālā identitāte", "API integrācija", "Elektroniskā paraksta"],
    impact: "5,000+ jaunās e-rezidences"
  },
  {
    title: "Rīgas domes pakalpojumu digitalizācija",
    client: "Rīgas dome",
    year: "2023",
    description: "Atbalstīja pilsētas pārvaldes sistēmu modernizāciju un iedzīvotāju pakalpojumu digitalizāciju.",
    technologies: ["Pilsētas sistēmas", "Iedzīvotāju portāls", "Datu integrācija"],
    impact: "25,000+ aktīvi lietotāji"
  },
  {
    title: "Latvijas Izglītības ministrijas datu sistēma",
    client: "Izglītības un zinātnes ministrija",
    year: "2022",
    description: "Izstrādāja centralizētu izglītības datu analītikas sistēmu Latvijas izglītības iestāžu vajadzībām.",
    technologies: ["Datu noliktava", "Business Intelligence", "Datu drošība"],
    impact: "150+ izglītības iestādes"
  },
  {
    title: "Lietuvas digitālā identitāte 2.0",
    client: "Iekšlietu ministrija Lietuva",
    year: "2024",
    description: "Atbalstīja nākamās paaudzes digitālās identitātes sistēmas ieviešanu ar uzlabotu autentifikāciju.",
    technologies: ["Biometrija", "Drošības sistēmas", "API integrācija"],
    impact: "50,000 iedzīvotāju testēja"
  },
  {
    title: "Baltijas datu apmaiņas risinājums",
    client: "ES Digitālā Eiropa programma",
    year: "2024",
    description: "Veicināja datu apmaiņas infrastruktūras izstrādi starp Baltijas valstu valdību sistēmām ar standartizētiem risinājumiem.",
    technologies: ["API Gateway", "Datu standarti", "Integrācijas"],
    impact: "Pilotprojekts 3 valstīs"
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