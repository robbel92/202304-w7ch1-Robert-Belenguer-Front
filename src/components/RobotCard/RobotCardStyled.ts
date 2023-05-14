import styled from "styled-components";

const RobotCardStyled = styled.article`
  border-radius: 10px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .robot-image {
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .robot-info {
    font-family: inherit;
    border: 2px solid #95969c;
    border-radius: 10px;
    padding: 10px;

    &__name {
      font-weight: 800;
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
    }

    &__items {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default RobotCardStyled;
