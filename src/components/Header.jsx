import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h2 style={styles.logo}>Hub UpSkill</h2>

        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Início</Link>
          <Link to="/courses" style={styles.link}>Cursos</Link>
          <Link to="/profile" style={styles.link}>Perfil</Link>
          <Link to="/favorites" style={styles.link}>Favoritos</Link>
          <Link to="/profile" style={styles.link}>Perfil</Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: "rgba(15, 15, 15, 0.85)",
    backdropFilter: "blur(6px)",
    padding: "16px 0",
    borderBottom: "1px solid rgba(255, 0, 67, 0.25)",
    boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
    position: "sticky",
    top: 0,
    zIndex: 10
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    color: "#FF0043",
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "1px",
    textShadow: "0 0 6px rgba(255, 0, 67, 0.5)"
  },

  nav: {
    display: "flex",
    gap: "22px",
  },

  link: {
    color: "#EDEDED",
    fontSize: "16px",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    transition: "0.25s",
  }
};
