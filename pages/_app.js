import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
// O código acima é o arquivo _app.js de um aplicativo Next.js. Ele importa os estilos globais e dois componentes: Navbar e Footer. O componente App renderiza a barra de navegação, o componente da página atual (Component) e o rodapé. Isso garante que a barra de navegação e o rodapé apareçam em todas as páginas do aplicativo.
// O arquivo _app.js é um ponto de entrada para personalizar o comportamento do aplicativo Next.js. Ele permite que você adicione lógica global, como provedores de contexto, estilos globais e outros componentes que devem ser renderizados em todas as páginas. Neste caso, a barra de navegação e o rodapé são renderizados em todas as páginas do aplicativo, garantindo uma experiência de navegação consistente para os usuários.