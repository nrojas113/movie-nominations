import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleResult from "./SingleResult";

function Results({ results, addNomination }) {
  return (
    <Container>
      <h1>Your Results</h1>
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
