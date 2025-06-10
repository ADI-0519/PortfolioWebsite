import { useEffect, useState } from "react";
import { Sun,Moon } from "lucide-react";


function toggle() {
  const [dark,setDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    
    if (theme === "dark"){
      document.documentElement.classList.add("dark");
      setDark(true)
    }
    else{
      document.documentElement.classList.remove("dark");
      setDark(false)
    }
  
  }, [dark])



  function handleClick(){
    if (dark){
      //document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light")
      setDark(false)
    }
    else{
      //document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark")
      setDark(true)
    }
  }



  return (
    <div className="outline-dashed text-purple">
      
      <button onClick={handleClick} className="fixed max-sm:hidden top-5 right-5 p-2 cursor-pointer rounded-full transition-colors duration-300 focus:outline-hidden z-50 w-10 h-10">
        {dark ? <Sun className="text-yellow-300"/> : <Moon className="text-blue-900"/>}

      </button>
      
    </div>
  )
}

export default toggle
