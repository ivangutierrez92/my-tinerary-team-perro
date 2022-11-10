import React,{useRef} from 'react'
import FormNewHotel from '../components/FormNewHotel';
import Layout from '../layouts/Layout'
import "../styles/pages/new-hotel.css"





export default function NewHotel() {
  let hotelStore=[];
  const sendData= event=>{
    let hotelObject = {};
    event.preventDefault();
let inputs=[...event.target.elements]

   inputs.forEach((input)=>{
    if(input.id !=='form-button'){
      let name= input.name
      hotelObject[name]=input.value
    }
   })
   
   let hotelStorage =localStorage.getItem('hotels')
  hotelStorage=hotelStorage ? JSON.parse(hotelStorage): []
  hotelStorage.push(hotelObject)
  console.log(hotelStore)
  localStorage.setItem("hotels", JSON.stringify(hotelStorage))
  
}
  
  
  return (
    <Layout>
      <div className="form-container">
        <FormNewHotel  onSubmit={sendData}/>
        
      </div>
    </Layout>
  );
} 
