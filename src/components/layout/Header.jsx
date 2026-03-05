import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  function handleLinkClick() {
    setMenuOpen(false)
  }

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h2 style={styles.logo}>LexTrânsito Elite</h2>

        {isMobile && (
          <button
            style={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        )}

        <nav
          style={{
            ...styles.nav,
            ...(isMobile
              ? menuOpen
                ? styles.navMobileOpen
                : styles.navMobileHidden
              : {})
          }}
        >
          <Link to="/" style={styles.link} onClick={handleLinkClick}>
            Início
          </Link>
          <Link to="/servicos" style={styles.link} onClick={handleLinkClick}>
            Serviços
          </Link>
          <Link to="/sobre" style={styles.link} onClick={handleLinkClick}>
            Sobre
          </Link>
          <Link to="/avaliacoes" style={styles.link} onClick={handleLinkClick}>
            Avaliações
          </Link>
          <Link
            to="/contato"
            style={styles.contactButton}
            onClick={handleLinkClick}
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #eee",
    position: "relative"
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    fontWeight: "700",
    color: "#1e3a8a"
  },
  menuButton: {
    fontSize: "28px",
    background: "none",
    border: "none",
    cursor: "pointer"
  },
  nav: {
    display: "flex",
    gap: "25px",
    alignItems: "center"
  },
  navMobileHidden: {
    display: "none"
  },
  navMobileOpen: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "70px",
    left: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "25px 0",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    gap: "18px",
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
    fontSize: "16px"
  },
  contactButton: {
    textDecoration: "none",
    backgroundColor: "#1e3a8a",
    color: "#fff",
    padding: "12px 22px",
    borderRadius: "8px",
    fontWeight: "600"
  }
}

export default Header