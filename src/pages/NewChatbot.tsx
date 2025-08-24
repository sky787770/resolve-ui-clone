import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Bot, ChevronDown, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const NewChatbot = () => {
  const navigate = useNavigate();
  const [botName, setBotName] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (botName.trim()) {
      // In a real app, you would create the bot here and get the ID from the backend
      // For now, we'll generate a mock ID and redirect
      const chatbotId = `clz${Date.now().toString(36)}`;
      navigate(`/chatbot/${chatbotId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header (Dark Grey) */}
      <div className="h-2 bg-gray-800"></div>
      
      {/* Secondary Header (Light Blue) */}
      <div className="bg-blue-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-blue-900">LaPCY AI</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 cursor-pointer hover:bg-blue-200 p-2 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <ChevronDown className="w-4 h-4 text-blue-900" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Go Back Link */}
        <Link 
          to="/dashboard" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </Link>

        {/* Create New Bot Form Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Create New Bot</h1>
            <p className="text-gray-600 text-lg">
              Enter a nice name to be able to identify your bot easily.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="botName" className="text-sm font-medium text-gray-700">
                Bot Name
              </Label>
              <Input
                id="botName"
                type="text"
                value={botName}
                onChange={(e) => setBotName(e.target.value)}
                placeholder="Enter a nice name for your bot"
                className="text-lg py-3"
                required
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <Label htmlFor="publicBot" className="text-sm font-medium text-gray-700">
                  Create a public bot
                </Label>
                <p className="text-xs text-gray-500 mt-1">
                  You can always change this later
                </p>
              </div>
              <Switch
                id="publicBot"
                checked={isPublic}
                onCheckedChange={setIsPublic}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
              disabled={!botName.trim()}
            >
              LET'S GO!
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewChatbot;
