import { Link } from 'react-router-dom';
import ChapterNav from '../components/ChapterNav';
import { useLanguage } from '../context/LanguageContext';
import SpiderLilyBackground from '../components/SpiderLilyBackground';
import TypewriterText from '../components/TypewriterText';

export default function Home() {
  const { t, language } = useLanguage();

  const secciones = [
    { id: '01', name: t('navProjects'), path: '/projects', page: 'I' },
    { id: '02', name: t('navSkills'), path: '/skills', page: 'II' },
    { id: '03', name: t('navExperience'), path: '/experience', page: 'III' },
    { id: '04', name: t('navContact'), path: '/contact', page: 'IV' },
  ];

  return (
    <main className="relative min-h-screen bg-light text-olive flex flex-col justify-center items-center px-4 py-12 overflow-hidden font-sans">
      {/* Pestañas laterales de navegación (Anterior: Inicio "/", Siguiente: Habilidades "/skills") */}
      <ChapterNav nextPath="/projects" />

      {/* CAPA DE TEXTURA DE GRANO */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.30] grayscale contrast-125"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* EFECTO DE VIÑETA */}
      <div 
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.10) 100%)'
        }}
      />

      {/* MARCAS DE AGUA LYCORIS RADIATA (#A37774) */}
      <SpiderLilyBackground />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">
        
        {/* Encabezado Principal */}
        <h1 className="text-4xl md:text-8xl font-bold tracking-tight text-olive md:mb-6 mb-2 italic">
          <TypewriterText 
          text="Fernando Reyes" 
          speed={0.05} 
          delay={0.3} 
          showCursor={false}
        />
        </h1>
        
        <p className="text-sm md:text-xl text-olive font-medium tracking-widest uppercase mb-6 opacity-90 mx-6 text-center md:text-left">
          <TypewriterText 
            key={t('role')}
            text={t('role')} 
            speed={0.03} 
            delay={1.2}
            showCursor={false}
          />
        </p>

        {/* ÍNDICE*/}
        <nav key={language} className="w-full max-w-lg my-4 ">
            <ul className="space-y-4">
              {secciones.map((sec, index) => {
                // Cada ítem de la lista arranca 0.18s después del anterior
                const itemDelay = 1.8 + index * 0.18;

                return (
                  <li key={sec.id}>
                    <Link
                      to={sec.path}
                      className="group flex items-baseline justify-between w-full text-olive hover:opacity-80 transition-opacity"
                    >
                      <span className="text-lg md:text-xl font-medium group-hover:underline decoration-olive/50 underline-offset-4">
                        <span className="text-sm font-mono mr-2 opacity-70">
                          <TypewriterText 
                            text={`${sec.id}.`} 
                            speed={0.02} 
                            delay={itemDelay} 
                            showCursor={false} 
                          />
                        </span>
                        <TypewriterText 
                          text={sec.name} 
                          speed={0.025} 
                          delay={itemDelay + 0.05} 
                          showCursor={false} 
                        />
                      </span>
                      
                      <span className="flex-1 mx-3 border-b border-dotted border-olive/40 translate-y-[-2px]" />
                      
                      <span className="text-sm md:text-base font-mono font-bold tracking-wider">
                        <TypewriterText 
                          text={sec.page} 
                          speed={0.02} 
                          delay={itemDelay + 0.15} 
                          showCursor={false} 
                        />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

        {/* Enlaces Rápidos a Redes */}
        <div className="flex gap-6 mt-16 text-sm text-olive tracking-widest uppercase">
          <a
            href="https://github.com/FernandoReyesV2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4 transition-all"
          >
            <TypewriterText 
              text="GitHub" 
              speed={0.04} 
              delay={3.0} 
              showCursor={false}
              hideCursorOnComplete={true}
            />
          </a>

          <span className="opacity-40">•</span>

          <a
            href="https://www.linkedin.com/in/fernando-josue-reyes-vanegas-3876602aa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4 transition-all"
          >
            <TypewriterText 
              text="LinkedIn" 
              speed={0.04} 
              delay={3.4} 
              showCursor={false}
              hideCursorOnComplete={true}
            />
          </a>

          <span className="opacity-40">•</span>

          <a
            href="mailto:fernandojrv73@hotmail.com"
            className="hover:underline underline-offset-4 transition-all"
          >
            <TypewriterText 
              text="Email" 
              speed={0.04} 
              delay={3.85} 
              showCursor={false}
              hideCursorOnComplete={true}
            />
          </a>
        </div>

      </div>
    </main>
  );
}