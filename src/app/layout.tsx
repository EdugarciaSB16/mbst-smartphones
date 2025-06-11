import { Navbar } from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'MBST Smartphones',
  description: 'Catálogo de móviles Zara Challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="px-4 py-6 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
