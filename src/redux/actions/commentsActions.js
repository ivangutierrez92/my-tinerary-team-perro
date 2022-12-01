import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getInicialComments = createAsyncThunk(
  "getInicialComments",
  async (id) => {

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/comments?showId=${id}`
      );
     
      return {
        showId: id,
        success:true,
        response:response.data.response,

      }
    } catch (error) {
      return {
      success: false,
      message:error.response.data.message || error.response.data|| error.message

      }

    }
  }
);


const createComment= createAsyncThunk("createComment",async({newComment,headers})=>{

  try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/comments`,newComment,headers)
      console.log(response.data)
      return response.data


  } catch (error) {
      return{
        success:false,
        message:error.data.message|| error.response.data || error.message
      }
    }
  }





  
)







const commentsActions = {
  getInicialComments,
  createComment,
};

export default commentsActions;


