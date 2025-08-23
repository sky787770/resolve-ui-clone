import engageIcon from "@/assets/engage-icon.png";
import convertIcon from "@/assets/convert-icon.png";
import supportIcon from "@/assets/support-icon.png";

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Let AI chatbot do the work for <span className="text-gradient">you</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sit back and gain the benefits of AI chatbot working for your business
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Engage */}
          <div className="text-center group cursor-pointer">
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={engageIcon} 
                  alt="Engage customers" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Engage</h3>
            <p className="text-muted-foreground leading-relaxed">
              Improve customer experience by engaging with your customers
            </p>
          </div>

          {/* Convert */}
          <div className="text-center group cursor-pointer">
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={convertIcon} 
                  alt="Convert customers" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Convert</h3>
            <p className="text-muted-foreground leading-relaxed">
              Increase conversion rate and customer satisfaction
            </p>
          </div>

          {/* Support */}
          <div className="text-center group cursor-pointer">
            <div className="relative mb-6">
              <div className="w-24 h-24 mx-auto mb-4 p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={supportIcon} 
                  alt="24/7 Support" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Support</h3>
            <p className="text-muted-foreground leading-relaxed">
              Offer automated, 24/7 natural language customer support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;