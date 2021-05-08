import React from "react";
import { Col } from "react-bootstrap";

function SingleResult({ idx, result, addNomination, deleteNomination }) {
  return (
    <Col>
      <h2>
        {result.Title} ({result.Year}){" "}
      </h2>
      <img src={result.Poster} alt="movie poster" />
      {addNomination && (
        <button type="button" onClick={(evt) => addNomination(evt, result)}>
          Save
        </button>
      )}
      {deleteNomination && (
        <button
          type="button"
          onClick={(evt) => deleteNomination(evt, result.Title)}
        >
          Delete
        </button>
      )}
    </Col>
  );
}

export default SingleResult;
