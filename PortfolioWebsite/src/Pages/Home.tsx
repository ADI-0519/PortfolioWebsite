import AboutMe from "../Components/AboutMe"
import MainPage from "../Components/MainPage"
import Navbar from "../Components/Navbar"
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

    </div>
  )
}

export default Home
