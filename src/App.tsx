import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
import NewChatbot from "./pages/NewChatbot";
import TrainFromLink from "./pages/TrainFromLink";
import ProfileDashboard from "./pages/ProfileDashboard";
import ChatbotPage from "./pages/ChatbotPage";
import Settings from "./pages/Settings";
import Appearance from "./pages/Appearance";
import TextTraining from "./pages/TextTraining";
import QAPage from "./pages/QAPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new" element={<NewChatbot />} />
          <Route path="/train" element={<TrainFromLink />} />
          <Route path="/profile" element={<ProfileDashboard />} />
          <Route path="/chatbot/:chatbotId" element={<ChatbotPage />} />
          <Route path="/settings/:chatbotId" element={<Settings />} />
          <Route path="/appearance/:chatbotId" element={<Appearance />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/text-training/:chatbotId" element={<TextTraining />} />
          <Route path="/text" element={<TextTraining />} />
          <Route path="/qa/:chatbotId" element={<QAPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
