import React from "react";

function Search({ handleInputChange, keyword }) {
  return (
    <form>
      <label>Movie Title</label>
      <input
        type="text"
        name="keyword"
        value={keyword}
        placeholder="Search Movies"
        onChange={handleInputChange}
      />
    </form>
  );
}

export default Search;
