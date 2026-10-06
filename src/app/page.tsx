export default function Home() {
  return (
    <main style={{fontFamily:'Arial', maxWidth:'900px', margin:'auto', padding:'40px 20px'}}>
      <header style={{textAlign:'center', marginBottom:'50px'}}>
        <h1>UseCalcGrid</h1>
        <p>Accurate 2025 construction cost calculators based on real USA data</p>
      </header>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px'}}>
        <a href='/concrete-driveway' style={{border:'1px solid #ddd', padding:'20px', borderRadius:'12px', textDecoration:'none', color:'black'}}>
          <h3>Concrete Driveway Cost</h3>
          <p>6,600 searches/mo - 8 to 15 per sq ft</p>
        </a>
        <a href='/asphalt-driveway' style={{border:'1px solid #ddd', padding:'20px', borderRadius:'12px', textDecoration:'none', color:'black'}}>
          <h3>Asphalt Driveway Cost</h3>
          <p>12,100 searches/mo - 5 to 9 per sq ft</p>
        </a>
        <a href='/bathroom-remodel' style={{border:'1px solid #ddd', padding:'20px', borderRadius:'12px', textDecoration:'none', color:'black'}}>
          <h3>Bathroom Remodel Cost</h3>
          <p>33,100 searches/mo - Most popular</p>
        </a>
        <a href='/kitchen-remodel' style={{border:'1px solid #ddd', padding:'20px', borderRadius:'12px', textDecoration:'none', color:'black'}}>
          <h3>Kitchen Remodel Cost</h3>
          <p>22,200 searches/mo - 22k searches</p>
        </a>
      </div>
      <footer style={{marginTop:'60px', textAlign:'center', fontSize:'14px', color:'#777'}}>
        <a href='/about'>About</a> | <a href='/privacy'>Privacy Policy</a> | <a href='/contact'>Contact</a>
        <p>2025 UseCalcGrid</p>
      </footer>
    </main>
  )
}
