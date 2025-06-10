import React, { useEffect, useState } from 'react'
import { MdOpacity } from 'react-icons/md'
import { useSearchParams } from 'react-router-dom'

//each star has id, size, x, y, opacity, animDur

function StarBackground() {
    
    const [stars,setStars] = useState([])

    useEffect(() => {
        generateStars()


    }, [])

    const generateStars = () => {


        const noStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars = []

        for (let i=0;i < noStars; i++){
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animDur: Math.random() * 4 + 2,

            })

        }

        setStars(newStars);
    }
    
    return (

    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      {stars.map((star,key) =>  (

        <div key = {star.id} className='star animate-pulse-subtle' style= />

      ))}
    </div>
  )
}

export default StarBackground
