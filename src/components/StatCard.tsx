export default function StatCard({ title, value }: { title: string, value: number }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
      <p className="text-gray-400 text-xs uppercase font-semibold">{title}</p>
      <p className="text-2xl font-bold text-teal-600">{value}</p>
    </div>
  );
}