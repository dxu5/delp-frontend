import React from "react";
import styles from "./SearchResult.module.css";
import BusinessRating from "../../../BusinessRating/BusinessRating";

function SearchResult(props) {
  if (!props.business) {
    return <div></div>;
  }
  const b = props.business;
  const tags = b.categories.map((category) => (
    <span
      className={`tag ${styles["business-tag"]}`}
      key={b.id + category.title}
    >
      {category.title}{" "}
    </span>
  ));
  return (
    <div className={styles["search-result"]}>
      <img
        src={b.image_url}
        alt="business"
        className={styles["business-image"]}
      />
      <div className={styles["business-info"]}>
        <h2 className="subtitle">{b.name}</h2>
        <BusinessRating reviewCount={b.review_count} rating={b.rating} />
        <p>
          {b.price} {tags}
        </p>
      </div>
      <div className={styles["contact-info"]}>
        <p>{b.phone}</p>
        <p>{b.location.address1}</p>
        <p>
          {b.location.city} {b.location.state}, {b.location.zip_code}
        </p>
      </div>
    </div>
  );
}

export default SearchResult;
