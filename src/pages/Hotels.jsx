import React from "react";
import HotelCard from "../components/HotelCard";
import SelectSearch from "../components/SelectSearch";
import Layout from "../layouts/Layout";
import "../styles/pages/hotels.css";
import axios from "axios";
import { useEffect,useState } from "react";


export default function Hotel() {
  let [data,setData]= useState([])
  let [select, setSelect] = useState("");
  let [search, setSearch] = useState("");

  useEffect(()=>{
axios
  .get(`${process.env.REACT_APP_API_URL}/api/hotels/`)
  .then(function (response) {
    // manejar respuesta exitosa
    setData(response.data.response)
    
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  });
  },[]);
  
    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/hotels?name=${search}&order=${select}`)
        .then(function (response) {
          // manejar respuesta exitosa
          setData(response.data.response);
        })
        .catch(function (error) {
          // manejar error
          console.log(error);
        });
    }, [select,search]);
  

      let capture = (event) => {  
       setSelect(event.target.value)
      };

      let keyvalue=(event)=>{
        setSearch(event.target.value)
      }
      
  return (
    <Layout>
      <div className="Collection">
        <SelectSearch select={capture} searchInput={keyvalue}/>
        <div className="Collection-content">
          {data.map(hotel => (
            <HotelCard key={hotel._id} hotel={hotel}/>
          ))}
        </div>
      </div>
    </Layout>
  );

}
