import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const DemoChatbotsSection = () => {
  const demos = [
    {
      name: "Donald Trump",
      image: "https://via.placeholder.com/80x80/FF6B6B/FFFFFF?text=DT",
      description: "Experience the Trump chatbot personality"
    },
    {
      name: "Tesla",
      image: "https://via.placeholder.com/80x80/3B82F6/FFFFFF?text=T",
      description: "Tesla product information and support"
    },
    {
      name: "Vercel",
      image: "https://via.placeholder.com/80x80/000000/FFFFFF?text=V",
      description: "Vercel deployment and hosting assistance"
    },
    {
      name: "Airbnb",
      image: "https://via.placeholder.com/80x80/FF5A5F/FFFFFF?text=A",
      description: "Airbnb booking and travel help"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Try it out with these demo AI chatbots
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the power of our AI technology with these pre-built demo chatbots. 
            See how they handle real conversations and understand their capabilities.
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={demo.image} 
                    alt={demo.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{demo.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{demo.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoChatbotsSection;
