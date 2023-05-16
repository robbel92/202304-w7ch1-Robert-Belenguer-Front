import styled from "styled-components";

const LoginFormStyled = styled.form`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;

  button {
    box-shadow: 3px 4px 0px 0px #899599;
    background-color: transparent;
    margin: 10px;
    border-radius: 15px;
    border: 1px solid #d6bcd6;
    display: inline-block;
    cursor: pointer;
    color: #121414;
    font-family: Arial;
    font-size: 17px;
    font-weight: bold;
    padding: 7px 25px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #e1e2ed;
  }
  button:hover {
    background-color: transparent;
  }
  button:active {
    position: relative;
    top: 1px;
  }
  .makeDisabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
export default LoginFormStyled;
