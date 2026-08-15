import { useEffect, useState, useMemo } from 'react';
import SpiderLilyIcon from './SpiderLilyIcon';

interface LilyData {
  id: number;
  top: string;
  left: string;
  size: number;
  rotate: number;
  opacity: number;
}

export default function SpiderLilyBackground() {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  // Escuchar cambios de tamaño de ventana con debounce básico
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Calcular las posiciones distribuidas en base a la resolución actual
  const lilies = useMemo<LilyData[]>(() => {
    const { width, height } = dimensions;

    // Determinar número de columnas y filas según el tamaño de pantalla
    const cols = width < 640 ? 2 : width < 1024 ? 3 : 4;
    const rows = height < 700 ? 2 : 3;

    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    const generated: LilyData[] = [];
    let id = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Evitar celdas centrales en pantallas medianas/grandes para no ensuciar la lectura
        const isCenterHorizontal = cols === 3 ? c === 1 : c === 1 || c === 2;
        const isCenterVertical = rows === 3 ? r === 1 : false;

        // Probabilidad de spawn: 15% en el centro, 80% en los bordes/perímetro
        const spawnChance = isCenterHorizontal && isCenterVertical ? 0.15 : 0.8;
        
        // Semilla pseudo-aleatoria estable por celda
        const pseudoRand = ((r * cols + c) * 9301 + 49297) % 233280 / 233280;

        if (pseudoRand < spawnChance) {
          // Desplazamiento orgánico dentro de la celda (entre 10% y 80% del cuadrante)
          const jitterX = 10 + (((c * 17 + r * 31) % 100) / 100) * 60;
          const jitterY = 10 + (((r * 23 + c * 41) % 100) / 100) * 60;

          const posX = c * cellWidth + (jitterX / 100) * cellWidth;
          const posY = r * cellHeight + (jitterY / 100) * cellHeight;

          // Tamaño adaptativo según si es móvil o escritorio
          const baseSize = width < 640 ? 140 : 220;
          const sizeVariation = (((r + c) * 37) % 60) - 30; // +/- 30px
          const finalSize = baseSize + sizeVariation;

          // Rotación y opacidad sutil
          const rotation = ((r * 73 + c * 109) % 360) - 180;
          const opacity = 0.15 + (((r + c) % 4) * 0.02); // Entre 0.06 y 0.105

          generated.push({
            id: id++,
            left: `${posX.toFixed(1)}%`,
            top: `${posY.toFixed(1)}%`,
            size: finalSize,
            rotate: rotation,
            opacity: Number(opacity.toFixed(3)),
          });
        }
      }
    }

    return generated;
  }, [dimensions]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {lilies.map((item) => (
        <div
          key={item.id}
          className="absolute transition-all duration-500 ease-out"
          style={{
            top: item.top,
            left: item.left,
            width: `${item.size}px`,
            height: `${item.size}px`,
            transform: `translate(-50%, -50%) rotate(${item.rotate}deg)`,
            opacity: item.opacity,
          }}
        >
          <SpiderLilyIcon color="#A37774" className="w-full h-full" />
        </div>
      ))}
    </div>
  );
}