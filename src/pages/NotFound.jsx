import React from 'react';
import { ui } from '../lib/theme';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4 bg-black">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-600/20 blur-[100px] rounded-full -z-10" />
        <h1 className="text-[150px] font-black leading-none bg-gradient-to-b from-white/20 to-transparent bg-clip-text text-transparent mb-8">
          404
        </h1>
        <h2 className="text-4xl font-bold mb-6 italic">الصفحة مفقودة في الفضاء الرقمي</h2>
        <p className="text-white/50 mb-10 max-w-md mx-auto">
          يبدو أنك حاولت الوصول لعنوان غير موجود أو تم نقله. لا تقلق، ذكاؤنا الاصطناعي وجد لك طريقاً للعودة.
        </p>
        <Link to="/" className={ui.btnPrimary + " mx-auto"}>
          العودة للرئيسية
          <ArrowLeft size={20} />
        </Link>
      </div>
    </div>
  );
}
