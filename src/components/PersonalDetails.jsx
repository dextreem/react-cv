import styled from "styled-components";
import { useDarkMode } from "../contexts/DarkModeContext";

const PortraitPicture = styled.img`
  height: 20rem;
`;

const P = styled.p`
  margin-bottom: 2.4rem;
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
          {details.socials.map((s) => (
            <li key={s.name}>
              {s.name}:{" "}
              <a href={s.url}>
                {s.url.replace("https://", "").replace("mailto:", "")}
              </a>
            </li>
          ))}
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
