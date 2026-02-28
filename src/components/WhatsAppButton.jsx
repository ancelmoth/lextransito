function WhatsAppButton() {
  const numero = "5585999999999" // COLOQUE SEU NÚMERO AQUI (com DDI e DDD, só números)

  return (
    <a
      href={`https://wa.me/${numero}`}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
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
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    cursor: "pointer",
    zIndex: 1000,
    textDecoration: "none"
  }
}

export default WhatsAppButton