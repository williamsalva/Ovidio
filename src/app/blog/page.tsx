'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { blogArticles } from '@/data/blog';
import { Calendar, Clock, ArrowRight, HeartHandshake, Tags } from 'lucide-react';
import { useUIStore } from '@/store/useUIStore';

export default function BlogHubPage() {
  const { openAppointmentModal } = useUIStore();
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const articles = Object.values(blogArticles);

  // Get all unique tags
  const allTags = ['all', ...Array.from(new Set(articles.flatMap((a) => a.tags)))];

  const filteredArticles = selectedTag === 'all'
    ? articles
    : articles.filter((a) => a.tags.includes(selectedTag));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold text-primary dark:text-slate-100 tracking-tight leading-tight">
          Blog de Electrofisiología Pediátrica
        </h1>
        <p className="text-muted dark:text-slate-350 text-sm sm:text-base leading-relaxed">
          Artículos y guías explicativas redactados por el Dr. Ovidio Cortázar sobre arritmias infantiles, desfibriladores, marcapasos y procedimientos sin radiación.
        </p>
      </div>

      {/* Tags Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-3xl border border-card-border bg-card-bg shadow-sm">
        <div className="flex items-center space-x-2 text-xs text-muted dark:text-slate-300 font-semibold shrink-0">
          <Tags className="w-4.5 h-4.5 text-accent" />
          <span>Filtrar por Tema:</span>
        </div>
        <div className="flex items-center space-x-2 w-full overflow-x-auto justify-start sm:justify-end pb-1 sm:pb-0 scrollbar-none">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? 'bg-accent text-white shadow-sm'
                  : 'hover:bg-slate-100 text-primary dark:text-slate-300 border border-card-border'
              }`}
            >
              {tag === 'all' ? 'Todos los Temas' : tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((art) => (
          <article
            key={art.slug}
            className="glass-panel rounded-3xl border border-card-border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
          >
            {/* Card Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center space-x-4 text-[10px] text-muted dark:text-slate-400 font-semibold">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{art.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h2 className="text-xl font-bold text-primary dark:text-slate-100 group-hover:text-accent transition-colors leading-snug">
                  <Link href={`/articles/${art.slug}`}>
                    {art.title}
                  </Link>
                </h2>

                <p className="text-xs text-muted dark:text-slate-350 leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              {/* Read button / tags */}
              <div className="space-y-4 pt-4 border-t border-card-border/60">
                <div className="flex flex-wrap gap-1.5">
                  {art.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-slate-100 text-muted dark:bg-slate-900/60 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-accent pt-1">
                  <Link href={`/articles/${art.slug}`} className="flex items-center space-x-1 group/btn hover:underline">
                    <span>Leer artículo</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                  <span className="text-[10px] text-muted dark:text-slate-500 font-medium">
                    {art.author}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA block */}
      <section className="glass-panel p-8 md:p-10 rounded-3xl border border-card-border bg-gradient-to-br from-card-bg to-slate-100/20 dark:from-card-bg dark:to-slate-900/10 text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 dark:bg-rose-950/40 text-accent">
          <HeartHandshake className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-primary dark:text-slate-100">
            ¿Busca orientación médica especializada?
          </h3>
          <p className="text-xs sm:text-sm text-muted dark:text-slate-350 max-w-xl mx-auto leading-relaxed">
            Si su hijo presenta síntomas cardíacos o desmayos recurrentes, una consulta diagnóstica de alta especialidad le brindará claridad definitiva sobre los siguientes pasos.
          </p>
        </div>
        <div>
          <button
            onClick={openAppointmentModal}
            className="px-8 py-3.5 rounded-full bg-accent hover:bg-rose-600 text-white font-semibold shadow-md transition-all active:scale-95 duration-150 cursor-pointer"
          >
            Agendar una Consulta
          </button>
        </div>
      </section>
    </div>
  );
}
