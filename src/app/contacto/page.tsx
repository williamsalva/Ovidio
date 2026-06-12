import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contacto y Citas | Dr. Ovidio Cortázar - Electrofisiología Pediátrica',
  description: 'Agende una consulta presencial con el Dr. Ovidio Cortázar en CDMX o Zona Metropolitana. Ubicaciones en Casa KINDOC, Hospital Ángeles Universidad y Hospital San Ángel Inn Satélite.',
  keywords: [
    'contacto dr ovidio cortazar',
    'agendar cita cardiologo pediatra cdmx',
    'casa kindoc telefono',
    'hospital angeles universidad cardiologo pediatra',
    'hospital san angel inn satelite cardiologia infantil',
    'citas electrofisiologo pediatra'
  ],
  openGraph: {
    title: 'Contacto y Citas | Dr. Ovidio Cortázar - Electrofisiología Pediátrica',
    description: 'Agende una consulta presencial con el Dr. Ovidio Cortázar en CDMX o Zona Metropolitana. Sedes en Casa KINDOC, Hospital Ángeles Universidad y Hospital San Ángel Inn Satélite.',
    url: 'https://drcortazar.com/contacto',
    siteName: 'Dr. Ovidio Cortázar',
    images: [
      {
        url: 'https://framerusercontent.com/assets/iFGgXmTLDkUh3UIySIJbjIQ.jpeg',
        width: 1200,
        height: 630,
        alt: 'Agendar cita con el Dr. Ovidio Cortázar Reyes',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto y Citas | Dr. Ovidio Cortázar - Electrofisiología Pediátrica',
    description: 'Información de contacto, teléfonos, direcciones y agendamiento de citas directas con el especialista.',
    images: ['https://framerusercontent.com/assets/iFGgXmTLDkUh3UIySIJbjIQ.jpeg'],
  },
  alternates: {
    canonical: 'https://drcortazar.com/contacto',
  },
};

export default function Page() {
  return <ContactClient />;
}
