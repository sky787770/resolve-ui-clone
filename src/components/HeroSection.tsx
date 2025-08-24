import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
              Custom AI Chatbot with your own data
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Build a custom AI chatbot that knows your business inside and out. Train it with your data, documents, and knowledge base to provide accurate, helpful responses to your customers 24/7.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg font-semibold">
                  Build your own AI Chatbot
                </Button>
              </Link>
              <Button variant="link" size="lg" className="px-8 py-3 text-lg font-semibold text-blue-700">
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Column - Mobile Phone with Chatbot */}
          <div className="relative lg:ml-auto">
            <div className="relative">
              {/* Mobile Phone Frame */}
              <div className="relative w-80 h-96 mx-auto">
                <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl"></div>
                <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Chatbot Interface */}
                  <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 p-4">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">AI</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">AI Assistant</h3>
                          <p className="text-xs text-gray-500">Online</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-white px-3 py-2 rounded-2xl rounded-br-md max-w-[80%]">
                          <p className="text-sm">Hi! How can I help you today?</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-200 text-gray-800 px-3 py-2 rounded-2xl rounded-bl-md max-w-[80%]">
                          <p className="text-sm">I need help with my order</p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-600 text-white px-3 py-2 rounded-2xl rounded-br-md max-w-[80%]">
                          <p className="text-sm">I'd be happy to help! What's your order number?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Purple gradient shapes in background */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-300 rounded-full opacity-60 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-300 rounded-full opacity-60 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;