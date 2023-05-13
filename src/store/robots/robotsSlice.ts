import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RobotStructure } from "../../types";

export interface RobotsState {
  robots: RobotStructure[];
}

const initialRobotsState: RobotsState = {
  robots: [],
};

export const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobotsState,
  reducers: {
    loadRobots: (
      currentState,
      action: PayloadAction<RobotStructure[]>
    ): RobotsState => ({
      ...currentState,
      robots: [...action.payload],
    }),
  },
});

export const { loadRobots } = robotsSlice.actions;
export const robotsReducer = robotsSlice.reducer;
