import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Bot, 
  ChevronDown, 
  User, 
  Clock, 
  Users, 
  Link as LinkIcon,
  FileText, 
  MessageSquare, 
  BarChart3, 
  Eye, 
  FileSpreadsheet, 
  Zap,
  Sparkles,
  Upload,
  Globe,
  File,
  FileSpreadsheet as ExcelIcon,
  Play,
  HeadphonesIcon,
  X,
  Settings as SettingsIcon
} from "lucide-react";
import { Link } from "react-router-dom";

const ChatbotPage = () => {
  const { chatbotId } = useParams();
  const [selectedTab, setSelectedTab] = useState("Full Website");
  const [targetLink, setTargetLink] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const dataSourceTabs = [
    "Full Website",
    "Webpage", 
    "Document/files",
    "YouTube"
  ];

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    // Clear files when switching to non-document tabs
    if (tab !== "Document/files") {
      setUploadedFiles([]);
    }
  };

  const handleStart = () => {
    if (targetLink.trim()) {
      // In a real app, you would process the link here
      console.log("Processing link:", targetLink);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const openFilePicker = () => {
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleFileProcessing = () => {
    if (uploadedFiles.length > 0) {
      setIsUploading(true);
      // Simulate file processing
      setTimeout(() => {
        setIsUploading(false);
        console.log("Processing files:", uploadedFiles);
        // In a real app, you would send files to your backend here
      }, 2000);
    }
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "Document/files":
        return (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Documents & Files</h3>
              <p className="text-sm text-gray-600 mb-6">
                Upload your documents, PDFs, Word files, Excel sheets, and other files to train your chatbot.
              </p>
              
              {/* File Upload Area */}
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer"
                onDrop={handleFileDrop}
                onDragOver={handleDragOver}
                onClick={openFilePicker}
              >
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-700 mb-2">Drop files here or click to upload</p>
                <p className="text-sm text-gray-500 mb-4">
                  Supports PDF, DOC, DOCX, TXT, CSV, XLS, XLSX (Max 10MB per file)
                </p>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt,.csv,.xls,.xlsx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    openFilePicker();
                  }}
                >
                  Choose Files
                </Button>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold text-gray-900 mb-3">Uploaded Files ({uploadedFiles.length})</h4>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <File className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{file.name}</p>
                            <p className="text-xs text-gray-500">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex gap-3">
                    <Button 
                      onClick={handleFileProcessing}
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={isUploading}
                    >
                      {isUploading ? "Processing..." : "Process Files"}
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setUploadedFiles([])}
                    >
                      Clear All
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        );

      case "YouTube":
        return (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Enter YouTube Video or Channel URL</h3>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    type="url"
                    placeholder="Enter YouTube video or channel URL"
                    value={targetLink}
                    onChange={(e) => setTargetLink(e.target.value)}
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Enter a YouTube video URL or channel URL to extract content and train your chatbot with the video's transcript and description.
                  </p>
                </div>
                <Button 
                  onClick={handleStart}
                  className="bg-blue-600 hover:bg-blue-700 px-8"
                  disabled={!targetLink.trim()}
                >
                  START
                </Button>
              </div>
            </CardContent>
          </Card>
        );

      case "Webpage":
        return (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Enter Specific Webpage URL</h3>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    type="url"
                    placeholder="Enter specific webpage URL"
                    value={targetLink}
                    onChange={(e) => setTargetLink(e.target.value)}
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Enter a specific webpage URL to extract content from that single page and train your chatbot with its information.
                  </p>
                </div>
                <Button 
                  onClick={handleStart}
                  className="bg-blue-600 hover:bg-blue-700 px-8"
                  disabled={!targetLink.trim()}
                >
                  START
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      
      default:
        return (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Enter the target link</h3>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    type="url"
                    placeholder="Enter the target link"
                    value={targetLink}
                    onChange={(e) => setTargetLink(e.target.value)}
                    className="text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Enter the link to a webpage and we will visit all the pages starting from it and list them for you to choose from.
                  </p>
                </div>
                <Button 
                  onClick={handleStart}
                  className="bg-blue-600 hover:bg-blue-700 px-8"
                  disabled={!targetLink.trim()}
                >
                  START
                </Button>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Top Bar (Browser-like) */}
      <div className="fixed top-0 left-0 right-0 h-8 bg-gray-800 z-50"></div>
      
      {/* Left Sidebar Navigation */}
      <div className="w-64 bg-white border-r border-gray-200 pt-8">
        <div className="p-6">
          {/* Top Section */}
          <div className="mb-8">
            <Link to="/profile" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4" />
              Bots
            </Link>
            <div className="text-lg font-semibold text-gray-900">Name of the new chatbot</div>
            <div className="text-sm text-gray-500">{chatbotId}</div>
          </div>
          
          {/* Main Navigation */}
          <nav className="space-y-6">
            <div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="w-5 h-5 bg-gray-300 rounded-sm"></div>
                <span className="text-sm font-medium text-gray-700">Overview</span>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Chat History</span>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                <Users className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Leads</span>
              </div>
            </div>
            
            {/* Data Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Data</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <LinkIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Links</span>
                </div>
                <Link to={`/text-training/${chatbotId}`} className="block">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Text</span>
                  </div>
                </Link>
                <Link to={`/qa/${chatbotId}`} className="block">
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
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <BarChart3 className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Tune AI</span>
                </div>
              </div>
            </div>
            
            {/* Deployment Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Deployment</h3>
              <div className="space-y-1">
                <Link to={`/appearance/${chatbotId}`} className="block">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <Eye className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Appearance</span>
                  </div>
                </Link>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <FileSpreadsheet className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Embed / Share</span>
                </div>
              </div>
            </div>
            
            {/* Advanced Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">Advanced</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <Zap className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Integrations</span>
                </div>
                
                <Link to={`/settings/${chatbotId}`} className="block">
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
      <div className="flex-1 pt-8 pl-50">
        <div className="max-w-4xl mx-auto px-0 py-4">

        
          {/* Page Title */}
          <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Train your Al bot with your data</h1>
              <p className="text-lg text-gray-600 mb-6">Choose your data source</p>
          </div>
          {/* Introductory Text */}
          <div className="flex items-start gap-3 mb-8 p-4 bg-blue-50 rounded-lg">
            <Sparkles className="w-5 h-5 text-blue-600 mt-0.5" />
            <p className="text-gray-700">
              Now, it's time to add some links to train your bot. This could be links to your website, documentation site, etc. Anything that contains information about your business, product, service, etc.
            </p>
          </div>

          {/* Data Source Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {dataSourceTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedTab === tab
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Enter Target Link Section */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
