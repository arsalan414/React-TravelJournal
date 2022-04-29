import React from 'react'
import { ImLocation } from 'react-icons/im'

const Card = (props) => {
    console.log(props)
  return (
    <div className='card'>
        <div className='card--image'>
            <img src={props.image}/>
        </div>
        <div className='card--details'>
            <div>
                <ImLocation className='card--icon'/>
                <span className='card--country'>{props.country }</span>
                <span className='card--googlemap'>View on Google Maps</span>
            </div>
            <h1 className='card--title'>{props.title}</h1>
        
            <p className='card--date'>{props.date} </p>
        
            <p className='card--text'>{props.text}</p>
        
        </div>
    </div>
  )
}

export default Card