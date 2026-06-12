'use client';

import React, { useState } from 'react';
import { useUIStore } from '@/store/useUIStore';
import { Phone, Mail, Clock, Send, Check, Activity, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const { openAppointmentModal, contactFormStatus, setContactFormStatus } = useUIStore();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'El nombre es obligatorio.';
    if (!formData.phone.trim()) errors.phone = 'El teléfono es obligatorio.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setContactFormStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setContactFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const locations = [
    {
      name: 'Casa KINDOC (Sede Principal)',
      address: 'Patricio Sanz 1025, Col. Insurgentes San Borja, Benito Juárez, CDMX',
      phone: '+52 55 2968 2922',
      hours: 'Lunes a Sábado: 09:00 - 20:00 hrs',
      mapUrl: 'https://maps.google.com/?q=Patricio+Sanz+1025,+Benito+Juarez,+CDMX'
    },
    {
      name: 'KINDOC Universidad',
      address: 'Av. Universidad 1080, Col. Xoco, Benito Juárez, CDMX (Dentro de Hospital Ángeles Universidad)',
      phone: '+52 55 2968 2922',
      hours: 'Lunes a Viernes: 10:00 - 19:00 hrs',
      mapUrl: 'https://maps.google.com/?q=Av.+Universidad+1080,+Hospital+Angeles+Universidad,+CDMX'
    },
    {
      name: 'KINDOC Satélite',
      address: 'Circuito Centro Comercial 20, Ciudad Satélite, Naucalpan, Edo. de México (Dentro de Hospital San Ángel Inn Satélite)',
      phone: '+52 55 2968 2922',
      hours: 'Lunes a Viernes: 10:00 - 18:00 hrs',
      mapUrl: 'https://maps.google.com/?q=Circuito+Centro+Comercial+20,+Hospital+San+Angel+Inn+Satelite'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-slate-100 tracking-tight leading-tight">
          Hablemos sobre la salud de su hijo
        </h1>
        <p className="text-muted dark:text-slate-350 text-sm sm:text-base leading-relaxed">
          Resuelva sus dudas médicas de arritmias, solicite información sobre costes de estudios o agende una cita directa en cualquiera de nuestras sedes.
        </p>
      </div>

      {/* Main Grid: Form & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left column: Contact Info cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-card-border space-y-8">
            <h3 className="text-lg font-bold text-primary dark:text-slate-100">
              Canales Directos
            </h3>

            <div className="space-y-6">
              {/* WhatsApp Call */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 shrink-0">
                  <Phone className="w-5 h-5 fill-emerald-600/10" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted dark:text-slate-400 uppercase tracking-wide">WhatsApp / Teléfono</h4>
                  <a
                    href="https://wa.me/525529682922"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-primary dark:text-slate-100 hover:text-accent hover:underline block mt-1"
                  >
                    +52 55 2968 2922
                  </a>
                  <p className="text-xs text-muted dark:text-slate-400 mt-1 leading-normal">
                    Canal principal para confirmar horarios o solicitar preparaciones previas a estudios.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 dark:bg-rose-950/40 text-accent shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted dark:text-slate-400 uppercase tracking-wide">Correo Electrónico</h4>
                  <a
                    href="mailto:dr.cortazar@kindoc.com.mx"
                    className="text-base font-bold text-primary dark:text-slate-100 hover:text-accent hover:underline block mt-1"
                  >
                    dr.cortazar@kindoc.com.mx
                  </a>
                  <p className="text-xs text-muted dark:text-slate-400 mt-1 leading-normal">
                    Envíe registros clínicos, segundas opiniones o informes médicos para su revisión.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 dark:bg-sky-950/40 text-primary dark:text-sky-300 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted dark:text-slate-400 uppercase tracking-wide">Horarios de Atención</h4>
                  <p className="text-sm font-semibold text-primary dark:text-slate-200 mt-1 leading-relaxed">
                    Lunes a Sábado: 09:00 - 20:00 hrs
                  </p>
                  <p className="text-xs text-muted dark:text-slate-400 mt-1 leading-normal">
                    Las citas en fines de semana o días festivos requieren confirmación por WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-card-border space-y-8">
            <h3 className="text-lg font-bold text-primary dark:text-slate-100">
              Escríbanos un correo electrónico
            </h3>

            {contactFormStatus === 'success' ? (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-primary dark:text-slate-200">¡Mensaje Enviado con Éxito!</h4>
                <p className="text-sm text-muted dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
                  Agradecemos su mensaje. Nos pondremos en contacto con usted a la brevedad para asistirle.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setContactFormStatus('idle')}
                    className="text-xs text-accent hover:underline font-bold"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-muted dark:text-slate-400 uppercase tracking-wide">Nombre Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Su nombre"
                    className={`w-full px-4 py-3.5 rounded-xl border border-card-border bg-slate-50/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:border-accent ${
                      formErrors.name ? 'border-rose-500' : ''
                    }`}
                  />
                  {formErrors.name && <p className="text-[11px] text-rose-500 font-semibold">{formErrors.name}</p>}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-muted dark:text-slate-400 uppercase tracking-wide">Correo Electrónico</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="correo@ejemplo.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-card-border bg-slate-50/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-muted dark:text-slate-400 uppercase tracking-wide">WhatsApp / Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Teléfono a 10 dígitos"
                      className={`w-full px-4 py-3.5 rounded-xl border border-card-border bg-slate-50/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:border-accent ${
                        formErrors.phone ? 'border-rose-500' : ''
                      }`}
                    />
                    {formErrors.phone && <p className="text-[11px] text-rose-500 font-semibold">{formErrors.phone}</p>}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-muted dark:text-slate-400 uppercase tracking-wide">Mensaje o Duda</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describa brevemente su consulta..."
                    className="w-full px-4 py-3.5 rounded-xl border border-card-border bg-slate-50/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:border-accent resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={contactFormStatus === 'submitting'}
                    className="w-full py-3.5 rounded-full bg-accent hover:bg-rose-600 text-white font-semibold shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                  >
                    {contactFormStatus === 'submitting' ? (
                      <>
                        <Activity className="w-4 h-4 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Consultorios Locations Details Grid */}
      <section className="space-y-8">
        <h3 className="text-2xl font-extrabold text-primary dark:text-slate-100 text-center">
          Nuestras Sedes de Consulta
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <div key={index} className="glass-panel p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                <div className="text-accent font-bold text-sm tracking-wider border-b border-card-border/60 pb-3 uppercase">
                  {loc.name}
                </div>
                <p className="text-xs text-muted dark:text-slate-350 leading-relaxed min-h-[50px]">
                  {loc.address}
                </p>
                <div className="flex items-center space-x-2 text-xs text-muted dark:text-slate-400">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>{loc.hours}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-card-border/60 flex items-center justify-between">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary dark:text-slate-350 font-bold hover:text-accent hover:underline flex items-center space-x-1"
                >
                  <span>Ver en Google Maps</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
                <button
                  onClick={openAppointmentModal}
                  className="px-4 py-2 bg-primary hover:bg-primary-light text-slate-100 text-xs font-semibold rounded-xl transition-colors dark:bg-accent dark:hover:bg-rose-600 cursor-pointer"
                >
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
