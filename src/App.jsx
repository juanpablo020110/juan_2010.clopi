import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Gallery from './components/Gallery'
import Sedes from './components/Sedes'
import Horarios from './components/Horarios'
import Pedidos from './components/Pedidos'
import Faq from './components/Faq'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-gold-400 focus:px-4 focus:py-2 focus:font-bold"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Sedes />
        <Horarios />
        <Pedidos />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
