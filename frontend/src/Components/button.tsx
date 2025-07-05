
// type true => padded btn
interface ButtonProps{
    href: string,
    type?: boolean,
    text: string
}

export default function buttons({href,type,text}:ButtonProps) {
    
  
    function handleClick(){
        
    }

    return (
      <a href={href}>
        <div>
          <button className = {`${type ? "cosmic-button" : "text-foreground hover:text-primary font-bold text-xl cursor-pointer transition-all duration-300 rounded-xl" }`} onClick={handleClick}>{text}</button>
        </div>    
      </a>
    
  )
}
