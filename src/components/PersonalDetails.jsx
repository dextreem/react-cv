import styled from "styled-components";

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
  return (
    <StyledPersonalDetails>
      <div>
        <h1>{details.name}</h1>
        <P>{details.address}</P>
        <ul>
          {details.socials.map((s) => (
            <li key={s.name}>
              {s.name}: <a href={s.url}>{s.url.replace("https://", "")}</a>
            </li>
          ))}
        </ul>
      </div>
      <PortraitPicture
        src={details.picture}
        alt={`CV profile picture of ${details.name}`}
      ></PortraitPicture>
    </StyledPersonalDetails>
  );
}

export default PersonalDetails;