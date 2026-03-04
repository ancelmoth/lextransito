import { Link } from "react-router-dom"

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <div style={styles.top}>
          <h3 style={styles.logo}>LEXTRÂNSITO ELITE</h3>

          <p style={styles.description}>
            Defesa administrativa especializada em infrações de alto impacto,
            com análise técnica e acompanhamento estratégico.
          </p>
        </div>

        <div style={styles.bottom}>
          <p style={styles.copy}>
            © {ano} LEXTRÂNSITO ELITE — Todos os direitos reservados.
          </p>

          <Link to="/politica-de-privacidade" style={styles.link}>
            Política de Privacidade
          </Link>

          <p style={styles.disclaimer}>
            Atendimento online com análise técnica individualizada.
          </p>
        </div>

      </div>
    </footer>
  )
}

const styles = {
  footer: {
    background: "linear-gradient(135deg, #06121c 0%, #0b1c2d 100%)",
    color: "#ffffff",
    marginTop: "120px",
    padding: "60px 20px 40px"
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto"
  },

  top: {
    marginBottom: "40px"
  },

  logo: {
    marginBottom: "15px",
    color: "#d4af37",
    letterSpacing: "2px",
    fontWeight: "700"
  },

  description: {
    color: "#e2e8f0",
    maxWidth: "520px",
    fontSize: "15px",
    lineHeight: "1.6"
  },

  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "25px",
    fontSize: "13px",
    color: "#94a3b8",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  copy: {
    color: "#94a3b8"
  },

  disclaimer: {
    fontStyle: "italic",
    color: "#94a3b8"
  },

  link: {
    color: "#d4af37",
    textDecoration: "none",
    fontSize: "13px"
  }
}

export default Footer