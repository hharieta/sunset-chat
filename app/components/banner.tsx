

export default function Banner() {
    return (
      <section className="relative h-[500px] flex justify-center items-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${[
              '/static/img/SM_SLIDER_1.jpg',
              '/static/img/SM_SLIDER_2.jpg', 
              '/static/img/SM_SLIDER_3.jpg'
            ][Math.floor((Date.now() / 5000) % 3)]})`,
            transition: 'background-image 1s ease-in-out'
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10">
          <h1 className="font-['Prata'] text-5xl mb-5 ">Bienvenido a Sunset Royal Beach Resort</h1>
          <p className="font-['Relaway'] text-xl mb-5">El mejor destino para disfrutar de Cancún con lujo y comodidad.</p>
          <a 
            href="#reservas" 
            className="font-['Poppins'] inline-block px-6 py-3 bg-[#ca8cfd] text-white rounded-full hover:bg-[#ca8cfd]/90 transition-colors"
          >
            Reserva Ahora
          </a>
        </div>
      </section>
    );
  }