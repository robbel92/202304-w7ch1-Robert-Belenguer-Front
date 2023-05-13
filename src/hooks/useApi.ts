import axios from "axios";
import { useCallback } from "react";

export const apiURL = import.meta.env.VITE_APP_URL;

export const useApi = () => {
  const getRobots = useCallback(async () => {
    const { data: robots } = await axios.get(`${apiURL}robots`);
    return robots;
  }, []);

  return { getRobots };
};
