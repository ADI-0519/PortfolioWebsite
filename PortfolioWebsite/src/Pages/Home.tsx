import Navbar from "../Components/Navbar"
import StarBackground from "../Components/StarBackground"
import Toggle from "../Components/toggle"
 
const Home = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden bg-background">
        <Toggle />
        <Navbar />
        <StarBackground />


    </div>
  )
}

export default Home
