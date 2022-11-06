import React from 'react'
import "../styles/components/carrousel.css";
import dataHotel from "../data/datosHoteles";
import cities from "../data/cities";
import Flechita from "./Flechita";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Carrousel from "./Carrousel";
import ScrollToTop from "./ScrollToTop";

export default function Home2() {
 
    
let [numero, setNumero] = useState(0);
  let [id, setId] = useState(0);

  useEffect(() => {
    let idInterval = setInterval(
      () => {
        nexti();

      },
     
      5000
    );
    setId(idInterval);
    return clearInterval(id);
    // eslint-disable-next-line
  }, [numero]);

  let nexti = () => {
    if (numero < dataHotel.length - 1) {
      setNumero(++numero);
    } else {
      setNumero(0);
    }
    clearInterval(id);
  };
  let previ = () => {
    if (numero > 0) {
      setNumero(--numero);
    } else {
      setNumero(dataHotel.length - 1);
    }
    clearInterval(id);
  };


  return (
    <>
      <div className="carrousel-container">
        <div className="slideshow-container">
          <Carrousel
            foto1={dataHotel[numero].photo[0]}
            foto2={dataHotel[numero].photo[1]}
            foto3={dataHotel[numero].photo[2]}
            foto4={cities[numero].photo}
            nombreHotel={dataHotel[numero].name}
            nombreCiudad={cities[numero].name}
            stylo="img-carrousel"
          />

          <Flechita stylo="prev" verbo="❮" click={previ} />
          <Flechita stylo="next" verbo="❯" click={nexti} />
        </div>

        <ScrollToTop />

        <Footer />
      </div>
    </>
  );
}