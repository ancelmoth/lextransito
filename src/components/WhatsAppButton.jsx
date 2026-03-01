function WhatsAppButton() {
  const numero = "558881611828" // seu número com DDI +55

  const mensagem = encodeURIComponent(
    "Olá, recebi uma notificação de trânsito e gostaria de orientação sobre defesa ou recurso."
  )

  const link = `https://wa.me/${numero}?text=${mensagem}`

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
      aria-label="Falar com especialista em trânsito"
    >
      💬
    </a>
  )
}

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "#fff",
    fontSize: "28px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
    cursor: "pointer",
    zIndex: 1000,
    textDecoration: "none",
    transition: "transform 0.2s ease, box-shadow 0.2s ease"
  }
}

export default WhatsAppButton