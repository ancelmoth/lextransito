import { useState, useEffect } from "react"

function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  // 🔁 NÚMEROS (fácil alterar depois)
  const numeros = {
    ce: "558881611828",
    mg: "553187727273",
    pa: "559181983436"
  }

  const gerarLink = (numero, estado) => {
    const mensagem =
      "Olá! Gostaria de atendimento sobre meu caso de trânsito no estado de " +
      estado +
      "."
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
  }

  // 🔥 Escuta evento global para abrir o modal
  useEffect(() => {
    const abrir = () => setOpen(true)
    window.addEventListener("openWhatsAppModal", abrir)

    return () => {
      window.removeEventListener("openWhatsAppModal", abrir)
    }
  }, [])

  return (
    <>
      {/* Botão flutuante */}
      <button
        style={styles.floatingButton}
        onClick={() => setOpen(true)}
      >
        💬
      </button>

      {/* Modal */}
      {open && (
        <div
          style={styles.overlay}
          onClick={() => setOpen(false)}
        >
          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={styles.title}>
              Escolha o estado do atendimento
            </h3>

            <a
              href={gerarLink(numeros.ce, "Ceará")}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.option}
            >
              Ceará
            </a>

            <a
              href={gerarLink(numeros.mg, "Minas Gerais")}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.option}
            >
              Minas Gerais
            </a>

            <a
              href={gerarLink(numeros.pa, "Pará")}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.option}
            >
              Pará
            </a>

            <button
              style={styles.closeButton}
              onClick={() => setOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  )
}

const styles = {
  floatingButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    color: "#fff",
    fontSize: "26px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    zIndex: 1000
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1001
  },

  modal: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "14px",
    width: "90%",
    maxWidth: "350px",
    textAlign: "center"
  },

  title: {
    marginBottom: "20px",
    fontSize: "18px"
  },

  option: {
    display: "block",
    padding: "12px",
    marginBottom: "10px",
    backgroundColor: "#1e3a8a",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600"
  },

  closeButton: {
    marginTop: "10px",
    background: "none",
    border: "none",
    color: "#555",
    cursor: "pointer"
  }
}

export default WhatsAppButton