import { useState } from 'react'
import { CountryType } from '../types'
import { getEffectiveRate } from '../utils/calculations'
import InputsForm from './InputsForm'
import PricingResults from './PricingResults'
import CalculationExplanation from './CalculationExplanation'
import { SETTINGS } from '../utils/constants'

export default function PricingSimulator() {
  const [country, setCountry] = useState<CountryType>('ch')
  const [annualSalary, setAnnualSalary] = useState(SETTINGS.DEFAULT_SALARY)
  const [duration, setDuration] = useState(SETTINGS.DEFAULT_DURATION)
  const [annualVolume, setAnnualVolume] = useState(SETTINGS.DEFAULT_VOLUME)

  const currency = country === 'ch' ? 'CHF' : 'EUR'
  const annualHours = SETTINGS.HOURS[country]
  const effectiveRate = getEffectiveRate(annualSalary, annualHours)
  const manualCost = (duration / 60) * effectiveRate
  const suggestedPrice = (manualCost * SETTINGS.CAPTURE_RATE) / 100
  const finalPrice = suggestedPrice * annualVolume

  return (
    <div className="space-y-4">
      <InputsForm
        country={country}
        annualSalary={annualSalary}
        duration={duration}
        annualVolume={annualVolume}
        currency={currency}
        onCountryChange={setCountry}
        onAnnualSalaryChange={setAnnualSalary}
        onDurationChange={setDuration}
        onAnnualVolumeChange={setAnnualVolume}
      />

      <PricingResults
        duration={duration}
        effectiveRate={effectiveRate}
        manualCost={manualCost}
        captureRate={SETTINGS.CAPTURE_RATE}
        suggestedPrice={suggestedPrice}
        annualVolume={annualVolume}
        finalPrice={finalPrice}
        currency={currency}
      />

      <CalculationExplanation />
    </div>
  )
}
