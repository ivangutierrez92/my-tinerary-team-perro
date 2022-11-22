import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import myTinerariesActions from "../redux/actions/myTinerariesActions";
import "../styles/pages/MyCollection.css";

export default function MyTineraries() {
  let { itineraries, message } = useSelector(state => state.myTineraries);
  let dispatch = useDispatch();
  let { getInitialMyTineraries, deleteItinerary: deleteItineraryAction } = myTinerariesActions;
  useEffect(() => {
    dispatch(getInitialMyTineraries({ endpoint: "/api/itineraries", userId: "636d1ed3692e58acbf29845c" }));
  }, []);

  const deleteItinerary = async (id, name) => {
    let res;
    try {
      res = await swal("Are you sure you want to delete " + name, {
        buttons: ["Cancel", "Delete"],
        dangerMode: true,
      });
    } catch (error) {
      swal("Error", "Sucedió un error", "error");
    }
    if (res) {
      dispatch(deleteItineraryAction({ itineraryId: id, endpoint: "/api/itineraries/" }));
    }
  };
  return (
    <div className="MyCollection">
      <h1 className="MyCollection-title">My Tineraries</h1>
      {message ? (
        <h2 className="MyCollection-title">{message}</h2>
      ) : (
        <div className="MyCollection-tableContainer">
          <table className="MyCollection-table">
            <thead>
              <tr>
                <th>Itineraries</th>
                <th className="MyCollection-columnButton"></th>
                <th className="MyCollection-columnButton"></th>
              </tr>
            </thead>
            <tbody>
              {itineraries.map(itinerary => {
                return (
                  <tr key={itinerary._id}>
                    <td>{itinerary.name}</td>
                    <td className="MyCollection-buttonContainer">
                      <button
                        className="MyCollection-deleteButton"
                        onClick={() => deleteItinerary(itinerary._id, itinerary.name)}
                      >
                        <img src="/img/bx-trash.svg" alt="delete" />
                      </button>
                    </td>
                    <td className="MyCollection-buttonContainer">
                      <Link to={`/mytineraries/${itinerary._id}`}>
                        <button className="MyCollection-editButton">
                          <img src="/img/bx-edit.svg" alt="edit" />
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
