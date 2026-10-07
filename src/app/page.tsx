import Link from 'next/link';
export default function Home(){
  return(
    <div className="max-w-5xl mx-auto p-6 py-12">
      <h1 className="text-6xl font-black">UseCalcGrid</h1>
      <p className="text-xl text-gray-600 mt-4">21 calculators for real life in the US - 2025-26 updated.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <Link href="/california" className="border-2 border-black rounded-2xl p-6 hover:bg-black hover:text-white transition">
          <h2 className="text-2xl font-bold">California - 6 Tools</h2>
          <p className="mt-2">Rent Increase AB 1482, Overtime, Paycheck, Mileage, Security Deposit, Final Paycheck</p>
        </Link>
        <Link href="/texas" className="border-2 border-black rounded-2xl p-6 hover:bg-black hover:text-white transition">
          <h2 className="text-2xl font-bold">Texas - 3 Tools</h2>
          <p className="mt-2">Property Tax 1.8%, Paycheck (no state tax), Rent Increase</p>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <Link href="/kitchen-remodel" className="border rounded-xl p-4 bg-gray-50">Kitchen Remodel</Link>
        <Link href="/bathroom-remodel" className="border rounded-xl p-4 bg-gray-50">Bathroom Remodel</Link>
        <Link href="/asphalt-driveway" className="border rounded-xl p-4 bg-gray-50">Asphalt Driveway</Link>
      </div>
    </div>
  )
}
