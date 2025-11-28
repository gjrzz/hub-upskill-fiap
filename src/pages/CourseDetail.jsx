import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourseById } from "../services/api";
import useFavorites from "../hooks/useFavorites";


export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const { toggleFavorite, isFavorite } = useFavorites();
  const already = isFavorite(id);



  useEffect(() => {
    getCourseById(id).then(setCourse).catch(console.error);
  }, [id]);

  if (!course) {
    return <p style={{ color: "#ccc", padding: "20px" }}>Carregando...</p>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>{course.title}</h1>

        <div style={styles.infoBox}>
          <p style={styles.text}><strong>Nível:</strong> {course.level}</p>
          <p style={styles.text}><strong>Duração:</strong> {course.duration}</p>
        </div>

        <hr style={styles.separator} />

        <p style={styles.description}>{course.description}</p>

        <button
          onClick={() => toggleFavorite({ 
            id: course.id, 
            title: course.title, 
            level: course.level, 
            duration: course.duration 
          })}
          style={{
            ...styles.favoriteButton,
            background: already ? "#66001f" : "#FF0043",
          }}
        >
          {already ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
        </button>

        <Link to="/courses" style={styles.backButton}>
          ← Voltar para cursos
        </Link>

      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
  },

  card: {
    background: "rgba(25, 25, 25, 0.9)",
    padding: "30px",
    borderRadius: "14px",
    border: "1px solid rgba(255,0,67,0.25)",
    boxShadow: "0 0 20px rgba(255,0,67,0.15)",
  },

  title: {
    fontSize: "36px",
    marginBottom: "10px",
    color: "#FF0043",
    textShadow: "0 0 10px rgba(255,0,67,0.5)",
  },

  infoBox: {
    marginBottom: "20px",
    padding: "12px 16px",
    background: "rgba(255,0,67,0.05)",
    borderRadius: "10px",
    border: "1px solid rgba(255,0,67,0.2)",
  },

  text: {
    color: "#ddd",
    margin: "4px 0",
  },

  separator: {
    borderColor: "rgba(255,0,67,0.3)",
    margin: "20px 0",
  },

  description: {
    color: "#ccc",
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "30px",
  },

  backButton: {
    display: "inline-block",
    background: "#FF0043",
    padding: "12px 20px",
    borderRadius: "10px",
    textDecoration: "none",
    color: "white",
    fontWeight: "600",
    fontSize: "16px",
    transition: "0.3s",
    boxShadow: "0 0 12px rgba(255,0,67,0.4)",
  },
  favoriteButton: {
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
    marginBottom: "30px",
    marginTop: "10px",
    fontSize: "16px",
    transition: "0.3s",
    boxShadow: "0 0 12px rgba(255,0,67,0.4)",
  },

};
