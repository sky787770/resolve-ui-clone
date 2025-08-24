import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: isAnnual ? "$5" : "$7",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "1 AI Chatbot",
        "Up to 2,000 conversations/month",
        "Basic integrations",
        "Email support",
        "Standard response time"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: isAnnual ? "$17" : "$22",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 5 AI Chatbots",
        "Up to 11,000 conversations/month",
        "Advanced integrations",
        "Priority support",
        "Custom branding",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Project",
      price: isAnnual ? "$60" : "$68",
      period: "/month",
      description: "For enterprise-level requirements",
      features: [
        "Unlimited AI Chatbots",
        "Unlimited conversations",
        "All integrations",
        "Dedicated support",
        "White-label solution",
        "Advanced analytics",
        "Custom training"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Choose a pricing plan that works for you
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start with our free trial and scale as you grow. All plans include our core features.
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-lg ${!isAnnual ? 'text-black font-semibold' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-black font-semibold' : 'text-gray-500'}`}>
              Annually <span className="text-sm text-green-600">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-2 border-blue-600 bg-blue-50 shadow-xl' 
                  : 'border border-gray-200 bg-white shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                  <span className="text-lg text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-white hover:bg-gray-50 text-blue-600 border border-blue-600'
                }`}
              >
                <Link to="/signup" className="w-full h-full flex items-center justify-center">
                  Get Started
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
