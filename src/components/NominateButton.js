import React from "react";
import { Button } from "react-bootstrap";

function NominateButton({ addNomination, nominations, result }) {
  const offButton = nominations.some(
    (nomination) => nomination.imdbID === result.imdbID
  );
  return (
    <>
      <Button
        type="button"
        variant="primary"
        onClick={(evt) => addNomination(evt, result)}
        disabled={offButton}
      >
        Nominate
      </Button>
    </>
  );
}

export default NominateButton;
