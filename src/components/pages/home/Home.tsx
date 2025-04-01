// Componets
import Banner from "../../banner/Banner"
import CopyRightsFooter from "../../common/footer/CopyRightsFooter"
// import Footer from "../../common/footer/Footer"
import Navbar from "../../common/navbar/Navbar"
import Contact from "../../contact/Contact"
import Features from "../../features/Features"
import Projects from "../../Projects/Projects"
import Resume from "../../Resume/Resume"

const Home = () => {
  return (
    <div className="homeMainComponent w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        {/* <Footer /> */}
        <CopyRightsFooter />
      </div>
    </div>
  )
}

export default Home