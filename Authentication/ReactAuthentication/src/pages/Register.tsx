import React, { useState, SyntheticEvent } from "react";
import { Redirect } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    //todo remove
    const content = await response.json();
    console.log(content);

    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }
  return (
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please Register</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="form-control"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="form-control"
        placeholder="Password"
      />
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Register;
