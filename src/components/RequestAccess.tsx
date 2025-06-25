
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Building, MessageSquare, Send, Loader2 } from "lucide-react";

const RequestAccess = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    reason: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Access Request Submitted",
        description: "We'll review your request and get back to you within 24 hours.",
      });
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        company: "",
        reason: ""
      });
    }, 2000);
  };

  const isFormValid = formData.fullName && formData.email && formData.company && formData.reason;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto flex items-center justify-center">
          <User className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Request Account Access</h3>
        <p className="text-sm text-gray-600">
          Fill out the form below and we'll get you set up
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
            Full Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              className="pl-10 h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleInputChange}
              className="pl-10 h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-sm font-medium text-gray-700">
            Company / Organization
          </Label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Acme Corporation"
              value={formData.company}
              onChange={handleInputChange}
              className="pl-10 h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="reason" className="text-sm font-medium text-gray-700">
            Reason for Access
          </Label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
            <Textarea
              id="reason"
              name="reason"
              placeholder="Please explain why you need access to this platform..."
              value={formData.reason}
              onChange={handleInputChange}
              className="pl-10 pt-3 min-h-[100px] border-gray-200 focus:border-green-500 focus:ring-green-500 resize-none"
              required
            />
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          disabled={isLoading || !isFormValid}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting Request...
            </>
          ) : (
            <>
              Submit Access Request
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      <div className="text-center">
        <p className="text-xs text-gray-500">
          Requests are typically processed within 24 hours during business days
        </p>
      </div>
    </div>
  );
};

export default RequestAccess;
