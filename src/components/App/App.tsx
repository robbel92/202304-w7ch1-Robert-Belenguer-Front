import { useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import Header from "../Header/Header";
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
      <Header></Header>
      <div className="container"></div>
    </>
  );
};

export default App;
