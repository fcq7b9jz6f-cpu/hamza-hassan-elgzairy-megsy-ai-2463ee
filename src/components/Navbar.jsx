import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingCart, User, LogOut, Terminal } from "lucide-react";

export default function Navbar({ links = [], cartCount = 0 }) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    window.supabase?.auth?.getUser?.().then(({ data }) => setUser(data?.user || null));
    const { data: sub } = window.supabase?.auth?.onAuthStateChange?.((_e, s) => setUser(s?.user || null)) || {};
    
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => { 
      sub?.subscription?.unsubscribe?.(); 
      window.removeEventListener("scroll", onScroll); 
    };
  }, []);

  const handleLogout = async () => {
    await window.supabase.auth.signOut();
    nav("/auth");
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/60 backdrop-blur-2xl border-b border-white/5 py-3" : "bg-transparent py-5"}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:rotate-12 transition-transform">
            <Terminal className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight leading-none">HAMZA</span>
            <span className="text-[10px] text-fuchsia-400 font-bold tracking-widest uppercase">MEGSY AI</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
          {links.map(l => (
            <NavLink 
              key={l.to} 
              to={l.to} 
              className={({isActive}) => `px-5 py-2 rounded-full text-sm font-medium transition ${isActive ? "bg-white text-black shadow-lg" : "text-white/70 hover:text-white hover:bg-white/5"}`}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/cart" className="relative p-2.5 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 transition group">
            <ShoppingCart className="w-5 h-5 text-white/80 group-hover:text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-[10px] font-bold text-white rounded-full w-5 h-5 flex items-center justify-center border-2 border-black">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex items-center gap-2">
              <Link to="/account" className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold hover:bg-white/10">
                <User className="w-4 h-4" />
                حسابي
              </Link>
              <button 
                onClick={handleLogout}
                className="p-2.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <Link to="/auth" className="hidden sm:inline-flex px-6 py-2.5 rounded-full bg-white text-black text-sm font-black hover:bg-zinc-200 transition active:scale-95 shadow-lg shadow-white/5">
              دخول
            </Link>
          )}

          <button onClick={() => setOpen(!open)} className="md:hidden p-2.5 rounded-full bg-white/5 border border-white/5 text-white">
            {open ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden absolute top-full inset-x-0 bg-black/95 backdrop-blur-3xl border-b border-white/10 px-4 py-8 flex flex-col gap-2 animate-in slide-in-from-top duration-300">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="px-6 py-4 rounded-2xl text-lg font-bold hover:bg-white/5 border border-transparent hover:border-white/5 transition flex justify-between items-center group">
              {l.label}
              <div className="w-2 h-2 rounded-full bg-violet-600 opacity-0 group-hover:opacity-100 transition" />
            </NavLink>
          ))}
          {!user && (
            <Link to="/auth" onClick={() => setOpen(false)} className="mt-4 w-full py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-center font-black text-xl shadow-xl shadow-fuchsia-600/20">
              دخول للأعضاء
            </Link>
          )}
        </div>
      )}
    </header>
  );
}