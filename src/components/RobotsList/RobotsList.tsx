import { RobotStructure } from "../../types";
import RobotCard from "../RobotCard/RobotCard";
import RobotsListStyled from "./RobotsListStyled";

interface RobotsListProps {
  robots: RobotStructure[];
}

const RobotList = ({ robots }: RobotsListProps): JSX.Element => {
  return (
    <RobotsListStyled>
      <h2 className="robotList-title">Our Robots</h2>
      <ul className="robots-list">
        {robots.map((robot) => (
          <li className="robotList-card" key={robot.id}>
            <RobotCard robot={robot} />
          </li>
        ))}
      </ul>
    </RobotsListStyled>
  );
};

export default RobotList;
