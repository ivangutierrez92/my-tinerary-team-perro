import CityCard from "../components/CityCard";
import Layout from "../layouts/Layout";
import cities from "../data/cities";
import '../styles/pages/Cities.css'

export default function Cities() {
  return (
    <Layout>
      <div className="Cities">
        <h1 className="Cities-title">Discover Cities Around The World</h1>
        <div className="Cities-content">
          {cities?.map(city => (
            <CityCard city={city} key={city.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
