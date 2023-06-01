// export const theme = {
//   colors: {
//     white: "#fff",
//     black: "#000",
//     red: "#fc030b",
//     blue: "#1225cc",
//     orange: "orange",
//     bgBody: "#202020",
//   },
//   space: ["auto", 0, 4, 8, 16, 32, 64, 128, 256, 512],
//   fontSizes: {
//     xs: 12,
//     s: 14,
//     m: 16,
//     ml: 24,
//     l: 32,
//     xl: 64,
//   },
//   sizes: {
//     normal: "100%",
//     container: 1200,
//     intro: 480,
//   },
//   fonts: {
//     body: "Roboto, sans- serif",
//     monospace: "Menlo, monospace",
//   },
//   shadows: {
//     boxShadows: "3px 3px 10px 5px #A9A9A9",
//     textShadow: "0 1px 1px #2d2020",
//   },
// };

import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#202020",
  textColor: "#fff",
};

export const lightTheme = {
  body: "#fff",
  textColor: "#000",
};

export const GlobalStyles = createGlobalStyle`
 body {
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.textColor};
  transition: .3s ease;
 }
`;
