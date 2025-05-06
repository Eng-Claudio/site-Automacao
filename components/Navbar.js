import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#0f172a] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Nome */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-mind4ind.png" alt="Mind4Ind Logo" width={50} height={50} />
          <span className="text-2xl font-bold text-orange-500">Mind4Ind</span>
        </Link>

        {/* Navegação */}
        <nav className="flex gap-8 text-lg">
          <Link href="/" className="hover:text-orange-500 transition-colors duration-200">
            Início
          </Link>
          <Link href="/projetos" className="hover:text-orange-500 transition-colors duration-200">
            Projetos
          </Link>
          <Link href="/servicos" className="hover:text-orange-500 transition-colors duration-200">
            Serviços
          </Link>
          <Link href="/contato" className="hover:text-orange-500 transition-colors duration-200">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
