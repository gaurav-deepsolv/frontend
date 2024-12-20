import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const fetchContents = async () => {
  const response = await axios.get(`${API_BASE_URL}/content/`);
  return response.data;
};
