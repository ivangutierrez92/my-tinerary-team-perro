import CityCard from "../components/CityCard";
import Layout from "../layouts/Layout";
import cities from "../data/cities";
import "../styles/pages/Cities.css";
import { useEffect, useState } from "react";

export default function Cities() {
  let [continents, setContinents] = useState([]);
  useEffect(() => {
    let arrContinents = cities.map(city => city.continent);
    arrContinents = [...new Set(arrContinents)];
    setContinents(arrContinents);
  }, []);
  return (
    <Layout>
      <div className="Cities">
        <h1 className="Cities-title">Discover Cities Around The World</h1>
        <div className="Cities-formComponents">
          <div className="Cities-checkboxsContainer">
            {continents?.map(continent => (
              <div className="Cities-checkboxContainer">
                <label htmlFor={continent}>{continent}</label>
                <input type="checkbox" name={continent} id={continent} key={continent} />
              </div>
            ))}
          </div>
          <div className="Cities-inputContainer">
            <label>
              <img src="./img/bx-search.svg" alt="search-icon"/>
              <input type="text" name="search" />
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
