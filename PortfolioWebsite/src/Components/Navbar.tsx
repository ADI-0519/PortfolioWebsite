import { useEffect, useState } from "react";
import Button from "./button"




function Navbar() {

    

    const [isScrolled, setScroll] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

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


            {/* mobile nav */}

            {/* <div className={`"fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden" ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="flex flex-col text-xl ">                
                
                    <Button href={"#home"} text={"Home"}/>

                    <Button href={"#about"} text={"About"}/>

                    <Button href={"#experience"} text={"Experience"}/>
                
                    <Button href={"#projects"} text={"Projects"}/>

                    <Button href={"#contact"} text={"Contact"}/>

                </div>
            </div> */}


            
            
        </div>




      
    </nav>
  )
}

export default Navbar
