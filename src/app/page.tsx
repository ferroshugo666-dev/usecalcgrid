export default function Home() {
  return (
    <main className='min-h-screen bg-[#fcfaf8] text-zinc-900'>
      <header className='max-w-6xl mx-auto px-6 py-6 flex items-center gap-3'>
        <div className='w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-black'>U</div>
        <span className='font-black text-xl tracking-tight'>UseCalcGrid</span>
      </header>
      <div className='max-w-6xl mx-auto px-6 py-12'>
        <div className='text-center mb-14'>
          <div className='inline-flex bg-zinc-900 text-white text-xs px-4 py-1.5 rounded-full mb-6'>50,000+ projects calculated this month</div>
          <h1 className='text-5xl md:text-6xl font-black tracking-tight mb-4'>Don't Overpay For<br/>Your Next Project.</h1>
          <p className='text-lg text-zinc-600 max-w-2xl mx-auto'>Get instant, contractor-grade estimates. From driveway to kitchen, know the real cost before you call anyone.</p>
        </div>
        <div className='grid md:grid-cols-2 gap-6'>
          <a href='/concrete-slab' className='bg-white border rounded-[24px] p-8 hover:shadow-xl transition-all'><h2 className='text-2xl font-bold'>Concrete Driveway Cost Calculator</h2><p className='text-sm mt-2'>Avg $4,500 - Calculate now</p></a>
          <a href='/asphalt-driveway' className='bg-white border rounded-[24px] p-8 hover:shadow-xl transition-all'><h2 className='text-2xl font-bold'>Asphalt Driveway Cost Calculator</h2><p className='text-sm mt-2'>Avg $3,200 - Calculate now</p></a>
          <a href='/bathroom-remodel' className='bg-white border rounded-[24px] p-8 hover:shadow-xl transition-all'><h2 className='text-2xl font-bold'>Bathroom Remodel Cost Calculator</h2><p className='text-sm mt-2'>Avg $12k - Calculate now</p></a>
          <a href='/kitchen-remodel' className='bg-white border rounded-[24px] p-8 hover:shadow-xl transition-all'><h2 className='text-2xl font-bold'>Kitchen Remodel Cost Calculator</h2><p className='text-sm mt-2'>Avg $26k - Calculate now</p></a>
        </div>
      </div>
    </main>
  )
}
