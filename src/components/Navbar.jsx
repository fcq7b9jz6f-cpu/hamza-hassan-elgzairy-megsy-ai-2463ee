import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ui } from "../lib/theme";
import { ShoppingCart, User, Github, Linkedin, Twitter, Sparkles } from "lucide-react";

const Navbar = ({ links, cartCount }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-6">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-full px-6 py-4 flex items-center justify-between border border-white/10">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center font-black text-white group-hover:rotate-12 transition-transform">
              H
            </div>
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
              HAMZA <span className="text-violet-400">HASSAN</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative p-2 text-white/70 hover:text-white transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-violet-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-black">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/auth" className="p-2 text-white/70 hover:text-white transition-colors border-l border-white/10 pl-4">
              <User className="w-6 h-6" />
            </Link>
            <Link to="/store" className="hidden lg:flex px-6 py-2 bg-white text-black rounded-full font-bold text-sm hover:bg-violet-400 hover:text-white transition-all">
              اطلب الآن
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;