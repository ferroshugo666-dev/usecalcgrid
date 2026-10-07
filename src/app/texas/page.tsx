export default function Page(){
  const tools = [
    {href: "/texas/property-tax-calculator", title: "Texas Property Tax Calculator", desc: "Avg 1.8% - No state income tax state"},
    {href: "/texas/paycheck-calculator", title: "Texas Paycheck Calculator", desc: "No state tax - Federal only"},
    {href: "/texas/rent-increase-calculator", title: "Texas Rent Increase Calculator", desc: "No rent control - 30 day notice required"},
  ];
  return(
    <div className="max-w-5xl mx-auto p-6 py-12">
      <h1 className="text-5xl font-bold">Texas Calculators (2025-26)</h1>
      <p className="text-gray-600 mt-3">3 essential calculators for Texas residents - updated for 2025 law.</p>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {tools.map(t=>(
          <a key={t.href} href={t.href} className="border rounded-xl p-5 hover:shadow-lg transition bg-white">
            <h3 className="font-bold text-lg">{t.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{t.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
