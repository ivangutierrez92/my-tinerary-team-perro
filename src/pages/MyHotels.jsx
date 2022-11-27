import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter} from "react-router-dom";
import "../styles/pages/MyCollection.css";
import myHotelsActions from "../redux/actions/myHotelsActions";
import swal from "sweetalert";

export default function MyHotels() {
  let user = useSelector((store)=>store.signIn)
  
  
  let { myHotelInit,myHotelDelete }= myHotelsActions;
  let {hotelList}=useSelector((store)=> store.myHotels)
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(user?.id)
    dispatch(myHotelInit({userId:`${user.id}`}));
  }, []);
  console.log(hotelList);
  

const  deleteHotel = async(id) => {
  
  try {
    let answer = await swal("Are you sure you want to delete this hotel?", {
      buttons: ["cancel", "delete"],
      dangerMode: true,
    });
    if (answer) {
      dispatch(myHotelDelete({ hotelId: id,token:user.token}));
    }
  } catch (error) {
    swal("Something wrong",error.message,"error")
  }
  


}


  
  return (
    <div className="MyCollection">
      <h1 className="MyCollection-title">My Hotels</h1>
      <div className="MyCollection-tableContainer">
        <table className="MyCollection-table">
          <thead>
            <tr>
              <th>Hotels</th>
              <th className="MyCollection-columnButton"></th>
              <th className="MyCollection-columnButton"></th>
            </tr>
          </thead>
          <tbody>
          {hotelList.map(hotel=>{
            return(
            <tr key={hotel._id}>
              <td>{hotel.name}</td>
              <td className="MyCollection-buttonContainer">
                <button onClick=
                {()=>deleteHotel(hotel._id)} className="MyCollection-deleteButton">
                  <img src="/img/bx-trash.svg" alt="delete" />
                </button>
              </td>
              <td className="MyCollection-buttonContainer">
                <LinkRouter to={`/myHotels/${hotel._id}`} >
                  <button className="MyCollection-editButton">
                    <img src="/img/bx-edit.svg" alt="edit" />
                  </button>
                </LinkRouter>
              </td>
            </tr>
           )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
