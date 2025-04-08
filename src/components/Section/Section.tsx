import './Section.css';

type SectionProps = {
  sectionName: string;
};

const Section = ({ sectionName }: SectionProps) => {
  return (
    <section className="section">
      <h1 className="section-title">{sectionName.toUpperCase()}</h1>
    </section>
  );
};

export default Section;
