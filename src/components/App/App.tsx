import Header from "../Header/Header";
import { useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useAppDispatch } from "../../store";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";
import RobotList from "../RobotsList/RobotsList";
import { robotsMock } from "../../mocks/robotsMock";

const App = (): JSX.Element => {
  const { getRobots } = useApi();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const robots = await getRobots();
      dispatch(loadRobotsActionCreator(robots));
    })();
  }, [dispatch, getRobots]);
  return (
    <>
      <Header />
      <div className="container">
        <RobotList robots={robotsMock}></RobotList>
      </div>
    </>
  );
};

export default App;
