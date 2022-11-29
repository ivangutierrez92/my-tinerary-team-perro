import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import CollectionTable from "../components/CollectionTable";
import myTinerariesActions from "../redux/actions/myTinerariesActions";
import "../styles/pages/MyCollection.css";
import { Link as LinkRouter } from "react-router-dom";

export default function MyTineraries() {
  let user = useSelector(store => store.signIn);
  let { itineraries, message } = useSelector(state => state.myTineraries);
  let dispatch = useDispatch();
  let { getInitialMyTineraries, deleteItinerary: deleteItineraryAction } = myTinerariesActions;
  useEffect(() => {
    dispatch(getInitialMyTineraries({ endpoint: "/api/itineraries", userId: user.id }));
  }, []);

  const deleteItinerary = async (id, name) => {
    try {
      let res = await swal("Are you sure you want to delete " + name, {
        buttons: ["Cancel", "Delete"],
        dangerMode: true,
      });
      if (res) {
        let dispatchResponse = await dispatch(
          deleteItineraryAction({ itineraryId: id, endpoint: "/api/itineraries/", token: user.token })
        ).unwrap();
        if (!dispatchResponse.success) {
          swal("Error", dispatchResponse.message, "error");
        }
      }
    } catch (error) {
      if (error.response) {
        swal("Error", error.response.data.message || error.response.data, "error");
      } else {
        swal("Error", error.message, "error");
      }
    }
  };
  return (
    <div className="MyCollection">
      <h1 className="MyCollection-title">My Tineraries</h1>
      <div className="MyCollection-newButtonContainer">
        <LinkRouter to="/mytineraries/new">
          <button className="MyCollection-newButton">New Itinerary</button>
        </LinkRouter>
      </div>
      {message ? (
        <h2 className="MyCollection-title">{message}</h2>
      ) : (
        <CollectionTable
          editRoute="/mytineraries/"
          title="Mytineraries"
          deleteOnClick={deleteItinerary}
          collection={itineraries}
        />
      )}
    </div>
  );
}
