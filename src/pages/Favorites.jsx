import useFavorites from "../hooks/useFavorites";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div style={{
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "30px",
      marginTop: "30px",
      background: "rgba(25, 25, 25, 0.95)",
      borderRadius: "16px",
      border: "1px solid rgba(255,0,67,0.2)",
      boxShadow: "0 0 20px rgba(255,0,67,0.15)"
    }}>

      <h1 style={{ color: "#FF0043", textShadow: "0 0 10px rgba(255,0,67,0.5)" }}>
        Meus Favoritos
      </h1>

      <Link to="/" style={styles.backButton}>
        ← Voltar para Início
      </Link>

      {favorites.length === 0 && (
        <p style={{ color: "#ccc", marginTop: "10px" }}>
          Você ainda não favoritou nenhum curso.
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {favorites.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            style={{ textDecoration: "none" }}
          >
            <CourseCard
              title={course.title}
              level={course.level}
              duration={course.duration}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  backButton: {
    display: "inline-block",
    background: "#FF0043",
    padding: "10px 18px",
    borderRadius: "10px",
    textDecoration: "none",
    color: "white",
    fontWeight: "600",
    fontSize: "15px",
    transition: "0.3s",
    marginBottom: "20px",
    marginTop: "10px",
    boxShadow: "0 0 12px rgba(255,0,67,0.35)",
  }
};
