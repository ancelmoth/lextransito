import PageLayout from "../components/layout/PageLayout"

function Servicos() {
  const abrirWhatsApp = () => {
    window.dispatchEvent(new Event("openWhatsAppModal"))
  }

  return (
    <PageLayout title="Serviços Especializados em Direito de Trânsito">
      <>
        <div style={styles.grid}>

          {[
            "Suspensão da CNH por Pontuação",
            "Multas Autosuspensivas",
            "Lei Seca / Bafômetro",
            "Defesa de CNH Provisória",
            "Cassação da CNH",
            "Recursos de Multas"
          ].map((servico, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{servico}</h3>

              <p style={styles.cardText}>
                Atendimento estratégico especializado em processos
                administrativos de trânsito. Análise técnica e
                acompanhamento até decisão final.
              </p>

              <button
                onClick={abrirWhatsApp}
                style={styles.cardButton}
              >
                Falar com Especialista
              </button>
            </div>
          ))}

        </div>

        {/* CTA Final */}
        <div style={styles.ctaBox}>
          <h3 style={styles.ctaTitle}>
            Recebeu uma notificação?
          </h3>

          <p style={styles.ctaText}>
            Solicite agora atendimento com advogado especializado.
            Atendimento online em Ceará, Minas Gerais e Pará.
          </p>

          <button
            onClick={abrirWhatsApp}
            style={styles.ctaButton}
          >
            Solicitar Atendimento
          </button>
        </div>
      </>
    </PageLayout>
  )
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
    marginBottom: "60px"
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  cardTitle: {
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "600"
  },

  cardText: {
    color: "#555",
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "20px"
  },

  cardButton: {
    padding: "12px 18px",
    backgroundColor: "#1e3a8a",
    color: "#ffffff",
    borderRadius: "8px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer"
  },

  ctaBox: {
    padding: "50px",
    backgroundColor: "#eef2ff",
    borderRadius: "16px",
    textAlign: "center"
  },

  ctaTitle: {
    fontSize: "24px",
    marginBottom: "10px"
  },

  ctaText: {
    marginBottom: "25px",
    color: "#444"
  },

  ctaButton: {
    padding: "16px 28px",
    backgroundColor: "#1e3a8a",
    color: "#ffffff",
    borderRadius: "8px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer"
  }
}

export default Servicos