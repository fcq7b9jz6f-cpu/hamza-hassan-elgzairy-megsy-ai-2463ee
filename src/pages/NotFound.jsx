import React from 'react';
import { Link } from 'react-router-dom';
import { Frown } from 'lucide-react';
import { ui } from '../lib/theme';

const NotFound = () => {
  return (
    <div className={`${ui.section} ${ui.container} text-center flex flex-col items-center justify-center min-h-[60vh]`}>
        <Frown className="w-24 h-24 text-violet-400 mb-6" />
      <h1 className={`${ui.h1} ${ui.gradientText} mb-4`}>404</h1>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-text-muted text-lg mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link to="/" className={ui.btnPrimary}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
