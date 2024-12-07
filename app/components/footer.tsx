import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 shadow-md mt-auto">
      <div className="container mx-auto px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1 - Enlaces */}
          <div>
            <h3 className="font-['Poppins'] font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#f39c12] transition-colors">Inicio</Link></li>
              <li><Link href="/about" className="hover:text-[#f39c12] transition-colors">Nosotros</Link></li>
              <li><Link href="/contact" className="hover:text-[#f39c12] transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 2 - Información de contacto */}
          <div>
            <h3 className="font-['Poppins'] font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>Email: info@ejemplo.com</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Dirección: Cancún, México</li>
            </ul>
          </div>

          {/* Columna 3 - Descargo de responsabilidad */}
          <div>
            <h3 className="font-['Poppins'] font-bold mb-4">Aviso Legal</h3>
            <p className="text-sm">
              Este sitio web es un proyecto escolar creado con fines educativos. 
              No está afiliado con ninguna empresa real y cualquier similitud con 
              marcas existentes es puramente coincidental.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Proyecto Escolar. Nos reservamos el derecho de vivir felices.</p>
        </div>
      </div>
    </footer>
  );
}