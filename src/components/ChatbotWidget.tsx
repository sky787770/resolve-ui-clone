import { MessageCircle } from "lucide-react";

const ChatbotWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      <div className="bg-purple-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-purple-700 transition-colors">
        <MessageCircle className="w-6 h-6" />
      </div>
      
      {/* Speech Bubble */}
      <div className="absolute bottom-16 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 mb-2 min-w-[200px]">
        <p className="text-sm text-gray-700">Hi there! Try the Chatbot here</p>
        {/* Arrow pointing down */}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
      </div>
    </div>
  );
};

export default ChatbotWidget;
