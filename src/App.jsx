import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";
import Main from "./pages/Main";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="main" element={<Main />} />
          <Route path="*" element={<Navigate replace to="main" />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
