import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar } from "lucide-react";

const projects = [
  {
    title: "Latvijas Digitālās pārvaldes platforma",
    client: "Viedās administrācijas un reģionālās attīstības ministrija",
    year: "2023",
    description: "Veicināja iedzīvotāju pakalpojumu portālu integrāciju ar esošajām valdības datubāzēm, uzlabojot pakalpojumu pieejamību.",
    technologies: ["Identitātes pārvaldība", "API integrācija", "Migrācija uz mākoni"],
    impact: "15,000+ lietotāji mēnesī"
  },
  {
    title: "Automātiskā uzskaites sistēma mazajiem uzņēmumiem",
    client: "SIA 'Baltijas Konsultācijas'",
    year: "2024",
    description: "Izstrādāja mākoņa grāmatvedības risinājumu ar automātisku dokumentu apstrādi un VID integrāciju mazajiem uzņēmumiem.",
    technologies: ["OCR dokumentu apstrāde", "API integrācija ar VID", "Mākoņa risinājums"],
    impact: "45+ uzņēmumi, 60% laika ietaupījums"
  },
  {
    title: "Latvijas Nodokļu administrācijas optimizācija",
    client: "Valsts ieņēmumu dienests",
    year: "2023",
    description: "Nodokļu apstrādes automatizācija un pārbaudes sistēmas par uzņēmumu parādu un citām saistībām",
    technologies: ["Procesu automatizācija", "Pārbaudes sistēmas", "Datu analītika"],
    impact: "23% ātrāka apstrāde"
  },
  {
    title: "E-komercijas platforma B2B tirdzniecībai",
    client: "SIA 'Baltijas eksports'",
    year: "2023",
    description: "Izveidoja specializētu B2B e-komercijas platformu ar cenu līmeņiem, kredīta limitiem un automātisku pasūtījumu apstrādi.",
    technologies: ["E-komercija", "Inventāra pārvaldība", "CRM integrācija"],
    impact: "150+ aktīvi klienti, 35% pārdošanu pieaugums"
  },
  {
    title: "Rīgas domes pakalpojumu digitalizācija",
    client: "Rīgas dome",
    year: "2023",
    description: "Pilsētas pārvaldes sistēmu modernizācija un iedzīvotāju pakalpojumu digitalizācija.",
    technologies: ["Pilsētas sistēmas", "Iedzīvotāju portāls", "Datu integrācija"],
    impact: "25,000+ aktīvi lietotāji"
  },
  {
    title: "Loģistikas optimizācijas risinājums",
    client: "SIA 'Ātrā Piegāde'",
    year: "2024",
    description: "AI vadīta maršrutu optimizācijas sistēma ar reāllaika sūtījumu izsekošanu un klientu paziņojumiem.",
    technologies: ["Maršrutu optimizācija", "GPS izsekošana", "Automātiskā paziņošana"],
    impact: "30+ transportlīdzekļi, 20% degvielas ietaupījums"
  },
  {
    title: "Latvijas Izglītības ministrijas datu sistēma",
    client: "Izglītības un zinātnes ministrija",
    year: "2022",
    description: "Izstrādāja centralizētu izglītības datu analītikas sistēmu Latvijas izglītības iestāžu vajadzībām.",
    technologies: ["Datubāzes", "Business Intelligence", "Datu drošība"],
    impact: "85+ izglītības iestādes"
  },
  {
    title: "Restorānu ķēdes pārvaldības sistēma",
    client: "SIA 'DZĪVO GARŠĪGI'",
    year: "2023",
    description: "Centralizēta restorānu tīkla pārvaldības sistēma ar inventāra kontroli, darba grafiku plānošanu un pārdošanu analītiku.",
    technologies: ["POS sistēmas", "Inventāra pārvaldība", "Datu analītika"],
    impact: "12 restorāni, 25% izmaksu samazinājums"
  },
  {
    title: "Igaunijas e-rezidentu sistēmas atbalsts",
    client: "Igaunijas Ekonomikas un Komunikāciju ministrija",
    year: "2024",
    description: "Atbalstīja digitālo risinājumu ieviešanu ārvalstu uzņēmēju reģistrācijai un elektroniskajiem pakalpojumiem.",
    technologies: ["Digitālā identitāte", "API integrācija", "Elektroniskā paraksta"],
    impact: "5,000+ jaunās e-rezidences"
  },
  {
    title: "Klientu attiecību pārvaldības sistēma",
    client: "SIA 'A PAKALPOJUMI'",
    year: "2022",
    description: "Pielāgota CRM sistēma konsultāciju uzņēmumiem ar projektu pārvaldību, laika uzskaiti un rēķinu izrakstīšanu.",
    technologies: ["CRM", "Projektu pārvaldība", "Rēķinu automatizācija"],
    impact: "25+ konsultanti, 40% efektivitātes pieaugums"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Pierādīta pieredze</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veiksmīgi tehnoloģiju integrācijas projekti Baltijas valstīs
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