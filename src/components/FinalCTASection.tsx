import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCTASection = () => {
  const features = [
    "Reduce support volume",
    "Answer questions 24/7",
    "Boost sales",
    "Collect emails & book meetings",
    "Stay in the loop. Jump in anytime",
    "Communication in any language"
  ];

  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Get your own AI Assistant
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              Transform your business with an AI assistant that never sleeps. 
              Automate customer interactions, boost productivity, and scale your operations 
              without hiring additional staff.
            </p>
            
            <Link to="/signup">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
                Build your own AI Chatbot
              </Button>
            </Link>
          </div>

          {/* Right Column - Features List */}
          <div className="lg:ml-auto">
            <div className="bg-blue-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-blue-300" />
                AI Assistant Benefits
              </h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
