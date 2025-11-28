import { useEffect, useState } from "react";
import { getCourses } from "../services/api";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(setCourses).catch(console.error);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Cursos disponíveis</h1>
      <Link to="/" style={styles.backButton}>
        ← Voltar para Home
      </Link>

      {courses.length === 0 && (
        <p style={styles.loading}>Carregando cursos...</p>
      )}

      <div style={styles.grid}>
        {courses.map((course) => (
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

export default Courses;

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "20px",

  },

  title: {
    color: "#FF0043",
    fontSize: "32px",
    fontWeight: "bold",
    textShadow: "0 0 8px rgba(255, 0, 67, 0.4)",
  },

  loading: {
    color: "#ccc",
    marginTop: "10px",
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
    transition: "0.3s",
    marginBottom: "20px",
    boxShadow: "0 0 12px rgba(255,0,67,0.35)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  
};
