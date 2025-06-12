import Button from "./button"

function MainPage() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-4 gap-5">
        <div className="container mx-auto z-10 text-5xl text-foreground font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">
              Hi, my name is
            </span> 
            <span className="text-primary opacity-0 ml-1 animate-fade-in-delay-1"> {""} Aditya </span> 
            
            <span className="text-gradient ml-1 opacity-0 animate-fade-in-delay-2">
              {""} Ranjan
            </span> 
        </div>

        <div className="text-xl text-muted-foreground max-2-2xl opacity-0 animate-fade-in-delay-4 relative flex flex-col container z-10">
            Bsc Artificial Intelligence student at King's College London
        </div>

        <div className="flex flex-col items-center justify-center container opacity-0 animate-fade-in-delay-4">
          <Button text={"View my Work"} type={true} href={"#projects"}/>
        </div>
        

    </section>
  )
}

export default MainPage
