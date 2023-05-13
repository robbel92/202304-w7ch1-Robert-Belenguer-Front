import styled from "styled-components";

const HeaderStyled = styled.header`
  font-family: ${(props) => props.theme.fonts.primary_title};
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #95969c;
  color: white;

  .title {
    font-size: 4rem;
  }
`;
export default HeaderStyled;
