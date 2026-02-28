import PageLayout from "../components/layout/PageLayout"

function Servicos() {
  return (
    <PageLayout title="Nossos Serviços">
      <>
        <div style={styles.grid}>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Defesa de Multas</h3>
            <p style={styles.cardText}>
              Elaboração de defesa prévia e recursos administrativos
              com fundamentação técnica e estratégica.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Lei Seca</h3>
            <p style={styles.cardText}>
              Atuação em processos administrativos por autuação
              relacionada à Lei Seca.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Suspensão e Cassação de CNH</h3>
            <p style={styles.cardText}>
              Defesa completa em processos de suspensão
              ou cassação do direito de dirigir.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Acompanhamento Processual</h3>
            <p style={styles.cardText}>
              Monitoramento e acompanhamento contínuo
              até decisão final do processo.
            </p>
          </div>

        </div>

        {/* CTA Estratégico */}
        <div style={styles.ctaBox}>
          <h3 style={styles.ctaTitle}>Recebeu uma notificação?</h3>
          <p style={styles.ctaText}>
            Envie agora pelo WhatsApp para análise estratégica do seu caso.
          </p>

          <a
            href="https://wa.me/SEUNUMEROAQUI"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.ctaButton}
          >
            Falar no WhatsApp
          </a>
        </div>
      </>
    </PageLayout>
  )
}

const styles = {
 grid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
  marginBottom: "50px"
},
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
  },
  cardTitle: {
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "600"
  },
  cardText: {
    color: "#555",
    fontSize: "14px",
    lineHeight: "1.6"
  },
  ctaBox: {
    padding: "40px",
    backgroundColor: "#eef2ff",
    borderRadius: "16px",
    textAlign: "center"
  },
  ctaTitle: {
    fontSize: "22px",
    marginBottom: "10px"
  },
  ctaText: {
    marginBottom: "20px",
    color: "#444"
  },
 ctaButton: {
  display: "inline-block",
  width: "100%",
  maxWidth: "320px",
  padding: "16px 28px",
  backgroundColor: "#1e3a8a",
  color: "#ffffff",
  borderRadius: "8px",
  fontWeight: "600",
  textDecoration: "none"
}
}

export default Servicos