import Header from "../Header/Header";
import { useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";
import RobotList from "../RobotsList/RobotsList";
import { robotsMock } from "../../mocks/robotsMock";

const App = (): JSX.Element => {
  const { getRobots } = useApi();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      dispatch(loadRobotsActionCreator(robotsMock));
    })();
  }, [dispatch, getRobots]);

  const { robots } = useAppSelector((state) => state.robotsReducer);
  return (
    <>
      <Header />

      <div className="container">
        <RobotList robots={robots}></RobotList>
      </div>
    </>
  );
};

export default App;
