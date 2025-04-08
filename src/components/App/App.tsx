import './App.css';
import FrameContainer from '../FrameContainer/FrameContainer';
import Logo from '../Logo/Logo';
import Header from '../Header/Header';
import { useRef } from 'react';
import ScrollTracker from '../ScrollTracker/ScrollTracker';

const App = () => {
  const frameRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollTracker targetRef={frameRef}>
      <div className="app">
        <Header />
        <Logo />
        <FrameContainer ref={frameRef} />
      </div>
    </ScrollTracker>
  );
};

export default App;
