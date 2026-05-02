export default function Header() {
  return (
    <header className="bg-teal-700 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        <span className="text-2xl">🏥</span>
        <h1 className="text-xl font-bold tracking-wide">SénSanté</h1>
      </div>
      <p className="text-teal-200 text-sm">
        Assistant de santé communautaire
      </p>
    </header>
  );
}
