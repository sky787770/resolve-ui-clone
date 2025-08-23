import { Button } from "@/components/ui/button";
import resolveaiLogo from "@/assets/resolveai-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src={resolveaiLogo} alt="ResolveAI" className="h-8 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Custom AI chatbots trained on your data to provide 24/7 customer support and boost your business operations.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start free trial
            </Button>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Integrations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Tutorials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Community</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm">
            © 2024 ResolveAI. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;