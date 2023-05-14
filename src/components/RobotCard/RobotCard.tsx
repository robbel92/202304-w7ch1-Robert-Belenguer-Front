import { RobotStructure } from "../../types";
import RobotCardStyled from "./RobotCardStyled";

interface robotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: { image, name, speed, strength, creation_date },
}: robotCardProps): JSX.Element => {
  return (
    <RobotCardStyled>
      <img className="robot-image" src={image} alt={`${name} robot`} />
      <section className="robot-info">
        <h3 className="robot-info__name">{name}</h3>
        <div className="robot-info__items">
          <span>Speed: {speed}</span>
          <span>Strength: {strength}</span>
          <span>Creation date: {creation_date}</span>
        </div>
      </section>
    </RobotCardStyled>
  );
};

export default RobotCard;
