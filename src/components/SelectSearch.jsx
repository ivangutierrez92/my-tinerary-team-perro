
import "../styles/components/select-search.css";


export default function SelectSearch({select,searchInput,name,order}) {
  console.log(name)
  return (
    <>
      <div className="select-search">
        
        <select defaultValue={order} className='select' name="select" id="" onChange={select}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
        <input  defaultValue={name} type="search" className="search-input" placeholder='Type Hotel Name' onChange={searchInput}/>
      </div>
    </>
  );
}
// 
