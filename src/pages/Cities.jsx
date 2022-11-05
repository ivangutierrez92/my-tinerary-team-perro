import CityCard from "../components/CityCard";
import Layout from "../layouts/Layout";
import cities from "../data/cities";
import "../styles/pages/Cities.css";
import { useEffect, useState } from "react";
import Checkbox from "../components/Checkbox";

export default function Cities() {
  let [continents, setContinents] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let [continentFilters, setContinentFilters] = useState([]);

  useEffect(() => {
    let arrContinents = cities.map(city => city.continent);
    arrContinents = [...new Set(arrContinents)];
    setContinents(arrContinents);
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

    console.log("Continent filters:", newContinentFilters)
    console.log(`Search Value: ${searchValue}`);

    setContinentFilters(newContinentFilters);
  };

  const filterBySearch = (e) => {
    let searchValue = e.target.value;
    setSearchValue(searchValue);
    console.log("Continent filters:", continentFilters);
    console.log(`Search Value: ${searchValue}`);
  };

  return (
    <Layout>
      <div className="Cities">
        <h1 className="Cities-title">Discover Cities Around The World</h1>
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

        <div className="Cities-content">
          {cities?.map(city => (
            <CityCard city={city} key={city.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
