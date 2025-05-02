import { SETTINGS } from '../utils/constants'

export default function CalculationExplanation() {
  return (
    <details className="p-4 border rounded text-sm">
      <summary className="cursor-pointer font-medium mb-2 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h6m0 0v6m0-6L10 20"
          />
        </svg>
        🔢 Explication du calcul
        <div className="absolute top-0 right-0 mt-1 mr-2 bg-white border text-xs px-2 py-1 shadow-sm rounded hidden group-hover:block">
          Tous les calculs sont basés sur le salaire brut annuel, la durée estimée et un taux de
          valorisation du gain de temps.
        </div>
      </summary>
      <div className="absolute top-0 right-0 mt-1 mr-2 bg-white border text-xs px-2 py-1 shadow-sm rounded hidden group-hover:block">
        Tous les calculs sont basés sur le salaire brut annuel, la durée estimée et un taux de
        valorisation du gain de temps.
      </div>
      <div className="mt-2 space-y-2">
        <p>
          <strong>1. Le calcul du taux horaire</strong>
        </p>
        <p>
          Le taux horaire est déduit à partir du salaire annuel brut d’un assistant logistique et du
          nombre moyen d’heures travaillées par an selon le pays.
        </p>
        <p>
          <code>Taux horaire = Salaire annuel brut ÷ Heures annuelles</code>
        </p>

        <p>
          <strong>2. Durée de traitement</strong>
        </p>
        <p>
          Le coût manuel correspond au temps qu’un assistant mettrait à traiter une Packing List,
          converti en coût horaire.
        </p>
        <p>
          <code>Coût manuel = (Durée en minutes ÷ 60) × Taux horaire</code>
        </p>

        <p>
          <strong>3. Prix suggéré</strong>
        </p>
        <p>
          Le prix de l'application est basé sur 15% du coût manuel économisé, car elle remplace
          totalement la tâche manuelle.
        </p>
        <p>
          <code>Prix suggéré = Coût manuel × 15%</code>
        </p>

        <p>
          <strong>4. Prix total estimé</strong>
        </p>
        <p>
          En multipliant le prix suggéré par le volume annuel estimé, on obtient le montant total
          pour l'utilisation de l'application sur une année.
        </p>
        <p>
          <code>Prix total = Prix suggéré × Nombre de documents par an</code>
        </p>

        <p>
          <strong>5. Hypothèses horaires</strong>
        </p>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-1">Pays</th>
              <th className="border-b p-1">Heures / semaine</th>
              <th className="border-b p-1">Semaines / an</th>
              <th className="border-b p-1">Heures / an</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-1">🇨🇭 Suisse</td>
              <td className="p-1">42 h</td>
              <td className="p-1">47.5</td>
              <td className="p-1">~{SETTINGS.HOURS.ch} h</td>
            </tr>
            <tr>
              <td className="p-1">🇫🇷 France</td>
              <td className="p-1">35 h</td>
              <td className="p-1">47.5</td>
              <td className="p-1">~{SETTINGS.HOURS.fr} h</td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>
  )
}
