import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
