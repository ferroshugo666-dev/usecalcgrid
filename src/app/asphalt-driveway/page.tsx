'use client'
import { useState } from 'react'
export default function Page(){
  const [area,setArea]=useState(600)
  const total = area * 7
  return (
    <main style={{fontFamily:'Arial', maxWidth:'800px', margin:'auto', padding:'20px'}}>
      <h1>Asphalt Driveway Cost Calculator 2025</h1>
      <div style={{background:'#f5f5f5', padding:'20px', borderRadius:'8px'}}>
        <label>Area sq ft: {area}</label>
        <input type='range' min='200' max='2000' value={area} onChange={e=>setArea(Number(e.target.value))} style={{width:'100%'}} />
        <h2>Estimated: Dollar {total.toLocaleString()} (7 dollars per sq ft)</h2>
      </div>
      <article style={{marginTop:'30px'}}>
        <h2>Asphalt vs Concrete</h2>
        <p>Asphalt driveway costs 5-9 dollars per sq ft vs concrete 8-15 dollars. Asphalt is cheaper but needs sealing every 3-5 years. Average 2-car driveway (600 sq ft) = 3,000-5,400 dollars.</p>
        <p>Keyword data: 12.1k monthly searches, CPC 7.94 dollars - great for AdSense.</p>
      </article>
      <a href='/'>Back home</a>
    </main>
  )
}
