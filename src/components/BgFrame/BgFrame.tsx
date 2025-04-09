import './BgFrame.css';
import { siteData } from '../../data/content';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const BgFrame = () => {
  const progress = useScrollProgress();
  return (
    <div className="bg-container">
      <h1>{siteData.title.toUpperCase()}</h1>
      <span style={{ display: progress >= 60 ? 'block' : 'none' }}>
        {siteData.contact}
      </span>
    </div>
  );
};

export default BgFrame;
