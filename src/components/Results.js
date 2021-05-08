import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleResult from "./SingleResult";

function Results({ results, addNomination, keyword }) {
  return (
    <Container
      style={{ backgroundColor: "lightgray", padding: "3em", marginTop: "2em" }}
    >
      <h1>Results for "{keyword}"</h1>
      <Row>
        {results &&
          results.map((result, idx) => (
            <SingleResult
              key={idx}
              result={result}
              addNomination={addNomination}
            />
          ))}
      </Row>
    </Container>
  );
}

export default Results;
