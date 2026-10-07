'use client';
import { useState } from 'react';
export default function Page(){
  const [rent,setRent]=useState(1500);
  return(
    <div className="max-w-2xl mx-auto p-6 py-12">
      <h1 className="text-4xl font-bold">Texas Rent Increase Calculator</h1>
      <p className="text-gray-600 mt-2">Texas has NO rent control - Landlord must give 30 days notice</p>
      <div className="mt-6 border rounded-xl p-6">
        <label>Current Rent: \</label>
        <input type="range" min={500} max={5000} step={50} value={rent} onChange={e=>setRent(+e.target.value)} className="w-full mt-2"/>
        <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
          <p>Texas Law: No max increase limit</p>
          <p>Required Notice: <b>30 days</b> (month-to-month)</p>
          <p className="mt-2">If rent goes to \ (+10%): Legal with 30 day notice</p>
          <p className="text-sm mt-2 text-gray-600">Tip: Check your lease for specific increase clauses</p>
        </div>
      </div>
    </div>
  )
}
