import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import resolveaiLogo from "@/assets/resolveai-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={resolveaiLogo} alt="ResolveAI" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                Product
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <div className="relative group">
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                Integrations
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Tutorials
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Blog
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Login
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start free trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Product
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Integrations
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Tutorials
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <div className="pt-4 pb-3 border-t border-border">
                <div className="flex items-center px-3 space-x-3">
                  <Button variant="ghost" className="flex-1">
                    Login
                  </Button>
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                    Start free trial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;