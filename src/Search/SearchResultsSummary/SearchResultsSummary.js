import React from "react";
import styles from "./SearchResultsSummary.module.css";

function SearchResultsSummary(props) {
  let resultsStats = null;
  if (props.amountResults && props.shownResults) {
    resultsStats = (
      <p>
        Showing 1-{props.shownResults} out of {props.amountResults} results
      </p>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles["search-summary"]}>
        <h1 className="subtitle">
          <strong>{props.term}</strong> {props.location}
        </h1>
        {resultsStats}
      </div>
      <div className={styles.filters}>
        <button className="button">
          <span className="icon">
            <i className="fas fa-sliders-h"></i>
          </span>
          <span>All Filters</span>
        </button>
        <div className="buttons has-addons">
          <button className="button">$</button>
          <button className="button">$$</button>
          <button className="button">$$$</button>
          <button className="button">$$$$</button>
        </div>
        <button className="button">
          <span className="icon">
            <i className="fas fa-clock"></i>
          </span>
          <span>Open Now</span>
        </button>
        <button className="button">
          <span className="icon">
            <i className="fas fa-dollar-sign"></i>
          </span>
          <span>Cashback</span>
        </button>
      </div>
    </div>
  );
}

export default SearchResultsSummary;
