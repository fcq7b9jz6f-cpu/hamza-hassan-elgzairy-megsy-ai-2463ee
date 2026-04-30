import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, Store, MessageSquare, User, ShoppingCart, Layout, Menu, X, ArrowRight, Shield, Rocket, Cpu } from 'lucide-react';
import { ui } from './lib/theme';
import { useCart } from './lib/cart';

// Pages
import HomePage from './pages/Home';
import StorePage from './pages/Store';
import ProjectsPage from './pages/Projects';
import SupportPage from './pages/Support';
import AuthPage from './pages/Auth';
import CartPage from './pages/Cart';
import AccountPage from './pages/Account';
import NotFound from './pages/NotFound';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const links = [
    { name: 'الرئيسية', path: '/', icon: Home },
    { name: 'المشاريع', path: '/projects', icon: Layout },
    { name: 'المتجر', path: '/store', icon: Store },
    { name: 'الدعم الذكي', path: '/support', icon: MessageSquare },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className={ui.container}>
        <div className="flex items-center justify-between h-20 px-4">
          <Link to="/" className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center">
              <Cpu className="text-white w-5 h-5" />
            </div>
            <span className={ui.gradientText}>HAMZA.AI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  location.pathname === link.path ? 'text-white' : 'text-white/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/cart" className="relative group p-2">
              <ShoppingCart size={24} className="text-white/70 group-hover:text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-violet-600 text-[10px] flex items-center justify-center rounded-full text-white font-bold animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/auth" className={ui.btnPrimary + " py-2 px-6"}>
              دخول
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 py-8 flex flex-col gap-6 text-center">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-white/50 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/auth" onClick={() => setIsOpen(false)} className={ui.btnPrimary}>
              ابدأ الآن
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
    <div className={ui.container + " px-4 text-center md:text-right"}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 px-4">
        <div className="md:col-span-2">
          <Link to="/" className="text-3xl font-black mb-6 block">
            <span className={ui.gradientText}>HAMZA.AI</span>
          </Link>
          <p className="text-white/50 max-w-sm mb-6 leading-relaxed">
            مستقبلك يبدأ هنا. نحن في Megsy AI نصمم أنظمة ذكاء اصطناعي تفهمك قبل أن تتحدث، لنجعل التكنولوجيا في يدك لا عليك.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">روابط هامة</h4>
          <div className="flex flex-col gap-4 text-white/40">
            <Link to="/store">المتجر الرقمي</Link>
            <Link to="/projects">المشاريع</Link>
            <Link to="/support">الدعم الفني</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">تواصل معنا</h4>
          <div className="flex flex-col gap-4 text-white/40">
            <p>hamza@megsy.ai</p>
            <p>مجتمع Megsy في تلغرام</p>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 text-center text-white/20 text-xs font-medium tracking-widest uppercase">
        © {new Date().getFullYear()} Hamza Hassan Elgzairy • Designed for the Future
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-violet-500/30 font-cairo" dir="rtl">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}