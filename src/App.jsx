import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Projects from "./pages/Projects";
import Support from "./pages/Support";
import Account from "./pages/Account";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";
import { useCart } from "./lib/cart";
import "./styles/tokens.css";
import "./styles.css";

export default function App() {
  const cartCount = useCart(s => s.count());

  const navLinks = [
    { label: "الرئيسية", to: "/" },
    { label: "المتجر", to: "/store" },
    { label: "المشاريع", to: "/projects" },
    { label: "دعم الـ AI", to: "/support" }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-violet-500/30">
      <Navbar links={navLinks} cartCount={cartCount} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/support" element={<Support />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}