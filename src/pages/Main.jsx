import styled from "styled-components";
import cvData from "../../cv_data/data";
import SectionItem from "../components/SectionItem";

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

const Section = styled.section``;

const SectionTitle = styled.h3`
  margin-bottom: 1.2rem;
  color: var(--color-brand-700);
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
        <h3>About Me</h3>
        <p>{cvData.aboutMe}</p>
      </AboutMe>

      <Section>
        <SectionTitle>Work Experience</SectionTitle>
        {cvData.experiences.map((ex) => (
          <SectionItem key={ex.title} edu={ex} />
        ))}
      </Section>

      <Section>
        <SectionTitle>Education</SectionTitle>
        {cvData.education.map((edu) => (
          <SectionItem key={edu.title} edu={edu} />
        ))}
      </Section>

      <Section>
        <SectionTitle>Public Projects</SectionTitle>
        {cvData.publicProjects.map((pub) => (
          <SectionItem key={pub.title} edu={pub} />
        ))}
      </Section>

      <Section>
        <SectionTitle>Skills</SectionTitle>
        {cvData.skills.map((skill) => (
          <SectionItem key={skill.title} edu={skill} />
        ))}
      </Section>

      <Section>
        <SectionTitle>Interests</SectionTitle>
        {cvData.interests.map((int) => (
          <SectionItem key={int.id} edu={int} />
        ))}
      </Section>
    </main>
  );
}

export default Main;
