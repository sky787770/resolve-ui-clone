import { Button } from "@/components/ui/button";

const IntegrationsSection = () => {
  const integrations = [
    { name: "WhatsApp", icon: "💬" },
    { name: "Meta Messenger", icon: "📱" },
    { name: "Slack", icon: "💼" },
    { name: "WordPress", icon: "🌐" },
    { name: "Shopify", icon: "🛍️" },
    { name: "Wix", icon: "🎨" },
    { name: "Google Drive", icon: "☁️" },
    { name: "Zapier", icon: "🔗" },
    { name: "Notion", icon: "📝" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Integrate with your favorite tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect your AI chatbot with the platforms and tools you already use. 
            Seamless integration for maximum efficiency.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-3 p-3 bg-gray-50 rounded-xl group-hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                <span className="text-2xl">{integration.icon}</span>
              </div>
              <p className="text-sm font-medium text-gray-700">{integration.name}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg font-semibold">
            View all integrations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
