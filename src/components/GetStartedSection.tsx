import { Button } from "@/components/ui/button";
import { FileText, File, FileSpreadsheet, Globe, Upload, MessageSquare } from "lucide-react";

const GetStartedSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Train your AI bot with your data
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Upload your documents, connect your website, or integrate with your existing data sources. 
              Our AI learns from your content to provide accurate, contextual responses that reflect your brand voice and knowledge.
            </p>
            
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg font-semibold">
              <Upload className="mr-2 w-5 h-5" />
              Upload your data
            </Button>
          </div>

          {/* Right Column - Data Sources Visualization */}
          <div className="relative lg:ml-auto">
            <div className="relative w-80 h-80 mx-auto">
              {/* Central Chat Bubble */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <MessageSquare className="w-12 h-12 text-white" />
                </div>
              </div>
              
              {/* Document Icons in Circular Arrangement */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-gray-200">
                  <FileText className="w-8 h-8 text-red-500" />
                </div>
              </div>
              
              <div className="absolute top-1/4 right-0">
                <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-gray-200">
                  <File className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              
              <div className="absolute bottom-1/4 right-0">
                <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-gray-200">
                  <FileSpreadsheet className="w-8 h-8 text-green-500" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-gray-200">
                  <FileText className="w-8 h-8 text-purple-500" />
                </div>
              </div>
              
              <div className="absolute bottom-1/4 left-0">
                <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-gray-200">
                  <File className="w-8 h-8 text-orange-500" />
                </div>
              </div>
              
              <div className="absolute top-1/4 left-0">
                <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-gray-200">
                  <Globe className="w-8 h-8 text-indigo-500" />
                </div>
              </div>
              
              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                <circle cx="160" cy="160" r="120" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;