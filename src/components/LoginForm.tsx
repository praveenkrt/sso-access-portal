
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SSOLogin from "./SSOLogin";
import RequestAccess from "./RequestAccess";

const LoginForm = () => {
  const [activeTab, setActiveTab] = useState("sso");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mx-auto flex items-center justify-center shadow-lg">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-sm"></div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
        <p className="text-gray-600">Sign in to your account to continue</p>
      </div>

      {/* Login Card */}
      <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-center text-xl font-semibold">Access Your Account</CardTitle>
          <CardDescription className="text-center text-gray-600">
            Choose your preferred sign-in method
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100">
              <TabsTrigger 
                value="sso" 
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
              >
                SSO Login
              </TabsTrigger>
              <TabsTrigger 
                value="request" 
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
              >
                Request Access
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="sso" className="mt-0">
              <SSOLogin />
            </TabsContent>
            
            <TabsContent value="request" className="mt-0">
              <RequestAccess />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500">
        <p>Need help? <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Contact support</a></p>
      </div>
    </div>
  );
};

export default LoginForm;
