import LoginForm from "../../LoginForm/LoginForm";
import useUser from "../../hooks/useUser/useUser";
import { UserCreadentials } from "../../types";

const LoginFormPage = (): JSX.Element => {
  const { getUserToken } = useUser();

  const handleOnSubmitForm = async (user: UserCreadentials) => {
    await getUserToken(user);
  };
  return <LoginForm actionOnSubmit={handleOnSubmitForm}></LoginForm>;
};

export default LoginFormPage;
