import PatientCard from "@/components/PatientCard";
import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-teal-700">
          SénSanté
        </h1>
        <LoginButton />
      </div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Patients
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PatientCard nom="Aminata Sow" region="Dakar" age={28} sexe="F" />
        <PatientCard nom="Moussa Diop" region="Saint-Louis" age={45} sexe="M" />
        <PatientCard nom="Fatou Ndiaye" region="Thiès" age={32} sexe="F" />
      </div>
    </main>
  );
}