import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Dr. Ovidio Cortázar | Cardiología y Arritmias Pediátricas CDMX',
  description: 'Especialista en arritmias infantiles, desfibriladores, marcapasos y procedimientos de Cero Fluoroscopía en México. Formación en SickKids Toronto. Consulta en CDMX y Zona Metropolitana.',
  keywords: [
    'electrofisiologo pediatra cdmx',
    'cardiologo pediatra mexico',
    'arritmias en niños',
    'cero fluoroscopia',
    'marcapasos infantil',
    'doctor ovidio cortazar',
    'ablacion de cateter en niños',
    'taquicardia supraventricular en niños',
    'sindrome de wolff parkinson white'
  ],
  openGraph: {
    title: 'Dr. Ovidio Cortázar | Cardiología y Arritmias Pediátricas CDMX',
    description: 'Diagnóstico y tratamiento definitivo de arritmias infantiles con tecnología de mapeo 3D de vanguardia, eliminando la radiación por completo (Cero Fluoroscopía).',
    url: 'https://drcortazar.com',
    siteName: 'Dr. Ovidio Cortázar',
    images: [
      {
        url: 'https://framerusercontent.com/assets/iFGgXmTLDkUh3UIySIJbjIQ.jpeg',
        width: 1200,
        height: 630,
        alt: 'Dr. Ovidio Cortázar Reyes - Cardiólogo Electrofisiólogo Pediátrico',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Ovidio Cortázar | Cardiología y Arritmias Pediátricas CDMX',
    description: 'Diagnóstico y tratamiento definitivo de arritmias infantiles con tecnología de mapeo 3D de vanguardia, eliminando la radiación por completo.',
    images: ['https://framerusercontent.com/assets/iFGgXmTLDkUh3UIySIJbjIQ.jpeg'],
  },
  alternates: {
    canonical: 'https://drcortazar.com',
  },
};

export default function Page() {
  return <HomeClient />;
}
