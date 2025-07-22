import AboutMe from "../Components/AboutMe"
import Blog from "../Components/Blog"
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
    <div className="h-full text-foreground bg-background">
        <Toggle />

        <StarBackground />

        <Navbar />

        <MainPage/>

        <AboutMe />

        <Projects />

        <Experience />

        <Blog />

       
        

        <Contact />

        <Footer />

    </div>
  )
}

export default Home
