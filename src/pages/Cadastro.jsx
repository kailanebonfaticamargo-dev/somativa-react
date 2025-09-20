import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [msg, setMsg] = useState("");

  const handleCadastro = async () => {
    setMsg("");
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = cred.user.uid;

      await setDoc(doc(db, "users", uid), {
        uid,
        email,
        nome,
        sobrenome,
        nascimento,
        createdAt: serverTimestamp(),
      });

      setMsg("Usuário cadastrado com sucesso!");
      setEmail(""); setSenha(""); setNome(""); setSobrenome(""); setNascimento("");
    } catch (err) {
      console.error(err);
      setMsg("Erro ao cadastrar usuário.");
    }
  };

return (
  <div className="container">
    <h2>Cadastro</h2>
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
    <input
      type="text"
      placeholder="Nome"
      value={nome}
      onChange={(e) => setNome(e.target.value)}
    />
    <input
      type="text"
      placeholder="Sobrenome"
      value={sobrenome}
      onChange={(e) => setSobrenome(e.target.value)}
    />
    <input
      type="date"
      value={nascimento}
      onChange={(e) => setNascimento(e.target.value)}
    />
    <button onClick={handleCadastro}>Cadastrar</button>
    <p>{msg}</p>
  </div>
);
}
