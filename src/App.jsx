import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Footer from "./components/layout/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App