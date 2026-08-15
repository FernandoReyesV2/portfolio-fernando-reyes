import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function BackToIndex() {
  const { t } = useLanguage();
  return (
    <div className="mt-20 z-20">
      <Link
        to="/"
        className="text-sm font-mono tracking-widest uppercase border border-olive/40 backdrop-blur-sm text-olive px-6 py-3 rounded hover:bg-olive hover:text-light transition-all duration-300"
      >
        {t('backToIndex')}
      </Link>
    </div>
  );
}