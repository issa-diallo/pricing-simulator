import InputsForm from './InputsForm'
import PricingResults from './PricingResults'
import CalculationExplanation from './CalculationExplanation'
import { getEffectiveRate } from '../utils/calculations'
import { SETTINGS } from '../utils/constants'
import { CountryType } from '../types'

interface Props {
  country: CountryType
  setCountry: (value: CountryType) => void
  annualSalary: number
  setAnnualSalary: (value: number) => void
  duration: number
  setDuration: (value: number) => void
  annualVolume: number
  setAnnualVolume: (value: number) => void
}

export default function PricingSimulator({
  country,
  setCountry,
  annualSalary,
  setAnnualSalary,
  duration,
  setDuration,
  annualVolume,
  setAnnualVolume,
}: Props) {
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
