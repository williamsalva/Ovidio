'use client';

import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-55 bg-slate-200 dark:bg-slate-800">
      <div
        className="h-full bg-accent shadow-[0_0_8px_rgba(221,28,90,0.6)] transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
