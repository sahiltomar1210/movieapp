import mockdata from "./mockdata.json"
import { useEffect, useState } from 'react';
import './App.css';
// GIVEN API NOT WORKING ONLY GIVING ONE DATA THAT'S WHY MY OWN MOCKDATA 
// FOR USING SEARCH , SEARCH WITH "SHINCHAN"  "BATMAN"  "SUPERMAN"
function App() {
  const [data,setData] = useState(mockdata);
  const [search,setSearch] = useState("");
  const [searchvalue,setSearchvalue] = useState("")
  let keyword = new Map();
    function Pics(){
      for(let i =0;i<data.length;i++)
      {
        keyword.set((data[i].Title).toLowerCase(),data[i].Poster)
      }
    }
    Pics();
   useEffect(()=>{
          if(keyword.get(search))
          {
            setSearchvalue(keyword.get(search));
          }else{
            setSearchvalue('');
          }
   },[search])
  return (
    <div className="App">
      <div className='app-header'>
        <div className='header-left'>Movies</div>
        <div className='header-right'>
          <input type="text" placeholder='search' value={search} onChange={(e)=>setSearch((e.target.value).toLowerCase())}></input>
        </div>
      </div>
      <div className='app-upper'>
        { 
           searchvalue.length > 0 ?  <img className="data.images" src={searchvalue}  alt='poster'></img>
             : data.map((mock)=>(
              <img className="data.images" src={mock.Poster}  alt='poster'></img>
            ))
          }     
      </div>
      <label className='app-label'>Favourites</label>
      <div className='app-lower'></div>
    </div>
  );
}

export default App;
