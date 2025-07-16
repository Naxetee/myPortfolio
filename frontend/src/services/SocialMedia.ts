import axios from "axios";
import { SocialMedia } from "../types/SocialMedia";
import { API_BASE_URL } from '../config';

export const getSocialMedias = async () => {
  const response = await axios.get<SocialMedia[]>(`${API_BASE_URL}/social-media/`);
  return response.data;
};