import FormNewHotel from "../components/FormNewHotel";
import "../styles/pages/new-hotel.css";
import axios from "axios";

export default function NewHotel() {
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
        alert(response.data.message);
      })
      .catch(error => {
        alert(`${error.response.data.message}, ${error.message}`);
      });
  };
  return (
    <div className="form-container">
      <h1>New Hotel</h1>
      <FormNewHotel onSubmit={sendData} />
    </div>
  );
}
