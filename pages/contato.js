import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contato() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-[#0f172a] text-white">
      <h1 className="text-4xl font-semibold mb-4 text-orange-500">Entre em contato com a Mind4Ind</h1>

      <p className="text-lg text-gray-300 mb-8 text-center max-w-xl">
        Soluções em automação industrial com tecnologia, segurança e competência. Fale com a gente:
      </p>

      <div className="space-y-6 text-lg">
        <a
          href="https://www.linkedin.com/company/nome-da-sua-empresa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-orange-400 hover:text-orange-500 transition-colors duration-200"
        >
          <FaLinkedin size={24} /> LinkedIn da Empresa
        </a>

        <a
          href="https://wa.me/5527999462712"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-orange-400 hover:text-orange-500 transition-colors duration-200"
        >
          <FaWhatsapp size={24} /> WhatsApp: +55 27 99946-2712
        </a>

        <a
          href="mailto:eng.claudio.martins@outlook.com"
          className="flex items-center gap-3 text-orange-400 hover:text-orange-500 transition-colors duration-200"
        >
          <FaEnvelope size={24} /> Email: eng.claudio.martins@outlook.com
        </a>
      </div>
    </div>
  );
}
