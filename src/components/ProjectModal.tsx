import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: string[];
}

export default function ProjectModal({ isOpen, onClose, images }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reiniciar al primer slide al abrir con un proyecto nuevo
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen, images]);

  // Controles de navegación
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Navegación por teclado (Flechas y Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length]);

  return (
    <AnimatePresence>
      {isOpen && images.length > 0 && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 md:p-8">
          {/* Fondo oscuro traslúcido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/90 backdrop-blur-md"
          />

          {/* Botón de cierre (✕) flotante superior */}
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-olive/20 hover:bg-olive text-light border border-olive/40 transition-all duration-300 font-mono text-xl cursor-pointer"
          >
            ✕
          </button>

          {/* Área principal: Imagen limpia sin caja contenedora */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center max-w-5xl w-full"
          >
            {/* Contenedor relativo para la imagen y las flechas laterales */}
            <div className="relative w-full flex items-center justify-center">
              
              {/* Imagen limpia */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`Captura ${currentIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="max-h-[75vh] w-auto max-w-full object-contain select-none rounded-lg"
                />
              </AnimatePresence>

              {/* Flechas de navegación laterales */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    aria-label="Imagen anterior"
                    className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-olive/30 hover:bg-olive border border-olive/50 flex items-center justify-center text-light/70 transition-all font-mono text-2xl cursor-pointer"
                  >
                    ‹
                  </button>

                  <button
                    onClick={handleNext}
                    aria-label="Imagen siguiente"
                    className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-olive/30 hover:bg-olive border border-olive/50 flex items-center justify-center text-light/70 transition-all font-mono text-2xl cursor-pointer"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Footer del Modal: Contador y Puntos de Navegación */}
            {images.length > 1 && (
              <div className="flex items-center justify-between w-full max-w-md mt-6 font-mono text-xs tracking-widest text-light">
                <span className="opacity-75">
                  {currentIndex + 1} / {images.length}
                </span>

                <div className="flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Ir a imagen ${idx + 1}`}
                      className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                        idx === currentIndex
                          ? 'w-6 bg-light'
                          : 'w-2 bg-light/30 hover:bg-light/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}