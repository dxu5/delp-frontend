import React from "react";
import TopNav from "./TopNav/TopNav";
import logo from "../assests/logo.png";
import styles from "./LandingPage.module.css";
function LandingPage() {
  return (
    <div>
      <TopNav />
      <img src={logo} className={styles.logo} alt="delp logo" />
    </div>
  );
}

export default LandingPage;
