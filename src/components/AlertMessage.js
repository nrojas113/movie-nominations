import React from "react";
import { Alert } from "react-bootstrap";

function AlertMessage({ setAlert, nominations, alertMessage }) {
  const nominationCount = nominations.length;
  const addedMovieName = nominations[nominations.length - 1].Title;

  return (
    <>
      {nominationCount === 5 && alertMessage === "Error" ? (
        <Alert variant="danger" onClose={() => setAlert(false)} dismissible>
          <Alert.Heading>
            Oops. Sorry, you can only add 5 nominations.
          </Alert.Heading>
          <p>
            If you need to revise your selection, click{" "}
            <a href="#nominations">here</a> to edit.
          </p>
        </Alert>
      ) : nominationCount === 5 ? (
        <Alert variant="primary" onClose={() => setAlert(false)} dismissible>
          <Alert.Heading>
            "{addedMovieName}" was added to your list!
          </Alert.Heading>
          <p>
            Thank you for your nomination. We received all the nominations.
            Click <a href="#nominations">here</a> to review and finalize.
          </p>
        </Alert>
      ) : nominationCount < 5 ? (
        <Alert variant="warning" onClose={() => setAlert(false)} dismissible>
          <Alert.Heading>
            "{addedMovieName}" was added to your list!
          </Alert.Heading>
          <p>
            Thank you for your nomination. Nice choice! Please select{" "}
            <strong>{5 - nominationCount}</strong> more. Click{" "}
            <a href="#nominations">here</a> to see your current list.
          </p>
        </Alert>
      ) : (
        ""
      )}
    </>
  );
}

export default AlertMessage;
