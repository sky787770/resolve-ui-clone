import { Users, TrendingUp, Headphones } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Let AI chatbot do the work for you
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Automate customer interactions and scale your business with intelligent AI assistance
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Engage */}
          <div className="text-center group cursor-pointer">
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-yellow-100 rounded-2xl group-hover:scale-105 transition-transform duration-300">
                <Users className="w-full h-full text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Engage</h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with customers through meaningful conversations and personalized interactions
            </p>
          </div>

          {/* Convert */}
          <div className="text-center group cursor-pointer">
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl group-hover:scale-105 transition-transform duration-300">
                <TrendingUp className="w-full h-full text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Convert</h3>
            <p className="text-gray-600 leading-relaxed">
              Turn visitors into customers with intelligent lead qualification and sales assistance
            </p>
          </div>

          {/* Support */}
          <div className="text-center group cursor-pointer">
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-yellow-100 rounded-2xl group-hover:scale-105 transition-transform duration-300">
                <Headphones className="w-full h-full text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Provide instant, accurate support 24/7 without overwhelming your team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;