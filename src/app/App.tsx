import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../style";
import { AppRouter } from "./routes";

function App() {
  // prop destruction

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
