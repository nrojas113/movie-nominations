import React from "react";
import { Button } from "react-bootstrap";

function DeleteButton({ deleteNomination, result }) {
  return (
    <>
      <Button
        type="button"
        variant="warning"
        onClick={(evt) => deleteNomination(evt, result.Title)}
      >
        Remove
      </Button>
    </>
  );
}

export default DeleteButton;
