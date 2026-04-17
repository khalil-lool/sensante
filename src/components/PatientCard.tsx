interface PatientCardProps {
  nom: string;
  region: string;
  age: number;
  sexe: "M" | "F";
}

export default function PatientCard({
  nom, region, age, sexe
}: PatientCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800">
          {nom}
        </h3>
        {sexe === "F" ? (
          <span className="text-xs px-2 py-1 rounded-full bg-pink-100 text-pink-700 border border-pink-300">
            Femme
          </span>
        ) : (
          <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-300">
            Homme
          </span>
        )}
      </div>
      <p className="text-gray-600 mt-1">
        {region} — {age} ans
      </p>
    </div>
  );
}