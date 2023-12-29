import { DarkModeProvider } from "./contexts/DarkModeContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
    </DarkModeProvider>
  );
}

export default App;
