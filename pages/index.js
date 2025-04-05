// Pagina inicial (Home) do aplicativo Next.js
// function Home() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold underline">Hello world!</h1>
//     </div>
//   );
// }
// export default Home;

export default function Home() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Automação com Inovação e Segurança</h2>
      <p className="text-lg text-gray-700 mb-6">
        A Mind4Ind oferece soluções completas de engenharia de automação industrial, com foco em inovação, confiabilidade e eficiência para gestores industriais.
      </p>
      <a href="/servicos" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Conheça nossos serviços
      </a>
    </section>
  )
}
