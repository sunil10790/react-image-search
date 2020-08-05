import React from "react";

class SearchBar extends React.Component {
  state = { searchText: "" };

  onFormSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted");
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.searchText}
              onChange={(e) => this.setState({ searchText: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
