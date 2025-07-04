import axios from "axios";
import { ContactMessage, NewContactMessage } from '../types/ContactMessage';
import { Project } from '../types/Project';
import { About } from '../types/About';
import { API_BASE_URL } from '../config';

export const getProjects = async () => {
  const response = await axios.get<Project>(`${API_BASE_URL}/projects/`);
  return response.data;
};

export const getAbout = async () => {
  const response = await axios.get<About>(`${API_BASE_URL}/about/`);
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
