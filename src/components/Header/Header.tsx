import { useEffect, useState } from 'react';
import { siteData } from '../../data/content';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import './Header.css';

const Header = () => {
  const progress = useScrollProgress();
  const [hasAnimated, setHasAnimated] = useState(false);
  const title = siteData.title.toUpperCase().split(' ');

  // Set hasAnimated to true once we cross the threshold
  useEffect(() => {
    if (progress >= 20 && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [progress, hasAnimated]);

  // Calculate total characters for staggered animation
  const getTotalIndex = (wordIndex: number, charIndex: number) => {
    const prevWordsLength = title
      .slice(0, wordIndex)
      .reduce((acc, word) => acc + word.length, 0);
    return prevWordsLength + charIndex;
  };
  // Get total length of all characters
  const totalLength = title.reduce((acc, word) => acc + word.length, 0);

  return (
    <div className="header">
      <div className="logo-container">
        {title.map((word, wordIndex) => (
          <span key={wordIndex} className="word">
            {word.split('').map((char, charIndex) => {
              const totalIndex = getTotalIndex(wordIndex, charIndex);
              const reverseIndex = totalLength - totalIndex;
              return (
                <span
                  key={`${wordIndex} - ${charIndex}`}
                  style={{
                    opacity: hasAnimated && charIndex > 0 ? 0 : 1,
                    transition: `opacity 0.1s ease ${reverseIndex * 0.05}s`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        ))}
      </div>
      <span>{Math.round(progress)}%</span>
    </div>
  );
};

export default Header;
