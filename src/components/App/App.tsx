import { robotsMock } from "../../mocks/robotsMock";
import RobotCard from "../RobotCard/RobotCard";
import Header from "../Header/Header";
import { useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useAppDispatch } from "../../store";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";

const App = (): JSX.Element => {
  const { getRobots } = useApi();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const movies = await getRobots();
      dispatch(loadRobotsActionCreator(movies));
    })();
  }, [dispatch, getRobots]);
  return (
    <>
      <Header />
      <div className="container">
        <RobotCard robot={robotsMock[0]}></RobotCard>
        <RobotCard robot={robotsMock[1]}></RobotCard>
      </div>
    </>
  );
};

export default App;
