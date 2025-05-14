import "../pages/Login.css"
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const manejarEnviar = (e) => {
    e.preventDefault();
    alert(`Usuario: ${usuario}, Contraseña: ${contraseña}`);
  };

  const navegacion = useNavigate()

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={manejarEnviar} className="login-form">
        <div className="form-group">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            id="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-login" onClick={()=>navegacion('/home')}>Iniciar Sesión</button>
      </form>
      <p className="register-link">
        ¿No tienes cuenta? <a onClick={()=>navegacion('/registro')}>Regístrate aquí</a>
      </p>
    </div>
  );
}

export default Login;