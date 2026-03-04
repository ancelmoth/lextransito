import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Home() {

  const abrirWhatsApp = () => {
    window.dispatchEvent(new Event("openWhatsAppModal"))
  }

  // ===== CARROSSEL =====
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      text: "Consegui evitar a suspensão da minha CNH. Atendimento técnico e direto.",
      author: "Cliente • Ceará"
    },
    {
      text: "Recebi notificação da Lei Seca e achei que perderia a carteira. A defesa foi fundamental.",
      author: "Cliente • Minas Gerais"
    },
    {
      text: "Equipe rápida e objetiva. Processo administrativo acompanhado até o final.",
      author: "Cliente • Pará"
    }
  ]

  // AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    )
  }

  return (
    <div style={styles.container}>

      {/* HERO */}
      <section style={styles.hero}>
        <p style={styles.marca}>LEXTRÂNSITO ELITE</p>

        <h1 style={styles.title}>
          Defesa Técnica Especializada para Multas de{" "}
          <span style={styles.gold}>Alto Impacto</span>
        </h1>

        <p style={styles.subtitle}>
          Suspensão, Cassação, Lei Seca e infrações autossuspensivas exigem estratégia técnica precisa.
        </p>

        <div style={styles.buttons}>
          <button
            onClick={abrirWhatsApp}
            style={styles.primaryButton}
            onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
          >
            Analisar minha notificação agora
          </button>

          <Link to="/servicos" style={styles.secondaryButton}>
            Como funciona a defesa
          </Link>
        </div>

        <p style={styles.heroTrust}>
          Foco exclusivo em defesa técnica para infrações de alto impacto
        </p>
      </section>

      {/* BLOCO DE URGÊNCIA */}
      <section style={styles.alertSection}>
        <h2 style={styles.sectionTitle}>
          Recebeu notificação? O prazo é limitado.
        </h2>
        <p style={styles.sectionText}>
          A defesa administrativa precisa ser apresentada dentro do prazo legal.
          Uma análise técnica rápida pode evitar a suspensão do seu direito de dirigir.
        </p>
      </section>

      {/* COMO FUNCIONA */}
      <section style={styles.infoSection}>
        <h2 style={styles.sectionTitleCenter}>Como Funciona</h2>

        <div style={styles.steps}>
          <div style={styles.step}>
            <span style={styles.stepNumber}>1</span>
            <p style={styles.stepText}>Envie sua notificação pelo WhatsApp.</p>
          </div>

          <div style={styles.step}>
            <span style={styles.stepNumber}>2</span>
            <p style={styles.stepText}>Analisamos tecnicamente a melhor estratégia.</p>
          </div>

          <div style={styles.step}>
            <span style={styles.stepNumber}>3</span>
            <p style={styles.stepText}>Protocolamos o recurso e acompanhamos até decisão final.</p>
          </div>
        </div>
      </section>

      {/* CREDIBILIDADE */}
      <section style={styles.credibilidade}>
        <h2 style={styles.sectionTitleCenter}>Atuação técnica especializada</h2>
        <p style={styles.sectionText}>
          Defesas e recursos administrativos elaborados com fundamentação adequada
          e estratégia personalizada para cada caso.
        </p>
      </section>

      {/* AVALIAÇÕES */}
      <section style={styles.reviewSection}>
        <h2 style={styles.sectionTitleCenter}>O que nossos clientes dizem</h2>

        <div style={styles.reviewCard}>
          <p style={styles.reviewStars}>★★★★★</p>
          <p style={styles.reviewText}>
            {reviews[currentReview].text}
          </p>
          <p style={styles.reviewAuthor}>
            — {reviews[currentReview].author}
          </p>
        </div>

        <div style={styles.reviewControls}>
          <button onClick={prevReview} style={styles.reviewButton}>←</button>
          <button onClick={nextReview} style={styles.reviewButton}>→</button>
        </div>
      </section>

    </div>
  )
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #06121c 0%, #0b1c2d 50%, #10283f 100%)",
    color: "#ffffff",
    minHeight: "100vh",
    padding: "0 24px 120px"
  },

  hero: {
    padding: "180px 0 140px",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center"
  },

  marca: {
    color: "#d4af37",
    letterSpacing: "5px",
    fontSize: "14px",
    marginBottom: "30px",
    fontWeight: "600"
  },

  title: {
    fontSize: "56px",
    lineHeight: "1.1",
    marginBottom: "35px",
    fontWeight: "800",
    textShadow: "0px 8px 30px rgba(0,0,0,0.45)"
  },

  gold: {
    color: "#d4af37"
  },

  subtitle: {
    fontSize: "20px",
    color: "#e2e8f0",
    marginBottom: "55px",
    maxWidth: "820px",
    marginInline: "auto"
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    flexWrap: "wrap"
  },

  primaryButton: {
    padding: "20px 40px",
    backgroundColor: "#d4af37",
    color: "#0b1c2d",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0px 10px 30px rgba(212,175,55,0.4)",
    transition: "all 0.3s ease"
  },

  secondaryButton: {
    padding: "19px 38px",
    border: "2px solid #d4af37",
    color: "#d4af37",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "16px",
    textDecoration: "none"
  },

  heroTrust: {
    marginTop: "30px",
    fontSize: "14px",
    letterSpacing: "1px",
    color: "#d4af37",
    opacity: 0.9
  },

  alertSection: {
    maxWidth: "1000px",
    margin: "80px auto",
    backgroundColor: "#0f2234",
    padding: "70px",
    borderRadius: "18px",
    textAlign: "center",
    boxShadow: "0px 20px 50px rgba(0,0,0,0.4)"
  },

  infoSection: {
    maxWidth: "1200px",
    margin: "100px auto"
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px",
    marginTop: "60px"
  },

  step: {
    backgroundColor: "#0f2234",
    padding: "45px",
    borderRadius: "16px",
    boxShadow: "0px 15px 40px rgba(0,0,0,0.35)"
  },

  stepNumber: {
    fontSize: "26px",
    fontWeight: "800",
    color: "#d4af37",
    display: "block",
    marginBottom: "15px"
  },

  stepText: {
    fontSize: "17px",
    lineHeight: "1.6"
  },

  credibilidade: {
    maxWidth: "1000px",
    margin: "100px auto 0",
    backgroundColor: "#0f2234",
    padding: "70px",
    borderRadius: "18px",
    textAlign: "center",
    boxShadow: "0px 20px 50px rgba(0,0,0,0.4)"
  },

  reviewSection: {
    maxWidth: "1000px",
    margin: "120px auto 0",
    textAlign: "center"
  },

  reviewCard: {
    backgroundColor: "#0f2234",
    padding: "60px",
    borderRadius: "18px",
    boxShadow: "0px 20px 50px rgba(0,0,0,0.4)",
    marginTop: "40px"
  },

  reviewStars: {
    color: "#d4af37",
    fontSize: "22px",
    marginBottom: "20px"
  },

  reviewText: {
    fontSize: "20px",
    lineHeight: "1.6",
    marginBottom: "25px"
  },

  reviewAuthor: {
    color: "#d4af37",
    fontWeight: "600"
  },

  reviewControls: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },

  reviewButton: {
    backgroundColor: "#d4af37",
    border: "none",
    color: "#0b1c2d",
    padding: "10px 18px",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer"
  },

  sectionTitle: {
    fontSize: "34px",
    marginBottom: "25px",
    fontWeight: "700"
  },

  sectionTitleCenter: {
    fontSize: "36px",
    marginBottom: "30px",
    fontWeight: "700",
    textAlign: "center"
  },

  sectionText: {
    fontSize: "18px",
    lineHeight: "1.7",
    maxWidth: "850px",
    margin: "0 auto"
  }
}

export default Home