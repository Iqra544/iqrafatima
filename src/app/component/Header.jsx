export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg p-6 rounded-b-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-wide">📘 My Awesome App</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:underline text-lg">Home</a>
          <a href="#" className="hover:underline text-lg">About</a>
          <a href="#" className="hover:underline text-lg">Contact</a>
        </nav>
      </div>
    </header>
  );
}


