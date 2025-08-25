import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Sazināties ar mums</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gatavi optimizēt savas valdības tehnoloģiju sistēmas? Apspriedīsim jūsu projektu.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-border text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Sūtīt e-pastu</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Sazinieties par projektu pieprasījumiem
              </p>
              <p className="text-accent font-medium">
                kontakti@datuservisi.lv
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-border text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Apmeklēt mūs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Tiksimies klātienē
              </p>
              <p className="text-accent font-medium">
                Rīga, Latvija
              </p>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;