import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import Routers from "./routers";
import { theme } from "./theme";
import ReduxProvider from "./redux/store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider>
        <Routers />
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default App;
