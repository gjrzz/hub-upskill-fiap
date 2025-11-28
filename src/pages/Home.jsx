import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      
      {/* BANNER PRINCIPAL */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Hub UpSkill</h1>
        <p style={styles.heroSubtitle}>
          A plataforma criada para impulsionar suas competências no novo mundo do trabalho.
        </p>

        <Link to="/courses" style={styles.ctaButton}>
          Explorar Cursos
        </Link>
      </section>

      {/* SOBRE A PLATAFORMA */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>O que é o Hub UpSkill?</h2>
        <p style={styles.sectionText}>
          O Hub UpSkill é um portal voltado para o desenvolvimento de habilidades
          essenciais para o futuro do trabalho. Aqui, você encontra conteúdos,
          trilhas de aprendizagem e cursos sobre temas fundamentais como:
        </p>

        <ul style={styles.list}>
          <li>Inovação e Tecnologias Emergentes</li>
          <li>Inteligência Artificial aplicada</li>
          <li>Segurança Cibernética</li>
          <li>Experiências Híbridas de Trabalho</li>
        </ul>
      </section>

      {/* CHAMADA FINAL */}
      <section style={styles.finalBox}>
        <h2 style={styles.finalTitle}>Pronto para evoluir?</h2>
        <p style={styles.finalText}>
          Comece agora sua jornada no Hub UpSkill e esteja preparado para as demandas do futuro.
        </p>

        <Link to="/courses" style={styles.finalButton}>
          Começar Agora →
        </Link>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "20px",
    color: "#EDEDED",
  },

  /* HERO SECTION */
  hero: {
    textAlign: "center",
    padding: "60px 20px",
    background: "linear-gradient(135deg, #1A1A1A, #0D0D0D)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 0, 67, 0.25)",
    boxShadow: "0 0 25px rgba(255,0,67,0.15)",
    marginBottom: "40px",
  },

  heroTitle: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#FF0043",
    textShadow: "0 0 12px rgba(255, 0, 67, 0.5)",
    marginBottom: "10px",
  },

  heroSubtitle: {
    fontSize: "20px",
    color: "#ccc",
    maxWidth: "700px",
    margin: "0 auto 25px auto",
    lineHeight: "1.5",
  },

  ctaButton: {
    background: "#FF0043",
    color: "white",
    padding: "14px 26px",
    borderRadius: "10px",
    fontSize: "18px",
    textDecoration: "none",
    transition: "0.3s",
    boxShadow: "0 0 12px rgba(255,0,67,0.5)",
  },

  /* ABOUT SECTION */
  section: {
    marginBottom: "40px",
    background: "#161616",
    padding: "30px",
    borderRadius: "12px",
    border: "1px solid rgba(255,0,67,0.2)",
  },

  sectionTitle: {
    fontSize: "28px",
    marginBottom: "12px",
    color: "#FF3366",
    textShadow: "0 0 8px rgba(255, 0, 67, 0.4)",
  },

  sectionText: {
    color: "#ccc",
    lineHeight: "1.6",
    marginBottom: "16px",
  },

  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "1.8",
    color: "#eee",
  },

  /* FINAL BOX */
  finalBox: {
    marginTop: "40px",
    background: "rgba(32,32,32,0.85)",
    border: "1px solid rgba(255, 0, 67, 0.3)",
    borderRadius: "14px",
    padding: "40px",
    textAlign: "center",
    boxShadow: "0 0 18px rgba(255,0,67,0.2)",
  },

  finalTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#FF0043",
    textShadow: "0 0 10px rgba(255,0,67,0.5)",
  },

  finalText: {
    fontSize: "18px",
    color: "#d5d5d5",
    margin: "10px 0 20px 0",
  },

  finalButton: {
    background: "#FF0043",
    padding: "12px 22px",
    borderRadius: "10px",
    fontSize: "18px",
    color: "#fff",
    textDecoration: "none",
    transition: "0.3s",
    boxShadow: "0 0 14px rgba(255,0,67,0.6)",
  },
};
