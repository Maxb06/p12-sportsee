import { apiService } from './api';
import { mockService } from './mockService';

const useMock = true;  // false pour api

export const dataFactory = useMock ? mockService : apiService;
