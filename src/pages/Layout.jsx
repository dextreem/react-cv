import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";

const StyledLayout = styled.div`
  display: grid;
  height: 100vh;
  width: 600pt;

  margin: 0 auto;
`;

const AppContent = styled.div`
  grid-template-rows: 8rem 1fr 4rem;
  margin: 4.8rem 3.6rem;
`;

function Layout() {
  return (
    <StyledLayout>
      <AppContent>
        <Header />
        <Outlet />
      </AppContent>
    </StyledLayout>
  );
}

export default Layout;
