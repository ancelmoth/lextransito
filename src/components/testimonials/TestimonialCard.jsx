function TestimonialCard({ nome, cidade, texto }) {
  return (
    <div style={styles.card}>
      <div style={styles.stars}>★★★★★</div>

      <p style={styles.texto}>"{texto}"</p>

      <div style={styles.autor}>
        <strong>{nome}</strong>
        <span>{cidade}</span>
      </div>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    marginBottom: "20px"
  },
  stars: {
    color: "#f4c150",
    marginBottom: "10px",
    fontSize: "18px"
  },
  texto: {
    fontStyle: "italic",
    marginBottom: "15px"
  },
  autor: {
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
    color: "#555"
  }
}

export default TestimonialCard