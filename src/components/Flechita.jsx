import React from "react";

export default function Flechita(props) {
  console.log(props);

  let { verbo, stylo, click } = props; //saco la propidad verbo del objeto props

  return (
    <div
      className={`${stylo}`}
      onClick={click}
    >
      {verbo}
    </div>
  );
}
