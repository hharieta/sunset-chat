import Navbar from './components/navbar';
import Banner from './components/banner';
import Services from './components/service';
import Chat from './components/Chat';
import '../app/styles/fonts.css'

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        <Banner />

        <section className="py-16 bg-white text-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="font-['Raleway'] text-3xl font-bold text-center mb-6">Un Paraíso en Cancún</h2>
            <p className="font-['Poppins'] text-center max-w-2xl mx-auto">
              Sunset Royal Beach Resort ofrece experiencias únicas con vistas espectaculares al mar, 
              gastronomía de primer nivel y actividades inolvidables.
            </p>
          </div>
        </section>

        <section className="h-[300px] bg-cover bg-center" style={{backgroundImage: 'url(/static/img/LOWEST-RATE.jpg)'}}>
          
        </section>

        <Services />

        <section id="reservas" className="py-16 bg-gray-50 text-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-['Raleway'] text-3xl font-bold mb-6">Reserva tu estadía</h2>
            <p className="font-['Poppins'] mb-8">
              Contacta con nosotros o utiliza nuestro sistema en línea para asegurar tu lugar en el paraíso.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-[#ca8cfd] text-white rounded-full hover:bg-[#ca8cfd]/90 transition-colors"
            >
              Contáctanos
            </a>
          </div>
        </section>

        <Chat />
      </main>
    </>
  );
}