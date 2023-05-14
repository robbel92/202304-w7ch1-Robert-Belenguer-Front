import { render, screen } from "@testing-library/react";
import { robotsMock } from "../../mocks/robotsMock";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import RobotCard from "./RobotCard";

describe("Given a RobortCard component", () => {
  describe("When it received a robot with the name 'R2D2'", () => {
    test("Then it should show a heading with the name 'R2D2'", () => {
      const expectedName = robotsMock[0].name;

      render(
        <ThemeProvider theme={theme}>
          <RobotCard robot={robotsMock[0]} />
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
