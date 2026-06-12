'use client';

import React, { useState } from 'react';
import { useUIStore } from '@/store/useUIStore';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, Info } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'tecnologia' | 'procedimientos';
}

export default function FAQPage() {
  const { openAppointmentModal } = useUIStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeId, setActiveId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      category: 'general',
      question: '¿Qué es una arritmia en niños?',
      answer: 'Una arritmia es una alteración en el ritmo eléctrico del corazón. En niños puede manifestarse como latidos muy rápidos (taquicardia), latidos muy lentos (bradicardia) o ritmos irregulares. Sus síntomas suelen ser palpitaciones, fatiga inusual, dolor leve en el pecho o desmayos. La gran mayoría de estos padecimientos tienen cura definitiva hoy en día.'
    },
    {
      id: 2,
      category: 'general',
      question: '¿Cuándo debo llevar a mi hijo con un electrofisiólogo?',
      answer: 'Debes acudir con el electrofisiólogo (subespecialista en el sistema eléctrico cardíaco) si tu hijo presenta episodios de corazón acelerado sin explicación, desmayos o síncopes (en especial los que ocurren haciendo ejercicio), latidos que se perciben irregulares, o bien, si en un electrocardiograma de rutina el pediatra identificó algún trazo anormal.'
    },
    {
      id: 3,
      category: 'tecnologia',
      question: '¿Qué es la Cero Fluoroscopía y por qué es tan importante?',
      answer: 'La fluoroscopía es una técnica que utiliza rayos X continuos para guiar los catéteres dentro del corazón. La Cero Fluoroscopía elimina por completo esta radiación usando sistemas avanzados de mapeo 3D (sistemas CARTO y Ensite X) que crean un mapa virtual tridimensional del corazón mediante campos electromagnéticos de baja potencia. En los niños, cuyos tejidos en desarrollo son sumamente radiosensibles, eliminar la radiación reduce a cero el riesgo de sufrir efectos nocivos a largo plazo.'
    },
    {
      id: 4,
      category: 'procedimientos',
      question: '¿La ablación con catéter en niños es segura?',
      answer: 'Sí. Es un procedimiento mínimamente invasivo (no requiere abrir el pecho) que cuenta con tasas de éxito del 95% al 98% para las arritmias pediátricas más comunes. Se realiza bajo anestesia general por un electrofisiólogo pediatra certificado y en salas quirúrgicas equipadas. Es el tratamiento curativo definitivo más seguro y eficaz disponible actualmente.'
    },
    {
      id: 5,
      category: 'general',
      question: '¿Dónde consulta el Dr. Cortázar en CDMX?',
      answer: 'El Dr. Cortázar atiende en tres consultorios del grupo KINDOC en la Ciudad de México y Zona Metropolitana: 1) Casa KINDOC (Col. Insurgentes San Borja, Benito Juárez), 2) KINDOC Universidad (Dentro del Hospital Ángeles Universidad) y 3) KINDOC Satélite (Dentro del Hospital San Ángel Inn Satélite en Naucalpan).'
    },
    {
      id: 6,
      category: 'general',
      question: '¿Los desmayos en niños son siempre peligrosos?',
      answer: 'La mayoría de los desmayos son de origen benigno (como el síncope vasovagal provocado por calor, deshidratación o estar mucho tiempo de pie). No obstante, todo síncope que ocurra de forma abrupta DURANTE el ejercicio físico, o bien, si hay antecedentes familiares de muerte súbita o fallas cardíacas precoces, se considera un signo de alerta que requiere descartar causas graves de forma inmediata.'
    },
    {
      id: 7,
      category: 'procedimientos',
      question: '¿Se requiere anestesia general para los procedimientos en niños?',
      answer: 'Sí. A diferencia de los adultos que a veces reciben solo sedación leve, los niños requieren anestesia general administrada por un anestesiólogo pediátrico. Esto garantiza que el paciente se mantenga completamente inmóvil durante el mapeo de alta precisión 3D, evita el dolor en las punciones vasculares y previene el estrés o trauma emocional en el menor.'
    },
    {
      id: 8,
      category: 'procedimientos',
      question: '¿Cuánto tiempo tarda la recuperación de una ablación?',
      answer: 'La recuperación es sumamente rápida. El procedimiento requiere pasar una noche de internamiento preventivo en el hospital. Al día siguiente se da de alta. En casa, se sugiere reposo relativo durante 3 a 5 días (evitando cargar objetos pesados o correr) y reincorporación a la escuela en 5-7 días. Las actividades deportivas habituales se reanudan de forma progresiva a las 2 o 4 semanas.'
    }
  ];

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const query = searchQuery.toLowerCase();
    return faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query);
  });

  // Schema Markup generation
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 dark:bg-rose-950/40 text-accent">
          <HelpCircle className="w-6 h-6" />
        </div>
        <h1 className="text-4xl font-extrabold text-primary dark:text-slate-100 tracking-tight">
          Preguntas Frecuentes
        </h1>
        <p className="text-muted dark:text-slate-350 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Resuelva sus dudas iniciales sobre las arritmias, los procedimientos curativos de catéter y el uso de Cero Radiación.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-lg mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="Buscar una duda..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-2xl border border-card-border bg-card-bg text-sm focus:outline-none focus:border-accent shadow-sm"
        />
      </div>

      {/* Accordion container */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-panel rounded-2xl border border-card-border overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-primary dark:text-slate-100 hover:text-accent dark:hover:text-accent transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-accent shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted shrink-0 ml-4" />
                  )}
                </button>
                
                {/* Expandable Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-card-border/60 bg-slate-50/30 dark:bg-slate-900/10' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 py-5 text-xs sm:text-sm text-muted dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 glass-panel rounded-2xl border border-card-border">
            <Info className="w-10 h-10 text-muted mx-auto mb-3" />
            <p className="text-sm text-muted dark:text-slate-400 font-medium">
              No se encontraron respuestas para su búsqueda.
            </p>
          </div>
        )}
      </div>

      {/* Bottom CTA Box */}
      <section className="glass-panel p-8 rounded-3xl border border-card-border bg-gradient-to-br from-card-bg to-slate-100/10 dark:from-card-bg dark:to-slate-900/5 text-center space-y-6">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600">
          <MessageCircle className="w-5 h-5" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-extrabold text-primary dark:text-slate-100">
            ¿Tiene alguna otra duda médica?
          </h3>
          <p className="text-xs text-muted dark:text-slate-350 max-w-lg mx-auto leading-relaxed">
            Escríbanos directamente por WhatsApp. Nuestro equipo responderá sus dudas sobre preparaciones, costos o detalles específicos de su caso.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/525529682922?text=Hola%20Dr.%20Ovidio%20Cortazar%2C%20tengo%20una%20duda..."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
          >
            Preguntar por WhatsApp
          </a>
          <button
            onClick={openAppointmentModal}
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-card-border hover:border-accent text-primary dark:text-slate-200 font-semibold text-xs shadow-sm cursor-pointer"
          >
            Agendar Consulta
          </button>
        </div>
      </section>
    </div>
  );
}
