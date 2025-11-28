import { useState, useEffect } from "react";
import useFavorites from "../hooks/useFavorites";
import { Link } from "react-router-dom";

export default function Profile() {
  const { favorites, toggleFavorite } = useFavorites();

  // nome salvo no localStorage
  const [name, setName] = useState(() => {
    return localStorage.getItem("userName") || "";
  });

  // email opcional só para parecer profissional
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("userEmail") || "";
  });

  // salvar quando mudar
  useEffect(() => {
    localStorage.setItem("userName", name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem("userEmail", email);
  }, [email]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Meu Perfil</h1>

      <Link to="/" style={styles.backButton}>
        ← Voltar para Início
      </Link>

      <div style={styles.card}>
        <label style={styles.label}>Seu nome</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          placeholder="Digite seu nome"
        />

        <label style={styles.label}>Seu e-mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          placeholder="Digite seu e-mail"
        />

        <div style={styles.stats}>
          <p style={styles.statText}>
            Cursos favoritados: <strong>{favorites.length}</strong>
          </p>
        </div>

        <button
          style={styles.clearButton}
          onClick={() => localStorage.setItem("favoriteCourses", "[]")}
        >
          Limpar Favoritos
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "20px",
    background: "rgba(25, 25, 25, 0.95)",
    borderRadius: "16px",
    border: "1px solid rgba(255,0,67,0.2)",
    boxShadow: "0 0 20px rgba(255,0,67,0.15)",
  },

  title: {
    color: "#FF0043",
    textShadow: "0 0 12px rgba(255,0,67,0.5)",
    fontSize: "32px",
    marginBottom: "10px",
  },

  backButton: {
    display: "inline-block",
    background: "#FF0043",
    padding: "10px 18px",
    borderRadius: "10px",
    textDecoration: "none",
    color: "white",
    fontWeight: "600",
    fontSize: "15px",
    marginBottom: "20px",
    boxShadow: "0 0 12px rgba(255,0,67,0.35)",
  },

  card: {
    background: "rgba(35, 35, 35, 0.9)",
    padding: "20px",
    borderRadius: "14px",
    border: "1px solid rgba(255,0,67,0.25)",
  },

  label: {
    display: "block",
    color: "#ccc",
    marginBottom: "6px",
    marginTop: "10px",
  },

  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid rgba(255,0,67,0.25)",
    marginBottom: "10px",
    background: "#111",
    color: "white",
  },

  stats: {
    marginTop: "20px",
  },

  statText: {
    color: "#ddd",
    fontSize: "18px",
  },

  clearButton: {
    marginTop: "20px",
    background: "#66001f",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "0.3s",
    boxShadow: "0 0 12px rgba(255,0,67,0.4)",
  },
};
