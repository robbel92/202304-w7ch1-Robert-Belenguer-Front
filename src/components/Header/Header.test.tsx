import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";

describe("Given a Header component", () => {
  describe("When it was rendered", () => {
    test("Then it should show a heading with the text 'The best robots'", () => {
      render(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      );

      const headingExpected = screen.getByRole("heading", {
        name: "The Best Robots",
        level: 1,
      });

      expect(headingExpected).toBeInTheDocument();
    });
  });
});
