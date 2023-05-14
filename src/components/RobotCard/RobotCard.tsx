import { RobotStructure } from "../../types";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: { image, name, speed, strength, creation_date },
}: RobotCardProps): JSX.Element => {
  return (
    <RobotCardStyled>
      <img
        className="robot-image"
        src={image}
        alt={`${name} robot`}
        width={200}
        height={300}
      />
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
