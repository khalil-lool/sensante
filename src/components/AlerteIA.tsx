export default function AlerteIA({ message, niveau }: { message: string, niveau: string }) {
  return (
    <div className="p-4 bg-orange-50 border border-orange-200 rounded-md">
      <p className="text-orange-800 font-medium">🤖 Assistant IA :</p>
      <p className="text-orange-700">{message} (Priorité : {niveau})</p>
    </div>
  );
}