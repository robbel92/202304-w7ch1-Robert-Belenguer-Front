import { useState } from "react";
import { UserCreadentials } from "../types";
import LoginFormStyled from "./LoginFormStyled";

interface LoginFormProps {
  actionOnSubmit: (user: UserCreadentials) => void;
}

const LoginForm = ({ actionOnSubmit }: LoginFormProps): JSX.Element => {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const handleLoginFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    actionOnSubmit(userData);
    setUserData({
      username: "",
      password: "",
    });
  };

  return (
    <LoginFormStyled onSubmit={handleLoginFormSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        onChange={onChangeInputs}
        autoComplete="off"
        value={userData.username}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        onChange={onChangeInputs}
        value={userData.password}
      />
      <button
        type="submit"
        disabled={userData.username === "" && userData.password === ""}
        className={
          !userData.username || !userData.password ? "makeDisabled" : ""
        }
      >
        LOGIN
      </button>
    </LoginFormStyled>
  );
};
export default LoginForm;
