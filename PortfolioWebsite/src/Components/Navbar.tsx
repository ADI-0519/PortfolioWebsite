import Button from "./button"

function Navbar() {
  return (
    <nav className="text-black h-full w-full flex justify-between items-center">
        <div className="">
            <Button href = "/" text = "Home" type = "normal" />
        </div>


      
    </nav>
  )
}

export default Navbar
