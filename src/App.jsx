import Heading from "./components/Headind"
import PrimaryHeader from "./components/PrimaryHeader"
import NavigationMenu from "./components/NavigationMenu"

import HeroSection from "./components/HeroSection"
import ReferProcess from "./components/ReferProcess"
import Benefits from "./components/Benefits"
import FAQ from "./components/FAQ"
import GetInTouch from "./components/GetInTouch"

import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Heading />
      <PrimaryHeader />
      <NavigationMenu />
      <HeroSection />
      <div id="refer"><ReferProcess /></div>
      <div id="benefits"><Benefits /></div>
      <div id="faq"><FAQ /></div>
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default App
