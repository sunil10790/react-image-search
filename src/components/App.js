import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { imageResults: [] };

  onSearchBarSubmit = async (searchText) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: searchText },
      headers: {
        Authorization: "Client-ID tx5K71LuDmjJKDG5X_f2agRx3eAI9s0LX9kc4aJGTUA",
      },
    });

    this.setState({ imageResults: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchBarSubmit={this.onSearchBarSubmit} />
        Found: {this.state.imageResults.length} images
      </div>
    );
  }
}

export default App;
