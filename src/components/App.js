import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchBarSubmit = (searchText) => {
    console.log(searchText);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit} />
      </div>
    );
  }
}

export default App;
