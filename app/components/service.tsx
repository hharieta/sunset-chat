import Image from 'next/image';

const services = [
  {
    title: 'Spa',
    description: 'Relájate en nuestro exclusivo spa frente al mar.',
    image: '/static/img/spa.jpg'
  },
  {
    title: 'Piscinas',
    description: 'Disfruta de nuestras albercas con vistas espectaculares.',
    image: '/static/img/pool.jpg'
  },
  {
    title: 'Gastronomía',
    description: 'Degusta la mejor cocina internacional y local.',
    image: '/static/img/restaurant.jpg'
  }
];

export default function Services() {
  return (
    <section className="py-16 items-center  inset-0 bg-cover bg-center z-0" style={{backgroundImage: 'url(/static/img/Sunset.png)'}}>
      <div className="container mx-auto px-4">
        <h2 className="font-['Poppins'] text-[#c49b6b] text-3xl text-center mb-10">Servicios Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col text-[#c49b6b] items-center text-center">
              <h3 className="font-['Raleway'] text-[#c49b6b] text-xl font-semibold mb-3">{service.title}</h3>
              <p className="font-['Poppins'] text-[#c49b6b] mb-4 max-w-[300px]">{service.description}</p>
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}