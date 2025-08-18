import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar } from "lucide-react";

const projects = [
  {
    title: "Estonian Digital Government Platform",
    client: "Government of Estonia",
    year: "2023",
    description: "Integrated citizen service portals with existing government databases, improving service delivery efficiency by 40%.",
    technologies: ["Identity Management", "API Integration", "Cloud Migration"],
    impact: "500,000+ citizens served"
  },
  {
    title: "Lithuanian Healthcare System Modernization",
    client: "Ministry of Health Lithuania",
    year: "2022",
    description: "Mapped and analyzed legacy healthcare systems, implementing unified patient data management across 15 hospitals.",
    technologies: ["Healthcare IT", "Data Integration", "Security Compliance"],
    impact: "15 hospitals connected"
  },
  {
    title: "Latvian Tax Administration Optimization",
    client: "State Revenue Service Latvia",
    year: "2023",
    description: "Streamlined tax processing workflows and integrated automated compliance checking systems.",
    technologies: ["Process Automation", "Compliance Systems", "Data Analytics"],
    impact: "60% faster processing"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Proven Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Successful technology integration projects across the Baltic governments
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
                    Government
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