import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Principal() {
  const [dados, setDados] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }
      const snap = await getDoc(doc(db, "users", user.uid));
      if (snap.exists()) setDados(snap.data());
    });
    return () => unsub();
  }, [navigate]);
  
if (!dados) {
  return <div className="container">Carregando...</div>;
}

return (
  <div className="container profile-card">
    <h2>Perfil do Usuário</h2>

    <div className="profile-info">
      <p><span>Nome:</span> {dados.nome}</p>
      <p><span>Sobrenome:</span> {dados.sobrenome}</p>
      <p><span>Data de Nascimento:</span> {dados.nascimento}</p>
    </div>

    <button
      onClick={async () => {
        await signOut(auth);
        navigate("/login");
      }}
    >
      Sair
    </button>
  </div>
);
}
