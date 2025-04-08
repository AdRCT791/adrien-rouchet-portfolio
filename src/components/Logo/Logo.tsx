import './Logo.css';
import { siteData } from '../../data/content';

const Logo = () => {
  return <div className="logo-container">{siteData.title.toUpperCase()}</div>;
};

export default Logo;
