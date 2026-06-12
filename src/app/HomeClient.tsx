'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUIStore } from '@/store/useUIStore';

export default function HomeClient() {
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

  const certifications = [
    { title: 'Consejo Mexicano de Certificación en Pediatría', desc: 'Pediatría General' },
    { title: 'Consejo Mexicano de Cardiología', desc: 'Especialista en Cardiología Pediátrica' },
    { title: 'Consejo Mexicano de Cardiología', desc: 'Subespecialista en Electrofisiología Cardíaca' },
  ];

  const academicBackground = [
    { year: '2012', title: 'Médico Cirujano', institution: 'Universidad La Salle' },
    { year: '2016', title: 'Especialidad en Pediatría', institution: 'Hospital Infantil de México Federico Gómez (UNAM)' },
    { year: '2018', title: 'Subespecialidad en Cardiología Pediátrica', institution: 'Hospital Infantil de México Federico Gómez (UNAM)' },
    { year: '2020', title: 'Alta Especialidad en Electrofisiología Cardíaca', institution: 'Hospital General de México (UNAM)' },
    { year: '2022', title: 'Fellowship de Entrenamiento Clínico', institution: 'The Hospital for Sick Children (SickKids), Toronto, Canadá' },
    { year: '2024', title: 'Maestría en Administración Hospitalaria', institution: 'Universidad Anáhuac' },
  ];

  const currentPositions = [
    { role: 'Electrofisiólogo Cardíaco Pediátrico y Profesor Adjunto', institution: 'Hospital Infantil de México Federico Gómez' },
    { role: 'Jefe de Gabinete de Fisiología Cardiovascular', institution: 'Hospital Ángeles Universidad' },
    { role: 'Jefe de Gabinete de Fisiología Cardiovascular', institution: 'Hospital San Ángel Inn Satélite' },
    { role: 'CEO y Co-Fundador', institution: 'KINDOC Servicios Médicos' },
  ];

  const locations = [
    {
      name: 'Casa KINDOC (Sede Principal)',
      address: 'Patricio Sanz 1025, Col. Insurgentes San Borja, Benito Juárez, CDMX',
      phone: '+52 55 2968 2922',
      mapUrl: 'https://maps.google.com/?q=Patricio+Sanz+1025,+Benito+Juarez,+CDMX',
      emoji: '🏡'
    },
    {
      name: 'KINDOC Universidad',
      address: 'Av. Universidad 1080, Col. Xoco, Benito Juárez, CDMX (Dentro de Hospital Ángeles Universidad)',
      phone: '+52 55 2968 2922',
      mapUrl: 'https://maps.google.com/?q=Av.+Universidad+1080,+Hospital+Angeles+Universidad,+CDMX',
      emoji: '🏥'
    },
    {
      name: 'KINDOC Satélite',
      address: 'Circuito Centro Comercial 20, Ciudad Satélite, Naucalpan, Edo. de México (Dentro de Hospital San Ángel Inn Satélite)',
      phone: '+52 55 2968 2922',
      mapUrl: 'https://maps.google.com/?q=Circuito+Centro+Comercial+20,+Hospital+San+Angel+Inn+Satelite',
      emoji: '🏥'
    }
  ];

  return (
    <div className="space-y-24">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-accent-light),transparent)] opacity-70 dark:opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider dark:bg-rose-950/35 dark:text-rose-400">
                <div className="flex items-center space-x-1 shrink-0 border-r border-accent/20 pr-2 mr-0.5 select-none text-xl leading-none animate-pulse-grow">
                  👶❤️
                </div>
                <span>Líder en Cero Fluoroscopía Pediátrica</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary dark:text-slate-100 tracking-tight leading-tight">
                El corazón de tu hijo <br />
                <span className="text-accent">merece al especialista.</span>
              </h1>
              <p className="text-base sm:text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Taquicardias inexplicables, desmayos durante el ejercicio o la necesidad de un dispositivo de estimulación. Diagnóstico y tratamiento definitivo de arritmias infantiles con tecnología de mapeo 3D de vanguardia, eliminando la radiación por completo.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
                <button
                  onClick={openAppointmentModal}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent hover:bg-rose-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95 duration-150 cursor-pointer"
                >
                  Agendar Consulta
                </button>
                <Link
                  href="/servicios"
                  className="w-full sm:w-auto px-8 py-4 rounded-full border border-card-border hover:border-accent bg-card-bg text-primary dark:text-slate-200 font-semibold shadow-sm hover:shadow-md transition-all text-center flex items-center justify-center space-x-2"
                >
                  <span>Ver Servicios ➡️</span>
                </Link>
              </div>
            </div>

            {/* Right ECG Widget / Visual */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md h-72 rounded-3xl overflow-hidden glass-panel flex flex-col items-center justify-center p-6 shadow-2xl border border-card-border bg-gradient-to-br from-card-bg to-slate-100/30 dark:from-card-bg dark:to-slate-900/10">
                {/* Heart Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />
                
                {/* Animated ECG wave */}
                <svg className="w-full h-32 text-accent" viewBox="0 0 600 200" fill="none">
                  <path
                    className="ecg-line"
                    d="M0,100 L180,100 L200,80 L210,120 L220,100 L260,100 L275,30 L295,180 L315,100 L350,100 L360,90 L370,110 L380,100 L600,100"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Heart widget */}
                <div className="flex items-center space-x-4 mt-6 z-10">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 dark:bg-rose-950/40 text-2xl animate-heartbeat select-none">
                    ❤️
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-muted dark:text-slate-400 uppercase tracking-widest">Ritmo Sinusal</h3>
                    <p className="text-lg font-bold text-primary dark:text-slate-100 flex items-baseline space-x-1">
                      <span>72</span>
                      <span className="text-xs font-medium text-muted">LPM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Doctor Bio Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800">
              <Image
                src="https://framerusercontent.com/assets/iFGgXmTLDkUh3UIySIJbjIQ.jpeg"
                alt="Dr. Ovidio Cortázar"
                fill
                sizes="(max-w-md) 100vw, 400px"
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-lg font-bold">Dr. Ovidio Alberto Cortázar Reyes</h4>
                <p className="text-xs text-rose-300 font-medium">Cardiólogo Electrofisiólogo Pediátrico</p>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-base select-none">
              <span className="text-xl animate-wiggle inline-block">📈</span>
              <span className="font-bold text-sm uppercase tracking-wider text-accent">Sobre el Doctor</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary dark:text-slate-100">
              El corazón de un niño no es el de un adulto en miniatura.
            </h2>
            <div className="text-muted dark:text-slate-300 space-y-4 leading-relaxed">
              <p>
                Soy el <strong>Dr. Ovidio Cortázar</strong>, subespecialista en el diagnóstico y tratamiento de arritmias y alteraciones del sistema eléctrico del corazón en lactantes, niños y adolescents.
              </p>
              <p>
                Durante mi formación descubrí que cuando el sistema eléctrico del corazón de un niño falla, el mundo de una familia entera se detiene. La electrofisiología pediátrica me dio la oportunidad más valiosa: la capacidad de curar de forma definitiva padecimientos que antes requerían años de medicamentos.
              </p>
              <p>
                Me formé como Cardiólogo Pediatra en el prestigioso <strong>Hospital Infantil de México Federico Gómez</strong>, cursé mi especialidad en Electrofisiología Cardíaca en el <strong>Hospital General de México</strong>, y realicé un fellowship de subespecialización en el <strong>Hospital for Sick Children (SickKids)</strong> de Toronto, Canadá, una de las instituciones pediátricas más importantes del mundo.
              </p>
              <p className="font-semibold text-primary dark:text-slate-100">
                Hoy, lideramos el equipo con mayor experiencia en procedimientos de Cero Fluoroscopía pediátrica en México: curamos arritmias sin exponer a tus hijos a radiación ionizante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. Organizations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-extrabold text-xs text-accent uppercase tracking-wider">Acreditación y Respaldo</span>
          <h3 className="text-xl sm:text-3xl font-extrabold text-primary dark:text-slate-100">
            Sociedades y Organizaciones Médicas
          </h3>
          <p className="text-xs sm:text-sm text-muted dark:text-slate-400">
            El Dr. Ovidio Cortázar es miembro activo y certificado por las asociaciones líderes en pediatría, cardiología y electrofisiología a nivel nacional e internacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-4xl mx-auto">
          {/* Logo Card 1 */}
          <div className="glass-panel p-6 rounded-3xl border border-card-border bg-white/50 dark:bg-slate-900/20 flex items-center justify-center shadow-md">
            <div className="relative w-full aspect-[1236/984] max-h-[220px]">
              <Image
                src="https://framerusercontent.com/images/yBXudht6wID9bmz6I8JBiFdFM0.jpg?scale-down-to=512&width=1236&height=984"
                alt="Sociedades Médicas y Certificaciones del Dr. Ovidio Cortázar"
                fill
                className="object-contain dark:brightness-95"
                sizes="(max-w-md) 100vw, 400px"
              />
            </div>
          </div>

          {/* Logo Card 2 */}
          <div className="glass-panel p-6 rounded-3xl border border-card-border bg-white/50 dark:bg-slate-900/20 flex items-center justify-center shadow-md">
            <div className="relative w-full aspect-[1366/768] max-h-[220px]">
              <Image
                src="https://framerusercontent.com/images/M8XTqhZ9GnOYR61lZERS5ax48sM.png?scale-down-to=512&width=1366&height=768"
                alt="Organizaciones y Hospitales de Adscripción del Dr. Ovidio Cortázar"
                fill
                className="object-contain dark:brightness-95"
                sizes="(max-w-md) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Credentials & Certifications */}
      <section className="bg-slate-100/60 dark:bg-slate-900/30 py-16 border-y border-slate-200/50 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Certifications Card */}
            <div className="glass-panel p-8 rounded-3xl border border-card-border flex flex-col space-y-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up">
              <div className="flex items-center space-x-3 text-lg select-none">
                <span className="text-2xl animate-wiggle inline-block">🏅</span>
                <h3 className="font-extrabold text-lg text-primary dark:text-slate-100">Certificaciones Oficiales</h3>
              </div>
              <ul className="space-y-4 flex-1">
                {certifications.map((cert, index) => {
                  let certEmoji = '✅';
                  let certAnimClass = 'animate-pulse-grow';
                  if (cert.desc.includes('Pediatría')) {
                    certEmoji = '👶';
                    certAnimClass = 'animate-wiggle';
                  } else if (cert.desc.includes('Cardiología')) {
                    certEmoji = '❤️';
                    certAnimClass = 'animate-heartbeat';
                  } else if (cert.desc.includes('Electrofisiología')) {
                    certEmoji = '⚡';
                    certAnimClass = 'animate-float';
                  }

                  return (
                    <li key={index} className="flex items-start space-x-3 border-b border-card-border/60 pb-3 last:border-b-0 last:pb-0">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 dark:bg-rose-950/40 text-xl shrink-0 mt-0.5 select-none ${certAnimClass}`}>
                        {certEmoji}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-primary dark:text-slate-200">{cert.title}</h4>
                        <p className="text-xs text-muted dark:text-slate-400 mt-0.5">{cert.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Academic Journey */}
            <div
              style={{ animationDelay: '150ms' }}
              className="glass-panel p-8 rounded-3xl border border-card-border flex flex-col space-y-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
            >
              <div className="flex items-center space-x-3 text-lg select-none">
                <span className="text-2xl animate-float inline-block">🎓</span>
                <h3 className="font-extrabold text-lg text-primary dark:text-slate-100">Formación Académica</h3>
              </div>
              <div className="space-y-4 flex-1 overflow-y-auto max-h-[300px] pr-2 scrollbar-thin">
                {academicBackground.map((acad, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 last:pb-0 pb-4">
                    <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
                    <span className="text-[10px] font-bold text-accent tracking-widest">{acad.year}</span>
                    <h4 className="font-bold text-xs text-primary dark:text-slate-200 mt-0.5">{acad.title}</h4>
                    <p className="text-[11px] text-muted dark:text-slate-400 mt-0.5">{acad.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Positions */}
            <div
              style={{ animationDelay: '300ms' }}
              className="glass-panel p-8 rounded-3xl border border-card-border flex flex-col space-y-6 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
            >
              <div className="flex items-center space-x-3 text-lg select-none">
                <span className="text-2xl animate-bounce-slow inline-block">🏢</span>
                <h3 className="font-extrabold text-lg text-primary dark:text-slate-100">Adscripción y Cargos</h3>
              </div>
              <ul className="space-y-4 flex-1">
                {currentPositions.map((pos, index) => (
                  <li key={index} className="flex items-start space-x-3 border-b border-card-border/60 pb-3 last:border-b-0 last:pb-0">
                    <span className="text-lg shrink-0 mt-0.5 select-none animate-pulse-grow">✅</span>
                    <div>
                      <h4 className="font-bold text-sm text-primary dark:text-slate-200">{pos.role}</h4>
                      <p className="text-xs text-muted dark:text-slate-400 mt-0.5">{pos.institution}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mapeo / Procedimientos Reales (Video) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-card-border bg-gradient-to-br from-card-bg to-slate-100/20 dark:from-card-bg dark:to-slate-900/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Intro text */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 text-base select-none">
                <span className="text-xl animate-float-slow inline-block">🎥</span>
                <span className="font-bold text-sm uppercase tracking-wider text-accent">Mapeo Tridimensional</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-primary dark:text-slate-100">
                Así se ve curar una arritmia desde adentro.
              </h3>
              <p className="text-sm text-muted dark:text-slate-350 leading-relaxed">
                Navegación milimétrica en tiempo real sin radiación. Visualice grabaciones de procedimientos reales de mapeo 3D (CARTO / Ensite X) y ablación cardíaca realizados por nuestro equipo, donde localizamos los circuitos anormales del corazón con precisión y seguridad.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.youtube.com/channel/UCYJ3ryTsWNigbPvmE-cN4IA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm text-accent hover:underline font-bold"
                >
                  <span>Ver canal de YouTube ➡️</span>
                </a>
              </div>
            </div>

            {/* Styled bedside monitor wrapper for video */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-slate-350 dark:border-slate-800">
                {/* Embedded YouTube playlist */}
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=PLZQEZGORrmaEQ7kVdt81SXQWblob4TlbO&amp;iv_load_policy=3&amp;rel=0&amp;modestbranding=1&amp;playsinline=1&amp;autoplay=0&amp;mute=1&amp;color=white"
                  title="Procedimientos Reales de Mapeo y Ablación 3D"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Consultorios Locations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 dark:bg-rose-950/40 text-3xl select-none animate-bounce-slow">
            📍
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-primary dark:text-slate-100">
            Ubicaciones de Consulta en CDMX
          </h2>
          <p className="text-sm sm:text-base text-muted dark:text-slate-300">
            Ofrecemos atención en tres puntos estratégicos para su comodidad, brindando el más alto nivel de infraestructura y seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 150}ms` }}
              className="glass-panel rounded-3xl border border-card-border overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-350 group hover:-translate-y-1 animate-fade-in-up"
            >
              <div>
                {/* Center Emoji Header instead of Image */}
                <div className="relative w-full h-40 shrink-0 flex items-center justify-center bg-slate-50 dark:bg-slate-900/60 border-b border-card-border/60">
                  <div className="absolute inset-0 bg-[radial-gradient(var(--color-card-border)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
                  <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-slate-800 border border-card-border shadow-sm text-5xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-350 select-none">
                    {loc.emoji}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="text-accent font-bold text-sm tracking-wider border-b border-card-border/60 pb-3 uppercase">
                    {loc.name}
                  </div>
                  <p className="text-xs text-muted dark:text-slate-355 leading-relaxed min-h-[50px]">
                    {loc.address}
                  </p>
                  <div className="flex items-center space-x-2 text-xs text-muted dark:text-slate-400">
                    <span className="text-base select-none">📞</span>
                    <span>{loc.phone}</span>
                  </div>
                </div>
              </div>
              
              <div className="px-8 pb-8 pt-4 mt-2 border-t border-card-border/60 flex items-center justify-between">
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary dark:text-slate-300 font-bold hover:text-accent hover:underline flex items-center space-x-1"
                >
                  <span>Ver en Google Maps ➡️</span>
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

      {/* 6. Contact Form Section */}
      <section className="bg-slate-100/60 dark:bg-slate-900/30 py-16 border-y border-slate-200/50 dark:border-slate-800/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-card-border space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary dark:text-slate-100">
                Escríbanos directamente
              </h3>
              <p className="text-xs text-muted dark:text-slate-400">
                Resuelva sus dudas o consulte la disponibilidad de estudios y valoraciones clínicas.
              </p>
            </div>

            {contactFormStatus === 'success' ? (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-4xl select-none">
                  ✅
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
                        <span className="animate-spin text-base">⏳</span>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-base select-none">✉️</span>
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
