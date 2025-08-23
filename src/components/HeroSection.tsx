import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import chatbotWidget from "@/assets/chatbot-widget.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Custom AI Chatbot
              <br />
              with your{" "}
              <span className="text-gradient">own data</span>{" "}
              <span className="text-gradient">persona</span>{" "}
              <span className="text-gradient">branding</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Easily connect your website pages, documents and other data resources to train a 24/7 custom AI ChatGPT for your business. No coding required.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                Create Chatbot
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                View plans and pricing
              </Button>
            </div>

            {/* Features List */}
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">10-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">5 Minutes setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Cancel Anytime</span>
              </div>
            </div>
          </div>

          {/* Right Column - Chatbot Widget */}
          <div className="relative lg:ml-auto">
            <div className="relative">
              <img 
                src={chatbotWidget} 
                alt="AI Chatbot Interface" 
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl mx-auto shadow-2xl rounded-2xl"
              />
              
              {/* Floating Chat Bubble */}
              <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                👋 Hi there! Try the Chatbot here
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;