import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex gap-6">
        <li><Link href="/">Início</Link></li>
        <li><Link href="/servicos">Serviços</Link></li>
        <li><Link href="/projetos">Projetos</Link></li>
        <li><Link href="/contato">Contato</Link></li>
      </ul>
    </nav>
  )
}
