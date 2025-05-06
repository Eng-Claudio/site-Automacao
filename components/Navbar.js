// components/Header.tsx
import Link from "next/link";
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#0f172a] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo-mind4ind.png" alt="Mind4Ind Logo" width={80} height={80} />
        </Link>
        <div className="text-2xl font-bold text-orange-500">
          Mind4Ind
        </div>

        {/* Navegação */}
        <nav className="flex gap-8">
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
