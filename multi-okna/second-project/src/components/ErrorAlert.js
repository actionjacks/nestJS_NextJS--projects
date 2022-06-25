import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

function ErrorAlert({ errTitle, errContent }) {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <Alert variant="danger" onClose={() => refreshPage()} dismissible>
      <Alert.Heading>{errTitle}</Alert.Heading>
      <p>{errContent}</p>
    </Alert>
  );
}

export default ErrorAlert;
