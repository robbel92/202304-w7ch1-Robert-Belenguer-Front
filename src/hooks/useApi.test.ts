import { robotsmock } from "../mocks/robotsMock";
import { renderHook } from "@testing-library/react";
import { useApi } from "./useApi";

describe("Given a getRobots function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of robots", async () => {
      const expectedListOfRobots = robotsmock;

      const {
        result: {
          current: { getRobots },
        },
      } = renderHook(() => useApi());

      const robots = await getRobots();

      expect(robots).toStrictEqual(expectedListOfRobots);
    });
  });
});
