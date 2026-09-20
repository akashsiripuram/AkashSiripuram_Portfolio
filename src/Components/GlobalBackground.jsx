import React from 'react';

const GlobalBackground = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-[#fafafa] dark:bg-[#090d16] text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      {/* Background ambient lighting and grid overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Engineering dot grid */}
        <div className="absolute inset-0 bg-tech-grid opacity-60 dark:opacity-40" />

        {/* Subtle radial ambient glows - strategically positioned */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-500/[0.04] rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-[550px] h-[550px] bg-indigo-500/5 dark:bg-indigo-500/[0.03] rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};

export default React.memo(GlobalBackground);
