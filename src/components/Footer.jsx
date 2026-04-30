import React from "react";
import { ui } from "../lib/theme";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 mt-20">
      <div className={ui.container}>
        <div className="grid md:grid-cols-4 gap-12 mb-20 text-center md:text-right">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-black text-xl">
                H
              </div>
              <span className="text-2xl font-black">HAMZA</span>
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed mx-auto md:mx-0">
              مهندس ذكاء اصطناعي شغوف بصناعة أدوات تغير العالم. متخصص في تطوير البرمجيات والذكاء الاصطناعي التوليدي.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/about" className="hover:text-violet-400 transition-colors">عن حمزة</Link></li>
              <li><Link to="/projects" className="hover:text-violet-400 transition-colors">المعرض</Link></li>
              <li><Link to="/store" className="hover:text-violet-400 transition-colors">المتجر</Link></li>
              <li><Link to="/support" className="hover:text-violet-400 transition-colors">الدعم الفني</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">تواصل معي</h4>
            <div className="flex gap-4 justify-center md:justify-start mb-6">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-violet-600 transition-all"><Github size={18}/></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-500 transition-all"><Twitter size={18}/></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all"><Linkedin size={18}/></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 transition-all"><Mail size={18}/></a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لـ حمزة الجزايري</p>
          <div className="flex items-center gap-2">
            تم التطوير بحب <Heart size={14} className="text-red-500 fill-red-500" /> في Megsy AI
          </div>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white">الشروط والأحكام</a>
             <a href="#" className="hover:text-white">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
