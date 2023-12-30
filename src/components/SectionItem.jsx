import styled from "styled-components";

const StyledSectionItem = styled.div`
  margin-bottom: 1.8rem;
`;

const SideBySide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
`;

const DateRange = styled.p`
  color: var(--color-grey-400);
  font-weight: 400;
  font-size: 1.6rem;
`;

const Where = styled.p`
  color: var(--color-grey-600);
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
`;

const Ul = styled.ul`
  list-style-type: circle;
  margin-left: 3.6rem;
`;

function SectionItem({ edu }) {
  return (
    <StyledSectionItem>
      <SideBySide>
        <h4>
          {edu.title} {edu.subTitle && `- ${edu.subTitle}`}
        </h4>
        <DateRange>
          <em>{edu.when}</em>
        </DateRange>
      </SideBySide>
      <Where>
        <em>{edu.where}</em>
      </Where>
      {edu.info.length === 1 && <p>{edu.info[0]}</p>}

      {edu.info.length > 1 && (
        <Ul>
          {edu.info.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </Ul>
      )}
    </StyledSectionItem>
  );
}

export default SectionItem;
