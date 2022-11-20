import React from "react";
import HotelCard from "../components/HotelCard";
import SelectSearch from "../components/SelectSearch";
import "../styles/pages/hotels.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotelActions from "../redux/actions/hotelActions";

export default function Hotel() {
  let { getHotelAfter, getHotelBefore } = hotelActions;

  let { hotelList, name, order, firstRender } = useSelector(
    (store) => store.hotel
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstRender) {
      dispatch(getHotelBefore({ param: "/api/hotels/"}));
    }
  }, []);

  let capture = (event) => {
    dispatch(
      getHotelAfter({
        param: "/api/hotels/",
        name: name,
        order: event.target.value,
      })
    );
  };

  let keyvalue = (event) => {
    dispatch(
      getHotelAfter({
        param: "/api/hotels/",
        name: event.target.value,
        order: order,
      })
    );
  };
  return (
    <div className="Collection">
      <SelectSearch select={capture} searchInput={keyvalue} />
      <div className="Collection-content">
        {hotelList?.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
