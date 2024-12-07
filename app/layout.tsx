import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SunsetChat - Asistente Virtual',
  description: 'Asistente virtual para Sunset Marina Resort & Yacht Club',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}