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
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        <main className="w-full max-w-[1720px] px-6 mx-auto">{children}</main>
      </body>
    </html>
  );
}
