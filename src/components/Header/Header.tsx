import { useEffect, useState } from 'react';
import { useScrollContext } from '../../context/ScrollContext';
import { siteData } from '../../data/content';
import './Header.css';

const Header = () => {
  const { scrollProgress } = useScrollContext();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollProgress.on('change', (v) => {
      setProgress(v * 100);
    });

    return () => unsubscribe();
  }, [scrollProgress]);

  return (
    <div className="header">
      <span>{siteData.copyright}</span>
      <span>{Math.round(progress)}%</span>
    </div>
  );
};

export default Header;
