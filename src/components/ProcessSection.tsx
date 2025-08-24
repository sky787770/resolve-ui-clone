import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const ProcessSection = () => {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: "24/7 Customer Support",
      description: "Provide instant support to your customers around the clock without hiring additional staff"
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Automate Lead Generation",
      description: "Capture and qualify leads automatically through intelligent conversations and forms"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Boost Sales & Conversions",
      description: "Increase your conversion rates with personalized product recommendations and assistance"
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Multilingual Support",
      description: "Serve customers in their preferred language with automatic translation capabilities"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Take your business to the next AI level
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your customer experience with intelligent AI automation that works 24/7 to engage, 
            convert, and support your customers across all channels.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto p-4 bg-gray-50 rounded-2xl group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/signup">
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg font-semibold">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;