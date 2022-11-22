import CityCard from "../components/CityCard";
import "../styles/pages/Cities.css";
import { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
import "../styles/pages/Collection.css";
import { useDispatch, useSelector } from "react-redux";
import cityActions from "../redux/actions/cityActions";
import { useRef } from "react";

export default function Cities() {
  let { getInitialData, getCities } = cityActions;
  let dispatch = useDispatch();
  let { cities, continents, initial, message, search} = useSelector(state => state.city);
  let filterForm = useRef(null);
  useEffect(() => {
    
    if (initial) {
      dispatch(getInitialData({ endpoint: "/api/cities" }));
    }
  }, []);

  const filterByContinents = event => {
    let newContinents = continents.map(continent => {
      if (continent.name === event.target.name) {
        return {...continent, checked: event.target.checked};
      }
      return continent;
    });
    dispatch(getCities({ endpoint: "/api/cities", search: search, continents: newContinents }));
  };

  const filterBySearch = event => {
    dispatch(getCities({ endpoint: "/api/cities", search: event.target.value, continents: continents }));
  };

  return (
    <div className="Collection">
      <h1 className="Collection-title">Discover Cities Around The World</h1>
      <div className="Cities-formComponents" ref={filterForm}>
        <div className="Cities-checkboxsContainer">
          {continents?.map(continent => (
            <Checkbox name={continent.name} checked={continent.checked} onClick={filterByContinents} key={continent.name} />
          ))}
        </div>
        <div className="Cities-inputContainer">
          <label>
            <input type="text" name="search" placeholder="Name of city" defaultValue={search} onChange={filterBySearch} />
            <img src="./img/bx-search.svg" alt="search-icon" />
          </label>
        </div>
      </div>
      {message && <h2 className="Collection-message">{message}</h2>}
      {cities.length > 0 && (
        <div className="Collection-content">
          {cities?.map(city => (
            <CityCard city={city} key={city._id} />
          ))}
        </div>
      )}
    </div>
  );
}
