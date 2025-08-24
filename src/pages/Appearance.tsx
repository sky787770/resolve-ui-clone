import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
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
  Settings as SettingsIcon,
  Upload,
  User,
  Send,
  X,
  Menu
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const Appearance = () => {
  const { chatbotId } = useParams();
  
  // Title and Welcome Message state
  const [chatbotTitle, setChatbotTitle] = useState("Chatbot");
  const [welcomeMessage, setWelcomeMessage] = useState("Hi, How can I help you today?");
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);
  const [welcomePopupTime, setWelcomePopupTime] = useState(2);
  
  // Appearance settings state
  const [chatWindowBgColor, setChatWindowBgColor] = useState("#ffffff");
  const [chatMessageBgColor, setChatMessageBgColor] = useState("#ffffff");
  const [userMessageBgColor, setUserMessageBgColor] = useState("#3b82f6");
  const [sendButtonColor, setSendButtonColor] = useState("#3b82f6");
  const [startChatColor, setStartChatColor] = useState("#3b82f6");
  const [startChatPosition, setStartChatPosition] = useState<"left" | "right">("right");
  const [soundOnAppear, setSoundOnAppear] = useState("none");
  const [hideFastBotsBranding, setHideFastBotsBranding] = useState(false);
  const [customBranding, setCustomBranding] = useState(false);
  const [customBrandingText, setCustomBrandingText] = useState("Powered by");
  const [customBrandingLinkText, setCustomBrandingLinkText] = useState("LaPCY AI");
  const [customBrandingLink, setCustomBrandingLink] = useState("https://www.lapcyai.com");
  const [chatbotAvatar, setChatbotAvatar] = useState<string | null>(null);
  const [startChatIcon, setStartChatIcon] = useState<string | null>(null);
  const [isAvatarUploading, setIsAvatarUploading] = useState(false);
  const [isIconUploading, setIsIconUploading] = useState(false);
  
  // Lead collection form state
  const [showLeadForm, setShowLeadForm] = useState(true);
  const [leadFormTitle, setLeadFormTitle] = useState("Get in touch");
  const [messagesBeforeForm, setMessagesBeforeForm] = useState(2);
  const [requireFormToStart, setRequireFormToStart] = useState(false);
  
  // Form field settings
  const [namePlaceholder, setNamePlaceholder] = useState("Full Name");
  const [nameRequired, setNameRequired] = useState(true);
  const [showName, setShowName] = useState(true);
  
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [emailRequired, setEmailRequired] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  
  const [phonePlaceholder, setPhonePlaceholder] = useState("Phone Number");
  const [phoneRequired, setPhoneRequired] = useState(false);
  const [showPhone, setShowPhone] = useState(true);
  
  const [messagePlaceholder, setMessagePlaceholder] = useState("Message");
  const [messageRequired, setMessageRequired] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  
  const [submitButtonText, setSubmitButtonText] = useState("CONTINUE");
  const [submitButtonColor, setSubmitButtonColor] = useState("#3b82f6");
  
  const [thankYouTitle, setThankYouTitle] = useState("Thank you");
  const [thankYouMessage, setThankYouMessage] = useState("Thank you for your message. We will get back to you as soon as possible.");
  
  const [suggestions, setSuggestions] = useState("");
  const [queryPlaceholder, setQueryPlaceholder] = useState("");
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

  const handleSuggestionClick = (suggestion: string) => {
    setSelectedSuggestion(suggestion);
  };

  const getBotResponse = (suggestion: string) => {
    // Generate appropriate bot responses based on the suggestion
    const responses: { [key: string]: string } = {
      "What services do you offer?": "We offer a comprehensive range of services including web development, mobile apps, digital marketing, and AI solutions. Our team specializes in creating custom solutions tailored to your business needs.",
      "How can you help us get first 1,000 paying users?": "We can help you acquire your first 1,000 paying users through strategic digital marketing campaigns, conversion optimization, and growth hacking techniques. Our proven strategies have helped many startups scale rapidly.",
      "What are your pricing plans?": "We offer flexible pricing plans starting from $29/month for basic packages, $99/month for professional solutions, and custom enterprise pricing for larger organizations. Each plan includes different features and support levels.",
      "Do you provide 24/7 support?": "Yes, we provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team is always ready to help you with any questions or issues.",
      "Can you integrate with our existing systems?": "Absolutely! We specialize in seamless integrations with existing systems. Our team can integrate with CRMs, ERPs, payment gateways, and other business tools you're currently using."
    };
    
    return responses[suggestion] || "Thank you for your question! I'd be happy to help you with that. Let me connect you with our team for a detailed response.";
  };

  const handleSave = () => {
    console.log("Saving appearance settings:", {
      chatbotTitle,
      welcomeMessage,
      showWelcomePopup,
      welcomePopupTime,
      chatWindowBgColor,
      chatMessageBgColor,
      userMessageBgColor,
      sendButtonColor,
      startChatColor,
      startChatPosition,
      soundOnAppear,
      hideFastBotsBranding,
      customBranding,
      customBrandingText,
      customBrandingLinkText,
      customBrandingLink,
      chatbotAvatar,
      startChatIcon,
      showLeadForm,
      leadFormTitle,
      messagesBeforeForm,
      requireFormToStart,
      namePlaceholder,
      nameRequired,
      showName,
      emailPlaceholder,
      emailRequired,
      showEmail,
      phonePlaceholder,
      phoneRequired,
      showPhone,
      messagePlaceholder,
      messageRequired,
      showMessage,
      submitButtonText,
      submitButtonColor,
      thankYouTitle,
      thankYouMessage,
      suggestions,
      queryPlaceholder,
      selectedSuggestion
    });
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
            <div className="text-lg font-semibold text-gray-900">SaasPedia</div>
            <div className="text-sm text-gray-500">{chatbotId || "Appearance"}</div>
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
              <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200 cursor-pointer">
                <Eye className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Appearance</span>
              </div>
              <Link to="/not-found" className="block">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <FileSpreadsheet className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">Embed / Share</span>
                </div>
              </Link>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Appearance</h1>
            <p className="text-lg text-gray-600">You can customise the look and feel of your chatbot interface here.</p>
          </div>
        </div>

        {/* Main Content with Different Scroll Areas */}
        <div className="flex">
          {/* Left Column - Scrollable Settings */}
          <div className="flex-1 px-8 py-8 overflow-y-auto h-[calc(100vh-200px)]">
            <div className="max-w-none space-y-8">
              {/* Title Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Title</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title to be shown in the chat window (Leave empty to hide header)
                    </label>
                    <Input
                      value={chatbotTitle}
                      onChange={(e) => setChatbotTitle(e.target.value)}
                      placeholder="Enter a title to be shown in the header"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Welcome Message Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Welcome Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      This will be shown as the first message from bot when a new chat begins. Leave it empty if you want to disable.
                    </label>
                    <Textarea
                      value={welcomeMessage}
                      onChange={(e) => setWelcomeMessage(e.target.value)}
                      placeholder="Enter welcome message"
                      rows={3}
                    />
                    <p className="text-sm text-gray-500 mt-2">Click on clear-chat icon to see this message.</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Show the Welcome Message Popup</label>
                      <p className="text-xs text-gray-500 mt-1">
                        {showWelcomePopup ? "✅ Welcome message will appear after delay" : "❌ Welcome message is disabled"}
                      </p>
                    </div>
                    <Switch
                      checked={showWelcomePopup}
                      onCheckedChange={setShowWelcomePopup}
                    />
                  </div>
                  
                  {showWelcomePopup && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time (in seconds)
                      </label>
                      <Input
                        type="number"
                        value={welcomePopupTime}
                        onChange={(e) => setWelcomePopupTime(parseInt(e.target.value))}
                        min="1"
                        max="10"
                        className="w-32"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Color Customization */}
              <Card>
                <CardHeader>
                  <CardTitle>Color Customization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Chat window background color
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={chatWindowBgColor}
                        onChange={(e) => setChatWindowBgColor(e.target.value)}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
                      />
                      <span className="text-sm text-gray-600">Current: {chatWindowBgColor}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ChatBot chat message background color
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={chatMessageBgColor}
                        onChange={(e) => setChatMessageBgColor(e.target.value)}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
                      />
                      <span className="text-sm text-gray-600">Current: {chatMessageBgColor}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      User chat message background color
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={userMessageBgColor}
                        onChange={(e) => setUserMessageBgColor(e.target.value)}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
                      />
                      <span className="text-sm text-gray-600">Current: {userMessageBgColor}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Send message button color
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={sendButtonColor}
                        onChange={(e) => setSendButtonColor(e.target.value)}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
                      />
                      <span className="text-sm text-gray-600">Current: {sendButtonColor}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start chat circle color
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={startChatColor}
                        onChange={(e) => setStartChatColor(e.target.value)}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
                      />
                      <span className="text-sm text-gray-600">Current: {startChatColor}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Chatbot Avatar */}
              <Card>
                <CardHeader>
                  <CardTitle>Chatbot Avatar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload your avatar profile image to display in the chat window. Leave empty if you don't want an avatar.
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                          {isAvatarUploading ? (
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                              <span className="text-xs text-gray-500">Uploading...</span>
                            </div>
                          ) : chatbotAvatar ? (
                            <>
                              <img 
                                src={chatbotAvatar} 
                                alt="Chatbot Avatar" 
                                className="w-full h-full object-cover"
                              />
                              <button
                                onClick={() => setChatbotAvatar("")}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                              >
                                ×
                              </button>
                            </>
                          ) : (
                            <Upload className="w-8 h-8 text-gray-400" />
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            console.log("Avatar file input changed:", e.target.files);
                            const file = e.target.files?.[0];
                            if (file) {
                              console.log("Avatar file selected:", file.name, file.type);
                              setIsAvatarUploading(true);
                              const reader = new FileReader();
                              reader.onload = (e) => {
                                console.log("Avatar file loaded:", e.target?.result);
                                setChatbotAvatar(e.target?.result as string);
                                setIsAvatarUploading(false);
                              };
                              reader.onerror = () => {
                                console.error("Error reading avatar file");
                                setIsAvatarUploading(false);
                                alert("Error uploading avatar. Please try again.");
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          className="hidden"
                          id="chatbot-avatar-upload"
                        />
                        <label 
                          htmlFor="chatbot-avatar-upload"
                          className="inline-block"
                        >
                          <Button 
                            variant="outline" 
                            className="cursor-pointer"
                            onClick={() => {
                              console.log("Avatar upload button clicked");
                              document.getElementById('chatbot-avatar-upload')?.click();
                            }}
                          >
                            {isAvatarUploading ? "Uploading..." : chatbotAvatar ? "Change Avatar" : "Upload Avatar"}
                          </Button>
                        </label>
                        <p className="text-xs text-gray-500">
                          Click to select an image file
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Start Chat Icon */}
              <Card>
                <CardHeader>
                  <CardTitle>Start Chat Icon</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload image to display in the start chat circle. Leave empty to use the default image.
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                          {isIconUploading ? (
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                              <span className="text-xs text-gray-500">Uploading...</span>
                            </div>
                          ) : startChatIcon ? (
                            <>
                              <img 
                                src={startChatIcon} 
                                alt="Start Chat Icon" 
                                className="w-full h-full object-cover"
                              />
                              <button
                                onClick={() => setStartChatIcon("")}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                              >
                                ×
                              </button>
                            </>
                          ) : (
                            <Bot className="w-8 h-8 text-gray-400" />
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            console.log("Start chat icon file input changed:", e.target.files);
                            const file = e.target.files?.[0];
                            if (file) {
                              console.log("Start chat icon file selected:", file.name, file.type);
                              setIsIconUploading(true);
                              const reader = new FileReader();
                              reader.onload = (e) => {
                                console.log("Start chat icon file loaded:", e.target?.result);
                                setStartChatIcon(e.target?.result as string);
                                setIsIconUploading(false);
                              };
                              reader.onerror = () => {
                                console.error("Error reading start chat icon file");
                                setIsIconUploading(false);
                                alert("Error uploading icon. Please try again.");
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          className="hidden"
                          id="start-chat-icon-upload"
                        />
                        <label 
                          htmlFor="start-chat-icon-upload"
                          className="inline-block"
                        >
                          <Button 
                            variant="outline" 
                            className="cursor-pointer"
                            onClick={() => {
                              console.log("Start chat icon upload button clicked");
                              document.getElementById('start-chat-icon-upload')?.click();
                            }}
                          >
                            {isIconUploading ? "Uploading..." : startChatIcon ? "Change Icon" : "Upload Icon"}
                          </Button>
                        </label>
                        <p className="text-xs text-gray-500">
                          Click to select an image file
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Position and Sound */}
              <Card>
                <CardHeader>
                  <CardTitle>Position & Sound</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Chat Icon Position
                    </label>
                    <div className="flex gap-2">
                      <Button
                        variant={startChatPosition === "left" ? "default" : "outline"}
                        onClick={() => setStartChatPosition("left")}
                        className="flex-1"
                      >
                        Left
                      </Button>
                      <Button
                        variant={startChatPosition === "right" ? "default" : "outline"}
                        onClick={() => setStartChatPosition("right")}
                        className="flex-1"
                      >
                        Right
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Choose a sound to play when the widget appears
                    </label>
                    <select
                      value={soundOnAppear}
                      onChange={(e) => setSoundOnAppear(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="none">None</option>
                      <option value="notification">Notification</option>
                      <option value="chime">Chime</option>
                      <option value="bell">Bell</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              {/* Branding */}
              <Card>
                <CardHeader>
                  <CardTitle>Branding</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Hide the FastBots branding</label>
                    </div>
                    <Switch
                      checked={hideFastBotsBranding}
                      onCheckedChange={setHideFastBotsBranding}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Custom branding</label>
                    </div>
                    <Switch
                      checked={customBranding}
                      onCheckedChange={setCustomBranding}
                    />
                  </div>
                  
                  {customBranding && (
                    <div className="space-y-4 pt-4 border-t border-gray-200">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Action text
                        </label>
                        <Input
                          value={customBrandingText || "Powered by"}
                          onChange={(e) => setCustomBrandingText(e.target.value)}
                          placeholder="Enter action text"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Link text
                        </label>
                        <Input
                          value={customBrandingLinkText || "LaPCY AI"}
                          onChange={(e) => setCustomBrandingLinkText(e.target.value)}
                          placeholder="Enter link text"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Link
                        </label>
                        <Input
                          value={customBrandingLink || "https://www.lapcyai.com"}
                          onChange={(e) => setCustomBrandingLink(e.target.value)}
                          placeholder="Enter URL"
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Lead Collection Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Lead Collection Form</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Show the Lead Collection Form</label>
                    </div>
                    <Switch
                      checked={showLeadForm}
                      onCheckedChange={setShowLeadForm}
                    />
                  </div>
                  
                  {showLeadForm && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Lead Form Title
                        </label>
                        <Input
                          value={leadFormTitle}
                          onChange={(e) => setLeadFormTitle(e.target.value)}
                          placeholder="Enter form title"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of messages after which to show the lead collection form
                        </label>
                        <Input
                          type="number"
                          value={messagesBeforeForm}
                          onChange={(e) => setMessagesBeforeForm(parseInt(e.target.value))}
                          min="1"
                          max="10"
                        />
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Checkbox
                          checked={requireFormToStart}
                          onCheckedChange={(checked) => setRequireFormToStart(checked as boolean)}
                        />
                        <label className="text-sm text-gray-700">
                          OR User must complete lead form to start chat
                        </label>
                      </div>
                      
                      {/* Form Fields Configuration */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium text-gray-700">Form Fields</h4>
                        
                        {/* Name Field */}
                        {showName && (
                          <div className="p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">Name input</span>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                  <Switch
                                    checked={nameRequired}
                                    onCheckedChange={setNameRequired}
                                  />
                                  <span className="text-xs text-gray-600">Required</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Checkbox
                                    checked={showName}
                                    onCheckedChange={(checked) => setShowName(checked as boolean)}
                                  />
                                  <span className="text-xs text-gray-600">Show Name</span>
                                </div>
                              </div>
                            </div>
                            <Input
                              value={namePlaceholder}
                              onChange={(e) => setNamePlaceholder(e.target.value)}
                              placeholder="Enter placeholder text"
                            />
                          </div>
                        )}
                        
                        {/* Email Field */}
                        {showEmail && (
                          <div className="p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">Email input</span>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                  <Switch
                                    checked={emailRequired}
                                    onCheckedChange={setEmailRequired}
                                  />
                                  <span className="text-xs text-gray-600">Required</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Checkbox
                                    checked={showEmail}
                                    onCheckedChange={(checked) => setShowEmail(checked as boolean)}
                                  />
                                  <span className="text-xs text-gray-600">Show Email</span>
                                </div>
                              </div>
                            </div>
                            <Input
                              value={emailPlaceholder}
                              onChange={(e) => setEmailPlaceholder(e.target.value)}
                              placeholder="Enter placeholder text"
                            />
                          </div>
                        )}
                        
                        {/* Phone Field */}
                        {showPhone && (
                          <div className="p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">Phone number input</span>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                  <Switch
                                    checked={phoneRequired}
                                    onCheckedChange={setPhoneRequired}
                                  />
                                  <span className="text-xs text-gray-600">Required</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Checkbox
                                    checked={showPhone}
                                    onCheckedChange={(checked) => setShowPhone(checked as boolean)}
                                  />
                                  <span className="text-xs text-gray-600">Show Phone Number</span>
                                </div>
                              </div>
                            </div>
                            <Input
                              value={phonePlaceholder}
                              onChange={(e) => setPhonePlaceholder(e.target.value)}
                              placeholder="Enter placeholder text"
                            />
                          </div>
                        )}
                        
                        {/* Message Field */}
                        {showMessage && (
                          <div className="p-4 border border-gray-200 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">Message input</span>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                  <Switch
                                    checked={messageRequired}
                                    onCheckedChange={setMessageRequired}
                                  />
                                  <span className="text-xs text-gray-600">Required</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Checkbox
                                    checked={showMessage}
                                    onCheckedChange={(checked) => setShowMessage(checked as boolean)}
                                  />
                                  <span className="text-xs text-gray-600">Show Message</span>
                                </div>
                              </div>
                            </div>
                            <Input
                              value={messagePlaceholder}
                              onChange={(e) => setMessagePlaceholder(e.target.value)}
                              placeholder="Enter placeholder text"
                            />
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Submit button text
                        </label>
                        <Input
                          value={submitButtonText}
                          onChange={(e) => setSubmitButtonText(e.target.value)}
                          placeholder="Enter button text"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Submit button color
                        </label>
                        <div className="flex items-center gap-3">
                          <input
                            type="color"
                            value={submitButtonColor}
                            onChange={(e) => setSubmitButtonColor(e.target.value)}
                            className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
                          />
                          <span className="text-sm text-gray-600">Current: {submitButtonColor}</span>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Thank You Message */}
              <Card>
                <CardHeader>
                  <CardTitle>Thank You Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Thank you message title
                    </label>
                    <Input
                      value={thankYouTitle}
                      onChange={(e) => setThankYouTitle(e.target.value)}
                      placeholder="Enter thank you title"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Thank you message body
                    </label>
                    <Textarea
                      value={thankYouMessage}
                      onChange={(e) => setThankYouMessage(e.target.value)}
                      placeholder="Enter thank you message"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Suggestions */}
              <Card>
                <CardHeader>
                  <CardTitle>Suggestions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Suggested questions to be shown to user (1 suggestion per line). Leave empty to disable.
                    </label>
                    <Textarea
                      value={suggestions}
                      onChange={(e) => setSuggestions(e.target.value)}
                      placeholder="(no suggestions when empty)"
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Placeholder to be shown in the query input
                    </label>
                    <Input
                      value={queryPlaceholder}
                      onChange={(e) => setQueryPlaceholder(e.target.value)}
                      placeholder="Enter placeholder text"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Save Button */}
              <div className="pt-4 pb-8">
                <Button onClick={handleSave} className="w-full bg-blue-600 hover:bg-blue-700">
                  SAVE
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Static Chatbot Preview */}
          <div className="w-96 bg-gray-50 border-l border-gray-200 p-6">
            <div className="sticky top-8">
              <Card className="w-full">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center text-lg">{chatbotTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Chatbot Widget Preview */}
                  <div 
                    className="bg-gray-100 rounded-lg p-4 min-h-[500px] max-h-[600px] flex flex-col"
                    style={{ backgroundColor: chatWindowBgColor }}
                  >
                    {/* Chat Header */}
                    <div className="flex items-center justify-between mb-4 flex-shrink-0">
                      <div className="flex items-center gap-2">
                        {chatbotAvatar ? (
                          <img 
                            src={chatbotAvatar} 
                            alt="Chatbot Avatar" 
                            className="w-6 h-6 rounded-full object-cover"
                          />
                        ) : (
                          <Bot className="w-6 h-6 text-blue-600" />
                        )}
                        <span className="text-sm font-medium">{chatbotTitle}</span>
                      </div>
                      <X className="w-4 h-4 text-gray-500 cursor-pointer" />
                    </div>

                    {/* Scrollable Chat Content */}
                    <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
                      {/* Chat Messages */}
                      <div className="space-y-3">
                        {showWelcomePopup && welcomeMessage.trim() && (
                          <div className="flex items-start gap-2">
                            {chatbotAvatar ? (
                              <img 
                                src={chatbotAvatar} 
                                alt="Chatbot Avatar" 
                                className="w-6 h-6 rounded-full object-cover mt-1 flex-shrink-0"
                              />
                            ) : (
                              <Bot className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                            )}
                            <div 
                              className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm"
                              style={{ backgroundColor: chatMessageBgColor }}
                            >
                              <p className="text-sm text-gray-800">{welcomeMessage}</p>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-start gap-2 justify-end">
                          <div 
                            className="bg-blue-500 rounded-lg p-3 max-w-[80%] shadow-sm"
                            style={{ backgroundColor: userMessageBgColor }}
                          >
                            <p className="text-sm text-white">What services do you provide?</p>
                          </div>
                          <User className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                        </div>
                      </div>

                      {/* Suggested Questions */}
                      {suggestions.trim() && (
                        <div className="mt-4">
                          <div className="flex flex-wrap gap-2">
                            {suggestions.split('\n').filter(s => s.trim()).map((suggestion, index) => (
                              <button
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs rounded-full transition-colors cursor-pointer"
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Bot Response to Suggestion */}
                      {selectedSuggestion && (
                        <div className="flex items-start gap-2">
                          {chatbotAvatar ? (
                            <img 
                              src={chatbotAvatar} 
                              alt="Chatbot Avatar" 
                              className="w-6 h-6 rounded-full object-cover mt-1 flex-shrink-0"
                            />
                          ) : (
                            <Bot className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                          )}
                          <div 
                            className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm"
                            style={{ backgroundColor: chatMessageBgColor }}
                          >
                            <p className="text-sm text-gray-800">
                              {getBotResponse(selectedSuggestion)}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Lead Collection Form */}
                      {showLeadForm && (
                        <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                          <h4 className="font-medium text-gray-900 mb-3">{leadFormTitle}</h4>
                          <div className="space-y-3">
                            {showName && (
                              <div>
                                <Input
                                  placeholder={namePlaceholder}
                                  className="w-full text-sm"
                                  required={nameRequired}
                                />
                                {nameRequired && <span className="text-red-500 text-xs">*</span>}
                              </div>
                            )}
                            
                            {showEmail && (
                              <div>
                                <Input
                                  type="email"
                                  placeholder={emailPlaceholder}
                                  className="w-full text-sm"
                                  required={emailRequired}
                                />
                                {emailRequired && <span className="text-red-500 text-xs">*</span>}
                              </div>
                            )}
                            
                            {showPhone && (
                              <div>
                                <Input
                                  type="tel"
                                  placeholder={phonePlaceholder}
                                  className="w-full text-sm"
                                  required={phoneRequired}
                                />
                                {phoneRequired && <span className="text-red-500 text-xs">*</span>}
                              </div>
                            )}
                            
                            {showMessage && (
                              <div>
                                <Textarea
                                  placeholder={messagePlaceholder}
                                  className="w-full text-sm"
                                  rows={2}
                                  required={messageRequired}
                                />
                                {messageRequired && <span className="text-red-500 text-xs">*</span>}
                              </div>
                            )}
                            
                            <Button 
                              className="w-full text-sm"
                              style={{ backgroundColor: submitButtonColor }}
                            >
                              {submitButtonText}
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Thank You Message */}
                      <div className="bg-white rounded-lg p-3 mb-4 shadow-sm">
                        <div className="flex items-start gap-2">
                          {chatbotAvatar ? (
                            <img 
                              src={chatbotAvatar} 
                              alt="Chatbot Avatar" 
                              className="w-5 h-5 rounded-full object-cover mt-1 flex-shrink-0"
                            />
                          ) : (
                            <Bot className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                          )}
                          <div>
                            <h5 className="font-medium text-gray-900 text-sm">{thankYouTitle}</h5>
                            <p className="text-sm text-gray-600">{thankYouMessage}</p>
                          </div>
                        </div>
                      </div>

                      {/* Additional chat messages to demonstrate scrolling */}
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          {chatbotAvatar ? (
                            <img 
                              src={chatbotAvatar} 
                              alt="Chatbot Avatar" 
                              className="w-6 h-6 rounded-full object-cover mt-1 flex-shrink-0"
                            />
                          ) : (
                            <Bot className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                          )}
                          <div 
                            className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm"
                            style={{ backgroundColor: chatMessageBgColor }}
                          >
                            <p className="text-sm text-gray-800">I can help you with various services including customer support, product information, and technical assistance.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2 justify-end">
                          <div 
                            className="bg-blue-500 rounded-lg p-3 max-w-[80%] shadow-sm"
                            style={{ backgroundColor: userMessageBgColor }}
                          >
                            <p className="text-sm text-white">That sounds great! Can you tell me more about your pricing?</p>
                          </div>
                          <User className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                        </div>
                        
                        <div className="flex items-start gap-2">
                          {chatbotAvatar ? (
                            <img 
                              src={chatbotAvatar} 
                              alt="Chatbot Avatar" 
                              className="w-6 h-6 rounded-full object-cover mt-1 flex-shrink-0"
                            />
                          ) : (
                            <Bot className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                          )}
                          <div 
                            className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm"
                            style={{ backgroundColor: chatMessageBgColor }}
                          >
                            <p className="text-sm text-gray-800">Of course! We offer flexible pricing plans starting from $29/month. Would you like me to send you our detailed pricing guide?</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chat Input - Fixed at Bottom */}
                    <div className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm flex-shrink-0">
                      <Menu className="w-4 h-4 text-gray-500 cursor-pointer" />
                      <Input
                        placeholder={queryPlaceholder || "Ask your question here..."}
                        className="flex-1 text-sm border-0 focus:ring-0"
                      />
                      <Send 
                        className="w-4 h-4 text-gray-500 cursor-pointer"
                        style={{ color: sendButtonColor }}
                      />
                    </div>

                    {/* Branding */}
                    {!hideFastBotsBranding && (
                      <div className="text-center mt-3 flex-shrink-0">
                        {customBranding ? (
                          <p className="text-xs text-gray-500">
                            {customBrandingText} <a href={customBrandingLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{customBrandingLinkText}</a>
                          </p>
                        ) : (
                          <p className="text-xs text-gray-500">Powered by FastBots</p>
                        )}
                      </div>
                    )}
                    
                    {/* Custom Branding (shown when FastBots branding is hidden) */}
                    {hideFastBotsBranding && customBranding && (
                      <div className="text-center mt-3 flex-shrink-0">
                        <p className="text-xs text-gray-500">
                          {customBrandingText} <a href={customBrandingLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{customBrandingLinkText}</a>
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Floating Start Chat Button */}
              <div 
                className="absolute bottom-4 w-14 h-14 rounded-full shadow-lg cursor-pointer flex items-center justify-center overflow-hidden"
                style={{ 
                  backgroundColor: startChatColor,
                  left: startChatPosition === "left" ? "1rem" : "auto",
                  right: startChatPosition === "right" ? "1rem" : "auto"
                }}
              >
                {startChatIcon ? (
                  <img 
                    src={startChatIcon} 
                    alt="Start Chat Icon" 
                    className="w-8 h-8 object-cover"
                  />
                ) : (
                  <Bot className="w-6 h-6 text-white" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
