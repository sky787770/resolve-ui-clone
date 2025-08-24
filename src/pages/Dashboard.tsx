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

const Dashboard = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
              <Button variant="outline" className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Chatbot
              </Button>
              <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Document Creation</h1>
              <p className="text-lg text-gray-600">Name your first document</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                <Label htmlFor="documentName" className="text-lg font-medium">Document Name</Label>
                <div className="flex gap-3">
                  <Input
                    id="documentName"
                    value={documentName}
                    onChange={(e) => setDocumentName(e.target.value)}
                    className="text-lg"
                    placeholder="Enter document name"
                  />
                  <Button>Save</Button>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Train your AI bot with your data</h1>
              <p className="text-lg text-gray-600">Choose your data source</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Files</h3>
                    <p className="text-gray-600">Upload documents, PDFs, and more</p>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Website</h3>
                    <p className="text-gray-600">Connect your website content</p>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Database className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Database</h3>
                    <p className="text-gray-600">Connect your database</p>
                  </CardContent>
                </Card>
                
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Code className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">API</h3>
                    <p className="text-gray-600">Connect external APIs</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Upload your files</h1>
              <p className="text-lg text-gray-600">Drag and drop your files here</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors">
                <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-lg text-gray-600 mb-2">Drag and drop your files here</p>
                <p className="text-gray-500 mb-4">or</p>
                <Button variant="outline" onClick={() => document.getElementById('fileInput')?.click()}>
                  Click to upload
                </Button>
                <input
                  id="fileInput"
                  type="file"
                  multiple
                  onChange={(e) => handleFileUpload(e.target.files)}
                  className="hidden"
                />
              </div>
              
              {uploadedFiles.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Uploaded Files:</h3>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <span className="text-sm">{file.name}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Add your website</h1>
              <p className="text-lg text-gray-600">Connect your website content</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                <Label htmlFor="websiteUrl" className="text-lg font-medium">Website URL</Label>
                <div className="flex gap-3">
                  <Input
                    id="websiteUrl"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="text-lg"
                    placeholder="https://example.com"
                  />
                  <Button>Add</Button>
                </div>
                <p className="text-sm text-gray-500">Enter the URL of your website to train the chatbot</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Connect your database</h1>
              <p className="text-lg text-gray-600">Configure database connection</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dbType">Database type</Label>
                    <Input
                      id="dbType"
                      value={databaseConfig.type}
                      onChange={(e) => handleDatabaseChange('type', e.target.value)}
                      placeholder="MySQL, PostgreSQL, etc."
                    />
                  </div>
                  <div>
                    <Label htmlFor="dbHost">Host</Label>
                    <Input
                      id="dbHost"
                      value={databaseConfig.host}
                      onChange={(e) => handleDatabaseChange('host', e.target.value)}
                      placeholder="localhost"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dbPort">Port</Label>
                    <Input
                      id="dbPort"
                      value={databaseConfig.port}
                      onChange={(e) => handleDatabaseChange('port', e.target.value)}
                      placeholder="3306"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dbUsername">Username</Label>
                    <Input
                      id="dbUsername"
                      value={databaseConfig.username}
                      onChange={(e) => handleDatabaseChange('username', e.target.value)}
                      placeholder="username"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dbPassword">Password</Label>
                    <Input
                      id="dbPassword"
                      type="password"
                      value={databaseConfig.password}
                      onChange={(e) => handleDatabaseChange('password', e.target.value)}
                      placeholder="password"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dbName">Database name</Label>
                    <Input
                      id="dbName"
                      value={databaseConfig.databaseName}
                      onChange={(e) => handleDatabaseChange('databaseName', e.target.value)}
                      placeholder="database_name"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Connect your API</h1>
              <p className="text-lg text-gray-600">Configure API connection</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="apiKey">API Key</Label>
                  <Input
                    id="apiKey"
                    type="password"
                    value={apiConfig.apiKey}
                    onChange={(e) => handleApiChange('apiKey', e.target.value)}
                    placeholder="Enter your API key"
                  />
                </div>
                
                <div>
                  <Label htmlFor="endpointUrl">Endpoint URL</Label>
                  <Input
                    id="endpointUrl"
                    value={apiConfig.endpointUrl}
                    onChange={(e) => handleApiChange('endpointUrl', e.target.value)}
                    placeholder="https://api.example.com/endpoint"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Configuration Complete!</h1>
              <p className="text-lg text-gray-600">Your chatbot is ready to be configured</p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <Check className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-800 mb-2">Setup Complete!</h2>
                <p className="text-green-700">Your chatbot has been configured successfully. You can now customize it further or start using it.</p>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                Start Using Chatbot
              </Button>
            </div>
          </div>
        );

      default:
        return null;
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
    </div>
  );
};

export default Dashboard;
