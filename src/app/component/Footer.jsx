export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Awesome App. All rights reserved.</p>
      </div>
    </footer>
  )
  }