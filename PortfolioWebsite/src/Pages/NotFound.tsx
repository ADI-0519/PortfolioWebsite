import StarBackground from "../Components/StarBackground"
import Toggle from "../Components/toggle"
import { useNavigate } from "react-router-dom";


const NotFound = () => {
  const navigate = useNavigate(); 
  return (
    <div>
      <Toggle />

      <StarBackground />

      
      <section className="py-24 px-4 outline-dashed min-h-screen items-center justify-center text-center min-w-screen flex flex-col gap-8">

        <div className="text-5xl text-foreground font-bold tracking-tight">404</div>
        
        <div className="text-5xl text-primary font-bold tracking-tight text-glow">
          Not found
        </div>

        <button className="cosmic-button mt-5" onClick={() => navigate("/")}>Back to Home</button>

      </section>
      
      

    </div>
  )
}

export default NotFound
