'use client';
import { useState } from 'react';
export default function Page(){
  const [salary,setSalary]=useState(60000);
  const federal = salary*0.12;
  const net = salary-federal;
  return(
    <div className="max-w-2xl mx-auto p-6 py-12">
      <h1 className="text-4xl font-bold">Texas Paycheck Calculator</h1>
      <p className="text-gray-600 mt-2">Texas has NO state income tax - 2025</p>
      <div className="mt-6 border rounded-xl p-6">
        <label>Annual Salary: \</label>
        <input type="range" min={30000} max={200000} step={1000} value={salary} onChange={e=>setSalary(+e.target.value)} className="w-full mt-2"/>
        <div className="mt-6 bg-green-50 p-4 rounded-lg">
          <p>Federal Tax (est 12%): \</p>
          <p className="text-xl font-bold">Take Home: \ / year - \/mo</p>
          <p className="text-sm mt-2">Texas: \ state tax saved vs California!</p>
        </div>
      </div>
    </div>
  )
}
