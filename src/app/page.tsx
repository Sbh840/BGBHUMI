
"use client"

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RefreshCw, History, LandPlot, LogOut, Loader2, User, FileSearch, ShieldCheck, Info } from "lucide-react";
import { DISTRICTS, LAND_RECORDS_DB, type LandRecord } from "@/lib/data-mock";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LegalExplainer } from "@/components/legal-explainer";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useUser } from '@/firebase';

export default function KhataQuest() {
  const router = useRouter();
  const { user, loading } = useUser();
  
  const [identificationMode, setIdentificationMode] = useState("name");
  const [district, setDistrict] = useState("");
  const [block, setBlock] = useState("");
  const [mouza, setMouza] = useState("");
  const [language, setLanguage] = useState("bengali");
  
  const [khatianType, setKhatianType] = useState("normal");
  const [searchBy, setSearchBy] = useState("khatian");
  const [khatianPart1, setKhatianPart1] = useState("");
  const [khatianPart2, setKhatianPart2] = useState("");
  const [plotNo, setPlotNo] = useState("");
  
  const [appNo, setAppNo] = useState("");
  
  const [captchaText, setCaptchaText] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [searchResults, setSearchResults] = useState<LandRecord | null>(null);
  const [plotSearchResults, setPlotSearchResults] = useState<LandRecord[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [lastSearchTime, setLastSearchTime] = useState<string>("");

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const generateCaptcha = useCallback(() => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  const handleSearch = (mode: 'mouza' | 'app') => {
    if (captchaInput.toUpperCase() !== captchaText) {
      alert("Invalid Captcha! Please try again.");
      generateCaptcha();
      setCaptchaInput("");
      return;
    }

    setIsSearchLoading(true);
    setSearchResults(null);
    setPlotSearchResults([]);
    
    setTimeout(() => {
      let foundRecords: LandRecord[] = [];
      
      if (mode === 'app') {
        const record = LAND_RECORDS_DB.find(r => r.applicationNo === appNo);
        if (record) setSearchResults(record);
      } else {
        if (searchBy === 'khatian') {
          const fullKhatian = khatianPart2 ? `${khatianPart1}/${khatianPart2}` : khatianPart1;
          const record = LAND_RECORDS_DB.find(r => r.khatianNo === fullKhatian);
          if (record) setSearchResults(record);
        } else {
          foundRecords = LAND_RECORDS_DB.filter(r => r.plots.some(p => p.plotNo === plotNo));
          if (foundRecords.length > 0) setPlotSearchResults(foundRecords);
        }
      }

      if (searchResults || plotSearchResults.length > 0 || foundRecords.length > 0) {
        setLastSearchTime(`${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`);
        const query = mode === 'app' ? `App: ${appNo}` : (searchBy === 'khatian' ? `Khatian: ${khatianPart1}/${khatianPart2}` : `Plot: ${plotNo}`);
        setSearchHistory(prev => [query, ...prev].filter((v, i, a) => a.indexOf(v) === i).slice(0, 5));
      }
      setIsSearchLoading(false);
    }, 600);
  };

  const handleLogout = () => {
    localStorage.removeItem('khata_admin_auth');
    router.push('/login');
    router.refresh();
  };

  const resetForm = () => {
    setSearchResults(null);
    setPlotSearchResults([]);
    setKhatianPart1("");
    setKhatianPart2("");
    setPlotNo("");
    setAppNo("");
    setCaptchaInput("");
    setDistrict("");
    setBlock("");
    setMouza("");
    generateCaptcha();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Loading secure portal...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  const headerImage = PlaceHolderImages.find(img => img.id === 'site-header');
  const footerImage = PlaceHolderImages.find(img => img.id === 'site-footer');

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
          <div className="absolute top-2 right-4 flex flex-col items-end gap-2 z-10 scale-75 md:scale-90 origin-top-right">
             <div className="flex gap-1 bg-white/70 backdrop-blur-sm p-1 rounded-md border shadow-sm">
              <Button 
                variant={language === 'bengali' ? 'default' : 'ghost'} 
                size="sm" 
                className="h-7 text-xs"
                onClick={() => setLanguage('bengali')}
              >
                বাংলা
              </Button>
              <Button 
                variant={language === 'english' ? 'default' : 'ghost'} 
                size="sm" 
                className="h-7 text-xs"
                onClick={() => setLanguage('english')}
              >
                English
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#1a73e8] py-2 shadow-md">
        <div className="max-w-6xl mx-auto px-4 text-white text-xs md:text-sm font-bold uppercase tracking-widest flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LandPlot className="h-4 w-4" />
            Khatian & Plot Information Portal
          </div>
          <div className="flex items-center gap-4">
            <div className="text-[10px] bg-white/20 px-2 py-0.5 rounded border border-white/30 flex items-center gap-1">
              <User className="h-3 w-3" />
              {user.email?.split('@')[0]}
            </div>
            <button onClick={handleLogout} className="text-[10px] hover:underline flex items-center gap-1">
              <LogOut className="h-3 w-3" /> Logout
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-6xl mx-auto px-4 pt-6 space-y-6 w-full">
        {/* MOUZA IDENTIFICATION CARD */}
        <Card className="shadow-lg border-primary/20 overflow-hidden">
          <CardHeader className="bg-primary/5 border-b py-2 px-6">
            <CardTitle className="text-sm font-bold tracking-tight text-primary flex items-center gap-2 uppercase">
              Mouza Identification
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-6">
                  <div className="text-xs font-bold text-primary">Code Wise / Name Wise: <span className="text-destructive">*</span></div>
                  <RadioGroup value={identificationMode} onValueChange={setIdentificationMode} className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="code" id="code" />
                      <Label htmlFor="code" className="text-xs">Code Wise</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="name" id="name" />
                      <Label htmlFor="name" className="text-xs">Name Wise</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid gap-3">
                  <div className="grid grid-cols-3 items-center">
                    <Label className="text-xs font-bold">District: <span className="text-destructive">*</span></Label>
                    <Select value={district} onValueChange={setDistrict}>
                      <SelectTrigger className="h-8 text-xs bg-white border-slate-300 col-span-2">
                        <SelectValue placeholder="--Select District--" />
                      </SelectTrigger>
                      <SelectContent>
                        {DISTRICTS.map(d => (
                          <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-3 items-center">
                    <Label className="text-xs font-bold">Block: <span className="text-destructive">*</span></Label>
                    <Input placeholder="Type Block Name" className="h-8 text-xs bg-white border-slate-300 col-span-2" value={block} onChange={(e) => setBlock(e.target.value)} />
                  </div>

                  <div className="grid grid-cols-3 items-center">
                    <Label className="text-xs font-bold">Mouza: <span className="text-destructive">*</span></Label>
                    <Input placeholder="Type Mouza Name" className="h-8 text-xs bg-white border-slate-300 col-span-2" value={mouza} onChange={(e) => setMouza(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 bg-slate-50/30">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Label className="text-xs font-bold text-primary">Khatian Type: <span className="text-destructive">*</span></Label>
                    <RadioGroup value={khatianType} onValueChange={setKhatianType} className="flex gap-3">
                      {['normal', 'lease', 'fhtd'].map(t => (
                        <div key={t} className="flex items-center space-x-1">
                          <RadioGroupItem value={t} id={`k-${t}`} />
                          <Label htmlFor={`k-${t}`} className="text-[10px] font-bold uppercase">{t} Khatian</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <RadioGroup value={searchBy} onValueChange={setSearchBy} className="flex gap-8 border-t pt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="khatian" id="s-khatian" />
                      <Label htmlFor="s-khatian" className="text-xs font-bold">Search By Khatian</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="plot" id="s-plot" />
                      <Label htmlFor="s-plot" className="text-xs font-bold">Search By Plot</Label>
                    </div>
                  </RadioGroup>

                  {searchBy === 'khatian' ? (
                    <div className="flex items-center gap-2">
                      <Label className="text-xs font-bold whitespace-nowrap">Khatian No: <span className="text-destructive">*</span></Label>
                      <div className="flex items-center gap-1 w-full max-w-[200px]">
                        <Input className="h-8 text-xs bg-white border-slate-300" placeholder="Ex: 2625" value={khatianPart1} onChange={(e) => setKhatianPart1(e.target.value)} />
                        <span className="text-slate-400">/</span>
                        <Input className="h-8 text-xs bg-white border-slate-300" value={khatianPart2} onChange={(e) => setKhatianPart2(e.target.value)} />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Label className="text-xs font-bold whitespace-nowrap">Plot No: <span className="text-destructive">*</span></Label>
                      <Input className="h-8 text-xs bg-white border-slate-300 max-w-[200px]" placeholder="Ex: 1145" value={plotNo} onChange={(e) => setPlotNo(e.target.value)} />
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <Label className="text-xs font-bold whitespace-nowrap">Enter Captcha: <span className="text-destructive">*</span></Label>
                    <div className="flex items-center gap-2">
                      <Input className="h-8 w-20 text-xs bg-white border-slate-300 uppercase" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} />
                      <div className="h-8 px-2 bg-slate-200 captcha-font flex items-center justify-center font-bold text-sm select-none border border-slate-300 tracking-[3px] italic">
                        {captchaText}
                      </div>
                      <button onClick={generateCaptcha} className="text-green-600 hover:rotate-180 transition-transform duration-500">
                        <RefreshCw className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-white font-bold h-8 text-xs px-6 rounded-sm uppercase tracking-wider" onClick={() => handleSearch('mouza')} disabled={isSearchLoading}>
                    {isSearchLoading ? <Loader2 className="h-3 w-3 animate-spin" /> : "VIEW INFORMATION"}
                  </Button>
                  <Button variant="outline" className="h-8 text-xs px-6" onClick={resetForm}>RESET</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* APPLICATION SEARCH CARD */}
        <Card className="shadow-lg border-[#1a73e8]/20 overflow-hidden border-t-4 border-t-[#1a73e8]">
          <CardHeader className="bg-[#1a73e8]/5 border-b py-3 px-6">
            <CardTitle className="text-sm font-bold tracking-tight text-[#1a73e8] flex items-center gap-2 uppercase">
              <FileSearch className="h-4 w-4" />
              Application / Case Search
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-slate-700">Application Number <span className="text-destructive">*</span></Label>
                    <Input 
                      placeholder="Enter Application No (e.g. APP/2024/001)" 
                      className="h-10 text-sm bg-white border-slate-300" 
                      value={appNo}
                      onChange={(e) => setAppNo(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-md border border-slate-200">
                   <div className="flex items-center gap-2">
                      <Input className="h-9 w-24 text-sm bg-white border-slate-300 uppercase font-mono" placeholder="Captcha" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} />
                      <div className="h-9 px-3 bg-slate-200 captcha-font flex items-center justify-center font-bold text-sm select-none border border-slate-300 tracking-[3px] italic min-w-[100px]">
                        {captchaText}
                      </div>
                      <button onClick={generateCaptcha} className="text-blue-600 hover:rotate-180 transition-transform duration-500">
                        <RefreshCw className="h-5 w-5" />
                      </button>
                    </div>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold h-10 px-8 rounded-sm uppercase tracking-wider flex-1" onClick={() => handleSearch('app')} disabled={isSearchLoading}>
                    {isSearchLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "SEARCH STATUS"}
                  </Button>
                  <Button variant="outline" className="h-10 px-8" onClick={resetForm}>RESET</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SEARCH BY KHATIAN RESULTS */}
        {searchResults && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="text-center space-y-2">
              <div className="inline-block bg-blue-50 text-[#1a73e8] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[2px] border border-blue-200 shadow-sm">
                (Live Data As On {lastSearchTime})
              </div>
              <div className="text-sm font-bold text-slate-700 flex justify-center gap-6">
                <span className="flex items-center gap-1"><Badge variant="outline" className="text-[10px]">জে.এল নং : {searchResults.jlNo}</Badge></span>
                <span className="flex items-center gap-1"><Badge variant="outline" className="text-[10px]">থানা : {searchResults.thana}</Badge></span>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-sm p-4 flex items-center gap-3">
              <div className="bg-emerald-500 p-1.5 rounded-full">
                <ShieldCheck className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Land Conversion Status</p>
                <p className="text-sm font-bold text-slate-800">{searchResults.conversionStatus}</p>
              </div>
            </div>

            <div className="border border-slate-200 shadow-sm overflow-hidden rounded-sm bg-white">
              <Table className="border-collapse">
                <TableBody>
                  <TableRow className="border-b bg-slate-50/50">
                    <TableCell className="w-1/3 font-bold bg-[#334155] text-white text-xs py-2 uppercase">খতিয়ান নং : <LegalExplainer term="Khatian" /></TableCell>
                    <TableCell className="text-sm font-bold text-primary py-2">{searchResults.khatianNo}</TableCell>
                  </TableRow>
                  <TableRow className="border-b bg-slate-100">
                    <TableCell className="font-bold bg-[#334155] text-white text-xs py-2 uppercase">রায়তের নাম :</TableCell>
                    <TableCell className="text-sm font-bold text-slate-800 py-2">{searchResults.ownerName}</TableCell>
                  </TableRow>
                  <TableRow className="border-b bg-slate-50/50">
                    <TableCell className="font-bold bg-[#334155] text-white text-xs py-2 uppercase">পিতা/স্বামী :</TableCell>
                    <TableCell className="text-sm font-bold text-slate-800 py-2">{searchResults.fatherHusbandName}</TableCell>
                  </TableRow>
                  <TableRow className="border-b bg-slate-100">
                    <TableCell className="font-bold bg-[#334155] text-white text-xs py-2 uppercase">ঠিকানা :</TableCell>
                    <TableCell className="text-sm font-bold text-slate-800 py-2">{searchResults.address}</TableCell>
                  </TableRow>
                  <TableRow className="border-b bg-slate-50/50">
                    <TableCell className="font-bold bg-[#334155] text-white text-xs py-2 uppercase">জমির পরিমাণ : <LegalExplainer term="Land Area" /></TableCell>
                    <TableCell className="text-sm font-bold text-slate-800 py-2">{searchResults.totalArea}</TableCell>
                  </TableRow>
                  <TableRow className="bg-slate-100">
                    <TableCell className="font-bold bg-[#334155] text-white text-xs py-2 uppercase">দাগের সংখ্যা :</TableCell>
                    <TableCell className="text-sm font-bold text-slate-800 py-2">{searchResults.plotCount}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="space-y-2">
              <div className="text-center font-bold text-slate-800 text-sm py-2 uppercase">
                অত্রস্বত্ত্বের দাগের বিবরণ ও পরিমাণ:
              </div>
              <div className="border border-slate-200 shadow-sm overflow-hidden rounded-sm bg-white">
                <Table>
                  <TableHeader className="bg-[#1e40af]">
                    <TableRow className="hover:bg-[#1e40af]">
                      <TableHead className="text-white font-bold text-xs text-center border-r border-white/20 uppercase">দাগ নং <LegalExplainer term="Plot" /></TableHead>
                      <TableHead className="text-white font-bold text-xs text-center border-r border-white/20 uppercase">শ্রেণী <LegalExplainer term="Classification" /></TableHead>
                      <TableHead className="text-white font-bold text-xs text-center border-r border-white/20 uppercase">অংশ <LegalExplainer term="Share" /></TableHead>
                      <TableHead className="text-white font-bold text-xs text-center border-r border-white/20 uppercase">অংশ পরিমাণ(একর)</TableHead>
                      <TableHead className="text-white font-bold text-xs text-center uppercase">মন্তব্য</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {searchResults.plots.map((plot, idx) => (
                      <TableRow key={idx} className="even:bg-slate-50 hover:bg-slate-100">
                        <TableCell className="text-sm font-bold text-center border-r border-slate-200">{plot.plotNo}</TableCell>
                        <TableCell className="text-sm font-bold text-center border-r border-slate-200">{plot.classification}</TableCell>
                        <TableCell className="text-sm font-bold text-center border-r border-slate-200">{plot.share}</TableCell>
                        <TableCell className="text-sm font-bold text-center border-r border-slate-200">{plot.shareArea}</TableCell>
                        <TableCell className="text-xs italic text-center text-slate-500">{plot.remarks}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        )}

        {/* SEARCH BY PLOT RESULTS - NEW TWO-TABLE VIEW */}
        {plotSearchResults.length > 0 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500 pb-12">
             <div className="text-center space-y-2">
              <div className="inline-block bg-blue-50 text-[#1a73e8] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[2px] border border-blue-200 shadow-sm">
                (Live Data As On {lastSearchTime})
              </div>
              <div className="text-sm font-bold text-slate-700 flex justify-center gap-6">
                <span className="flex items-center gap-1"><Badge variant="outline" className="text-[10px]">জে.এল নং : {plotSearchResults[0].jlNo}</Badge></span>
                <span className="flex items-center gap-1"><Badge variant="outline" className="text-[10px]">থানা : {plotSearchResults[0].thana}</Badge></span>
              </div>
            </div>

            {/* PLOT SUMMARY TABLE */}
            <div className="space-y-1">
              <div className="border border-slate-200 shadow-sm overflow-hidden rounded-sm bg-white">
                <Table>
                  <TableHeader className="bg-[#3b5998]">
                    <TableRow className="hover:bg-[#3b5998]">
                      <TableHead className="text-white font-bold text-xs text-center border-r border-white/10 uppercase py-2">দাগ নং</TableHead>
                      <TableHead className="text-white font-bold text-xs text-center border-r border-white/10 uppercase py-2">শ্রেণী</TableHead>
                      <TableHead className="text-white font-bold text-xs text-center border-r border-white/10 uppercase py-2">জমির মোট পরিমাণ(একর)</TableHead>
                      <TableHead className="text-white font-bold text-xs text-center uppercase py-2">দাগের ম্যাপ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="bg-white">
                      <TableCell className="text-sm font-bold text-center border-r border-slate-200">{plotNo}</TableCell>
                      <TableCell className="text-sm font-bold text-center border-r border-slate-200">{plotSearchResults[0].plots.find(p => p.plotNo === plotNo)?.classification}</TableCell>
                      <TableCell className="text-sm font-bold text-center border-r border-slate-200">1.06</TableCell>
                      <TableCell className="text-xs font-bold text-blue-600 text-center hover:underline cursor-pointer">Click Here</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* KHATIAN DETAILS LIST TABLE */}
            <div className="space-y-2">
              <div className="text-center text-[#1e40af] text-[10px] font-bold italic py-1">
                (উল্লিখিত খতিয়ানের যথার্থ অংশ পরিমাণ,, ঐ খতিয়ানে উক্ত দাগে অংশ অনুসারে নির্ধারিত হইবে।)
              </div>
              <div className="border border-slate-200 shadow-sm overflow-hidden rounded-sm bg-white overflow-x-auto">
                <Table className="min-w-[800px]">
                  <TableHeader className="bg-[#3b5998]">
                    <TableRow className="hover:bg-[#3b5998]">
                      <TableHead className="text-white font-bold text-xs text-center border-r border-white/10 uppercase py-3">খতিয়ান নং</TableHead>
                      <TableHead className="text-white font-bold text-xs text-center border-r border-white/10 uppercase py-3">রায়তের নাম</TableHead>
                      <TableHead className="text-white font-bold text-xs text-center border-r border-white/10 uppercase py-3">পিতা/স্বামী</TableHead>
                      <TableHead className="text-white font-bold text-xs text-center border-r border-white/10 uppercase py-3">অংশ</TableHead>
                      <TableHead className="text-white font-bold text-xs text-center border-r border-white/10 uppercase py-3">অংশ পরিমাণ(একর)</TableHead>
                      <TableHead className="text-white font-bold text-xs text-center border-r border-white/10 uppercase py-3">দখলদার</TableHead>
                      <TableHead className="text-white font-bold text-xs text-center uppercase py-3">মন্তব্য</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {plotSearchResults.map((record, idx) => {
                      const plotData = record.plots.find(p => p.plotNo === plotNo);
                      return (
                        <TableRow key={idx} className="even:bg-slate-100 hover:bg-slate-200 border-b border-slate-200">
                          <TableCell className="text-sm font-bold text-center border-r border-slate-300 py-3">{record.khatianNo}</TableCell>
                          <TableCell className="text-sm font-bold text-center border-r border-slate-300 py-3 relative">
                            {record.ownerName}
                            <div className="text-[10px] bg-purple-100 text-purple-700 px-1 rounded absolute bottom-0.5 right-1">ব্যাক্তি</div>
                          </TableCell>
                          <TableCell className="text-sm font-bold text-center border-r border-slate-300 py-3">{record.fatherHusbandName}</TableCell>
                          <TableCell className="text-sm font-bold text-center border-r border-slate-300 py-3">{plotData?.share}</TableCell>
                          <TableCell className="text-sm font-bold text-center border-r border-slate-300 py-3">{plotData?.shareArea}</TableCell>
                          <TableCell className="text-sm font-bold text-center border-r border-slate-300 py-3">{plotData?.occupant}</TableCell>
                          <TableCell className="text-xs italic text-center py-3 text-red-500 font-bold">{plotData?.remarks}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>

               {/* SHOW CONVERSION STATUS FOR PLOT SEARCH */}
               <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-sm p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-500 p-1 rounded-full">
                    <ShieldCheck className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-xs font-bold text-emerald-800">Conversion Status: <span className="text-slate-700 ml-2">{plotSearchResults[0].conversionStatus}</span></p>
                </div>
                <Badge variant="outline" className="text-[10px] text-emerald-700 bg-white">Verified</Badge>
              </div>
            </div>
          </div>
        )}

        {searchHistory.length > 0 && (
          <div className="space-y-2 pt-4">
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              <History className="h-3 w-3" />
              Recent Searches
            </div>
            <div className="flex flex-wrap gap-2">
              {searchHistory.map((item, idx) => (
                <Badge key={idx} variant="outline" className="text-[10px] px-2 py-0 cursor-pointer hover:bg-slate-100 bg-white border-slate-200 text-slate-600">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* FOOTER - Increased size for perfect visibility */}
      <footer className="w-full mt-12 bg-white border-t">
        <div className="w-full relative h-[300px] md:h-[600px]">
          <Image 
            src={footerImage?.imageUrl || "/Untitled design (6).jpg"} 
            alt="KhataQuest Footer Banner"
            fill 
            className="object-contain object-center px-0"
            data-ai-hint="government footer"
          />
        </div>
      </footer>
    </div>
  );
}
