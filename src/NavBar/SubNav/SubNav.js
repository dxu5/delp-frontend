import React from "react";
import SubNavItem from "./SubNavItem/SubNavItem";
import styles from "./SubNav.module.css";

function SubNav() {
  return (
    <div className={styles["container"]}>
      <div className={styles["sub-nav"]}>
        <div>
          <SubNavItem label="Restaurant" icon="utensils" />
          <SubNavItem label="Home Services" icon="home" />
          <SubNavItem label="Auto Services" icon="car-side" />
          <SubNavItem label="More" icon="info-circle" showRightBorder={true} />
        </div>
        <div>
          <button
            className={`button ${styles["sub-nav-button"]} ${styles["omit-right-border"]}`}
          >
            <span className="icon">
              <i className="fas fa-pen"></i>
            </span>
            <span>Write a Review</span>
          </button>
          <button className={`button ${styles["sub-nav-button"]}`}>
            <span className="icon">
              <i className="fas fa-building"></i>
            </span>
            <span>For Businesses</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubNav;
