import React, { useState } from 'react';
import FilteredList from './components/FilteredList';
import SearchBox from './components/SearchBox';
import "./App.css";

function App() {
  const [songs] = useState([
    "Ghost - Ella Henderson",
    "Take on Me - a-ha",
    "Las de la Intuición - Shakira",
    "The Call - Backstreet Boys",
    "Shot At The Night - The Killers",
    "You're The Best - Joe Bean Esposito",
    "PentHouse - Río Roma",
    "El Paciente - Alfredo Olivas",
    "Rewrite The Stars - Zac Efron, Zendaya",
  ]);

  const [searchText, setSearchText] = useState("");

  // Función para actualizar el texto de búsqueda
  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  return (
    <div className="App">
      <h1>Filtro de Canciones</h1>
      {/* Componente de entrada de búsqueda */}
      <SearchBox onSearchChange={handleSearchChange} />
      {/* Lista filtrada de canciones */}
      <FilteredList songs={songs} searchText={searchText} />
    </div>
  );
}

export default App;

