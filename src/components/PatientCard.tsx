"use client";

// 1. On définit ce que le composant doit recevoir
interface PatientCardProps {
  nom: string;
  region: string;
  age: number;
  sexe: "M" | "F";
}

// 2. On passe ces variables en argument de la fonction
export default function PatientCard({ nom, region, age, sexe }: PatientCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
      sexe === "F" ? "border-pink-500" : "border-teal-500"
    }`}>
      <h3 className="text-lg font-bold text-gray-800">
        {nom} {/* ✅ Affiche maintenant le vrai nom envoyé */}
      </h3>
      <p className="text-gray-600 mt-1">
        Région : {region} {/* ✅ Affiche la vraie région */}
      </p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-500 text-sm">
          {age} ans
        </p>
        <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-100">
          {sexe}
        </span>
      </div>
    </div>
  );
}