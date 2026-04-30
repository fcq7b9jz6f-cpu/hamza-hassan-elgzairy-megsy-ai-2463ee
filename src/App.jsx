import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import Support from "./pages/Support";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Update cart count from localStorage
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
    };
    updateCount();
    window.addEventListener("storage", updateCount);
    window.addEventListener("cart-updated", updateCount);
    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("cart-updated", updateCount);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-violet-500/30 font-['Cairo',_sans-serif]" dir="rtl">
      <Navbar cartCount={cartCount} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/account" element={<Account />} />
          <Route path="/support" element={<Support />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
