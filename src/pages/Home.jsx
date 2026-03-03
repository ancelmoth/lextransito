import { Link } from "react-router-dom"

function Home() {

  const abrirWhatsApp = () => {
    window.dispatchEvent(new Event("openWhatsAppModal"))
  }

  return (
    <div style={styles.container}>

      {/* HERO */}
      <section style={styles.hero}>
        <p style={styles.marca}>LEXTRÂNSITO ELITE</p>

        <h1 style={styles.title}>
          Defesa Técnica Especializada para Multas de{" "}
          <span style={styles.gold}>Alto Impacto</span>
        </h1>

        <p style={styles.subtitle}>
          Suspensão, Cassação, Lei Seca e infrações autossuspensivas exigem estratégia técnica precisa.
        </p>

        <div style={styles.buttons}>
          <button onClick={abrirWhatsApp} style={styles.primaryButton}>
            Falar com Especialista
          </button>

          <Link to="/servicos" style={styles.secondaryButton}>
            Como funciona a defesa
          </Link>
        </div>
      </section>

      {/* BLOCO DE URGÊNCIA */}
      <section style={styles.alertSection}>
        <h2 style={styles.sectionTitle}>
          Recebeu notificação? O prazo é limitado.
        </h2>
        <p style={styles.sectionText}>
          A defesa administrativa precisa ser apresentada dentro do prazo legal.
          Uma análise técnica rápida pode evitar a suspensão do seu direito de dirigir.
        </p>
      </section>

      {/* COMO FUNCIONA */}
      <section style={styles.infoSection}>
        <h2 style={styles.sectionTitle}>Como Funciona</h2>

        <div style={styles.steps}>
          <div style={styles.step}>
            <strong style={styles.gold}>1.</strong>
            <p>Envie sua notificação pelo WhatsApp.</p>
          </div>

          <div style={styles.step}>
            <strong style={styles.gold}>2.</strong>
            <p>Analisamos juridicamente a melhor estratégia.</p>
          </div>

          <div style={styles.step}>
            <strong style={styles.gold}>3.</strong>
            <p>Protocolamos o recurso e acompanhamos até decisão final.</p>
          </div>
        </div>
      </section>

      {/* CREDIBILIDADE */}
      <section style={styles.credibilidade}>
        <h2 style={styles.sectionTitle}>Atuação com respaldo jurídico</h2>
        <p style={styles.sectionText}>
          Defesas e recursos administrativos elaborados com fundamentação técnica
          adequada e estratégia personalizada para cada caso.
        </p>
      </section>

    </div>
  )
}

const styles = {
  container: {
    backgroundColor: "#0b1c2d",
    color: "#e5e7eb",
    minHeight: "100vh",
    padding: "0 20px 80px"
  },

  hero: {
    padding: "120px 0 100px",
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center"
  },

  marca: {
    color: "#c9a646",
    letterSpacing: "3px",
    fontSize: "14px",
    marginBottom: "20px"
  },

  title: {
    fontSize: "40px",
    lineHeight: "1.2",
    marginBottom: "25px",
    fontWeight: "600"
  },

  gold: {
    color: "#c9a646"
  },

  subtitle: {
    fontSize: "18px",
    color: "#cbd5e1",
    marginBottom: "40px",
    maxWidth: "750px",
    marginInline: "auto"
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },

  primaryButton: {
    padding: "16px 32px",
    backgroundColor: "#c9a646",
    color: "#0b1c2d",
    borderRadius: "6px",
    fontWeight: "700",
    fontSize: "15px",
    border: "none",
    cursor: "pointer"
  },

  secondaryButton: {
    padding: "15px 30px",
    border: "1px solid #c9a646",
    color: "#c9a646",
    borderRadius: "6px",
    fontWeight: "600",
    fontSize: "15px",
    textDecoration: "none"
  },

  alertSection: {
    maxWidth: "900px",
    margin: "80px auto",
    backgroundColor: "#11263a",
    padding: "50px",
    borderRadius: "10px",
    textAlign: "center"
  },

  infoSection: {
    maxWidth: "1000px",
    margin: "100px auto"
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginTop: "40px"
  },

  step: {
    backgroundColor: "#11263a",
    padding: "30px",
    borderRadius: "8px"
  },

  credibilidade: {
    maxWidth: "900px",
    margin: "100px auto 0",
    backgroundColor: "#11263a",
    padding: "50px",
    borderRadius: "10px",
    textAlign: "center"
  },

  sectionTitle: {
    fontSize: "28px",
    marginBottom: "20px"
  },

  sectionText: {
    color: "#cbd5e1",
    fontSize: "16px"
  }
}

export default Home