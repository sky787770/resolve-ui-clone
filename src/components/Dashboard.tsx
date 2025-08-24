import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageCircle, 
  Settings, 
  Database, 
  Globe, 
  FileText, 
  Upload, 
  Code, 
  Zap,
  ChevronRight,
  Plus,
  Check,
  Star,
  Cloud,
  MessageSquare,
  Headphones,
  TrendingUp,
  Users,
  Laptop,
  Smartphone,
  Monitor,
  Webhook,
  FileSpreadsheet,
  FileImage,
  FileVideo,
  FileAudio,
  FolderOpen,
  ExternalLink,
  Copy,
  Trash2,
  Edit3,
  Eye,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";
import ChatbotWidget from "./ChatbotWidget";

const Dashboard = () => {
  const [currentStep, setCurrentStep] = useState(0); // Changed from 1 to 0
  const [documentName, setDocumentName] = useState("My first document");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [databaseConfig, setDatabaseConfig] = useState({
    type: "",
    host: "",
    port: "",
    username: "",
    password: "",
    databaseName: ""
  });
  const [apiConfig, setApiConfig] = useState({
    apiKey: "",
    endpointUrl: ""
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      setUploadedFiles(Array.from(files));
    }
  };

  const handleDatabaseChange = (field: string, value: string) => {
    setDatabaseConfig(prev => ({ ...prev, [field]: value }));
  };

  const handleApiChange = (field: string, value: string) => {
    setApiConfig(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 8));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Create your first chatbot</h1>
              <p className="text-lg text-gray-600">Let's get started building your AI assistant</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center">
                <h2 className="text-4xl font-bold mb-4">Welcome</h2>
                <p className="text-xl">Ready to build something amazing?</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Link to="/new">
                <Button variant="outline" className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  New Chatbot
                </Button>
              </Link>
              <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Create your first chatbot</h1>
              <p className="text-lg text-gray-600">Let's get started building your AI assistant</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white text-center">
                <h2 className="text-4xl font-bold mb-4">Welcome</h2>
                <p className="text-xl">Ready to build something amazing?</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Link to="/new">
                <Button variant="outline" className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  New Chatbot
                </Button>
              </Link>
              <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold">LaPCY AI</span>
          </div>
          
          <nav className="space-y-2">
            <Link to="/dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <MessageCircle className="w-5 h-5" />
              Dashboard
            </Link>
            <Link to="/chatbots" className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 text-white">
              <MessageSquare className="w-5 h-5" />
              Chatbots
            </Link>
            <Link to="/integrations" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <Zap className="w-5 h-5" />
              Integrations
            </Link>
            <Link to="/settings" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <Settings className="w-5 h-5" />
              Settings
            </Link>
            <Link to="/billing" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <Star className="w-5 h-5" />
              Billing
            </Link>
            <Link to="/team" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <Users className="w-5 h-5" />
              Team
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {renderStep()}
        </div>
      </div>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
};

export default Dashboard;
