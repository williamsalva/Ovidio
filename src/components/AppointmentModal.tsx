'use client';

import React, { useState } from 'react';
import { useUIStore } from '@/store/useUIStore';
import { X, Calendar, Clock, MapPin, User, Phone, Mail, FileText, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';

export default function AppointmentModal() {
  const {
    isAppointmentModalOpen,
    closeAppointmentModal,
    appointmentData,
    setAppointmentData,
    nextStep,
    prevStep,
    resetAppointment
  } = useUIStore();

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isAppointmentModalOpen) return null;

  const locations = [
    {
      id: 'casa-kindoc',
      name: 'Casa KINDOC',
      address: 'Patricio Sanz 1025, Col. Insurgentes San Borja, Benito Juárez, CDMX'
    },
    {
      id: 'kindoc-universidad',
      name: 'KINDOC Universidad',
      address: 'Av. Universidad 1080, Col. Xoco (Dentro de Hospital Ángeles Universidad)'
    },
    {
      id: 'kindoc-satelite',
      name: 'KINDOC Satélite',
      address: 'Circuito Centro Comercial 20, Naucalpan (Dentro de Hospital San Ángel Inn)'
    }
  ] as const;

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};
    if (step === 1) {
      if (!appointmentData.location) newErrors.location = 'Debe seleccionar un consultorio.';
    } else if (step === 2) {
      if (!appointmentData.date) newErrors.date = 'Debe seleccionar una fecha.';
      if (!appointmentData.time) newErrors.time = 'Debe seleccionar un horario.';
    } else if (step === 3) {
      if (!appointmentData.patientName.trim()) newErrors.patientName = 'El nombre del paciente es requerido.';
      if (!appointmentData.patientAge.trim()) newErrors.patientAge = 'La edad del paciente es requerida.';
      if (!appointmentData.phone.trim()) newErrors.phone = 'El teléfono de contacto es requerido.';
      if (appointmentData.email.trim() && !/\S+@\S+\.\S+/.test(appointmentData.email)) {
        newErrors.email = 'El correo electrónico no es válido.';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(appointmentData.step)) {
      nextStep();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      nextStep(); // Move to step 4 (Success Screen)
    }
  };

  const handleClose = () => {
    closeAppointmentModal();
    resetAppointment();
    setErrors({});
  };

  const formatLocationName = (id: string) => {
    const loc = locations.find((l) => l.id === id);
    return loc ? loc.name : '';
  };

  // Build the WhatsApp message payload for the confirmation action
  const getWhatsAppMessage = () => {
    const locName = formatLocationName(appointmentData.location);
    const msg = `Hola Dr. Ovidio Cortázar, me gustaría agendar una consulta:\n\n` +
      `- Paciente: ${appointmentData.patientName} (${appointmentData.patientAge} años)\n` +
      `- Sede: ${locName}\n` +
      `- Fecha solicitada: ${appointmentData.date}\n` +
      `- Horario: ${appointmentData.time}\n` +
      `- Teléfono: ${appointmentData.phone}\n` +
      `- Comentarios: ${appointmentData.comments || 'Ninguno'}`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-background rounded-3xl shadow-2xl border border-card-border overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-card-border">
          <div>
            <h3 className="text-lg font-bold text-primary dark:text-slate-100">
              Solicitud de Consulta
            </h3>
            {appointmentData.step < 4 && (
              <p className="text-xs text-muted dark:text-slate-400">
                Paso {appointmentData.step} de 3
              </p>
            )}
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {appointmentData.step < 4 && (
          <div className="w-full h-1 bg-slate-200 dark:bg-slate-800">
            <div
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${(appointmentData.step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {appointmentData.step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-sm font-semibold text-primary dark:text-slate-200 mb-2">
                Seleccione el consultorio de su preferencia:
              </h4>
              {errors.location && (
                <p className="text-xs text-rose-500 font-medium">{errors.location}</p>
              )}
              <div className="space-y-3">
                {locations.map((loc) => {
                  const isSelected = appointmentData.location === loc.id;
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setAppointmentData({ location: loc.id })}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start space-x-3 hover:border-accent hover:bg-accent/5 ${
                        isSelected
                          ? 'border-accent bg-accent-light dark:bg-rose-950/20'
                          : 'border-card-border bg-slate-50/50 dark:bg-slate-900/35'
                      }`}
                    >
                      <MapPin className={`w-5 h-5 mt-0.5 ${isSelected ? 'text-accent' : 'text-muted'}`} />
                      <div>
                        <h5 className="font-semibold text-sm text-primary dark:text-slate-100">
                          {loc.name}
                        </h5>
                        <p className="text-xs text-muted dark:text-slate-400 mt-1 leading-normal">
                          {loc.address}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {appointmentData.step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-sm font-semibold text-primary dark:text-slate-200 mb-4">
                Preferencia de fecha y hora:
              </h4>

              {/* Date Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted dark:text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Fecha Solicitada</span>
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={appointmentData.date}
                  onChange={(e) => setAppointmentData({ date: e.target.value })}
                  className={`w-full px-4 py-3.5 rounded-xl border border-card-border bg-slate-50/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:border-accent ${
                    errors.date ? 'border-rose-500' : ''
                  }`}
                />
                {errors.date && (
                  <p className="text-xs text-rose-500 font-medium">{errors.date}</p>
                )}
              </div>

              {/* Time Picker */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-semibold text-muted dark:text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Horario Preferido</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['09:00', '10:00', '11:00', '12:00', '13:00', '16:00', '17:00', '18:00', '19:00'].map((time) => {
                    const isSelected = appointmentData.time === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setAppointmentData({ time })}
                        className={`py-2.5 rounded-xl border text-xs font-semibold text-center transition-all ${
                          isSelected
                            ? 'border-accent bg-accent text-slate-100 shadow-md'
                            : 'border-card-border hover:border-accent hover:bg-accent/5 text-primary/80 dark:text-slate-300'
                        }`}
                      >
                        {time} hrs
                      </button>
                    );
                  })}
                </div>
                {errors.time && (
                  <p className="text-xs text-rose-500 font-medium">{errors.time}</p>
                )}
              </div>
            </div>
          )}

          {appointmentData.step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
              <h4 className="text-sm font-semibold text-primary dark:text-slate-200 mb-2">
                Información del paciente y contacto:
              </h4>

              {/* Patient Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-muted dark:text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                  <User className="w-3.5 h-3.5" />
                  <span>Nombre Completo del Paciente</span>
                </label>
                <input
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  value={appointmentData.patientName}
                  onChange={(e) => setAppointmentData({ patientName: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border border-card-border bg-slate-50/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:border-accent ${
                    errors.patientName ? 'border-rose-500' : ''
                  }`}
                />
                {errors.patientName && (
                  <p className="text-xs text-rose-500 font-medium">{errors.patientName}</p>
                )}
              </div>

              {/* Patient Age & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-muted dark:text-slate-400 uppercase tracking-wider">
                    Edad del Paciente
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 8 años"
                    value={appointmentData.patientAge}
                    onChange={(e) => setAppointmentData({ patientAge: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border border-card-border bg-slate-50/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:border-accent ${
                      errors.patientAge ? 'border-rose-500' : ''
                    }`}
                  />
                  {errors.patientAge && (
                    <p className="text-xs text-rose-500 font-medium">{errors.patientAge}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-muted dark:text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>WhatsApp Contacto</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="55 1234 5678"
                    value={appointmentData.phone}
                    onChange={(e) => setAppointmentData({ phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border border-card-border bg-slate-50/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:border-accent ${
                      errors.phone ? 'border-rose-500' : ''
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-rose-500 font-medium">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-muted dark:text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Correo Electrónico (Opcional)</span>
                </label>
                <input
                  type="email"
                  placeholder="paciente@ejemplo.com"
                  value={appointmentData.email}
                  onChange={(e) => setAppointmentData({ email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border border-card-border bg-slate-50/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:border-accent ${
                    errors.email ? 'border-rose-500' : ''
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-rose-500 font-medium">{errors.email}</p>
                )}
              </div>

              {/* Comments */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-muted dark:text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Síntomas o Comentarios Adicionales</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Detalle breve de síntomas (palpitaciones, síncope, etc.)"
                  value={appointmentData.comments}
                  onChange={(e) => setAppointmentData({ comments: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-card-border bg-slate-50/50 dark:bg-slate-900/50 text-sm focus:outline-none focus:border-accent resize-none"
                />
              </div>
            </form>
          )}

          {appointmentData.step === 4 && (
            <div className="text-center py-6 space-y-4 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-primary dark:text-slate-100">
                ¡Solicitud Registrada!
              </h4>
              <p className="text-sm text-muted dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
                Hemos pre-registrado tu preferencia en la agenda. Para confirmar definitivamente el horario y recibir indicaciones previas de la consulta, por favor envía la solicitud a nuestro canal de WhatsApp.
              </p>

              <div className="pt-6">
                <a
                  href={`https://wa.me/525529682922?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-slate-100 font-medium shadow-md hover:shadow-lg transition-all active:scale-95 duration-150 cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-slate-100/10" />
                  <span>Confirmar por WhatsApp</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="text-xs text-muted dark:text-slate-400 hover:underline hover:text-accent"
                >
                  Cerrar ventana
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {appointmentData.step < 4 && (
          <div className="px-6 py-5 border-t border-card-border bg-slate-50/30 dark:bg-slate-900/10 flex items-center justify-between">
            {appointmentData.step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-card-border text-sm font-semibold text-primary dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Atrás</span>
              </button>
            ) : (
              <div />
            )}

            {appointmentData.step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-accent text-slate-100 text-sm font-semibold shadow-md hover:bg-rose-600 hover:shadow-lg transition-all"
              >
                <span>Siguiente</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center space-x-1.5 px-5 py-2.5 rounded-xl bg-accent text-slate-100 text-sm font-semibold shadow-md hover:bg-rose-600 hover:shadow-lg transition-all"
              >
                <span>Enviar Solicitud</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
