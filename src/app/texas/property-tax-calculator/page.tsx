'use client';
import { useState } from 'react';
export default function Page(){
  const [value,setValue]=useState(300000);
  const rate=1.8;
  const tax = value*rate/100;
  return(
    <div className="max-w-2xl mx-auto p-6 py-12">
      <h1 className="text-4xl font-bold">Texas Property Tax Calculator</h1>
      <p className="text-gray-600 mt-2">Texas average 1.80% - No state income tax</p>
      <div className="mt-6 border rounded-xl p-6">
        <label>Home Value: \</label>
        <input type="range" min={100000} max={1000000} step={10000} value={value} onChange={e=>setValue(+e.target.value)} className="w-full mt-2"/>
        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <p>Annual Tax: <b>\</b></p>
          <p>Monthly: <b>\</b></p>
          <p className="text-sm mt-2">Rate used: {rate}% (Texas avg 2025)</p>
        </div>
      </div>
    </div>
  )
}
