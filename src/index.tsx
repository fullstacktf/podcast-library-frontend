import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./theme/styles.css";
import { BrowserRouter } from "react-router-dom";

// 🎨 Chakra UI config ->
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";

// 📖 i18next config ->
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_es from "language/es/global.json";
import global_en from "language/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
