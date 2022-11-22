import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter} from "react-router-dom";
import "../styles/pages/MyCollection.css";
import myShowsActions from "../redux/actions/myShowsAction";
import swal from "sweetalert";



export default function MyShows() {
let {myShowsInit,myShowsDelete}= myShowsActions;
let{showsList}=useSelector((store)=>store.myShows)
const dispatch= useDispatch();

useEffect(()=>{
dispatch(myShowsInit({ userId: "636d1ed3692e58acbf29845e" }));


},[])

console.log(showsList)


const deleteShows= async(id)=>{


try {
 let answer = await swal("Are you sure you want to delete this show?",{buttons:["cancel","delete"],dangerMode:true})
  
if(answer){
  dispatch(myShowsDelete({show:id}))
}

} catch (error) {
  swal("Something went wrong",error.message,"error")
}


}




return (
  <div className="MyCollection">
    <h1 className="MyCollection-title">My Shows</h1>
    <div className="MyCollection-tableContainer">
      <table className="MyCollection-table">
        <thead>
          <tr>
            <th>Shows</th>
            <th className="MyCollection-columnButton"></th>
            <th className="MyCollection-columnButton"></th>
          </tr>
        </thead>
        <tbody>
          {showsList.map((show) => {
            return (
              <tr key={show._id}>
                <td>{show.name}</td>
                <td className="MyCollection-buttonContainer">
                  <button
                    onClick={() => deleteShows(show._id)}
                    className="MyCollection-deleteButton"
                  >
                    <img src="/img/bx-trash.svg" alt="delete" />
                  </button>
                </td>
                <td className="MyCollection-buttonContainer">
                  <LinkRouter to={`/myShows/${show._id}`}>
                    <button className="MyCollection-editButton">
                      <img src="/img/bx-edit.svg" alt="edit" />
                    </button>
                  </LinkRouter>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);


  
}