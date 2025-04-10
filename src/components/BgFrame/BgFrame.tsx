import './BgFrame.css';
import { siteData } from '../../data/content';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import logo from '../../assets/logo.svg';

const BgFrame = () => {
  const progress = useScrollProgress();
  return (
    <div className="bg-container">
      <div style={{ display: progress >= 60 ? 'none' : 'block' }}>
        <img src={logo} alt="logo" className="bg-logo" />
      </div>
      <div
        style={{ display: progress >= 60 ? 'flex' : 'none' }}
        className="flex"
      >
        <h1>{siteData.title.toUpperCase()}</h1>
        <span>{siteData.contact}</span>
      </div>
    </div>
  );
};

export default BgFrame;
