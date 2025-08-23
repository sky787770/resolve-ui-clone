import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Connect and sync",
      subtitle: "your business data",
      description: "Connect and sync your business data",
      color: "bg-blue-500"
    },
    {
      number: "2", 
      title: "Customize and tune",
      subtitle: "your AI Chatbot",
      description: "Customize and tune your AI Chatbot",
      color: "bg-purple-500"
    },
    {
      number: "3",
      title: "Embed on your website", 
      subtitle: "and other channels",
      description: "Embed on your website and other channels",
      color: "bg-indigo-500"
    },
    {
      number: "4",
      title: "Human takeover",
      subtitle: "in case needed", 
      description: "Human takeover in case needed",
      color: "bg-violet-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            How it works
          </span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Take your business to the next AI level
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Put your customer support on autopilot with our AI chatbot and support tools. 
            Supercharge your business operations and empower existing employees with internal AI Agents.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className={`w-16 h-16 mx-auto rounded-2xl ${step.color} flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform duration-300`}>
                  {step.number}
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.subtitle}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            Create your AI Chatbot
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;