import React, { useState } from "react";
import "./Login.scss";
import Logo from "../../../public/logo6bg.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Login falhou");

      const data = await response.json();
      console.log("Login bem-sucedido:", data);
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer login");
    }
  };

  return (
    <div className="container-principal">
      <div className="container-logo">
        <img src={Logo} alt="Logo Aqui Tem" className="logo-image" />
      </div>
      <div className="container-login">
        <form
        onSubmit={handleLogin}
        className="form-login"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input-login"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input-login"
        />
        <button
          type="submit"
          className="button-enter"
        >
          Entrar
        </button>
      </form>
      </div>
      
    </div>
  );
};

export default Login;
