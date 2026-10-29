import { usePageTransition } from '../context/PageTransitionContext';

interface ChapterNavProps {
  prevPath?: string;
  nextPath?: string;
}

export default function ChapterNav({ prevPath, nextPath }: ChapterNavProps) {
  const { navigateToChapter } = usePageTransition();

  // Acabado liquid glass translúcido real: permite leer el texto detrás
  const glassStyle =
    "backdrop-blur-4xl bg-dark/25 hover:bg-olive/35 active:bg-olive/45 " +
    "border border-none shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.4)] " +
    "transition-all duration-300 group cursor-pointer select-none";

  return (
    <>
      {/* Pestaña Semicircular Izquierda (Capítulo Anterior - Backward) */}
      {prevPath && (
        <button
          onClick={() => navigateToChapter(prevPath, 'backward')}
          aria-label="Capítulo anterior"
          className={`fixed left-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-7 h-14 md:w-16 md:h-28 rounded-r-full border-l-0 hover:w-9 md:hover:w-14 ${glassStyle}`}
        >
          <span className="text-light/80 group-hover:text-olive text-2xl md:text-2xl font-bold group-hover:-translate-x-0.5 transition-transform">
            ‹
          </span>
        </button>
      )}

      {/* Pestaña Semicircular Derecha (Capítulo Siguiente - Forward) */}
      {nextPath && (
        <button
          onClick={() => navigateToChapter(nextPath, 'forward')}
          aria-label="Capítulo siguiente"
          className={`fixed right-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-7 h-14 md:w-16 md:h-28  rounded-l-full border-r-0 hover:w-9 md:hover:w-14 ${glassStyle}`}
        >
          <span className="text-light group-hover:text-olive text-2xl md:text-2xl font-bold group-hover:translate-x-0.5 transition-transform">
            ›
          </span>
        </button>
      )}
    </>
  );
}