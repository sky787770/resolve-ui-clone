import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const GetStartedSection = () => {
  const steps = [
    {
      step: "STEP 1",
      title: "Create an account",
      description: "Get up and running in no time, only 5 minutes setup time, free trial available to test it out without any commitment."
    },
    {
      step: "STEP 2", 
      title: "Setup your AI Chatbot",
      description: "Connect your website pages and data sources, fine tune your AI chatbot to match to your business."
    },
    {
      step: "STEP 3",
      title: "Let AI do its magic",
      description: "Your AI assistant will handle your time consuming tasks and free you up to focus on your business needs."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            Easy starter
          </span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Get started fast & easy
          </h2>
          <p className="text-lg text-muted-foreground">
            It's now easier than ever to take your business to the next AI level.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 shadow-sm border border-border group hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {step.description}
              </p>
              <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            Start free trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;