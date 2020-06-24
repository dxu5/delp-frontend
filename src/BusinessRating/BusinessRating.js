import React from "react";
import styles from "./BusinessRating.module.css";
import Rating from "react-rating";

function BusinessRating() {
  return (
    <div className={styles.rating}>
      <Rating
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        fractions={2}
        initialRating={3}
        readonly
      />
      <p>724 Reviews</p>
    </div>
  );
}

export default BusinessRating;
