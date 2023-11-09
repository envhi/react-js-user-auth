import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import React, { useContext, useState } from "react";
import { Context } from "../../context/UserContext";
import "./LoginForm.css"



const LoginForm = () => {
  const [user, setUser] = useState({});

  const { login } = useContext(Context)

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    login(user)
  }


  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      <h1>
        Entrar
      </h1>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          className="input-form"
          onChange={handleChange}
          id="email"
          name="email"
          placeholder="Digite seu e-mail"
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Senha</Label>
        <Input
          className="input-form"
          onChange={handleChange}
          id="password"
          name="password"
          placeholder="Senha (mínimo 8 digitos)"
          type="password"
        />
      </FormGroup>
      <Button type="submit" color="primary">Log In</Button>
    </Form>
  );
};

export default LoginForm;
