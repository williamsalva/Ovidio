'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';

export default function Footer() {
  const { openAppointmentModal } = useUIStore();

  const locations = [
    {
      name: 'Casa KINDOC (Sede Principal)',
      address: 'Patricio Sanz 1025, Col. Insurgentes San Borja, Benito Juárez, CDMX',
      mapLink: 'https://maps.google.com/?q=Patricio+Sanz+1025,+Benito+Juarez,+CDMX'
    },
    {
      name: 'KINDOC Universidad',
      address: 'Av. Universidad 1080, Col. Xoco, Benito Juárez, CDMX (Dentro de Hospital Ángeles Universidad)',
      mapLink: 'https://maps.google.com/?q=Av.+Universidad+1080,+Hospital+Angeles+Universidad,+CDMX'
    },
    {
      name: 'KINDOC Satélite',
      address: 'Circuito Centro Comercial 20, Ciudad Satélite, Naucalpan, Edo. de México (Dentro de Hospital San Ángel Inn Satélite)',
      mapLink: 'https://maps.google.com/?q=Circuito+Centro+Comercial+20,+Hospital+San+Angel+Inn+Satelite'
    }
  ];

  return (
    <footer className="bg-slate-100 border-t border-slate-200 dark:bg-slate-950 dark:border-slate-900 transition-colors pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-light dark:bg-rose-950/40 text-accent">
                <Heart className="w-4.5 h-4.5 fill-accent" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-primary dark:text-slate-100">
                Dr. Ovidio <span className="text-accent font-light">Cortázar</span>
              </span>
            </Link>
            <p className="text-sm text-muted dark:text-slate-400 leading-relaxed">
              Cardiólogo Pediatra y Electrofisiólogo Cardíaco Infantil en la Ciudad de México. Especialista en tratamiento curativo de arritmias con Cero Fluoroscopía.
            </p>
            <div className="pt-2">
              <button
                onClick={openAppointmentModal}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-primary hover:bg-primary-light text-slate-100 text-sm font-medium transition-all shadow-md text-center cursor-pointer dark:bg-accent dark:hover:bg-rose-600"
              >
                Agendar Consulta
              </button>
            </div>
          </div>

          {/* Consultation Places */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-sm font-semibold text-primary dark:text-slate-200 uppercase tracking-wider">
              Consultorios en CDMX y Zona Metropolitana
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locations.map((loc, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="text-xs font-semibold text-accent dark:text-rose-400">
                    {loc.name}
                  </h4>
                  <p className="text-xs text-muted dark:text-slate-400 leading-relaxed">
                    {loc.address}
                  </p>
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-primary dark:text-slate-300 font-medium hover:underline hover:text-accent dark:hover:text-accent pt-1"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Ver ubicación en mapa</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Links & Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-primary dark:text-slate-200 uppercase tracking-wider">
              Contacto y Enlaces
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/525529682922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm text-muted hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>+52 55 2968 2922</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:dr.cortazar@kindoc.com.mx"
                  className="flex items-center space-x-2 text-sm text-muted hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>dr.cortazar@kindoc.com.mx</span>
                </a>
              </li>
            </ul>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-semibold text-primary dark:text-slate-300 uppercase tracking-wider mb-2">
                Redes Sociales
              </h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent">LinkedIn</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted dark:text-slate-500">
            © {new Date().getFullYear()} Dr. Ovidio Alberto Cortázar Reyes. Electrofisiólogo Cardíaco Pediátrico. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-xs text-muted dark:text-slate-500">
            <Link href="/faq" className="hover:underline">Aviso de Privacidad</Link>
            <Link href="/faq" className="hover:underline">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
