import { useEffect, useState } from "react";
import Button from "./button"
import { Menu, X } from "lucide-react";


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
    <>
        <nav className={`w-full transition-all duration-300 fixed z-40 ${isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-lg" : "py-5"}`}>
            
            <div className="container flex justify-between p-5">
                <a className="text-xl font-bold text-primary flex items-center" href="#home">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">
                            Aditya Ranjan
                        </span> Portfolio
                    </span>

                </a>

                <div className="w-2/5 gap-8 hidden md:flex">
                    <Button href={"/#home"} text={"Home"}/>

                    <Button href={"/#about"} text={"About"}/>

                    <Button href={"/#projects"} text={"Projects"}/>

                    <Button href={"/#experience"} text={"Experience"}/>

                    <Button href={"/#blog"} text={"Blog"} />

                    <Button href={"/#contact"} text={"Contact"}/>

                </div>

                

                <button className="md:hidden p-2 text-foreground z-50 cursor-pointer" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} onClick={() => setMenuOpen((prev) => !(prev))}>{isMenuOpen ? <X size={24}/> : <Menu size={24}/>}</button>
                
            </div>

        
        </nav>


        <div className={`fixed inset-0 bg-background/95 backdrop-blur-md z-30 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            <div className="flex flex-col text-xl gap-6">                
            
                <div onClick={() => {setMenuOpen(false)}}>
                        <Button href={"#home"} text={"Home"}/>
                </div>

                <div onClick={() => {setMenuOpen(false)}}>
                    <Button href={"#about"} text={"About"}/>
                </div>

                <div onClick={() => {setMenuOpen(false)}}>
                    <Button href={"#projects"} text={"Projects"}/>
                </div>

                <div onClick={() => {setMenuOpen(false)}}>
                    <Button href={"#experience"} text={"Experience"}/>
                </div>

                <div onClick={() => {setMenuOpen(false)}}>
                    <Button href={"#contact"} text={"Contact"}/>
                </div>

            </div>
        </div>
    </>
  )
}

export default Navbar
