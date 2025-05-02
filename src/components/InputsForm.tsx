import { CountryType } from '../types'

interface InputsFormProps {
  country: CountryType
  annualSalary: number
  duration: number
  annualVolume: number
  currency: string
  onCountryChange: (value: CountryType) => void
  onAnnualSalaryChange: (value: number) => void
  onDurationChange: (value: number) => void
  onAnnualVolumeChange: (value: number) => void
}

export default function InputsForm({
  country,
  annualSalary,
  duration,
  annualVolume,
  currency,
  onCountryChange,
  onAnnualSalaryChange,
  onDurationChange,
  onAnnualVolumeChange,
}: InputsFormProps) {
  return (
    <>
      <div>
        <label className="block font-medium mb-1">Pays</label>
        <select
          value={country}
          onChange={(e) => onCountryChange(e.target.value as CountryType)}
          className="border rounded p-2 w-full"
        >
          <option value="ch">🇨🇭 Suisse</option>
          <option value="fr">🇫🇷 France</option>
        </select>
      </div>

      <div>
        <label className="block font-medium mb-1">Salaire brut annuel ({currency})</label>
        <input
          type="number"
          value={annualSalary}
          onChange={(e) => onAnnualSalaryChange(Number(e.target.value))}
          className="border rounded p-2 w-full"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Durée estimée (minutes)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => onDurationChange(Number(e.target.value))}
          className="border rounded p-2 w-full"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Volume annuel (documents)</label>
        <input
          type="number"
          value={annualVolume}
          step="500"
          onChange={(e) => onAnnualVolumeChange(Number(e.target.value))}
          className="border rounded p-2 w-full"
        />
      </div>
    </>
  )
}
