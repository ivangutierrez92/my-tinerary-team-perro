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
    
   if(success){
     let { user, token } = response;
     localStorage.setItem("token", JSON.stringify({token: {user:token}}));
    let newState={
      ...state,
      name:user.name,
      photo:user.photo,
      online:true,
      role:user.role,
      token:token
    }
 
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
    const{success,response,token}= action.payload       
   if(success){
     let { user } = response;

    let newState={
      ...state,
      name:user.name,
      photo:user.photo,
      online:true,
      role:user.role,
      token:token,
    }
   
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












