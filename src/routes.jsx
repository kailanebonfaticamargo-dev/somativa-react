import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Principal from "./pages/Principal";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 12 }}>
        <Link to="/cadastro" style={{ marginRight: 12 }}>Cadastro</Link>
        <Link to="/login" style={{ marginRight: 12 }}>Login</Link>
        <Link to="/principal">Principal</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="*" element={<div style={{margin:32}}>404 - Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}
