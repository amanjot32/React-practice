// src/services/newsService.ts
import axios from 'axios';
import { Article } from '../models/article';

// const API_KEY = '9811025782404f46bb6cbc6b41342ca1';
const API_KEY = '9160a81ac1714f8d996e6a44c854491d';
const BASE_URL = 'https://newsapi.org/v2';

interface ApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export const getArticles = async (page: number): Promise<{ articles: Article[], totalResults: number }> => {
  try {
    const response = await axios.get<ApiResponse>(`${BASE_URL}/everything?q=keyword&page=${page}&pageSize=20`,
       {
      params: {
        apiKey: API_KEY,
      },
    }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw error;
  } 
};

export const getFilteredArticles = async (category: string, page: number): Promise<{ articles: Article[], totalResults: number }> => {
  const response = await axios.get(`${BASE_URL}/top-headlines?country=in&category=${category}&page=${page}&pageSize=20`, {
    params: {
      apiKey: API_KEY,
    },
  });
  console.log(response.data);
  return response.data;
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
