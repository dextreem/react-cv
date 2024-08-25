import styled from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";

const PortraitPicture = styled.img`
  height: 20rem;
`;

const P = styled.p`
  margin-bottom: 2.4rem;
`;

const SocialIcon = styled.span`
  margin-right: 1ch;
`;

const StyledPersonalDetails = styled.div`
  display: flex;
  gap: 3.2rem;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2.4rem;
`;

function PersonalDetails({ details }) {
  const { isDarkMode } = useDarkMode();

  return (
    <StyledPersonalDetails>
      <div>
        <h1>{details.name}</h1>
        <P>{details.address}</P>
        <ul>
          {details.socials.map((s) => {
            const socialRef = (
              <a href={s.url}>
                {s.shortUrl
                  ? s.url.split("/").at(-1)
                  : s.url.replace("https://", "").replace("mailto:", "")}
              </a>
            );
            return (
              <li key={s.name}>
                {s.icon ? (
                  <SocialIcon>{s.icon}</SocialIcon>
                ) : (
                  <span>{s.name}</span>
                )}
                {socialRef}
              </li>
            );
          })}
        </ul>
      </div>
      <PortraitPicture
        src={details.picture.replace(
          "_xlayoutx",
          isDarkMode ? "_dark" : "_light"
        )}
        alt={`CV profile picture of ${details.name}`}
      ></PortraitPicture>
    </StyledPersonalDetails>
  );
}

export default PersonalDetails;
