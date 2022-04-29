import React from 'react'
import Card from './Card'

import { Object } from './Object'

const Main = () => {
    let detail = Object.map(item => {
        console.log(item)
    })
    console.log("details: ", detail)
  return (
    <div class='main'>

        {
            Object.map(item => {
                return(
                    <Card key={item.id}
                    title={item.title} 
                    country={item.country}
                    text={item.text}
                    date={item.date}
                    image={item.coverImg}
                    
                    />
                )
            })
        }

        {/* <Card />
        <Card />
        <Card /> */}
    </div>
  )
}

export default Main

// {/* <div className='card'>
//             <div className='card--image'>
//                 <img src='https://source.unsplash.com/WLxQvbMyfas'/>
//             </div>
//             <div className='card--details'>
//                 <div>
//                     <ImLocation className='card--icon'/>
//                     <span className='card--country'>JAPAN</span>
//                     <span className='card--googlemap'>View on Google Maps</span>
//                 </div>
//                 <h1 className='card--title'>Mount Fuji</h1>
            
//                 <p className='card--date'>12 Jan,2021 - 24 Jan,2021 </p>
            
//                 <p className='card--text'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            
//             </div>
//         </div> */}


//         <div className='card'>
//             <div className='card--image'>
//                 <img src='https://source.unsplash.com/WLxQvbMyfas'/>
//             </div>
//             <div className='card--details'>
//                 <div>
//                     <ImLocation className='card--icon'/>
//                     <span className='card--country'>JAPAN</span>
//                     <span className='card--googlemap'>View on Google Maps</span>
//                 </div>
//                 <h1 className='card--title'>Mount Fuji</h1>
            
//                 <p className='card--date'>12 Jan,2021 - 24 Jan,2021 </p>
            
//                 <p className='card--text'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            
//             </div>
//         </div>

//         <div className='card'>
//             <div className='card--image'>
//                 <img src='https://source.unsplash.com/WLxQvbMyfas'/>
//             </div>
//             <div className='card--details'>
//                 <div>
//                     <ImLocation className='card--icon'/>
//                     <span className='card--country'>JAPAN</span>
//                     <span className='card--googlemap'>View on Google Maps</span>
//                 </div>
//                 <h1 className='card--title'>Mount Fuji</h1>
            
//                 <p className='card--date'>12 Jan,2021 - 24 Jan,2021 </p>
            
//                 <p className='card--text'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            
//             </div>
//         </div>