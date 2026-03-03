import { Link } from "react-router-dom"

function Home() {

  const abrirWhatsApp = () => {
    window.dispatchEvent(new Event("openWhatsAppModal"))
  }

  return (
    <div style={styles.container}>
      
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>
          Recebeu notificação de suspensão ou cassação da CNH?
        </h1>

        <p style={styles.subtitle}>
          Defesa administrativa estratégica com atuação em recursos
          de multa, JARI e CETRAN.
        </p>

        <p style={styles.highlight}>
          Suspensão por pontuação • Infrações autossuspensivas • Lei Seca • CNH provisória • Cassação
        </p>

        <div style={styles.buttons}>
          <button onClick={abrirWhatsApp} style={styles.primaryButton}>
            Analisar meu caso agora
          </button>

          <Link to="/servicos" style={styles.secondaryButton}>
            Ver como funciona a defesa
          </Link>
        </div>
      </section>

      {/* BLOCO DE URGÊNCIA */}
      <section style={styles.alertSection}>
        <h2>O prazo para defesa é limitado.</h2>
        <p>
          Após o recebimento da notificação, o prazo para apresentar defesa
          é curto. Uma análise técnica rápida pode ser decisiva para evitar
          a suspensão do seu direito de dirigir.
        </p>
      </section>

      {/* COMO FUNCIONA */}
      <section style={styles.infoSection}>
        <h2>Como Funciona</h2>

        <div style={styles.steps}>
          <div style={styles.step}>
            <strong>1.</strong>
            <p>Você envia sua notificação ou processo pelo WhatsApp.</p>
          </div>

          <div style={styles.step}>
            <strong>2.</strong>
            <p>Analisamos juridicamente a melhor estratégia de defesa.</p>
          </div>

          <div style={styles.step}>
            <strong>3.</strong>
            <p>Protocolamos o recurso e acompanhamos até decisão final.</p>
          </div>
        </div>
      </section>

      {/* CREDIBILIDADE */}
      <section style={styles.credibilidade}>
        <h2>Atuação com respaldo jurídico</h2>
        <p>
          Defesas e recursos administrativos elaborados com acompanhamento jurídico,
          fundamentação legal adequada e estratégia personalizada para cada caso.
        </p>
      </section>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "20px"
  },

  hero: {
    padding: "110px 0 90px",
    textAlign: "center",
    background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
    borderRadius: "12px",
    marginBottom: "40px"
  },

  title: {
    fontSize: "34px",
    marginBottom: "20px",
    lineHeight: "1.3"
  },

  subtitle: {
    fontSize: "18px",
    color: "#444",
    marginBottom: "20px"
  },

  highlight: {
    marginTop: "10px",
    fontWeight: "600",
    color: "#1e3a8a",
    fontSize: "16px",
    marginBottom: "30px"
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap"
  },

  primaryButton: {
    padding: "16px 28px",
    backgroundColor: "#1e3a8a",
    color: "#ffffff",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "16px",
    boxShadow: "0 6px 18px rgba(30, 58, 138, 0.30)",
    border: "none",
    cursor: "pointer"
  },

  secondaryButton: {
    padding: "14px 26px",
    border: "2px solid #1e3a8a",
    color: "#1e3a8a",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "16px",
    backgroundColor: "#ffffff",
    textDecoration: "none"
  },

  alertSection: {
    marginTop: "70px",
    textAlign: "center",
    backgroundColor: "#fff7ed",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
  },

  infoSection: {
    marginTop: "90px"
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  },

  step: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
  },

  credibilidade: {
    marginTop: "90px",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
  }
}

export default Home