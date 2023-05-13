import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    fonts: {
      primary_title: string;
    };
  }
}

export default DefaultTheme;
