import { useEffect, useState } from 'react'


//each star has id, size, x, y, opacity, animDur

type Star = {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  animDur: number;
};

// meteors have id, size, x, y, delay, animDur

type Meteor = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  animDur: number;
};


function StarBackground() {
    
    const [stars,setStars] = useState<Star[]>([]);
    const [meteors,setMeteors] = useState<Meteor[]>([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
        generateStars();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, []);


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



    const generateMeteors = () => {


        const noMeteors = 3;

        const newMeteors = []

        for (let i=0;i < noMeteors; i++){
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animDur: Math.random() * 3 + 3,

            })

        }

        setMeteors(newMeteors);
    }
    
    return (

    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      {stars.map((star) =>  (

        <div key = {star.id} className='star animate-pulse-subtle' style= {{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animDur + "s",
        }}/>

      ))}

      {meteors.map((meteor) => (

            <div key={meteor.id} className='meteor animate-meteor' style={{
                width: meteor.size * 50 + "px",
                height: meteor.size + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: `$(meteor.delay)s`,
                animationDuration: meteor.animDur + "s",


            }}/>
      ))}

    </div>
  )
}

export default StarBackground
