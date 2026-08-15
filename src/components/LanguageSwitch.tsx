import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Cambiar idioma"
      className="fixed top-6 right-6 z-40 font-mono text-xs tracking-widest uppercase border border-olive/40 backdrop-blur-sm text-olive px-3 py-1.5 rounded hover:bg-olive hover:text-light transition-all duration-300"
    >
      [ {language === 'es' ? 'EN' : 'ES'} ]
    </button>
  );
}