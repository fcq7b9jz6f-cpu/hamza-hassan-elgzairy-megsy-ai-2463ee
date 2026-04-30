import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-black text-white mb-6 block">
              HAMZA <span className="text-violet-500">HASSAN</span>
            </Link>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
              مهندس ذكاء اصطناعي في Megsy AI، مختص ببناء الأنظمة الذكية التي تغير طريقة تفاعلنا مع العالم الرقمي.
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all text-white/60 group">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">الروابط</h4>
            <ul className="space-y-4 text-white/40">
              <li><Link to="/store" className="hover:text-violet-400 transition-colors">المتجر الرقمي</Link></li>
              <li><Link to="/projects" className="hover:text-violet-400 transition-colors">معرض الأعمال</Link></li>
              <li><Link to="/about" className="hover:text-violet-400 transition-colors">عن حمزة</Link></li>
              <li><Link to="/support" className="hover:text-violet-400 transition-colors">الدعم التقني</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">قانوني</h4>
            <ul className="space-y-4 text-white/40">
              <li><a href="#" className="hover:text-violet-400 transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">سياسة الاسترجاع</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm">
          <p>© 2024 حمزة الجزايري. جميع الحقوق محفوظة لـ Megsy AI.</p>
          <div className="flex items-center gap-2">
            تم التطوير بواسطة <span className="text-white">حمزة</span> باستخدام <span className="text-white">Megsy AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}