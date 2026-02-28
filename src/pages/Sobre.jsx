import PageLayout from "../components/layout/PageLayout"

function Sobre() {
  return (
    <PageLayout title="Sobre o LexTrânsito">
      <div style={styles.content}>
        <p>
          O LexTrânsito é uma plataforma especializada em Direito de Trânsito,
          com atuação estratégica na defesa administrativa de condutores
          autuados e em processos de suspensão ou cassação da CNH.
        </p>

        <p>
          Nosso trabalho é focado na análise técnica detalhada de cada caso,
          buscando inconsistências formais, vícios processuais e aplicação
          correta da legislação vigente.
        </p>

        <p>
          Atuamos de forma 100% online, oferecendo praticidade,
          agilidade e acompanhamento transparente durante todo o processo.
        </p>

        <div style={styles.highlight}>
          Atendimento estratégico, análise personalizada e acompanhamento completo.
        </div>
      </div>
    </PageLayout>
  )
}

const styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#444"
  },
  highlight: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#f3f4f6",
    borderRadius: "10px",
    fontWeight: "600",
    color: "#111827"
  }
}

export default Sobre