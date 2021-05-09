import React from "react";
import NominateButton from "./NominateButton";
import DeleteButton from "./DeleteButton";
import imageIcon from "../no-image-icon.png";
import { Col, Card } from "react-bootstrap";

function SingleResult({
  result,
  addNomination,
  deleteNomination,
  nominations,
}) {
  return (
    <Col className="text-center mt-5">
      <Card
        style={{
          width: "20rem",
          padding: "1em",
          boxShadow: "0px 0px 10px 2px rgba(100, 100, 100, 0.6) ",
        }}
      >
        <Card.Title>
          {result.Title} ({result.Year})
        </Card.Title>
        <img
          src={result.Poster === "N/A" ? imageIcon : result.Poster}
          alt="movie poster"
          className="mb-3"
          height="400px"
        />
        {addNomination && (
          <NominateButton
            nominations={nominations}
            addNomination={addNomination}
            result={result}
          />
        )}
        {deleteNomination && (
          <DeleteButton deleteNomination={deleteNomination} result={result} />
        )}
      </Card>
    </Col>
  );
}

export default SingleResult;
