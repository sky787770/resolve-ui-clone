import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Top Section - CTA */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Get your own <span className="text-purple-600">AI Assistant</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Start your free trial now and witness your ideas come to life, effortlessly and creatively.
              </p>
              
              <Link to="/signup">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg font-semibold">
                  Start free trial →
                </Button>
              </Link>
            </div>

            {/* Right Column - Illustration */}
            <div className="lg:ml-auto">
              <div className="relative w-80 h-80 mx-auto">
                {/* Person */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                </div>
                
                {/* Robot */}
                <div className="absolute top-8 right-8">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center relative">
                    {/* Robot eyes */}
                    <div className="absolute top-2 left-2 w-3 h-3 bg-blue-600 rounded-full"></div>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-blue-600 rounded-full"></div>
                    {/* Robot chest plate */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full"></div>
                    {/* Robot arms */}
                    <div className="absolute top-1/2 left-0 w-2 h-8 bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-0 w-2 h-8 bg-yellow-500 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                
                {/* Speech bubbles and exclamation */}
                <div className="absolute top-4 left-16">
                  <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-sm">💬</span>
                  </div>
                </div>
                
                <div className="absolute top-12 right-4">
                  <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center">
                    <span className="text-xs">!</span>
                  </div>
                </div>
                
                {/* Plant */}
                <div className="absolute bottom-4 left-8">
                  <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-xs">🌱</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Main Footer */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  <div className="absolute -top-1 -right-1 flex">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4 max-w-md">
                Supercharge your business with a custom tailored AI ChatGPT assistant.
              </p>
              <p className="text-blue-200 text-sm">
                LaPCY AI. All Rights Reserved.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/pricing" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Product Demo
                  </Link>
                </li>
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Tutorials
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Solutions
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Workflow
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Integrations
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Facebook Messenger
                  </Link>
                </li>
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Slack
                  </Link>
                </li>
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Wordpress
                  </Link>
                </li>
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Shopify
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    About & Contact
                  </Link>
                </li>
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Blog & Updates
                  </Link>
                </li>
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Affiliates
                  </Link>
                </li>
                <li>
                  <Link to="/NotFound" className="text-blue-200 hover:text-white transition-colors text-sm">
                    hello@lapcyai.co
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Legal Links */}
          <div className="mt-12 pt-8 border-t border-blue-800">
            <div className="flex flex-col md:flex-row justify-end items-center">
              <div className="flex space-x-6">
                <Link to="/NotFound" className="text-blue-200 hover:text-white text-sm transition-colors">
                  Terms & Conditions
                </Link>
                <Link to="/NotFound" className="text-blue-200 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/NotFound" className="text-blue-200 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;