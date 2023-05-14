import { robotsMock } from "../../mocks/robotsMock";
import RobotCard from "../RobotCard/RobotCard";
import Header from "../Header/Header";

const App = (): JSX.Element => {
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
