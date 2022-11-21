import FormNewHotel from "../components/FormNewHotel";
import "../styles/pages/new-hotel.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router";

export default function NewHotel() {
 let nav = useNavigate();
  const sendData = event => {
    let hotelObject = {};

    event.preventDefault();
    let inputs = [...event.target.elements];

    inputs.forEach(input => {
      if (input.id !== "form-button") {
        let name = input.name;
        hotelObject[name] = input.value;
      }
    });

    hotelObject["userId"] = "636d1ed3692e58acbf29845d";
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/hotels/`, hotelObject)
      .then(response => {
        swal("Hotel created","the Hotel was successfully created","success")
        nav(`/hotel/${response.data.id}`)
      })
      .catch(error => {
        swal("Error creating",error.response.data.message.join("\n"),"Error")
      });
  };
  return (
    <div className="form-container">
      <h1>New Hotel</h1>
      <FormNewHotel onSubmit={sendData} />
    </div>
  );
}



