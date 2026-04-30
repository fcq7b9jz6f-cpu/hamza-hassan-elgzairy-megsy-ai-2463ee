import React from 'react';
import { ui } from '../lib/theme';
import { Mail, MessageCircle, HelpCircle } from 'lucide-react';

const Support = () => {
  return (
    <div className={`${ui.section} ${ui.container}`}>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className={`${ui.h1} ${ui.gradientText} mb-4`}>Support Center</h1>
        <p className="text-lg text-text-muted">How can we help you today? Our team is here to support your AI journey.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className={`${ui.card} text-center`}>
          <Mail size={32} className="mx-auto text-violet-400 mb-4" />
          <h3 className="font-bold mb-2">Email Us</h3>
          <p className="text-sm text-text-muted mb-4">Reply within 24 hours</p>
          <a href="mailto:support@megsy.ai" className="text-violet-400 font-medium">support@megsy.ai</a>
        </div>
        <div className={`${ui.card} text-center`}>
          <MessageCircle size={32} className="mx-auto text-sky-400 mb-4" />
          <h3 className="font-bold mb-2">Live Chat</h3>
          <p className="text-sm text-text-muted mb-4">Available Mon-Fri</p>
          <button className="text-sky-400 font-medium underline">Start Chat</button>
        </div>
        <div className={`${ui.card} text-center`}>
          <HelpCircle size={32} className="mx-auto text-fuchsia-400 mb-4" />
          <h3 className="font-bold mb-2">Help Docs</h3>
          <p className="text-sm text-text-muted mb-4">Browse tutorials</p>
          <button className="text-fuchsia-400 font-medium underline">View Docs</button>
        </div>
      </div>
    </div>
  );
};

export default Support;
