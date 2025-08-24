import { Button } from "@/components/ui/button";
import { Play, MessageSquare, BarChart3, Settings, Users, FileText } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
          Take a peek with a video overview
        </h2>
        
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          See how easy it is to build and deploy your custom AI chatbot in minutes
        </p>

        {/* Laptop with Dashboard Interface */}
        <div className="relative">
          {/* Laptop Frame */}
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Laptop Base */}
            <div className="w-full h-4 bg-gray-400 rounded-b-2xl mx-auto"></div>
            
            {/* Laptop Screen */}
            <div className="relative bg-gray-800 rounded-t-2xl p-2 mx-auto">
              <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                {/* Dashboard Header */}
                <div className="bg-gray-50 border-b p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">AI</span>
                      </div>
                      <h3 className="font-semibold text-gray-800">LaPCY AI Dashboard</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-500" />
                      <Settings className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="flex h-96">
                  {/* Left Sidebar */}
                  <div className="w-64 bg-gray-50 p-4 border-r">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-purple-100 text-purple-700">
                        <MessageSquare className="w-5 h-5" />
                        <span className="font-medium">Chatbots</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                        <BarChart3 className="w-5 h-5" />
                        <span>Analytics</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                        <FileText className="w-5 h-5" />
                        <span>Documents</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Main Content Area */}
                  <div className="flex-1 p-6">
                    <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4">
                      {/* Chat Interface Preview */}
                      <div className="space-y-3">
                        <div className="flex justify-end">
                          <div className="bg-blue-600 text-white px-3 py-2 rounded-2xl rounded-br-md max-w-[60%]">
                            <p className="text-sm">Welcome! How can I assist you today?</p>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-gray-200 text-gray-800 px-3 py-2 rounded-2xl rounded-bl-md max-w-[60%]">
                            <p className="text-sm">I need help with my account</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Purple Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-purple-700 transition-colors cursor-pointer">
                          <Play className="w-8 h-8 text-white fill-current ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;