import PageLayout from "../components/layout/PageLayout"

function Servicos() {
  const numero = "558881611828"

  const gerarLink = (mensagem) => {
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
  }

  return (
    <PageLayout title="Serviços Especializados em Direito de Trânsito">
      <>
        <div style={styles.grid}>

          {/* 1. Suspensão por Pontuação */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Suspensão da CNH por Pontuação</h3>
            <p style={styles.cardText}>
              Defesa e recurso em processos de suspensão por excesso de pontos.
              Análise estratégica completa para preservação do seu direito de dirigir.
            </p>
            <a
              href={gerarLink("Recebi notificação de suspensão por pontuação e preciso de orientação.")}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.cardButton}
            >
              Falar sobre Suspensão
            </a>
          </div>

          {/* 2. Multas Autosuspensivas */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Multas Autosuspensivas</h3>
            <p style={styles.cardText}>
              Atuação em infrações que geram suspensão direta,
              mesmo sem atingir limite de pontos.
            </p>
            <a
              href={gerarLink("Fui autuado em infração autosuspensiva e preciso de orientação.")}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.cardButton}
            >
              Falar sobre Multa Autosuspensiva
            </a>
          </div>

          {/* 3. Bafômetro - DESTAQUE */}
          <div style={styles.highlightCard}>
            <h3 style={styles.highlightTitle}>🚨 Lei Seca / Bafômetro</h3>
            <p style={styles.cardText}>
              Defesa administrativa em autuações por recusa ou teste positivo
              no bafômetro. Estratégia técnica individualizada.
            </p>
            <a
              href={gerarLink("Fui autuado na Lei Seca (bafômetro) e preciso de defesa urgente.")}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.highlightButton}
            >
              Preciso de Defesa na Lei Seca
            </a>
          </div>

          {/* 4. CNH Provisória */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Defesa de CNH Provisória</h3>
            <p style={styles.cardText}>
              Defesa para condutores permissionários que receberam infração
              que pode impedir a emissão da CNH definitiva.
            </p>
            <a
              href={gerarLink("Recebi infração com CNH provisória e preciso de orientação.")}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.cardButton}
            >
              Falar sobre CNH Provisória
            </a>
          </div>

          {/* 5. Cassação */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Cassação da CNH</h3>
            <p style={styles.cardText}>
              Defesa completa em processos de cassação,
              com análise técnica e acompanhamento até decisão final.
            </p>
            <a
              href={gerarLink("Recebi notificação de cassação da CNH e preciso de orientação.")}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.cardButton}
            >
              Falar sobre Cassação
            </a>
          </div>

          {/* 6. Recursos em Geral */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Recursos de Multas (Leves a Gravíssimas)</h3>
            <p style={styles.cardText}>
              Defesa e recursos administrativos em todas as instâncias
              para infrações leves, médias, graves e gravíssimas.
            </p>
            <a
              href={gerarLink("Preciso recorrer de multa de trânsito.")}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.cardButton}
            >
              Recorrer de Multa
            </a>
          </div>

        </div>

        {/* CTA Final */}
        <div style={styles.ctaBox}>
          <h3 style={styles.ctaTitle}>Recebeu uma notificação?</h3>
          <p style={styles.ctaText}>
            Envie agora pelo WhatsApp para análise estratégica personalizada.
            Atendimento 100% online em todo o Brasil.
          </p>

          <a
            href={gerarLink("Recebi uma notificação de trânsito e gostaria de análise estratégica.")}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.ctaButton}
          >
            Solicitar Análise Agora
          </a>
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

  highlightCard: {
    backgroundColor: "#fff4f4",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 10px 30px rgba(220,38,38,0.15)",
    border: "1px solid #fecaca",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  cardTitle: {
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "600"
  },

  highlightTitle: {
    marginBottom: "15px",
    fontSize: "20px",
    fontWeight: "700",
    color: "#b91c1c"
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
    textDecoration: "none",
    textAlign: "center"
  },

  highlightButton: {
    padding: "14px 20px",
    backgroundColor: "#dc2626",
    color: "#ffffff",
    borderRadius: "8px",
    fontWeight: "700",
    textDecoration: "none",
    textAlign: "center"
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
    display: "inline-block",
    padding: "16px 28px",
    backgroundColor: "#1e3a8a",
    color: "#ffffff",
    borderRadius: "8px",
    fontWeight: "600",
    textDecoration: "none"
  }
}

export default Servicos