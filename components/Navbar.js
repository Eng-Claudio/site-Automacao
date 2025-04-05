// import Link from 'next/link'

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-900 text-white p-4">
//       <ul className="flex gap-6">
//         <li><Link href="/">Início</Link></li>
//         <li><Link href="/servicos">Serviços</Link></li>
//         <li><Link href="/projetos">Projetos</Link></li>
//         <li><Link href="/contato">Contato</Link></li>
//       </ul>
//     </nav>
//   )
// }
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Mind4Ind</h1>
        <ul className="flex gap-6">
          <li><Link href="/">Início</Link></li>
          <li><Link href="/servicos">Serviços</Link></li>
          <li><Link href="/projetos">Projetos</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </div>
    </nav>
  )
}
