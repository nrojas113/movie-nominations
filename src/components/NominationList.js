import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleResult from "./SingleResult";

function NominationList({ nominations, deleteNomination }) {
  console.log("Nomination", nominations);
  return (
    <Container
      style={{ backgroundColor: "mistyrose", padding: "3em", marginTop: "2em" }}
    >
      <h1>My Nominations</h1>
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
