import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import { ArrowLeft, Zap, FileCheck } from 'lucide-react';
import ServiceSidebar from './ServiceSidebar';

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
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Regresar a Servicios</span>
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content Column */}
        <div className="lg:col-span-8 space-y-12">
          {/* Header Card */}
          <div className="space-y-4">
            <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
              service.category === 'procedimiento'
                ? 'bg-rose-500/10 text-rose-500 dark:bg-rose-950/30'
                : 'bg-primary/10 text-primary dark:bg-sky-950/30 dark:text-sky-300'
            }`}>
              {service.category === 'procedimiento' ? 'Procedimiento Intervencionista' : 'Estudio Diagnóstico'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-slate-100 tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-muted dark:text-slate-300 text-base leading-relaxed font-medium">
              {service.heroDesc}
            </p>
          </div>

          {/* Cero Fluoroscopy Banner (If procedural) */}
          {service.category === 'procedimiento' && (
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-emerald-500 bg-gradient-to-r from-emerald-50/10 to-transparent dark:from-emerald-950/5 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
                <Zap className="w-5 h-5 fill-emerald-600/10" />
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
                  <FileCheck className="w-5 h-5" />
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
