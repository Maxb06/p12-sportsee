import { apiService } from './apiService';
import { mockService } from './mockService';

const useMock = false;  // false pour api

export const dataFactory = useMock ? mockService : apiService;
