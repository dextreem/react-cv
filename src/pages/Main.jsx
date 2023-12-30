import styled from "styled-components";
import cvData from "../../cv_data/data";
import Section from "../components/Section";

const PersonalDetails = styled.div`
  display: flex;
  gap: 3.2rem;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2.4rem;
`;

const SocialDetails = styled.div``;

const PortraitPicture = styled.img`
  height: 20rem;
`;

const P = styled.p`
  margin-bottom: 2.4rem;
`;

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
  return (
    <main>
      <PersonalDetails>
        <SocialDetails>
          <h1>{cvData.name}</h1>
          <P>{cvData.address}</P>
          <ul>
            {cvData.socials.map((s) => (
              <li key={s.name}>
                {s.name}: <a href={s.url}>{s.url.replace("https://", "")}</a>
              </li>
            ))}
          </ul>
        </SocialDetails>
        <PortraitPicture
          src={cvData.picture}
          alt={`CV profile picture of ${cvData.name}`}
        ></PortraitPicture>
      </PersonalDetails>

      <AboutMe>
        <AboutMeTitle>About Me</AboutMeTitle>
        <p>{cvData.aboutMe}</p>
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
