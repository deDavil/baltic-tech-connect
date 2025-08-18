import { Card, CardContent } from "@/components/ui/card";
import { Users2, Award, Globe, Shield } from "lucide-react";

const stats = [
  {
    icon: Users2,
    value: "<10",
    label: "Expert Team Members",
    description: "Focused, specialized professionals"
  },
  {
    icon: Globe,
    value: "3",
    label: "Baltic Countries",
    description: "Estonia, Latvia, Lithuania"
  },
  {
    icon: Award,
    value: "50+",
    label: "Projects Completed",
    description: "Government sector expertise"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Security Compliance",
    description: "Government-grade standards"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">About TechIntegra</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a specialized technology integration company focused on the government sector across the Baltic region. Our small, expert team understands the unique challenges of public sector technology transformation.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With deep expertise in system analysis, process mapping, and solution implementation, we help government organizations modernize their technology infrastructure efficiently and securely.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                B2G sector specialization
              </div>
              <div className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Regional Baltic expertise
              </div>
              <div className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                Agile, focused team approach
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