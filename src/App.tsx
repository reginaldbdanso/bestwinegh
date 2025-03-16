import { Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import HomePage from "./pages/home"
import WineDetailPage from "./pages/wine-detail"
import CartPage from "./pages/cart"
import WinesPage from "./pages/wines"
import NotFoundPage from "./pages/not-found"
import TestPage from "./pages/test"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wines" element={<WinesPage />} />
          <Route path="/wines/:id" element={<WineDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

