import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, User, Home, Lightbulb, Briefcase, Store, BadgeHelp } from "lucide-react";
import { ui } from "../lib/theme";

const Navbar = ({ cartCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", path: "/", icon: <Home size={18} /> },
    { name: "عني", path: "/about", icon: <User size={18} /> },
    { name: "المشاريع", path: "/projects", icon: <Briefcase size={18} /> },
    { name: "المتجر", path: "/store", icon: <Store size={18} /> },
    { name: "الدعم", path: "/support", icon: <BadgeHelp size={18} /> },
  ];

  return (
    <nav className={`${ui.nav} ${scrolled ? ui.navScrolled : ui.navNormal}`}>
      <div className={ui.container}>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:rotate-6 transition-transform">
              H
            </div>
            <span className="text-xl font-bold tracking-tight hidden sm:block">
              HAMZA <span className={ui.gradientText}>ELGZAIRY</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-violet-400 ${
                  location.pathname === link.path ? "text-violet-400" : "text-gray-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative p-2 text-gray-400 hover:text-white transition-colors group">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-fuchsia-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-black">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link 
              to="/auth" 
              className="p-2 text-gray-400 hover:text-white transition-colors border border-white/10 rounded-full hover:bg-white/5"
            >
              <User size={24} />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-black/95 transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-bold ${location.pathname === link.path ? ui.gradientText : "text-white"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
                to="/cart" 
                onClick={() => setIsOpen(false)}
                className={ui.btnPrimary}
            >
                سلة التسوق ({cartCount})
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
