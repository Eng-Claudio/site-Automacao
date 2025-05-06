//rodapé 
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Mind4Ind. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
