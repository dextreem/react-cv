import styled from "styled-components";
import cvData from "../../public/cv_data/data";
import Section from "../components/Section";
import PersonalDetails from "../components/PersonalDetails";

const AboutMe = styled.section`
  margin-bottom: 2.4rem;
`;

const AboutMeTitle = styled.h3`
  margin-bottom: 1.2rem;
  color: var(--color-brand-700);
`;

const Sections = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 2rem;
`;

function Main() {
  document.title = cvData.name + " - CV";
  return (
    <main>
      <PersonalDetails details={cvData} />

      <AboutMe>
        <AboutMeTitle>{cvData.aboutMe.title || "About Me"}</AboutMeTitle>
        <p>{cvData.aboutMe.text}</p>
      </AboutMe>

      <Sections>
        {cvData.sections.map((s) => (
          <Section key={s.name} data={s} />
        ))}
      </Sections>
    </main>
  );
}

export default Main;
