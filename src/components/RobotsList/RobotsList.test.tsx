import { ThemeProvider } from "styled-components";
import { robotsMock } from "../../mocks/robotsMock";
import theme from "../../styles/theme/theme";
import RobotList from "./RobotsList";
import { render, screen } from "@testing-library/react";

describe("Given a RobotList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of robots with one robot named 'R2D2'", () => {
      const expectedName = "R2D2";

      render(
        <ThemeProvider theme={theme}>
          <RobotList robots={robotsMock} />
        </ThemeProvider>
      );

      const robotName = screen.getByRole("heading", {
        name: expectedName,
        level: 3,
      });

      expect(robotName).toBeInTheDocument();
    });
  });
});
