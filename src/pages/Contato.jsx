import PageLayout from "../components/layout/PageLayout"

function Contato() {
  return (
    <PageLayout title="Solicite uma Análise do Seu Caso">
      <div style={styles.container}>

        <p style={styles.description}>
          Envie sua notificação ou descreva sua situação.
          Faremos uma análise estratégica e retornaremos com orientação jurídica adequada.
        </p>

        <form style={styles.form}>
          <input type="text" placeholder="Seu nome" style={styles.input} />
          <input type="email" placeholder="Seu e-mail" style={styles.input} />
          <textarea
            placeholder="Descreva seu caso"
            rows="5"
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.button}>
            Solicitar Análise
          </button>
        </form>

        <div style={styles.whatsappBox}>
          Ou, se preferir, envie diretamente pelo WhatsApp para
          atendimento mais rápido.
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
  description: {
    fontSize: "15px",
    color: "#444",
    lineHeight: "1.6"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px"
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px"
  },
  button: {
    padding: "14px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#0d6efd",
    color: "#ffffff",
    fontWeight: "600",
    cursor: "pointer"
  },
  whatsappBox: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#f3f4f6",
    borderRadius: "10px",
    fontSize: "14px",
    color: "#333"
  }
}

export default Contato