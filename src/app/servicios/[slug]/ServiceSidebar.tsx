'use client';

import React from 'react';
import { useUIStore } from '@/store/useUIStore';

interface SidebarProps {
  serviceTitle: string;
}

export default function ServiceSidebar({ serviceTitle }: SidebarProps) {
  const { openAppointmentModal } = useUIStore();

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hola Dr. Ovidio Cortázar, me interesa agendar una cita o solicitar información sobre el servicio: ${serviceTitle}`
    );
  };

  return (
    <div className="glass-panel p-8 rounded-3xl border border-card-border bg-gradient-to-br from-card-bg to-slate-100/10 dark:from-card-bg dark:to-slate-900/5 space-y-6 shadow-md">
      <div className="space-y-2">
        <h3 className="font-extrabold text-lg text-primary dark:text-slate-100">
          ¿Desea agendar este estudio?
        </h3>
        <p className="text-xs text-muted dark:text-slate-400 leading-relaxed">
          Seleccione una fecha y el consultorio de su preferencia. Los espacios se confirman de inmediato.
        </p>
      </div>

      <div className="space-y-4">
        {/* Agendar CTA */}
        <button
          onClick={openAppointmentModal}
          className="w-full py-3.5 rounded-full bg-accent hover:bg-rose-600 text-white font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 duration-150 cursor-pointer flex items-center justify-center space-x-2 text-sm"
        >
          <span className="text-xl select-none">📅</span>
          <span>Solicitar Fecha en Línea</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/525529682922?text=${getWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 rounded-full border border-card-border hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/25 transition-all text-center flex items-center justify-center space-x-2 text-sm cursor-pointer"
        >
          <span className="text-xl select-none">💬</span>
          <span>Contacto por WhatsApp</span>
        </a>
      </div>

      <div className="pt-6 border-t border-card-border/60 space-y-4 text-xs text-muted dark:text-slate-400">
        <div className="flex items-start space-x-2.5">
          <span className="text-xl shrink-0 select-none">🛡️</span>
          <div>
            <h4 className="font-semibold text-primary dark:text-slate-200">Atención Personalizada</h4>
            <p className="mt-0.5">Estudios realizados e interpretados directamente por el Dr. Ovidio Cortázar.</p>
          </div>
        </div>

        <div className="flex items-start space-x-2.5">
          <span className="text-xl shrink-0 select-none">⏱️</span>
          <div>
            <h4 className="font-semibold text-primary dark:text-slate-200">Entrega de Resultados</h4>
            <p className="mt-0.5">Reportes clínicos detallados impresos y digitales entregados de forma inmediata.</p>
          </div>
        </div>

        <div className="flex items-start space-x-2.5">
          <span className="text-xl shrink-0 select-none">📍</span>
          <div>
            <h4 className="font-semibold text-primary dark:text-slate-200">Tres Clínicas en CDMX</h4>
            <p className="mt-0.5">Elija la sede que le resulte más conveniente: Casa KINDOC, Hosp. Ángeles o Hosp. San Ángel Inn.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
