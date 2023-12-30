import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../contexts/DarkModeContext";
import ButtonIcon from "./ButtonIcon";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: right;
  position: absolute;
  right: 5rem;
  top: 0;

  gap: 1.2rem;
`;

const Img = styled.img`
  height: 2.2rem;
`;

const CenteredSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

function Header() {
  const { isDarkMode } = useDarkMode();

  return (
    <StyledHeader>
      <ButtonIcon
        onClick={() =>
          window.open("https://github.com/dextreem/react-cv", "_blank")
        }
      >
        <CenteredSpan>
          <span>View on</span>
          {isDarkMode ? (
            <Img src="/github-mark-white.svg" alt="GitHub Logo" />
          ) : (
            <Img src="/github-mark.svg" alt="GitHub Logo" />
          )}
        </CenteredSpan>
      </ButtonIcon>

      <div>
        <DarkModeToggle />
      </div>
    </StyledHeader>
  );
}

export default Header;
