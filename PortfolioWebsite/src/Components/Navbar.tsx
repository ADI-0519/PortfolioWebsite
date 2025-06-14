import { useEffect, useState } from "react";
import Button from "./button"




function Navbar() {

    

    const [isScrolled, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10)
        }

        window.addEventListener("scroll",handleScroll)
        return () => window.removeEventListener("scroll",handleScroll)
    }, [])

  return (
    <nav className={`w-full transition-all duration-300 fixed z-40 ${isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-lg" : "py-5"}`}>
        
        <div className="container flex justify-between h-20 p-5">
            <a className="text-xl font-bold text-primary flex items-center" href="#home">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">
                        Aditya Ranjan
                    </span> Portfolio
                </span>

            </a>

            <div className="w-1/3 gap-10 hidden md:flex">
                <Button href={"#home"} text={"Home"}/>

                <Button href={"#about"} text={"About"}/>

                <Button href={"#experience"} text={"Experience"}/>
            
                <Button href={"#projects"} text={"Projects"}/>

                <Button href={"#contact"} text={"Contact"}/>
            </div>



            
            
        </div>




      
    </nav>
  )
}

export default Navbar
