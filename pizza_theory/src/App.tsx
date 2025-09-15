import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage.tsx";
import MenuPage from "./pages/Menupage";
import AboutPage from "./pages/Aboutpage";
import ContactPage from "./pages/Contactpage";
import CartPage from "./pages/CartPage"; // ✅ import Cart page
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-stone-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} /> {/* ✅ new route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
