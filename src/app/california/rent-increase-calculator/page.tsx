"use client";
import { useState } from "react";

const COUNTIES: any = {
  "Los Angeles": 3.0, "Orange": 3.0, "San Diego": 3.8,
  "San Francisco": 1.3, "Alameda": 1.3, "Santa Clara": 1.3,
  "San Bernardino": 2.5, "Riverside": 2.5, "Sacramento": 2.7, "Default (CA)": 2.7
};

export default function Page() {
  const [county, setCounty] = useState("Los Angeles");
  const [rent, setRent] = useState(2500);
  const [coa, setCoa] = useState("2010");
  const cpi = COUNTIES[county]?? 2.7;
  const maxPct = Math.min(cpi + 5, 10);
  const maxRent = rent * (1 + maxPct / 100);
  const coaYear = parseInt(coa) || 2000;
  const exempt = new Date().getFullYear() - coaYear < 15;
  return (
    <div className="max-w-3xl mx-auto p-6 py-12">
      <h1 className="text-4xl font-bold">California Rent Increase Calculator 2025-26 (AB 1482)</h1>
      <p className="text-gray-600 mt-2">Calculate max legal rent increase by county with CPI updated.</p>
      <div className="mt-8 bg-white border rounded-xl p-6 space-y-6 shadow">
        <div>
          <label className="font-semibold">County</label>
          <select value={county} onChange={e=>setCounty(e.target.value)} className="w-full mt-1 border rounded p-3">
            {Object.keys(COUNTIES).map((c:any)=><option key={c}>{c}</option>)}
          </select>
          <p className="text-sm text-gray-500 mt-1">CPI for {county}: {cpi}%</p>
        </div>
        <div>
          <label className="font-semibold">Current Rent ($)</label>
          <input type="number" value={rent} onChange={e=>setRent(Number(e.target.value))} className="w-full mt-1 border rounded p-3" />
        </div>
        <div>
          <label className="font-semibold">Certificate of Occupancy Year</label>
          <input type="number" value={coa} onChange={e=>setCoa(e.target.value)} className="w-full mt-1 border rounded p-3" />
          {exempt && <p className="text-amber-600 text-sm mt-2 font-bold">Property may be EXEMPT - built less than 15 years ago.</p>}
        </div>
        <div className="bg-slate-900 text-white rounded-xl p-6">
          <p className="text-slate-300">Max Legal Increase (AB 1482):</p>
          <p className="text-3xl font-bold mt-1">{maxPct.toFixed(1)}% (CPI {cpi}% + 5% capped at 10%)</p>
          <p className="text-slate-300 mt-4">New Max Rent:</p>
          <p className="text-4xl font-bold text-green-400">{maxRent.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}
