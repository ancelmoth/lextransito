import PageLayout from "../components/layout/PageLayout"

function PoliticaPrivacidade() {
  return (
    <PageLayout title="Política de Privacidade">
      <div style={styles.content}>

        <p>
          Esta Política de Privacidade descreve como as informações fornecidas
          pelos usuários são coletadas, utilizadas e protegidas.
        </p>

        <h3 style={styles.subtitle}>Coleta de Informações</h3>
        <p>
          Podemos coletar informações fornecidas voluntariamente pelo usuário,
          como nome, e-mail e descrição do caso, exclusivamente para fins de
          contato e análise jurídica.
        </p>

        <h3 style={styles.subtitle}>Uso das Informações</h3>
        <p>
          As informações são utilizadas apenas para comunicação,
          orientação jurídica e acompanhamento do atendimento.
          Não compartilhamos dados com terceiros sem autorização.
        </p>

        <h3 style={styles.subtitle}>Proteção de Dados</h3>
        <p>
          Adotamos medidas técnicas e organizacionais adequadas
          para proteger as informações contra acesso não autorizado.
        </p>

        <h3 style={styles.subtitle}>Contato</h3>
        <p>
          Em caso de dúvidas sobre esta Política,
          entre em contato pelos canais informados na página de contato.
        </p>

      </div>
    </PageLayout>
  )
}

const styles = {
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    fontSize: "14px",
    lineHeight: "1.7",
    color: "#444"
  },
  subtitle: {
    marginTop: "15px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#111827"
  }
}

export default PoliticaPrivacidade