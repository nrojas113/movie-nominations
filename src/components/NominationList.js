import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleResult from "./SingleResult";

function NominationList({ nominations, deleteNomination }) {
  console.log("Nomination", nominations);
  return (
    <Container>
      <h1>Nominations List</h1>
      <Row>
        {nominations &&
          nominations.map((nomination, idx) => (
            <SingleResult
              key={idx}
              result={nomination.movie}
              deleteNomination={deleteNomination}
            />
          ))}
      </Row>
    </Container>
  );
}

export default NominationList;
