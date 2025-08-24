import { useState } from "react";
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
  HeadphonesIcon
} from "lucide-react";
import { Link } from "react-router-dom";

const TrainFromLink = () => {
  const [selectedTab, setSelectedTab] = useState("Full Website");
  const [targetLink, setTargetLink] = useState("");

  const dataSourceTabs = [
    "Full Website",
    "Webpage", 
    "Document/files",
    "YouTube"
  ];

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleStart = () => {
    if (targetLink.trim()) {
      // In a real app, you would process the link here
      console.log("Processing link:", targetLink);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Top Bar (Browser/Application Header) */}
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
            <div className="text-lg font-semibold text-gray-900">SaasPedia</div>
            <div className="text-sm text-gray-500">clzmepc25e1</div>
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
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">DATA</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200 cursor-pointer">
                  <LinkIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Links</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Text</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <MessageSquare className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Q&A</span>
                </div>
              </div>
            </div>
            
            {/* Behaviour Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">BEHAVIOUR</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <BarChart3 className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Tune AI</span>
                </div>
              </div>
            </div>
            
            {/* Deployment Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">DEPLOYMENT</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <Eye className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Appearance</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <FileSpreadsheet className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Embed / Share</span>
                </div>
              </div>
            </div>
            
            {/* Advanced Section */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">ADVANCED</h3>
              <div className="space-y-1">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <Zap className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Integrations</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 pt-8 pl-64">
        <div className="max-w-4xl mx-auto px-8 py-8">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-6">
            bots &gt; clzmepc25e1 &gt; links &gt; add
          </div>

          {/* Page Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Train from Link</h1>
          <p className="text-lg text-gray-600 mb-6">Enter a URL to train your chatbot from.</p>

          {/* Introductory Text */}
          <div className="flex items-start gap-3 mb-8 p-4 bg-blue-50 rounded-lg">
            <Sparkles className="w-5 h-5 text-blue-600 mt-0.5" />
            <p className="text-gray-700">
              Now, it's time to add some links to train your bot. This could be links to your website, documentation site, etc. Anything that contains information about your business, product, service, etc.
            </p>
          </div>

          {/* Data Source Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {dataSourceTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
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

          {/* Upload Document Section */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Document</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors">
                <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-lg text-gray-600 mb-2">Choose a file or drag it here</p>
                <p className="text-sm text-gray-500">
                  Only txt, pdf, docx, doc, csv, xlsx files are allowed.
                </p>
                <p className="text-sm text-gray-500">
                  Each file should be less than 10 MB.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 px-12 py-3 text-lg">
              SAVE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainFromLink;
