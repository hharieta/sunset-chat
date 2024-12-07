import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white text-white shadow-md sticky top-0 z-50">
      <nav className="flex justify-between items-center px-5 py-3">
        <div className="logo-container">
          <Link href="/">
            <Image
              src="/static/img/sunset-logo.png"
              alt="Logo Sunset Royal"
              width={50}
              height={50}
              className="h-[50px] w-auto"
            />
          </Link>
        </div>
        <ul className="font-['Poppins'] flex space-x-6">
          <li><Link href="/" className="text-gray-600 hover:text-[#f39c12] transition-colors">Inicio</Link></li>
          <li><Link href="/about" className="text-gray-600 hover:text-[#f39c12] transition-colors">Nosotros</Link></li>
          <li><Link href="#contact" className="text-gray-600 hover:text-[#f39c12] transition-colors">Contacto</Link></li>
          <li><Link href="#reservas" className="text-gray-600 hover:text-[#f39c12] transition-colors">Reservas</Link></li>
        </ul>
      </nav>
    </header>
  );
}