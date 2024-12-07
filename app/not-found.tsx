import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className='bg-white min-h-screen'>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      {/* Imagen de 404 */}
      <div className="mb-8">
        <Image
          src="/static/img/notfound.jpg"
          alt="404 Error"
          width={300}
          height={300}
          className="max-w-full h-auto"
        />
      </div>

      {/* Mensaje de error */}
      <h1 className="font-['Raleway'] text-4xl font-bold text-gray-800 mb-4 text-center">
        ¡Oops! Página no encontrada
      </h1>
      
      <p className="font-['Poppins'] text-gray-600 mb-8 text-center max-w-md">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>

      {/* Botón para volver al inicio */}
      <Link 
        href="/" 
        className="inline-block px-6 py-3 bg-[#ca8cfd] text-white rounded-full hover:bg-[#ca8cfd]/90 transition-colors font-['Poppins']"
      >
        Volver al Inicio
      </Link>
    </div>

    </div>
  );
}