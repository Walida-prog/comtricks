export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200">
      <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ComTricks
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Contact
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Mentions legales
          </a>
        </div>
      </div>
    </footer>
  )
}