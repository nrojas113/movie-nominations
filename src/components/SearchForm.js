import React from "react";
import { Form } from "react-bootstrap";

function Search({ handleInputChange, keyword }) {
  return (
    <Form className="mb-4">
      <Form.Label>Search Movies</Form.Label>
      <Form.Control
        type="text"
        name="keyword"
        value={keyword}
        placeholder="Movie Title"
        onChange={handleInputChange}
      />
    </Form>
  );
}

export default Search;
