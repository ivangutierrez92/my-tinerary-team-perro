import React,{useState} from 'react'
import "../styles/components/show.css"
export default function Show({shows}) {
let [buttonComent,SetButtonComent]=useState(false)
 
const buttonClick=()=>(SetButtonComent(!buttonComent))
console.log(buttonComent)



return (
    <article className='card-show'>
      <img className='img-show' src={shows.photo} alt={shows.name}/>
      <p className='p-show'>{shows.name}</p>
      <p className='show-description' >{shows.description}</p>
      <p>Price: $ {shows.price}</p>
      <button  className='show-button' onClick={buttonClick} >
        Comments
      </button>
      {
        buttonComent ? <hr></hr> : ""
      }



    </article>
  );
}

