import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const fetchCompetitors = async () => {
  const response = await axios.get(`${API_BASE_URL}/competitors/`);
  return response.data;
};

export const addCompetitor = async (username) => {
  const response = await axios.post(`${API_BASE_URL}/competitors/`, {
    usernames: [username],
    watch: true,
  });
  return response.data;
};
