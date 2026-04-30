import React from 'react';
import { ui } from '../lib/theme';
import { User, Settings, Package, LogOut } from 'lucide-react';

const Account = () => {
  return (
    <div className={`${ui.section} ${ui.container}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`${ui.h2} mb-8`}>My Account</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-2">
            <button className="flex items-center gap-3 w-full p-3 rounded-xl bg-white/5 text-violet-400"><User size={20}/> Profile</button>
            <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/5 transition-colors"><Package size={20}/> Orders</button>
            <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/5 transition-colors"><Settings size={20}/> Settings</button>
            <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/5 text-red-400 transition-colors mt-8"><LogOut size={20}/> Logout</button>
          </div>
          <div className={`${ui.card} md:col-span-3`}>
             <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                <div>
                  <h2 className="text-xl font-bold">Hamza User</h2>
                  <p className="text-text-muted">user@example.com</p>
                </div>
             </div>
             <p className="text-text-muted">Account details and preferences will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
