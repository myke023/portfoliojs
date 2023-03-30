import About from '../components/About'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Carouselcontainer from '../components/Carouselcontainer'
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Carouselcontainer></Carouselcontainer>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default Home