import { MessageCircle, Settings, TrendingUp } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: "One-click deployment",
      description: "Deploy your AI chatbot to your website with just one click - no technical knowledge required"
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: "Fully customizable",
      description: "Customize the look, feel, and behavior of your chatbot to match your brand perfectly"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Get data insights",
      description: "Track performance, understand customer behavior, and optimize your chatbot with detailed analytics"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Get started fast & easy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform is designed to get you up and running in minutes, not hours. 
            Simple setup, powerful results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto p-4 bg-gray-50 rounded-2xl group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
