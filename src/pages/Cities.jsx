import CityCard from "../components/CityCard";
import "../styles/pages/Cities.css";
import { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";
import "../styles/pages/Collection.css";
import axios from "axios";

export default function Cities() {
  let [loading, setLoading] = useState(true);
  let [cities, setCities] = useState([]);
  let [continents, setContinents] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let [continentFilters, setContinentFilters] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/cities`).then(response => {
      let citiesResponse = response.data.response;
      setCities(citiesResponse);
      let arrContinents = citiesResponse.map(city => city.continent);
      arrContinents = [...new Set(arrContinents)];
      setContinents(arrContinents);
      setLoading(false);
    });
  }, []);

  const filterByContinents = event => {
    let checkboxContinent = event.target.name;
    let isChecked = event.target.checked;
    let newContinentFilters = [];
    if (isChecked) {
      newContinentFilters = [...continentFilters, checkboxContinent];
    } else {
      newContinentFilters = continentFilters.filter(continent => continent !== checkboxContinent);
    }
    setContinentFilters(newContinentFilters);
    getByQuery(searchValue, newContinentFilters);
  };

  const filterBySearch = event => {
    let newSearchValue = event.target.value;
    setSearchValue(newSearchValue);
    getByQuery(newSearchValue, continentFilters);
  };

  const getByQuery = (searchFilter, checkboxFilter) => {
    let query = checkboxFilter.reduce((acc, curr) => {
      acc += `&continent=${curr}`;
      return acc;
    }, `?name=${searchFilter}`);

    axios.get(`${process.env.REACT_APP_API_URL}/api/cities${query}`).then(response => {
      setCities(response.data.response);
    });
  };

  return (
    <div className="Collection">
      <h1 className="Collection-title">Discover Cities Around The World</h1>
      <div className="Cities-formComponents">
        <div className="Cities-checkboxsContainer">
          {continents?.map(continent => (
            <Checkbox name={continent} onClick={filterByContinents} key={continent} />
          ))}
        </div>
        <div className="Cities-inputContainer">
          <label>
            <img src="./img/bx-search.svg" alt="search-icon" />
            <input type="text" name="search" placeholder="Name of city" value={searchValue} onChange={filterBySearch} />
          </label>
        </div>
      </div>
      {loading && <h2 className="Collection-message">Loading...</h2>}
      {!loading && cities.length > 0 && (
        <div className="Collection-content">
          {cities?.map(city => (
            <CityCard city={city} key={city._id} />
          ))}
        </div>
      )}
      {!loading && !cities.length && <h2 className="Collection-message">Couldn't find Cities</h2>}
    </div>
  );
}
