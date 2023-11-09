import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navibar.css";
import { Context } from "../../context/UserContext";

function Navibar() {
  const { authenticated, logout } = useContext(Context);

  return (
    <div className="navibar-container">
      <nav>
        {authenticated ? (
          <>
          <Link id="link" to="/profile">
            Perfil
          </Link>

          <Link id="link" to="/userhome">
            Meus Cursos
          </Link>

          <Link onClick={logout} id="link" to="/">
            Sair
          </Link>
          </>
        ) : (
          <>
            <Link id="link" className="home" to="/">
              Home
            </Link>
            <Link id="link" to="/login">
              Log In
            </Link>
            <Link id="link" to="/register">
              Sign Up
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navibar;
