import FormNewHotel from "../components/FormNewHotel";
import "../styles/pages/new-hotel.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function NewHotel() {
   let {id,token} = useSelector((store) => store.signIn);

 let nav = useNavigate();
  const sendData = event => {
      let headers = { headers: { Authorization: `Bearer ${token}` } };

    let hotelObject = {};

    event.preventDefault();
    let inputs = [...event.target.elements];

    inputs.forEach(input => {
      if (input.id !== "form-button") {
        let name = input.name;
        hotelObject[name] = input.value;
      }
    });

    hotelObject["userId"] =id
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/hotels/`, hotelObject,headers)
      .then(response => {
        if(response.data.success){
        swal("Hotel created","the Hotel was successfully created","success")
        nav(`/hotel/${response.data.id}`)
        }else{
        swal("Error creating new Hotel", response.data.message.join("\n"), "error");

        }
      })
    
      .catch(error => {
        swal("Error creating new Hotel",error.response.data.message,"error")
      });
  };
  return (
    <div className="form-container">
      <h1>New Hotel</h1>
      <FormNewHotel onSubmit={sendData} />
    </div>
  );
}



