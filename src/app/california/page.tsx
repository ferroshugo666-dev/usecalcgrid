export default function Page(){
  const tools = [
    {href: "/california/rent-increase-calculator", title: "Rent Increase Calculator (AB 1482)", desc: "Max legal increase by county 2025-26"},
    {href: "/california/overtime-calculator", title: "Overtime Calculator", desc: "1.5x after 8h, 2x after 12h"},
    {href: "/california/final-paycheck-calculator", title: "Final Paycheck Penalty", desc: "Penalty up to 30 days - LC 203"},
    {href: "/california/mileage-calculator", title: "Mileage Reimbursement", desc: ".70/mile IRS 2025"},
    {href: "/california/security-deposit-calculator", title: "Security Deposit Calculator", desc: "Max limits + interest"},
    {href: "/california/paycheck-calculator", title: "Paycheck Calculator", desc: "Net pay with CA SDI"},
  ];
  return(
    <div className="max-w-5xl mx-auto p-6 py-12">
      <h1 className="text-5xl font-bold">California Calculators (2025-26)</h1>
      <p className="text-gray-600 mt-3">6 official calculators updated for California law. For tenants, landlords, employees.</p>
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
