import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to optimize your government technology systems? Let's discuss your project.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-border text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get in touch for project inquiries
              </p>
              <p className="text-accent font-medium">
                contact@techintegra.eu
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-border text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Speak directly with our experts
              </p>
              <p className="text-accent font-medium">
                +372 5000 0000
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-border text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-lg">Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Meet us in person
              </p>
              <p className="text-accent font-medium">
                Tallinn, Estonia
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;