import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import api from "../../api/api";
const CreateCurso = ({ getUserCursos }) => {
  const [curso, setCurso] = useState({});

  function handleChange(event) {
    setCurso({ ...curso, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    newCurso(curso);
    getUserCursos();
  }

  async function newCurso(curso){
    try {
      const data = await api
        .post("/users/cursos/create", curso)
        .then((response) => {
          return response.data;
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <Form className="form-container" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Nome do curso</Label>
          <Input
            onChange={handleChange}
            id="email"
            name="name"
            placeholder="Insira o nome do curso"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Descrição do curso</Label>
          <Input
            onChange={handleChange}
            id="description"
            name="description"
            placeholder="Insira uma breve descrição"
            type="text"
          />
        </FormGroup>
        <Button type="submit" color="primary">
          Cadastrar Curso
        </Button>
      </Form>
    </div>
  );
};

export default CreateCurso;
