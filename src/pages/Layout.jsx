import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DarkModeToggle from "../components/DarkModeToggle";

const StyledLayout = styled.div`
  display: grid;
  position: relative;
  height: 100vh;
`;

const AppContent = styled.div`
  grid-template-rows: 8rem 1fr 4rem;
  margin: 4.8rem 3.6rem;
`;

const DarkModeButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 1rem;
  z-index: 99;
`;

function Layout() {
  return (
    <StyledLayout>
      <DarkModeButton>
        <DarkModeToggle />
      </DarkModeButton>

      <AppContent>
        <Outlet />
      </AppContent>
    </StyledLayout>
  );
}

export default Layout;
