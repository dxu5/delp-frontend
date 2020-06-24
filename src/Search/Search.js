import React from "react";
import NavBar from "../NavBar/NavBar";
import SubNav from "../NavBar/SubNav/SubNav";
import SearchResultsSummary from "./SearchResultsSummary/SearchResultsSummary";
import SearchResults from "./SearchResults/SearchResults";

function Search() {
  return (
    <div>
      <NavBar />
      <SubNav />
      <SearchResultsSummary />
      <SearchResults />
    </div>
  );
}

export default Search;
