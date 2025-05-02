interface PricingResultsProps {
  duration: number
  effectiveRate: number
  manualCost: number
  captureRate: number
  suggestedPrice: number
  annualVolume: number
  finalPrice: number
  currency: string
}

export default function PricingResults({
  duration,
  effectiveRate,
  manualCost,
  captureRate,
  suggestedPrice,
  annualVolume,
  finalPrice,
  currency,
}: PricingResultsProps) {
  return (
    <div className="p-4 bg-gray-100 rounded space-y-2 border-l-4 border-blue-400">
      <p>
        💰 <strong>Coût manuel par document :</strong>
        <br />
        Ce montant correspond au coût du travail réalisé manuellement ({duration} min ×{' '}
        {effectiveRate.toFixed(2)} {currency}/h ÷ 60) =
        <strong>
          {' '}
          {manualCost.toFixed(2)} {currency}
        </strong>
      </p>
      <p>
        💡 <strong>Prix suggéré basé sur le gain de temps :</strong>
        <br />
        L'application remplace un traitement manuel de {duration} minutes par un traitement quasi
        instantané.
        <br />
        Le prix proposé correspond à 15% du coût manuel économisé.
        <br />
        (ex : {manualCost.toFixed(2)} × {captureRate}%) ={' '}
        <strong>
          {suggestedPrice.toFixed(2)} {currency}
        </strong>
      </p>
      <p>
        📦 <strong>Prix total estimé :</strong>
        <br />
        Ce montant correspond au prix total pour {annualVolume} documents à{' '}
        {suggestedPrice.toFixed(2)} {currency} pièce.
        <br />({suggestedPrice.toFixed(2)} × {annualVolume}) ={' '}
        <strong>
          {finalPrice.toLocaleString()} {currency}
        </strong>
      </p>
    </div>
  )
}
