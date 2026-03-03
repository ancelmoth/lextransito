import PageLayout from "../components/layout/PageLayout"

function Servicos() {
  const abrirWhatsApp = () => {
    window.dispatchEvent(new Event("openWhatsAppModal"))
  }

  const servicos = [
    "Suspensão da CNH por Pontuação",
    "Multas Autosuspensivas",
    "Lei Seca / Bafômetro",
    "Defesa de CNH Provisória",
    "Cassação da CNH",
    "Recursos de Multas"
  ]

  return (
    <PageLayout title="Defesa Administrativa de Trânsito">
      <>
        <div style={styles.grid}>
          {servicos.map((servico, index) => {
            const destaque = servico === "Lei Seca / Bafômetro"

            return (
              <div
                key={index}
                style={{
                  ...styles.card,
                  ...(destaque && styles.cardDestaque)
                }}
              >
                {destaque && (
                  <span style={styles.badge}>MAIOR INCIDÊNCIA</span>
                )}

                <h3
                  style={{
                    ...styles.cardTitle,
                    ...(destaque && styles.cardTitleDestaque)
                  }}
                >
                  {servico}
                </h3>

                <p style={styles.cardText}>
                  Defesa administrativa completa desde a notificação
                  até recurso em JARI e CETRAN. Atuação estratégica
                  para evitar suspensão ou cassação da sua CNH.
                </p>

                <button
                  onClick={abrirWhatsApp}
                  style={{
                    ...styles.cardButton,
                    ...(destaque && styles.cardButtonDestaque)
                  }}
                >
                  Analisar meu caso agora
                </button>
              </div>
            )
          })}
        </div>

        {/* CTA Final */}
        <div style={styles.ctaBox}>
          <h3 style={styles.ctaTitle}>
            Não perca o prazo do seu recurso
          </h3>

          <p style={styles.ctaText}>
            O prazo para defesa é curto. Fale agora com um especialista
            e receba orientação imediata sobre seu caso.
          </p>

          <button
            onClick={abrirWhatsApp}
            style={styles.ctaButton}
          >
            Solicitar análise imediata
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
    justifyContent: "space-between",
    position: "relative"
  },

  cardDestaque: {
    border: "2px solid #dc2626",
    boxShadow: "0 15px 35px rgba(220,38,38,0.15)"
  },

  badge: {
    position: "absolute",
    top: "-12px",
    right: "20px",
    backgroundColor: "#dc2626",
    color: "#fff",
    padding: "5px 12px",
    fontSize: "12px",
    fontWeight: "700",
    borderRadius: "20px"
  },

  cardTitle: {
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "600"
  },

  cardTitleDestaque: {
    color: "#dc2626"
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

  cardButtonDestaque: {
    backgroundColor: "#dc2626"
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
    color: "#444",
    fontSize: "16px"
  },

  ctaButton: {
    padding: "16px 28px",
    backgroundColor: "#1e3a8a",
    color: "#ffffff",
    borderRadius: "8px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
  }
}

export default Servicos