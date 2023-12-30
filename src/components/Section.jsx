import styled from "styled-components";
import SectionItem from "./SectionItem";

const SectionTitle = styled.h3`
  margin-bottom: 1.2rem;
  color: var(--color-brand-700);
`;

function Section({ data }) {
  return (
    <section>
      <SectionTitle>{data.name}</SectionTitle>
      {data.content.map((d) => {
        return <SectionItem key={d.title || d.id} edu={d} />;
      })}
    </section>
  );
}

export default Section;
