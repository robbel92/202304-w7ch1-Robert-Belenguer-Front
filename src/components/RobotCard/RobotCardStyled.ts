import styled from "styled-components";

const RobotCardStyled = styled.article`
  border-radius: 10px;

  .robot-image {
    object-fit: cover;
    border-radius: 10px;
  }

  .robot-info {
    font-family: ${(props) => props.theme.fonts.primary_title};
    border: 2px solid #95969c;
    border-radius: 10px;

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
