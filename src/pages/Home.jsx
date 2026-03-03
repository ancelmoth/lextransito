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
        <h2 style={styles.sectionTitleCenter}>Como Funciona</h2>

        <div style={styles.steps}>
  <div style={styles.step}>
    <span style={styles.stepNumber}>1</span>
    <p style={styles.stepText}>Envie sua notificação pelo WhatsApp.</p>
  </div>

  <div style={styles.step}>
    <span style={styles.stepNumber}>2</span>
    <p style={styles.stepText}>Analisamos tecnicamente a melhor estratégia.</p>
  </div>

  <div style={styles.step}>
    <span style={styles.stepNumber}>3</span>
    <p style={styles.stepText}>Protocolamos o recurso e acompanhamos até decisão final.</p>
  </div>
</div>
      </section>

      {/* CREDIBILIDADE */}
      <section style={styles.credibilidade}>
        <h2 style={styles.sectionTitleCenter}>Atuação técnica especializada</h2>
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
    padding: "0 24px 100px"
  },

  hero: {
    padding: "180px 0 140px",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center"
  },

  marca: {
    color: "#d4af37",
    letterSpacing: "5px",
    fontSize: "14px",
    marginBottom: "30px",
    fontWeight: "600"
  },

  title: {
    fontSize: "56px",
    lineHeight: "1.1",
    marginBottom: "35px",
    fontWeight: "800",
    color: "#ffffff",
    textShadow: "0px 8px 30px rgba(0,0,0,0.45)"
  },

  gold: {
    color: "#d4af37"
  },

  subtitle: {
    fontSize: "20px",
    color: "#e2e8f0",
    marginBottom: "55px",
    maxWidth: "820px",
    marginInline: "auto"
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    flexWrap: "wrap"
  },

  primaryButton: {
    padding: "20px 40px",
    backgroundColor: "#d4af37",
    color: "#0b1c2d",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0px 10px 30px rgba(212,175,55,0.4)"
  },

  secondaryButton: {
    padding: "19px 38px",
    border: "2px solid #d4af37",
    color: "#d4af37",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "16px",
    textDecoration: "none"
  },

  alertSection: {
    maxWidth: "1000px",
    margin: "80px auto",
    backgroundColor: "#0f2234",
    padding: "70px",
    borderRadius: "18px",
    textAlign: "center",
    boxShadow: "0px 20px 50px rgba(0,0,0,0.4)"
  },

  infoSection: {
    maxWidth: "1200px",
    margin: "100px auto"
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px",
    marginTop: "60px"
  },

  step: {
    backgroundColor: "#0f2234",
    padding: "45px",
    borderRadius: "16px",
    boxShadow: "0px 15px 40px rgba(0,0,0,0.35)"
  },

  stepNumber: {
  fontSize: "26px",
  fontWeight: "800",
  color: "#d4af37",
  display: "block",
  marginBottom: "15px"
},

stepText: {
  color: "#ffffff",
  fontSize: "17px",
  lineHeight: "1.6"
},

  credibilidade: {
    maxWidth: "1000px",
    margin: "100px auto 0",
    backgroundColor: "#0f2234",
    padding: "70px",
    borderRadius: "18px",
    textAlign: "center",
    boxShadow: "0px 20px 50px rgba(0,0,0,0.4)"
  },

  sectionTitle: {
    fontSize: "34px",
    marginBottom: "25px",
    fontWeight: "700",
    color: "#ffffff"
  },

  sectionTitleCenter: {
    fontSize: "36px",
    marginBottom: "30px",
    fontWeight: "700",
    textAlign: "center",
    color: "#ffffff"
  },

  sectionText: {
    color: "#e2e8f0",
    fontSize: "18px",
    lineHeight: "1.7",
    maxWidth: "850px",
    margin: "0 auto"
  }
}

export default Home