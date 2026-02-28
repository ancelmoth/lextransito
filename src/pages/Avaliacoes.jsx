import PageLayout from "../components/layout/PageLayout"

function Avaliacoes() {
  return (
    <PageLayout title="Avaliações de Clientes">
      <div style={styles.container}>

        <div style={styles.card}>
          <p style={styles.text}>
            "Consegui reverter minha suspensão. Atendimento rápido e muito profissional."
          </p>
          <strong>— Carlos M.</strong>
        </div>

        <div style={styles.card}>
          <p style={styles.text}>
            "Excelente orientação jurídica. Processo bem explicado do início ao fim."
          </p>
          <strong>— Fernanda R.</strong>
        </div>

        <div style={styles.card}>
          <p style={styles.text}>
            "Muito transparente e estratégico. Recomendo para quem precisa recorrer multa."
          </p>
          <strong>— João P.</strong>
        </div>

      </div>
    </PageLayout>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "25px"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
  },
  text: {
    fontSize: "15px",
    lineHeight: "1.6",
    marginBottom: "10px",
    color: "#444"
  }
}

export default Avaliacoes