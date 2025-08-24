import { useState } from "react";
import { Button } from "@/components/ui/button";
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
  Download,
  Bot,
  Clock,
  BarChart3,
  Activity,
  Calendar,
  Target,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const ProfileDashboard = () => {
  const [userStats] = useState({
    totalChatbots: 3,
    totalConversations: 1247,
    totalLeads: 89,
    activeIntegrations: 5
  });

  const [recentActivity] = useState([
    {
      id: 1,
      type: "chatbot_created",
      title: "E-commerce Bot Created",
      description: "New chatbot 'E-commerce Bot' was created successfully",
      timestamp: "2 hours ago",
      icon: Bot
    },
    {
      id: 2,
      type: "integration_added",
      title: "WhatsApp Integration",
      description: "WhatsApp integration was added to 'Customer Support Bot'",
      timestamp: "1 day ago",
      icon: MessageSquare
    },
    {
      id: 3,
      type: "training_completed",
      title: "Training Completed",
      description: "Training completed for 'Product Knowledge Bot' with 15 documents",
      timestamp: "3 days ago",
      icon: Check
    },
    {
      id: 4,
      type: "lead_generated",
      title: "New Lead Captured",
      description: "Lead captured from 'Sales Bot' - John Doe (john@example.com)",
      timestamp: "5 days ago",
      icon: Users
    }
  ]);

  const [chatbots] = useState([
    {
      id: "clz871mpz019enibcjo18jgc6",
      name: "SaasPedia",
      status: "active",
      conversations: 456,
      leads: 23,
      lastActive: "2 hours ago",
      type: "Customer Support"
    },
    {
      id: "clz871mpz019enibcjo18jgc7",
      name: "E-commerce Bot",
      status: "active",
      conversations: 234,
      leads: 15,
      lastActive: "1 day ago",
      type: "Sales"
    },
    {
      id: "clz871mpz019enibcjo18jgc8",
      name: "Product Knowledge",
      status: "training",
      conversations: 89,
      leads: 8,
      lastActive: "3 days ago",
      type: "Information"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar (Browser-like) */}
      <div className="h-8 bg-gray-800 flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Application Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="text-xl font-bold text-gray-900">LaPCY AI</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-gray-700">John Doe</span>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John! 👋</h1>
          <p className="text-gray-600">Here's what's happening with your LaPCY AI chatbots today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Chatbots</p>
                  <p className="text-2xl font-bold text-gray-900">{userStats.totalChatbots}</p>
                </div>
                <Bot className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Conversations</p>
                  <p className="text-2xl font-bold text-gray-900">{userStats.totalConversations}</p>
                </div>
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Leads Generated</p>
                  <p className="text-2xl font-bold text-gray-900">{userStats.totalLeads}</p>
                </div>
                <Users className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Integrations</p>
                  <p className="text-2xl font-bold text-gray-900">{userStats.activeIntegrations}</p>
                </div>
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* New Chatbot Section */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to build something amazing?</h2>
              <p className="text-gray-600 mb-6">Create a new AI chatbot to help your business grow</p>
              <Link to="/new">
                <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                  <Plus className="w-5 h-5 mr-2" />
                  New Chatbot
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <activity.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{activity.title}</h4>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Your Chatbots */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-green-600" />
                Your Chatbots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {chatbots.map((chatbot) => (
                  <div key={chatbot.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{chatbot.name}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        chatbot.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {chatbot.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{chatbot.type}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{chatbot.conversations} conversations</span>
                      <span>{chatbot.leads} leads</span>
                      <span>Last active: {chatbot.lastActive}</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Link to={`/chatbot/${chatbot.id}`}>
                        <Button variant="outline" size="sm">View</Button>
                      </Link>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/integrations">
                <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center gap-2">
                  <Zap className="w-6 h-6" />
                  <span>Manage Integrations</span>
                </Button>
              </Link>
              <Link to="/analytics">
                <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center gap-2">
                  <BarChart3 className="w-6 h-6" />
                  <span>View Analytics</span>
                </Button>
              </Link>
              <Link to="/settings">
                <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center gap-2">
                  <Settings className="w-6 h-6" />
                  <span>Settings</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileDashboard;
