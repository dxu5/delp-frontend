import React from "react";
import TopNav from "./TopNav/TopNav";
import logo from "../assests/logo.png";
import styles from "./LandingPage.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchSuggestions from "./SearchSuggestions/SearchSuggestions";
function LandingPage() {
  return (
    <div className={styles["landing"]}>
      <div className={styles["search-area"]}>
        <TopNav />
        <img src={logo} className={styles.logo} alt="delp logo" />
        <SearchBar />
        <SearchSuggestions />
      </div>
    </div>
  );
}

export default LandingPage;
