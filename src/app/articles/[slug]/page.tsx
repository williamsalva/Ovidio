import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogArticles } from '@/data/blog';
import ScrollProgress from './ScrollProgress';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import ServiceSidebar from '@/app/servicios/[slug]/ServiceSidebar';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(blogArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) return {};

  return {
    title: `${article.metaTitle} | Dr. Ovidio Cortázar`,
    description: article.metaDesc,
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-xs text-muted dark:text-slate-400">
        <Link href="/" className="hover:text-accent">Inicio</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span>/</span>
        <span className="text-primary font-bold dark:text-slate-200 truncate">{article.title}</span>
      </nav>

      {/* Back button */}
      <div className="pt-2">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-1.5 text-sm font-semibold text-accent hover:underline group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Regresar al Blog</span>
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Article Body */}
        <div className="lg:col-span-8 space-y-8 glass-panel p-6 sm:p-10 rounded-3xl border border-card-border">
          {/* Article Header */}
          <div className="space-y-4 border-b border-card-border/60 pb-6">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-accent/15 text-accent dark:bg-rose-950/35"
                >
                  {t}
                </span>
              ))}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary dark:text-slate-100 tracking-tight leading-tight">
              {article.title}
            </h1>

            {/* Author / Date / Read Time */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted dark:text-slate-400">
              <span className="flex items-center space-x-1.5">
                <User className="w-4 h-4 text-accent" />
                <span>Por {article.author}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-accent" />
                <span>{article.date}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-accent" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>

          {/* Article Content Render */}
          <div className="space-y-6 text-sm sm:text-base text-muted dark:text-slate-350 leading-relaxed">
            {article.content.map((block, idx) => {
              if (block.type === 'p') {
                return <p key={idx}>{block.text}</p>;
              }
              if (block.type === 'h2') {
                return (
                  <h2
                    key={idx}
                    className="text-lg sm:text-xl font-bold text-primary dark:text-slate-100 pt-4 border-l-4 border-accent pl-3.5"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'ul' && block.items) {
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-3 pt-2">
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 space-y-8">
          <div className="sticky top-28">
            <ServiceSidebar serviceTitle={article.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
