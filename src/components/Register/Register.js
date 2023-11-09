import React, { useContext, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Context } from "../../context/UserContext";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({});

  const { register } = useContext(Context);

  function handleChange(event) {
    console.log(event.target.value, event.target.name);
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
    register(user);
  }

  return (
    <Form className="register-container" onSubmit={handleSubmit}>
      <h1>Cadastro</h1>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          className="input-form"
          onChange={handleChange}
          id="name"
          name="name"
          placeholder="Enter your e-mail"
          type="name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          className="input-form"
          onChange={handleChange}
          id="email"
          name="email"
          placeholder="Enter your e-mail"
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          className="input-form"
          onChange={handleChange}
          id="password"
          name="password"
          placeholder="Enter your password"
          type="password"
        />
      </FormGroup>
      <FormGroup>
        <Label for="passwordConfirmation">Password Confirmation</Label>
        <Input
          className="input-form"
          onChange={handleChange}
          id="passwordConfirmation"
          name="passwordConfirmation"
          placeholder="Confirm your password"
          type="password"
        />
      </FormGroup>
      <Button type="submit" color="primary">
        Register
      </Button>
    </Form>
  );
};

export default Register;
