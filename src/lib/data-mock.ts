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
  }
];
