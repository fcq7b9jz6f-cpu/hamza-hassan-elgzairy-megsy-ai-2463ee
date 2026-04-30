import React from 'react';
import { ui } from '../lib/theme';

const Auth = () => {
  return (
    <div className={`${ui.section} ${ui.container} flex items-center justify-center`}>
      <div className={`${ui.card} w-full max-w-md`}>
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-violet-500 outline-none" placeholder="name@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input type="password" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-violet-500 outline-none" placeholder="••••••••" />
          </div>
          <button type="button" className={`${ui.btnPrimary} w-full justify-center mt-4`}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
