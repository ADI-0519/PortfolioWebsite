import AboutMe from "../Components/AboutMe"
import Contact from "../Components/Contact"
import Experience from "../Components/Experience"
import Footer from "../Components/Footer"
import MainPage from "../Components/MainPage"
import Navbar from "../Components/Navbar"
import Projects from "../Components/Projects"
import StarBackground from "../Components/StarBackground"
import Toggle from "../Components/toggle"
 
const Home = () => {
  return (
    <div className="h-full text-foreground overflow-x-hidden bg-background">
        <Toggle />

        <StarBackground />

        <Navbar />

        <MainPage/>

        <AboutMe />

        <Experience />

        <Projects />

        <Contact />

        <Footer />

    </div>
  )
}

export default Home
