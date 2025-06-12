import React from 'react'
import { useState, useEffect } from 'react'


// type true => padded btn
interface ButtonProps{
    href: String,
    type?: boolean,
    text: String
}

export default function buttons({href,type,text}:ButtonProps) {
    
  
    function handleClick(){
        if (href){
            alert("Pushed")

        }
    }

    return (
    <div>
      <button className = {`${type ? "cosmic-button" : "text-foreground hover:text-primary font-bold text-xl cursor-pointer transition-all duration-300 rounded-xl" }`} onClick={handleClick}>{text}</button>
    </div>
  )
}
