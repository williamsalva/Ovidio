import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';

import ServiceSidebar from './ServiceSidebar';

const getServiceIcon = (slug: string) => {
  switch (slug) {
    case 'consulta-alta-especialidad-arritmias-pediatricas':
      return '👶';
    case 'segunda-opinion-arritmia-pediatrica':
      return '🩺';
    case 'electrocardiograma-pediatrico-cdmx':
      return '📈';
    case 'holter-ritmo-ninos':
      return '⏱️';
    case 'mesa-inclinada-tilt-test-pediatrico':
      return '🔄';
    case 'prueba-esfuerzo-pediatrica-cdmx':
      return '🏃‍♂️';
    case 'estudio-electrofisiologico-pediatrico':
      return '🖥️';
    case 'ablacion-cateter-ninos-que-esperar':
      return '⚡';
    case 'marcapasos-pediatrico-cdmx':
      return '❤️';
    case 'desfibrilador-dai-pediatrico-cdmx':
      return '🛡️';
    default:
      return '❤️';
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};

  return {
    title: `${service.metaTitle} | Dr. Ovidio Cortázar`,
    description: service.metaDesc,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs text-muted dark:text-slate-400">
        <Link href="/" className="hover:text-accent">Inicio</Link>
        <span>/</span>
        <Link href="/servicios" className="hover:text-accent">Servicios</Link>
        <span>/</span>
        <span className="text-primary font-bold dark:text-slate-200 truncate">{service.title}</span>
      </nav>

      {/* Back button */}
      <div className="pt-2">
        <Link
          href="/servicios"
          className="inline-flex items-center space-x-1.5 text-sm font-semibold text-accent hover:underline group"
        >
          <span className="transition-transform group-hover:-translate-x-1 select-none">⬅️</span>
          <span>Regresar a Servicios</span>
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-12">
          {/* Header Card */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full ${
                service.category === 'procedimiento'
                  ? 'bg-rose-500/10 text-rose-500 dark:bg-rose-950/30'
                  : 'bg-primary/10 text-primary dark:bg-sky-950/30 dark:text-sky-300'
              }`}>
                {service.category === 'procedimiento' ? 'Procedimiento Intervencionista' : 'Estudio Diagnóstico'}
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 dark:bg-rose-950/30 text-4xl shrink-0 select-none">
                {getServiceIcon(slug)}
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-primary dark:text-slate-100 tracking-tight leading-tight">
                {service.title}
              </h1>
            </div>

            <p className="text-muted dark:text-slate-300 text-base leading-relaxed font-medium border-l-2 border-accent/25 pl-4">
              {service.heroDesc}
            </p>
          </div>

          {/* Clinical Banner Image */}
          {service.imageUrl && (
            <div className="relative w-full h-[250px] sm:h-[380px] rounded-3xl overflow-hidden shadow-lg border border-card-border bg-slate-100 dark:bg-slate-900">
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                sizes="(max-w-7xl) 100vw, 800px"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-80" />
            </div>
          )}

          {/* Cero Fluoroscopy Banner (If procedural) */}
          {service.category === 'procedimiento' && (
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-emerald-500 bg-gradient-to-r from-emerald-50/10 to-transparent dark:from-emerald-950/5 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
                <span className="text-2xl select-none">⚡</span>
                <span className="font-extrabold text-sm uppercase tracking-wide">Protocolo Cero Fluoroscopía</span>
              </div>
              <p className="text-xs text-muted dark:text-slate-350 leading-relaxed">
                {service.ceroFluoroscopiaText || 'Este procedimiento se realiza bajo navegación electromagnética 3D (sistemas CARTO o Ensite X), eliminando por completo el uso de rayos X y protegiendo a su hijo de la radiación.'}
              </p>
              {service.isTherapeuticText && (
                <p className="text-xs text-muted dark:text-slate-350 leading-relaxed font-semibold pt-1">
                  💡 {service.isTherapeuticText}
                </p>
              )}
            </div>
          )}

          {/* Definition */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-primary dark:text-slate-200 border-b border-card-border pb-2">
              ¿Qué es este servicio?
            </h2>
            <p className="text-sm text-muted dark:text-slate-300 leading-relaxed">
              {service.definition}
            </p>
          </div>

          {/* Objectives */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-primary dark:text-slate-200 border-b border-card-border pb-2">
              Objetivos del Estudio
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.purpose.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-100/60 dark:border-slate-800/60 text-xs text-muted dark:text-slate-300">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/10 text-accent font-bold text-[10px] shrink-0 mt-0.5">{idx + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Indications */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-primary dark:text-slate-200 border-b border-card-border pb-2">
              Indicaciones Clínicas
            </h2>
            <div className="space-y-3">
              <p className="text-xs text-muted dark:text-slate-400">
                Su hijo podría requerir este servicio si presenta o cumple con las siguientes condiciones:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.indications.map((ind, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs text-muted dark:text-slate-300 p-3 rounded-xl border border-card-border bg-card-bg">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preparations (If exists) */}
          {service.preparation && service.preparation.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-primary dark:text-slate-200 border-b border-card-border pb-2">
                ¿Cómo preparar a su hijo?
              </h2>
              <div className="p-6 rounded-2xl border border-card-border bg-slate-50/50 dark:bg-slate-900/20 space-y-4">
                <div className="flex items-center space-x-2 text-accent">
                  <span className="text-2xl select-none">📋</span>
                  <span className="font-bold text-xs uppercase tracking-wider">Instrucciones de Preparación</span>
                </div>
                <ul className="space-y-3">
                  {service.preparation.map((prep, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-muted dark:text-slate-300">
                      <span className="text-accent mt-0.5">▪</span>
                      <span>{prep}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Hospitalization details */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-primary dark:text-slate-200 border-b border-card-border pb-2">
              Hospitalización e Ingreso
            </h2>
            <p className="text-sm text-muted dark:text-slate-300 leading-relaxed">
              {service.hospitalization}
            </p>
          </div>

          {/* Safety */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-primary dark:text-slate-200 border-b border-card-border pb-2">
              Seguridad y Riesgos
            </h2>
            <p className="text-sm text-muted dark:text-slate-300 leading-relaxed">
              {service.safety}
            </p>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4">
          <div className="sticky top-28">
            <ServiceSidebar serviceTitle={service.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
