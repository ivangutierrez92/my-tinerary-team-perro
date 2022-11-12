
import "../styles/components/select-search.css";


export default function SelectSearch({select,searchInput}) {

  return (
    <>
      <div className="select-search">
        
        <select className='select' name="select" id="" onChange={select}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
        <input type="search" className="search-input" placeholder='Type Hotel Name' onChange={searchInput}/>
      </div>
    </>
  );
}
// 
