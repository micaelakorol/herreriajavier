import './globals.css'
import Imagen from './ui/Carrusel/Imagen'
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
      <Footer />
    </>
  )
}

export default App
