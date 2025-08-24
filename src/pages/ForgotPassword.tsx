import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="text-2xl font-bold text-purple-600">LaPCY AI</span>
        </div>
      </div>

      {/* Forgot Password Card */}
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Forgot your password?</h1>
        </div>

        {/* Instructions */}
        <p className="text-gray-600 text-center mb-6">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        {/* Password Reset Form */}
        <form className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="mt-1 w-full border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md"
          >
            Send reset password email
          </Button>
        </form>

        {/* Back to Login Link */}
        <div className="mt-6 text-center">
          <Link 
            to="/login" 
            className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
