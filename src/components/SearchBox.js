import React from "react";
import "./SearchBox.css";

function SearchBox({ onSearchChange }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Buscar canción"
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;
