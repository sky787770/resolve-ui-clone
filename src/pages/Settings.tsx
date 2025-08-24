import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ArrowLeft, 
  Bot, 
  Shield, 
  Users, 
  Mail, 
  Globe,
  AlertTriangle,
  Info,
  Clock,
  Link as LinkIcon,
  FileText,
  MessageSquare,
  BarChart3,
  Eye,
  FileSpreadsheet,
  Zap,
  Settings as SettingsIcon
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const Settings = () => {
  const { chatbotId } = useParams();
  const [botName, setBotName] = useState("LaPCY");
  const [isPublic, setIsPublic] = useState(false);
  const [domainWhitelist, setDomainWhitelist] = useState(false);
  const [rateLimiting, setRateLimiting] = useState(false);
  const [customDomain, setCustomDomain] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [fromEmail, setFromEmail] = useState("noreply@lapcy.ai");
  const [leadsSubject, setLeadsSubject] = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [collaboratorEmail, setCollaboratorEmail] = useState("");
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const handleSaveBasic = () => {
    console.log("Saving basic settings:", { botName, isPublic });
  };

  const handleSaveSecurity = () => {
    console.log("Saving security settings:", { domainWhitelist, rateLimiting });
  };

  const handleSaveCustomDomain = () => {
    console.log("Saving custom domain:", customDomain);
  };

  const handleSaveEmailBranding = () => {
    console.log("Saving email branding:", { emailDomain, fromEmail, leadsSubject, pageTitle });
  };

  const handleAddCollaborator = () => {
    if (collaboratorEmail.trim()) {
      console.log("Adding collaborator:", collaboratorEmail);
      setCollaboratorEmail("");
    }
  };

  const handleDeleteBot = () => {
    if (deleteConfirmation) {
      console.log("Deleting bot:", chatbotId);
    }
  };

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
            <div className="text-sm text-gray-500">{chatbotId || "Settings"}</div>
          </div>
          
          {/* Main Navigation */}
          <nav className="space-y-6">
            <div>
              <Link to={chatbotId ? `/chatbot/${chatbotId}` : "/profile"} className="block">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="w-5 h-5 bg-gray-300 rounded-sm"></div>
                  <span className="text-sm font-medium text-gray-700">Overview</span>
                </div>
              </Link>
            </div>
            
            <div>
              <Link to={chatbotId ? `/chatbot/${chatbotId}` : "/profile"} className="block">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Chat History</span>
                </div>
              </Link>
            </div>
            
            <div>
              <Link to={chatbotId ? `/chatbot/${chatbotId}` : "/profile"} className="block">
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
                <Link to={chatbotId ? `/text-training/${chatbotId}` : "/text"} className="block">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Text</span>
                  </div>
                </Link>
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
                <Link to={chatbotId ? `/chatbot/${chatbotId}` : "/profile"} className="block">
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
                <Link to={chatbotId ? `/chatbot/${chatbotId}` : "/profile"} className="block">
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
                <Link to={chatbotId ? `/chatbot/${chatbotId}` : "/profile"} className="block">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <Zap className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">Integrations</span>
                  </div>
                </Link>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200 cursor-pointer">
                  <SettingsIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Settings</span>
                </div>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
            <p className="text-lg text-gray-600">Rename your bot, delete your bot, etc.</p>
          </div>
        </div>

        {/* Main Content with Independent Scrolling */}
        <div className="px-8 py-8 overflow-y-auto h-[calc(100vh-200px)]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Basic Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Bot className="w-6 h-6 text-gray-600" />
                      Basic
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Enter a new name for your bot
                      </label>
                      <Input
                        value={botName}
                        onChange={(e) => setBotName(e.target.value)}
                        placeholder="Enter bot name"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Mark it as public</label>
                      </div>
                      <Switch
                        checked={isPublic}
                        onCheckedChange={setIsPublic}
                      />
                    </div>
                    
                    <Button onClick={handleSaveBasic} className="w-full">
                      SAVE
                    </Button>
                  </CardContent>
                </Card>

                {/* Security Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-gray-600" />
                      Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Enable domain white listing when shared via <strong>Embed Script</strong>
                        </label>
                      </div>
                      <Switch
                        checked={domainWhitelist}
                        onCheckedChange={setDomainWhitelist}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-3"><strong>Rate Limiting</strong></h4>
                      <div className="flex items-center justify-between">
                        <label className="text-sm text-gray-600">Enable rate limiting</label>
                        <Switch
                          checked={rateLimiting}
                          onCheckedChange={setRateLimiting}
                        />
                      </div>
                    </div>
                    
                    <Button onClick={handleSaveSecurity} className="w-full">
                      SAVE
                    </Button>
                  </CardContent>
                </Card>

                {/* Custom Domain Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-gray-600" />
                      Custom Domain
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-sm text-gray-600 space-y-2">
                      <p>From your domain registrar, create a CNAME record for your subdomain and point it to <strong>lapcy-ai.fly.dev</strong></p>
                      <p>Once done, enter the complete domain in the input field below.</p>
                    </div>
                    
                    <div>
                      <Input
                        value={customDomain}
                        onChange={(e) => setCustomDomain(e.target.value)}
                        placeholder="Enter your domain (ex: subdomain.yourdomain.com)"
                      />
                      <p className="text-red-500 text-sm mt-1">*</p>
                    </div>
                    
                    <Button onClick={handleSaveCustomDomain} className="w-full">
                      SAVE
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Collaborators Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-gray-600" />
                      Collaborators
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-3">
                      <Input
                        value={collaboratorEmail}
                        onChange={(e) => setCollaboratorEmail(e.target.value)}
                        placeholder="Enter email ID to add a collaborator"
                        className="flex-1"
                      />
                      <Button onClick={handleAddCollaborator}>
                        + ADD
                      </Button>
                    </div>
                    
                    <p className="text-sm text-gray-600">
                      Note: A LaPCY AI account with given email must already exist. A collaborator can do any action as the bot owner.
                    </p>
                    
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        No collaborators are available. Once you add collaborators to your bot, they will appear here.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Email Branding Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Mail className="w-6 h-6 text-gray-600" />
                      Email Branding
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Domain
                      </label>
                      <div className="relative">
                        <Input
                          value={emailDomain}
                          onChange={(e) => setEmailDomain(e.target.value)}
                          placeholder="yourdomain.com"
                        />
                        <Info className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        From email address
                      </label>
                      <div className="relative">
                        <Input
                          value={fromEmail}
                          onChange={(e) => setFromEmail(e.target.value)}
                          placeholder="noreply@lapcy.ai"
                          className="bg-gray-50"
                        />
                        <Info className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Leads email subject
                      </label>
                      <div className="relative">
                        <Input
                          value={leadsSubject}
                          onChange={(e) => setLeadsSubject(e.target.value)}
                          placeholder="Enter email subject"
                        />
                        <Info className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Page title when a bot is shared
                      </label>
                      <div className="relative">
                        <Input
                          value={pageTitle}
                          onChange={(e) => setPageTitle(e.target.value)}
                          placeholder="Enter page title"
                        />
                        <Info className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                      </div>
                    </div>
                    
                    <Button onClick={handleSaveEmailBranding} className="w-full">
                      SAVE
                    </Button>
                  </CardContent>
                </Card>

                {/* Danger Zone Section */}
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-red-600">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                      Danger Zone
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-sm text-gray-600">
                      Deleting a bot is a permanent action that cannot be reversed. Deleting the bot will delete all documents indexed against it and all history.
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={deleteConfirmation}
                        onCheckedChange={(checked) => setDeleteConfirmation(checked as boolean)}
                      />
                      <label className="text-sm text-gray-700">
                        Yes, I want to delete this bot and all its data permanently.
                      </label>
                    </div>
                    
                    <Button 
                      onClick={handleDeleteBot}
                      disabled={!deleteConfirmation}
                      variant="destructive"
                      className="w-full"
                    >
                      DELETE
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
