import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";
import { apiURL } from "../useApi";
import { User } from "../../types";

export const useUser = () => {
  const getUserToken = useCallback(async (user: User) => {
    const {
      data: { token },
    } = await axios.post<string, AxiosResponse<{ token: string }>>(
      `${apiURL}login`,
      { username: user.username, password: user.password }
    );
    return token;
  }, []);
  return { getUserToken };
};

export default useUser;
