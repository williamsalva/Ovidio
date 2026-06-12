import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Servicios de Cardiología y Arritmias Pediátricas CDMX | Dr. Ovidio Cortázar',
  description: 'Consulta los estudios diagnósticos y procedimientos de alta especialidad para arritmias en niños. Ablación con catéter con tecnología de Cero Fluoroscopía.',
  keywords: [
    'servicios cardiologia pediatrica cdmx',
    'estudio electrofisiologico niños',
    'ablacion con cateter pediatrica cdmx',
    'holter de ritmo niños cdmx',
    'mesa inclinada tilt test pediatrico',
    'prueba de esfuerzo infantil cdmx',
    'marcapasos pediatrico'
  ],
  openGraph: {
    title: 'Servicios de Cardiología y Arritmias Pediátricas CDMX | Dr. Ovidio Cortázar',
    description: 'Diagnósticos y tratamientos avanzados sin radiación (Cero Fluoroscopía) para arritmias en lactantes, niños y adolescentes.',
    url: 'https://drcortazar.com/servicios',
    siteName: 'Dr. Ovidio Cortázar',
    images: [
      {
        url: 'https://framerusercontent.com/assets/iFGgXmTLDkUh3UIySIJbjIQ.jpeg',
        width: 1200,
        height: 630,
        alt: 'Servicios Especializados del Dr. Ovidio Cortázar',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de Cardiología y Arritmias Pediátricas CDMX | Dr. Ovidio Cortázar',
    description: 'Estudios cardíacos y ablación de arritmias con Cero Fluoroscopía en México.',
    images: ['https://framerusercontent.com/assets/iFGgXmTLDkUh3UIySIJbjIQ.jpeg'],
  },
  alternates: {
    canonical: 'https://drcortazar.com/servicios',
  },
};

export default function Page() {
  return <ServicesClient />;
}
