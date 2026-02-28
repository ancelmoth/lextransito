function PageLayout({ title, children }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>{title}</h1>
        <div>{children}</div>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    padding: "60px 20px"
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto"
  },
  title: {
    marginBottom: "30px",
    fontSize: "28px",
    fontWeight: "700",
    color: "#111827",
    textAlign: "center"
  }
}

export default PageLayout