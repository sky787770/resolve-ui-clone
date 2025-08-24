import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Bot, 
  Clock, 
  Users, 
  Link as LinkIcon,
  FileText,
  MessageSquare,
  BarChart3,
  Eye,
  FileSpreadsheet,
  Zap,
  Settings as SettingsIcon,
  CheckCircle
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const TextTraining = () => {
  const { chatbotId } = useParams();
  const [trainingText, setTrainingText] = useState("LaPCY AI is a company, that provides AI solutions to businesses, founded in 2025.");
  const [isIndexed, setIsIndexed] = useState(true);

  const handleSave = () => {
    console.log("Saving text training:", { trainingText, isIndexed });
  };

  const characterCount = trainingText.length;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Top Bar (Browser-like) */}
      <div className="fixed top-0 left-0 right-0 h-8 bg-gray-800 z-50"></div>
      
      {/* Left Sidebar Navigation */}
      <div className="fixed left-0 top-8 w-64 bg-white border-r border-gray-200 h-full overflow-y-auto z-40">
        <div className="p-6">
          {/* Top Section */}
          <div className="mb-8">
            <Link to={chatbotId ? `/chatbot/${chatbotId}` : "/profile"} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4" />
              Bots
            </Link>
            <div className="text-lg font-semibold text-gray-900">Name of the new chatbot</div>
            <div className="text-sm text-gray-500">Text Training</div>
          </div>
          
          {/* Main Navigation */}
          <nav className="space-y-6">
            <div>
              <Link to="/not-found" className="block">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="w-5 h-5 bg-gray-300 rounded-sm"></div>
                  <span className="text-sm font-medium text-gray-700">Overview</span>
                </div>
              </Link>
            </div>
            
            <div>
              <Link to="/not-found" className="block">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Chat History</span>
                </div>
              </Link>
            </div>
            
            <div>
              <Link to="/not-found" className="block">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <Users className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Leads</span>
                </div>
              </Link>
            </div>
            
            {/* Data Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Data</h3>
              <div className="space-y-1">
                <Link to={chatbotId ? `/chatbot/${chatbotId}` : "/profile"} className="block">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <LinkIcon className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Links</span>
                  </div>
                </Link>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200 cursor-pointer">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Text</span>
                </div>
                <Link to={chatbotId ? `/qa/${chatbotId}` : "/qa"} className="block">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <MessageSquare className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Q&A</span>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Behaviour Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Behaviour</h3>
              <div className="space-y-1">
                <Link to="/not-found" className="block">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <BarChart3 className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Tune AI</span>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Deployment Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Deployment</h3>
              <div className="space-y-1">
                <Link to={chatbotId ? `/appearance/${chatbotId}` : "/appearance"} className="block">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <Eye className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Appearance</span>
                  </div>
                </Link>
                <Link to="/not-found" className="block">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <FileSpreadsheet className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Embed / Share</span>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Advanced Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Advanced</h3>
              <div className="space-y-1">
                <Link to="/not-found" className="block">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <Zap className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Integrations</span>
                  </div>
                </Link>
                <Link to={chatbotId ? `/settings/${chatbotId}` : "/settings"} className="block">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <SettingsIcon className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Settings</span>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 pt-8 pl-72">
        {/* Static Header Section */}
        <div className="bg-white border-b border-gray-200 px-8 py-6 pl-0">
          {/* Page Title */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Text Training</h1>
            <p className="text-lg text-gray-600">You can train the bot by feeding text content directly. Number of characters in this text will be counted towards your quota.</p>
          </div>
        </div>

        {/* Main Content with Independent Scrolling */}
        <div className="px-8 py-8 overflow-y-auto h-[calc(100vh-200px)]">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Text Input Card */}
            <Card>
              <CardContent className="p-6">
                <Textarea
                  value={trainingText}
                  onChange={(e) => setTrainingText(e.target.value)}
                  placeholder="Enter your training text here..."
                  className="w-full min-h-[300px] text-sm border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  rows={15}
                />
              </CardContent>
            </Card>

            {/* Footer/Controls Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  {/* Status Information */}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    {isIndexed && (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="font-medium">INDEXED</span>
                        <span className="text-gray-400">|</span>
                      </>
                    )}
                    <span>{characterCount} characters</span>
                  </div>
                  
                  {/* Save Button */}
                  <Button 
                    onClick={handleSave}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
                  >
                    SAVE
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextTraining;
