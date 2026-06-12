import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppointmentModal from '@/components/AppointmentModal';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dr. Ovidio Cortázar | Electrofisiólogo Cardíaco Pediátrico CDMX',
  description: 'Especialista en arritmias infantiles, desfibriladores, marcapasos y procedimientos de Cero Fluoroscopía en México. Consulta en CDMX y Zona Metropolitana.',
  keywords: 'electrofisiologo pediatra, cardiologo pediatra cdmx, arritmias en niños, cero fluoroscopia, marcapasos infantil, doctor ovidio cortazar',
  icons: {
    icon: [
      { url: 'https://framerusercontent.com/sites/icons/default-favicon-light.v1.png', media: '(prefers-color-scheme: light)' },
      { url: 'https://framerusercontent.com/sites/icons/default-favicon-dark.v1.png', media: '(prefers-color-scheme: dark)' }
    ],
    apple: 'https://framerusercontent.com/sites/icons/default-touch-icon.v3.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main className="flex-1 pt-24 pb-12">
          {children}
        </main>
        <Footer />
        <AppointmentModal />
      </body>
    </html>
  );
}
