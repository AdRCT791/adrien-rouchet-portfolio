import { ReactNode, useRef, useEffect } from 'react';
import { useSectionContext } from '../../context/SectionContext';
import './Section.css';
import { useInView } from 'motion/react';

type SectionProps = {
  sectionName: string;
  children?: ReactNode;
};

const Section = ({ sectionName, children }: SectionProps) => {
  const sectionRef = useRef(null);
  const { setActiveSection } = useSectionContext();
  const isInView = useInView(sectionRef, {
    amount: 1,
    once: false,
  });

  useEffect(() => {
    if (isInView) {
      setActiveSection(sectionName);
    } else {
      setActiveSection('');
    }
  }, [isInView, sectionName, setActiveSection]);

  return (
    <section className="section" ref={sectionRef}>
      <h1 className="section-title">{sectionName.toUpperCase()}</h1>
      {children}
    </section>
  );
};

export default Section;
