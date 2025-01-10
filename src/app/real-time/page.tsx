'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RealTimePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">Real Time Information</h1>
          <div className="aspect-video w-full max-w-4xl mx-auto">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/v1ZLLDaFhR0?si=ZuzMftVrbpUNck8i" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}