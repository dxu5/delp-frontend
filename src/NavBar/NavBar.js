import React from "react";
import logo from "../assests/logo.png";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
function NavBar(props) {
  return (
    <div className={styles["navbar"]}>
      <Link to="/">
        <img src={logo} alt="Delp Logo" className={styles.logo} />
      </Link>
      <SearchBar
        small={true}
        term={props.term}
        location={props.location}
        search={props.search}
      />
      <button className={`button ${styles.navbutton}`}>Sign In</button>
      <button className={`button ${styles.navbutton}`}>Register</button>
    </div>
  );
}

export default NavBar;
