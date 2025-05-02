// src/App.tsx
import PricingSimulator from './components/PricingSimulator'
import PricingChart from './components/PricingChart'
import { useState } from 'react'
import { getEffectiveRate } from './utils/calculations'
import { SETTINGS } from './utils/constants'

function App() {
  const [annualSalary, setAnnualSalary] = useState(SETTINGS.DEFAULT_SALARY)
  const [duration, setDuration] = useState(SETTINGS.DEFAULT_DURATION)
  const [country, setCountry] = useState<'ch' | 'fr'>('ch')
  const [annualVolume, setAnnualVolume] = useState(SETTINGS.DEFAULT_VOLUME)

  const annualHours = SETTINGS.HOURS[country]
  const currency = country === 'ch' ? 'CHF' : 'EUR'
  const effectiveRate = getEffectiveRate(annualSalary, annualHours)
  const manualCost = (duration / 60) * effectiveRate
  const suggestedPrice = (manualCost * SETTINGS.CAPTURE_RATE) / 100

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🧮 Price Simulator Packing List</h1>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
        <div className="md:col-span-7">
          <PricingSimulator
            country={country}
            setCountry={setCountry}
            annualSalary={annualSalary}
            setAnnualSalary={setAnnualSalary}
            duration={duration}
            setDuration={setDuration}
            annualVolume={annualVolume}
            setAnnualVolume={setAnnualVolume}
          />
        </div>
        <div className="md:col-span-3">
          <PricingChart
            manualCost={manualCost}
            suggestedPrice={suggestedPrice}
            currency={currency}
          />
        </div>
      </div>
    </main>
  )
}

export default App
