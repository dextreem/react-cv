import styled from "styled-components";

const StyledEducationItem = styled.div`
  margin-bottom: 1.2rem;
`;

function EducationItem({ edu }) {
  return (
    <StyledEducationItem>
      <h4>{edu.title}</h4>
      <h5>{edu.subTitle}</h5>
      <p>{edu.where}</p>
      <p>{edu.when}</p>
    </StyledEducationItem>
  );
}

export default EducationItem;
