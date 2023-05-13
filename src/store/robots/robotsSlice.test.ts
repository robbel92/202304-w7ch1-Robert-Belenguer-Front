import { robotsmock } from "../../mocks/robotsMock";
import { RobotStructure } from "../../types";
import {
  RobotsState,
  loadRobotsActionCreator,
  robotsReducer,
} from "./robotsSlice";

describe("Given a loadRobots reducer", () => {
  describe("When it receives an empty list of robots and a load tasks action with two robots", () => {
    test("Then it should return the list with two robots", () => {
      const currentRobots: RobotStructure[] = [];

      const currentRobotState: RobotsState = {
        robots: currentRobots,
      };

      const loadRobotsAction = loadRobotsActionCreator(robotsmock);

      const expectedNewRobotsState: RobotsState = {
        ...currentRobotState,
        robots: robotsmock,
      };

      const newState: RobotsState = robotsReducer(
        currentRobotState,
        loadRobotsAction
      );

      expect(expectedNewRobotsState).toStrictEqual(newState);
    });
  });
});
