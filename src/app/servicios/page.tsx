'use client';

import React from 'react';
import Link from 'next/link';
import { useUIStore } from '@/store/useUIStore';
import { ClipboardList, HelpCircle, ArrowRight, Zap, ShieldAlert } from 'lucide-react';

interface ServiceItem {
  slug: string;
  category: 'diagnostico' | 'procedimiento';
  title: string;
  shortDesc: string;
  indications: string;
  isProcedural?: boolean;
  link: string;
}

export default function ServicesPage() {
  const { servicesFilter, setServicesFilter, searchQuery, setSearchQuery, openAppointmentModal } = useUIStore();

  const services: ServiceItem[] = [
    {
      slug: 'consulta-alta-especialidad-arritmias-pediatricas',
      category: 'diagnostico',
      title: 'Consulta de Alta Especialidad',
      shortDesc: 'Valoración cardiológica completa enfocado en el sistema eléctrico del corazón de tu hijo. El punto de partida de cualquier diagnóstico.',
      indications: 'Palpitaciones, taquicardias inexplicables, desmayos recurrentes, fatiga inusual.',
      link: '/servicios/consulta-alta-especialidad-arritmias-pediatricas'
    },
    {
      slug: 'segunda-opinion-arritmia-pediatrica',
      category: 'diagnostico',
      title: 'Segunda Opinión Especializada',
      shortDesc: '¿Tienes dudas sobre el diagnóstico de tu hijo? Revisamos el caso a fondo con toda la información disponible para ofrecerte claridad y alternativas de tratamiento.',
      indications: 'Recomendación de cirugía, desacuerdos entre médicos, falta de mejoría con fármacos.',
      link: '/servicios/segunda-opinion-arritmia-pediatrica'
    },
    {
      slug: 'electrocardiograma-pediatrico-cdmx',
      category: 'diagnostico',
      title: 'Electrocardiograma Pediátrico (ECG)',
      shortDesc: 'Un registro gráfico de 10 segundos que analiza el ritmo cardíaco desde 12 ángulos diferentes. Indoloro y de interpretación inmediata.',
      indications: 'Sospecha inicial de arritmias, Wolff-Parkinson-White, QT largo, preoperatorios.',
      link: '/servicios/electrocardiograma-pediatrico-cdmx'
    },
    {
      slug: 'holter-ritmo-ninos',
      category: 'diagnostico',
      title: 'Holter de Ritmo (24 a 168 horas)',
      shortDesc: 'Monitoreo cardíaco portátil continuo en casa. Ideal para capturar arritmias esporádicas que no muestra un electrocardiograma rápido.',
      indications: 'Palpitaciones esporádicas, mareos, desmayos repentinos, seguimiento de ablación.',
      link: '/servicios/holter-ritmo-ninos'
    },
    {
      slug: 'mesa-inclinada-tilt-test-pediatrico',
      category: 'diagnostico',
      title: 'Mesa Inclinada (Tilt Test)',
      shortDesc: 'Estudio especializado diseñado para reproducir y evaluar de forma segura el mecanismo que desencadena desmayos recurrentes.',
      indications: 'Desmayos repetidos (síncope) sin explicación, mareos severos al ponerse de pie, POTS.',
      link: '/servicios/mesa-inclinada-tilt-test-pediatrico'
    },
    {
      slug: 'prueba-esfuerzo-pediatrica-cdmx',
      category: 'diagnostico',
      title: 'Prueba de Esfuerzo Pediátrica',
      shortDesc: 'Monitoreo del ritmo cardíaco en tiempo real mientras el paciente realiza ejercicio controlado en una caminadora. Clave para evaluar la respuesta física.',
      indications: 'Palpitaciones o desmayos al correr, evaluación de riesgo en deportistas.',
      link: '/servicios/prueba-esfuerzo-pediatrica-cdmx'
    },
    {
      slug: 'estudio-electrofisiologico-pediatrico',
      category: 'procedimiento',
      title: 'Estudio Electrofisiológico',
      shortDesc: 'Procedimiento mínimamente invasivo para registrar y mapear en 3D la actividad eléctrica dentro del corazón de tu hijo. Con Cero Fluoroscopía.',
      indications: 'Identificar el origen exacto de taquicardias complejas o evaluar riesgos arrítmicos.',
      isProcedural: true,
      link: '/servicios/estudio-electrofisiologico-pediatrico'
    },
    {
      slug: 'ablacion-cateter-ninos-que-esperar',
      category: 'procedimiento',
      title: 'Ablación con Catéter',
      shortDesc: 'Tratamiento curativo definitivo de arritmias. Se aplica calor o frío en el punto de origen del circuito anormal. Cero Fluoroscopía (sin radiación).',
      indications: 'Wolff-Parkinson-White, taquicardias supraventriculares, taquicardias ventriculares.',
      isProcedural: true,
      link: '/articles/ablacion-cateter-ninos-que-esperar'
    },
    {
      slug: 'marcapasos-pediatrico-cdmx',
      category: 'procedimiento',
      title: 'Marcapasos Pediátrico',
      shortDesc: 'Implante y seguimiento de dispositivos inteligentes para estimular el corazón de forma segura cuando su ritmo es peligrosamente lento.',
      indications: 'Bloqueos cardíacos auriculoventriculares completos (congénitos o postquirúrgicos).',
      isProcedural: true,
      link: '/servicios/marcapasos-pediatrico-cdmx'
    },
    {
      slug: 'desfibrilador-dai-pediatrico-cdmx',
      category: 'procedimiento',
      title: 'Desfibrilador Automático (DAI)',
      shortDesc: 'Implante de dispositivo inteligente que monitorea el corazón de forma continua y es capaz de detener arritmias ventriculares fatales en segundos.',
      indications: 'Antecedente de paro cardíaco recuperado, QT largo severo, miocardiopatías de alto riesgo.',
      isProcedural: true,
      link: '/servicios/desfibrilador-dai-pediatrico-cdmx'
    }
  ];

  const filteredServices = services.filter((srv) => {
    // Category filter
    if (servicesFilter !== 'all' && srv.category !== servicesFilter) return false;
    
    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return srv.title.toLowerCase().includes(q) || srv.shortDesc.toLowerCase().includes(q) || srv.indications.toLowerCase().includes(q);
    }
    
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-slate-100 tracking-tight leading-tight">
          Diagnóstico y Tratamiento de Arritmias en Niños
        </h1>
        <p className="text-muted dark:text-slate-350 text-sm sm:text-base leading-relaxed">
          Tecnología de mapeo 3D de vanguardia, Cero Fluoroscopía para eliminar la radiación y atención directa con el subespecialista en CDMX.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-3xl border border-card-border bg-card-bg shadow-sm">
        {/* Search */}
        <div className="relative w-full md:max-w-sm">
          <input
            type="text"
            placeholder="Buscar estudio o síntoma..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-card-border bg-background text-sm focus:outline-none focus:border-accent"
          />
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto">
          {(['all', 'diagnostico', 'procedimiento'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setServicesFilter(tab)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                servicesFilter === tab
                  ? 'bg-accent text-slate-100 shadow-md'
                  : 'hover:bg-slate-150 text-primary dark:text-slate-300 border border-card-border'
              }`}
            >
              {tab === 'all' && 'Todos los Servicios'}
              {tab === 'diagnostico' && 'Estudios Diagnósticos'}
              {tab === 'procedimiento' && 'Procedimientos (Sin Radiación)'}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((srv) => (
            <div
              key={srv.slug}
              className="glass-panel p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-xl transition-all duration-350 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Header card badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                    srv.category === 'procedimiento'
                      ? 'bg-rose-500/10 text-rose-500 dark:bg-rose-950/30'
                      : 'bg-primary/10 text-primary dark:bg-sky-950/30 dark:text-sky-300'
                  }`}>
                    {srv.category === 'procedimiento' ? 'Procedimiento Intervencionista' : 'Estudio Diagnóstico'}
                  </span>
                  
                  {srv.category === 'procedimiento' && (
                    <div className="flex items-center space-x-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                      <Zap className="w-3.5 h-3.5 fill-emerald-600/10" />
                      <span>Cero Radiación</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-primary dark:text-slate-100 group-hover:text-accent transition-colors">
                  {srv.title}
                </h3>
                
                <p className="text-xs text-muted dark:text-slate-350 leading-relaxed">
                  {srv.shortDesc}
                </p>

                {/* Indications box */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/60">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary/80 dark:text-slate-300 flex items-center space-x-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-accent" />
                    <span>Indicado para:</span>
                  </h4>
                  <p className="text-[11px] text-muted dark:text-slate-400 mt-1 leading-normal">
                    {srv.indications}
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-6 mt-6 border-t border-card-border flex items-center justify-between">
                <Link
                  href={srv.link}
                  className="text-xs text-accent font-bold hover:underline flex items-center space-x-1"
                >
                  <span>Saber más del servicio</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Link>
                <button
                  onClick={openAppointmentModal}
                  className="px-4 py-2 bg-primary hover:bg-primary-light text-slate-100 text-xs font-semibold rounded-xl transition-all cursor-pointer dark:bg-accent dark:hover:bg-rose-600"
                >
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 glass-panel rounded-3xl border border-card-border">
          <ClipboardList className="w-12 h-12 text-muted mx-auto mb-3" />
          <p className="text-sm text-muted dark:text-slate-400 font-medium">
            No se encontraron servicios que coincidan con la búsqueda.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setServicesFilter('all'); }}
            className="text-xs text-accent hover:underline font-bold mt-2"
          >
            Limpiar filtros
          </button>
        </div>
      )}

      {/* bottom CTA card */}
      <section className="glass-panel p-8 md:p-10 rounded-3xl border border-card-border bg-gradient-to-br from-card-bg to-slate-100/20 dark:from-card-bg dark:to-slate-900/10 text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 dark:bg-rose-950/40 text-accent">
          <HelpCircle className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-primary dark:text-slate-100">
            ¿No sabe por dónde empezar?
          </h3>
          <p className="text-xs sm:text-sm text-muted dark:text-slate-350 max-w-xl mx-auto leading-relaxed">
            El primer paso siempre es la consulta de alta especialidad. En una sola cita determinamos qué estudios necesita tu hijo y cuál es el plan de acción, evitando pruebas innecesarias.
          </p>
        </div>
        <div>
          <button
            onClick={openAppointmentModal}
            className="px-8 py-3.5 rounded-full bg-accent hover:bg-rose-600 text-white font-semibold shadow-md transition-all active:scale-95 duration-150 cursor-pointer"
          >
            Agendar Consulta Inicial
          </button>
        </div>
      </section>
    </div>
  );
}
