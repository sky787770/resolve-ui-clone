import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Trash2,
  Plus
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

interface QAEntry {
  id: string;
  question: string;
  answer: string;
}

const QAPage = () => {
  const { chatbotId } = useParams();
  const [qaEntries, setQaEntries] = useState<QAEntry[]>([
    {
      id: "1",
      question: "What is LaPCY AI?",
      answer: "LaPCY AI is a company, that provides AI solutions to businesses, founded in 2025."
    }
  ]);

  const addNewQA = () => {
    const newEntry: QAEntry = {
      id: Date.now().toString(),
      question: "",
      answer: ""
    };
    setQaEntries([...qaEntries, newEntry]);
  };

  const updateQA = (id: string, field: 'question' | 'answer', value: string) => {
    setQaEntries(qaEntries.map(entry => 
      entry.id === id ? { ...entry, [field]: value } : entry
    ));
  };

  const deleteQA = (id: string) => {
    setQaEntries(qaEntries.filter(entry => entry.id !== id));
  };

  const deleteAllQA = () => {
    setQaEntries([]);
  };

  const handleSave = () => {
    console.log("Saving Q&A entries:", qaEntries);
  };

  const getTotalCharacters = () => {
    return qaEntries.reduce((total, entry) => total + entry.answer.length, 0);
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
            <div className="text-sm text-gray-500">Q&A</div>
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
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200 cursor-pointer">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Q&A</span>
                </div>
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Q&A</h1>
            <p className="text-lg text-gray-600">Use this section to add frequently asked questions and the responses the chatbot should provide.</p>
          </div>
        </div>

        {/* Main Content with Independent Scrolling */}
        <div className="px-8 py-8 overflow-y-auto h-[calc(100vh-200px)]">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <Button 
                onClick={deleteAllQA}
                variant="destructive"
                className="bg-red-600 hover:bg-red-700"
              >
                DELETE ALL
              </Button>
              <Button 
                onClick={addNewQA}
                className="bg-green-600 hover:bg-green-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                + ADD
              </Button>
            </div>

            {/* Q&A Entries Card */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {qaEntries.map((entry) => (
                    <div key={entry.id} className="relative border border-gray-200 rounded-lg p-4">
                      {/* Delete Button */}
                      <button
                        onClick={() => deleteQA(entry.id)}
                        className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      
                      {/* Question Field */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Question
                        </label>
                        <Input
                          value={entry.question}
                          onChange={(e) => updateQA(entry.id, 'question', e.target.value)}
                          placeholder="Enter your question here..."
                          className="w-full"
                        />
                      </div>
                      
                      {/* Answer Field */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Answer
                        </label>
                        <Textarea
                          value={entry.answer}
                          onChange={(e) => updateQA(entry.id, 'answer', e.target.value)}
                          placeholder="Enter the answer here..."
                          className="w-full min-h-[100px]"
                          rows={4}
                        />
                      </div>
                    </div>
                  ))}
                  
                  {qaEntries.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      No Q&A entries yet. Click "+ ADD" to create your first FAQ.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Footer Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  {/* Character Count */}
                  <div className="text-sm text-gray-600">
                    {getTotalCharacters()} characters
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

export default QAPage;
