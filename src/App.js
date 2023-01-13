import './App.css';
import Cardlist from './components/cards/cardlist';
import SearchBox from './components/searchBar/search';
import { useState, useEffect } from 'react';
const  App=()=> {

  const [characters,setCharacters]=useState([]);
  const [ searchlist, setsearclist]=useState(characters);
  const [ search,setsearch]= useState('');
  useEffect(()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e8ec584601msh2f64fb9b128e4bbp16ad13jsn67b1cfa8af3b',
        'X-RapidAPI-Host': 'game-of-thrones1.p.rapidapi.com'
      }
    };
    
    fetch('https://game-of-thrones1.p.rapidapi.com/Characters', options)
      .then(response => response.json())
      .then(user => setCharacters(user));
  },[]);

  useEffect(()=>{
    const newcharacter=characters.filter((c)=>{
      return c.fullName.toLocaleLowerCase().includes(search);
    });
    setsearclist(newcharacter);
  },[search,characters]);

  const onSearchChange=(event)=>{
    const sf=event.target.value.toLocaleLowerCase();
    setsearch(sf);
    // console.log(search);
  }

  
  return (
    <div className="App">
      <h1>Game Of Thrones</h1>
      <SearchBox
        className='Character-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search characters'
      />
      <br />


      <Cardlist key={searchlist.id} data={searchlist}/>
      
    </div>
  );
}

export default App;
