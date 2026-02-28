import { Link } from "react-router-dom"

function Home() {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>
          Defesa e Recursos em Direito de Trânsito
        </h1>

        <p style={styles.subtitle}>
          Atendimento jurídico especializado, 100% online,
          com análise estratégica do seu caso.
        </p>
        <p style={styles.highlight}>
  Atuação estratégica em processos administrativos de trânsito em todo o Brasil.
</p>

        <div style={styles.buttons}>
          <Link to="/contato" style={styles.primaryButton}>
            Solicitar Análise
          </Link>

          <Link to="/servicos" style={styles.secondaryButton}>
            Conhecer Serviços
          </Link>
        </div>
      </section>

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
            <p>Protocolamos o recurso e acompanhamos todo o andamento.</p>
          </div>
        </div>
      </section>

      <section style={styles.credibilidade}>
        <h2>Atuação com respaldo jurídico</h2>
        <p>
          Todos os recursos e defesas são elaborados com acompanhamento jurídico,
          garantindo fundamentação legal adequada e estratégia personalizada para cada caso.
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

  highlight: {
  marginTop: "10px",
  fontWeight: "600",
  color: "#1e3a8a",
  fontSize: "16px"
},

hero: {
  padding: "110px 0 90px",
  textAlign: "center",
  background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
  borderRadius: "12px",
  marginBottom: "40px"
},
  title: {
    fontSize: "36px",
    marginBottom: "20px"
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap"
  },
primaryButton: {
  padding: "14px 26px",
  backgroundColor: "#1e3a8a",
  color: "#ffffff",
  borderRadius: "8px",
  fontWeight: "600",
  fontSize: "16px",
  boxShadow: "0 4px 14px rgba(30, 58, 138, 0.25)",
  transition: "all 0.2s ease-in-out"
},
  secondaryButton: {
  padding: "14px 26px",
  border: "2px solid #1e3a8a",
  color: "#1e3a8a",
  borderRadius: "8px",
  fontWeight: "600",
  fontSize: "16px",
  backgroundColor: "#ffffff",
  transition: "all 0.2s ease-in-out"
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