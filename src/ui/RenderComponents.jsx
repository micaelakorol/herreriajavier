
import Navigation from '../ui/Nav/Navigation'
import MainPresentation from '../ui/Presentation/MainPresentation'
import Services from '../ui/Services/Services'
import Footer from '../ui/Footer/Footer'
import CardJobs from '../ui/Carousel/CardJobs'

const RenderComponents = () => {
  return (
    <>
     <Navigation />
      <MainPresentation/>
      <Services />
      <CardJobs />
      <Footer />
    </>
  )
}

export default RenderComponents