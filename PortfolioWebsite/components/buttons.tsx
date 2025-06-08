import React from 'react'
import { useState, useEffect } from 'react'


interface ButtonProps{
    href: String,
    type?: String,
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
      <button className = "text-white bg-sky-600 hover:bg-amber-200 font-bold text-xl cursor-pointer transition-all duration-100 rounded-xl" onClick={handleClick}>{text}</button>
    </div>
  )
}
