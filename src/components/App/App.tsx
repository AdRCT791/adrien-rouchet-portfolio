import './App.css';
import FrameContainer from '../FrameContainer/FrameContainer';
import BgFrame from '../BgFrame/BgFrame';
import Header from '../Header/Header';
import { useEffect, useRef, useState } from 'react';
import ScrollTracker from '../ScrollTracker/ScrollTracker';
import { AnimatePresence } from 'motion/react';
import PreviewPopUp from '../PreviewPopUp/PreviewPopUp';
import { SectionContext } from '../../context/SectionContext';

const App = () => {
  const frameRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    console.log('Active Section:', activeSection);
  }, [activeSection]);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      <ScrollTracker targetRef={frameRef}>
        <div className="app">
          <Header />
          <BgFrame />
          <AnimatePresence mode="wait">
            {activeSection === 'works' && <PreviewPopUp />}
          </AnimatePresence>
          <FrameContainer ref={frameRef} />
        </div>
      </ScrollTracker>
    </SectionContext.Provider>
  );
};

export default App;
