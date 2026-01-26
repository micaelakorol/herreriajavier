import './globals.css'
import Imagen from './ui/Carrusel/Imagen'
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
      <Imagen />
      <Cta />
      <Footer />
    </>
  )
}

export default App
