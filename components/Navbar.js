import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/CME_FundoLaranja.png" alt="Mind4Ind Logo" width={90} height={80} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition">Início</Link>
          <Link href="/servicos" className="hover:text-blue-600 transition">Serviços</Link>
          <Link href="/projetos" className="hover:text-blue-600 transition">Projetos</Link>
          <Link href="/contato" className="hover:text-blue-600 transition">Contato</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <Link href="/" className="block text-sm text-gray-700 hover:text-blue-600 transition">Início</Link>
          <Link href="/servicos" className="block text-sm text-gray-700 hover:text-blue-600 transition">Serviços</Link>
          <Link href="/projetos" className="block text-sm text-gray-700 hover:text-blue-600 transition">Projetos</Link>
          <Link href="/contato" className="block text-sm text-gray-700 hover:text-blue-600 transition">Contato</Link>
        </div>
      )}
    </header>
  )
}
