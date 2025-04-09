import { siteData } from '../../data/content';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import './Header.css';

const Header = () => {
  const progress = useScrollProgress();
  return (
    <div className="header">
      <span>{siteData.copyright}</span>
      <span>{Math.round(progress)}%</span>
    </div>
  );
};

export default Header;
