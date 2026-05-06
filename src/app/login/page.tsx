
"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, User, ShieldAlert, Loader2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { toast } from "@/hooks/use-toast";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const headerImage = PlaceHolderImages.find(img => img.id === 'site-header');
  const footerImage = PlaceHolderImages.find(img => img.id === 'site-footer');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Artificial delay for realism
    await new Promise(resolve => setTimeout(resolve, 800));

    // MOCK LOGIN VALIDATION
    if (userId === "Id1.Bhattacharjee75" && password === "B@1975") {
      localStorage.setItem('khata_admin_auth', 'true');
      toast({
        title: "Login Successful",
        description: "Welcome back to the Administrative Portal.",
      });
      router.push('/');
      router.refresh(); // Ensure components re-read auth state
    } else {
      toast({
        variant: "destructive",
        title: "Authentication Failed",
        description: "Invalid Administrative ID or Password.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* HEADER */}
      <div className="w-full bg-white border-b overflow-hidden">
        <div className="w-full relative h-[80px] md:h-[130px]">
          <Image 
            src={headerImage?.imageUrl || "/Screenshot 2025-08-21 171256 - Copy.png"} 
            alt="KhataQuest Header"
            fill 
            className="object-contain object-center px-0"
            priority
          />
        </div>
      </div>

      <div className="w-full bg-[#1a73e8] py-2 shadow-md">
        <div className="max-w-6xl mx-auto px-4 text-white text-xs md:text-sm font-bold uppercase tracking-widest flex items-center gap-2">
          <ShieldAlert className="h-4 w-4" />
          Administrative Login Portal
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-4 bg-slate-50">
        <Card className="w-full max-w-md shadow-2xl border-primary/20">
          <CardHeader className="bg-primary/5 border-b text-center space-y-1">
            <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl font-bold tracking-tight text-primary">ADMINISTRATOR SIGN IN</CardTitle>
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Department of Land & Land Reforms</p>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="userId" className="text-sm font-bold text-slate-700">Administrative ID</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input 
                    id="userId"
                    type="text" 
                    placeholder="Enter Admin ID" 
                    className="pl-10 h-11"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-bold text-slate-700">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input 
                    id="password"
                    type="password" 
                    placeholder="••••••••" 
                    className="pl-10 h-11"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full h-11 bg-accent hover:bg-accent/90 text-white font-bold"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    AUTHENTICATING...
                  </>
                ) : (
                  "SECURE LOGIN"
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="bg-slate-50 border-t py-4 text-center">
            <p className="text-[10px] text-muted-foreground leading-relaxed px-4">
              WARNING: This is a restricted government system. Unauthorized access attempts are logged and may be subject to legal action under IT Act.
            </p>
          </CardFooter>
        </Card>
      </main>

      {/* FOOTER - Significantly Increased size */}
      <footer className="w-full bg-white border-t">
        <div className="w-full relative h-[300px] md:h-[600px]">
          <Image 
            src={footerImage?.imageUrl || "/Untitled design (6).jpg"} 
            alt="KhataQuest Footer Banner"
            fill 
            className="object-contain object-center px-0"
          />
        </div>
      </footer>
    </div>
  );
}
