import React from "react";
import { Col, Button } from "react-bootstrap";

function SingleResult({ result, addNomination, deleteNomination }) {
  return (
    <Col className="text-center mt-5">
      <h2 style={{ fontSize: "1.5em" }}>
        {result.Title} ({result.Year})
      </h2>
      <img
        src={result.Poster}
        alt="movie poster"
        className="mb-3"
        height="400px"
      />
      {addNomination && (
        <Button
          type="button"
          variant="primary"
          onClick={(evt) => addNomination(evt, result)}
        >
          Nominate
        </Button>
      )}
      {deleteNomination && (
        <Button
          type="button"
          variant="warning"
          onClick={(evt) => deleteNomination(evt, result.Title)}
        >
          Remove
        </Button>
      )}
    </Col>
  );
}

export default SingleResult;
