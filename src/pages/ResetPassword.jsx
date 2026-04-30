import React from 'react';
import { ui } from '../lib/theme';

const ResetPassword = () => {
  return (
    <div className={`${ui.section} ${ui.container} flex items-center justify-center`}>
      <div className={`${ui.card} w-full max-w-md`}>
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
        <p className="text-text-muted text-center mb-6">Enter your email and we'll send you a link to reset your password.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-violet-500 outline-none" placeholder="name@example.com" />
          </div>
          <button type="button" className={`${ui.btnPrimary} w-full justify-center mt-4`}>
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
