import axios from "axios";
import { About } from '../types/About';
import { API_BASE_URL } from '../config';

export const getAbout = async () => {
  const response = await axios.get<About[]>(`${API_BASE_URL}/about/`);
  return response.data;
};