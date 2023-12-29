import styled from "styled-components";
import cvData from "../../cv_data/data";
import EducationItem from "../components/EducationItem";

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

const A = styled.a`
  cursor: pointer;
  color: var(--color-grey-500);
  text-decoration: underline;
  text-decoration-style: dotted;
`;

const AboutMe = styled.section`
  margin-bottom: 2.4rem;
`;

const Education = styled.section``;

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
                {s.name}: <A href={s.url}>{s.url.replace("https://", "")}</A>
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

      <Education>
        <h3>Education</h3>
        {cvData.education.map((edu) => (
          <EducationItem edu={edu} />
        ))}
      </Education>
    </main>
  );
}

export default Main;
