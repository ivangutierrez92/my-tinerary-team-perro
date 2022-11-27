import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import myCitiesActions from "../redux/actions/myCitiesActions";
import "../styles/pages/MyCollection.css";

export default function MyCities() {
  let { id: userId, token } = useSelector(store => store.signIn);
  let { cities, message } = useSelector(state => state.myCities);
  let dispatch = useDispatch();
  let { getInitialMyCities, deleteCity: deleteCityAction } = myCitiesActions;
  useEffect(() => {
    dispatch(getInitialMyCities({ endpoint: "/api/cities", userId }));
  }, []);

  const deleteCity = async (id, name) => {
    try {
      let res = await swal("Are you sure you want to delete " + name, {
        buttons: ["Cancel", "Delete"],
        dangerMode: true,
      });
      if (res) {
        let dispatchResponse = await dispatch(deleteCityAction({ cityId: id, endpoint: "/api/cities/", token })).unwrap();
        if (!dispatchResponse.success) {
          swal("Error", dispatchResponse.message, "error");
        }
      }
    } catch (error) {
      if (error.response) {
        swal("Error", error.response.data.message || error.response.message);
      } else {
        swal("Error", error.message, "error");
      }
    }
  };
  return (
    <div className="MyCollection">
      <h1 className="MyCollection-title">My Cities</h1>
      {message ? (
        <h2 className="MyCollection-title">{message}</h2>
      ) : (
        <div className="MyCollection-tableContainer">
          <table className="MyCollection-table">
            <thead>
              <tr>
                <th>City</th>
                <th className="MyCollection-columnButton"></th>
                <th className="MyCollection-columnButton"></th>
              </tr>
            </thead>
            <tbody>
              {cities.map(city => {
                return (
                  <tr key={city._id}>
                    <td>{city.name}</td>
                    <td className="MyCollection-buttonContainer">
                      <button className="MyCollection-deleteButton" onClick={() => deleteCity(city._id, city.name)}>
                        <img src="/img/bx-trash.svg" alt="delete" />
                      </button>
                    </td>
                    <td className="MyCollection-buttonContainer">
                      <Link to={`/mycities/${city._id}`}>
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
