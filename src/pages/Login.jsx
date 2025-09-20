import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/principal");
    } catch (err) {
      console.error(err);
      setMsg("Usuário ou senha inválidos.");
    }
  };

return (
  <div className="container">
    <h2>Login</h2>
    <input
      type="email"
      placeholder="E-mail"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Senha"
      value={senha}
      onChange={(e) => setSenha(e.target.value)}
    />
    <button onClick={handleLogin}>Acessar</button>
    <p>{msg}</p>
    <hr />
    <button onClick={() => navigate("/cadastro")}>Ir para Cadastro</button>
  </div>
);
}
