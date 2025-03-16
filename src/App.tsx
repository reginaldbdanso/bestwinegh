import { Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import HomePage from "./pages/home"
import WineDetailPage from "./pages/wine-detail"
import CartPage from "./pages/cart"
import WinesPage from "./pages/wines"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import DeliveryPage from "./pages/delivery"
import PrivacyPage from "./pages/privacy"
import TermsPage from "./pages/terms"
import FAQPage from "./pages/faq"
import NotFoundPage from "./pages/not-found"
import { CartProvider } from "./contexts/cart-context"
import { Toaster } from 'sonner'

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Toaster />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wines" element={<WinesPage />} />
            <Route path="/wines/:id" element={<WineDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App