import { useEffect } from "react";
import RobotList from "../../components/RobotsList/RobotsList";
import { robotsMock } from "../../mocks/robotsMock";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";
import { useApi } from "../../hooks/useApi";

const RobotsPage = (): JSX.Element => {
  const { getRobots } = useApi();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(loadRobotsActionCreator(robotsMock));
    })();
  }, [dispatch, getRobots]);

  const { robots } = useAppSelector((state) => state.robotsReducer);

  return <RobotList robots={robots}></RobotList>;
};

export default RobotsPage;
