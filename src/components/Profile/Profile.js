import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/UserContext';
import api from '../../api/api';

const Profile = () => {
  const { authenticated } = useContext(Context);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [cursos, setCursos] = useState([]);
  const [user, setUser] = useState({});

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
    <div>{user.name}</div>
  )
}

export default Profile
