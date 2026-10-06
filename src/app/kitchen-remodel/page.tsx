'use client'
import { useState } from 'react'
export default function Page(){
  const [size,setSize]=useState(100)
  const total = size * 300
  return (
    <main style={{fontFamily:'Arial', maxWidth:'800px', margin:'auto', padding:'20px'}}>
      <h1>Kitchen Remodel Cost Calculator 2025</h1>
      <div style={{background:'#f5f5f5', padding:'20px', borderRadius:'8px'}}>
        <label>Size sq ft: {size}</label>
        <input type='range' min='50' max='400' value={size} onChange={e=>setSize(Number(e.target.value))} style={{width:'100%'}} />
        <h2>Estimated: Dollar {total.toLocaleString()} (300 dollars per sq ft avg)</h2>
        <p>Budget: 15k-25k | Mid: 25k-60k | Luxury: 60k-150k+</p>
      </div>
      <article style={{marginTop:'30px'}}>
        <h2>Kitchen Remodel 2025 Costs</h2>
        <p>22k searches/month. Average kitchen remodel is 200-400 dollars per sq ft. Cabinets 30 percent, labor 25 percent, appliances 15 percent.</p>
      </article>
      <a href='/'>Back home</a>
    </main>
  )
}
