import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    text: "#797979",
    headerText: "#515C6F",
    primary: "#F9A602"
  },
  fonts: ["sans-serif", "Poppins"]
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
