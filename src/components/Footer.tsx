import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold text-foreground">TechIntegra</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Specialized technology integration for government organizations across the Baltic region.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>System Mapping</li>
              <li>Solution Discovery</li>
              <li>Process Optimization</li>
              <li>Implementation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Regions</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Estonia</li>
              <li>Latvia</li>
              <li>Lithuania</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 TechIntegra. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;