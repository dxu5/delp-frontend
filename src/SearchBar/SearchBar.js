import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
  const [term, setTerm] = useState(props.term || "");
  const [location, setLocation] = useState(props.location || "");

  function onSubmit(e) {
    if (typeof props.search === "function") {
      props.search(term, location);
    }
    console.log(term, location);
    e.preventDefault();
  }
  const sizeClass = props.small ? "" : "is-medium";
  return (
    <form onSubmit={onSubmit}>
      <div className="field has-addons">
        <p className="control">
          <button className={`button is-static ${sizeClass}`}>Search</button>
        </p>
        <p className="control">
          <input
            className={`input ${sizeClass} ${styles["input-control"]}`}
            type="text"
            value={term}
            placeholder="barbers, sushi, takeout..."
            onChange={(e) => setTerm(e.target.value)}
          />
        </p>
        <div className="control">
          <div className={`button is-static ${sizeClass}`}>Near</div>
        </div>
        <p className="control">
          <input
            className={`input ${sizeClass} ${styles["input-control"]}`}
            type="text"
            value={location}
            placeholder="location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </p>
        <button
          className={`button ${sizeClass} ${styles["search-button"]}`}
          onClick={onSubmit}
        >
          <span className={`icon is-small ${styles["search-icon"]}`}>
            <i className="fas fa-search"></i>
          </span>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
