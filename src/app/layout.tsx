import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SIMKONI - Sistem Informasi Pencarian Kosakata dan Notasi Islam',
  description: 'Alat bantu pencarian kontekstual kosakata dan notasi Islam untuk pengatalogan bahan pustaka.',
  icons: {
    icon: '/Simkoni_Mainlogo.svg',
    shortcut: '/Simkoni_Mainlogo.svg',
    apple: '/Simkoni_Mainlogo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/Simkoni_Mainlogo.svg" />
        <link rel="shortcut icon" href="/Simkoni_Mainlogo.svg" />
        <link rel="apple-touch-icon" href="/Simkoni_Mainlogo.svg" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {/* Gradient spotlight background layer */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div className="absolute -top-32 left-0 h-[60vh] w-[60vw] opacity-60 blur-3xl bg-[radial-gradient(800px_400px_at_20%_0%,rgba(56,189,248,0.15),transparent)]" />
          <div className="absolute -top-20 right-0 h-[50vh] w-[50vw] opacity-50 blur-3xl bg-[radial-gradient(700px_400px_at_80%_0%,rgba(147,197,253,0.14),transparent)]" />
        </div>

        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
