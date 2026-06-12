import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog de Cardiología y Arritmias Pediátricas | Dr. Ovidio Cortázar',
  description: 'Artículos informativos y guías para padres sobre arritmias en niños, marcapasos infantiles y desfibriladores escritos por el Dr. Ovidio Cortázar.',
  keywords: [
    'blog cardiologia pediatrica',
    'articulos sobre arritmias en niños',
    'guia de marcapasos infantil',
    'cero radiacion en niños',
    'desmayos en niños causas'
  ],
  openGraph: {
    title: 'Blog de Cardiología y Arritmias Pediátricas | Dr. Ovidio Cortázar',
    description: 'Guías de salud y artículos explicativos para entender el corazón de los niños y las arritmias infantiles.',
    url: 'https://drcortazar.com/blog',
    siteName: 'Dr. Ovidio Cortázar',
    images: [
      {
        url: 'https://framerusercontent.com/images/yBXudht6wID9bmz6I8JBiFdFM0.jpg?scale-down-to=512&width=1236&height=984',
        width: 1200,
        height: 630,
        alt: 'Blog de Electrofisiología Pediátrica',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog de Cardiología y Arritmias Pediátricas | Dr. Ovidio Cortázar',
    description: 'Guías de salud y artículos explicativos escritos por el Dr. Cortázar.',
    images: ['https://framerusercontent.com/images/yBXudht6wID9bmz6I8JBiFdFM0.jpg?scale-down-to=512&width=1236&height=984'],
  },
  alternates: {
    canonical: 'https://drcortazar.com/blog',
  },
};

export default function Page() {
  return <BlogClient />;
}
