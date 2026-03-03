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
            <p>Analisamos tecnicamente a melhor estratégia.</p>
          </div>

          <div style={styles.step}>
            <strong style={styles.gold}>3.</strong>
            <p>Protocolamos o recurso e acompanhamos até decisão final.</p>
          </div>
        </div>
      </section>

      {/* CREDIBILIDADE */}
      <section style={styles.credibilidade}>
        <h2 style={styles.sectionTitle}>Atuação técnica especializada</h2>
        <p style={styles.sectionText}>
          Defesas e recursos administrativos elaborados com fundamentação adequada
          e estratégia personalizada para cada caso.
        </p>
      </section>

    </div>
  )
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #06121c 0%, #0b1c2d 50%, #10283f 100%)",
    color: "#ffffff",
    minHeight: "100vh",
    padding: "0 20px 80px"
  },

  hero: {
    padding: "140px 0 110px",
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center"
  },

  marca: {
    color: "#d4af37",
    letterSpacing: "4px",
    fontSize: "13px",
    marginBottom: "25px",
    fontWeight: "600"
  },

  title: {
    fontSize: "48px",
    lineHeight: "1.15",
    marginBottom: "30px",
    fontWeight: "800",
    color: "#ffffff",
    textShadow: "0px 6px 25px rgba(0,0,0,0.4)"
  },

  gold: {
    color: "#d4af37"
  },

  subtitle: {
    fontSize: "19px",
    color: "#d1d5db",
    marginBottom: "45px",
    maxWidth: "760px",
    marginInline: "auto"
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },

  primaryButton: {
    padding: "18px 36px",
    backgroundColor: "#d4af37",
    color: "#0b1c2d",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "15px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0px 8px 25px rgba(212,175,55,0.35)"
  },

  secondaryButton: {
    padding: "17px 34px",
    border: "1.5px solid #d4af37",
    color: "#d4af37",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "15px",
    textDecoration: "none"
  },

  alertSection: {
    maxWidth: "950px",
    margin: "100px auto",
    backgroundColor: "#0f2234",
    padding: "60px",
    borderRadius: "14px",
    textAlign: "center",
    boxShadow: "0px 15px 40px rgba(0,0,0,0.35)"
  },

  infoSection: {
    maxWidth: "1100px",
    margin: "120px auto"
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "35px",
    marginTop: "50px"
  },

  step: {
    backgroundColor: "#0f2234",
    padding: "35px",
    borderRadius: "12px",
    boxShadow: "0px 10px 30px rgba(0,0,0,0.3)"
  },

  credibilidade: {
    maxWidth: "950px",
    margin: "120px auto 0",
    backgroundColor: "#0f2234",
    padding: "60px",
    borderRadius: "14px",
    textAlign: "center",
    boxShadow: "0px 15px 40px rgba(0,0,0,0.35)"
  },

  sectionTitle: {
    fontSize: "30px",
    marginBottom: "20px",
    fontWeight: "700"
  },

  sectionText: {
    color: "#d1d5db",
    fontSize: "17px",
    lineHeight: "1.6"
  }
}

export default Home