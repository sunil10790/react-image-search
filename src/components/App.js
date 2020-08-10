import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { imageResults: [] };

  onSearchBarSubmit = async (searchText) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: searchText },
    });

    this.setState({ imageResults: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit} />
        <ImageList images={this.state.imageResults} />
      </div>
    );
  }
}

export default App;
