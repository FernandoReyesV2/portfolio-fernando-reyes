import { Link } from 'react-router-dom';

interface ChapterNavProps {
  prevPath?: string;
  nextPath?: string;
}

export default function ChapterNav({ prevPath, nextPath }: ChapterNavProps) {
  return (
    <>
      {/* Pestaña Semicircular Izquierda (Capítulo Anterior) */}
      {prevPath && (
        <Link
          to={prevPath}
          aria-label="Capítulo anterior"
          className="fixed left-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-20 md:w-12 md:h-24 bg-olive rounded-r-full shadow-lg hover:w-12 md:hover:w-14 transition-all duration-300 group"
        >
          <span className="text-light text-xl md:text-2xl font-bold group-hover:-translate-x-0.5 transition-transform">
            ‹
          </span>
        </Link>
      )}

      {/* Pestaña Semicircular Derecha (Capítulo Siguiente) */}
      {nextPath && (
        <Link
          to={nextPath}
          aria-label="Capítulo siguiente"
          className="fixed right-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-20 md:w-12 md:h-24 bg-olive rounded-l-full shadow-lg hover:w-12 md:hover:w-14 transition-all duration-300 group"
        >
          <span className="text-light text-xl md:text-2xl font-bold group-hover:translate-x-0.5 transition-transform">
            ›
          </span>
        </Link>
      )}
    </>
  );
}