'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUIStore } from '@/store/useUIStore';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, setTheme, openAppointmentModal } = useUIStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Synchronize theme with localStorage / system on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, [setTheme]);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-accent-light dark:bg-rose-950/40 text-3xl transition-transform duration-300 group-hover:scale-110 shrink-0 select-none animate-heartbeat">
              ❤️
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-primary dark:text-slate-100 leading-none">
                Dr. Ovidio <span className="text-accent font-light">Cortázar</span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-muted dark:text-slate-400 font-extrabold leading-none mt-1">
                Cardiología Pediátrica y Arritmias
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive
                      ? 'text-accent dark:text-accent'
                      : 'text-primary/80 dark:text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-2xl transition-colors"
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Direct WhatsApp Call */}
            <a
              href="https://wa.me/525529682922"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:opacity-80 transition-opacity"
            >
              <span className="text-lg select-none">📞</span>
              <span>WhatsApp</span>
            </a>

            {/* CTA Button */}
            <button
              onClick={openAppointmentModal}
              className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-light text-slate-100 text-sm font-medium transition-all shadow-md hover:shadow-lg active:scale-95 duration-150 cursor-pointer dark:bg-accent dark:hover:bg-rose-600"
            >
              Agendar Cita
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-2xl transition-colors hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-primary dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <span className="text-2xl select-none">❌</span> : <span className="text-2xl select-none">🍔</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-64 z-50 glass-panel shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full py-6 px-4">
          <div className="flex items-center justify-between mb-8">
            <span className="font-semibold text-lg text-primary dark:text-slate-100">
              Menú
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
            >
              <span className="text-2xl select-none">❌</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-4 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-accent/10 text-accent dark:bg-rose-950/20'
                      : 'text-primary/80 dark:text-slate-300 hover:bg-slate-200/30 dark:hover:bg-slate-800/30'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
            <a
              href="https://wa.me/525529682922"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 font-medium hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-colors"
            >
              <span className="text-lg select-none">📞</span>
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                openAppointmentModal();
              }}
              className="w-full py-3 rounded-xl bg-accent text-white font-medium shadow-md hover:shadow-lg active:scale-95 transition-all text-center"
            >
              Agendar Cita
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile drawer */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm md:hidden"
        />
      )}
    </header>
  );
}
