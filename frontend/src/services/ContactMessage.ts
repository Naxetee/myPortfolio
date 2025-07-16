import axios from "axios";
import { ContactMessage, NewContactMessage } from '../types/ContactMessage';
import { API_BASE_URL } from '../config';

export const sendContactMessage = async (messageData: NewContactMessage) => {
  const response = await axios.post<ContactMessage>(`${API_BASE_URL}/contact-messages/`, messageData);
  return response.data;
};

export const getContactMessages = async () => {
  const response = await axios.get<ContactMessage[]>(`${API_BASE_URL}/contact-messages/`);
  return response.data;
};
