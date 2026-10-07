import Link from 'next/link';
export default function Home(){
  return(
    <div className="max-w-5xl mx-auto p-6 py-12">
      <h1 className="text-6xl font-black">UseCalcGrid</h1>
      <p className="text-xl text-gray-600 mt-4">Calculators for real life in the US - 2025-26 updated.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <Link href="/california" className="border-2 border-black rounded-2xl p-6 hover:bg-black hover:text-white transition">
          <h2 className="text-2xl font-bold">California Calculators</h2>
          <p className="mt-2">6 tools - Rent Increase AB 1482, Overtime, Final Paycheck, Mileage, Security Deposit, Paycheck</p>
          <span className="mt-4 inline-block font-bold">Explore →</span>
        </Link>
        <div className="border rounded-2xl p-6 bg-gray-50">
          <h2 className="text-2xl font-bold">Home Remodel</h2>
          <div className="mt-3 space-y-1 text-sm">
            <Link href="/kitchen-remodel" className="block underline">Kitchen Remodel Calculator</Link>
            <Link href="/bathroom-remodel" className="block underline">Bathroom Remodel Calculator</Link>
            <Link href="/asphalt-driveway" className="block underline">Asphalt Driveway Calculator</Link>
          </div>
        </div>
      </div>
      <div className="mt-12 text-sm text-gray-500">
        <p>© 2025 UseCalcGrid - All calculators updated for 2025-26 laws.</p>
      </div>
    </div>
  )
}
