import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { ui } from '../lib/theme';

const Footer = () => {
  return (
    <footer className="bg-surface-2 border-t border-border">
      <div className={`${ui.container} ${ui.section} !py-16 grid grid-cols-1 md:grid-cols-3 gap-12`}>
        <div>
          <h3 className="font-bold text-lg mb-4">Hamza Hassan Elgzairy</h3>
          <p className="text-text-muted max-w-xs">
            AI Engineer at Megsy AI, building the future of intelligent applications.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="text-text-muted hover:text-white"><Github size={20} /></a>
            <a href="#" className="text-text-muted hover:text-white"><Linkedin size={20} /></a>
            <a href="#" className="text-text-muted hover:text-white"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-text-muted hover:text-white">About</Link></li>
            <li><Link to="/projects" className="text-text-muted hover:text-white">Projects</Link></li>
            <li><Link to="/store" className="text-text-muted hover:text-white">Store</Link></li>
            <li><Link to="/support" className="text-text-muted hover:text-white">Support</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Newsletter</h3>
          <p className="text-text-muted mb-4">Get updates on new projects and products.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="your.email@example.com" className="bg-surface border border-border rounded-md px-4 py-2 w-full focus:ring-violet-500 focus:border-violet-500" />
            <button type="submit" className={`${ui.btnPrimary} !px-4 !py-2`}>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="bg-bg border-t border-border py-6">
        <p className={`${ui.container} text-center text-sm text-text-muted`}>
          &copy; {new Date().getFullYear()} Hamza Hassan Elgzairy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
