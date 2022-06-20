import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../style";
import GlobalStyle from "../style/global";
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
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
