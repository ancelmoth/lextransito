import { useState } from "react"

function Contato() {

  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Solicitação enviada com sucesso.")
  }

  return (
    <div style={styles.page}>

      <div style={styles.card}>
        <h1 style={styles.title}>
          Solicite uma <span style={styles.gold}>Análise Técnica</span>
        </h1>

        <p style={styles.subtitle}>
          Envie sua notificação ou descreva sua situação.
          Faremos uma avaliação estratégica inicial.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>

          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <textarea
            name="mensagem"
            placeholder="Descreva seu caso"
            value={form.mensagem}
            onChange={handleChange}
            style={styles.textarea}
            required
          />

          <button type="submit" style={styles.button}>
            Solicitar Análise
          </button>

        </form>

        <div style={styles.whatsBox}>
          Atendimento mais rápido via WhatsApp.
        </div>

      </div>

    </div>
  )
}

const styles = {

  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #06121c 0%, #0b1c2d 50%, #10283f 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px"
  },

  card: {
    width: "100%",
    maxWidth: "700px",
    backgroundColor: "#0f2234",
    padding: "60px",
    borderRadius: "18px",
    boxShadow: "0px 25px 60px rgba(0,0,0,0.5)"
  },

  title: {
    fontSize: "clamp(28px, 5vw, 40px)",
    marginBottom: "20px",
    color: "#ffffff",
    textAlign: "center"
  },

  gold: {
    color: "#d4af37"
  },

  subtitle: {
    textAlign: "center",
    color: "#e2e8f0",
    marginBottom: "40px",
    lineHeight: "1.6"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

  input: {
    padding: "16px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    backgroundColor: "#0b1c2d",
    color: "#ffffff",
    fontSize: "15px"
  },

  textarea: {
    padding: "16px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    backgroundColor: "#0b1c2d",
    color: "#ffffff",
    fontSize: "15px",
    minHeight: "140px",
    resize: "vertical"
  },

  button: {
    marginTop: "10px",
    padding: "18px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#d4af37",
    color: "#0b1c2d",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0px 10px 30px rgba(212,175,55,0.4)"
  },

  whatsBox: {
    marginTop: "30px",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "rgba(212,175,55,0.1)",
    color: "#d4af37",
    textAlign: "center",
    fontSize: "14px"
  }

}

export default Contato