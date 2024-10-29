import React from "react";
import "./FilteredList.css";

function FilteredList({ songs, searchText }) {
  // Filtrar las canciones en base al texto de búsqueda
  const filteredSongs = songs.filter((song) =>
    song.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h2>Resultados de la búsqueda</h2>
      <ul className="song-list">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song, index) => (
            <li key={index} className="song-item">{song}</li>
          ))
        ) : (
          <p>No se encontraron canciones</p>
        )}
      </ul>
    </div>
  );
}

export default FilteredList;
