export default function CourseCard({ title, level, duration }) {
  const styles = {
    card: {
      background: "rgba(32, 32, 32, 0.85)",
      padding: "22px",
      borderRadius: "12px",
      border: "1px solid rgba(255, 0, 67, 0.25)",
      boxShadow: "0 0 12px rgba(255, 0, 67, 0.15)",
      color: "#EDEDED",
      textDecoration: "none",
      transition: "0.3s",
      display: "block"
    },
    title: {
      marginBottom: "8px",
      fontSize: "20px",
      color: "#FFF",
    },
    text: {
      color: "#bbb",
      margin: "4px 0",
    }
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 0 18px rgba(255,0,67,0.35)";
        e.currentTarget.style.border = "1px solid rgba(255,0,67,0.45)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 0 12px rgba(255,0,67,0.15)";
        e.currentTarget.style.border = "1px solid rgba(255,0,67,0.25)";
      }}
    >
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.text}><strong>Nível:</strong> {level}</p>
      <p style={styles.text}><strong>Duração:</strong> {duration}</p>
    </div>
  );
}
