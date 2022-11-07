import React,{useRef} from 'react'
import FormNewHotel from '../components/FormNewHotel';
import Layout from '../layouts/Layout'
import "../styles/pages/new-hotel.css"





export default function NewHotel() {
  let form= useRef(null)
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
   hotelStorage=JSON.parse(hotelStorage)
  hotelStore.push(hotelStorage)
  console.log(hotelStore)
  localStorage.setItem("hotels", JSON.stringify(hotelStore))
  }
  
  
  return (
    <Layout>
      <div className="form-container">
        <FormNewHotel formRef={form} onSubmit={sendData}/>
        
      </div>
    </Layout>
  );
} 
