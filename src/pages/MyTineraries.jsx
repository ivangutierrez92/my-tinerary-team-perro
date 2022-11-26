import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import CollectionTable from "../components/CollectionTable";
import myTinerariesActions from "../redux/actions/myTinerariesActions";
import "../styles/pages/MyCollection.css";
import { Link as LinkRouter } from "react-router-dom";

export default function MyTineraries() {
  let user = useSelector(store => store.signUp);
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
      swal("Error", "Something went wrong", "error");
    }
    if (res) {
      dispatch(deleteItineraryAction({ itineraryId: id, endpoint: "/api/itineraries/", token: user.token }));
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
