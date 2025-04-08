import { ReactNode } from 'react';
import './Section.css';

type SectionProps = {
  sectionName: string;
  children?: ReactNode;
};

const Section = ({ sectionName, children }: SectionProps) => {
  return (
    <section className="section">
      <h1 className="section-title">{sectionName.toUpperCase()}</h1>
      {children}
    </section>
  );
};

export default Section;
