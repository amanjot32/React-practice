// src/services/newsService.ts
import axios from 'axios';
import { Article } from '../models/article';

const API_KEY = '9811025782404f46bb6cbc6b41342ca1';
const BASE_URL = 'https://newsapi.org/v2';

interface ApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export const getArticles = async (q: string = 'keyword'): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}/everything`, {
      params: {
        q,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw error;
  }
};

export const searchNews = async (query: string): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}/everything`, {
      params: {
        q: query,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching news:', error);
    throw error;
  }
};
