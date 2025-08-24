import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, MessageCircle, FileText, Globe, Zap, Settings, Code, ShoppingBag, MessageSquare, Slack, Lightbulb, BarChart3, Laptop, FileText as FileTextIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import indianFlag from "@/assets/Indian-flag.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIntegrationsDropdown, setShowIntegrationsDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);

  const navigation = [
    { 
      name: "Product", 
      href: "#",
      hasDropdown: true,
      dropdownContent: (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50">
          <div className="grid grid-cols-2 gap-8">
            {/* Overview Column */}
            <div>
              <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">
                Overview
              </h3>
              <div className="space-y-4">
                <div className="group cursor-pointer">
                  <p className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Features</p>
                  <p className="text-sm text-gray-500">All you need</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Demo</p>
                  <p className="text-sm text-gray-500">Try it live</p>
                </div>
              </div>
            </div>

            {/* Solutions Column */}
            <div>
              <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">
                Solutions
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileTextIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Chat with documents</p>
                    <p className="text-sm text-gray-500">Summarize documents</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Marketing</p>
                    <p className="text-sm text-gray-500">Get AI creative</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Support</p>
                    <p className="text-sm text-gray-500">24/7 assistance</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Sales</p>
                    <p className="text-sm text-gray-500">Boost sales</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Laptop className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Workflow</p>
                    <p className="text-sm text-gray-500">Office knowledge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { name: "Solutions", href: "#" },
    { name: "Pricing", href: "/pricing" },
    { 
      name: "Integrations", 
      href: "#",
      hasDropdown: true,
      dropdownContent: (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50">
          <div className="grid grid-cols-3 gap-8">
            {/* AI Assistant on */}
            <div>
              <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">
                AI Assistant on
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Website widget</p>
                    <p className="text-sm text-gray-500">Embed on your website</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-lg">💬</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">WhatsApp</p>
                    <p className="text-sm text-gray-500">Engage on WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-lg">📱</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Messenger</p>
                    <p className="text-sm text-gray-500">Engage on Messenger</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Slack className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Slack</p>
                    <p className="text-sm text-gray-500">Organization workflows</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Training sources & Tools */}
            <div>
              <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">
                Training sources & Tools
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Files & documents</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Website pages</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-lg">☁️</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Google Drive</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Zapier</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">M</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Make</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Platforms */}
            <div>
              <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">
                Platforms
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">W</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Wordpress</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Shopify</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">W</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">WIX Wix</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Any website</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <Button variant="link" className="text-purple-600 hover:text-purple-700 font-medium">
              Explore all integrations →
            </Button>
          </div>
        </div>
      )
    },
    { name: "Company", href: "#" }
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="text-xl font-bold text-gray-900">LaPCY AI</span>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
                Product
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Product Dropdown */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="grid grid-cols-2 gap-6 p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <MessageCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium">Overview</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <FileText className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium">Solutions</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <Globe className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium">AI Assistant</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <Zap className="w-5 h-5 text-orange-600" />
                      <span className="text-sm font-medium">Training sources & Tools</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <Settings className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium">Platforms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
                Integrations
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Integrations Dropdown */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="grid grid-cols-3 gap-6 p-6">
                  <div className="space-y-3">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">AI Assistant on</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <Globe className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Website</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <MessageSquare className="w-4 h-4 text-green-600" />
                        <span className="text-sm">WhatsApp</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <MessageSquare className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Facebook Messenger</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <MessageSquare className="w-4 h-4 text-purple-600" />
                        <span className="text-sm">Slack</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Training sources & Tools</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Google Drive</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <FileText className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Notion</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <FileText className="w-4 h-4 text-purple-600" />
                        <span className="text-sm">Zendesk</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <FileText className="w-4 h-4 text-orange-600" />
                        <span className="text-sm">Intercom</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Platforms</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <Globe className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Wordpress</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <ShoppingBag className="w-4 h-4 text-green-600" />
                        <span className="text-sm">Shopify</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <Globe className="w-4 h-4 text-purple-600" />
                        <span className="text-sm">Webflow</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <Code className="w-4 h-4 text-orange-600" />
                        <span className="text-sm">Custom API</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            
            <Link to="/profile" className="text-gray-600 hover:text-gray-900 transition-colors">
              Dashboard
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                Sign In
              </Button>
            </Link>
            
            {/* Indian Flag */}
            <div className="flex items-center justify-center">
              <img 
                src={indianFlag} 
                alt="Indian Flag" 
                className="w-8 h-6 object-cover border border-gray-300"
              />
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/signup" className="text-white hover:text-white">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Link to="/login">
                  <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-900">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;