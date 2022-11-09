import React from "react";
import '../styles/components/carrousel.css'

export default function Carrousel(props) {
  let {foto1,foto2,foto3,foto4,stylo,nombreHotel,nombreCiudad } = props;
  return (
    <>
  

      <div className="container-carrousel">
        <article>
          <p className="location-title">{nombreHotel}</p>
          <img className={stylo} src={foto1} alt={foto1} />
        </article>
        <article>
          <p className="location-title">{nombreHotel}</p>
          <img className={stylo} src={foto2} alt={foto2} />
        </article>
        <article>
          <p className="location-title">{nombreHotel}</p>
          <img className={stylo} src={foto3} alt={foto3} />
        </article>
        <article>
          <p className="location-title">{nombreCiudad}</p>
          <img className={stylo} src={foto4} alt={foto4} />
        </article>
      </div>
    </>
  );
}
