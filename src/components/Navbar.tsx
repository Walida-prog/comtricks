import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <nav className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight text-gray-900">
          ComTricks
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Blog
          </Link>
          <Link href="/writeups" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Write-ups
          </Link>
          <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            A propos
          </Link>
        </div>
        <button className="md:hidden text-gray-600 hover:text-gray-900">
          Menu
        </button>
      </nav>
    </header>
  )
}