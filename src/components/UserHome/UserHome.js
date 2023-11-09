import React, { useContext, useEffect, useState } from "react";
import api from "../../api/api";
import { Context } from "../../context/UserContext";
import "./UserHome.css"
import CreateCurso from "../CreateCurso/CreateCurso";
import { Table } from "reactstrap";

const UserHome = () => {
  const { authenticated } = useContext(Context);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [cursos, setCursos] = useState([]);
  const [user, setUser] = useState({});

  function getUserCursos() {
    api
      .get("/users/cursos")
      .then((response) => {
        setCursos(response.data.userCursos);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function deleteUserCurso(cursoId){
    api
    .delete(`/users/cursos/${cursoId}`)
    .then((response) => {
      getUserCursos();
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
  }

  useEffect(() => {
    api
      .get(`/users/cursos`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUser(response.data.user);
        setCursos(response.data.userCursos);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [token]);

  return (
    <>

      <div className="user-table-container">
        <h1>Bem vindo, {user.name}</h1>
        <h2>Meus cursos cadastrados:</h2>
        <Table>
          <tr>
            <th scope="row">Id</th >
            <th scope="row">Curso</th >
            <th scope="row">Descrição</th >
            <th scope="row">Situação</th >
            <th scope="row">Apagar</th >
          </tr>
          {cursos.map((curso) => (
            <tr>
              <td>{curso.id}</td>
              <td>{curso.name}</td>
              <td>{curso.description}</td>
              <td>{curso.status}</td>
              <button onClick={() => deleteUserCurso(curso.id)}>X</button>
            </tr>
          ))}
        </Table>
      </div>

      <CreateCurso getUserCursos={getUserCursos}/>
    </>
  );
};

export default UserHome;
