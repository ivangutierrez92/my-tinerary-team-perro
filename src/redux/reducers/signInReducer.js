import { createReducer } from "@reduxjs/toolkit";
import swal from "sweetalert";
import signInActions from "../actions/signInActions"
const {sendData,resendData}=signInActions;

const initialState = {
  name:"",
  photo:"",
  online:false,
  role:"",
  token:"",

}

const signInReducer= createReducer(initialState,(builder)=>{
  builder
  .addCase(sendData.fulfilled, (state, action)=>{
    const{success,response}= action.payload
  console.log(action.payload)    
    
   if(success){
     let { user, token } = response;
     console.log(token);
     console.log(user);
     localStorage.setItem("token", JSON.stringify({token: {user:token}}));
    let newState={
      ...state,
      name:user.name,
      photo:user.photo,
      online:true,
      role:user.role,
      token:token
    }
    // nav(`/home`)
    return newState;
   }else{
    if(Array.isArray(action.payload.message)){
      swal("error",action.payload.message.join("\n"),"error")

    }else{
      swal("error",action.payload.message,"error")
    }
   } 
  })
  .addCase(resendData.fulfilled, (state, action)=>{
    console.log(action)
    const{success,response,token}= action.payload       
   if(success){
    console.log("hola ivan")
     let { user } = response;
     console.log(token);
     console.log(user);
    let newState={
      ...state,
      name:user.name,
      photo:user.photo,
      online:true,
      role:user.role,
      token:token,
    }
    // nav(`/home`)
    return newState;
   }else{
    if(Array.isArray(action.payload.message)){
      swal("error",action.payload.message.join("\n"),"error")

    }else{
      swal("error",action.payload.message,"error")
    }
   } 

  })

})

export default signInReducer












