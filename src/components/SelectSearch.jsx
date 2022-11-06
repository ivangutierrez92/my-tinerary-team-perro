import React, { useState } from "react";
import "../styles/components/select-search.css";


export default function SelectSearch() {

  let[select,SetSelect]= useState("");
  let[search,SetSearch]= useState("");
  let capture= (event => {
    SetSelect(event.target.value)
  })


  let SearchInput = (event =>{
      SetSearch(event.target.value)
  }
  )
  console.log("Select:",select)
  console.log("Input :",search)
 

  return (
    <>
      <div className="select-search">
        
        <select className='select' name="select" id="" onChange={capture}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
        <input type="search" className="search-input" placeholder='Type Hotel Name'onChange={SearchInput}/>
      </div>
    </>
  );
}
// 