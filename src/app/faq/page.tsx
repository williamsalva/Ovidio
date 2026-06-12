import { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Dr. Ovidio Cortázar - Cardiología Infantil',
  description: 'Respuestas a dudas comunes sobre arritmias pediátricas, Cero Fluoroscopía, seguridad en ablación por catéter y consultas del Dr. Cortázar en CDMX.',
  keywords: [
    'preguntas frecuentes cardiologia infantil',
    'arritmias en niños dudas',
    'es segura la ablacion en niños',
    'cero radiacion rayos x niños',
    'sintomas de arritmia infantil'
  ],
  openGraph: {
    title: 'Preguntas Frecuentes | Dr. Ovidio Cortázar - Cardiología Infantil',
    description: 'Respuestas a dudas comunes sobre arritmias pediátricas, Cero Fluoroscopía, seguridad en ablación por catéter y consultas del Dr. Cortázar en CDMX.',
    url: 'https://drcortazar.com/faq',
    siteName: 'Dr. Ovidio Cortázar',
    images: [
      {
        url: 'https://framerusercontent.com/assets/iFGgXmTLDkUh3UIySIJbjIQ.jpeg',
        width: 1200,
        height: 630,
        alt: 'Preguntas Frecuentes de Cardiología Infantil',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preguntas Frecuentes | Dr. Ovidio Cortázar - Cardiología Infantil',
    description: 'Dudas sobre arritmias en niños y procedimientos sin radiación resueltas por el subespecialista.',
    images: ['https://framerusercontent.com/assets/iFGgXmTLDkUh3UIySIJbjIQ.jpeg'],
  },
  alternates: {
    canonical: 'https://drcortazar.com/faq',
  },
};

export default function Page() {
  return <FAQClient />;
}
