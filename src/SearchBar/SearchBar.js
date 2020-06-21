import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <button className="button is-static is-medium">Search</button>
        </p>
        <p className="control">
          <input
            className={`input is-medium ${styles["input-control"]}`}
            type="text"
            placeholder="barbers, sushi, takeout..."
          />
        </p>
        <p className="control">
          <button className="button is-static is-medium">Near</button>
        </p>
        <p className="control">
          <input
            className={`input is-medium ${styles["input-control"]}`}
            type="text"
            placeholder="location"
          />
        </p>
        <button className={`button is-medium ${styles["search-button"]}`}>
          <span className={`icon is-small ${styles["search-icon"]}`}>
            <i className="fas fa-search"></i>
          </span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
