import axios from "axios";
import { ContactMessage, NewContactMessage } from '../types/ContactMessage';

const API_BASE_URL = "http://localhost:8000/api";

export const getProjects = async () => {
  const response = await axios.get(`${API_BASE_URL}/projects/`);
  return response.data;
};

export const getAbout = async () => {
  const response = await axios.get(`${API_BASE_URL}/about/`);
  return response.data;
};

export const sendContactMessage = async (messageData: NewContactMessage) => {
  const response = await axios.post<ContactMessage>(`${API_BASE_URL}/contact-messages/`, messageData);
  return response.data;
};

export const getContactMessages = async () => {
  const response = await axios.get<ContactMessage[]>(`${API_BASE_URL}/contact-messages/`);
  return response.data;
};
