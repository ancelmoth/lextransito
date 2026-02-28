import { Link } from "react-router-dom"

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.top}>
          <h3 style={styles.logo}>LexTrânsito</h3>

          <p style={styles.description}>
            Plataforma informativa com atuação em Direito de Trânsito,
            oferecendo orientação e acompanhamento jurídico especializado.
          </p>
        </div>

        <div style={styles.bottom}>
          <p>© {ano} LexTrânsito. Todos os direitos reservados.</p>

          <Link to="/politica-de-privacidade" style={styles.link}>
            Política de Privacidade
          </Link>

          <p style={styles.disclaimer}>
            Atendimento online com acompanhamento jurídico.
          </p>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
  backgroundColor: "#1e1e1e",
  color: "#ffffff",
  marginTop: "80px",
  padding: "50px 20px"
},
  container: {
    maxWidth: "1100px",
    margin: "0 auto"
  },
  top: {
    marginBottom: "30px"
  },
  logo: {
    marginBottom: "10px"
  },
  description: {
    color: "#cccccc",
    maxWidth: "500px",
    fontSize: "14px"
  },
  bottom: {
    borderTop: "1px solid #333",
    paddingTop: "20px",
    fontSize: "13px",
    color: "#aaaaaa",
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },
  disclaimer: {
    fontStyle: "italic"
  },
  link: {
    color: "#ffffff",
    textDecoration: "underline",
    fontSize: "13px"
  }
}

export default Footer