import './globals.css'
import Carrusel from './ui/Carrusel/Carrusel'
import Confianza from './ui/Confianza/Confianza'
import Cta from './ui/CTA/Cta'
import Footer from './ui/Footer/Footer'
import Navegacion from './ui/Nav/Navegacion'
import Presentacion from './ui/Presentacion/Presentacion'
import ServiciosUI from './ui/Servicios/ServiciosUI'
const App = () => {
  return (
    <>
     <Navegacion />
      <Presentacion/>
      <ServiciosUI />
      <Confianza />
      <Carrusel />
      <Cta />
      <Footer />
    </>
  )
}

export default App
