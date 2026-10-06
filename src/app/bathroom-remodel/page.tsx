'use client'
import { useState } from 'react'
export default function Page(){
  const [size,setSize]=useState(50)
  const total = size * 250
  return (
    <main style={{fontFamily:'Arial', maxWidth:'800px', margin:'auto', padding:'20px'}}>
      <h1>Bathroom Remodel Cost Calculator 2025</h1>
      <div style={{background:'#f5f5f5', padding:'20px', borderRadius:'8px'}}>
        <label>Size sq ft: {size}</label>
        <input type='range' min='20' max='200' value={size} onChange={e=>setSize(Number(e.target.value))} style={{width:'100%'}} />
        <h2>Estimated: Dollar {total.toLocaleString()} (250 dollars per sq ft avg)</h2>
        <p>Small: 6k-15k | Mid: 15k-30k | Luxury: 30k-60k+</p>
      </div>
      <article style={{marginTop:'30px'}}>
        <h2>2025 Bathroom Remodel Costs</h2>
        <p>Average bathroom remodel is 150-300 dollars per sq ft. 33k monthly searches - biggest keyword. Labor is 40-60 percent of cost.</p>
      </article>
      <a href='/'>Back home</a>
    </main>
  )
}
