import React from "react";
import logo from "../assests/logo.png";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
function NavBar() {
  return (
    <div className={styles["navbar"]}>
      <img src={logo} alt="Delp Logo" className={styles.logo} />
      <SearchBar small={true} />
      <button className={`button ${styles.navbutton}`}>Sign In</button>
      <button className={`button ${styles.navbutton}`}>Register</button>
    </div>
  );
}

export default NavBar;
