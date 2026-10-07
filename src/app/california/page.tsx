export default function Page(){
  const tools = [
    {href: "/california/rent-increase-calculator", title: "Rent Increase Calculator (AB 1482)", desc: "Max legal increase by county 2025-26 - 8% with 3% CPI"},
    {href: "/california/overtime-calculator", title: "Overtime Calculator", desc: "1.5x after 8h, 2x after 12h - CA rules"},
    {href: "/california/final-paycheck-calculator", title: "Final Paycheck Penalty Calculator", desc: "Calculate penalty up to 30 days - LC 203"},
    {href: "/california/mileage-calculator", title: "Mileage Reimbursement 2025", desc: ".70/mile IRS - CA required"},
  ];
  return(
    <div className="max-w-4xl mx-auto p-6 py-12">
      <h1 className="text-5xl font-bold">California Calculators</h1>
      <p className="text-gray-600 mt-3">Official rules, updated 2025-26. Built for landlords, employees and contractors in CA.</p>
      <div className="grid md:grid-cols-2 gap-4 mt-8">
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
