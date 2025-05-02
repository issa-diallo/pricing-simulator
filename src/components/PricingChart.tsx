import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'

interface PricingChartProps {
  manualCost: number
  suggestedPrice: number
  currency: string
}

export default function PricingChart({ manualCost, suggestedPrice, currency }: PricingChartProps) {
  const economy = manualCost - suggestedPrice

  const data = [
    { name: 'Coût manuel', value: manualCost },
    { name: "Prix avec l'app", value: suggestedPrice },
    { name: 'Économie', value: economy > 0 ? economy : 0 },
  ]

  const COLORS = ['#3b82f6', '#34d399', '#facc15']

  return (
    <div className="p-2 border rounded bg-white shadow-sm h-full">
      <h2 className="text-base font-semibold mb-2 text-center">📊 Part du prix et de l'économie</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value.toFixed(2)} ${currency}`} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 text-center mt-2">
        Répartition du prix de l\'application et de l'économie réalisée.
      </p>
    </div>
  )
}
