import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/righteous";
import GlobalStyle from "./styles/GlobalStyle";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/theme";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={appRouter}></RouterProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
