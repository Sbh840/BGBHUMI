/**
 * @fileOverview This file acts as our local "database" for land records and applications.
 */

export const DISTRICTS = [
  { id: 'd1', name: 'Alipurduar' },
  { id: 'd2', name: 'Bankura' },
  { id: 'd3', name: 'Birbhum' },
  { id: 'd4', name: 'Cooch Behar' },
  { id: 'd5', name: 'Dakshin Dinajpur' },
  { id: 'd6', name: 'Darjeeling' },
  { id: 'd7', name: 'Hooghly' },
  { id: 'd8', name: 'Howrah' },
  { id: 'd9', name: 'Jalpaiguri' },
  { id: 'd10', name: 'Jhargram' },
  { id: 'd11', name: 'Kalimpong' },
  { id: 'd12', name: 'Kolkata' },
  { id: 'd13', name: 'Malda' },
  { id: 'd14', name: 'Murshidabad' },
  { id: 'd15', name: 'Nadia' },
  { id: 'd16', name: 'North 24 Parganas' },
  { id: 'd17', name: 'Paschim Bardhaman' },
  { id: 'd18', name: 'Paschim Medinipur' },
  { id: 'd19', name: 'Purba Bardhaman' },
  { id: 'd20', name: 'Purba Medinipur' },
  { id: 'd21', name: 'Purulia' },
  { id: 'd22', name: 'South 24 Parganas' },
  { id: 'd23', name: 'Uttar Dinajpur' },
];

export interface PlotDetail {
  plotNo: string;
  classification: string; // শ্রেণী
  share: string; // অংশ
  shareArea: string; // অংশ পরিমাণ (একর)
  occupant: string; // দখলদার
  remarks: string; // মন্তব্য
}

export interface LandRecord {
  khatianNo: string;
  ownerName: string; // রায়তের নাম
  fatherHusbandName: string; // পিতা/স্বামী
  address: string; // ঠিকানা
  totalArea: string; // জমির পরিমাণ
  plotCount: number; // দাগের সংখ্যা
  jlNo: string;
  thana: string;
  conversionStatus: string; // Conversion details
  applicationNo?: string;
  plots: PlotDetail[];
}

/**
 * LAND RECORDS "DATABASE"
 * All records for Plot 1145 updated with classification 'ডাঙ্গা' and provided share/area details.
 */
export const LAND_RECORDS_DB: LandRecord[] = [
  {
    khatianNo: "287",
    ownerName: "গৌর শশ্বরী",
    fatherHusbandName: "সন্তোষ",
    address: "নিজ",
    totalArea: "0.4889 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.4613", shareArea: "0.4889", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "1081",
    ownerName: "শ্যামাপপদ শশ্বরী",
    fatherHusbandName: "সন্তোষ",
    address: "নিজ",
    totalArea: "0.3346 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.3159", shareArea: "0.3346", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2604",
    ownerName: "রাম বাবু সাউ",
    fatherHusbandName: "মৃত শম্ভুনাথ",
    address: "নিজ",
    totalArea: "0.0202 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0190", shareArea: "0.0202", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "1698",
    ownerName: "জয়দেব মন্ডল",
    fatherHusbandName: "ব্যক্তি",
    address: "নিজ",
    totalArea: "0.07 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "বাইদ",
    plots: [{ plotNo: "180", classification: "বাইদ", share: "0.2000", shareArea: "0.07", occupant: "বর্গাNil", remarks: "Nil" }]
  },
  {
    khatianNo: "2553",
    ownerName: "রামপ্রসাদ অধিকারী",
    fatherHusbandName: "ব্যক্তি",
    address: "নিজ",
    totalArea: "0.04 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "বাইদ",
    plots: [{ plotNo: "180", classification: "বাইদ", share: "0.1145", shareArea: "0.04", occupant: "বর্গাNil", remarks: "Nil" }]
  },
  {
    khatianNo: "2869",
    ownerName: "লালমোহন চন্দ্র",
    fatherHusbandName: "রাধারমন চন্দ্র",
    address: "নিজ",
    totalArea: "0.24 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "বাইদ",
    plots: [{ plotNo: "180", classification: "বাইদ", share: "0.6855", shareArea: "0.24", occupant: "বর্গাNil", remarks: "Nil" }]
  },
  {
    khatianNo: "2611",
    ownerName: "নেপালী সাউ",
    fatherHusbandName: "মৃত সীতারাম",
    address: "নিজ",
    totalArea: "0.0165 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0156", shareArea: "0.0165", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2625",
    ownerName: "রামবাবু সাউ",
    fatherHusbandName: "মৃত শম্ভুনাথ সাউ",
    address: "নিজ",
    totalArea: "0.0330 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    applicationNo: "APP/2024/001",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0311", shareArea: "0.0330", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2644",
    ownerName: "রাম বাবু সাউ",
    fatherHusbandName: "মৃত শম্ভুনাথ",
    address: "নিজ",
    totalArea: "0.0682 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0643", shareArea: "0.0682", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2742",
    ownerName: "রাম বাবু সাউ",
    fatherHusbandName: "শম্ভুনাথ",
    address: "নিজ",
    totalArea: "0.0408 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0384", shareArea: "0.0408", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "3549",
    ownerName: "বিনোদ কুমার সাউ",
    fatherHusbandName: "ভাগীরথী",
    address: "নিজ",
    totalArea: "0.0413 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0389", shareArea: "0.0413", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "4285",
    ownerName: "সুনীল সাউ",
    fatherHusbandName: "গিরিধারী সাউ",
    address: "নিজ",
    totalArea: "0.0165 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0155", shareArea: "0.0165", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "1299",
    ownerName: "সুশীলা বালা দাসী",
    fatherHusbandName: "রাখাল চন্দ্র ঢ্যাঙ্গঁ",
    address: "নিজ",
    totalArea: "0.0356 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0171", shareArea: "0.0356", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "1312",
    ownerName: "সেখ মনোয়ার আলী",
    fatherHusbandName: "সেখ মহঃ হোসেন",
    address: "নিজ",
    totalArea: "0.0340 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0165", shareArea: "0.0340", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "1964",
    ownerName: "সেখ মনোয়ার আলী",
    fatherHusbandName: "সেখ মহঃ হোসেন",
    address: "নিজ",
    totalArea: "0.0340 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0165", shareArea: "0.0340", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "1965",
    ownerName: "তনুশ্রী রায়",
    fatherHusbandName: "রাজু রায়",
    address: "নিজ",
    totalArea: "0.0619 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0300", shareArea: "0.0619", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2034",
    ownerName: "রাজু রায়",
    fatherHusbandName: "অনিল রায়",
    address: "নিজ",
    totalArea: "0.0619 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0300", shareArea: "0.0619", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2035",
    ownerName: "জীনত পরবীন",
    fatherHusbandName: "দিলশাদ অলী অহসন",
    address: "নিজ",
    totalArea: "0.0283 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0137", shareArea: "0.0283", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2053",
    ownerName: "দিলশাদ অলী অহসন",
    fatherHusbandName: "মেহদী হসন",
    address: "নিজ",
    totalArea: "0.0285 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0138", shareArea: "0.0285", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2054",
    ownerName: "রোশন আরা",
    fatherHusbandName: "মহঃ লিয়াকত আলি",
    address: "নিজ",
    totalArea: "0.0258 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0125", shareArea: "0.0258", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2055",
    ownerName: "মহঃ লিয়াকত আলি",
    fatherHusbandName: "মহঃ শরীফ",
    address: "নিজ",
    totalArea: "0.0256 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0124", shareArea: "0.0256", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2057",
    ownerName: "মুসা খান",
    fatherHusbandName: "আব্দুল আজিজ হাজি খান",
    address: "নিজ",
    totalArea: "0.0512 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0248", shareArea: "0.0512", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2157",
    ownerName: "শেখ জাহির উদ্দিন",
    fatherHusbandName: "শেক সেরাজ উদ্দিন",
    address: "নিজ",
    totalArea: "0.2732 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.1322", shareArea: "0.2732", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2158",
    ownerName: "ইনজামাম উল হক",
    fatherHusbandName: "জাহির আনোয়ার",
    address: "নিজ",
    totalArea: "0.0341 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0165", shareArea: "0.0341", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2159",
    ownerName: "শাহবাজ আহমেদ আনসারী",
    fatherHusbandName: "জাহির আনোয়ার",
    address: "নিজ",
    totalArea: "0.0341 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0165", shareArea: "0.0341", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2172",
    ownerName: "ইতি ঘোষ",
    fatherHusbandName: "অমিত ঘোষ",
    address: "নিজ",
    totalArea: "0.0422 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "বাস্তু", share: "0.0205", shareArea: "0.0422", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2173",
    ownerName: "আমজেদ খান",
    fatherHusbandName: "নেয়াজ খান",
    address: "নিজ",
    totalArea: "0.0423 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "বাস্তু", share: "0.0205", shareArea: "0.0423", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2174",
    ownerName: "সরফরাজ খান",
    fatherHusbandName: "মতিউল্লাহ খান",
    address: "নিজ",
    totalArea: "0.0422 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "বাস্তু", share: "0.0204", shareArea: "0.0422", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2177",
    ownerName: "মাহেজাবীন",
    fatherHusbandName: "হাসরাত মইন",
    address: "নিজ",
    totalArea: "0.0255 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0124", shareArea: "0.0255", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2178",
    ownerName: "হাসরাত মইন",
    fatherHusbandName: "মইন আকরাম রাহি",
    address: "নিজ",
    totalArea: "0.0254 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0123", shareArea: "0.0254", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2180",
    ownerName: "তালাত বানু",
    fatherHusbandName: "মহঃ আলম আজাদ",
    address: "নিজ",
    totalArea: "0.0130 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0062", shareArea: "0.0130", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2181",
    ownerName: "মহম্মদ আলম আজাদ",
    fatherHusbandName: "শুকুরুল্লাহ আনসারি",
    address: "নিজ",
    totalArea: "0.0130 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "1145", classification: "ডাঙ্গা", share: "0.0062", shareArea: "0.0130", occupant: "Nil", remarks: "Nil" }]
  },
  // PLOT 803 RECORDS
  {
    khatianNo: "1964",
    ownerName: "তনুশ্রী রায়",
    fatherHusbandName: "রাজু রায়",
    address: "নিজ",
    totalArea: "0.1209 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "803", classification: "ডাঙ্গা", share: "0.0300", shareArea: "0.1209", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "1965",
    ownerName: "রাজু রায়",
    fatherHusbandName: "অনিল রায়",
    address: "নিজ",
    totalArea: "0.1209 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "803", classification: "ডাঙ্গা", share: "0.0300", shareArea: "0.1209", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "1967",
    ownerName: "মহঃ রেহান",
    fatherHusbandName: "মহঃ ইউনুস",
    address: "নিজ",
    totalArea: "0.0665 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "803", classification: "ডাঙ্গা", share: "0.0165", shareArea: "0.0665", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2172",
    ownerName: "ইতি ঘোষ",
    fatherHusbandName: "অমিত ঘোষ",
    address: "নিজ",
    totalArea: "0.1167 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "803", classification: "বাস্তু", share: "0.0299", shareArea: "0.1167", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2173",
    ownerName: "আমজেদ খান",
    fatherHusbandName: "নেয়াজ খান",
    address: "নিজ",
    totalArea: "0.1168 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "803", classification: "বাস্তু", share: "0.0299", shareArea: "0.1168", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2174",
    ownerName: "সরফরাজ খান",
    fatherHusbandName: "মতিউল্লাহ খান",
    address: "নিজ",
    totalArea: "0.1167 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "803", classification: "বাস্তু", share: "0.0300", shareArea: "0.1167", occupant: "Nil", remarks: "Nil" }]
  },
  // PLOT 802 RECORDS
  {
    khatianNo: "2175",
    ownerName: "আলতাফ খান",
    fatherHusbandName: "আসগার খান",
    address: "নিজ",
    totalArea: "0.0660 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "802", classification: "ডাঙ্গা", share: "0.0165", shareArea: "0.0660", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2176",
    ownerName: "সাহিল খান",
    fatherHusbandName: "আসগার খান",
    address: "নিজ",
    totalArea: "0.0660 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "802", classification: "ডাঙ্গা", share: "0.0165", shareArea: "0.0660", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2179",
    ownerName: "হায়দার খান",
    fatherHusbandName: "ইসমাইল খান",
    address: "নিজ",
    totalArea: "0.1322 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "802", classification: "ডাঙ্গা", share: "0.0330", shareArea: "0.1322", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "2180",
    ownerName: "তালাত বানু",
    fatherHusbandName: "মহঃ আলম আজাদ",
    address: "নিজ",
    totalArea: "0.0386 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা থেকে ডাঙ্গা",
    plots: [{ plotNo: "802", classification: "ডাঙ্গা", share: "0.0083", shareArea: "0.0386", occupant: "Nil", remarks: "Nil" }]
  },
  // PLOT 612 RECORDS
  {
    khatianNo: "300",
    ownerName: "বঙ্কু বিহারী পাল",
    fatherHusbandName: "কানাই লাল",
    address: "নিজ",
    totalArea: "0.0300 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা",
    plots: [{ plotNo: "612", classification: "ডোবা", share: "0.1250", shareArea: "0.0300", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "423",
    ownerName: "রঞ্জিত কুমার পাল",
    fatherHusbandName: "কানাই লাল",
    address: "নিজ",
    totalArea: "0.0200 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা",
    plots: [{ plotNo: "612", classification: "ডোবা", share: "0.1250", shareArea: "0.0200", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "508",
    ownerName: "সঞ্জিত কুমার পাল",
    fatherHusbandName: "কানাই",
    address: "নিজ",
    totalArea: "0.0300 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা",
    plots: [{ plotNo: "612", classification: "ডোবা", share: "0.1250", shareArea: "0.0300", occupant: "Nil", remarks: "Nil" }]
  },
  {
    khatianNo: "1908",
    ownerName: "রথীন নিয়োগী",
    fatherHusbandName: "মৃত কান্তি পদ",
    address: "নিজ",
    totalArea: "0.0250 একর",
    plotCount: 1,
    jlNo: "4",
    thana: "জগদ্দল",
    conversionStatus: "ডোবা",
    plots: [{ plotNo: "612", classification: "ডোবা", share: "0.1250", shareArea: "0.0250", occupant: "Nil", remarks: "Nil" }]
  }
];
